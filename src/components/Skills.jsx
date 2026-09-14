import { useLanguage } from '../language'

export default function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="eyebrow mb-4">{t.skills.eyebrow}</p>
          <h2 className="section-title">{t.skills.title}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.skills.groups.map((group, index) => (
            <div key={group.title} className="card p-7">
              <span className="text-xs font-semibold text-accent">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="mt-3 text-lg font-bold text-ink">{group.title}</h3>
              <ul className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[15px] text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
