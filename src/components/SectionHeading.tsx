interface SectionHeadingProps {
  kicker: string
  title: string
  id?: string
}

export default function SectionHeading({ kicker, title, id }: SectionHeadingProps) {
  return (
    <div id={id} className="mb-12 scroll-mt-28">
      <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-accent uppercase">
        {kicker}
      </p>
      <h2 className="font-display text-3xl font-medium tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
    </div>
  )
}
