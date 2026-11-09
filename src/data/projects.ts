import { Project } from '../types';

import agenciaMarketiarImg from '../assets/images/screencapture-agenciamarketiar-local-2026-05-06-08_14_52 (1).webp';
import barbeariaCorteSupremoImg from '../assets/images/screencapture-barbeariacortesupremo-local-2026-05-06-08_26_44 (1).webp';
import autoFusionImg from '../assets/images/screencapture-autofusion-local-2026-05-06-08_22_24 (1).webp';
import blogPapoSingularImg from '../assets/images/screencapture-blogpaposingular-local-2026-05-06-08_29_30 (1).webp';
import fragatoMultimarcasImg from '../assets/images/screencapture-fragatomultimarcas-local-2026-05-06-08_31_39 (1).webp';
import hotelSerenitaImg from '../assets/images/screencapture-hotelserenita-local-2026-05-06-08_34_49 (1).webp';
import imobiliariaImg from '../assets/images/screencapture-imobiliaria-local-2026-05-06-08_45_38 (1).webp';
import lojaAcellusImg from '../assets/images/screencapture-lojaacellus-local-2026-05-06-08_48_31 (1).webp';
import lojaKactusImg from '../assets/images/screencapture-lojakactus-local-2026-05-06-08_52_25 (1).webp';
import lojaTikletsImg from '../assets/images/screencapture-lojatikletsstore-local-2026-05-06-08_50_33 (1).webp';
import pizzariaDeliveryImg from '../assets/images/screencapture-pizzariadelivery-local-2026-05-06-08_54_16 (1).webp';
import protocoloDesapegoImg from '../assets/images/screencapture-protocolo-do-desapego-vercel-app-2026-05-25-18_13_27.webp';
import clinicaExamesImg from '../assets/images/clinica consulta de exames.webp';
import clinicaEsteticaImg from '../assets/images/clinica de estetica.webp';
import clinicaOdontologiaImg from '../assets/images/clinica odontologia.webp';
import clinicaPsicologiaImg from '../assets/images/clinica psicologia.webp';
import drFabianoImg from '../assets/images/DOUTOR FABIANO ONCOLOGISTA.webp';
import advocaciaImg from '../assets/images/landingpage advocacia.webp';

export const projectsData: Project[] = [
  {
    id: '1',
    client: 'Agência Marketiar',
    niche: 'Agência de Marketing Digital',
    category: 'Landing Page',
    outcome: 'Página estratégica focada em captar leads qualificados para serviços de marketing digital e gestão de tráfego.',
    metrics: '+200% em solicitações de orçamento',
    description: 'Landing page de alta conversão para agência de marketing com copy persuasiva e funil de captação direto.',
    image: agenciaMarketiarImg,
    tags: ['Captação de Leads', 'Copy Estratégica', 'Design Premium']
  },
  {
    id: '2',
    client: 'Barbearia Corte Supremo',
    niche: 'Barbearia & Estética Masculina',
    category: 'Presença Local',
    outcome: 'Presença digital local que facilita agendamentos diretos e posiciona a barbearia como referência no bairro.',
    metrics: '+85 novos agendamentos via site',
    description: 'Site otimizado para buscas locais com botão de agendamento flutuante e galeria de cortes.',
    image: barbeariaCorteSupremoImg,
    tags: ['Google Meu Negócio', 'Agendamento Direto', 'SEO Local']
  },
  {
    id: '3',
    client: 'AutoFusion',
    niche: 'Concessionária & Veículos',
    category: 'Site Institucional',
    outcome: 'Vitrine digital profissional para exposição de veículos com filtros inteligentes e contato direto.',
    metrics: 'Redução de 50% em consultas básicas',
    description: 'Site institucional automotivo com catálogo visual, fichas técnicas e integração com WhatsApp comercial.',
    image: autoFusionImg,
    tags: ['Catálogo Digital', 'WhatsApp Integrado', 'Mobile First']
  },
  {
    id: '4',
    client: 'Blog Papo Singular',
    niche: 'Blog & Conteúdo Digital',
    category: 'Presença Local',
    outcome: 'Plataforma de conteúdo otimizada para SEO com layout editorial moderno e tempo de leitura otimizado.',
    metrics: '+320% em tráfego orgânico',
    description: 'Blog com arquitetura de informação pensada para engajamento e retenção de leitores.',
    image: blogPapoSingularImg,
    tags: ['SEO Orgânico', 'Layout Editorial', 'Performance 97/100']
  },
  {
    id: '5',
    client: 'Fragato Multimarcas',
    niche: 'Loja Multimarcas & Varejo',
    category: 'Loja Virtual',
    outcome: 'Presença digital completa para loja multimarcas com catálogo visual e promoções em destaque.',
    metrics: '+150 contatos mensais pelo site',
    description: 'Site institucional de varejo com vitrine de produtos, promoções sazonais e canal direto de atendimento.',
    image: fragatoMultimarcasImg,
    tags: ['Vitrine Digital', 'Promoções', 'Atendimento Rápido']
  },
  {
    id: '6',
    client: 'Hotel Serenità',
    niche: 'Hotelaria & Turismo',
    category: 'Site Institucional',
    outcome: 'Experiência visual imersiva que transmite sofisticação e facilita reservas diretas sem intermediários.',
    metrics: '+40% em reservas diretas',
    description: 'Site premium para hotel com galeria imersiva, sistema de reservas e integração com redes sociais.',
    image: hotelSerenitaImg,
    tags: ['Design Premium', 'Reservas Diretas', 'Galeria Imersiva']
  },
  {
    id: '7',
    client: 'Imobiliária Digital',
    niche: 'Imobiliária & Corretagem',
    category: 'Site Institucional',
    outcome: 'Portal imobiliário com busca avançada de imóveis e contato direto com corretores especializados.',
    metrics: '+90 leads qualificados por mês',
    description: 'Site institucional imobiliário com filtros de busca, fichas completas dos imóveis e agendamento de visitas.',
    image: imobiliariaImg,
    tags: ['Busca Avançada', 'Filtro de Leads', 'SEO Local']
  },
  {
    id: '8',
    client: 'Loja Acellus',
    niche: 'E-commerce & Acessórios',
    category: 'Loja Virtual',
    outcome: 'Loja online otimizada para conversão com catálogo visual atrativo e checkout simplificado.',
    metrics: '+180% em vendas online',
    description: 'Landing page de e-commerce focada em experiência de compra fluida e apresentação premium dos produtos.',
    image: lojaAcellusImg,
    tags: ['E-commerce', 'Conversão Alta', 'Design Moderno']
  },
  {
    id: '9',
    client: 'Loja Kactus',
    niche: 'E-commerce & Moda',
    category: 'Loja Virtual',
    outcome: 'Vitrine digital moderna com foco em experiência mobile e navegação intuitiva entre categorias.',
    metrics: '+210% em tráfego mobile',
    description: 'Loja online com design responsivo premium, carregamento rápido e integração com redes sociais.',
    image: lojaKactusImg,
    tags: ['Mobile First', 'Carregamento 1.2s', 'Social Commerce']
  },
  {
    id: '10',
    client: 'Loja Tiklets Store',
    niche: 'E-commerce & Varejo Online',
    category: 'Loja Virtual',
    outcome: 'Plataforma de vendas com layout clean e navegação focada em converter visitantes em compradores.',
    metrics: '+95% de taxa de engajamento',
    description: 'E-commerce com arquitetura de conversão, destaques sazonais e processo de compra em poucos cliques.',
    image: lojaTikletsImg,
    tags: ['UX de Compra', 'Alta Conversão', 'Design Clean']
  },
  {
    id: '11',
    client: 'Pizzaria Delivery',
    niche: 'Alimentação & Delivery',
    category: 'Presença Local',
    outcome: 'Cardápio digital interativo com pedidos diretos pelo WhatsApp e destaque para promoções do dia.',
    metrics: '+130 pedidos semanais via site',
    description: 'Presença digital para delivery com cardápio visual, combos em destaque e botão flutuante de pedido.',
    image: pizzariaDeliveryImg,
    tags: ['Cardápio Digital', 'WhatsApp Pedidos', 'SEO Local']
  },
  {
    id: '12',
    client: 'Protocolo do Desapego',
    niche: 'Lifestyle & Organização',
    category: 'Presença Local',
    outcome: 'Plataforma de conteúdo e serviços de organização pessoal com captação de leads para consultoria.',
    metrics: '+250 inscritos na lista de espera',
    description: 'Site de nicho lifestyle com blog integrado, captação de e-mails e agendamento de consultorias.',
    image: protocoloDesapegoImg,
    tags: ['Captação de E-mails', 'Blog Integrado', 'Consultoria Online']
  },
  {
    id: '13',
    client: 'Clínica Consulta de Exames',
    niche: 'Clínica Médica & Exames',
    category: 'Site Institucional',
    outcome: 'Portal de agendamento de exames com apresentação clara dos serviços e contato direto para marcação.',
    metrics: '+120 agendamentos mensais via site',
    description: 'Site institucional para clínica de exames com listagem de procedimentos, convênios aceitos e agendamento online.',
    image: clinicaExamesImg,
    tags: ['Agendamento Online', 'Convênios', 'SEO Local']
  },
  {
    id: '14',
    client: 'Clínica de Estética',
    niche: 'Estética & Beleza',
    category: 'Landing Page',
    outcome: 'Página de alta conversão para serviços estéticos com galeria de resultados e captação via WhatsApp.',
    metrics: '+95 novos pacientes por mês',
    description: 'Landing page premium para clínica de estética com antes/depois, depoimentos e agendamento simplificado.',
    image: clinicaEsteticaImg,
    tags: ['Galeria de Resultados', 'WhatsApp Integrado', 'Design Premium']
  },
  {
    id: '15',
    client: 'Clínica Odontologia',
    niche: 'Odontologia & Saúde Bucal',
    category: 'Presença Local',
    outcome: 'Presença local otimizada no Google com destaque para tratamentos e avaliação gratuita.',
    metrics: '+80 novos pacientes agendados via web',
    description: 'Site para clínica odontológica com apresentação dos tratamentos, equipe e botão flutuante de agendamento.',
    image: clinicaOdontologiaImg,
    tags: ['Google Meu Negócio', 'Agendamento Direto', 'Sem Jargões']
  },
  {
    id: '16',
    client: 'Clínica Psicologia',
    niche: 'Psicologia & Saúde Mental',
    category: 'Site Institucional',
    outcome: 'Site acolhedor que transmite confiança e facilita o primeiro contato para sessões presenciais e online.',
    metrics: '+60 novos pacientes em 3 meses',
    description: 'Presença digital humanizada para consultório de psicologia com abordagens, valores e agendamento discreto.',
    image: clinicaPsicologiaImg,
    tags: ['Atendimento Online', 'Design Acolhedor', 'Confidencial']
  },
  {
    id: '17',
    client: 'Dr. Fabiano Oncologista',
    niche: 'Oncologia & Medicina Especializada',
    category: 'Site Institucional',
    outcome: 'Presença digital que transmite autoridade médica e facilita o encaminhamento de pacientes para consulta.',
    metrics: '+45 consultas agendadas via site',
    description: 'Site profissional para médico oncologista com currículo, especialidades, publicações e canal direto de contato.',
    image: drFabianoImg,
    tags: ['Autoridade Médica', 'Currículo Online', 'Contato Direto']
  },
  {
    id: '18',
    client: 'Escritório de Advocacia',
    niche: 'Direito & Assessoria Jurídica',
    category: 'Landing Page',
    outcome: 'Landing page estratégica que converte buscas no Google em consultas jurídicas qualificadas.',
    metrics: 'Taxa de conversão de 12.5% em leads qualificados',
    description: 'Página de captação para escritório de advocacia com áreas de atuação, cases de sucesso e formulário de contato.',
    image: advocaciaImg,
    tags: ['Copywriting Jurídico', 'Alta Autoridade', 'Funil Direto']
  }
];
