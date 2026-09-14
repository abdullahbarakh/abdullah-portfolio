import { CapIcon } from './Icons'
import { useLanguage } from '../language'

export default function Education() {
  const { t } = useLanguage()

  return (
    <section id="education" className="section-padding bg-surface border-y border-line">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="eyebrow mb-4">{t.education.eyebrow}</p>
          <h2 className="section-title">{t.education.title}</h2>
        </div>

        <div className="card mx-auto max-w-2xl p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <CapIcon className="h-6 w-6" />
          </div>

          <div className="flex-1">
            <p className="text-sm font-semibold text-accent">2024 &ndash; 2026</p>
            <h3 className="mt-1 text-xl sm:text-subheading font-bold text-ink">Master&rsquo;s in Data Science</h3>
            <p className="mt-1 text-[17px] text-muted">University of Jeddah</p>
          </div>

          <div className="sm:text-right sm:border-l sm:border-line sm:pl-6">
            <p className="text-xs uppercase tracking-[0.1em] text-muted">{t.education.gpa}</p>
            <p className="text-2xl font-extrabold text-primary">4.88<span className="text-base font-semibold text-muted"> / 5.00</span></p>
          </div>
        </div>
      </div>
    </section>
  )
}
