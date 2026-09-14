import { CertificateIcon } from './Icons'
import { useLanguage } from '../language'

const CERTIFICATES = [
  {
    title: 'Programming for Data Science with Python Nanodegree',
    issuer: 'Udacity',
    arabicTitle: 'دبلوم البرمجة لعلم البيانات باستخدام Python',
  },
  {
    title: 'Data Science Bootcamp',
    issuer: 'SDA Academy',
    arabicTitle: 'معسكر علم البيانات',
  },
]

export default function Certificates() {
  const { isArabic, t } = useLanguage()

  return (
    <section id="certificates" className="section-padding">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="eyebrow mb-4">{t.certificates.eyebrow}</p>
          <h2 className="section-title">{t.certificates.title}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {CERTIFICATES.map((cert) => (
            <div key={cert.title} className="card p-8 flex flex-col items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                <CertificateIcon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-lg font-bold text-ink leading-snug">{isArabic ? cert.arabicTitle : cert.title}</h3>
              <p className="mt-2 text-[15px] text-muted">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
