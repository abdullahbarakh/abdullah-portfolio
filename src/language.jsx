import { createContext, useContext, useEffect, useState } from 'react'

const translations = {
  en: {
    languageName: 'العربية', languageLabel: 'Switch to Arabic', skip: 'Skip to main content',
    nav: ['Home', 'About', 'Education', 'Skills', 'Projects', 'Certificates', 'Contact'], talk: "Let's Talk",
    hero: {
      eyebrow: 'Data Science & Data Analytics', tagline: 'Turning complex data into clear, actionable insight.',
      description: 'Data Science professional with a strong academic background and hands-on experience in data analytics, machine learning, and business intelligence. Focused on transforming complex data into clear insights, practical solutions, and meaningful business outcomes.',
      projects: 'View Projects', cv: 'Download CV', focus: 'Focus Areas',
      areas: [
        ['Data Science', 'Data-driven problem solving, modeling, and practical analytical solutions.'],
        ['Data Analytics', 'Data exploration, cleaning, visualization, and insight generation using Python and SQL.'],
        ['Business Intelligence', 'Power BI dashboards, reporting, KPI analysis, and decision support.'],
        ['Machine Learning', 'Predictive modeling, classification, evaluation, and model performance analysis.'],
      ],
      gpa: "Master's GPA, University of Jeddah", linkedin: 'Abdullah Alsulami on LinkedIn (opens in a new tab)', github: 'Abdullah Alsulami on GitHub (opens in a new tab)',
    },
    about: {
      eyebrow: 'About Me', title: 'Grounded in data,\ndriven by clarity', intro: 'I turn data into a practical advantage for people and organizations.',
      paragraphs: ['My background spans Data Science, Data Analytics, Machine Learning, and Business Intelligence, with a focus on making complex information easier to understand and act on.', 'Using Python and SQL, I explore, prepare, and analyze data. With Power BI and Excel, I shape the results into focused dashboards, reports, and decisions that connect technical detail with business context.'],
      principle: 'Analytical thinking, communicated with clarity.',
    },
    education: { eyebrow: 'Education', title: 'Academic Background', gpa: 'GPA' },
    skills: {
      eyebrow: 'Core Skills', title: 'Where I Add Value',
      groups: [{ title: 'Data Analysis', items: ['Data Analytics', 'Exploratory Data Analysis', 'Data Cleaning and Preparation'] }, { title: 'Programming & Querying', items: ['Python', 'SQL'] }, { title: 'Business Intelligence', items: ['Power BI', 'Microsoft Excel', 'Data Visualization'] }, { title: 'Machine Learning', items: ['Data Science', 'Machine Learning'] }],
    },
    projects: { eyebrow: 'Featured Projects', title: 'Selected Work', github: 'View on GitHub', dashboard: 'View Live Dashboard' },
    certificates: { eyebrow: 'Certificates', title: 'Continued Learning' },
    contact: { eyebrow: 'Contact', title: "Let's Work Together", description: 'I am open to opportunities in Data Analytics, Data Science, Business Intelligence, and related data-driven roles. Feel free to connect with me.', linkedin: 'Connect on LinkedIn (opens in a new tab)', github: 'View GitHub profile (opens in a new tab)' },
    footer: 'All rights reserved.',
  },
  ar: {
    languageName: 'English', languageLabel: 'التبديل إلى الإنجليزية', skip: 'الانتقال إلى المحتوى الرئيسي',
    nav: ['الرئيسية', 'نبذة عني', 'التعليم', 'المهارات', 'المشاريع', 'الشهادات', 'تواصل'], talk: 'لنتحدث',
    hero: {
      eyebrow: 'علم البيانات وتحليل البيانات', tagline: 'أحوّل البيانات المعقدة إلى رؤى واضحة قابلة للتنفيذ.',
      description: 'متخصص في علم البيانات بخلفية أكاديمية قوية وخبرة عملية في تحليل البيانات وتعلّم الآلة وذكاء الأعمال. أركّز على تحويل البيانات المعقدة إلى رؤى واضحة وحلول عملية ونتائج مؤثرة للأعمال.',
      projects: 'استعرض المشاريع', cv: 'تحميل السيرة الذاتية', focus: 'مجالات التركيز',
      areas: [
        ['علم البيانات', 'حل المشكلات بالاعتماد على البيانات وبناء نماذج وحلول تحليلية عملية.'],
        ['تحليل البيانات', 'استكشاف البيانات وتنظيفها وتصويرها واستخلاص الرؤى باستخدام Python وSQL.'],
        ['ذكاء الأعمال', 'لوحات Power BI والتقارير وتحليل مؤشرات الأداء ودعم اتخاذ القرار.'],
        ['تعلّم الآلة', 'النمذجة التنبؤية والتصنيف والتقييم وتحليل أداء النماذج.'],
      ],
      gpa: 'المعدل التراكمي للماجستير، جامعة جدة', linkedin: 'عبدالله السلمي على LinkedIn (يفتح في علامة تبويب جديدة)', github: 'عبدالله السلمي على GitHub (يفتح في علامة تبويب جديدة)',
    },
    about: {
      eyebrow: 'نبذة عني', title: 'أبدأ من البيانات،\nوأصل إلى الوضوح', intro: 'أحوّل البيانات إلى قيمة عملية تساعد الأفراد والمنظمات على اتخاذ قرارات أفضل.',
      paragraphs: ['تمتد خبرتي بين علم البيانات وتحليل البيانات وتعلّم الآلة وذكاء الأعمال، مع اهتمام خاص بتبسيط المعلومات المعقدة وتحويلها إلى خطوات واضحة قابلة للتطبيق.', 'أستخدم Python وSQL لاستكشاف البيانات وتجهيزها وتحليلها، ثم أحوّل النتائج باستخدام Power BI وExcel إلى لوحات وتقارير مركزة تربط التفاصيل التقنية بسياق الأعمال.'],
      principle: 'تفكير تحليلي، يُقدَّم بوضوح.',
    },
    education: { eyebrow: 'التعليم', title: 'الخلفية الأكاديمية', gpa: 'المعدل' },
    skills: {
      eyebrow: 'المهارات الأساسية', title: 'مجالات أضيف فيها قيمة',
      groups: [{ title: 'تحليل البيانات', items: ['تحليل البيانات', 'التحليل الاستكشافي للبيانات', 'تنظيف البيانات وتجهيزها'] }, { title: 'البرمجة والاستعلامات', items: ['Python', 'SQL'] }, { title: 'ذكاء الأعمال', items: ['Power BI', 'Microsoft Excel', 'تصوير البيانات'] }, { title: 'تعلّم الآلة', items: ['علم البيانات', 'تعلّم الآلة'] }],
    },
    projects: { eyebrow: 'مشاريع مختارة', title: 'أعمال مختارة', github: 'عرض على GitHub', dashboard: 'عرض لوحة البيانات' },
    certificates: { eyebrow: 'الشهادات', title: 'تعلّم مستمر' },
    contact: { eyebrow: 'تواصل', title: 'لنعمل معًا', description: 'أرحب بالفرص في تحليل البيانات وعلم البيانات وذكاء الأعمال والمجالات الأخرى القائمة على البيانات. يسعدني تواصلكم معي.', linkedin: 'التواصل عبر LinkedIn (يفتح في علامة تبويب جديدة)', github: 'عرض الملف الشخصي على GitHub (يفتح في علامة تبويب جديدة)' },
    footer: 'جميع الحقوق محفوظة.',
  },
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => window.localStorage.getItem('portfolio-language') || 'en')
  const isArabic = language === 'ar'

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr'
    window.localStorage.setItem('portfolio-language', language)
  }, [isArabic, language])

  return <LanguageContext.Provider value={{ language, isArabic, setLanguage, t: translations[language] }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  return useContext(LanguageContext)
}
