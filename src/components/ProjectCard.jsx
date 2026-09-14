import { GitHubIcon, ArrowUpRightIcon } from './Icons'

export function CodeProjectCard({ title, description, linkLabel, href }) {
  return (
    <div className="card p-8 h-full flex flex-col hover:shadow-card-hover">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
        <GitHubIcon className="h-5 w-5" />
      </div>

      <h3 className="mt-6 text-xl font-bold text-ink">{title}</h3>
      <p className="mt-3 text-[16px] leading-relaxed text-muted flex-1">{description}</p>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary mt-7 self-start"
        aria-label={`${linkLabel}: ${title} (opens in a new tab)`}
      >
        <GitHubIcon className="h-4 w-4" />
        {linkLabel}
      </a>
    </div>
  )
}

export function DashboardProjectCard({ title, description, linkLabel, href, image, imageAlt, reverse }) {
  return (
    <div className="card overflow-hidden">
      <div
        className={`flex flex-col lg:flex-row ${reverse ? 'lg:flex-row-reverse' : ''} lg:items-stretch`}
      >
        <div className="lg:w-[52%] p-4 sm:p-5">
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            width={1600}
            height={900}
            className="w-full aspect-video rounded-2xl border border-line bg-background shadow-soft object-contain"
          />
        </div>

        <div className="flex-1 flex flex-col justify-center p-7 sm:p-9 lg:p-10">
          <h3 className="text-xl sm:text-subheading font-bold text-ink">{title}</h3>
          <p className="mt-3 text-[16px] leading-relaxed text-muted">{description}</p>

          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-7 self-start"
            aria-label={`${linkLabel}: ${title} (opens in a new tab)`}
          >
            {linkLabel}
            <ArrowUpRightIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  )
}
