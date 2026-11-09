import React from 'react';
import { Target, Palette, TrendingUp, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { revealDelay } from '../hooks/useScrollReveal';

interface WhyDevolwebSectionProps {
  onStartDiagnostic?: () => void;
}

export const WhyDevolwebSection: React.FC<WhyDevolwebSectionProps> = ({
  onStartDiagnostic,
}) => {
  const pillars = [
    {
      id: 'pillar-estrategia',
      icon: Target,
      title: 'Estratégia',
      description: 'A página nasce do seu negócio, não de um modelo pronto.',
      accent: 'border-orange-500/40 text-orange-400 bg-orange-500/15 shadow-[0_0_15px_rgba(249,115,22,0.25)]',
      cardBorder: 'hover:border-orange-500/50 hover:shadow-[0_0_35px_rgba(249,115,22,0.2)]',
      gradient: 'from-orange-500/10 via-amber-500/5 to-transparent',
      tag: 'Sem Templates Clichês',
    },
    {
      id: 'pillar-design',
      icon: Palette,
      title: 'Design',
      description: 'Visual pensado pra passar confiança e autoridade no seu nicho.',
      accent: 'border-amber-500/40 text-amber-400 bg-amber-500/15 shadow-[0_0_15px_rgba(245,158,11,0.25)]',
      cardBorder: 'hover:border-amber-500/50 hover:shadow-[0_0_35px_rgba(245,158,11,0.2)]',
      gradient: 'from-amber-500/10 via-yellow-500/5 to-transparent',
      tag: 'Autoridade Instantânea',
    },
    {
      id: 'pillar-resultado',
      icon: TrendingUp,
      title: 'Resultado',
      description: 'Cada seção existe exclusivamente pra levar a uma ação de contato.',
      accent: 'border-orange-500/40 text-orange-400 bg-orange-500/15 shadow-[0_0_15px_rgba(249,115,22,0.25)]',
      cardBorder: 'hover:border-orange-500/50 hover:shadow-[0_0_35px_rgba(249,115,22,0.2)]',
      gradient: 'from-orange-500/10 via-amber-500/5 to-transparent',
      tag: 'Foco em Vendas',
    },
  ];

  return (
    <section id="por-que-devolweb" className="py-[35px] relative bg-gradient-to-b from-[#06040c] via-[#150a04] to-[#08040a] overflow-hidden">
      {/* Intense Neon Flare Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-orange-500/15 via-amber-500/15 to-orange-500/10 blur-[150px] pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <header className="text-center max-w-2xl mx-auto mb-16">
          <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/50 border border-amber-500/40 text-xs font-bold text-amber-300 mb-5 backdrop-blur-xl shadow-lg shadow-amber-500/10" data-reveal="down">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="tracking-wide uppercase">NOSSOS PILARES</span>
          </p>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight"
            data-reveal="up"
            style={revealDelay(70)}
          >
            Por que escolher a{' '}
            <span className="text-gradient-orange block drop-shadow-[0_0_25px_rgba(249,115,22,0.25)]">
              Devolweb.
            </span>
          </h2>

          <p className="text-zinc-300 text-base sm:text-lg" data-reveal="fade" style={revealDelay(140)}>
            Não somos uma fábrica de sites genéricos. Construímos ativos de vendas que valorizam sua empresa.
          </p>
        </header>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <li key={pillar.id}>
                <article
                  id={pillar.id}
                  data-reveal="scale"
                  style={revealDelay(index * 90)}
                  className={`relative p-8 sm:p-10 rounded-3xl bg-zinc-950/85 border border-zinc-800 ${pillar.cardBorder} transition-all duration-300 text-left flex flex-col justify-between group hover:-translate-y-2 shadow-2xl backdrop-blur-xl overflow-hidden h-full`}
                >
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${pillar.gradient} pointer-events-none -z-10`} />

                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <span className={`w-14 h-14 rounded-2xl border flex items-center justify-center ${pillar.accent}`}>
                        <Icon className="w-7 h-7" />
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-zinc-900/90 border border-zinc-700/80 text-zinc-200">
                        {pillar.tag}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-zinc-300 text-base leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>

                  <p className="mt-8 pt-4 border-t border-zinc-800/80 flex items-center gap-1.5 text-xs text-orange-400 font-semibold drop-shadow-[0_0_6px_rgba(249,115,22,0.3)]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Diferencial comprovado</span>
                  </p>
                </article>
              </li>
            );
          })}
        </ul>

        <div className="flex justify-center" data-reveal="up" style={revealDelay(120)}>
          <button
            type="button"
            onClick={onStartDiagnostic}
            className="relative group w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-amber-400 hover:from-orange-600 hover:to-amber-500 text-zinc-950 font-extrabold text-base transition-all duration-300 shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer active:scale-[0.98] overflow-hidden"
          >
            <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
            <TrendingUp className="w-5 h-5 text-zinc-950 shrink-0" />
            <span>Quero aplicar essa metodologia na minha empresa</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 shrink-0" />
          </button>
        </div>
      </div>

      {/* Bottom Glowing Neon Divider */}
      <div className="neon-divider-amber mt-20" />
    </section>
  );
};
