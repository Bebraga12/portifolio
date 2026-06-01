export type Language = 'en' | 'pt' | 'ru';

export interface NavTranslations {
  about: string;
  technologies: string;
  projects: string;
  contact: string;
}

export interface HeroTranslations {
  role: string;
  subtitle: string;
  contactBtn: string;
}

export interface AboutTranslations {
  heading: string;
  paragraphs: string[];
}

export interface SkillsTranslations {
  heading: string;
  categories: {
    backend: string;
    frontend: string;
    infra: string;
    ai: string;
    practices: string;
  };
}

export interface ProjectItem {
  title: string;
  fileName: string;
  description: string;
  stack: string[];
  link?: string;
  isPrivate?: boolean;
}

export interface ProjectsTranslations {
  heading: string;
  viewOnGithub: string;
  privateBadge: string;
  items: ProjectItem[];
}

export interface ContactTranslations {
  heading: string;
  intro: string;
  sendEmail: string;
}

export interface Translation {
  langName: string;
  countryName: string;
  flag: string;
  nav: NavTranslations;
  hero: HeroTranslations;
  about: AboutTranslations;
  skills: SkillsTranslations;
  projects: ProjectsTranslations;
  contact: ContactTranslations;
}

export const translations: Record<Language, Translation> = {
  en: {
    langName: 'English',
    countryName: 'United Kingdom',
    flag: '🇬🇧',
    nav: {
      about: 'About',
      technologies: 'Technologies',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      role: 'Back-End Developer',
      subtitle: 'Java · Spring Boot · PostgreSQL · Docker · Azure · Linux VPS · OpenAI API',
      contactBtn: 'Get in Touch',
    },
    about: {
      heading: 'About Me',
      paragraphs: [
        'I\'m a back-end developer focused on Java, Spring Boot and PostgreSQL, with hands-on experience in Angular, Ionic, Docker, Azure, Linux VPS administration, and cloud storage with AWS S3 and Azure Blob Storage.',
        'I\'ve worked on full-stack projects, building features on both back-end and front-end, creating REST APIs from scratch, implementing JWT authentication, managing databases, and deploying applications to production environments.',
        'I also have experience with Linux VPS servers, Docker-based deployments, cloud databases, application support, and AI-driven automations — including chatbots and OpenAI API integrations.',
        'One of my main projects is Mutation-AI-Studio, a tool that generates unit tests for Spring applications using a local LLM, with no external token costs.',
        'I\'m seeking opportunities as a Java/Spring Back-End Developer, remote or on-site in Salvador, Brazil.',
      ],
    },
    skills: {
      heading: 'Technologies',
      categories: {
        backend: 'Back-End',
        frontend: 'Front-End & Mobile',
        infra: 'Infra / DevOps / Cloud',
        ai: 'AI & Automation',
        practices: 'Practices',
      },
    },
    projects: {
      heading: 'Projects',
      viewOnGithub: 'View on GitHub',
      privateBadge: 'Proprietary — acquired by private company',
      items: [
        {
          title: 'Mutation-AI-Studio',
          fileName: 'mutation-ai-studio.java',
          description: 'A tool that generates unit tests for Spring applications using a local LLM, helping developers improve test coverage without spending money on external token-based APIs.',
          stack: ['Java', 'Spring Boot', 'Local LLM', 'AI Automation'],
          link: 'https://github.com/Bebraga12',
          isPrivate: false,
        },
        {
          title: 'Debian Linux VPS Cluster',
          fileName: 'debian-vps-cluster.sh',
          description: 'Infrastructure and automation project focused on Debian and Ubuntu Linux VPS administration, Docker-based deployments, VPS clustering, OpenAI API integrations, chatbots, and JavaScript automations to reduce manual tasks and improve internal processes.',
          stack: ['Debian Server', 'Ubuntu Server', 'Docker', 'VPS Cluster', 'OpenAI API', 'JavaScript'],
          isPrivate: true,
        },
        {
          title: 'FieldOps.apk',
          fileName: 'field-ops.apk',
          description: 'Mobile and web application built for a private engineering company to manage and track field workers — featuring geolocation, online/offline authentication, and biometric login across Android devices.',
          stack: ['Java', 'Spring Boot', 'PostgreSQL', 'Angular', 'Ionic', 'Azure'],
          isPrivate: true,
        },
      ],
    },
    contact: {
      heading: 'Contact',
      intro: 'Interested in working together? Feel free to reach out via email or connect on LinkedIn.',
      sendEmail: 'Send Email',
    },
  },

  pt: {
    langName: 'Português',
    countryName: 'Brasil',
    flag: '🇧🇷',
    nav: {
      about: 'Sobre',
      technologies: 'Tecnologias',
      projects: 'Projetos',
      contact: 'Contato',
    },
    hero: {
      role: 'Desenvolvedor Back-End',
      subtitle: 'Java · Spring Boot · PostgreSQL · Docker · Azure · VPS Linux · OpenAI API',
      contactBtn: 'Entre em contato',
    },
    about: {
      heading: 'Sobre Mim',
      paragraphs: [
        'Sou desenvolvedor back-end com foco em Java, Spring Boot e PostgreSQL, com experiência prática em Angular, Ionic, Docker, Azure, administração de VPS Linux e armazenamento em nuvem com AWS S3 e Azure Blob Storage.',
        'Tenho experiência em projetos full stack, desenvolvendo funcionalidades no back-end e front-end, criando APIs REST do zero, implementando autenticação com JWT, gerenciando bancos de dados e fazendo deploy de aplicações em produção.',
        'Também trabalhei com servidores Linux VPS, deploy com Docker, bancos de dados em nuvem, suporte a aplicações e automações com Inteligência Artificial, incluindo chatbots e integrações com a OpenAI API.',
        'Um dos meus principais projetos é o Mutation-AI-Studio, uma ferramenta que gera testes unitários para aplicações Spring usando uma LLM local, sem custo com tokens externos.',
        'Busco oportunidades como desenvolvedor Back-End Java/Spring, remoto ou presencial em Salvador.',
      ],
    },
    skills: {
      heading: 'Tecnologias',
      categories: {
        backend: 'Back-End',
        frontend: 'Front-End & Mobile',
        infra: 'Infra / DevOps / Cloud',
        ai: 'IA & Automação',
        practices: 'Práticas',
      },
    },
    projects: {
      heading: 'Projetos',
      viewOnGithub: 'Ver no GitHub',
      privateBadge: 'Código proprietário — adquirido por empresa privada',
      items: [
        {
          title: 'Mutation-AI-Studio',
          fileName: 'mutation-ai-studio.java',
          description: 'Uma ferramenta que gera testes unitários para aplicações Spring utilizando uma LLM local, ajudando desenvolvedores a melhorar a cobertura de testes sem gastar com APIs externas baseadas em tokens.',
          stack: ['Java', 'Spring Boot', 'Local LLM', 'AI Automation'],
          link: 'https://github.com/Bebraga12',
          isPrivate: false,
        },
        {
          title: 'Debian Linux VPS Cluster',
          fileName: 'debian-vps-cluster.sh',
          description: 'Projeto de infraestrutura e automação focado em administração de servidores Debian e Ubuntu Linux VPS, deploys com Docker, cluster de VPS, integrações com OpenAI API, chatbots e automações em JavaScript para reduzir tarefas manuais e melhorar processos internos.',
          stack: ['Debian Server', 'Ubuntu Server', 'Docker', 'VPS Cluster', 'OpenAI API', 'JavaScript'],
          isPrivate: true,
        },
        {
          title: 'FieldOps.apk',
          fileName: 'field-ops.apk',
          description: 'Aplicação web e mobile desenvolvida para uma empresa privada de engenharia para gerenciar e monitorar funcionários em campo, com geolocalização, autenticação online/offline e login por biometria em dispositivos Android.',
          stack: ['Java', 'Spring Boot', 'PostgreSQL', 'Angular', 'Ionic', 'Azure'],
          isPrivate: true,
        },
      ],
    },
    contact: {
      heading: 'Contato',
      intro: 'Interessado em trabalhar juntos? Entre em contato por email ou conecte-se no LinkedIn.',
      sendEmail: 'Enviar Email',
    },
  },

  ru: {
    langName: 'Русский',
    countryName: 'Россия',
    flag: '🇷🇺',
    nav: {
      about: 'Обо мне',
      technologies: 'Технологии',
      projects: 'Проекты',
      contact: 'Контакты',
    },
    hero: {
      role: 'Бэкенд-разработчик',
      subtitle: 'Java · Spring Boot · PostgreSQL · Docker · Azure · Linux VPS · OpenAI API',
      contactBtn: 'Связаться',
    },
    about: {
      heading: 'Обо мне',
      paragraphs: [
        'Я бэкенд-разработчик с фокусом на Java, Spring Boot и PostgreSQL, имею практический опыт работы с Angular, Ionic, Docker, Azure, администрированием Linux VPS и облачным хранилищем AWS S3 и Azure Blob Storage.',
        'У меня есть опыт в полностековых проектах: разработка функционала на бэкенде и фронтенде, создание REST API с нуля, реализация JWT-аутентификации, управление базами данных и деплой приложений в продакшн.',
        'Также я работал с Linux VPS серверами, Docker-деплоями, облачными базами данных, поддержкой приложений и автоматизацией с использованием ИИ, включая чат-боты и интеграции с OpenAI API.',
        'Один из моих главных проектов — Mutation-AI-Studio, инструмент для генерации unit-тестов для Spring-приложений с использованием локальной LLM, без затрат на токены.',
        'Ищу возможности как бэкенд-разработчик Java/Spring, удалённо или в офисе в Сальвадоре, Бразилия.',
      ],
    },
    skills: {
      heading: 'Технологии',
      categories: {
        backend: 'Бэкенд',
        frontend: 'Фронтенд & Мобильные',
        infra: 'Инфра / DevOps / Облако',
        ai: 'ИИ & Автоматизация',
        practices: 'Практики',
      },
    },
    projects: {
      heading: 'Проекты',
      viewOnGithub: 'Смотреть на GitHub',
      privateBadge: 'Проприетарное ПО — приобретено частной компанией',
      items: [
        {
          title: 'Mutation-AI-Studio',
          fileName: 'mutation-ai-studio.java',
          description: 'Инструмент, который генерирует unit-тесты для Spring-приложений с использованием локальной LLM, помогая разработчикам улучшать покрытие тестов без затрат на внешние token-based API.',
          stack: ['Java', 'Spring Boot', 'Local LLM', 'AI Automation'],
          link: 'https://github.com/Bebraga12',
          isPrivate: false,
        },
        {
          title: 'Debian Linux VPS Cluster',
          fileName: 'debian-vps-cluster.sh',
          description: 'Проект по инфраструктуре и автоматизации: администрирование Debian и Ubuntu Linux VPS серверов, Docker-деплои, кластеризация VPS, интеграции с OpenAI API, чат-боты и JavaScript-автоматизации для оптимизации внутренних процессов.',
          stack: ['Debian Server', 'Ubuntu Server', 'Docker', 'VPS Cluster', 'OpenAI API', 'JavaScript'],
          isPrivate: true,
        },
        {
          title: 'FieldOps.apk',
          fileName: 'field-ops.apk',
          description: 'Веб- и мобильное приложение для частной инжиниринговой компании — управление и мониторинг полевых сотрудников с геолокацией, онлайн/офлайн аутентификацией и биометрическим входом на Android-устройствах.',
          stack: ['Java', 'Spring Boot', 'PostgreSQL', 'Angular', 'Ionic', 'Azure'],
          isPrivate: true,
        },
      ],
    },
    contact: {
      heading: 'Контакты',
      intro: 'Хотите сотрудничать? Напишите мне на email или свяжитесь в LinkedIn.',
      sendEmail: 'Отправить email',
    },
  },
};

export const LANGUAGES: Language[] = ['en', 'pt', 'ru'];
