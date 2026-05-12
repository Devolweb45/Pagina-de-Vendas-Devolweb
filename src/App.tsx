import React, { useState } from 'react';
import { 
  ArrowRight, 
  ChevronLeft,
  ChevronRight,
  Check, 
  Shield, 
  MousePointer2, 
  Target, 
  TrendingUp, 
  Smartphone, 
  Zap, 
  Layout, 
  ShoppingCart, 
  Database,
  BarChart, 
  Globe,
  Code2,
  Star,
  MessageCircle,
  Menu,
  X,
  Lock,
  RefreshCw,
  Search
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    stroke="none"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.558 0 11.897-5.335 11.9-11.894a11.83 11.83 0 00-3.481-8.413z"/>
  </svg>
);

const WHATSAPP_LINK = "https://wa.me/message/FXT5AF4CNKVPE1";

// --- Pricing Data ---
const PLANS = {
  PERFORMANCE: [
    {
      name: "Landing Page Simples",
      price: "800",
      target: "Apresentação & Leads",
      features: [
        "Seção principal/banner",
        "Apresentação do serviço/produto",
        "Benefícios e diferenciais",
        "Chamada para ação (CTA)",
        "Formulário ou WhatsApp",
        "FAQ (Dúvidas Comuns)",
        "Rodapé profissional",
        "Versão adaptada para celular"
      ]
    },
    {
      name: "LP Estratégica + Copy",
      price: "1.200",
      recommend: true,
      target: "Venda Persuasiva",
      features: [
        "Tudo da Landing Page Simples",
        "Auxílio na Estrutura Estratégica",
        "Comunicação de Conteúdo Profissional",
        "Escrita Persuasiva (Copywriting)",
        "Design Focado em Conversão",
        "Análise de Posicionamento"
      ]
    },
    {
      name: "Página de Vendas Completa",
      price: "1.500",
      target: "Infoprodutos & Ofertas",
      features: [
        "Headline estratégica",
        "Apresentação da oferta",
        "Seção de Dor e Solução",
        "Provas sociais/depoimentos",
        "Quebra de objeções",
        "Garantia & FAQ",
        "Oferta + CTA impactante",
        "Estrutura Mobile-First"
      ]
    }
  ],
  INSTITUCIONAL: [
    {
      name: "Plano Start",
      price: "1.800",
      target: "Pequenas Empresas",
      features: [
        "Até 3 páginas estratégicas",
        "Visual Profissional & Mobile",
        "Botão WhatsApp Flutuante",
        "Formulário Captura de Leads",
        "SEO Básico (Indexação)",
        "Configuração de Domínio"
      ]
    },
    {
      name: "Plano Profissional",
      price: "3.000",
      recommend: true,
      target: "Empresas em Crescimento",
      features: [
        "Até 6 páginas personalizadas",
        "Blog estratégico p/ autoridade",
        "Postagem de 6 artigos iniciais",
        "SEO On-page avançado",
        "Foco total em velocidade",
        "Google Analytics & Meta Pixel",
        "Estrutura LGPD básica"
      ]
    },
    {
      name: "Plano Premium",
      price: "5.500",
      target: "Empresas Estruturadas",
      features: [
        "Copywriting para Conversão",
        "Design de Alta Fidelidade",
        "Performance Ultra-Otimizada",
        "SEO p/ Palavras-Chave Foco",
        "Integrações de API customizadas",
        "Automação de Lead-to-CRM",
        "JetEngine (Dados Dinâmicos)"
      ]
    }
  ],
  OUTROS: [
    { title: "Landing Page", price: "1.200", detail: "Focada 100% em vender um único produto/serviço." },
    { title: "Loja Virtual (E-commerce)", price: "3.500+", detail: "Venda online com estoque, pagamento e frete integrados." },
    { title: "Sistemas Dinâmicos", price: "7.000+", detail: "Imobiliárias, Agendamentos, Marketplaces." },
    { title: "Manutenção Mensal", price: "250/mês", detail: "Hospedagem, atualizações e suporte técnico." }
  ]
};

// --- Components ---

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block px-3 py-1 bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">
    {children}
  </span>
);

const SectionHeading = ({ badge, title, subtitle, centered = false }: { badge: string; title: string; subtitle: string; centered?: boolean }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className={`mb-12 ${centered ? 'text-center' : ''}`}
  >
    <Badge>{badge}</Badge>
    <h2 className="headline-xl mb-4">{title}</h2>
    <p className={`text-brand-white/50 text-sm max-w-xl ${centered ? 'mx-auto' : ''}`}>{subtitle}</p>
  </motion.div>
);

const TestimonialsSection = () => {
  const reviews = [
    { name: "Carlos Silveira", role: "CEO, TechImóveis", text: "A Devolweb transformou nosso site em uma máquina de captação. A integração com JetEngine mudou nosso jogo." },
    { name: "Ana Paula", role: "Diretora de Marketing", text: "O suporte na manutenção é impecável. Nunca mais nos preocupamos com site fora do ar ou lento." },
    { name: "Ricardo Mendes", role: "Proprietário de E-commerce", text: "Minha loja virtual fatura 3x mais depois do redesign focado em conversão. O mobile é sensacional." }
  ];

  return (
    <section className="section-padding bg-gradient-brand">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          badge="Prova Social"
          title="Quem já transformou o digital conosco."
          subtitle="Empresas que saíram do amadorismo para uma presença digital de elite."
          centered
        />
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 glass-panel rounded-[2rem] border-white/5 relative"
            >
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3 h-3 text-brand-orange fill-current" />)}
              </div>
              <p className="text-sm italic text-white/70 mb-6 leading-relaxed">"{rev.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-orange to-brand-red flex items-center justify-center font-bold text-xs">
                  {rev.name[0]}
                </div>
                <div>
                  <div className="text-xs font-bold uppercase">{rev.name}</div>
                  <div className="text-[10px] text-white/30 uppercase">{rev.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="button-primary group text-sm border border-white/10 hover:bg-white/5 transition-all whitespace-nowrap">
            Quero esses mesmos resultados
            <Star className="w-4 h-4 ml-2 text-brand-orange fill-current" />
          </a>
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const faqs = [
    { q: "Qual o prazo médio de entrega?", a: "Para Landing Pages, entregamos em até 7-10 dias. Sites Institucionais levam de 15 a 30 dias, dependendo da complexidade." },
    { q: "Como funciona o pagamento?", a: "Trabalhamos com 40% de entrada, 30% no desenvolvimento e 30% na entrega, ou parcelamento no cartão de crédito via link." },
    { q: "O site já vem com SEO?", a: "Sim! Todos os nossos planos incluem otimização básica para indexação no Google. Planos Premium possuem estratégia avançada de palavras-chave." },
    { q: "O site será 100% meu ou terei que pagar mensalidade?", a: "O projeto é totalmente seu. Após a entrega, você terá total propriedade e acesso a todas as contas. Não cobramos aluguel de site." },
    { q: "Vou conseguir editar os conteúdos sozinho?", a: "Sim! Desenvolvemos o site com um painel administrativo intuitivo para que você possa alterar textos, imagens e blog sem depender de nós." },
    { q: "O site é rápido e funciona no celular?", a: "Com certeza. Utilizamos as tecnologias mais leves do mercado e foco total em Mobile-First para garantir que seu site abra em menos de 2 segundos." },
    { q: "Vocês fazem a hospedagem e o domínio?", a: "Nós configuramos tudo para você. Podemos indicar parceiros de alta performance ou configurar no seu servidor de escolha (Hostinger, Cloudways, etc)." },
    { q: "Teremos suporte após a entrega?", a: "Sim! Oferecemos 30 dias de garantia e suporte total após o ar, além de planos opcionais de manutenção mensal para manter tudo seguro e atualizado." }
  ];

  return (
    <section className="section-padding">
      <div className="max-w-3xl mx-auto">
        <SectionHeading 
          badge="Dúvidas Comuns"
          title="Perguntas Frequentes"
          subtitle="Tudo o que você precisa saber antes de iniciarmos o seu funil de vendas."
          centered
        />
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.details 
              key={i} 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-panel rounded-2xl border-white/5 group overflow-hidden"
            >
              <summary className="p-6 cursor-pointer flex justify-between items-center list-none outline-none">
                <span className="text-sm font-bold uppercase tracking-tight">{faq.q}</span>
                <ArrowRight className="w-4 h-4 text-brand-orange group-open:rotate-90 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-xs text-white/40 leading-relaxed max-w-2xl">
                {faq.a}
              </div>
            </motion.details>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-xs text-brand-white/40 mb-4 font-medium uppercase tracking-widest">Ainda tem dúvidas?</p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-6 py-4 border border-brand-orange/30 rounded-2xl hover:bg-brand-orange/10 transition-all group mx-auto w-fit">
            <WhatsappIcon className="text-brand-orange w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold text-brand-white/80 uppercase tracking-widest">Falar com Consultor</span>
          </a>
        </div>
      </div>
    </section>
  );
};

const PortfolioSection = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = React.useState(false);
  const images = [
    "/imagens/screencapture-autofusion-local-2026-05-06-08_22_24 (1).png",
    "/imagens/screencapture-barbeariacortesupremo-local-2026-05-06-08_26_44 (1).png",
    "/imagens/screencapture-hotelserenita-local-2026-05-06-08_34_49 (1).png",
    "/imagens/screencapture-lojaacellus-local-2026-05-06-08_48_31 (1).png",
    "/imagens/screencapture-lojatikletsstore-local-2026-05-06-08_50_33 (1).png",
    "/imagens/screencapture-pizzariadelivery-local-2026-05-06-08_54_16 (1).png"
  ];

  // Duplicate images for infinite scroll effect
  const displayImages = [...images, ...images];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      let scrollTo;
      
      if (direction === 'left') {
        scrollTo = scrollLeft - clientWidth / 2;
        if (scrollTo < 0) {
          // If at start, jump to mirror element in second half
          scrollRef.current.scrollTo({ left: scrollWidth / 2, behavior: 'auto' });
          return;
        }
      } else {
        scrollTo = scrollLeft + clientWidth / 2;
        if (scrollLeft + clientWidth >= scrollWidth - 5) {
          // If at end, jump back to start
          scrollRef.current.scrollTo({ left: 0, behavior: 'auto' });
          return;
        }
      }
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  React.useEffect(() => {
    const container = scrollRef.current;
    if (!container || isPaused) return;

    const animateScroll = () => {
      if (isPaused) return;
      
      const { scrollLeft, scrollWidth, clientWidth } = container;
      
      // Infinite loop logic: when we reach the end of the first set of images, snap back to start
      if (scrollLeft >= scrollWidth / 2) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += 1; // Constant slow movement
      }
      
      requestRef.current = requestAnimationFrame(animateScroll);
    };

    const requestRef = { current: requestAnimationFrame(animateScroll) };

    return () => cancelAnimationFrame(requestRef.current);
  }, [isPaused]);

  return (
    <section id="portfolio" className="py-16 md:py-24 overflow-hidden bg-gradient-dark border-b border-dark-border">
      <div className="max-w-7xl mx-auto px-6 mb-8 md:mb-12 text-center">
        <SectionHeading 
          badge="Portfólio de Elite"
          title="Projetos que entregam resultados"
          subtitle="Veja alguns dos funis e sistemas que desenvolvemos recentemente para nossos parceiros."
          centered
        />
      </div>
      
      <div 
        className="relative group/slider max-w-[1400px] mx-auto"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <button 
          onClick={() => {
            if (scrollRef.current) {
              const { clientWidth } = scrollRef.current;
              scrollRef.current.scrollBy({ left: -clientWidth / 2, behavior: 'smooth' });
            }
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-4 bg-brand-orange text-white rounded-full opacity-0 group-hover/slider:opacity-100 transition-opacity hidden md:flex shadow-xl shadow-brand-orange/20 hover:scale-110 active:scale-95"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button 
          onClick={() => {
            if (scrollRef.current) {
              const { clientWidth } = scrollRef.current;
              scrollRef.current.scrollBy({ left: clientWidth / 2, behavior: 'smooth' });
            }
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-4 bg-brand-orange text-white rounded-full opacity-0 group-hover/slider:opacity-100 transition-opacity hidden md:flex shadow-xl shadow-brand-orange/20 hover:scale-110 active:scale-95"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div 
          ref={scrollRef}
          className="flex gap-4 md:gap-8 overflow-x-auto px-6 md:px-20 no-scrollbar pb-8"
          style={{ scrollBehavior: 'auto' }}
        >
          {displayImages.map((src, i) => (
            <div key={i} className="w-[280px] md:w-[400px] flex-shrink-0 group relative overflow-hidden rounded-2xl glass-panel border-white/5 aspect-[3/4]">
              <img 
                src={src} 
                alt={`Portfolio ${i}`} 
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-700 opacity-60 group-hover:opacity-100" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div className="button-primary py-2 px-4 text-[10px] w-auto">Ver Projeto</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 flex justify-center relative z-10 px-6">
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="button-primary group text-sm">
          Quero um projeto de elite
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};

const AboutSection = () => (
  <section id="sobre" className="py-16 md:py-24 bg-gradient-dark overflow-hidden relative px-6">
    <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-brand-orange/5 blur-[100px] rounded-full -z-10" />
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="absolute -inset-4 bg-brand-orange/20 blur-3xl rounded-full opacity-30 animate-pulse" />
        <img 
          src="/imagens/ChatGPT Image 5 de mai. de 2026, 20_19_47.png" 
          alt="Marcelo Brasil - Creative Director" 
          className="relative z-10 w-full max-w-md mx-auto rounded-[3rem] border border-white/10 shadow-2xl transition-all duration-700" 
        />
        <div className="absolute -bottom-6 -right-6 glass-panel p-6 rounded-2xl border-brand-orange/30 z-20 shadow-xl shadow-brand-orange/20">
          <div className="text-2xl font-black text-brand-orange">10+ Anos</div>
          <div className="text-[10px] uppercase font-bold tracking-widest text-white/40">De Experiência Digital</div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <SectionHeading 
          badge="Quem Sou Eu"
          title="Marcelo Brasil"
          subtitle="Fundador e Arquiteto de Vendas na Devolweb."
        />
        <div className="space-y-6 text-brand-white/60 text-sm leading-relaxed">
          <p>
            Minha missão é simples: tirar empresas do "lugar comum" e transformá-las em autoridades digitais que vendem todos os dias.
          </p>
          <p>
            Não sou apenas um desenvolvedor. Sou um estrategista que entende de psicologia de consumo, design de conversão e tecnologia de ponta. Cada projeto da Devolweb recebe meu toque pessoal na arquitetura de vendas.
          </p>
          <div className="flex gap-8 pt-6">
            <div className="flex flex-col">
              <span className="text-brand-orange font-black text-2xl tracking-tighter">500k+</span>
              <span className="text-[10px] uppercase font-black text-white/20 tracking-wider">Investimento Gerenciado</span>
            </div>
            <div className="flex flex-col">
              <span className="text-brand-orange font-black text-2xl tracking-tighter">200+</span>
              <span className="text-[10px] uppercase font-black text-white/20 tracking-wider">Projetos Entregues</span>
            </div>
          </div>
          <div className="mt-10 flex justify-center lg:justify-start">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="button-primary group text-sm">
              Trabalhar com Marcelo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const App = () => {
  const [isSent, setIsSent] = useState(false);
  const [formState, setFormState] = useState({
    nome: '',
    email: '',
    servico: 'Site Institucional Start',
    desafio: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    
    // Formata a mensagem detalhada
    const message = `Olá Marcelo! Me chamo *${formState.nome}*.\n\n` +
      `*E-mail:* ${formState.email}\n` +
      `*Serviço:* ${formState.servico}\n` +
      `*Desafio:* ${formState.desafio}\n\n` +
      `Gostaria de agendar a consultoria grátis.`;
    
    // Como o seu link curto (wa.me/message/...) não aceita preenchimento de texto via URL,
    // nós copiamos os dados para a área de transferência do cliente.
    navigator.clipboard.writeText(message).then(() => {
      // Delay para o usuário ler a mensagem de sucesso no botão
      setTimeout(() => {
        window.open(WHATSAPP_LINK, '_blank');
        setIsSent(false);
        // Limpa o formulário
        setFormState({
          nome: '',
          email: '',
          servico: 'Site Institucional Start',
          desafio: ''
        });
      }, 2000);
    }).catch(() => {
      // Caso o navegador bloqueie o clipboard, abre o link direto
      window.open(WHATSAPP_LINK, '_blank');
      setIsSent(false);
    });
  };

  return (
    <main className="min-h-screen bg-dark-bg selection:bg-brand-orange selection:text-white pb-20">
      {/* --- HERO: O PROBLEMA --- */}
      <section className="pb-20 px-6 overflow-hidden relative bg-gradient-brand">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/5 blur-[120px] -z-10" />
        
        {/* Meteorites */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="meteor"
              style={{
                top: `${Math.random() * 100 - 50}%`,
                left: `${20 + Math.random() * 120}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${1.5 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        
        {/* Floating Elements */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 left-[10%] opacity-20 hidden lg:block"
        >
          <Code2 className="w-12 h-12 text-brand-orange" />
        </motion.div>

        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [10, -10, 10] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-40 left-[5%] opacity-15 hidden lg:block"
        >
          <Globe className="w-16 h-16 text-brand-red" />
        </motion.div>

        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-60 right-[15%] w-32 h-32 bg-brand-orange/20 rounded-full blur-3xl -z-10"
        />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10 pt-12 md:pt-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-4 flex justify-center md:justify-start">
              <img src="/imagens/devoweb_original-removebg-preview.png" alt="Devolweb Logo" className="h-24 md:h-32 w-auto ml-0 md:-ml-12" />
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-6 relative z-20">
              Ter um site bonito não resolve o seu <span className="text-gradient-orange italic px-1">problema de vendas</span>.
            </h1>
            <p className="text-lg text-brand-white/60 mb-8 max-w-lg">
              Em 2026, seu site deve ser o seu melhor vendedor. Nós transformamos códigos em funis de alta conversão para empresas que cansaram de ser ignoradas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center lg:items-start">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="button-primary group text-sm mx-0">
                Quero um site que venda
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-4 py-3 border border-dark-border rounded-xl hover:bg-white/5 transition-colors group w-full max-w-[280px]">
                <Search className="text-brand-orange w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-medium text-brand-white/40">Analise meu posicionamento</span>
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-dark-bg overflow-hidden grayscale">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Cliente" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-[#f97316] fill-current" />
                  ))}
                </div>
                <p className="text-[10px] font-black text-brand-white/50 uppercase tracking-widest">+ 200 SITES VENDIDOS</p>
              </div>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-dark-border pt-8 grayscale opacity-40">
              <div className="text-center">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-[10px] uppercase font-bold text-white/50">Performance</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">UX/UI</div>
                <div className="text-[10px] uppercase font-bold text-white/50">Psicologia</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">SEO</div>
                <div className="text-[10px] uppercase font-bold text-white/50">Autoridade</div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="relative bg-[#1a1a1a] p-1 rounded-3xl border border-dark-border glow-orange">
             <div className="bg-dark-bg rounded-[22px] overflow-hidden">
                <div className="h-8 bg-[#1a1a1a] px-4 flex items-center gap-2 border-b border-dark-border">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-red/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-orange/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  </div>
                  <div className="text-[9px] font-bold text-white/30 tracking-widest uppercase">sales-funnel-optimized.dev</div>
                </div>
                <div className="p-8 aspect-video flex flex-col justify-center">
                  <div className="flex gap-4 mb-4">
                    <div className="w-3/4 h-3 bg-white/5 rounded-full" />
                    <div className="w-1/4 h-3 bg-brand-orange/20 rounded-full" />
                  </div>
                  <div className="w-1/2 h-3 bg-white/10 rounded-full mb-8" />
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div 
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="h-20 glass-panel rounded-xl flex items-center justify-center"
                    >
                      <BarChart className="w-8 h-8 text-brand-orange" />
                    </motion.div>
                    <motion.div 
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                      className="h-20 glass-panel rounded-xl flex items-center justify-center"
                    >
                      <TrendingUp className="w-8 h-8 text-brand-red" />
                    </motion.div>
                  </div>
                </div>
             </div>

             {/* Floating UI Elements */}
             <motion.div 
                animate={{ y: [0, -12, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 glass-panel p-4 rounded-2xl border-brand-orange/20 z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-orange/20 rounded-full flex items-center justify-center">
                    <MousePointer2 className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <div className="text-xs font-black">+240%</div>
                    <div className="text-[9px] text-white/40 uppercase">Taxa de Cliques</div>
                  </div>
                </div>
             </motion.div>

             <motion.div 
                animate={{ y: [0, 12, 0] }} 
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                className="absolute -top-10 -left-6 glass-panel p-3 px-4 rounded-xl border-brand-red/20 z-20"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-red rounded-full animate-pulse" />
                  <div className="text-[9px] font-bold text-white/80 uppercase tracking-tighter">98/100 SEO Score</div>
                </div>
             </motion.div>

             <motion.div 
                animate={{ x: [0, 10, 0] }} 
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -right-12 glass-panel p-3 px-4 rounded-xl border-white/10 z-20 hidden md:block"
              >
                <div className="flex items-center gap-2">
                  <Zap className="w-3 h-3 text-brand-orange" />
                  <div className="text-[9px] font-bold text-white/80 uppercase">0.8s Load</div>
                </div>
             </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- ESTRATEGIA: O MÉTODO --- */}
      <section id="estrategia" className="section-padding bg-gradient-dark border-y border-dark-border relative overflow-hidden">
        {/* Dynamic Background Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading 
            badge="Metodologia Única"
            title="Estratégia antes do código."
            subtitle="Não somos apenas desenvolvedores. Somos arquitetos de vendas que transformam objetivos de negócio em interfaces de alta performance."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Target className="w-5 h-5 text-brand-orange" />, t: "Análise de Público", d: "Mapeamos o comportamento do seu cliente ideal para criar uma jornada de compra sem atritos.", step: "01" },
              { icon: <Layout className="w-5 h-5 text-brand-orange" />, t: "Arquitetura de Conversão", d: "Cada pixel é posicionado estrategicamente para guiar o olhar do usuário até a ação desejada.", step: "02" },
              { icon: <Smartphone className="w-5 h-5 text-brand-orange" />, t: "Mobile-First Design", d: "Velocidade absoluta e usabilidade impecável no dispositivo onde 80% das suas vendas acontecem.", step: "03" },
              { icon: <TrendingUp className="w-5 h-5 text-brand-orange" />, t: "Growth & SEO Score", d: "Código limpo e estruturado para garantir que seu site seja amado pelos algoritmos do Google.", step: "04" }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -5 }}
                className="group p-8 rounded-[2rem] glass-panel border-white/5 hover:border-brand-orange/30 transition-all duration-500 relative"
              >
                <div className="absolute top-6 right-8 text-4xl font-black text-white/5 group-hover:text-brand-orange/10 transition-colors">
                  {item.step}
                </div>
                
                <div className="w-14 h-14 bg-gradient-to-br from-brand-orange/10 to-brand-red/5 rounded-2xl flex items-center justify-center mb-6 border border-white/5 group-hover:border-brand-orange/20 transition-colors">
                  {item.icon}
                </div>
                
                <h4 className="text-base font-bold uppercase tracking-tight mb-3 group-hover:text-brand-orange transition-colors">
                  {item.t}
                </h4>
                
                <p className="text-xs text-brand-white/40 leading-relaxed group-hover:text-brand-white/60 transition-colors">
                  {item.d}
                </p>
                
                <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-[1px] bg-brand-orange/50" />
                  <span className="text-[10px] font-black uppercase text-brand-orange tracking-widest">Excelência</span>
                </div>
              </motion.div>
            ) )}
          </div>
          <div className="mt-16 flex justify-center">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="button-primary group text-sm">
              Descobrir meu Diagnóstico
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* --- PORTFOLIO --- */}
      <PortfolioSection />

      {/* --- SOLUÇÕES & PREÇOS --- */}
      <section id="solucoes" className="section-padding px-6 bg-gradient-brand">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            badge="Nossos Planos"
            title="Investimento estratégico p/ cada fase."
            subtitle="Escolha o plano que melhor se adapta ao momento atual da sua empresa."
            centered
          />

          {/* Performance & Landing Pages */}
          <div className="mb-12">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-brand-orange mb-8 opacity-50 px-2 border-l-2 border-brand-orange/30">Alta Conversão & Performance</h3>
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {PLANS.PERFORMANCE.map((plan, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className={`p-8 rounded-3xl glass-panel relative flex flex-col group transition-all hover:translate-y-[-5px] ${plan.recommend ? 'border-brand-orange/40 ring-1 ring-brand-orange/20' : ''}`}
                >
                  {plan.recommend && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-orange text-white text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-xl shadow-brand-orange/20">Mais Procurado</div>}
                  <div className="mb-8">
                    <h3 className="text-lg font-black uppercase tracking-tight mb-1">{plan.name}</h3>
                    <p className="text-[10px] text-white/30 uppercase font-bold mb-4">{plan.target}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs text-white/30">R$</span>
                      <span className="text-4xl font-extrabold tracking-tighter">{plan.price}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-10 flex-grow">
                    {plan.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-brand-white/60">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={`button-primary py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all text-center ${plan.recommend ? '' : 'bg-dark-bg border border-white/5 hover:bg-white/10'}`}>Selecionar Plano</a>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Planos Institucionais */}
          <div className="mb-12" id="precos">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-brand-orange mb-8 opacity-50 px-2 border-l-2 border-brand-orange/30">Presença Digital de Elite</h3>
            <div className="grid lg:grid-cols-3 gap-8 mb-20">
              {PLANS.INSTITUCIONAL.map((plan, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className={`p-8 rounded-3xl glass-panel relative flex flex-col group transition-all hover:translate-y-[-5px] ${plan.recommend ? 'border-brand-orange/40 ring-1 ring-brand-orange/20' : ''}`}
                >
                  {plan.recommend && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-orange text-white text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-xl shadow-brand-orange/20">Recomendado</div>}
                  <div className="mb-8">
                    <h3 className="text-lg font-black uppercase tracking-tight mb-1">{plan.name}</h3>
                    <p className="text-[10px] text-white/30 uppercase font-bold mb-4">{plan.target}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs text-white/30">R$</span>
                      <span className="text-4xl font-extrabold tracking-tighter">{plan.price}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-10 flex-grow">
                    {plan.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-brand-white/60">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={`button-primary py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all text-center ${plan.recommend ? '' : 'bg-dark-bg border border-white/5 hover:bg-white/10'}`}>Iniciar Consultoria</a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Outros Serviços */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PLANS.OUTROS.map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 glass-panel rounded-2xl border-white/5 transition-colors hover:border-brand-orange/20"
              >
                <h4 className="text-xs font-black uppercase text-brand-orange mb-2">{item.title}</h4>
                <div className="text-xl font-bold mb-2">R$ {item.price}</div>
                <p className="text-[10px] text-white/40 leading-relaxed">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SISTEMAS CUSTOM (JETENGINE) --- */}
      <section className="section-padding bg-gradient-dark">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading 
              badge="Alta Complexidade"
              title="Quando você precisa de mais que um site."
              subtitle="Não construímos apenas telas, construímos máquinas de vendas automatizadas."
            />
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {[
              { i: <Database />, t: "Dados Dinâmicos", d: "Sistemas para imobiliárias, catálogos e filtros avançados." },
              { i: <Lock />, t: "Área de Membros", d: "Plataformas de cursos ou portais exclusivos para clientes." },
              { i: <RefreshCw />, t: "Marketplaces", d: "Sistemas complexos de múltiplos vendedores e agendamentos." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="text-brand-orange">{item.i}</div>
                <div>
                  <h5 className="text-sm font-bold">{item.t}</h5>
                  <p className="text-xs text-brand-white/40 leading-relaxed">{item.d}</p>
                </div>
              </div>
            ))}
          </motion.div>
            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6">
              <div className="inline-block px-5 py-3 glass-panel rounded-xl border-brand-orange/30">
                 <span className="text-[10px] font-bold uppercase text-white/30">Investimento Inicial</span>
                 <div className="text-2xl font-bold">R$ 7.000,00+</div>
              </div>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="button-primary group text-sm">
                Solicitar Sistema
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="p-8 bg-[#161616] border border-dark-border rounded-[2rem] glow-orange">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-2">
                  <div className="text-xs uppercase font-extrabold tracking-widest text-brand-orange">Imobiliária Premium</div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[8px] font-black uppercase text-green-500">Sistema Ativo</span>
                  </div>
                </div>
                
                {[
                  { label: "Mansão Alphaville", price: "R$ 4.5M", type: "Venda" },
                  { label: "Cobertura Leblon", price: "R$ 8.9M", type: "Venda" },
                  { label: "Flat Business Center", price: "R$ 4.2k", type: "Aluguel" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-white/[0.03] border border-white/5 rounded-xl hover:border-brand-orange/30 transition-colors cursor-default">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand-orange/10 flex items-center justify-center">
                        <Database className="w-4 h-4 text-brand-orange" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-white/90">{item.label}</div>
                        <div className="text-[9px] text-white/40 uppercase font-medium">{item.type}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-black text-brand-orange">{item.price}</div>
                    </div>
                  </div>
                ))}

                <div className="pt-2 flex flex-col gap-3">
                  <div className="h-px bg-white/5 w-full" />
                  <div className="flex justify-between items-center px-1">
                    <div className="text-[9px] text-white/30 uppercase font-bold tracking-tighter">Total Registros: 1,248</div>
                    <div className="flex gap-1">
                      {[1, 2, 3].map(i => <div key={i} className="w-1 h-1 rounded-full bg-white/10" />)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- DEPOIMENTOS --- */}
      <TestimonialsSection />

      {/* --- MANUTENÇÃO --- */}
      <section id="manutencao" className="section-padding">
        <div className="max-w-7xl mx-auto glass-panel p-12 rounded-[3rem] relative overflow-hidden">
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-red/5 blur-[100px]" />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                badge="Sustentabilidade Digital"
                title="Manutenção e Segurança 24/7"
                subtitle="O seu site é um organismo vivo. Nós garantimos que ele esteja sempre saudável."
              />
              <div className="flex gap-4 items-center p-4 glass-panel rounded-2xl border-brand-orange/20 max-w-sm">
                <Shield className="w-8 h-8 text-brand-orange" />
                <div>
                  <div className="text-xs font-bold uppercase">Backup & Monitoramento</div>
                  <div className="text-[10px] text-white/40 italic">Sono tranquilo garantido.</div>
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-6 glass-panel rounded-2xl border-white/5 hover:border-brand-orange/30 transition-all group"
              >
                <div className="text-lg font-bold mb-1">Módulo Básico</div>
                <div className="text-2xl font-black text-brand-orange mb-4">R$ 147<span className="text-[10px] text-white/30 tracking-normal uppercase">/mês</span></div>
                <ul className="text-[10px] text-white/40 space-y-2 uppercase font-bold tracking-wider">
                  <li>• Backup Diário</li>
                  <li>• Updates de Segurança</li>
                  <li>• Check Performance</li>
                </ul>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-6 glass-panel rounded-2xl border-brand-red/30 hover:border-brand-red/50 transition-all group bg-brand-red/5"
              >
                <div className="text-lg font-bold mb-1">Profissional</div>
                <div className="text-2xl font-black text-brand-red mb-4">R$ 297<span className="text-[10px] text-white/30 tracking-normal uppercase">/mês</span></div>
                <ul className="text-[10px] text-white/40 space-y-2 uppercase font-bold tracking-wider">
                  <li>• Tudo do Básico</li>
                  <li>• Ajustes de Layout</li>
                  <li>• Suporte Prioritário</li>
                  <li>• Otimização Mensal</li>
                </ul>
              </motion.div>
            </div>
          </div>
          <div className="mt-12 flex justify-center">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="button-primary group text-sm whitespace-nowrap">
              Garantir minha Manutenção
              <Shield className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <FAQSection />

      {/* --- QUEM SOU EU --- */}
      <AboutSection />

      {/* --- FORMULARIO / CONTATO --- */}
      <section id="contato" className="section-padding bg-gradient-brand">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <SectionHeading 
                badge="Contato Direto"
                title="Comece sua transformação digital hoje."
                subtitle="Preencha os dados e receba uma análise estratégica personalizada do seu projeto."
              />
              <div className="space-y-8">
                <div className="flex gap-6 items-center">
                  <div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-brand-orange shrink-0">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold uppercase tracking-tight">Foco em Resultados Reais</div>
                    <p className="text-xs text-brand-white/40 leading-relaxed italic">Não entregamos apenas arquivos, entregamos canais de captação de clientes.</p>
                  </div>
                </div>
                
                <div className="p-6 glass-panel rounded-3xl border-white/5 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-orange to-brand-red p-1">
                    <div className="w-full h-full bg-dark-bg rounded-full flex items-center justify-center">
                      <Zap className="text-brand-orange w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm italic font-medium leading-tight">"A diferença entre um site comum e um funil Devolweb está na conversão."</div>
                    <div className="text-[9px] font-bold uppercase text-brand-orange mt-2 tracking-widest">— Marcelo, Creative Director</div>
                  </div>
                </div>
                
                <div className="pt-8 border-t border-dark-border">
                  <div className="text-[10px] font-bold uppercase text-white/30 mb-2">Formas de Pagamento</div>
                  <div className="text-xs font-bold leading-relaxed">40% Entrada + 30% Desenvolvimento + 30% Entrega</div>
                  <div className="text-[10px] text-brand-orange uppercase font-black mt-1">Consulte parcelamento no cartão</div>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-panel p-10 rounded-[2.5rem] relative"
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center glow-orange">
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
              <form className="space-y-5" onSubmit={handleFormSubmit}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold uppercase text-white/30 mb-2 block tracking-widest">Nome Completo</label>
                    <input 
                      type="text" 
                      required
                      value={formState.nome}
                      onChange={(e) => setFormState({ ...formState, nome: e.target.value })}
                      className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-orange text-sm" 
                      placeholder="Seu nome" 
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase text-white/30 mb-2 block tracking-widest">E-mail Corporativo</label>
                    <input 
                      type="email" 
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-orange text-sm" 
                      placeholder="seu@email.com" 
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase text-white/30 mb-2 block tracking-widest">Serviço Desejado</label>
                  <select 
                    value={formState.servico}
                    onChange={(e) => setFormState({ ...formState, servico: e.target.value })}
                    className="w-full bg-[#1a1a1a] border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-orange text-sm appearance-none cursor-pointer"
                  >
                    <option className="bg-[#1a1a1a]">Site Institucional Start</option>
                    <option className="bg-[#1a1a1a]">Site Institucional Profissional</option>
                    <option className="bg-[#1a1a1a]">Site Institucional Premium</option>
                    <option className="bg-[#1a1a1a]">Landing Page de Vendas</option>
                    <option className="bg-[#1a1a1a]">Ecommerce / Loja Virtual</option>
                    <option className="bg-[#1a1a1a]">Sistema Personalizado</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase text-white/30 mb-2 block tracking-widest">Qual seu maior desafio hoje?</label>
                  <textarea 
                    rows={3} 
                    required
                    value={formState.desafio}
                    onChange={(e) => setFormState({ ...formState, desafio: e.target.value })}
                    className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-orange text-sm" 
                    placeholder="Fale um pouco sobre o projeto..." 
                  />
                </div>
                <button type="submit" disabled={isSent} className="button-primary w-full py-5 text-sm uppercase tracking-widest shadow-xl shadow-brand-orange/20 mx-auto block text-center disabled:opacity-80 disabled:cursor-not-allowed">
                  {isSent ? (
                    <span className="flex flex-col items-center justify-center gap-1">
                       <span className="flex items-center gap-2 font-black"><Check className="w-4 h-4" /> Dados Copiado!</span>
                       <span className="text-[10px] opacity-70 normal-case font-medium">Basta colar no WhatsApp</span>
                    </span>
                  ) : "Agendar Consultoria Grátis"}
                </button>
                <div className="flex items-center justify-center gap-2 text-[9px] uppercase font-bold text-white/20 tracking-tighter">
                  <Lock className="w-3 h-3" /> Seus dados estão 100% seguros conosco.
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 border-t border-dark-border px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex items-center">
            <img src="/imagens/devoweb_original-removebg-preview.png" alt="Devolweb Logo" className="h-20 w-auto opacity-100" />
          </div>
          
          <div className="text-[10px] font-bold uppercase tracking-widest text-white/20 text-center md:text-left">
            © 2026 Devolweb. Todos os direitos reservados. Design p/ Conversão.
          </div>
          
          <div className="flex gap-6">
             <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-brand-orange transition-colors"><WhatsappIcon className="w-5 h-5" /></a>
             <a href="#" className="text-white/40 hover:text-brand-orange transition-colors"><TrendingUp className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>

      {/* Floating WA */}
      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl z-50 hover:scale-110 transition-transform">
        <WhatsappIcon className="text-white w-7 h-7" />
      </a>
    </main>
  );
};

export default App;