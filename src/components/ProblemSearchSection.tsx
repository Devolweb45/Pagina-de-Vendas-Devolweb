import React from 'react';
import { Search, UserX, MessageSquareOff, AlertCircle, TrendingDown, ArrowRight, Zap } from 'lucide-react';
import { revealDelay } from '../hooks/useScrollReveal';

interface ProblemSearchSectionProps {
  onStartDiagnostic?: () => void;
}

export const ProblemSearchSection: React.FC<ProblemSearchSectionProps> = ({
  onStartDiagnostic,
}) => {
  const problemCards = [
    {
      id: 'card-presenca-fraca',
      icon: UserX,
      title: 'Presença fraca',
      description:
        'Perfil incompleto ou site antigo faz o visitante desconfiar antes mesmo de ler o que você oferece.',
      tag: 'Perda de Confiança',
      borderColor: 'border-zinc-200 hover:border-orange-400',
      badgeColor: 'bg-orange-100/80 text-orange-800 border-orange-300/80',
      iconColor: 'text-orange-600 bg-orange-50 border-orange-200 shadow-sm',
      glow: 'shadow-lg shadow-zinc-900/5 hover:shadow-xl hover:shadow-orange-500/10',
    },
    {
      id: 'card-dificil-contato',
      icon: MessageSquareOff,
      title: 'Difícil de achar contato',
      description:
        'Se a pessoa precisa procurar onde clicar pra falar com você, ela desiste no meio do caminho.',
      tag: 'Fricção Excessiva',
      borderColor: 'border-zinc-200 hover:border-amber-400',
      badgeColor: 'bg-amber-100/80 text-amber-800 border-amber-300/80',
      iconColor: 'text-amber-600 bg-amber-50 border-amber-200 shadow-sm',
      glow: 'shadow-lg shadow-zinc-900/5 hover:shadow-xl hover:shadow-amber-500/10',
    },
    {
      id: 'card-info-desatualizada',
      icon: AlertCircle,
      title: 'Informação desatualizada',
      description:
        'Preço, serviço ou horário errado tira a credibilidade na hora e gera frustração.',
      tag: 'Queda de Autoridade',
      borderColor: 'border-zinc-200 hover:border-orange-400',
      badgeColor: 'bg-orange-100/80 text-orange-800 border-orange-300/80',
      iconColor: 'text-orange-600 bg-orange-50 border-orange-200 shadow-sm',
      glow: 'shadow-lg shadow-zinc-900/5 hover:shadow-xl hover:shadow-orange-500/10',
    },
  ];

  return (
    <section id="problema-pesquisa" className="py-[35px] bg-[#faf8f5] text-zinc-900 relative overflow-hidden border-y border-zinc-200/80">
      {/* Background Soft Warm Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[400px] bg-gradient-to-r from-orange-200/40 via-amber-200/30 to-orange-100/40 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-dot-pattern opacity-15 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <header className="text-center max-w-3xl mx-auto mb-16">
          <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-xs font-bold text-red-700 mb-5 shadow-sm" data-reveal="down">
            <Search className="w-3.5 h-3.5 text-red-600" />
            <span className="tracking-wide uppercase">O COMPORTAMENTO REAL DO CONSUMIDOR</span>
          </p>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 mb-6 leading-tight"
            data-reveal="up"
            style={revealDelay(70)}
          >
            Seu cliente pesquisa{' '}
            <span className="text-orange-600 whitespace-nowrap drop-shadow-[0_1px_1px_rgba(234,88,12,0.2)]">
              antes de te ligar.
            </span>
          </h2>

          <p
            className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal"
            data-reveal="fade"
            style={revealDelay(140)}
          >
            Antes de mandar mensagem, quase todo mundo pesquisa o nome da empresa. Se o que aparece é confuso, desatualizado ou não passa confiança, o contato nunca acontece, e você nem fica sabendo que perdeu.
          </p>
        </header>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {problemCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <li key={card.id}>
                <article
                  id={card.id}
                  data-reveal="up"
                  style={revealDelay(index * 90)}
                  className={`relative p-8 rounded-3xl bg-white border ${card.borderColor} transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 ${card.glow} h-full`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className={`w-13 h-13 rounded-2xl border flex items-center justify-center ${card.iconColor}`}>
                        <Icon className="w-6 h-6" />
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold border ${card.badgeColor}`}>
                        {card.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-orange-600 transition-colors">
                      {card.title}
                    </h3>

                    <p className="text-zinc-600 text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  <p className="mt-8 pt-4 border-t border-zinc-100 flex items-center text-xs text-zinc-500">
                    <span className="flex items-center gap-1.5 text-red-600 font-semibold">
                      <TrendingDown className="w-3.5 h-3.5" />
                      Perda silenciosa de vendas
                    </span>
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
            className="relative group px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-amber-400 hover:from-orange-600 hover:to-amber-500 text-zinc-950 font-extrabold text-base transition-all duration-300 shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer active:scale-[0.98] overflow-hidden w-full sm:w-auto"
          >
            <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
            <Zap className="w-5 h-5 text-zinc-950 shrink-0" />
            <span>Descobrir o que está travando seus contatos</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 shrink-0" />
          </button>
        </div>
      </div>
    </section>
  );
};
