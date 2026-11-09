import React, { useState } from 'react';
import { Project } from '../types';
import { projectsData } from '../data/projects';
import { Sparkles, CheckCircle2, X, ArrowRight } from 'lucide-react';
import { revealDelay } from '../hooks/useScrollReveal';

interface ProjectsSectionProps {
  onSelectProjectForDiagnostic?: (project: Project) => void;
  onStartDiagnostic?: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProjectForDiagnostic,
  onStartDiagnostic,
}) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('Todos');

  const categories = ['Todos', 'Landing Page', 'Site Institucional', 'Presença Local', 'Loja Virtual'];

  const filteredProjects = projectsData.filter((p) => {
    if (activeFilter === 'Todos') return true;
    return p.category === activeFilter;
  });

  return (
    <section id="projetos" className="py-[35px] relative bg-[#faf8f5] text-zinc-900 border-y border-zinc-200/80 overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-r from-orange-200/40 via-amber-200/30 to-orange-100/40 blur-[150px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-dot-pattern opacity-15 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <header className="text-center max-w-3xl mx-auto mb-12">
          <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-xs font-bold text-orange-800 mb-5 shadow-sm" data-reveal="down">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            <span className="tracking-wide uppercase">PORTFÓLIO DE ALTA PERFORMANCE</span>
          </p>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 mb-5 leading-tight"
            data-reveal="up"
            style={revealDelay(70)}
          >
            Projetos que já transformaram{' '}
            <span className="text-orange-600 drop-shadow-[0_1px_1px_rgba(234,88,12,0.2)]">
              presença em cliente novo.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal" data-reveal="fade" style={revealDelay(140)}>
            Cada projeto nasce de um negócio diferente, com um problema específico a resolver.
          </p>
        </header>

        <nav
          className="flex items-center justify-center flex-wrap gap-2.5 mb-10"
          aria-label="Filtro de projetos"
          data-reveal="up"
          style={revealDelay(180)}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              aria-pressed={activeFilter === cat}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-zinc-950 shadow-md shadow-orange-500/25'
                  : 'bg-white hover:bg-orange-50/80 text-zinc-600 hover:text-zinc-900 border border-zinc-200/90 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </nav>
      </div>

      {/* Infinite Continuous Carousel with Pause on Hover & Gradient Fade Edges */}
      <div className="relative w-full overflow-hidden py-4 mb-8" data-reveal="fade" style={revealDelay(220)}>
        {/* Left Fade Gradient (Dark Vignette on Exit) */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-zinc-950/85 via-zinc-950/40 to-transparent z-20" />
        
        {/* Right Fade Gradient (Dark Vignette on Exit) */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-zinc-950/85 via-zinc-950/40 to-transparent z-20" />

        <ul className="animate-marquee flex gap-6 px-4">
          {[...filteredProjects, ...filteredProjects].map((project, idx) => (
            <li key={`${project.id}-${idx}`} className="shrink-0">
              <article
                id={`project-card-${project.id}-${idx}`}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer w-[310px] sm:w-[350px] md:w-[380px] rounded-2xl bg-white border border-zinc-200/90 hover:border-orange-400 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:-translate-y-1.5 shadow-lg shadow-zinc-900/5 hover:shadow-xl hover:shadow-orange-500/10 h-full"
              >
                <header className="px-4 py-2.5 bg-zinc-100/90 border-b border-zinc-200 flex items-center justify-between">
                  <p className="flex items-center gap-1.5 m-0">
                    <span className="w-2 h-2 rounded-full bg-zinc-300" />
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span className="w-2 h-2 rounded-full bg-orange-500" />
                    <span className="text-[10px] font-mono text-zinc-500 ml-1.5">
                      {project.client.toLowerCase().replace(/[^a-z0-9]/g, '')}.com.br
                    </span>
                  </p>
                  <span className="px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-orange-100 text-orange-800 border border-orange-200">
                    {project.category}
                  </span>
                </header>

                <figure className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100 m-0">
                  <img
                    src={project.image}
                    alt={project.client}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </figure>

                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-start bg-white">
                  <p className="text-[11px] font-semibold text-orange-600 uppercase tracking-wider mb-1">
                    {project.niche}
                  </p>
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-900 mb-2 group-hover:text-orange-600 transition-colors line-clamp-1">
                    {project.client}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal line-clamp-3">
                    {project.outcome}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Main Diagnostic CTA */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4"
          data-reveal="up"
          style={revealDelay(120)}
        >
          <button
            type="button"
            onClick={onStartDiagnostic}
            className="relative group w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-amber-400 hover:from-orange-600 hover:to-amber-500 text-zinc-950 font-extrabold text-base transition-all duration-300 shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer active:scale-[0.98] overflow-hidden"
          >
            <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
            <Sparkles className="w-5 h-5 text-zinc-950 shrink-0" />
            <span>Quero um projeto com esse padrão para mim</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 shrink-0" />
          </button>
        </div>
      </div>

      {/* Modal Detailed Case with Refined Backdrop */}
      {selectedProject && (
        <div
          id="project-detail-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <article
            className="relative w-full max-w-2xl rounded-3xl bg-white border border-zinc-200 overflow-hidden shadow-2xl"
            data-reveal="scale"
            onClick={(e) => e.stopPropagation()}
          >
            <figure className="relative w-full max-h-[45vh] overflow-y-auto bg-zinc-100 m-0">
              <img
                src={selectedProject.image}
                alt={selectedProject.client}
                className="w-full h-auto object-contain"
              />
              <button
                type="button"
                id="btn-close-project-modal"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 border border-zinc-200 text-zinc-700 hover:text-zinc-950 flex items-center justify-center cursor-pointer backdrop-blur-md shadow-md"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </figure>

            <div className="p-6 sm:p-8">
              <p className="inline-block px-3.5 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-800 border border-orange-200 mb-3 shadow-sm">
                {selectedProject.category} • {selectedProject.niche}
              </p>

              <h3 id="project-modal-title" className="text-2xl sm:text-3xl font-extrabold text-zinc-900 mb-4">
                {selectedProject.client}
              </h3>

              <section className="p-5 rounded-2xl bg-orange-50/60 border border-orange-200 mb-6 space-y-2">
                <h4 className="text-xs font-bold text-orange-700 uppercase tracking-wider">
                  Resultado Estratégico
                </h4>
                <p className="text-zinc-800 text-sm font-medium leading-relaxed">
                  {selectedProject.outcome}
                </p>
                {selectedProject.metrics && (
                  <p className="text-xs font-bold text-orange-600 flex items-center gap-1.5 pt-1">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{selectedProject.metrics}</span>
                  </p>
                )}
              </section>

              <p className="text-zinc-600 text-sm leading-relaxed mb-6 font-normal">
                {selectedProject.description}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-zinc-100">
                <button
                  type="button"
                  id="btn-modal-close"
                  onClick={() => setSelectedProject(null)}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl text-sm font-medium text-zinc-600 hover:text-zinc-900 cursor-pointer"
                >
                  Fechar
                </button>
                <a
                  href="#diagnostico"
                  onClick={() => setSelectedProject(null)}
                  className="relative group w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-amber-400 hover:from-orange-600 hover:to-amber-500 text-zinc-950 font-extrabold text-sm text-center shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 overflow-hidden flex items-center justify-center gap-2"
                >
                  <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                  <span>Quero um resultado assim para meu negócio</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </article>
        </div>
      )}
    </section>
  );
};
