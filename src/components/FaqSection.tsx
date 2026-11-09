import React, { useState } from 'react';
import { faqData } from '../data/faq';
import { HelpCircle, ChevronDown, ArrowRight, Sparkles } from 'lucide-react';
import { revealDelay } from '../hooks/useScrollReveal';

interface FaqSectionProps {
  onStartDiagnostic?: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({
  onStartDiagnostic,
}) => {
  const [openId, setOpenId] = useState<string | null>(faqData[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-[35px] bg-[#faf8f5] text-zinc-900 relative overflow-hidden border-y border-zinc-200/80">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[400px] bg-gradient-to-r from-orange-200/40 via-amber-200/30 to-orange-100/30 blur-[140px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-dot-pattern opacity-15 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <header className="text-center max-w-2xl mx-auto mb-16">
          <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-xs font-bold text-orange-800 mb-5 shadow-sm" data-reveal="down">
            <HelpCircle className="w-3.5 h-3.5 text-orange-600" />
            <span className="tracking-wide uppercase">TRANSPARÊNCIA TOTAL</span>
          </p>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 mb-4 leading-tight"
            data-reveal="up"
            style={revealDelay(70)}
          >
            Perguntas frequentes e{' '}
            <span className="text-orange-600 drop-shadow-[0_1px_1px_rgba(234,88,12,0.2)]">
              dúvidas resolvidas.
            </span>
          </h2>

          <p className="text-zinc-600 text-base sm:text-lg font-normal" data-reveal="fade" style={revealDelay(140)}>
            Tire suas dúvidas sobre valores, prazos e metodologia antes de iniciar.
          </p>
        </header>

        <ul className="space-y-4 mb-14">
          {faqData.map((item, index) => {
            const isOpen = openId === item.id;
            return (
              <li key={item.id} data-reveal="up" style={revealDelay(index * 70)}>
                <article
                  id={`faq-accordion-${item.id}`}
                  className={`rounded-2xl sm:rounded-3xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-orange-400 shadow-xl shadow-orange-500/10 ring-1 ring-orange-400/30'
                      : 'bg-white border-zinc-200/90 hover:border-zinc-300 shadow-md shadow-zinc-900/5'
                  }`}
                >
                  <h3 className="m-0">
                    <button
                      type="button"
                      onClick={() => toggleItem(item.id)}
                      className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="text-lg sm:text-xl font-bold text-zinc-900 pr-2">
                        {item.question}
                      </span>
                      <span
                        className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                          isOpen
                            ? 'rotate-180 text-orange-700 bg-orange-100 border border-orange-300 shadow-sm'
                            : 'text-zinc-500 bg-zinc-100 border border-zinc-200'
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </span>
                    </button>
                  </h3>

                  {isOpen && (
                    <p className="px-6 sm:px-7 pb-7 pt-1 text-sm sm:text-base text-zinc-600 leading-relaxed border-t border-zinc-100 animate-fade-in font-normal">
                      {item.answer}
                    </p>
                  )}
                </article>
              </li>
            );
          })}
        </ul>

        <div className="flex justify-center" data-reveal="up" style={revealDelay(120)}>
          <button
            type="button"
            onClick={onStartDiagnostic}
            className="relative group w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-amber-400 hover:from-orange-600 hover:to-amber-500 text-zinc-950 font-extrabold text-base transition-all duration-300 shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer active:scale-[0.98] overflow-hidden"
          >
            <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
            <Sparkles className="w-5 h-5 text-zinc-950 shrink-0" />
            <span>Fazer meu diagnóstico gratuito agora</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 shrink-0" />
          </button>
        </div>
      </div>
    </section>
  );
};
