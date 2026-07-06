import { site } from '../data/site'

export default function RotatingBadge({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 200 200"
        className="h-full w-full animate-[spin_24s_linear_infinite] select-none motion-reduce:animate-none"
      >
        <defs>
          <path
            id="badge-circle"
            d="M 100,100 m -80,0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
            fill="none"
          />
        </defs>
        <text fontSize="16" letterSpacing="2.75" fontWeight="500">
          <textPath href="#badge-circle">
            <tspan fill="var(--color-ink)">Atefeh Etemadipour, </tspan>
            <tspan fill="var(--color-accent)">crafting memorable design</tspan>
          </textPath>
        </text>
      </svg>
      <img
        src={site.logo.src}
        alt=""
        className="absolute top-1/2 left-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  )
}
