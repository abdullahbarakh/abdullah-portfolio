import { CodeProjectCard, DashboardProjectCard } from './ProjectCard'
import { useLanguage } from '../language'

const CODE_PROJECTS = [
  {
    title: 'Android Malware Detection Using a Stacking Ensemble',
    description:
      'Developed a machine learning framework for Android malware detection using permission-based features and a stacking ensemble approach to improve classification performance and robustness.',
    linkLabel: 'View on GitHub',
    arabicTitle: 'اكتشاف برمجيات Android الخبيثة باستخدام تجميع النماذج',
    arabicDescription: 'تطوير إطار لتعلّم الآلة لاكتشاف البرمجيات الخبيثة في Android باستخدام خصائص الصلاحيات ونهج تجميع النماذج لتحسين دقة التصنيف ومتانته.',
    href: 'https://github.com/abdullahbarakh/Android-Malware-Detection-Stacking-Ensemble',
  },
  {
    title: 'Urban Area Clustering from Aerial Images',
    description:
      'Built an unsupervised image analysis project to cluster urban areas from aerial imagery using data-driven techniques for pattern discovery and urban-area understanding.',
    linkLabel: 'View on GitHub',
    arabicTitle: 'تجميع المناطق الحضرية من الصور الجوية',
    arabicDescription: 'تنفيذ مشروع لتحليل الصور وتجميع المناطق الحضرية من الصور الجوية باستخدام تقنيات قائمة على البيانات لاكتشاف الأنماط وفهم خصائص المناطق الحضرية.',
    href: 'https://github.com/abdullahbarakh/Aerial-Image-Urban-Clustering',
  },
]

const DASHBOARD_PROJECTS = [
  {
    title: 'HR Analytics Dashboard – Power BI',
    description:
      'Designed an interactive HR dashboard to analyze workforce metrics such as total employees, average salary, attrition rate, and employee demographics for clearer HR insights and better decision support.',
    linkLabel: 'View Live Dashboard',
    arabicTitle: 'لوحة تحليلات الموارد البشرية - Power BI',
    arabicDescription: 'تصميم لوحة تفاعلية لتحليل مؤشرات القوى العاملة مثل عدد الموظفين ومتوسط الرواتب ومعدل الاستقالات والخصائص الديموغرافية لدعم قرارات الموارد البشرية.',
    href: 'https://app.powerbi.com/groups/me/reports/3b32bc49-bdb0-43e2-beaf-3b3c96f0482d/9e543b07007900a81816?experience=power-bi&bookmarkGuid=65a8622d4d99947f5a8d',
    image: '/hr-dashboard.png.png',
    imageAlt: 'HR Analytics Power BI dashboard showing headcount, salary, attrition, and workforce composition',
  },
  {
    title: 'Superstore Analytics Dashboard – Power BI',
    description:
      'Created an interactive sales dashboard to analyze sales, profit, returned orders, product performance, regional trends, and customer segments through clear and structured visual analysis.',
    linkLabel: 'View Live Dashboard',
    arabicTitle: 'لوحة تحليلات Superstore - Power BI',
    arabicDescription: 'إنشاء لوحة مبيعات تفاعلية لتحليل المبيعات والأرباح والطلبات المرتجعة وأداء المنتجات والاتجاهات الإقليمية وشرائح العملاء عبر عرض بصري منظم.',
    href: 'https://app.powerbi.com/groups/me/reports/deeef0a2-bc5e-49bb-b255-bbb5b539d18b/2ce97006b64009ad193d?experience=power-bi',
    image: '/superstore-dashboard.png.png',
    imageAlt: 'Superstore Power BI dashboard showing sales trend, sales by region, and customer segments',
    reverse: true,
  },
]

export default function Projects() {
  const { isArabic, t } = useLanguage()
  const codeProjects = CODE_PROJECTS.map((project) => ({
    ...project,
    title: isArabic ? project.arabicTitle : project.title,
    description: isArabic ? project.arabicDescription : project.description,
    linkLabel: t.projects.github,
  }))
  const dashboardProjects = DASHBOARD_PROJECTS.map((project) => ({
    ...project,
    title: isArabic ? project.arabicTitle : project.title,
    description: isArabic ? project.arabicDescription : project.description,
    linkLabel: t.projects.dashboard,
  }))

  return (
    <section id="projects" className="section-padding bg-surface border-y border-line">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="eyebrow mb-4">{t.projects.eyebrow}</p>
          <h2 className="section-title">{t.projects.title}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          {codeProjects.map((project) => (
            <CodeProjectCard key={project.title} {...project} />
          ))}
        </div>

        <div className="flex flex-col gap-6">
          {dashboardProjects.map((project) => (
            <DashboardProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
