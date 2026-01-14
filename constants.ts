import { Translation } from './types';

export const TRANSLATIONS: Record<string, Translation> = {
  pt: {
    nav: {
      home: 'Início',
      services: 'Serviços',
      process: 'Processo',
      investment: 'Investimento',
      projects: 'Projetos',
      testimonials: 'Depoimentos',
      contact: 'Contato',
    },
    hero: {
      headline: 'Transformamos sua presença digital em resultados reais.',
      subheadline: 'Estrutura profissional, rastreamento avançado e suporte contínuo para escalar seu negócio com segurança.',
      ctaPrimary: 'Solicitar Orçamento',
    },
    techStack: 'Tecnologia de Alta Performance',
    services: {
      title: 'Nossos Serviços',
      subtitle: 'Tudo o que você precisa para se posicionar e vender mais na internet.',
      items: [
        {
          title: 'Presença Digital',
          description: 'Estrutura profissional online para gerar autoridade imediata.',
          price: 'R$ 395,00',
          features: [
            'Posicionamento Estratégico',
            'Credibilidade e Autoridade',
            'Design Moderno e Responsivo',
            'Estrutura Profissional'
          ]
        },
        {
          title: 'Domínio + Hospedagem',
          description: 'Sua casa digital segura e rápida por 1 ano inteiro.',
          price: 'R$ 345,00',
          features: [
            'Domínio Profissional',
            'Hospedagem Rápida e Segura',
            'Configuração Google Meu Negócio',
            'Certificado SSL Incluso'
          ]
        },
        {
          title: 'Rastreamento (Ads)',
          description: 'A inteligência de dados que falta nas suas campanhas.',
          price: 'R$ 498,00',
          features: [
            'Google Tag Manager (GTM)',
            'Integração com GA4',
            'Eventos de Conversão Prontos',
            'Suporte Técnico (6 meses)'
          ]
        }
      ]
    },
    process: {
      title: 'Nosso Processo',
      subtitle: 'Simples, direto e focado em colocar seu projeto no ar.',
      steps: [
        {
          number: '01',
          title: 'Diagnóstico',
          description: 'Entendemos seu modelo de negócio e objetivos.'
        },
        {
          number: '02',
          title: 'Desenvolvimento',
          description: 'Criação da estrutura, design e configurações técnicas.'
        },
        {
          number: '03',
          title: 'Rastreamento',
          description: 'Instalação de tags e ferramentas de análise de dados.'
        },
        {
          number: '04',
          title: 'Entrega',
          description: 'Seu projeto no ar, testado e pronto para vender.'
        }
      ]
    },
    investment: {
      title: 'Investimento Inteligente',
      subtitle: 'O melhor custo-benefício do mercado para profissionalizar seu negócio.',
      offer: {
        label: 'Combo Completo',
        oldPrice: 'R$ 1.238,00',
        newPrice: 'R$ 949,00',
        discountBadge: 'Economia de 23%',
        features: [
          'Site Institucional Profissional',
          'Domínio + Hospedagem (1 Ano)',
          'Google Meu Negócio Configurado',
          'Rastreamento Avançado (Ads)',
          '6 Meses de Suporte Técnico'
        ]
      },
      chart: {
        title: 'Comparativo de Mercado',
        mdLabel: 'MD Studios',
        competitorLabel: 'Agências Tradicionais',
        tooltip: 'Investimento'
      }
    },
    pricing: {
      totalLabel: 'Valor Individual Total',
      totalValue: 'R$ 1.238,00',
      promoSubtitle: 'Oferta por Tempo Limitado',
      promoTitle: 'Combo Completo + Suporte',
      promoPrice: 'R$ 949,00',
      savings: 'Economia de R$ 289',
      discount: '23% OFF',
      cta: 'Quero Garantir o Combo'
    },
    comparison: {
      title: 'Por que escolher a MD?',
      description: 'Entregamos a mesma qualidade técnica de grandes agências, sem os custos abusivos.',
      mdLabel: 'MD Studios',
      competitorLabel: 'Concorrência'
    },
    projects: {
      title: 'Projetos Realizados',
      subtitle: 'Confira alguns dos negócios que transformamos recentemente.',
      viewProject: 'Ver Projeto'
    },
    testimonials: {
      title: 'O que dizem nossos clientes',
      subtitle: 'Resultados reais de quem confiou na nossa estrutura.'
    },
    faq: {
      title: 'Perguntas Frequentes',
      items: [
        {
          question: 'O valor é mensal ou único?',
          answer: 'O valor do desenvolvimento é ÚNICO. Você só paga uma vez pelo serviço. A única renovação anual é referente ao domínio e hospedagem para manter o site no ar.'
        },
        {
          question: 'Vocês fazem a gestão de tráfego?',
          answer: 'Nós deixamos toda a estrutura de rastreamento PRONTA (Pixel, API, GA4) para que seus anúncios performem melhor, mas a gestão mensal das campanhas é um serviço à parte.'
        },
        {
          question: 'Em quanto tempo o site fica pronto?',
          answer: 'Nosso prazo médio de entrega é de 5 a 10 dias úteis após o recebimento de todo o material necessário.'
        },
        {
          question: 'Tenho suporte após a entrega?',
          answer: 'Sim! No Combo Completo você tem 6 meses de suporte técnico para dúvidas e manutenção da estrutura.'
        },
        {
          question: 'Quais as formas de pagamento?',
          answer: 'Aceitamos PIX com desconto ou cartão de crédito parcelado.'
        },
        {
          question: 'Serve para qualquer nicho?',
          answer: 'Sim. Nossa estrutura é adaptável para prestadores de serviço, negócios locais, infoprodutores e muito mais.'
        }
      ]
    },
    contact: {
      title: 'Fale Conosco',
      whatsappPrompt: 'Explique brevemente o que você precisa:',
      placeholder: 'Olá, gostaria de saber mais sobre o Combo Completo...',
      send: 'Falar no WhatsApp',
      location: 'Ilha Solteira – SP'
    }
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      process: 'Process',
      investment: 'Investment',
      projects: 'Projects',
      testimonials: 'Testimonials',
      contact: 'Contact',
    },
    hero: {
      headline: 'Transforming your digital presence into real results.',
      subheadline: 'Professional structure, advanced tracking, and continuous support to scale your business safely.',
      ctaPrimary: 'Get a Quote',
    },
    techStack: 'High Performance Technology',
    services: {
      title: 'Our Services',
      subtitle: 'Everything you need to position yourself and sell more online.',
      items: [
        {
          title: 'Digital Presence',
          description: 'Professional online structure to generate immediate authority.',
          price: 'R$ 395.00',
          features: [
            'Strategic Positioning',
            'Credibility and Authority',
            'Modern & Responsive Design',
            'Professional Structure'
          ]
        },
        {
          title: 'Domain + Hosting',
          description: 'Your digital home, secure and fast for a full year.',
          price: 'R$ 345.00',
          features: [
            'Professional Domain',
            'Fast & Secure Hosting',
            'Google My Business Setup',
            'Free SSL Certificate'
          ]
        },
        {
          title: 'Tracking (Ads)',
          description: 'The data intelligence your campaigns are missing.',
          price: 'R$ 498.00',
          features: [
            'Google Tag Manager (GTM)',
            'GA4 Integration',
            'Conversion Events Ready',
            'Tech Support (6 months)'
          ]
        }
      ]
    },
    process: {
      title: 'Our Process',
      subtitle: 'Simple, direct, and focused on launching your project.',
      steps: [
        {
          number: '01',
          title: 'Diagnosis',
          description: 'We understand your business model and goals.'
        },
        {
          number: '02',
          title: 'Development',
          description: 'Creation of structure, design, and technical settings.'
        },
        {
          number: '03',
          title: 'Tracking',
          description: 'Installation of tags and data analysis tools.'
        },
        {
          number: '04',
          title: 'Delivery',
          description: 'Your project is live, tested, and ready to sell.'
        }
      ]
    },
    investment: {
      title: 'Smart Investment',
      subtitle: 'The best cost-benefit in the market to professionalize your business.',
      offer: {
        label: 'Full Combo',
        oldPrice: 'R$ 1,238.00',
        newPrice: 'R$ 949.00',
        discountBadge: 'Save 23%',
        features: [
          'Professional Institutional Site',
          'Domain + Hosting (1 Year)',
          'Google My Business Setup',
          'Advanced Tracking (Ads)',
          '6 Months Tech Support'
        ]
      },
      chart: {
        title: 'Market Comparison',
        mdLabel: 'MD Studios',
        competitorLabel: 'Traditional Agencies',
        tooltip: 'Investment'
      }
    },
    pricing: {
      totalLabel: 'Total Individual Value',
      totalValue: 'R$ 1,238.00',
      promoSubtitle: 'Limited Time Offer',
      promoTitle: 'Full Combo + Support',
      promoPrice: 'R$ 949.00',
      savings: 'Save R$ 289',
      discount: '23% OFF',
      cta: 'Secure The Combo'
    },
    comparison: {
      title: 'Why choose MD?',
      description: 'We deliver the same technical quality as large agencies, without the abusive costs.',
      mdLabel: 'MD Studios',
      competitorLabel: 'Competitors'
    },
    projects: {
      title: 'Recent Projects',
      subtitle: 'Check out some of the businesses we transformed recently.',
      viewProject: 'View Project'
    },
    testimonials: {
      title: 'What our clients say',
      subtitle: 'Real results from those who trusted our structure.'
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        {
          question: 'Is the fee monthly or one-time?',
          answer: 'The development fee is ONE-TIME. You only pay once for the service. The only annual renewal is for domain and hosting to keep the site online.'
        },
        {
          question: 'Do you manage paid ads?',
          answer: 'We leave the entire tracking structure READY (Pixel, API, GA4) for your ads to perform better, but monthly campaign management is a separate service.'
        },
        {
          question: 'How long does it take?',
          answer: 'Our average delivery time is 5 to 10 business days after receiving all necessary material.'
        },
        {
          question: 'Do I get support after delivery?',
          answer: 'Yes! In the Full Combo, you get 6 months of technical support for questions and structure maintenance.'
        },
        {
          question: 'What are the payment methods?',
          answer: 'We accept PIX with a discount or credit card installments.'
        },
        {
          question: 'Is it suitable for any niche?',
          answer: 'Yes. Our structure is adaptable for service providers, local businesses, info-product creators, and more.'
        }
      ]
    },
    contact: {
      title: 'Contact Us',
      whatsappPrompt: 'Briefly explain what you need:',
      placeholder: 'Hello, I would like to know more about the Full Combo...',
      send: 'Talk on WhatsApp',
      location: 'Ilha Solteira – SP'
    }
  }
};

export const PROJECTS = [
  {
    name: 'Secar em 20 Dias',
    url: 'https://secar-em20-diass.vercel.app/',
    category: 'Landing Page',
    tech: ['Next.js', 'Vercel', 'Conversão'],
    description: 'Página de alta conversão focada em infoproduto.'
  },
  {
    name: 'The Longer Method',
    url: 'https://the-longer-method-controle-e-confia-nine.vercel.app/',
    category: 'Institucional',
    tech: ['Branding', 'Motion', 'React'],
    description: 'Experiência imersiva para marca de lifestyle.'
  },
  {
    name: 'Agro Lime',
    url: 'https://agro-lime.vercel.app/',
    category: 'Corporativo',
    tech: ['B2B', 'Performance', 'SEO'],
    description: 'Portal corporativo para o setor do agronegócio.'
  }
];

export const TESTIMONIALS = [
  {
    name: 'Ricardo S.',
    role: 'CEO E-commerce',
    text: 'A precisão técnica da MD Studios é impressionante. A estruturação de dados do meu site mudou completamente a inteligência das minhas campanhas.',
    rating: 5
  },
  {
    name: 'Fernanda M.',
    role: 'Saúde e Bem-estar',
    text: 'Design sofisticado e entrega rápida. O suporte técnico me deu a segurança que eu precisava para escalar minha consultoria online.',
    rating: 5
  },
  {
    name: 'João P.',
    role: 'Agronegócio',
    text: 'Encontrei na MD Studios um parceiro estratégico. O pacote com hospedagem e GMN resolveu toda a parte burocrática digital da minha empresa.',
    rating: 5
  }
];