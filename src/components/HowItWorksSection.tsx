import React, { useState, useRef, useEffect } from 'react';
import { Layers, ArrowRight, Zap } from 'lucide-react';
import { revealDelay } from '../hooks/useScrollReveal';

interface HowItWorksSectionProps {
  onStartDiagnostic?: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({
  onStartDiagnostic,
}) => {
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [activeStep, setActiveStep] = useState(0);

  // Bolinhas vão sendo "pintadas" (preenchidas) à medida que o usuário rola,
  // do passo 1 até completar o 5. É cumulativo: uma vez pintada, permanece.
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = stepRefs.current.indexOf(entry.target as HTMLLIElement);
            if (idx !== -1) {
              setActiveStep((prev) => Math.max(prev, idx + 1));
            }
          }
        }
      },
      { threshold: 0.35, rootMargin: '0px 0px -120px 0px' },
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);
  const steps = [
    {
      number: '01',
      title: 'Diagnóstico',
      description: 'Entendemos seu negócio e o que está travando a geração de contatos.',
      badge: 'Imersão',
      glow: 'shadow-md shadow-orange-500/20',
    },
    {
      number: '02',
      title: 'Direção',
      description: 'Definimos mensagem e estrutura antes de qualquer tela ser desenhada.',
      badge: 'Estratégia',
      glow: 'shadow-md shadow-amber-500/20',
    },
    {
      number: '03',
      title: 'Construção',
      description: 'Montamos a página com foco absoluto em resultado, velocidade e autoridade.',
      badge: 'Execução',
      glow: 'shadow-md shadow-orange-500/20',
    },
    {
      number: '04',
      title: 'Ajustes',
      description: 'Revisamos cada detalhe junto com você para garantir precisão total.',
      badge: 'Refinamento',
      glow: 'shadow-md shadow-amber-500/20',
    },
    {
      number: '05',
      title: 'Entrega',
      description: 'Página no ar, configurada e pronta pra gerar contato direto.',
      badge: 'Publicação',
      glow: 'shadow-md shadow-orange-500/25',
    },
  ];

  return (
    <section id="como-funciona" className="py-[35px] bg-[#faf8f5] text-zinc-900 relative overflow-hidden border-y border-zinc-200/80">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-r from-orange-200/40 via-amber-200/30 to-orange-100/30 blur-[140px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-dot-pattern opacity-15 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <header className="text-center max-w-2xl mx-auto mb-16">
          <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-xs font-bold text-orange-800 mb-5 shadow-sm" data-reveal="down">
            <Layers className="w-3.5 h-3.5 text-orange-600" />
            <span className="tracking-wide uppercase">PROCESSO CLARO E TRANSPARENTE</span>
          </p>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 mb-4 leading-tight"
            data-reveal="up"
            style={revealDelay(70)}
          >
            Como funciona{' '}
            <span className="text-orange-600 drop-shadow-[0_1px_1px_rgba(234,88,12,0.2)]">
              nosso processo.
            </span>
          </h2>

          <p className="text-zinc-600 text-base sm:text-lg font-normal" data-reveal="fade" style={revealDelay(140)}>
            Um passo a passo estruturado que elimina improvisos e garante uma página que converte.
          </p>
        </header>

        <ol className="relative border-l-2 border-orange-300 ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 space-y-8 mb-14">
          {steps.map((step, index) => {
            const isActive = index < activeStep;
            return (
              <li
                key={step.number}
                id={`step-item-${step.number}`}
                ref={(el) => {
                  stepRefs.current[index] = el;
                }}
                className="relative group"
                data-reveal="left"
                style={revealDelay(index * 80)}
              >
                <span className={`absolute -left-[37px] sm:-left-[53px] top-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 flex items-center justify-center text-xs sm:text-sm font-extrabold transition-all duration-300 ${step.glow} ${isActive ? 'bg-orange-500 border-orange-500 text-white' : 'bg-white border-orange-500 text-orange-600 group-hover:border-amber-500 group-hover:text-amber-600'}`}>
                  {step.number}
                </span>

              <article className="p-6 sm:p-7 rounded-3xl bg-white border border-zinc-200/90 group-hover:border-orange-300 transition-all duration-300 shadow-lg shadow-zinc-900/5 hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1">
                <header className="flex items-center justify-between mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 group-hover:text-orange-600 transition-colors">
                    {step.title}
                  </h3>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-orange-50 border border-orange-200 text-orange-700">
                    {step.badge}
                  </span>
                </header>

                <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                  {step.description}
                </p>
              </article>
            </li>
            );
          })}
        </ol>

        <div className="flex justify-center" data-reveal="up" style={revealDelay(120)}>
          <button
            type="button"
            onClick={onStartDiagnostic}
            className="relative group w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-amber-400 hover:from-orange-600 hover:to-amber-500 text-zinc-950 font-extrabold text-base transition-all duration-300 shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer active:scale-[0.98] overflow-hidden"
          >
            <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
            <Zap className="w-5 h-5 text-zinc-950 shrink-0" />
            <span>Iniciar o Passo 01: Fazer Diagnóstico Gratuito</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 shrink-0" />
          </button>
        </div>
      </div>
    </section>
  );
};
