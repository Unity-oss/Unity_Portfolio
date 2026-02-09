import { useEffect, useMemo, useState } from "react";
import emailjs from "@emailjs/browser";

const projectLinks = [
  {
    name: "AI Email Reporter",
    url: "https://github.com/Unity-oss/ai_email_reporter.git",
    descKey: "projEmail",
  },
  {
    name: "Interview Practice App",
    url: "https://github.com/Unity-oss/interview_practice_app.git",
    descKey: "projInterview",
  },
  {
    name: "Learning Companion",
    url: "https://github.com/Unity-oss/Learning_companion.git",
    descKey: "projLearning",
  },
  {
    name: "Cynara",
    url: "https://github.com/Unity-oss/Cynara.git",
    descKey: "projCynara",
  },
  {
    name: "UNIHIVE",
    url: "https://github.com/Unity-oss/UNIHIVE.git",
    descKey: "projUnihive",
  },
  {
    name: "MWF Final",
    url: "https://github.com/Unity-oss/MWF_final3.git",
    descKey: "projMwf",
  },
  {
    name: "Monica Chatbot",
    url: "https://github.com/Unity-oss/Monica_chatbot.git",
    descKey: "projMonica",
  },
];

const translations = {
  en: {
    label: "English",
    dir: "ltr",
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      education: "Education",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      title: "Unity Busingye",
      subtitle: "AI Engineer + LLM Application Builder",
      intro:
        "I design AI products that move from idea to production: retrieval systems, agent workflows, and multi-model orchestration that solve real business needs.",
      ctaPrimary: "See Projects",
      ctaSecondary: "Contact Me",
      badge: "Open to remote + relocation",
    },
    about: {
      title: "About",
      body:
        "AI-focused engineer and software builder with a strong Python and backend foundation. I create practical LLM solutions using RAG, tool calling, memory, and evaluation, translating business goals into scalable systems.",
      highlightsTitle: "Focus Areas",
      highlights: [
        "Agentic workflows and advanced retrieval pipelines",
        "Multi-model integration (OpenAI, Gemini, Claude, Ollama)",
        "Prompt design, safety awareness, and cost control",
        "Clean architecture, logging, and documentation",
      ],
    },
    skills: {
      title: "Skills",
      groups: [
        {
          title: "AI + LLM",
          items: [
            "RAG and advanced retrieval",
            "Prompt engineering + evaluation",
            "Tool and function calling",
            "LangChain and LangGraph",
            "AI agent memory patterns",
          ],
        },
        {
          title: "Backend + Web",
          items: [
            "Python (advanced)",
            "Django and REST APIs",
            "SQL and data modeling",
            "HTML, CSS, JavaScript",
          ],
        },
        {
          title: "Data + Retrieval",
          items: [
            "Embeddings-based search",
            "Knowledge base pipelines",
            "Document ingestion",
            "Semantic ranking concepts",
          ],
        },
        {
          title: "Tools + Practices",
          items: [
            "Git and GitHub",
            "OpenAI API",
            "Agile collaboration",
            "Clean architecture",
          ],
        },
      ],
    },
    experience: {
      title: "Experience",
      items: [
        {
          role: "Founder + Lead AI/Tech Consultant",
          org: "Aster Consulting Group",
          period: "2026 - Present",
          detail:
            "Built AI solutions for startups and SMEs, led audits, automation workflows, and ethical AI guidance.",
        },
        {
          role: "Full-Stack Developer",
          org: "Codveda Technologies",
          period: "2025",
          detail:
            "Delivered web applications, authentication systems, and performance improvements across APIs.",
        },
        {
          role: "Accounting Intern",
          org: "Ministry of Health, Uganda",
          period: "2023 - 2024",
          detail:
            "Supported reporting, reconciliations, and budgeting activities.",
        },
        {
          role: "Program Support Assistant",
          org: "Save the Children International",
          period: "2022",
          detail:
            "Assisted delivery, documentation, and reporting for field programs.",
        },
      ],
    },
    education: {
      title: "Education",
      items: [
        {
          degree: "Certificate in AI Engineering",
          org: "Turing College",
          period: "2025",
        },
        {
          degree: "Certificate in Software Engineering",
          org: "Refactory Academy",
          period: "2025",
        },
        {
          degree: "BBA, Business Administration",
          org: "Kyambogo University",
          period: "2023",
        },
      ],
    },
    projects: {
      title: "Projects",
      descriptions: {
        projEmail:
          "Automates data collection and summarizes updates into email briefs.",
        projInterview:
          "AI mock interview studio with role personas and real-time feedback.",
        projLearning:
          "Personalized study assistant for summaries, plans, and practice.",
        projCynara:
          "Streaming-inspired web app built with Django and bold UI polish.",
        projUnihive:
          "Tenant and rent management platform with role-based access.",
        projMwf:
          "Academic capstone project exploring full-stack patterns.",
        projMonica:
          "Voice-capable chatbot with character logic and conversation flow.",
      },
    },
    contact: {
      title: "Contact",
      subtitle:
        "Got a project, collaboration, or role in mind? Send a message and I will reply by email.",
      fields: {
        name: "Your name",
        email: "Your email",
        message: "Your message",
      },
      button: "Send Message",
      success: "Thanks. Your message is on its way.",
      error: "Something went wrong. Please try again.",
      missingKeys:
        "Email service is not configured. Add EmailJS keys in the .env file.",
    },
  },
  de: {
    label: "Deutsch",
    dir: "ltr",
    nav: {
      about: "Profil",
      skills: "Skills",
      experience: "Erfahrung",
      education: "Ausbildung",
      projects: "Projekte",
      contact: "Kontakt",
    },
    hero: {
      title: "Unity Busingye",
      subtitle: "KI-Ingenieur + LLM-App-Builder",
      intro:
        "Ich entwickle KI-Produkte von der Idee bis zur Produktion: Retrieval-Systeme, Agent-Workflows und Multi-Model-Orchestrierung fur echte Business-Ziele.",
      ctaPrimary: "Projekte ansehen",
      ctaSecondary: "Kontakt",
      badge: "Offen fur Remote + Umzug",
    },
    about: {
      title: "Profil",
      body:
        "KI-orientierter Engineer mit starkem Python- und Backend-Fokus. Ich baue praxisnahe LLM-Losungen mit RAG, Tool-Calling, Memory und Evaluation.",
      highlightsTitle: "Schwerpunkte",
      highlights: [
        "Agentische Workflows und Retrieval-Pipelines",
        "Multi-Model-Integration (OpenAI, Gemini, Claude, Ollama)",
        "Prompt-Design, Sicherheit, Kostenkontrolle",
        "Clean Architecture, Logging, Dokumentation",
      ],
    },
    skills: {
      title: "Skills",
      groups: [
        {
          title: "KI + LLM",
          items: [
            "RAG und erweitertes Retrieval",
            "Prompt Engineering + Evaluation",
            "Tool- und Function-Calling",
            "LangChain und LangGraph",
            "Agent Memory Patterns",
          ],
        },
        {
          title: "Backend + Web",
          items: [
            "Python (fortgeschritten)",
            "Django und REST APIs",
            "SQL und Datenmodellierung",
            "HTML, CSS, JavaScript",
          ],
        },
        {
          title: "Daten + Retrieval",
          items: [
            "Embedding-basierte Suche",
            "Knowledge-Base-Pipelines",
            "Dokumenten-Ingestion",
            "Semantisches Ranking",
          ],
        },
        {
          title: "Tools + Praxis",
          items: [
            "Git und GitHub",
            "OpenAI API",
            "Agile Zusammenarbeit",
            "Clean Architecture",
          ],
        },
      ],
    },
    experience: {
      title: "Erfahrung",
      items: [
        {
          role: "Grunder + Lead KI/Tech Consultant",
          org: "Aster Consulting Group",
          period: "2026 - Heute",
          detail:
            "KI-Losungen fur Startups und KMU, Audits, Automatisierung und ethische Beratung.",
        },
        {
          role: "Full-Stack Developer",
          org: "Codveda Technologies",
          period: "2025",
          detail:
            "Web-Apps, Authentifizierung und Performance-Optimierungen.",
        },
        {
          role: "Accounting Intern",
          org: "Ministry of Health, Uganda",
          period: "2023 - 2024",
          detail: "Reporting, Abstimmungen, Budgeting.",
        },
        {
          role: "Program Support Assistant",
          org: "Save the Children International",
          period: "2022",
          detail: "Programm-Delivery, Doku, Reporting.",
        },
      ],
    },
    education: {
      title: "Ausbildung",
      items: [
        {
          degree: "Zertifikat AI Engineering",
          org: "Turing College",
          period: "2025",
        },
        {
          degree: "Zertifikat Software Engineering",
          org: "Refactory Academy",
          period: "2025",
        },
        {
          degree: "BBA, Business Administration",
          org: "Kyambogo University",
          period: "2023",
        },
      ],
    },
    projects: {
      title: "Projekte",
      descriptions: {
        projEmail: "Sammelt Daten und erstellt E-Mail-Zusammenfassungen.",
        projInterview: "KI-Interviewstudio mit Rollen-Personas und Feedback.",
        projLearning: "Lernassistent fur Zusammenfassungen und Ubung.",
        projCynara: "Streaming-Style Web-App mit Django.",
        projUnihive: "Mieter- und Mietverwaltung mit Rollenrechten.",
        projMwf: "Capstone-Projekt mit Full-Stack-Fokus.",
        projMonica: "Voice-Chatbot mit Charakterlogik.",
      },
    },
    contact: {
      title: "Kontakt",
      subtitle:
        "Sie haben ein Projekt oder eine Rolle? Schreiben Sie mir, ich antworte per E-Mail.",
      fields: {
        name: "Ihr Name",
        email: "Ihre E-Mail",
        message: "Ihre Nachricht",
      },
      button: "Nachricht senden",
      success: "Danke. Die Nachricht wurde gesendet.",
      error: "Fehler beim Senden. Bitte erneut versuchen.",
      missingKeys:
        "E-Mail-Service nicht konfiguriert. EmailJS-Schlussel in der .env eintragen.",
    },
  },
  sw: {
    label: "Swahili",
    dir: "ltr",
    nav: {
      about: "Kuhusu",
      skills: "Ujuzi",
      experience: "Uzoefu",
      education: "Elimu",
      projects: "Miradi",
      contact: "Wasiliana",
    },
    hero: {
      title: "Unity Busingye",
      subtitle: "Mhandisi wa AI + Mtengenezaji wa LLM",
      intro:
        "Naunda bidhaa za AI kutoka wazo hadi uzalishaji: mifumo ya retrieval, agent workflows, na uendeshaji wa mifano mingi kwa mahitaji ya biashara.",
      ctaPrimary: "Tazama Miradi",
      ctaSecondary: "Wasiliana",
      badge: "Niko wazi kwa remote + kuhama",
    },
    about: {
      title: "Kuhusu",
      body:
        "Mhandisi wa AI mwenye msingi imara wa Python na backend. Najenga suluhisho za LLM kwa RAG, tool calling, memory, na tathmini.",
      highlightsTitle: "Mazingira ya Kazi",
      highlights: [
        "Agent workflows na retrieval pipelines",
        "Multi-model (OpenAI, Gemini, Claude, Ollama)",
        "Prompt design, usalama, udhibiti wa gharama",
        "Clean architecture, logging, documentation",
      ],
    },
    skills: {
      title: "Ujuzi",
      groups: [
        {
          title: "AI + LLM",
          items: [
            "RAG na retrieval ya juu",
            "Prompt engineering + evaluation",
            "Tool/function calling",
            "LangChain na LangGraph",
            "Agent memory patterns",
          ],
        },
        {
          title: "Backend + Web",
          items: [
            "Python (advanced)",
            "Django na REST APIs",
            "SQL na data modeling",
            "HTML, CSS, JavaScript",
          ],
        },
        {
          title: "Data + Retrieval",
          items: [
            "Embedding search",
            "Knowledge base pipelines",
            "Document ingestion",
            "Semantic ranking",
          ],
        },
        {
          title: "Tools + Practices",
          items: [
            "Git na GitHub",
            "OpenAI API",
            "Agile collaboration",
            "Clean architecture",
          ],
        },
      ],
    },
    experience: {
      title: "Uzoefu",
      items: [
        {
          role: "Mwanzilishi + Mshauri Mkuu wa AI/Tech",
          org: "Aster Consulting Group",
          period: "2026 - Sasa",
          detail:
            "Niliongoza suluhisho za AI, ukaguzi, automation, na ushauri wa maadili.",
        },
        {
          role: "Full-Stack Developer",
          org: "Codveda Technologies",
          period: "2025",
          detail: "Nilijenga apps, auth, na kuboresha utendaji wa APIs.",
        },
        {
          role: "Accounting Intern",
          org: "Ministry of Health, Uganda",
          period: "2023 - 2024",
          detail: "Niliunga mkono reporting na budgeting.",
        },
        {
          role: "Program Support Assistant",
          org: "Save the Children International",
          period: "2022",
          detail: "Niliunga mkono delivery na documentation.",
        },
      ],
    },
    education: {
      title: "Elimu",
      items: [
        {
          degree: "Cheti cha AI Engineering",
          org: "Turing College",
          period: "2025",
        },
        {
          degree: "Cheti cha Software Engineering",
          org: "Refactory Academy",
          period: "2025",
        },
        {
          degree: "BBA, Business Administration",
          org: "Kyambogo University",
          period: "2023",
        },
      ],
    },
    projects: {
      title: "Miradi",
      descriptions: {
        projEmail: "Hukusanya data na kutuma muhtasari kwa barua pepe.",
        projInterview: "Studio ya mahojiano ya AI na feedback ya moja kwa moja.",
        projLearning: "Msaidizi wa kusoma kwa muhtasari na mpango.",
        projCynara: "App ya streaming iliyotengenezwa kwa Django.",
        projUnihive: "Mfumo wa wapangaji na kodi wenye role-based access.",
        projMwf: "Mradi wa mwisho wa masomo wa full-stack.",
        projMonica: "Chatbot yenye sauti na tabia maalum.",
      },
    },
    contact: {
      title: "Wasiliana",
      subtitle:
        "Una mradi au nafasi? Tuma ujumbe, nitakujibu kwa barua pepe.",
      fields: {
        name: "Jina lako",
        email: "Barua pepe yako",
        message: "Ujumbe wako",
      },
      button: "Tuma Ujumbe",
      success: "Asante. Ujumbe umetumwa.",
      error: "Imeshindikana. Tafadhali jaribu tena.",
      missingKeys:
        "Email service haijawekwa. Ongeza EmailJS keys kwenye .env.",
    },
  },
  zh: {
    label: "中文",
    dir: "ltr",
    nav: {
      about: "关于",
      skills: "技能",
      experience: "经历",
      education: "教育",
      projects: "项目",
      contact: "联系",
    },
    hero: {
      title: "Unity Busingye",
      subtitle: "AI 工程师 + LLM 应用开发",
      intro:
        "我把 AI 产品从想法推进到落地：检索系统、智能体流程和多模型协作，专注解决真实业务问题。",
      ctaPrimary: "查看项目",
      ctaSecondary: "联系我",
      badge: "可远程/可搬迁",
    },
    about: {
      title: "关于",
      body:
        "专注 AI 的工程师，Python 与后端基础扎实。擅长 RAG、工具调用、记忆与评估，把业务目标转成可扩展系统。",
      highlightsTitle: "专长方向",
      highlights: [
        "智能体流程与高级检索",
        "多模型集成 (OpenAI, Gemini, Claude, Ollama)",
        "提示词设计、风险意识与成本控制",
        "清晰架构、日志与文档",
      ],
    },
    skills: {
      title: "技能",
      groups: [
        {
          title: "AI + LLM",
          items: [
            "RAG 与高级检索",
            "提示工程与评估",
            "工具/函数调用",
            "LangChain 与 LangGraph",
            "智能体记忆模式",
          ],
        },
        {
          title: "后端 + Web",
          items: [
            "Python (高级)",
            "Django 与 REST API",
            "SQL 与数据建模",
            "HTML, CSS, JavaScript",
          ],
        },
        {
          title: "数据 + 检索",
          items: [
            "向量检索",
            "知识库流水线",
            "文档摄取",
            "语义排序概念",
          ],
        },
        {
          title: "工具 + 实践",
          items: [
            "Git 与 GitHub",
            "OpenAI API",
            "敏捷协作",
            "清晰架构",
          ],
        },
      ],
    },
    experience: {
      title: "经历",
      items: [
        {
          role: "创始人 + AI/技术顾问",
          org: "Aster Consulting Group",
          period: "2026 - 至今",
          detail: "为初创与中小企业交付 AI 方案与自动化，并提供合规建议。",
        },
        {
          role: "全栈开发",
          org: "Codveda Technologies",
          period: "2025",
          detail: "构建 Web 应用、认证系统与 API 性能优化。",
        },
        {
          role: "会计实习",
          org: "乌干达卫生部",
          period: "2023 - 2024",
          detail: "支持财务报告、对账与预算工作。",
        },
        {
          role: "项目支持助理",
          org: "救助儿童会",
          period: "2022",
          detail: "参与项目落地、文档与报告。",
        },
      ],
    },
    education: {
      title: "教育",
      items: [
        {
          degree: "AI 工程证书",
          org: "Turing College",
          period: "2025",
        },
        {
          degree: "软件工程证书",
          org: "Refactory Academy",
          period: "2025",
        },
        {
          degree: "工商管理学士",
          org: "Kyambogo University",
          period: "2023",
        },
      ],
    },
    projects: {
      title: "项目",
      descriptions: {
        projEmail: "自动抓取数据并生成邮件摘要。",
        projInterview: "AI 面试练习平台，含角色人格与反馈。",
        projLearning: "个性化学习助手，支持总结与规划。",
        projCynara: "Django 打造的流媒体风格应用。",
        projUnihive: "租户与租金管理平台，含角色权限。",
        projMwf: "全栈方向的毕业项目探索。",
        projMonica: "支持语音的聊天机器人与角色逻辑。",
      },
    },
    contact: {
      title: "联系",
      subtitle: "有合作或职位？留言给我，我会通过邮件回复。",
      fields: {
        name: "你的名字",
        email: "你的邮箱",
        message: "你的留言",
      },
      button: "发送",
      success: "感谢！消息已发送。",
      error: "发送失败，请重试。",
      missingKeys: "未配置邮件服务，请在 .env 中填写 EmailJS。",
    },
  },
  ar: {
    label: "العربية",
    dir: "rtl",
    nav: {
      about: "نبذة",
      skills: "المهارات",
      experience: "الخبرة",
      education: "التعليم",
      projects: "المشاريع",
      contact: "تواصل",
    },
    hero: {
      title: "Unity Busingye",
      subtitle: "مهندس ذكاء اصطناعي + مطور تطبيقات LLM",
      intro:
        "اطور منتجات ذكاء اصطناعي من الفكرة الى التنفيذ: انظمة استرجاع، تدفقات وكلاء، وتنسيق نماذج متعددة لحل تحديات الاعمال.",
      ctaPrimary: "عرض المشاريع",
      ctaSecondary: "تواصل معي",
      badge: "متاح للعمل عن بعد والتنقل",
    },
    about: {
      title: "نبذة",
      body:
        "مهندس يركز على الذكاء الاصطناعي مع اساس قوي في بايثون والباك اند. ابني حلول LLM باستخدام RAG وادوات الاستدعاء والذاكرة والتقييم.",
      highlightsTitle: "مجالات التركيز",
      highlights: [
        "تدفقات وكلاء واسترجاع متقدم",
        "تكامل نماذج متعددة (OpenAI, Gemini, Claude, Ollama)",
        "تصميم الحوافز، الامان، وضبط التكلفة",
        "هندسة نظيفة، تسجيل، وتوثيق",
      ],
    },
    skills: {
      title: "المهارات",
      groups: [
        {
          title: "الذكاء الاصطناعي + LLM",
          items: [
            "RAG واسترجاع متقدم",
            "هندسة الحوافز والتقييم",
            "استدعاء الادوات والدوال",
            "LangChain وLangGraph",
            "انماط ذاكرة الوكلاء",
          ],
        },
        {
          title: "باك اند + ويب",
          items: [
            "بايثون (متقدم)",
            "Django وREST APIs",
            "SQL ونمذجة البيانات",
            "HTML وCSS وJavaScript",
          ],
        },
        {
          title: "البيانات + الاسترجاع",
          items: [
            "بحث بالتمثيلات المتجهية",
            "خطوط بناء المعرفة",
            "ادخال المستندات",
            "مفاهيم الترتيب الدلالي",
          ],
        },
        {
          title: "الادوات + الممارسات",
          items: [
            "Git وGitHub",
            "OpenAI API",
            "تعاون Agile",
            "هندسة نظيفة",
          ],
        },
      ],
    },
    experience: {
      title: "الخبرة",
      items: [
        {
          role: "المؤسس + مستشار AI/Tech",
          org: "Aster Consulting Group",
          period: "2026 - حتى الان",
          detail:
            "حلول ذكاء اصطناعي للشركات الناشئة، تدقيقات، اتمتة، وارشاد اخلاقي.",
        },
        {
          role: "مطور Full-Stack",
          org: "Codveda Technologies",
          period: "2025",
          detail: "تطوير تطبيقات الويب، المصادقة، وتحسين اداء APIs.",
        },
        {
          role: "متدرب محاسبة",
          org: "وزارة الصحة - اوغندا",
          period: "2023 - 2024",
          detail: "دعم التقارير والتسويات والميزانية.",
        },
        {
          role: "مساعد دعم البرامج",
          org: "Save the Children International",
          period: "2022",
          detail: "دعم التنفيذ والتوثيق والتقارير.",
        },
      ],
    },
    education: {
      title: "التعليم",
      items: [
        {
          degree: "شهادة هندسة الذكاء الاصطناعي",
          org: "Turing College",
          period: "2025",
        },
        {
          degree: "شهادة هندسة البرمجيات",
          org: "Refactory Academy",
          period: "2025",
        },
        {
          degree: "بكالوريوس ادارة الاعمال",
          org: "Kyambogo University",
          period: "2023",
        },
      ],
    },
    projects: {
      title: "المشاريع",
      descriptions: {
        projEmail: "يجمع البيانات ويلخصها في رسائل بريدية.",
        projInterview: "منصة مقابلات AI مع شخصيات ادوار وتغذية راجعة.",
        projLearning: "مساعد تعلم مخصص للتلخيص والخطط.",
        projCynara: "تطبيق بواجهة بث مبني ب Django.",
        projUnihive: "منصة ادارة المستاجرين والايجارات بصلاحيات.",
        projMwf: "مشروع تخرج يستكشف نماذج Full-Stack.",
        projMonica: "شات بوت صوتي بمنطق شخصية.",
      },
    },
    contact: {
      title: "تواصل",
      subtitle: "هل لديك مشروع او دور؟ ارسل رسالة وسارد عبر البريد.",
      fields: {
        name: "الاسم",
        email: "البريد الالكتروني",
        message: "الرسالة",
      },
      button: "ارسال",
      success: "تم الارسال. شكرا لك.",
      error: "حدث خطا. حاول مرة اخرى.",
      missingKeys: "خدمة البريد غير مهيئة. اضف مفاتيح EmailJS في .env.",
    },
  },
};

const initialLanguage = "en";

function App() {
  const [language, setLanguage] = useState(initialLanguage);
  const [theme, setTheme] = useState("light");
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const t = translations[language];

  useEffect(() => {
    document.documentElement.setAttribute("lang", language);
    document.documentElement.setAttribute("dir", t.dir);
  }, [language, t.dir]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const projectCards = useMemo(() => {
    return projectLinks.map((project) => ({
      ...project,
      desc: t.projects.descriptions[project.descKey],
    }));
  }, [t]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("idle");
    setErrorMessage("");

    const formEl = event.currentTarget;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("missing");
      return;
    }

    const formData = new FormData(formEl);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      reply_to: formData.get("email"),
    };

    try {
      await emailjs.send(serviceId, templateId, payload, publicKey);
      setStatus("success");
      formEl?.reset();
    } catch (error) {
      const message = error?.text || error?.message || "EmailJS error";
      console.error("EmailJS error", error);
      setErrorMessage(message);
      setStatus("error");
    }
  };

  return (
    <div className="app">
      <header className="nav">
        <div className="logo">
          <span className="logo-mark">UB</span>
          <span className="logo-text">Unity Busingye</span>
        </div>
        <nav className="nav-links">
          <a href="#about">{t.nav.about}</a>
          <a href="#skills">{t.nav.skills}</a>
          <a href="#experience">{t.nav.experience}</a>
          <a href="#education">{t.nav.education}</a>
          <a href="#projects">{t.nav.projects}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>
        <div className="nav-actions">
          <label className="select-wrapper">
            <span className="sr-only">Language</span>
            <select
              value={language}
              onChange={(event) => setLanguage(event.target.value)}
              aria-label="Language"
            >
              {Object.entries(translations).map(([key, value]) => (
                <option key={key} value={key}>
                  {value.label}
                </option>
              ))}
            </select>
          </label>
          <button
            className="mode-toggle"
            onClick={() =>
              setTheme((prev) => (prev === "light" ? "dark" : "light"))
            }
            aria-label="Toggle dark mode"
          >
            {theme === "light" ? "Dark" : "Light"}
          </button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <span className="hero-badge">{t.hero.badge}</span>
            <h1>{t.hero.title}</h1>
            <p className="hero-subtitle">{t.hero.subtitle}</p>
            <p className="hero-intro">{t.hero.intro}</p>
            <div className="hero-actions">
              <a className="btn primary" href="#projects">
                {t.hero.ctaPrimary}
              </a>
              <a className="btn ghost" href="#contact">
                {t.hero.ctaSecondary}
              </a>
            </div>
          </div>
          <div className="hero-portrait">
            <img src="/unityb.jpg" alt="Unity Busingye" />
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="section-title">
            <p className="eyebrow">{t.about.title}</p>
            <h2>{t.about.title}</h2>
          </div>
          <div className="about-grid">
            <p className="body-text">{t.about.body}</p>
            <div className="highlight-card">
              <h3>{t.about.highlightsTitle}</h3>
              <ul>
                {t.about.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills">
          <div className="section-title">
            <p className="eyebrow">{t.skills.title}</p>
            <h2>{t.skills.title}</h2>
          </div>
          <div className="skills-grid">
            {t.skills.groups.map((group) => (
              <div key={group.title} className="skill-card">
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="section experience">
          <div className="section-title">
            <p className="eyebrow">{t.experience.title}</p>
            <h2>{t.experience.title}</h2>
          </div>
          <div className="timeline">
            {t.experience.items.map((item) => (
              <article key={item.role} className="timeline-item">
                <div className="timeline-meta">
                  <span className="role">{item.role}</span>
                  <span className="org">{item.org}</span>
                  <span className="period">{item.period}</span>
                </div>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section education">
          <div className="section-title">
            <p className="eyebrow">{t.education.title}</p>
            <h2>{t.education.title}</h2>
          </div>
          <div className="education-grid">
            {t.education.items.map((item) => (
              <div key={item.degree} className="edu-card">
                <h3>{item.degree}</h3>
                <p>{item.org}</p>
                <span>{item.period}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section projects">
          <div className="section-title">
            <p className="eyebrow">{t.projects.title}</p>
            <h2>{t.projects.title}</h2>
          </div>
          <div className="project-grid">
            {projectCards.map((project) => (
              <a
                key={project.name}
                href={project.url}
                className="project-card"
                target="_blank"
                rel="noreferrer"
              >
                <h3>{project.name}</h3>
                <p>{project.desc}</p>
                <span className="project-link">View on GitHub</span>
              </a>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="section-title">
            <p className="eyebrow">{t.contact.title}</p>
            <h2>{t.contact.title}</h2>
          </div>
          <div className="contact-grid">
            <p className="body-text">{t.contact.subtitle}</p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                name="name"
                type="text"
                placeholder={t.contact.fields.name}
                required
              />
              <input
                name="email"
                type="email"
                placeholder={t.contact.fields.email}
                required
              />
              <textarea
                name="message"
                rows="5"
                placeholder={t.contact.fields.message}
                required
              ></textarea>
              <button className="btn primary" type="submit">
                {t.contact.button}
              </button>
              {status === "success" && (
                <p className="form-message success">{t.contact.success}</p>
              )}
              {status === "error" && (
                <p className="form-message error">
                  {t.contact.error}
                  {errorMessage ? ` (${errorMessage})` : ""}
                </p>
              )}
              {status === "missing" && (
                <p className="form-message error">{t.contact.missingKeys}</p>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Unity Busingye | AI Engineer</p>
        <div className="footer-links">
          <a href="https://github.com/Unity-oss" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/unity-busingye-b201b8269"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
