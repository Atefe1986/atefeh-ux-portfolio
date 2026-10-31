import { useRef, useState } from 'react'
import type { ProjectImage } from '../data/projects'

interface ImageCarouselProps {
  images: ProjectImage[]
  label: string
}

export default function ImageCarousel({ images, label }: ImageCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  const last = images.length - 1

  const goTo = (target: number) => {
    const track = trackRef.current
    if (!track) return
    const next = Math.max(0, Math.min(last, target))
    track.scrollTo({ left: next * track.clientWidth, behavior: 'smooth' })
  }

  // Keep the counter and dots in sync with swipes and button scrolls
  const handleScroll = () => {
    const track = trackRef.current
    if (!track) return
    setIndex(Math.round(track.scrollLeft / track.clientWidth))
  }

  const arrowClass =
    'absolute top-1/2 hidden h-11 w-11 sm:flex -translate-y-1/2 items-center justify-center rounded-full border border-line bg-paper/90 text-ink shadow-md backdrop-blur transition-colors hover:border-accent hover:text-accent disabled:pointer-events-none disabled:opacity-0'

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      className="mx-auto mt-8 max-w-xl"
      onKeyDown={(event) => {
        if (event.key === 'ArrowRight') goTo(index + 1)
        if (event.key === 'ArrowLeft') goTo(index - 1)
      }}
    >
      <div className="relative">
        <div
          ref={trackRef}
          onScroll={handleScroll}
          tabIndex={0}
          className="flex snap-x snap-mandatory overflow-x-auto rounded-xl shadow-[0_16px_40px_rgba(25,28,31,0.14)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {images.map((image, i) => (
            <div
              key={image.src}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${i + 1} of ${images.length}`}
              className="w-full shrink-0 snap-center"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                draggable={false}
                className="aspect-square w-full bg-surface object-cover"
              />
            </div>
          ))}
        </div>

        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => goTo(index - 1)}
          disabled={index === 0}
          className={`${arrowClass} left-3`}
        >
          <span aria-hidden="true">←</span>
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => goTo(index + 1)}
          disabled={index === last}
          className={`${arrowClass} right-3`}
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>

      <div className="mt-5 flex items-center justify-center gap-4">
        <div className="flex items-center gap-2">
          {images.map((image, i) => (
            <button
              key={image.src}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? 'w-6 bg-accent' : 'w-2 bg-line hover:bg-ink-faint'
              }`}
            />
          ))}
        </div>
        <p className="text-xs font-semibold tracking-[0.18em] text-ink-faint" aria-live="polite">
          {index + 1} / {images.length}
        </p>
      </div>
      {images[index]?.caption && (
        <p className="mt-3 text-center text-sm leading-relaxed text-ink-faint">
          {images[index].caption}
        </p>
      )}
    </div>
  )
}
