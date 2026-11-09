import React from 'react';
import { Eye, Sparkles, ArrowRight } from 'lucide-react';
import { revealDelay } from '../hooks/useScrollReveal';

interface PerceptionSectionProps {
  onStartDiagnostic?: () => void;
}

export const PerceptionSection: React.FC<PerceptionSectionProps> = ({
  onStartDiagnostic,
}) => {
  return (
    <section id="percepcao-valor" className="py-[35px] relative overflow-hidden bg-gradient-to-b from-[#08040a] via-[#150d03] to-[#040608]">
      {/* Background ambient orbs & Gold Neon Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-r from-amber-500/20 via-yellow-500/15 to-orange-500/15 blur-[150px] pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <article className="relative p-8 sm:p-14 md:p-16 rounded-3xl bg-zinc-950/85 border border-amber-500/40 shadow-2xl backdrop-blur-2xl text-center overflow-hidden neon-border-amber">
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-gradient-to-bl from-amber-500/30 via-orange-500/15 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-gradient-to-tr from-orange-500/30 via-amber-500/15 to-transparent rounded-full blur-3xl pointer-events-none" />

          <header>
            <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/50 border border-amber-500/40 text-xs font-bold text-amber-300 mb-8 shadow-lg shadow-amber-500/10" data-reveal="down">
              <Eye className="w-3.5 h-3.5 text-amber-400" />
              <span className="tracking-wide uppercase">O PONTO DE INFLEXÃO NO DIGITAL</span>
            </p>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-3xl mx-auto"
              data-reveal="up"
              style={revealDelay(70)}
            >
              Não é sobre ter site.{' '}
              <span className="text-gradient-orange block drop-shadow-[0_0_25px_rgba(249,115,22,0.25)]">
                É sobre como sua empresa é percebida.
              </span>
            </h2>

            <p
              className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-12 font-normal"
              data-reveal="fade"
              style={revealDelay(140)}
            >
              Ter uma página no ar não resolve nada sozinho. O que decide se o cliente avança é a forma como ele te percebe nos primeiros segundos.
            </p>
          </header>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto mb-10">
            <li
              className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-3.5 backdrop-blur-md relative"
              data-reveal="left"
            >
              <p className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md bg-zinc-800/90 text-zinc-400 text-xs font-extrabold uppercase tracking-widest border border-zinc-700">
                  Antes
                </span>
                <span className="text-[11px] text-zinc-500 font-medium">Zero Diferencial</span>
              </p>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-2 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-zinc-500 shadow-[0_0_8px_rgba(113,113,122,0.5)]" />
                  Site Genérico de Prateleira
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Template padrão, textos vazios e botão escondido. O visitante sente insegurança e procura outro profissional.
                </p>
              </div>
            </li>

            <li
              className="p-6 rounded-2xl bg-gradient-to-br from-amber-950/40 via-orange-950/30 to-zinc-900/60 border border-amber-500/50 space-y-3.5 shadow-xl shadow-amber-500/10 backdrop-blur-md relative"
              data-reveal="right"
              style={revealDelay(120)}
            >
              <p className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md bg-amber-500/20 text-amber-300 text-xs font-extrabold uppercase tracking-widest border border-amber-500/40 shadow-[0_0_10px_rgba(245,158,11,0.25)]">
                  Depois
                </span>
                <span className="text-xs font-bold text-amber-400">Alto Valor Percebido</span>
              </p>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-amber-300 flex items-center gap-2 mb-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_10px_#f59e0b] animate-pulse" />
                  Presença Devolweb
                </h3>
                <p className="text-sm text-zinc-200 leading-relaxed font-medium">
                  Visual que transmite solidez imediata, mensagem calibrada para seu público e caminho direto até o WhatsApp.
                </p>
              </div>
            </li>
          </ul>

          <div className="pt-2 flex justify-center" data-reveal="up" style={revealDelay(200)}>
            <button
              type="button"
              onClick={onStartDiagnostic}
              className="relative group px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-amber-400 hover:from-orange-600 hover:to-amber-500 text-zinc-950 font-extrabold text-base transition-all duration-300 shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer active:scale-[0.98] overflow-hidden w-full sm:w-auto"
            >
              <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
              <Sparkles className="w-5 h-5 text-zinc-950 shrink-0" />
              <span>Quero uma presença que transmite autoridade</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 shrink-0" />
            </button>
          </div>
        </article>
      </div>

      {/* Bottom Glowing Neon Divider */}
      <div className="neon-divider-amber mt-20" />
    </section>
  );
};
