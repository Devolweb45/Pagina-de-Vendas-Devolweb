import React from 'react';
import { ShieldCheck, MessageCircle, Compass, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import { revealDelay } from '../hooks/useScrollReveal';

interface SolutionSectionProps {
  onStartDiagnostic?: () => void;
}

export const SolutionSection: React.FC<SolutionSectionProps> = ({
  onStartDiagnostic,
}) => {
  const solutions = [
    {
      id: 'sol-presenca-digital',
      icon: ShieldCheck,
      title: 'Presença digital',
      text: 'Sua empresa parece confiável assim que alguém abre a página.',
      tag: 'Autoridade Imediata',
      border: 'border-orange-500/40 hover:border-orange-400 hover:shadow-[0_0_30px_rgba(249,115,22,0.2)]',
      gradient: 'from-orange-500/10 via-amber-500/5 to-transparent',
      iconStyle: 'text-orange-400 bg-orange-500/15 border-orange-500/40 shadow-[0_0_15px_rgba(249,115,22,0.25)]',
    },
    {
      id: 'sol-geracao-contato',
      icon: MessageCircle,
      title: 'Geração de contato',
      text: 'A estrutura da página é pensada pra levar a pessoa até o WhatsApp ou formulário, não só pra ser bonita.',
      tag: 'Conversão em Vendas',
      border: 'border-orange-500/40 hover:border-orange-400 hover:shadow-[0_0_30px_rgba(249,115,22,0.2)]',
      gradient: 'from-orange-500/10 via-amber-500/5 to-transparent',
      iconStyle: 'text-orange-400 bg-orange-500/15 border-orange-500/40 shadow-[0_0_15px_rgba(249,115,22,0.25)]',
    },
    {
      id: 'sol-modelo',
      icon: Compass,
      title: 'Modelo',
      text: 'Você entende exatamente como o cliente vai te encontrar e o que vai ver.',
      tag: 'Clareza Estratégica',
      border: 'border-amber-500/40 hover:border-amber-400 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]',
      gradient: 'from-amber-500/10 via-yellow-500/5 to-transparent',
      iconStyle: 'text-amber-400 bg-amber-500/15 border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.25)]',
    },
    {
      id: 'sol-performance',
      icon: Zap,
      title: 'Performance',
      text: 'Site rápido, sem trava, funcionando perfeitamente no celular.',
      tag: 'Velocidade Extrema',
      border: 'border-orange-500/40 hover:border-orange-400 hover:shadow-[0_0_30px_rgba(249,115,22,0.2)]',
      gradient: 'from-amber-500/10 via-orange-500/5 to-transparent',
      iconStyle: 'text-amber-400 bg-amber-500/15 border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.25)]',
    },
  ];

  return (
    <section id="o-que-resolvemos" className="py-[35px] bg-gradient-to-b from-[#040608] via-[#100703] to-[#06040a] relative overflow-hidden">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[350px] bg-orange-600/10 blur-[140px] pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[350px] bg-amber-600/10 blur-[140px] pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <header className="text-center max-w-3xl mx-auto mb-16">
          <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-950/50 border border-orange-500/40 text-xs font-bold text-orange-300 mb-5 backdrop-blur-xl shadow-lg shadow-orange-500/10" data-reveal="down">
            <Zap className="w-3.5 h-3.5 text-orange-400" />
            <span className="tracking-wide uppercase">ENTREGA ESTRATÉGICA</span>
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight"
            data-reveal="up"
            style={revealDelay(70)}
          >
            O que a Devolweb{' '}
            <span className="text-gradient-orange block drop-shadow-[0_0_25px_rgba(249,115,22,0.25)]">
              resolve de verdade.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-300" data-reveal="fade" style={revealDelay(140)}>
            Eliminamos todo o ruído visual e técnico para focar no que realmente importa: clientes no seu WhatsApp.
          </p>
        </header>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-14">
          {solutions.map((item, index) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <article
                  id={item.id}
                  data-reveal="scale"
                  style={revealDelay(index * 90)}
                  className={`relative p-8 sm:p-10 rounded-3xl bg-zinc-950/85 border ${item.border} transition-all duration-300 group hover:-translate-y-1.5 backdrop-blur-xl shadow-xl flex flex-col justify-between overflow-hidden h-full`}
                >
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.gradient} pointer-events-none -z-10`} />

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className={`w-14 h-14 rounded-2xl border flex items-center justify-center ${item.iconStyle}`}>
                        <Icon className="w-7 h-7" />
                      </span>
                      <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-zinc-900/90 border border-zinc-700/80 text-zinc-200 backdrop-blur-md">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-zinc-300 text-base leading-relaxed font-normal">
                      {item.text}
                    </p>
                  </div>

                  <p className="mt-8 pt-4 border-t border-zinc-800/80 flex items-center text-xs font-semibold text-orange-400 gap-1.5 drop-shadow-[0_0_8px_rgba(249,115,22,0.3)]">
                    <CheckCircle2 className="w-4 h-4 text-orange-400" />
                    <span>Garantido na entrega do projeto</span>
                  </p>
                </article>
              </li>
            );
          })}
        </ul>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
          data-reveal="up"
          style={revealDelay(120)}
        >
          <button
            type="button"
            onClick={onStartDiagnostic}
            className="relative group px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-amber-400 hover:from-orange-600 hover:to-amber-500 text-zinc-950 font-extrabold text-base transition-all duration-300 shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer active:scale-[0.98] overflow-hidden w-full sm:w-auto"
          >
            <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
            <MessageCircle className="w-5 h-5 text-zinc-950 shrink-0" />
            <span>Quero transformar meu site em gerador de contatos</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 shrink-0" />
          </button>
        </div>
      </div>

      {/* Bottom Glowing Neon Divider */}
      <div className="neon-divider mt-20" />
    </section>
  );
};
