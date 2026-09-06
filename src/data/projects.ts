import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'Plataforma E-Commerce',
    description:
      'Marketplace completo con sistema de pagos, inventario en tiempo real y panel de administración. Escalado a 10K+ usuarios activos.',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Redis'],
    imageUrl: '/projects/ecommerce.jpg',
    liveUrl: 'https://ecommerce-demo.com',
    githubUrl: 'https://github.com/ricuesta/ecommerce',
    featured: true,
    category: 'fullstack',
  },
  {
    id: 'saas-analytics',
    title: 'SaaS Analytics Dashboard',
    description:
      'Dashboard de analíticas en tiempo real para SaaS B2B con gráficos interactivos, reportes automatizados y alertas configurables.',
    technologies: ['React', 'D3.js', 'Node.js', 'MongoDB', 'WebSocket'],
    imageUrl: '/projects/analytics.jpg',
    liveUrl: 'https://analytics-demo.com',
    githubUrl: 'https://github.com/ricuesta/analytics',
    featured: true,
    category: 'fullstack',
  },
  {
    id: 'fintech-app',
    title: 'App Fintech - Gestión de Inversiones',
    description:
      'Aplicación móvil para gestión de inversiones con portfolio tracking, alertas de mercado y analítica predictiva con ML.',
    technologies: ['React Native', 'TypeScript', 'Python', 'TensorFlow', 'AWS'],
    imageUrl: '/projects/fintech.jpg',
    featured: true,
    category: 'mobile',
  },
  {
    id: 'healthcare-platform',
    title: 'Plataforma Healthcare',
    description:
      'Sistema de telemedicina con videollamadas, gestión de citas, expedientes médicos digitales y prescripciones electrónicas.',
    technologies: ['Vue.js', 'Node.js', 'WebRTC', 'PostgreSQL', 'Docker'],
    imageUrl: '/projects/healthcare.jpg',
    liveUrl: 'https://health-demo.com',
    featured: false,
    category: 'fullstack',
  },
  {
    id: 'ai-content-generator',
    title: 'AI Content Generator',
    description:
      'Herramienta SaaS para generación de contenido marketing asistida por IA. Integración con GPT, Gemini y Claude.',
    technologies: ['Next.js', 'OpenAI API', 'Prisma', 'Tailwind CSS'],
    imageUrl: '/projects/ai-generator.jpg',
    liveUrl: 'https://ai-content-demo.com',
    githubUrl: 'https://github.com/ricuesta/ai-generator',
    featured: true,
    category: 'frontend',
  },
  {
    id: 'microservices-api',
    title: 'API Gateway & Microservices',
    description:
      'Arquitectura de microservicios con API Gateway, service mesh, observabilidad distribuida y despliegue automatizado con CI/CD.',
    technologies: ['Node.js', 'Docker', 'Kubernetes', 'gRPC', 'Prometheus'],
    imageUrl: '/projects/microservices.jpg',
    githubUrl: 'https://github.com/ricuesta/microservices',
    featured: false,
    category: 'backend',
  },
];
