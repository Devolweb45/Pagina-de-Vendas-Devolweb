import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  ChevronLeft,
  ChevronRight,
  Check, 
  ChevronDown,
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
  Search,
  Eye
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
    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.181-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793 0-.853.43-.127.583-.127.153 0 .33-.145.33-.145l.135-.135c.162-.162.27-.27.27-.27l.081-.081c.081-.081.162-.081.243 0l.378.378.378.378c.081.081.162.162.243.243.081.081.081.162 0 .243a3.526 3.526 0 01-.243.243c-.081.081-.162.162-.054.27.108.108.481.794.694 1.063.213.269.458.497.712.684.254.187.671.413 1.07.413s.484-.251.664-.431c.18-.18.774-.91.972-1.225.198-.315.396-.28.664-.171l1.08.54c.269.135.45.202.518.315.068.113.068.653-.076 1.058zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.435 5.178L2 22l4.957-1.303C8.423 21.536 10.15 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
  </svg>
);

const WHATSAPP_LINK = "https://wa.me/message/FXT5AF4CNKVPE1";

// --- Components ---



const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block px-3 py-1 bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">
    {children}
  </span>
);

const NeonGlow = ({ color = "orange", position = "center" }: { color?: "orange" | "red"; position?: "left" | "right" | "center" }) => {
  const colorClass = color === "orange" ? "bg-brand-orange/5" : "bg-brand-red/5";
  const posClass = position === "left" ? "left-0 -translate-x-1/2" : position === "right" ? "right-0 translate-x-1/2" : "left-1/2 -translate-x-1/2";
  
  return (
    <div className={`absolute top-1/2 ${posClass} -translate-y-1/2 w-[600px] h-[600px] ${colorClass} blur-[120px] rounded-full pointer-events-none -z-10`} />
  );
};

const SectionHeading = ({ badge, title, subtitle, centered = false }: { badge: string; title: React.ReactNode; subtitle: string; centered?: boolean }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className={`mb-12 ${centered ? 'text-center' : 'text-center lg:text-left'}`}
  >
    <Badge>{badge}</Badge>
    <h2 className="headline-xl mb-4">{title}</h2>
    <p className={`text-brand-white/50 text-sm max-w-xl ${centered ? 'mx-auto' : 'mx-auto lg:mx-0'}`}>{subtitle}</p>
  </motion.div>
);

const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const testimonialImages = [
    "/imagens/imagem 01.png",
    "/imagens/imagem 03.png",
    "/imagens/imagem 04.png",
    "/imagens/imagem 05.png",
    "/imagens/imagem 06.png"
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="section-padding bg-gradient-brand leading-relaxed overflow-hidden relative">
      <NeonGlow color="orange" position="left" />
      <div className="max-w-7xl mx-auto px-6 relative mb-16">
        <SectionHeading 
          badge="PROVA REAL DE RESULTADOS"
          title={<>A opinião de quem decidiu <span className="text-brand-orange">crescer.</span></>}
          subtitle="Empresas que saíram do amadorismo para uma presença digital de elite e faturamento real."
          centered
        />
      </div>
        
      <div className="relative group w-full">
        <div 
          ref={scrollRef}
          className="flex items-center overflow-x-auto gap-6 pb-8 snap-x snap-mandatory no-scrollbar scroll-smooth px-[5vw] md:px-[10vw]"
        >
          {testimonialImages.map((img, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex-shrink-0 w-[240px] md:w-[350px] snap-center glass-panel rounded-[1.5rem] border-white/5 overflow-hidden bg-white/[0.02]"
            >
              <img 
                src={img} 
                alt={`Depoimento ${i + 1}`} 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>

        {/* Navigation Buttons - Inside the viewport area */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between z-30 pointer-events-none px-4 md:px-[8vw]">
          <button 
            onClick={() => scroll('left')}
            className="w-10 h-10 md:w-16 md:h-16 bg-brand-orange/40 md:bg-brand-orange/20 border border-white/10 rounded-full flex items-center justify-center text-white backdrop-blur-xl hover:bg-brand-orange hover:scale-110 active:scale-95 transition-all pointer-events-auto shadow-2xl opacity-100"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-10 h-10 md:w-16 md:h-16 bg-brand-orange/40 md:bg-brand-orange/20 border border-white/10 rounded-full flex items-center justify-center text-white backdrop-blur-xl hover:bg-brand-orange hover:scale-110 active:scale-95 transition-all pointer-events-auto shadow-2xl opacity-100"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mt-6 text-white/40 text-[9px] font-black uppercase tracking-widest flex items-center justify-center gap-4">
          <div className="w-8 h-px bg-white/10" />
          Arraste para navegar
          <div className="w-8 h-px bg-white/10" />
        </div>

        <div className="mt-16 flex justify-center px-4">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="button-primary group">
            Quero um site estratégico
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const faqs = [
    { q: "Em quanto tempo o site fica pronto?", a: "Para landing pages o prazo médio é de 5 a 10 dias úteis. Sites institucionais levam de 15 a 25 dias, dependendo da complexidade do projeto." },
    { q: "O site aparece no Google?", a: "Sim. Todos os nossos sites são entregues com SEO básico configurado e indexados no Google Search Console, garantindo que sua empresa seja encontrada por quem busca seus serviços." },
    { q: "Posso editar depois?", a: "Sim! Entregamos o site com um painel administrativo intuitivo (WordPress) para que você tenha autonomia total para editar textos, fotos e conteúdos sempre que precisar." },
    { q: "Vocês oferecem suporte?", a: "Sim, oferecemos suporte total pós-lançamento e planos de manutenção contínua para garantir que seu site esteja sempre seguro, rápido e atualizado 24h por dia." },
    { q: "O site funciona no celular?", a: "Com certeza. Utilizamos a metodologia Mobile-First, o que significa que seu site é projetado para ser ultra-rápido e ter uma usabilidade impecável onde 80% das suas vendas acontecem." },
    { q: "Preciso pagar hospedagem?", a: "Sim, todo site precisa de um domínio (seu nome na web) e uma hospedagem (servidor). Nós orientamos você na escolha das melhores opções e cuidamos de toda a parte técnica de configuração." }
  ];

  return (
    <section id="faq" className="section-padding bg-gradient-brand relative overflow-hidden">
      <NeonGlow color="red" position="right" />
      <div className="max-w-3xl mx-auto">
        <SectionHeading 
          badge="Tire suas dúvidas"
          title={<>Perguntas <span className="text-brand-orange">Frequentes</span></>}
          subtitle="Tudo o que você precisa saber para começar sua jornada digital com segurança."
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
              className="glass-panel rounded-2xl border-white/5 group overflow-hidden transition-all hover:border-brand-orange/20"
            >
              <summary className="p-6 cursor-pointer flex justify-between items-center list-none outline-none">
                <span className="text-sm font-black uppercase tracking-tight">{faq.q}</span>
                <ChevronDown className="w-4 h-4 text-brand-orange group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-xs text-brand-white/40 leading-relaxed uppercase tracking-widest font-medium">
                {faq.a}
              </div>
            </motion.details>
          ))}
        </div>
        <div className="mt-12 flex justify-center px-4">
           <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="button-primary group">
             Quero um site estratégico
             <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
           </a>
        </div>
      </div>
    </section>
  );
};

const PortfolioSection = () => {
  const projects = [
    {
      src: "/imagens/clinica consulta de exames.png",
      niche: "Clínica Consulta de Exames",
      results: ["✅ Agendamento de Exames Otimizado", "✅ Resultados Digitais Rápidos", "✅ Experiência do Paciente Premium"]
    },
    {
      src: "/imagens/clinica de estetica.png",
      niche: "Clínica de Estética",
      results: ["✅ Captação Automática de Clientes", "✅ Design Elegante e Moderno", "✅ Funil de Vendas de Tratamentos"]
    },
    {
      src: "/imagens/clinica odontologia.png",
      niche: "Clínica Odontologia",
      results: ["✅ Agendamentos Diretos via WhatsApp", "✅ Apresentação de Especialidades", "✅ Alta Conversão de Pacientes"]
    },
    {
      src: "/imagens/clinica psicologia.png",
      niche: "Clínica Psicologia",
      results: ["✅ Atendimento Seguro e Humanizado", "✅ Agendamento de Consultas Rápido", "✅ Presença Digital de Autoridade"]
    },
    {
      src: "/imagens/DOUTOR FABIANO ONCOLOGISTA.png",
      niche: "Doutor Fabiano Oncologista",
      results: ["✅ Autoridade Médica de Destaque", "✅ Informações Claras de Saúde", "✅ Atendimento Seguro e Humanizado"]
    },
    {
      src: "/imagens/screencapture-agenciamarketiar-local-2026-05-06-08_14_52 (1).png",
      niche: "Agência Marketiar",
      results: ["✅ Presença Digital Premium", "✅ Posicionamento de Marca", "✅ Captação de Leads B2B"]
    },
    {
      src: "/imagens/screencapture-autofusion-local-2026-05-06-08_22_24 (1).png",
      niche: "Autofusion",
      results: ["✅ Catálogo de Veículos Moderno", "✅ Experiência de Compra Premium", "✅ Contato Rápido e Eficiente"]
    },
    {
      src: "/imagens/screencapture-barbeariacortesupremo-local-2026-05-06-08_26_44 (1).png",
      niche: "Barbearia Corte Supremo",
      results: ["✅ Agendamento Online Simplificado", "✅ Exibição de Portfólio Visual", "✅ Maior Retenção de Clientes"]
    },
    {
      src: "/imagens/screencapture-blogpaposingular-local-2026-05-06-08_29_30 (1).png",
      niche: "Blog Papo Singular",
      results: ["✅ Layout Orientado à Leitura", "✅ Navegação Rápida e Limpa", "✅ Engajamento e SEO Otimizados"]
    },
    {
      src: "/imagens/screencapture-fragatomultimarcas-local-2026-05-06-08_31_39 (1).png",
      niche: "Fragato Multimarcas",
      results: ["✅ Loja Virtual Dinâmica", "✅ Vitrine Virtual Atrativa", "✅ Experiência de Compra Segura"]
    },
    {
      src: "/imagens/screencapture-hotelserenita-local-2026-05-06-08_34_49 (1).png",
      niche: "Hotel Serenita",
      results: ["✅ Sistema de Reservas Diretas", "✅ Apresentação de Acomodações", "✅ Credibilidade e Elegância"]
    },
    {
      src: "/imagens/screencapture-imobiliaria-local-2026-05-06-08_45_38 (1).png",
      niche: "Imobiliária",
      results: ["✅ Buscador de Imóveis Avançado", "✅ Exibição de Propriedades 360", "✅ Captação de Contatos Automática"]
    },
    {
      src: "/imagens/screencapture-lojaacellus-local-2026-05-06-08_48_31 (1).png",
      niche: "Loja Acellus",
      results: ["✅ E-commerce de Alta Conversão", "✅ Processo de Checkout Ágil", "✅ Destaque de Promoções"]
    },
    {
      src: "/imagens/screencapture-lojakactus-local-2026-05-06-08_52_25 (1).png",
      niche: "Loja Kactus",
      results: ["✅ Identidade Visual Única", "✅ Fácil Navegação e Compra", "✅ Aumento do Ticket Médio"]
    },
    {
      src: "/imagens/screencapture-lojatikletsstore-local-2026-05-06-08_50_33 (1).png",
      niche: "Loja Tiklets Store",
      results: ["✅ Vendas Rápidas Integradas", "✅ Layout Focado em Produtos", "✅ Performance Impecável"]
    },
    {
      src: "/imagens/screencapture-pizzariadelivery-local-2026-05-06-08_54_16 (1).png",
      niche: "Pizzaria Delivery",
      results: ["✅ Pedidos Online Facilitados", "✅ Cardápio Digital Interativo", "✅ Fidelização de Clientes"]
    },
    {
      src: "/imagens/screencapture-protocolo-do-desapego-vercel-app-2026-05-25-18_13_27.png",
      niche: "Protocolo do Desapego",
      results: ["✅ Funil de Vendas de Infoproduto", "✅ Design Moderno e Persuasivo", "✅ Performance Ultra Rápida"]
    }
  ];

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-gradient-dark overflow-hidden relative">
      <NeonGlow color="orange" position="center" />
      <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-16 text-center">
        <SectionHeading 
          badge="Portfólio de Elite"
          title={<>Projetos que entregam <span className="text-brand-orange">resultados</span></>}
          subtitle="Confira como transformamos o digital de empresas em diversos nichos com estratégias de alta conversão."
          centered
        />
      </div>
      
      <div className="relative">
        <div 
          className="flex gap-8 animate-marquee"
          style={{ width: "fit-content" }}
        >
          {[...projects, ...projects].map((project, i) => (
            <div 
              key={i} 
              className="group flex flex-col bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden hover:border-brand-orange/30 transition-all hover:bg-white/[0.04] w-[260px] md:w-[320px] shrink-0"
            >
              <div className="aspect-[3/4] overflow-hidden relative border-b border-white/5 bg-[#121212]">
                <img 
                  src={project.src} 
                  alt={project.niche} 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-white mb-3">
                    {project.niche}
                  </h4>
                  <ul className="space-y-2 mb-4">
                    {project.results.map((result, idx) => (
                      <li key={idx} className="text-[10px] uppercase font-bold tracking-wider text-brand-white/60 flex items-start gap-1.5 leading-normal">
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group/btn w-full justify-between">
                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-white/40 group-hover/btn:text-brand-orange transition-colors">Ver Detalhes do Projeto</span>
                    <ArrowRight className="w-3 h-3 text-brand-white/20 group-hover/btn:text-brand-orange group-hover/btn:translate-x-1 transition-all" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Faded edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-dark-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-dark-bg to-transparent z-10 pointer-events-none" />
      </div>
      <div className="mt-16 flex justify-center relative z-10 px-4">
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="button-primary group">
          Quero um site estratégico
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};

const AboutSection = () => (
  <section id="sobre" className="py-16 md:py-24 bg-gradient-dark overflow-hidden relative px-6">
    <NeonGlow color="orange" position="left" />
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
          src="/imagens/marcelo_brasil.png" 
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
        <Badge>A mente por trás do código</Badge>
        <h2 className="text-4xl font-black tracking-tight mb-2 uppercase">Marcelo <span className="text-brand-orange">Brasil</span></h2>
        <h3 className="text-lg font-bold text-brand-orange mb-8 uppercase tracking-[0.2em]">Estratega Digital & Desenvolvedor Full-Stack</h3>
        
        <div className="space-y-6 text-brand-white/50 text-xs leading-relaxed tracking-wider font-medium">
          <p>
            Minha missão é simples: tirar sua empresa da <strong>invisibilidade digital</strong> e colocá-la na frente de quem realmente quer comprar. Acredito que um site não deve ser apenas um "cartão de visitas" bonito, mas sim um funcionário incansável que trabalha 24h por dia para você.
          </p>
          <p>
            Especialista em ecossistemas WordPress de alta performance e sistemas dinâmicos com JetEngine, transformo infraestruturas complexas em experiências de usuário simples e altamente lucrativas.
          </p>
          <div className="flex gap-8 pt-6">
            <div className="flex flex-col">
              <span className="text-brand-orange font-black text-2xl tracking-tighter">500+</span>
              <span className="text-[10px] uppercase font-black text-white/20 tracking-wider">Sites Entregues</span>
            </div>
            <div className="flex flex-col">
              <span className="text-brand-orange font-black text-2xl tracking-tighter">100%</span>
              <span className="text-[10px] uppercase font-black text-white/20 tracking-wider">Foco em ROI</span>
            </div>
          </div>
          <div className="mt-10 flex justify-center lg:justify-start">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="button-primary group px-8">
              Quero um site estratégico
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

// --- Services Data ---
const SERVICES_DATA = [
  { 
    icon: <Globe />, 
    title: "Criação de Sites Profissionais", 
    description: "Desenvolvemos sites modernos, responsivos e otimizados para mecanismos de busca, garantindo presença digital de alto impacto.",
    features: ["Design exclusivo e personalizado", "SEO otimizado desde o início", "Carregamento ultrarrápido", "Responsivo em todos os dispositivos"],
    forWho: "Empresas que precisam de um site profissional para atrair clientes e gerar credibilidade."
  },
  { 
    icon: <MousePointer2 />, 
    title: "Landing Pages de Alta Conversão", 
    description: "Páginas focadas 100% em converter visitantes em leads ou vendas, com design persuasivo e foco total em resultados.",
    features: ["Foco total em conversão", "Copywriting persuasivo (Copy)", "Design focado em vendas", "Integração com CRM e WhatsApp"],
    forWho: "Infoprodutores, prestadores de serviços e empresas em fase de lançamento."
  },
  { 
    icon: <ShoppingCart />, 
    title: "E-commerces & Lojas Virtuais", 
    description: "Estrutura robusta para vender seus produtos online, com checkout otimizado e integração completa para escalar seu negócio.",
    features: ["Catálogo de produtos otimizado", "Checkout seguro e rápido", "Integração com meios de pagamento", "Gestão de estoque e pedidos"],
    forWho: "Lojistas que querem vender online com uma estrutura profissional e escalável."
  },
  { 
    icon: <Database />, 
    title: "Sistemas Web Personalizados", 
    description: "Desenvolvimento de ferramentas e dashboards sob medida para automatizar e operacionalizar os processos da sua empresa.",
    features: ["Painéis administrativos intuitivos", "Automatização de processos", "Segurança de dados blindada", "Arquitetura escalável"],
    forWho: "Empresas que precisam de ferramentas específicas para gerir o crescimento."
  }
];

const CTASection = () => (
  <section id="cta" className="py-20 px-6 relative overflow-hidden bg-[#0a0a0a]">
    {/* Animated Background Grid */}
    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
    
    {/* Rotating & Moving Background Glow - More visible and immediate */}
    <motion.div 
      animate={{ 
        rotate: [0, 360],
        x: [-100, 100, 100, -100, -100],
        y: [-100, -100, 100, 100, -100]
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange/20 blur-[140px] rounded-full pointer-events-none z-0"
    />

    <div className="max-w-5xl mx-auto relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-panel p-10 md:p-20 rounded-[3rem] border-white/5 text-center relative overflow-hidden group shadow-2xl"
      >
        {/* Animated Border/Glow for the card - Visible by default, intensifies on hover */}
        <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange/0 via-brand-orange/20 to-brand-orange/0 opacity-40 group-hover:opacity-100 transition-opacity blur-xl rounded-[3rem]" />
        
        {/* Rotating Light Effect */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] aspect-square bg-[conic-gradient(from_0deg,transparent_0deg,rgba(249,115,22,0.15)_120deg,transparent_180deg)] pointer-events-none z-0"
        />
        
        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight max-w-3xl mx-auto">
          Pronto para escalar seu negócio com <span className="text-brand-orange">tecnologia?</span>
        </h2>
        
        <p className="text-brand-white/50 text-sm md:text-base leading-relaxed mb-12 max-w-2xl mx-auto font-medium">
          Conte sua ideia para nosso time. Em poucos minutos você recebe um diagnóstico gratuito e um plano sob medida para o seu projeto.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="button-primary group shadow-xl shadow-brand-orange/20 !mx-0">
            <WhatsappIcon className="w-4 h-4" />
            Falar no WhatsApp
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#portfolio" className="bg-white/5 hover:bg-white/10 border border-white/10 text-brand-white font-bold py-5 px-10 rounded-[2.5rem] text-sm tracking-widest transition-all w-full sm:w-auto text-center !mx-0">
            Ver casos de sucesso
          </a>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-white/5 grayscale opacity-40">
          <div className="flex items-center gap-2">
            <RefreshCw className="w-4 h-4 text-brand-orange" />
            <span className="text-[10px] font-black uppercase tracking-widest">Resposta em até 1h</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-brand-orange" />
            <span className="text-[10px] font-black uppercase tracking-widest">Orçamento gratuito</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-brand-orange" />
            <span className="text-[10px] font-black uppercase tracking-widest">Sem compromisso</span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const StackSection = () => {
  const techs = [
    { 
      name: "React", 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-[#61DAFB]">
          <circle cx="12" cy="12" r="2" />
          <path d="M12 7c3.5 0 7 1.5 7 3.5s-3.5 3.5-7 3.5S5 12.5 5 10.5 8.5 7 12 7z" transform="rotate(0 12 12)" />
          <path d="M12 7c3.5 0 7 1.5 7 3.5s-3.5 3.5-7 3.5S5 12.5 5 10.5 8.5 7 12 7z" transform="rotate(60 12 12)" />
          <path d="M12 7c3.5 0 7 1.5 7 3.5s-3.5 3.5-7 3.5S5 12.5 5 10.5 8.5 7 12 7z" transform="rotate(120 12 12)" />
        </svg>
      )
    },
    {
      name: "Next.js",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.75 18.25l-7.75-10.25v10.25h-1.5v-12.5h1.5l7.75 10.25v-10.25h1.5v12.5h-1.5z" />
        </svg>
      )
    },
    {
      name: "Node.js",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#339933]">
          <path d="M12 24c-.21 0-.414-.054-.593-.158l-10-5.774c-.368-.212-.594-.606-.593-1.03l.004-11.545c.002-.424.228-.816.597-1.026l10-5.698c.365-.208.81-.207 1.173.003l10 5.774c.368.212.594.606.593 1.03l-.004 11.545c-.002.424-.228.816-.597 1.026l-10 5.698c-.18.103-.383.155-.584.155zm-1.127-14.717v3.037c0 .178.144.321.321.321h3.037c.178 0 .321-.144.321-.321v-3.037c0-.178-.144-.321-.321-.321h-3.037c-.178 0-.321.144-.321.321z" />
        </svg>
      )
    },
    {
      name: "TypeScript",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#3178C6]">
          <path d="M22.675 0h-21.35C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h21.351C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0zm-13.621 16.924c0 .873-.139 1.587-.417 2.144-.278.557-.66.985-1.146 1.282s-1.054.444-1.706.444c-.754 0-1.391-.219-1.91-.657s-.863-1.009-1.031-1.714l1.644-.33c.121.503.321.879.601 1.127.279.248.654.372 1.124.372.433 0 .783-.141 1.05-.424.267-.282.401-.734.401-1.356V7.484h1.99v9.44zm8.682-6.524H15.01V7.484h7.022V9.08h-2.261v7.844c0 .857-.133 1.554-.401 2.091-.267.537-.629.948-1.085 1.232s-.984.426-1.583.426c-.722 0-1.332-.212-1.832-.635s-.832-1.01-.995-1.76l1.588-.344c.117.514.303.883.559 1.107.255.224.58.336.974.336.388 0 .692-.128.913-.383.22-.255.33-.659.33-1.211V10.4z" />
        </svg>
      )
    },
    {
      name: "Tailwind",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#06B6D4]">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.201 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.537 6.182 15.176 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.712 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.537 13.382 9.176 12 6.001 12z" />
        </svg>
      )
    },
    {
      name: "Supabase",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#3ECF8E]">
          <path d="M21.362 9.354H12V.338a.337.337 0 00-.547-.26L2.638 7.234a.338.338 0 00-.094.417L6.638 14.646H12v9.016a.337.337 0 00.547.26l8.815-7.156a.338.338 0 00.094-.417l-4.094-7.005z" />
        </svg>
      )
    },
    {
      name: "WordPress",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#21759B]">
          <path d="M12.158 12.786l-2.698 7.84c.806.236 1.657.365 2.54.365 1.047 0 2.051-.181 2.986-.51-.11-.181-.19-.364-.19-.582 0-.317.143-.538.285-.793.127-.222.253-.444.253-.84 0-.444-.221-.84-.46-1.268l-2.716-4.222zm.032-1.077l2.124 6.132c.507-1.157.794-2.424.794-3.76 0-.84-.11-1.649-.317-2.424l-2.6 7.428-2.617-7.444c-.206.775-.317 1.584-.317 2.424 0 1.252.261 2.441.73 3.514l2.203-6.294zm-8.83 5.4c.032-.158.048-.348.048-.538 0-.491-.095-.919-.174-1.332L5.805 6.023c-.222-.57-.444-.951-.888-.951h-.048c1.65-.968 3.568-1.523 5.613-1.523 2.122 0 4.098.596 5.776 1.631-.222.016-.428.143-.428.365 0 .221.159.38.301.523l.238.254c.143.142.317.333.317.65 0 .285-.143.523-.285.777-.127.222-.27.428-.27.76 0 .333.19.666.38.984l.809 1.347c.174.317.348.634.348.999 0 .284-.11.538-.253.76-.143.238-.301.444-.301.761 0 .221.095.428.206.634l.285.507c.127.222.253.444.253.84 0 .428-.19.824-.428 1.22l-.016.015c.666-1.173 1.047-2.521 1.047-3.964 0-4.417-3.583-8-8-8s-8 3.583-8 8c0 1.347.333 2.615.919 3.725z" />
        </svg>
      )
    },
    {
      name: "Shopify",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#96BF48]">
          <path d="M19.577 6.43l-3.326-1.956c-.114-.067-.253-.067-.367 0l-3.326 1.956c-.114.067-.184.188-.184.321v3.911c0 .133.07.254.184.321l3.326 1.956c.114.067.253.067.367 0l3.326-1.956c.114-.067.184-.188.184-.321V6.751c0-.133-.07-.254-.184-.321zM9.577 8.43l-3.326-1.956c-.114-.067-.253-.067-.367 0l-3.326 1.956c-.114.067-.184.188-.184.321v3.911c0 .133.07.254.184.321l3.326 1.956c.114.067.253.067.367 0l3.326-1.956C9.691 12.766 9.761 12.645 9.761 12.512V8.751c0-.133-.07-.254-.184-.321z" />
        </svg>
      )
    },
    {
      name: "Figma",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#F24E1E]">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM6 8c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4zm6 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
        </svg>
      )
    },
    {
      name: "Google Ads",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#4285F4]">
          <path d="M14.5 1h-5v5h5V1zm-5 7h-5v5h5V8zm7 0h-5v5h5V8zm-7 7h-5v5h5v-5zm7 0h-5v5h5v-5z" />
        </svg>
      )
    },
    {
      name: "Meta",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#0668E1]">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      )
    },
    {
      name: "Analytics",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#F9AB00]">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14H7v-7h3v7zm4 0h-3v-5h3v5zm4 0h-3v-10h3v10z" />
        </svg>
      )
    }
  ];

  return (
    <section id="stack" className="section-padding bg-gradient-dark relative overflow-hidden">
      <NeonGlow color="red" position="right" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          badge="TECNOLOGIAS"
          title={<>Stack que <span className="text-brand-orange">dominamos</span></>}
          subtitle="Ferramentas modernas e comprovadas para entregar performance, escala e resultado."
          centered
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mt-16">
          {techs.map((tech, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="p-8 rounded-3xl glass-panel border-white/5 hover:border-brand-orange hover:shadow-2xl hover:shadow-brand-orange/10 transition-all group bg-white/[0.02] flex flex-col items-center text-center justify-center aspect-square relative"
            >
              <div className="absolute inset-x-0 bottom-0 h-1 bg-brand-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full" />
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-500">
                {tech.icon}
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-white/40 group-hover:text-brand-orange transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-brand-white/30 text-[10px] font-bold uppercase tracking-[0.15em]">
            E muito mais — escolhemos a tecnologia ideal para o desafio do seu projeto.
          </p>
        </div>
      </div>
    </section>
  );
};

const App = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showLgpdBanner, setShowLgpdBanner] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsChatOpen(true);
    }, 2000);

    const consent = localStorage.getItem('devolweb_lgpd_consent');
    if (!consent) {
      const bannerTimer = setTimeout(() => {
        setShowLgpdBanner(true);
      }, 1500);
      return () => {
        clearTimeout(timer);
        clearTimeout(bannerTimer);
      };
    }
    return () => clearTimeout(timer);
  }, []);

  const handleAcceptLgpd = () => {
    localStorage.setItem('devolweb_lgpd_consent', 'accepted');
    setShowLgpdBanner(false);
  };

  const handleDeclineLgpd = () => {
    localStorage.setItem('devolweb_lgpd_consent', 'declined');
    setShowLgpdBanner(false);
  };

  return (
    <main className="min-h-screen bg-dark-bg selection:bg-brand-orange selection:text-white pb-20 overflow-x-hidden">
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
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="mb-4 flex justify-center lg:justify-start">
              <img src="/imagens/logo_official.png" alt="Devolweb Logo" className="h-20 md:h-16 w-auto" />
            </div>
            <motion.div 
              initial={{ opacity: 0, x: -10 }} 
              animate={{ opacity: 1, x: 0 }} 
              className="inline-flex items-center px-4 py-2 bg-brand-orange text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-full mb-8 shadow-xl shadow-brand-orange/30 cursor-default"
            >
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              Sites que Geram Resultados
            </motion.div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-6 relative z-20">
              Sites que transformam <span className="text-gradient-orange px-1">visitantes</span> em <span className="text-brand-orange italic">clientes.</span>
            </h1>
            <p className="text-lg text-brand-white/60 mb-8 max-w-lg mx-auto lg:mx-0">
              Criamos sites, landing pages e lojas virtuais para empresas que desejam crescer, vender mais e fortalecer sua presença digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center lg:items-start whitespace-nowrap">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="button-primary group">
                Solicitar Orçamento
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#portfolio" className="flex items-center justify-center gap-3 py-5 px-6 md:px-10 border border-brand-orange/30 rounded-[2.5rem] hover:bg-brand-orange/10 transition-all group w-full max-w-fit cursor-pointer">
                <Eye className="text-brand-orange w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm md:text-base font-bold text-white group-hover:text-brand-orange transition-colors">Ver Portifólio</span>
              </a>
            </div>

            <div className="mt-8 flex flex-col gap-3 justify-center lg:justify-start items-center lg:items-start text-brand-white/80 text-[11px] font-bold uppercase tracking-wider">
               <div className="flex items-center gap-3">
                 <Star className="w-3.5 h-3.5 text-brand-orange fill-current" />
                 Empresas atendidas em diversos segmentos
               </div>
               <div className="flex items-center gap-3">
                 <Star className="w-3.5 h-3.5 text-brand-orange fill-current" />
                 Sites modernos e preparados para crescer
               </div>
               <div className="flex items-center gap-3">
                 <Star className="w-3.5 h-3.5 text-brand-orange fill-current" />
                 Performance, design e estratégia no mesmo projeto
               </div>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-dark-bg overflow-hidden">
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
                <p className="text-[10px] font-black text-brand-white/50 uppercase tracking-widest">+ 500 SITES VENDIDOS</p>
              </div>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-dark-border pt-8 grayscale opacity-40">
              <div className="text-center">
                <div className="text-2xl font-bold tracking-tighter">100%</div>
                <div className="text-[10px] uppercase font-bold text-white/50 tracking-widest">Performance</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold tracking-tighter">UX/UI</div>
                <div className="text-[10px] uppercase font-bold text-white/50 tracking-widest">Psicologia</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold tracking-tighter">SEO</div>
                <div className="text-[10px] uppercase font-bold text-white/50 tracking-widest">Autoridade</div>
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
                  <div className="text-[9px] font-bold text-white/30 tracking-widest uppercase">devolweb-performance.dev</div>
                </div>
                <div className="p-8 aspect-video flex flex-col justify-center bg-black/40">
                  <div className="flex items-center justify-between mb-8">
                     <div className="flex flex-col gap-1">
                        <div className="w-24 h-2 bg-white/10 rounded-full" />
                        <div className="w-16 h-2 bg-white/5 rounded-full" />
                     </div>
                     <div className="w-12 h-12 rounded-full border-4 border-brand-orange/20 border-t-brand-orange flex items-center justify-center">
                        <span className="text-[10px] font-black">98</span>
                     </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 glass-panel rounded-xl border-white/5">
                       <div className="text-[8px] text-white/30 uppercase font-bold tracking-widest mb-1">Load Speed</div>
                       <div className="text-xl font-black text-brand-orange">0.8s</div>
                    </div>
                    <div className="p-4 glass-panel rounded-xl border-white/5">
                       <div className="text-[8px] text-white/30 uppercase font-bold tracking-widest mb-1">SEO Score</div>
                       <div className="text-xl font-black text-white">98/100</div>
                    </div>
                  </div>
                </div>
             </div>

             {/* Floating UI Elements */}
             <motion.div 
                animate={{ y: [0, -12, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 glass-panel p-4 rounded-2xl border-brand-orange/20 z-20 shadow-2xl shadow-brand-orange/10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center shadow-lg shadow-brand-orange/40">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-black">+240%</div>
                    <div className="text-[9px] text-white/40 uppercase font-bold">Conversão</div>
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

      <section id="servicos" className="section-padding bg-gradient-dark border-y border-white/5 leading-relaxed relative overflow-hidden">
        <NeonGlow color="orange" position="right" />
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            badge="Expertise Digital"
            title={<>O que criamos para o seu negócio <span className="text-brand-orange">crescer.</span></>}
            subtitle="Soluções completas, do design à programação de alta performance, focadas em transformar visitantes em clientes reais."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_DATA.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 md:p-8 rounded-[2rem] glass-panel border-white/5 hover:border-brand-orange/30 transition-all group bg-white/[0.02] relative overflow-hidden flex flex-col"
              >
                {/* Background Glow */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-orange/5 blur-[80px] rounded-full group-hover:bg-brand-orange/10 transition-colors" />
                
                <div className="w-14 h-14 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange mb-8 group-hover:bg-brand-orange group-hover:text-white transition-all shadow-lg shadow-brand-orange/5 shrink-0">
                  {React.cloneElement(service.icon as React.ReactElement, { className: "w-7 h-7" })}
                </div>

                <h3 className="text-xl font-black mb-4 leading-tight tracking-tight">{service.title}</h3>
                
                <p className="text-brand-white/50 text-[11px] leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                      <span className="text-[10px] font-semibold text-brand-white/80 uppercase tracking-widest">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-white/5 mb-8">
                  <p className="text-[10px] leading-relaxed uppercase tracking-widest">
                    <span className="font-black text-brand-white">Para quem é: </span>
                    <span className="text-brand-white/40 font-bold">{service.forWho}</span>
                  </p>
                </div>

                <a 
                  href={WHATSAPP_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="button-primary group !px-8 !py-4"
                >
                  Solicitar orçamento
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ESTRATEGIA: O MÉTODO --- */}
      <section id="estrategia" className="section-padding bg-gradient-dark relative overflow-hidden">
        {/* Dynamic Background Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading 
            badge="Metodologia Única"
            title={<>Estratégia antes do <span className="text-brand-orange">código.</span></>}
            subtitle="Não somos apenas desenvolvedores. Somos arquitetos de vendas que transformam objetivos de negócio em interfaces de alta performance."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Target className="w-5 h-5 text-brand-orange" />, t: "Planejamento Estratégico", d: "Entendemos seu negócio para criar um site focado em faturamento direto.", step: "01" },
              { icon: <Layout className="w-5 h-5 text-brand-orange" />, t: "Estrutura Inteligente", d: "Organização pensada para multiplicar seus contatos e conversões.", step: "02" },
              { icon: <Smartphone className="w-5 h-5 text-brand-orange" />, t: "Design de Autoridade", d: "Layout moderno que transmite confiança imediata ao seu cliente.", step: "03" },
              { icon: <TrendingUp className="w-5 h-5 text-brand-orange" />, t: "Alta Performance", d: "Seu site rápido, profissional e preparado para gerar mais contatos.", step: "04" }
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
          <div className="mt-16 flex justify-center px-4">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="button-primary group !px-8 !py-4">
              Quero um site estratégico
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* --- PORTFOLIO --- */}
      <PortfolioSection />

      {/* --- STACK --- */}
      <StackSection />


      {/* --- SISTEMAS CUSTOM (ESTRATÉGICOS) --- */}
      <section className="section-padding bg-gradient-dark relative overflow-hidden">
        <NeonGlow color="red" position="left" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading 
              badge="Sistemas Estratégicos"
              title={<>Sistemas Digitais que <span className="text-brand-orange">Geram Lucro.</span></>}
              subtitle="Não entregamos códigos, entregamos inteligência de negócio. Criamos a espinha dorsal tecnológica que permite sua empresa escalar sem limites."
            />
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {[
              { i: <RefreshCw />, t: "Automação de Processos", d: "Substituímos tarefas repetitivas por fluxos inteligentes que economizam horas de trabalho semanal." },
              { i: <TrendingUp />, t: "Arquitetura de Escala", d: "Sua plataforma pronta para receber milhares de acessos simultâneos sem perder performance." },
              { i: <Database />, t: "Inteligência de Dados", d: "Dashboards personalizados que transformam números brutos em decisões lucravas." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center lg:items-start lg:flex-row gap-4 mb-4 text-center lg:text-left">
                <div className="text-brand-orange mt-1">{item.i}</div>
                <div>
                  <h5 className="text-sm font-bold">{item.t}</h5>
                  <p className="text-xs text-brand-white/40 leading-relaxed max-w-sm mx-auto lg:mx-0">{item.d}</p>
                </div>
              </div>
            ))}
          </motion.div>
            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="button-primary group">
                Quero um sistema estratégico
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
                  <div className="text-xs uppercase font-extrabold tracking-widest text-brand-orange">Gestão Estratégica</div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[8px] font-black uppercase text-green-500">Monitorando</span>
                  </div>
                </div>
                
                {[
                  { label: "Dashboard de Vendas", info: "Monitoramento em Tempo Real", type: "Vendas" },
                  { label: "Funil de Conversão", info: "Automação de Leads Ativa", type: "Marketing" },
                  { label: "Relatório de Performance", info: "Análise Semanal Gerada", type: "Dados" }
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
                      <div className="text-[10px] font-bold text-brand-orange italic">{item.info}</div>
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
      <section id="manutencao" className="section-padding relative overflow-hidden">
        <NeonGlow color="orange" position="center" />
        <div className="max-w-7xl mx-auto glass-panel p-12 rounded-[3rem] relative overflow-hidden">
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-red/5 blur-[100px]" />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                badge="Proteção Contínua"
                title={<>Seu site protegido, atualizado e <span className="text-brand-orange">funcionando</span> todos os dias.</>}
                subtitle="Eliminamos o medo de site fora do ar, lentidão ou vulnerabilidades. Cuidamos de toda a parte técnica para você focar apenas no que importa: seu faturamento."
              />
              <div className="space-y-4">
                <div className="flex gap-4 items-center p-4 glass-panel rounded-2xl border-brand-orange/20 max-w-sm mx-auto lg:mx-0 text-left">
                  <Shield className="w-8 h-8 text-brand-orange" />
                  <div>
                    <div className="text-xs font-bold uppercase">Segurança Blindada</div>
                    <div className="text-[10px] text-white/40 italic">Monitoramento 24h contra ataques.</div>
                  </div>
                </div>
                <div className="flex gap-4 items-center p-4 glass-panel rounded-2xl border-white/5 max-w-sm mx-auto lg:mx-0 text-left">
                  <RefreshCw className="w-8 h-8 text-brand-orange" />
                  <div>
                    <div className="text-xs font-bold uppercase">Backup Automático</div>
                    <div className="text-[10px] text-white/40 italic">Seus dados salvos e seguros todos os dias.</div>
                  </div>
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
                <div className="text-lg font-bold mb-4 uppercase tracking-tight">Essencial</div>
                <ul className="text-[10px] text-white/40 space-y-2 uppercase font-bold tracking-wider">
                  <li>✅ Backup Diário</li>
                  <li>✅ Updates de Segurança</li>
                  <li>✅ Monitoramento de Velocidade</li>
                  <li>✅ Suporte Técnico Básico</li>
                </ul>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-6 glass-panel rounded-2xl border-brand-red/30 hover:border-brand-red/50 transition-all group bg-brand-red/5"
              >
                <div className="text-lg font-bold mb-4 uppercase tracking-tight">Profissional</div>
                <ul className="text-[10px] text-white/40 space-y-2 uppercase font-bold tracking-wider">
                  <li>✅ Tudo do Essencial</li>
                  <li>✅ Suporte Prioritário</li>
                  <li>✅ Ajustes de Layout Inclusos</li>
                  <li>✅ Relatórios de Performance</li>
                </ul>
              </motion.div>
            </div>
          </div>
          <div className="mt-12 flex justify-center px-4">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="button-primary group">
              Garantir minha proteção digital
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <FAQSection />

      {/* --- QUEM SOU EU --- */}
      <AboutSection />

      {/* --- FORMULARIO / CONTATO --- */}
      <section id="contato" className="section-padding bg-gradient-brand relative overflow-hidden">
        <NeonGlow color="red" position="right" />
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <SectionHeading 
                badge="Contato Direto"
                title={<>Vamos transformar sua presença <span className="text-brand-orange">digital?</span></>}
                subtitle="Solicite uma análise gratuita do seu projeto."
              />
              <div className="space-y-8 flex flex-col items-center lg:items-start">
                <div className="flex flex-col items-center lg:flex-row gap-6 text-center lg:text-left translate-y-2">
                  <div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-brand-orange shrink-0">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold uppercase tracking-tight">Foco em Resultados Reais</div>
                    <p className="text-xs text-brand-white/40 leading-relaxed italic max-w-sm">Não entregamos apenas arquivos, entregamos canais de captação de clientes.</p>
                  </div>
                </div>
                
                <div className="p-6 glass-panel rounded-[2rem] border-white/5 flex flex-col sm:flex-row items-center gap-4 max-w-md w-full">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-orange to-brand-red p-1 shrink-0">
                    <div className="w-full h-full bg-dark-bg rounded-full flex items-center justify-center">
                      <Zap className="text-brand-orange w-6 h-6" />
                    </div>
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="text-sm italic font-medium leading-tight">"A diferença entre um site comum e um funil Devolweb está na conversão."</div>
                    <div className="text-[9px] font-bold uppercase text-brand-orange mt-2 tracking-widest">— Marcelo, Creative Director</div>
                  </div>
                </div>
                
                <div className="pt-8 border-t border-dark-border w-full text-center lg:text-left">
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
              <form 
                className="space-y-5" 
                action="https://formsubmit.co/martchelobrasil@gmail.com" 
                method="POST"
              >
                {/* Honeypot to prevent spam */}
                <input type="text" name="_honey" style={{ display: 'none' }} />
                {/* Disable Captcha */}
                <input type="hidden" name="_captcha" value="false" />
                {/* Success Redirect (optional, but good) */}
                <input type="hidden" name="_next" value={window.location.href} />

                <input type="hidden" name="_subject" value="Interesse em Consultoria - Devolweb" />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold uppercase text-white/30 mb-2 block tracking-widest">Nome Completo</label>
                    <input name="name" type="text" className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-orange text-sm" placeholder="Seu nome" required />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase text-white/30 mb-2 block tracking-widest">E-mail Corporativo</label>
                    <input name="email" type="email" className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-orange text-sm" placeholder="seu@email.com" required />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase text-white/30 mb-2 block tracking-widest">Serviço Desejado</label>
                  <select name="service" className="w-full bg-[#1a1a1a] border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-orange text-sm appearance-none cursor-pointer">
                    <option value="Site Institucional Start" className="bg-[#1a1a1a]">Site Institucional Start</option>
                    <option value="Site Institucional Profissional" className="bg-[#1a1a1a]">Site Institucional Profissional</option>
                    <option value="Site Institucional Premium" className="bg-[#1a1a1a]">Site Institucional Premium</option>
                    <option value="Landing Page de Vendas" className="bg-[#1a1a1a]">Landing Page de Vendas</option>
                    <option value="Ecommerce / Loja Virtual" className="bg-[#1a1a1a]">Ecommerce / Loja Virtual</option>
                    <option value="Sistema Personalizado (JetEngine)" className="bg-[#1a1a1a]">Sistema Personalizado (JetEngine)</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase text-white/30 mb-2 block tracking-widest">Qual seu maior desafio hoje?</label>
                  <textarea name="message" rows={3} className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-orange text-sm" placeholder="Fale um pouco sobre o projeto..." required />
                </div>
                <div className="py-2">
                  <p className="text-[10px] text-brand-orange font-black uppercase tracking-[0.2em] text-center leading-relaxed">
                    🚀 Atendemos poucos projetos por mês para manter qualidade e acompanhamento estratégico.
                  </p>
                </div>
              <div className="flex justify-center lg:justify-start">
                <button type="submit" className="button-primary group shadow-xl shadow-brand-orange/20">
                  Receber análise gratuita
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
                <div className="flex items-center justify-center gap-2 text-[9px] uppercase font-bold text-white/20 tracking-tighter">
                  <Lock className="w-3 h-3" /> Seus dados estão 100% seguros conosco.
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SATISFACAO --- */}
      <section className="section-padding bg-gradient-dark relative overflow-hidden">
         <NeonGlow color="orange" position="left" />
         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
               <SectionHeading 
                 badge="Compromisso de Elite"
                 title={<>Sua satisfação real ou seu <span className="text-brand-orange">investimento de volta.</span></>}
                 subtitle="Não vendemos apenas sites, vendemos resultados. Nossa garantia blindada assegura que você receba exatamente a excelência que contratou."
               />
               <div className="space-y-6">
                  <div className="flex gap-4">
                     <Check className="w-5 h-5 text-brand-orange shrink-0" />
                     <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest mb-1">GARANTIA TÉCNICA TOTAL</h4>
                        <p className="text-[10px] text-white/40 leading-relaxed uppercase">Se em até 30 dias após o lançamento você identificar falhas técnicas ou desvios do que foi acordado, corrigimos tudo com prioridade zero.</p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <Check className="w-5 h-5 text-brand-orange shrink-0" />
                     <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest mb-1">SUPORTE VITALÍCIO PARA BUGS</h4>
                        <p className="text-[10px] text-white/40 leading-relaxed uppercase">Diferente de agências que somem, garantimos que seu site permaneça funcional. Erros de código originais são corrigidos sem custo, para sempre.</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="relative flex justify-center">
               <div className="relative w-64 h-64 md:w-80 md:h-80">
                  <div className="absolute inset-0 border-[10px] border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
                  <div className="absolute inset-4 border border-brand-orange/20 rounded-full" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                     <Shield className="w-16 h-16 text-brand-orange mb-4" />
                     <div className="text-4xl font-black tracking-tighter">100%</div>
                     <div className="text-[10px] font-black uppercase text-brand-orange tracking-[0.2em] mt-1">Garantia de Excelência</div>
                     <div className="text-[8px] font-bold text-white/20 uppercase tracking-widest mt-4">Técnica & Performance</div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <CTASection />

      {/* --- FOOTER --- */}
      <footer className="py-16 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-4">
            <div className="text-[10px] font-bold uppercase tracking-widest text-white/20 text-center">
              © 2026 Devolweb. Todos os direitos reservados. Design p/ Conversão.
            </div>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[10px] font-bold uppercase tracking-widest text-white/40">
              <button 
                onClick={() => setShowTerms(true)} 
                className="hover:text-brand-orange transition-colors cursor-pointer"
              >
                Termos de Uso
              </button>
              <span className="text-white/10">•</span>
              <button 
                onClick={() => setShowPrivacy(true)} 
                className="hover:text-brand-orange transition-colors cursor-pointer"
              >
                Política de Privacidade (LGPD)
              </button>
            </div>
            <img src="/imagens/logo_official.png" alt="Devolweb Logo" className="h-14 md:h-16 w-auto opacity-100 mt-2" />
          </div>
          
          <div className="flex gap-8">
             <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-brand-orange transition-colors"><WhatsappIcon className="w-6 h-6" /></a>
             <a href="#" className="text-white/40 hover:text-brand-orange transition-colors"><TrendingUp className="w-6 h-6" /></a>
          </div>
        </div>
      </footer>

      {/* WhatsApp Widget */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="mb-4 w-full max-w-[320px] bg-[#1a1a1a] rounded-[1.5rem] shadow-2xl overflow-hidden border border-white/10"
            >
              {/* Header */}
              <div className="bg-[#075e54] p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center p-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" className="w-full h-full" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm leading-tight">Devolweb</div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <div className="w-1.5 h-1.5 bg-[#25d366] rounded-full" />
                      <span className="text-[#25d366] text-[10px] font-bold uppercase tracking-wider">online agora</span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setIsChatOpen(false)}
                  className="text-white/50 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Chat Body */}
              <div 
                className="p-5 space-y-4 bg-opacity-50"
                style={{ 
                  backgroundImage: `url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')`,
                  backgroundSize: 'contain'
                }}
              >
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-[#262d31] p-3 rounded-2xl rounded-tl-none shadow-md max-w-[85%]"
                >
                  <p className="text-white text-xs leading-relaxed font-medium">Oi! Tudo bem?</p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-[#262d31] p-3 rounded-2xl rounded-tl-none shadow-md max-w-[95%]"
                >
                  <p className="text-white text-xs leading-relaxed font-medium">
                    Vi que você tá navegando pelo site. Me conta qual processo da sua empresa tá dando trabalho que a gente pensa numa solução juntos.
                  </p>
                </motion.div>
              </div>

              {/* Action Button */}
              <div className="p-4 bg-[#1a1a1a]">
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25d366] hover:bg-[#20ba59] text-white font-bold py-3.5 rounded-xl flex items-center justify-center transition-all shadow-lg shadow-green-500/20 text-sm"
                >
                  Iniciar conversa
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button 
          onClick={() => setIsChatOpen(!isChatOpen)}
          className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${isChatOpen ? 'bg-white text-dark-bg rotate-90' : 'bg-[#25D366] text-white hover:scale-110 animate-bounce'}`}
        >
          {isChatOpen ? (
            <X className="w-8 h-8" />
          ) : (
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-10 h-10" />
          )}
        </button>
      </div>

      {/* LGPD Banner */}
      <AnimatePresence>
        {showLgpdBanner && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="fixed bottom-6 left-6 right-6 md:right-auto md:max-w-md bg-[#161616] border border-white/10 rounded-2xl p-5 shadow-2xl z-[90] flex flex-col gap-4 backdrop-blur-xl"
          >
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Aviso de Privacidade (LGPD)</h4>
                <p className="text-[11px] text-white/70 leading-relaxed">
                  Utilizamos cookies e tecnologias semelhantes para oferecer uma melhor experiência, analisar o tráfego do site e personalizar conteúdo de acordo com a nossa <button onClick={() => { setShowPrivacy(true); setShowLgpdBanner(false); }} className="text-brand-orange hover:underline font-bold cursor-pointer">Política de Privacidade</button>.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-end gap-3 pt-1">
              <button 
                onClick={handleDeclineLgpd}
                className="px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white/50 hover:text-white transition-colors cursor-pointer"
              >
                Recusar
              </button>
              <button 
                onClick={handleAcceptLgpd}
                className="px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider bg-brand-orange text-white rounded-lg hover:bg-brand-orange/90 transition-all shadow-md shadow-brand-orange/10 cursor-pointer"
              >
                Aceitar
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Privacy Policy Modal */}
      <AnimatePresence>
        {showPrivacy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[120] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              className="bg-[#121212] border border-white/10 rounded-3xl max-w-2xl w-full max-h-[80vh] flex flex-col overflow-hidden shadow-2xl"
            >
              <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/[0.01]">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-brand-orange" />
                  <h3 className="text-sm font-black uppercase tracking-wider text-white">Política de Privacidade</h3>
                </div>
                <button 
                  onClick={() => setShowPrivacy(false)}
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              
              <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-white/70 text-xs md:text-sm leading-relaxed no-scrollbar">
                <section className="space-y-2">
                  <h4 className="text-white font-bold uppercase tracking-wider text-xs text-brand-orange">1. Introdução</h4>
                  <p>
                    A Devolweb está comprometida com a proteção de seus dados pessoais. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos as informações coletadas através do nosso site de acordo com a Lei Geral de Proteção de Dados (LGPD) - Lei nº 13.709/2018.
                  </p>
                </section>

                <section className="space-y-2">
                  <h4 className="text-white font-bold uppercase tracking-wider text-xs text-brand-orange">2. Dados Coletados</h4>
                  <p>
                    Nós podemos coletar dados pessoais nas seguintes situações:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Dados de Contato:</strong> Nome, número de telefone e e-mail quando você inicia um contato conosco através de nossos formulários ou link do WhatsApp.</li>
                    <li><strong>Dados de Navegação:</strong> Endereço IP, tipo de navegador, páginas visitadas e tempo de permanência no site, através de cookies e ferramentas de analytics para melhoria da experiência.</li>
                  </ul>
                </section>

                <section className="space-y-2">
                  <h4 className="text-white font-bold uppercase tracking-wider text-xs text-brand-orange">3. Finalidade do Tratamento</h4>
                  <p>
                    Os dados coletados são tratados exclusivamente para as seguintes finalidades:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Responder a solicitações de orçamento e mensagens de suporte.</li>
                    <li>Desenvolver propostas comerciais sob medida.</li>
                    <li>Análise de tráfego para otimizar a performance técnica e o design do site.</li>
                    <li>Cumprimento de obrigações legais ou regulatórias.</li>
                  </ul>
                </section>

                <section className="space-y-2">
                  <h4 className="text-white font-bold uppercase tracking-wider text-xs text-brand-orange">4. Compartilhamento de Dados</h4>
                  <p>
                    A Devolweb não comercializa nem compartilha suas informações pessoais com terceiros para fins publicitários. Os dados podem ser compartilhados apenas com provedores de serviços tecnológicos essenciais (ex: hospedagem de site) ou por determinação legal de autoridades públicas.
                  </p>
                </section>

                <section className="space-y-2">
                  <h4 className="text-white font-bold uppercase tracking-wider text-xs text-brand-orange">5. Direitos do Titular (LGPD)</h4>
                  <p>
                    De acordo com o Artigo 18 da LGPD, você tem direito a obter, a qualquer momento e mediante requisição gratuita:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Confirmação da existência de tratamento de seus dados.</li>
                    <li>Acesso aos seus dados guardados em nossa plataforma.</li>
                    <li>Correção de dados incompletos, inexatos ou desatualizados.</li>
                    <li>Eliminação ou bloqueio dos dados pessoais tratados com base no seu consentimento.</li>
                    <li>Portabilidade dos dados a outro prestador de serviços.</li>
                  </ul>
                  <p className="mt-2">
                    Para exercer seus direitos, entre em contato conosco diretamente pelo canal de suporte do WhatsApp indicado em nosso site.
                  </p>
                </section>

                <section className="space-y-2">
                  <h4 className="text-white font-bold uppercase tracking-wider text-xs text-brand-orange">6. Segurança e Armazenamento</h4>
                  <p>
                    Adotamos medidas de segurança técnicas e administrativas razoáveis para proteger seus dados pessoais de acessos não autorizados ou destruição acidental. O armazenamento dos dados ocorre em servidores de alta confiabilidade até que a finalidade do tratamento seja alcançada ou que haja solicitação de exclusão por parte do titular.
                  </p>
                </section>

                <section className="space-y-2">
                  <h4 className="text-white font-bold uppercase tracking-wider text-xs text-brand-orange">7. Atualizações desta Política</h4>
                  <p>
                    Esta política pode ser atualizada a qualquer momento para refletir melhorias internas ou novas exigências legais. Recomendamos a leitura periódica para manter-se informado.
                  </p>
                </section>
              </div>

              <div className="p-4 border-t border-white/5 bg-white/[0.01] flex justify-end">
                <button 
                  onClick={() => setShowPrivacy(false)}
                  className="px-5 py-2 text-xs font-bold uppercase tracking-wider bg-brand-orange text-white rounded-xl hover:bg-brand-orange/90 transition-all cursor-pointer"
                >
                  Fechar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Terms of Use Modal */}
      <AnimatePresence>
        {showTerms && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[120] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              className="bg-[#121212] border border-white/10 rounded-3xl max-w-2xl w-full max-h-[80vh] flex flex-col overflow-hidden shadow-2xl"
            >
              <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/[0.01]">
                <div className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-brand-orange" />
                  <h3 className="text-sm font-black uppercase tracking-wider text-white">Termos de Uso</h3>
                </div>
                <button 
                  onClick={() => setShowTerms(false)}
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              
              <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-white/70 text-xs md:text-sm leading-relaxed no-scrollbar">
                <section className="space-y-2">
                  <h4 className="text-white font-bold uppercase tracking-wider text-xs text-brand-orange">1. Aceitação dos Termos</h4>
                  <p>
                    Ao acessar e navegar pelo site da Devolweb, você concorda em cumprir e estar vinculado aos seguintes Termos de Uso. Caso não concorde com qualquer parte destes termos, solicitamos que não utilize nossa página ou serviços.
                  </p>
                </section>

                <section className="space-y-2">
                  <h4 className="text-white font-bold uppercase tracking-wider text-xs text-brand-orange">2. Propriedade Intelectual</h4>
                  <p>
                    Todo o conteúdo apresentado neste site — incluindo textos, layouts, gráficos, marcas, logotipos, códigos de programação, imagens e materiais de design — é de propriedade exclusiva da Devolweb ou de seus respectivos licenciantes e está protegido por leis de propriedade intelectual vigentes. A reprodução, cópia ou distribuição não autorizada de qualquer material é estritamente proibida.
                  </p>
                </section>

                <section className="space-y-2">
                  <h4 className="text-white font-bold uppercase tracking-wider text-xs text-brand-orange">3. Uso Permitido do Site</h4>
                  <p>
                    Os visitantes podem utilizar o site unicamente para conhecer as soluções da Devolweb, ler artigos, analisar cases de sucesso e entrar em contato direto para solicitar orçamentos legítimos. É proibido:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Utilizar robôs, rastreadores ou outros métodos automatizados para extrair informações do site.</li>
                    <li>Utilizar formulários de contato ou links de WhatsApp para envio de spam, conteúdo difamatório, ofensivo ou malicioso.</li>
                    <li>Tentar violar a segurança ou integridade dos servidores que hospedam o site.</li>
                  </ul>
                </section>

                <section className="space-y-2">
                  <h4 className="text-white font-bold uppercase tracking-wider text-xs text-brand-orange">4. Isenção de Responsabilidade</h4>
                  <p>
                    A Devolweb empenha-se em manter as informações do site atualizadas e precisas. No entanto, não garantimos que o acesso ao site seja ininterrupto ou livre de erros técnicos temporários. A Devolweb não se responsabiliza por eventuais danos indiretos decorrentes da impossibilidade temporária de uso do nosso site.
                  </p>
                </section>

                <section className="space-y-2">
                  <h4 className="text-white font-bold uppercase tracking-wider text-xs text-brand-orange">5. Contato e Solicitações</h4>
                  <p>
                    As comunicações feitas através do WhatsApp oficial da Devolweb têm como finalidade o alinhamento de projetos comerciais. Os orçamentos fornecidos são válidos apenas pelos prazos expressos nas respectivas propostas formais e não constituem obrigação contratual imediata por parte deste site de apresentação institucional.
                  </p>
                </section>
              </div>

              <div className="p-4 border-t border-white/5 bg-white/[0.01] flex justify-end">
                <button 
                  onClick={() => setShowTerms(false)}
                  className="px-5 py-2 text-xs font-bold uppercase tracking-wider bg-brand-orange text-white rounded-xl hover:bg-brand-orange/90 transition-all cursor-pointer"
                >
                  Fechar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default App;