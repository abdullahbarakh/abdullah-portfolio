import { SITE } from '../siteConfig'
import { MailIcon, LinkedInIcon, GitHubIcon, ArrowUpRightIcon } from './Icons'
import { useLanguage } from '../language'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="section-padding bg-surface border-t border-line">
      <div className="section-container">
        <div className="card mx-auto max-w-3xl p-8 sm:p-12 text-center">
          <p className="eyebrow mb-4">{t.contact.eyebrow}</p>
          <h2 className="section-title">{t.contact.title}</h2>

          <p className="mt-5 text-[17px] leading-relaxed text-muted max-w-xl mx-auto">
            {t.contact.description}
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a href={`mailto:${SITE.email}`} className="btn-primary">
              <MailIcon className="h-4 w-4" />
              {SITE.email}
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4 border-t border-line pt-8">
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              aria-label={t.contact.linkedin}
            >
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </a>
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              aria-label={t.contact.github}
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
