import { SITE } from '../siteConfig'
import { LinkedInIcon, GitHubIcon, DownloadIcon, ArrowUpRightIcon } from './Icons'
import { useLanguage } from '../language'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section id="home" className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28 lg:pt-52 lg:pb-32">
      {/* Subtle decorative accents — kept faint and purely ornamental */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-secondary/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -left-28 h-64 w-64 rounded-full bg-primary/5 blur-3xl"
      />

      <div className="section-container relative grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="max-w-2xl">
          <p className="eyebrow mb-5">{t.hero.eyebrow}</p>

          <h1 className="text-4xl sm:text-hero-sm lg:text-hero font-extrabold text-ink">
            Abdullah Alsulami
          </h1>

          <p className="mt-6 text-lg sm:text-xl font-medium text-primary">
            {t.hero.tagline}
          </p>

          <p className="mt-5 text-[17px] leading-relaxed text-muted max-w-xl">
            {t.hero.description}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-primary">
              {t.hero.projects}
            </a>
            <a href={SITE.cvPath} download className="btn-secondary">
              <DownloadIcon className="h-4 w-4" />
              {t.hero.cv}
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.hero.linkedin}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted transition-colors duration-200 ease-smooth hover:border-primary hover:text-primary"
            >
              <LinkedInIcon className="h-[18px] w-[18px]" />
            </a>
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.hero.github}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted transition-colors duration-200 ease-smooth hover:border-primary hover:text-primary"
            >
              <GitHubIcon className="h-[18px] w-[18px]" />
            </a>
          </div>
        </div>

        {/* Decorative summary panel */}
        <div className="relative hidden lg:block" aria-hidden="true">
          <div className="card p-8 max-w-sm ml-auto">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-muted">{t.hero.focus}</p>
            <ul className="mt-5 space-y-4">
              {t.hero.areas.map(([title, desc]) => (
                <li key={title} className="flex items-start gap-3 border-t border-line pt-4 first:border-t-0 first:pt-0">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <div>
                    <p className="text-[15px] font-semibold text-ink">{title}</p>
                    <p className="text-sm text-muted mt-0.5">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="card absolute -bottom-8 -left-8 flex items-center gap-3 px-5 py-4 shadow-card">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <ArrowUpRightIcon className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-semibold text-ink">4.88 / 5.00</p>
              <p className="text-xs text-muted">{t.hero.gpa}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
