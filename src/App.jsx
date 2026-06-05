import { useEffect, useMemo, useState } from "react";
import emailjs from "@emailjs/browser";

const projectLinks = [
  {
    name: "TripMind AI ",
    url: "https://github.com/Unity-oss/TripMindAI.git",
    descKey: "projTripMind",
  },
  {
    name: "Cashious Finance Assistant",
    url: "https://github.com/Unity-oss/financeAdvisorBot.git",
    descKey: "projFinance",
  },
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
    name: "Furniture Workshop Management System",
    url: "https://github.com/Unity-oss/MWF_final3.git",
    descKey: "projMwf",
  },
  {
    name: "Monica Chatbot",
    url: "https://github.com/Unity-oss/Monica_chatbot.git",
    descKey: "projMonica",
  },
  {
    name: "Customer Support Chatbot",
    url: "https://github.com/Unity-oss/customer_support_chatbot.git",
    descKey: "projCustomerSupport",
  },
  {
    name: "LavAna",
    url: "https://github.com/Unity-oss/LavAna.git",
    descKey: "projLavana",
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
      subtitle: "AI Engineer · Full-Stack Developer · LLM & NLP Systems",
      intro:
        "I build production-grade LLM applications, RAG pipelines, autonomous AI agents, and NLP-powered systems — delivering end-to-end AI products across fintech, healthtech, accessibility, and e-commerce. Deep expertise in LangChain, LangGraph, Hugging Face, and vector search, paired with strong full-stack Python/Django skills and experience integrating SaaS/ERP platforms.",
      ctaPrimary: "See Projects",
      ctaSecondary: "Contact Me",
      badge: "Open to remote + relocation",
    },
    about: {
      title: "About",
      body:
        "I build production-grade LLM applications, RAG pipelines, and NLP-powered systems with a track record delivering end-to-end AI products across fintech, healthtech, accessibility, and e-commerce — from architecture to deployment. My work combines deep AI expertise with strong full-stack engineering and ERP integration experience, focused on applying AI to solve real problems across Africa and beyond.",
      highlightsTitle: "Focus Areas",
      highlights: [
        "AI agents for real-world automation and decision-making",
        "RAG systems for structured knowledge and search",
        "Seamless integration with APIs and SaaS tools",
        "Optimizing AI systems for cost, speed, and usability",
        "Building scalable, production-ready applications",
      ],
    },
    skills: {
      title: "Skills",
      groups: [
        {
          title: "AI & Machine Learning",
          items: [
            "LangChain · LangGraph · RAG pipelines · AI agents · prompt engineering",
            "Model finetuning, embeddings, and vector databases (FAISS, Chroma, Pinecone)",
            "Multi-agent orchestration and autonomous workflow design",
            "Monitoring, logging, and LLM evaluation for production systems",
          ],
        },
        {
          title: "NLP & LLM Systems",
          items: [
            "Hugging Face Transformers · spaCy · NLTK for NLP pipelines",
            "Intent classification, named entity recognition, sentiment analysis",
            "OpenAI API · Anthropic Claude API · Gemini · Ollama integrations",
            "Text-to-Speech (TTS) and Automatic Speech Recognition (ASR)",
          ],
        },
        {
          title: "Backend & Full-Stack",
          items: [
            "Python · Django · Flask · FastAPI · WebSockets · RESTful APIs",
            "PostgreSQL · authentication systems · webhook automation",
            "JavaScript · HTML · CSS · responsive UI · React Native",
            "Docker · CI/CD · Render · Railway · Git and GitHub",
          ],
        },
        {
          title: "Data & Retrieval",
          items: [
            "Vector databases (FAISS, Chroma, Pinecone, Weaviate) for semantic search",
            "Knowledge base design and document ingestion pipelines",
            "Embeddings-based search, semantic ranking, and RAG architecture",
            "Data preprocessing and retrieval optimization",
          ],
        },
        {
          title: "ERP & Integrations",
          items: [
            "SaaS platforms · QuickBooks · Microsoft Business Central",
            "Third-party API integrations and system configuration",
            "Mobile payment APIs and e-commerce platform integrations",
            "Technical onboarding, user training, and adoption monitoring",
          ],
        },
        {
          title: "Soft Skills",
          items: [
            "Problem-solving and critical thinking in complex AI domains",
            "Collaboration in multi-disciplinary and cross-functional teams",
            "Clear communication of technical concepts to non-technical stakeholders",
            "Adaptability and rapid learning in fast-evolving AI environments",
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
            "Lead end-to-end AI platform implementation for startups and SMEs. Configure SaaS/AI agent solutions, conduct user onboarding and technical training, and serve as the primary liaison between product, engineering, and client success.",
        },
        {
          role: "Full-Stack Developer",
          org: "Codveda Technologies",
          period: "2025",
          detail:
            "Built and deployed scalable web applications using Python, Django, and PostgreSQL. Developed RESTful APIs for third-party integrations and contributed to documentation and high-uptime deployments.",
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
          period: "2025-2026",
        },
        {
          degree: "Certificate in Software Engineering",
          org: "Refactory Academy",
          period: "2025",
        },
        {
          degree: "BBA, Business Administration",
          org: "Kyambogo University",
          period: "2019-2023",
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
          "Management system that automates inventory, orders, and production scheduling, providing a centralized platform for efficient operations, reporting, and customer management..",
        projMonica:
          "Voice-capable chatbot with character logic and conversation flow.",
        projFinance:
        "An AI finance assistant leveraging RAG and tool calling to teach budgeting, savings, and debt management, built with LangChain and Streamlit.",
        projTripMind:
        "An intelligent travel planning assistant that uses a multi-agent architecture to provide comprehensive, personalized travel recommendations.",
        projCustomerSupport:
        "NLP-powered customer support chatbot with intent classification, entity recognition, and multilingual response generation for seamless automated assistance.",
        projLavana:
        "AI fintech platform empowering women with savings management, loan applications, SACCO operations, and LLM-driven credit scoring and financial literacy agents.",
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
      subtitle: "KI-Ingenieur · Full-Stack-Entwickler · LLM & NLP-Systeme",
      intro:
        "Ich entwickle produktionsreife LLM-Anwendungen, RAG-Pipelines, autonome KI-Agenten und NLP-Systeme fur Fintech, Healthtech und E-Commerce — von der Architektur bis zur Bereitstellung. Starke Full-Stack-Python/Django-Grundlage und Erfahrung mit SaaS/ERP-Plattformen.",
      ctaPrimary: "Projekte ansehen",
      ctaSecondary: "Kontakt",
      badge: "Offen fur Remote + Umzug",
    },
    about: {
      title: "Profil",
      body:
        "Ich entwickle produktionsreife LLM-Anwendungen, RAG-Pipelines und NLP-Systeme mit nachgewiesener Erfahrung in Fintech, Healthtech, Barrierefreiheit und E-Commerce — von der Architektur bis zur Bereitstellung. Starke Full-Stack-Python/Django-Grundlage und Erfahrung mit ERP-Integrationen.",
      highlightsTitle: "Schwerpunkte",
      highlights: [
        "AI agents for real-world automation and decision-making",
        "RAG systems for structured knowledge and search",
        "Seamless integration with APIs and SaaS tools",
        "Optimizing AI systems for cost, speed, and usability",
        "Building scalable, production-ready applications",
      ],
    },
    skills: {
      title: "Skills",
      groups: [
        {
          title: "KI & Machine Learning",
          items: [
            "LangChain · LangGraph · RAG pipelines · AI agents · prompt engineering",
            "Model finetuning, embeddings, and vector databases (FAISS, Chroma, Pinecone)",
            "Multi-agent orchestration and autonomous workflow design",
            "Monitoring, logging, and LLM evaluation for production systems",
          ],
        },
        {
          title: "NLP & LLM-Systeme",
          items: [
            "Hugging Face Transformers · spaCy · NLTK for NLP pipelines",
            "Intent classification, named entity recognition, sentiment analysis",
            "OpenAI API · Anthropic Claude API · Gemini · Ollama integrations",
            "Text-to-Speech (TTS) and Automatic Speech Recognition (ASR)",
          ],
        },
        {
          title: "Backend & Full-Stack",
          items: [
            "Python · Django · Flask · FastAPI · WebSockets · RESTful APIs",
            "PostgreSQL · authentication systems · webhook automation",
            "JavaScript · HTML · CSS · responsive UI · React Native",
            "Docker · CI/CD · Render · Railway · Git and GitHub",
          ],
        },
        {
          title: "Data & Retrieval",
          items: [
            "Vector databases (FAISS, Chroma, Pinecone, Weaviate) for semantic search",
            "Knowledge base design and document ingestion pipelines",
            "Embeddings-based search, semantic ranking, and RAG architecture",
            "Data preprocessing and retrieval optimization",
          ],
        },
        {
          title: "ERP & Integrationen",
          items: [
            "SaaS platforms · QuickBooks · Microsoft Business Central",
            "Third-party API integrations and system configuration",
            "Mobile payment APIs and e-commerce platform integrations",
            "Technical onboarding, user training, and adoption monitoring",
          ],
        },
        {
          title: "Soft Skills",
          items: [
            "Problem-solving and critical thinking in complex AI domains",
            "Collaboration in multi-disciplinary and cross-functional teams",
            "Clear communication of technical concepts to non-technical stakeholders",
            "Adaptability and rapid learning in fast-evolving AI environments",
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
          period: "2025-2026",
        },
        {
          degree: "Zertifikat Software Engineering",
          org: "Refactory Academy",
          period: "2025",
        },
        {
          degree: "BBA, Business Administration",
          org: "Kyambogo University",
          period: "2019-2023",
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
        projMwf: "Management system that automates inventory, orders, and production scheduling, providing a centralized platform for efficient operations, reporting, and customer management..",
        projMonica: "Voice-Chatbot mit Charakterlogik.",
        projFinance:
          "An AI finance assistant leveraging RAG and tool calling to teach budgeting, savings, and debt management, built with LangChain and Streamlit.",
        projTripMind: "An intelligent travel planning assistant that uses a multi-agent architecture to provide comprehensive, personalized travel recommendations.",
        projCustomerSupport:
          "NLP-gesteuerter Support-Chatbot mit Intent-Klassifikation, Entitätserkennung und mehrsprachiger Antwortgenerierung für automatisierten Kundenservice.",
        projLavana:
          "KI-Fintech-Plattform zur Stärkung von Frauen mit Sparmanagement, Kreditanträgen, SACCO-Betrieb und KI-gestütztem Kreditscoring.",
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
      subtitle: "Mhandisi wa AI · Msanidi Programu wa Full-Stack · Mifumo ya LLM & NLP",
      intro:
        "Najenga programu za LLM za daraja la uzalishaji, mabomba ya RAG, mawakala wa AI, na mifumo ya NLP katika sekta ya fedha, afya, na biashara ya mtandao — kutoka usanifu hadi utekelezaji. Uzoefu wa kina wa Python/Django na ujumuishaji wa majukwaa ya SaaS/ERP.",
      ctaPrimary: "Tazama Miradi",
      ctaSecondary: "Wasiliana",
      badge: "Niko wazi kwa remote + kuhama",
    },
    about: {
      title: "Kuhusu",
      body:
        "Najenga programu za LLM za daraja la uzalishaji, mabomba ya RAG, na mifumo ya NLP, na rekodi ya kutoa bidhaa za AI katika sekta ya fedha, afya, ufikio, na biashara ya mtandao — kutoka usanifu hadi utekelezaji.",
      highlightsTitle: "Mazingira ya Kazi",
      highlights: [
        "AI agents for real-world automation and decision-making",
        "RAG systems for structured knowledge and search",
        "Seamless integration with APIs and SaaS tools",
        "Optimizing AI systems for cost, speed, and usability",
        "Building scalable, production-ready applications",
      ],
    },
    skills: {
      title: "Ujuzi",
      groups: [
        {
          title: "AI & Ujifunzaji wa Mashine",
          items: [
            "LangChain · LangGraph · RAG pipelines · AI agents · prompt engineering",
            "Model finetuning, embeddings, and vector databases (FAISS, Chroma, Pinecone)",
            "Multi-agent orchestration and autonomous workflow design",
            "Monitoring, logging, and LLM evaluation for production systems",
          ],
        },
        {
          title: "NLP & Mifumo ya LLM",
          items: [
            "Hugging Face Transformers · spaCy · NLTK for NLP pipelines",
            "Intent classification, named entity recognition, sentiment analysis",
            "OpenAI API · Anthropic Claude API · Gemini · Ollama integrations",
            "Text-to-Speech (TTS) and Automatic Speech Recognition (ASR)",
          ],
        },
        {
          title: "Backend & Full-Stack",
          items: [
            "Python · Django · Flask · FastAPI · WebSockets · RESTful APIs",
            "PostgreSQL · authentication systems · webhook automation",
            "JavaScript · HTML · CSS · responsive UI · React Native",
            "Docker · CI/CD · Render · Railway · Git and GitHub",
          ],
        },
        {
          title: "Data & Utafutaji",
          items: [
            "Vector databases (FAISS, Chroma, Pinecone, Weaviate) for semantic search",
            "Knowledge base design and document ingestion pipelines",
            "Embeddings-based search, semantic ranking, and RAG architecture",
            "Data preprocessing and retrieval optimization",
          ],
        },
        {
          title: "ERP & Muunganiko",
          items: [
            "SaaS platforms · QuickBooks · Microsoft Business Central",
            "Third-party API integrations and system configuration",
            "Mobile payment APIs and e-commerce platform integrations",
            "Technical onboarding, user training, and adoption monitoring",
          ],
        },
        {
          title: "Ujuzi Laini",
          items: [
            "Problem-solving and critical thinking in complex AI domains",
            "Collaboration in multi-disciplinary and cross-functional teams",
            "Clear communication of technical concepts to non-technical stakeholders",
            "Adaptability and rapid learning in fast-evolving AI environments",
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
          period: "2025-2026",
        },
        {
          degree: "Cheti cha Software Engineering",
          org: "Refactory Academy",
          period: "2025",
        },
        {
          degree: "BBA, Business Administration",
          org: "Kyambogo University",
          period: "2019-2023",
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
        projMwf: "Management system that automates inventory, orders, and production scheduling, providing a centralized platform for efficient operations, reporting, and customer management..",
        projMonica: "Chatbot yenye sauti na tabia maalum.",
        projFinance:
          "An AI finance assistant leveraging RAG and tool calling to teach budgeting, savings, and debt management, built with LangChain and Streamlit.",
        projTripMind: "An intelligent travel planning assistant that uses a multi-agent architecture to provide comprehensive, personalized travel recommendations.",
        projCustomerSupport:
          "Chatbot ya usaidizi wa wateja inayotumia NLP kwa uainishaji wa nia, utambuzi wa huluki, na majibu ya lugha nyingi kwa usaidizi wa kiotomasi.",
        projLavana:
          "Jukwaa la AI fintech linalowawezesha wanawake kwa usimamizi wa akiba, maombi ya mikopo, shughuli za SACCO, na mawakala wa ujuzi wa fedha wenye AI.",
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
      subtitle: "AI工程师 · 全栈开发者 · LLM与NLP系统",
      intro:
        "我构建生产级LLM应用、RAG管道、自主AI智能体和NLP系统，在金融科技、医疗科技和电商领域拥有端到端AI产品交付经验。深厚的Python/Django全栈基础，熟悉SaaS/ERP平台集成。",
      ctaPrimary: "查看项目",
      ctaSecondary: "联系我",
      badge: "可远程/可搬迁",
    },
    about: {
      title: "关于",
      body:
        "构建生产级LLM应用、RAG管道和NLP系统，在金融科技、医疗科技、无障碍技术和电商领域有端到端AI产品交付经验。深厚的Python/Django全栈基础，熟悉ERP平台集成，致力于用AI解决非洲及全球的真实问题。",
      highlightsTitle: "专长方向",
      highlights: [
        "AI agents for real-world automation and decision-making",
        "RAG systems for structured knowledge and search",
        "Seamless integration with APIs and SaaS tools",
        "Optimizing AI systems for cost, speed, and usability",
        "Building scalable, production-ready applications",
      ],
    },
    skills: {
      title: "技能",
      groups: [
        {
          title: "AI与机器学习",
          items: [
            "LangChain · LangGraph · RAG pipelines · AI agents · prompt engineering",
            "Model finetuning, embeddings, and vector databases (FAISS, Chroma, Pinecone)",
            "Multi-agent orchestration and autonomous workflow design",
            "Monitoring, logging, and LLM evaluation for production systems",
          ],
        },
        {
          title: "NLP与大语言模型",
          items: [
            "Hugging Face Transformers · spaCy · NLTK for NLP pipelines",
            "Intent classification, named entity recognition, sentiment analysis",
            "OpenAI API · Anthropic Claude API · Gemini · Ollama integrations",
            "Text-to-Speech (TTS) and Automatic Speech Recognition (ASR)",
          ],
        },
        {
          title: "后端与全栈开发",
          items: [
            "Python · Django · Flask · FastAPI · WebSockets · RESTful APIs",
            "PostgreSQL · authentication systems · webhook automation",
            "JavaScript · HTML · CSS · responsive UI · React Native",
            "Docker · CI/CD · Render · Railway · Git and GitHub",
          ],
        },
        {
          title: "数据与检索",
          items: [
            "Vector databases (FAISS, Chroma, Pinecone, Weaviate) for semantic search",
            "Knowledge base design and document ingestion pipelines",
            "Embeddings-based search, semantic ranking, and RAG architecture",
            "Data preprocessing and retrieval optimization",
          ],
        },
        {
          title: "ERP与系统集成",
          items: [
            "SaaS platforms · QuickBooks · Microsoft Business Central",
            "Third-party API integrations and system configuration",
            "Mobile payment APIs and e-commerce platform integrations",
            "Technical onboarding, user training, and adoption monitoring",
          ],
        },
        {
          title: "软技能",
          items: [
            "Problem-solving and critical thinking in complex AI domains",
            "Collaboration in multi-disciplinary and cross-functional teams",
            "Clear communication of technical concepts to non-technical stakeholders",
            "Adaptability and rapid learning in fast-evolving AI environments",
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
          period: "2025-2026",
        },
        {
          degree: "软件工程证书",
          org: "Refactory Academy",
          period: "2025",
        },
        {
          degree: "工商管理学士",
          org: "Kyambogo University",
          period: "2019-2023",
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
        projMwf: "Management system that automates inventory, orders, and production scheduling, providing a centralized platform for efficient operations, reporting, and customer management..",
        projMonica: "支持语音的聊天机器人与角色逻辑。",
        projFinance:
          "An AI finance assistant leveraging RAG and tool calling to teach budgeting, savings, and debt management, built with LangChain and Streamlit.",
        projTripMind: "An intelligent travel planning assistant that uses a multi-agent architecture to provide comprehensive, personalized travel recommendations.",
        projCustomerSupport:
          "基于NLP的客服聊天机器人，支持意图分类、实体识别和多语言自动响应，提供无缝自动化客户支持。",
        projLavana:
          "赋能女性的AI金融科技平台，涵盖储蓄管理、贷款申请、SACCO运营和LLM驱动的信用评分与金融素养智能体。",
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
      subtitle: "مهندس ذكاء اصطناعي · مطور Full-Stack · أنظمة LLM ومعالجة اللغة",
      intro:
        "ابني تطبيقات LLM على مستوى الانتاج وخطوط انابيب RAG ووكلاء AI مستقلين وانظمة NLP عبر قطاعات التقنية المالية والرعاية الصحية والتجارة الالكترونية — من التصميم الى التنفيذ.",
      ctaPrimary: "عرض المشاريع",
      ctaSecondary: "تواصل معي",
      badge: "متاح للعمل عن بعد والتنقل",
    },
    about: {
      title: "نبذة",
      body:
        "ابني تطبيقات LLM على مستوى الانتاج وخطوط انابيب RAG وانظمة NLP، مع سجل حافل في تسليم منتجات AI في قطاعات التقنية المالية والرعاية الصحية وسهولة الوصول والتجارة الالكترونية — من التصميم الى التنفيذ.",
      highlightsTitle: "مجالات التركيز",
      highlights: [
        "AI agents for real-world automation and decision-making",
        "RAG systems for structured knowledge and search",
        "Seamless integration with APIs and SaaS tools",
        "Optimizing AI systems for cost, speed, and usability",
        "Building scalable, production-ready applications",
      ],
    },
    skills: {
      title: "المهارات",
      groups: [
        {
          title: "الذكاء الاصطناعي والتعلم الآلي",
          items: [
            "LangChain · LangGraph · RAG pipelines · AI agents · prompt engineering",
            "Model finetuning, embeddings, and vector databases (FAISS, Chroma, Pinecone)",
            "Multi-agent orchestration and autonomous workflow design",
            "Monitoring, logging, and LLM evaluation for production systems",
          ],
        },
        {
          title: "معالجة اللغة الطبيعية وأنظمة LLM",
          items: [
            "Hugging Face Transformers · spaCy · NLTK for NLP pipelines",
            "Intent classification, named entity recognition, sentiment analysis",
            "OpenAI API · Anthropic Claude API · Gemini · Ollama integrations",
            "Text-to-Speech (TTS) and Automatic Speech Recognition (ASR)",
          ],
        },
        {
          title: "الباك اند والتطوير الشامل",
          items: [
            "Python · Django · Flask · FastAPI · WebSockets · RESTful APIs",
            "PostgreSQL · authentication systems · webhook automation",
            "JavaScript · HTML · CSS · responsive UI · React Native",
            "Docker · CI/CD · Render · Railway · Git and GitHub",
          ],
        },
        {
          title: "البيانات والاسترجاع",
          items: [
            "Vector databases (FAISS, Chroma, Pinecone, Weaviate) for semantic search",
            "Knowledge base design and document ingestion pipelines",
            "Embeddings-based search, semantic ranking, and RAG architecture",
            "Data preprocessing and retrieval optimization",
          ],
        },
        {
          title: "ERP والتكاملات",
          items: [
            "SaaS platforms · QuickBooks · Microsoft Business Central",
            "Third-party API integrations and system configuration",
            "Mobile payment APIs and e-commerce platform integrations",
            "Technical onboarding, user training, and adoption monitoring",
          ],
        },
        {
          title: "المهارات الناعمة",
          items: [
            "Problem-solving and critical thinking in complex AI domains",
            "Collaboration in multi-disciplinary and cross-functional teams",
            "Clear communication of technical concepts to non-technical stakeholders",
            "Adaptability and rapid learning in fast-evolving AI environments",
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
          period: "2025-2026",
        },
        {
          degree: "شهادة هندسة البرمجيات",
          org: "Refactory Academy",
          period: "2025",
        },
        {
          degree: "بكالوريوس ادارة الاعمال",
          org: "Kyambogo University",
          period: "2019-2023",
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
        projMwf: "Management system that automates inventory, orders, and production scheduling, providing a centralized platform for efficient operations, reporting, and customer management..",
        projMonica: "شات بوت صوتي بمنطق شخصية.",
        projFinance:
          "An AI finance assistant leveraging RAG and tool calling to teach budgeting, savings, and debt management, built with LangChain and Streamlit.",
        projTripMind: "An intelligent travel planning assistant that uses a multi-agent architecture to provide comprehensive, personalized travel recommendations.",
        projCustomerSupport:
          "روبوت دعم عملاء مدعوم بـ NLP مع تصنيف النوايا والتعرف على الكيانات وتوليد استجابات متعددة اللغات للمساعدة الآلية.",
        projLavana:
          "منصة تقنية مالية AI لتمكين المرأة بإدارة المدخرات والقروض وعمليات SACCO وتسجيل الائتمان ومحادثات التثقيف المالي بالذكاء الاصطناعي.",
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
