import { useLanguage } from '../language'

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="section-padding">
      <div className="section-container grid grid-cols-1 gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:gap-16">
        <div>
          <p className="eyebrow mb-4">{t.about.eyebrow}</p>
          <h2 className="section-title whitespace-pre-line">{t.about.title}</h2>
        </div>

        <div className="border-t border-line pt-6 sm:pt-8">
          <p className="max-w-2xl text-xl font-semibold leading-relaxed text-primary">{t.about.intro}</p>
          <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {t.about.paragraphs.map((text) => (
              <p key={text} className="text-[17px] leading-relaxed text-muted">
                {text}
              </p>
            ))}
          </div>
          <p className="mt-8 border-t border-line pt-5 text-sm font-semibold text-accent">{t.about.principle}</p>
        </div>
      </div>
    </section>
  )
}
