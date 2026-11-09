import React from 'react';
import {
  ArrowRight,
  ChevronRight,
  CheckCircle2,
} from 'lucide-react';
import bannerImg from '../assets/images/hero oficial.webp';
import heroCelularImg from '../assets/images/hero-celular.webp';
import logoImg from '../assets/images/devolweb-removebg-preview.png';
import { revealDelay } from '../hooks/useScrollReveal';

interface HeroSectionProps {
  onStartDiagnostic: () => void;
  onViewProjects: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartDiagnostic,
  onViewProjects,
}) => {
  const bannerRef = React.useRef<HTMLImageElement | null>(null);

  // Subtle parallax for the desktop banner only (disabled on mobile / reduced motion).
  React.useEffect(() => {
    const img = bannerRef.current;
    if (!img || typeof window === 'undefined') return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const isDesktop = window.matchMedia('(min-width: 1024px)');
    let frame = 0;

    const apply = () => {
      frame = 0;
      if (reduceMotion.matches || !isDesktop.matches) {
        img.style.transform = '';
        return;
      }
      const offset = Math.min(window.scrollY, 800) * 0.05;
      img.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0) scale(1.1)`;
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(apply);
    };

    const sync = () => {
      if (frame) window.cancelAnimationFrame(frame);
      apply();
    };

    apply();
    window.addEventListener('scroll', onScroll, { passive: true });
    reduceMotion.addEventListener('change', sync);
    isDesktop.addEventListener('change', sync);

    return () => {
      window.removeEventListener('scroll', onScroll);
      reduceMotion.removeEventListener('change', sync);
      isDesktop.removeEventListener('change', sync);
      if (frame) window.cancelAnimationFrame(frame);
      img.style.transform = '';
    };
  }, []);

  return (
    <section id="hero" className="relative flex flex-col justify-start lg:justify-center min-h-[100svh] lg:min-h-0 pt-5 sm:pt-8 lg:pt-20 pb-10 lg:pb-16 overflow-hidden bg-gradient-to-b from-[#0e0703] via-[#070406] to-[#050307]">
      {/* Banner de fundo (desktop): retrato corporativo com brilho laranja */}
      <div aria-hidden="true" className="absolute inset-0 z-0 hidden lg:block overflow-hidden">
        <img
          ref={bannerRef}
          src={bannerImg}
          alt=""
          className="h-full w-full object-cover object-right will-change-transform"
          referrerPolicy="no-referrer"
          fetchPriority="high"
          loading="eager"
        />
      </div>

      {/* Fundo mobile: imagem "hero celular" cobrindo toda a seção, com scrim para legibilidade.
          Todos os textos e botões ficam POR CIMA desta imagem. */}
      <div aria-hidden="true" className="absolute inset-0 z-0 lg:hidden overflow-hidden">
        <img
          src={heroCelularImg}
          alt=""
          className="h-full w-full object-cover object-top scale-105"
          referrerPolicy="no-referrer"
          fetchPriority="high"
          loading="eager"
        />
        {/* Camadas de escurecimento: mantêm o retrato visível, mas garantem contraste do texto */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0502]/92 via-[#0b0502]/72 to-[#0b0502]/94" />
        <div className="absolute inset-0 bg-[radial-gradient(130%_80%_at_12%_-5%,rgba(249,115,22,0.20),transparent_62%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <header className="lg:col-span-6 text-center lg:text-left space-y-6">
            <img
              src={logoImg}
              alt="Devolweb"
              className="block lg:inline-block mx-auto lg:mx-0 h-14 sm:h-16 md:h-16 w-auto object-contain drop-shadow-[0_0_20px_rgba(249,115,22,0.3)] filter brightness-105"
              referrerPolicy="no-referrer"
              data-reveal="fade"
              style={revealDelay(70)}
            />

            <p
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-orange-950/50 border border-orange-500/40 text-xs font-bold text-orange-300 backdrop-blur-xl shadow-lg shadow-orange-500/10"
              data-reveal="down"
              style={revealDelay(100)}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500 shadow-[0_0_8px_#f97316]"></span>
              </span>
              <span className="tracking-wider uppercase text-[11px] sm:text-xs">DEVOLWEB • CONSULTORIA & PRESENÇA DIGITAL</span>
            </p>

            <h1 className="text-[2.5rem] sm:text-[3.25rem] lg:text-[62px] font-black tracking-tight text-white leading-[0.95] lg:leading-[56px]">
              <span className="block" data-reveal="up" style={revealDelay(130)}>
                Seu site não precisa só existir.
              </span>
              <span
                className="block text-gradient-orange drop-shadow-[0_0_25px_rgba(249,115,22,0.25)]"
                data-reveal="up"
                style={revealDelay(200)}
              >
                Ele precisa trazer cliente novo.
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl text-zinc-300 max-w-xl leading-relaxed font-normal"
              data-reveal="up"
              style={revealDelay(280)}
            >
              A Devolweb monta presença digital pensada pra gerar contato, não só pra estar no ar.
            </p>

            <div
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
              data-reveal="up"
              style={revealDelay(350)}
            >
              <button
                type="button"
                id="hero-primary-cta"
                onClick={onStartDiagnostic}
                className="relative group px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-amber-400 hover:from-orange-600 hover:to-amber-500 text-zinc-950 font-extrabold text-base transition-all duration-300 shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer active:scale-[0.98] overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                <span>Começar diagnóstico gratuito</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                id="hero-secondary-cta"
                onClick={onViewProjects}
                className="px-7 py-4 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700 hover:border-orange-500/40 text-zinc-200 hover:text-white font-semibold text-base transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer backdrop-blur-md hover:shadow-lg hover:shadow-orange-500/5"
              >
                <span>Ver projetos</span>
                <ChevronRight className="w-4 h-4 text-zinc-400" />
              </button>
            </div>

            <ul
              className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 pt-3 text-xs text-zinc-400"
              data-reveal="up"
              style={revealDelay(420)}
            >
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                <span className="text-zinc-300">Diagnóstico em 45 segundos</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-zinc-300">100% gratuito e confidencial</span>
              </li>
            </ul>
          </header>

        </div>
      </div>
      
      {/* Bottom Glowing Neon Divider */}
      <div className="neon-divider mt-10" />
    </section>
  );
};
