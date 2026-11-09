import React from 'react';
import { ArrowRight, Sparkles, Shield, Lock, CheckCircle2 } from 'lucide-react';
import logoImg from '../assets/images/devolweb-removebg-preview.png';
import { revealDelay } from '../hooks/useScrollReveal';

interface FinalCtaSectionProps {
  onStartDiagnostic: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({
  onStartDiagnostic,
}) => {
  return (
    <section id="cta-final" className="py-[35px] relative overflow-hidden bg-gradient-to-b from-[#0a0507] via-[#1f0903] to-[#0d0402]">
      {/* Dynamic Intense Neon Sunset Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[550px] bg-gradient-to-r from-orange-500/30 via-amber-500/20 to-orange-500/30 blur-[150px] pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <article className="p-8 sm:p-16 md:p-20 rounded-3xl bg-zinc-950/90 border border-orange-500/50 shadow-2xl backdrop-blur-2xl relative neon-border-orange overflow-hidden">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-orange-500/25 via-amber-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

          <header>
            <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-950/60 border border-orange-500/40 text-xs font-bold text-orange-300 mb-8 shadow-lg shadow-orange-500/15 backdrop-blur-xl" data-reveal="down">
              <Sparkles className="w-3.5 h-3.5 text-orange-400" />
              <span className="tracking-wide uppercase">PRIMEIRO PASSO SEM COMPROMISSO</span>
            </p>

            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-5 leading-tight max-w-3xl mx-auto"
              data-reveal="up"
              style={revealDelay(70)}
            >
              Seu próximo cliente ainda não te conhece.{' '}
              <span className="text-gradient-orange block sm:inline drop-shadow-[0_0_25px_rgba(249,115,22,0.3)]">
                Ele conhece o que encontra.
              </span>
            </h2>

            <p
              className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
              data-reveal="fade"
              style={revealDelay(140)}
            >
              Não perca mais clientes para concorrentes que apenas aparentam ser mais profissionais. Comece agora seu diagnóstico gratuito.
            </p>
          </header>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-10"
            data-reveal="up"
            style={revealDelay(200)}
          >
            <button
              type="button"
              id="final-cta-btn"
              onClick={onStartDiagnostic}
              className="relative group w-full py-4 sm:py-5 px-9 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-amber-400 hover:from-orange-600 hover:to-amber-500 text-zinc-950 font-extrabold text-base sm:text-lg transition-all duration-300 shadow-2xl shadow-orange-500/40 hover:shadow-orange-500/60 hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer active:scale-[0.98] overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
              <span>Começar diagnóstico gratuito</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <ul
            className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-zinc-300 pt-8 border-t border-zinc-800/90"
            data-reveal="fade"
            style={revealDelay(260)}
          >
            <li className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-orange-400" />
              100% gratuito e confidencial
            </li>
            <li className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-amber-400" />
              Sem spam ou ligações invasivas
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-orange-400" />
              Resposta em até 24 horas
            </li>
          </ul>
        </article>

        {/* Minimal Footer */}
        <footer
          className="mt-16 pt-8 border-t border-zinc-900/90 text-center text-xs text-zinc-400 space-y-2"
          data-reveal="fade"
          style={revealDelay(320)}
        >
          <p className="flex items-center justify-center gap-2 text-zinc-200 font-bold tracking-widest uppercase text-sm">
            <img
              src={logoImg}
              alt="Devolweb"
              className="h-11 sm:h-14 md:h-16 w-auto object-contain drop-shadow-[0_0_10px_rgba(249,115,22,0.3)] filter brightness-105 shrink-0"
              referrerPolicy="no-referrer"
            />
          </p>
          <p>© {new Date().getFullYear()} Devolweb. Todos os direitos reservados. Presença digital estratégica para negócios.</p>
          <p className="text-[11px] text-zinc-400">
            Foco em diagnóstico de negócio, posicionamento de autoridade e geração de contatos qualificados.
          </p>
        </footer>
      </div>
    </section>
  );
};
