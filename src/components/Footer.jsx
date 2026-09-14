import { SITE, NAV_LINKS } from '../siteConfig'
import { useLanguage } from '../language'

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-line">
      <div className="section-container py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          &copy; {year} {SITE.name}. {t.footer}
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {NAV_LINKS.map((link, index) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm text-muted hover:text-primary transition-colors">
                {t.nav[index]}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
