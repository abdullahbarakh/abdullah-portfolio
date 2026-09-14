import { useEffect, useState } from 'react'
import { NAV_LINKS, SITE } from '../siteConfig'
import { MenuIcon, CloseIcon } from './Icons'
import { useLanguage } from '../language'

export default function Navbar() {
  const { isArabic, setLanguage, t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.querySelector(link.href)).filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleNavClick = () => setIsOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-smooth ${
        isScrolled ? 'bg-background/90 backdrop-blur border-b border-line shadow-soft' : 'bg-transparent'
      }`}
    >
      <nav className="section-container flex h-20 items-center justify-between" aria-label="Primary">
        <a
          href="#home"
          className="font-extrabold text-lg tracking-tight text-ink hover:text-primary transition-colors"
        >
          Abdullah<span className="text-accent">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link, index) => {
            const id = link.href.replace('#', '')
            const isActive = activeSection === id
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative px-4 py-2 text-[15px] font-medium rounded-lg transition-colors duration-200 ease-smooth ${
                    isActive ? 'text-primary' : 'text-muted hover:text-ink'
                  }`}
                  aria-current={isActive ? 'true' : undefined}
                >
                  {t.nav[index]}
                  {isActive && (
                    <span className="absolute left-4 right-4 -bottom-[3px] h-[2px] rounded-full bg-primary" />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="hidden md:flex items-center gap-6">
          <button
            type="button"
            className="text-sm font-semibold text-muted transition-colors hover:text-primary"
            onClick={() => setLanguage(isArabic ? 'en' : 'ar')}
            aria-label={t.languageLabel}
          >
            {t.languageName}
          </button>
          <a href="#contact" className="btn-primary py-2.5 px-5">
            {t.talk}
          </a>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-ink"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden border-t border-line bg-surface">
          <ul className="section-container flex flex-col py-4">
            {NAV_LINKS.map((link, index) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleNavClick}
                  className="block py-3 text-base font-medium text-ink border-b border-line last:border-b-0"
                >
                  {t.nav[index]}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <button
                type="button"
                className="mb-3 w-full py-2 text-sm font-semibold text-muted"
                onClick={() => {
                  setLanguage(isArabic ? 'en' : 'ar')
                  handleNavClick()
                }}
                aria-label={t.languageLabel}
              >
                {t.languageName}
              </button>
              <a href={`mailto:${SITE.email}`} className="btn-primary w-full" onClick={handleNavClick}>
                {t.talk}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
