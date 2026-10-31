import { useLayoutEffect, useRef, useState } from 'react'
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion'
import type { ProjectImage } from '../data/projects'

interface ScrollStackProps {
  images: ProjectImage[]
  label: string
  /** Width ÷ height of every image in the stack */
  aspectRatio?: number
}

/** Never pin closer to the top than this, so the sticky nav stays clear */
const MIN_PIN_TOP = 88
/** How much page scroll each new slide takes to rise into place */
const SCROLL_PER_SLIDE = '45vh'

const slideClass =
  'absolute inset-0 h-full w-full rounded-xl border border-line bg-surface object-cover shadow-[0_16px_40px_rgba(25,28,31,0.18)]'

/**
 * Pins the first slide while the page scrolls; each following slide rises
 * up and stacks on top of the one before it.
 */
export default function ScrollStack({ images, label, aspectRatio = 1 }: ScrollStackProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const [active, setActive] = useState(0)
  const [panelHeight, setPanelHeight] = useState(0)
  const [viewportHeight, setViewportHeight] = useState(() => window.innerHeight)
  // Pin the panel in the vertical middle of the screen, so the space above and below it is balanced
  const pinTop = Math.max(MIN_PIN_TOP, Math.round((viewportHeight - panelHeight) / 2))
  const steps = images.length - 1

  // The pinned panel is only as tall as its content, so no empty space is left
  // above or below it — the container adds just the scroll room for the slides.
  useLayoutEffect(() => {
    const panel = panelRef.current
    if (!panel) return
    const observer = new ResizeObserver(() => setPanelHeight(panel.offsetHeight))
    observer.observe(panel)
    const onResize = () => setViewportHeight(window.innerHeight)
    window.addEventListener('resize', onResize)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', onResize)
    }
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: [`start ${pinTop}px`, `end ${pinTop + panelHeight}px`],
  })

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    setActive(Math.min(steps, Math.max(0, Math.round(value * steps))))
  })

  // Without motion, simply list the slides one after another
  if (reduceMotion) {
    return (
      <div className="mt-8 grid gap-8">
        {images.map((image) => (
          <figure key={image.src} className="m-0">
            <img src={image.src} alt={image.alt} loading="lazy" className="w-full rounded-xl" />
            {image.caption && (
              <figcaption className="mt-3 text-sm leading-relaxed text-ink-faint">{image.caption}</figcaption>
            )}
          </figure>
        ))}
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      role="region"
      aria-label={label}
      className="relative mt-8"
      style={{ height: `calc(${panelHeight}px + ${steps} * ${SCROLL_PER_SLIDE})` }}
    >
      <div
        ref={panelRef}
        className="sticky flex flex-col items-center gap-4 overflow-hidden px-2 pt-1 pb-2"
        style={{ top: pinTop }}
      >
        <div
          className="relative"
          style={{
            aspectRatio,
            // As wide as the column allows, but always short enough to fit on screen
            width: `min(100%, calc((100vh - ${MIN_PIN_TOP}px - 8rem) * ${aspectRatio}))`,
          }}
        >
          {images.map((image, i) => (
            <StackSlide
              key={image.src}
              image={image}
              index={i}
              steps={steps}
              progress={scrollYProgress}
            />
          ))}
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2" aria-hidden="true">
            {images.map((image, i) => (
              <span
                key={image.src}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active ? 'w-6 bg-accent' : i < active ? 'w-2 bg-accent/40' : 'w-2 bg-line'
                }`}
              />
            ))}
          </div>
          <p className="text-xs font-semibold tracking-[0.18em] text-ink-faint" aria-live="polite">
            {active + 1} / {images.length}
          </p>
        </div>
        {/* Fixed height so changing captions never resize the pinned panel */}
        <p className="flex min-h-[2.75rem] max-w-2xl items-start justify-center text-center text-sm leading-relaxed text-ink-faint">
          {images[active]?.caption}
        </p>
      </div>
    </div>
  )
}

interface StackSlideProps {
  image: ProjectImage
  index: number
  steps: number
  progress: MotionValue<number>
}

function StackSlide({ image, index, steps, progress }: StackSlideProps) {
  // Slide `index` rises from just below the frame during its own step of the scroll…
  const enterStart = (index - 1) / steps
  const enterEnd = index / steps
  const y = useTransform(progress, [enterStart, enterEnd], ['100%', '0%'])
  // …fading in as it starts, so waiting slides stay hidden
  const fadeIn = useTransform(progress, [enterStart, enterStart + 0.3 / steps], [0, 1])
  // …and the slide underneath settles back slightly while it is covered
  const leaveEnd = Math.min(1, (index + 1) / steps)
  const scale = useTransform(progress, [enterEnd, leaveEnd], [1, 0.95])
  const dim = useTransform(progress, [enterEnd, leaveEnd], [1, 0.6])

  const isFirst = index === 0
  const isLast = index === steps

  return (
    <motion.div className="absolute inset-0" style={{ opacity: isFirst ? 1 : fadeIn, zIndex: index }}>
      <motion.img
        src={image.src}
        alt={image.alt}
        draggable={false}
        className={slideClass}
        style={{
          y: isFirst ? 0 : y,
          scale: isLast ? 1 : scale,
          opacity: isLast ? 1 : dim,
        }}
      />
    </motion.div>
  )
}
