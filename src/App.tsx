/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { HeroSection } from './components/HeroSection';
import { ProblemSearchSection } from './components/ProblemSearchSection';
import { PerceptionSection } from './components/PerceptionSection';
import { SolutionSection } from './components/SolutionSection';
import { ProjectsSection } from './components/ProjectsSection';
import { DiagnosticWizard } from './components/DiagnosticWizard';
import { HowItWorksSection } from './components/HowItWorksSection';
import { WhyDevolwebSection } from './components/WhyDevolwebSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { FloatingButtons } from './components/FloatingButtons';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  useScrollReveal();

  const scrollToDiagnostic = () => {
    const el = document.getElementById('diagnostico');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projetos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen w-full bg-[#030304] text-zinc-100 selection:bg-orange-500/30 selection:text-orange-200">
      <HeroSection
        onStartDiagnostic={scrollToDiagnostic}
        onViewProjects={scrollToProjects}
      />

      <ProblemSearchSection onStartDiagnostic={scrollToDiagnostic} />

      <PerceptionSection onStartDiagnostic={scrollToDiagnostic} />

      <SolutionSection onStartDiagnostic={scrollToDiagnostic} />

      <ProjectsSection onStartDiagnostic={scrollToDiagnostic} />

      <DiagnosticWizard />

      <HowItWorksSection onStartDiagnostic={scrollToDiagnostic} />

      <WhyDevolwebSection onStartDiagnostic={scrollToDiagnostic} />

      <FaqSection onStartDiagnostic={scrollToDiagnostic} />

      <FinalCtaSection onStartDiagnostic={scrollToDiagnostic} />

      <FloatingButtons />
    </main>
  );
}
