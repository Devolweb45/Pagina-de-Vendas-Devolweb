import React, { useState } from 'react';
import { DiagnosticFormData } from '../types';
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Check,
  Send,
  MessageCircle,
  Building2,
  Phone,
  User,
  Globe,
  CheckCircle2,
  RotateCcw,
  Clock,
} from 'lucide-react';
import { revealDelay } from '../hooks/useScrollReveal';

const STEP1_OPTIONS = [
  'Ainda não tenho site',
  'Meu site está desatualizado',
  'Meu site não gera contato',
  'Minha empresa não passa profissionalismo no digital',
  'Quero melhorar minha presença no Google',
  'Outro',
];

const STEP2_OPTIONS = [
  'Gerar mais contatos',
  'Passar mais credibilidade',
  'Apresentar melhor meus serviços',
  'Ser encontrado no Google',
  'Organizar minha presença digital',
  'Outro',
];

const STEP3_OPTIONS = [
  'Até R$500',
  'R$500 a R$1.000',
  'R$1.000 a R$2.000',
  'Acima de R$2.000',
  'Ainda não sei, quero orientação',
];

export const DiagnosticWizard: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState<DiagnosticFormData>({
    step1_challenge: '',
    step1_other: '',
    step2_goal: '',
    step2_other: '',
    step3_budget: '',
    name: '',
    whatsapp: '',
    company: '',
    currentSite: '',
  });

  const formatWhatsApp = (value: string) => {
    const numbers = value.replace(/\D/g, '').slice(0, 11);
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
  };

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatWhatsApp(e.target.value);
    setFormData((prev) => ({ ...prev, whatsapp: formatted }));
    if (formErrors.whatsapp) {
      setFormErrors((prev) => ({ ...prev, whatsapp: '' }));
    }
  };

  const handleNextStep = () => {
    const errors: Record<string, string> = {};

    if (currentStep === 1) {
      if (!formData.step1_challenge) {
        errors.step1 = 'Selecione uma das opções para continuar.';
      } else if (formData.step1_challenge === 'Outro' && !formData.step1_other.trim()) {
        errors.step1_other = 'Por favor, descreva brevemente seu desafio.';
      }
    } else if (currentStep === 2) {
      if (!formData.step2_goal) {
        errors.step2 = 'Selecione o objetivo principal.';
      } else if (formData.step2_goal === 'Outro' && !formData.step2_other.trim()) {
        errors.step2_other = 'Por favor, descreva o que gostaria que fizesse melhor.';
      }
    } else if (currentStep === 3) {
      if (!formData.step3_budget) {
        errors.step3 = 'Selecione uma faixa de investimento estimada.';
      }
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setCurrentStep((prev) => Math.min(prev + 1, 4));
  };

  const handlePrevStep = () => {
    setFormErrors({});
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) {
      errors.name = 'Informe seu nome completo ou como prefere ser chamado.';
    }
    if (!formData.whatsapp.trim() || formData.whatsapp.replace(/\D/g, '').length < 10) {
      errors.whatsapp = 'Informe um WhatsApp válido com DDD.';
    }
    if (!formData.company.trim()) {
      errors.company = 'Informe o nome da sua empresa.';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const resetForm = () => {
    setFormData({
      step1_challenge: '',
      step1_other: '',
      step2_goal: '',
      step2_other: '',
      step3_budget: '',
      name: '',
      whatsapp: '',
      company: '',
      currentSite: '',
    });
    setCurrentStep(1);
    setIsSubmitted(false);
    setFormErrors({});
  };

  const generateWhatsAppMessage = () => {
    const challengeText = formData.step1_challenge === 'Outro' ? formData.step1_other : formData.step1_challenge;
    const goalText = formData.step2_goal === 'Outro' ? formData.step2_other : formData.step2_goal;
    const siteText = formData.currentSite ? `\n• Site atual: ${formData.currentSite}` : '';

    const text = `Olá Devolweb! Acabei de preencher o diagnóstico estratégico para minha empresa:

• Nome: ${formData.name}
• Empresa: ${formData.company}
• WhatsApp: ${formData.whatsapp}${siteText}
• Desafio atual: ${challengeText}
• Objetivo desejado: ${goalText}
• Faixa de investimento: ${formData.step3_budget}

Gostaria de ver o diagnóstico detalhado e as recomendações para meu negócio.`;

    return encodeURIComponent(text);
  };

  const stepTitles = [
    'Desafio',
    'Objetivo',
    'Investimento',
    'Contato',
  ];

  return (
    <section id="diagnostico" className="py-[35px] relative bg-gradient-to-b from-[#08040a] via-[#1c0a04] to-[#090508] overflow-hidden">
      {/* Intense Glowing Neon Aura & Circuit Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[500px] bg-gradient-to-b from-orange-500/20 via-amber-500/10 to-transparent blur-[140px] pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute inset-0 bg-dot-pattern opacity-50 pointer-events-none" />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 relative z-10">
        <header className="text-center mb-8">
          <p className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-950/60 border border-orange-500/40 text-[11px] font-bold text-orange-300 mb-3.5 shadow-lg shadow-orange-500/15 backdrop-blur-xl" data-reveal="down">
            <Sparkles className="w-3 h-3 text-orange-400" />
            <span className="tracking-wide uppercase">MECANISMO DE DIAGNÓSTICO ESTRATÉGICO</span>
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight"
            data-reveal="up"
            style={revealDelay(70)}
          >
            Descubra o que está{' '}
            <span className="text-gradient-orange block drop-shadow-[0_0_25px_rgba(249,115,22,0.25)]">
              travando seus contatos.
            </span>
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base max-w-lg mx-auto font-normal" data-reveal="fade" style={revealDelay(140)}>
            Leva menos de 1 minuto para mapear o diagnóstico exato e a solução ideal para o seu negócio.
          </p>
        </header>

        {/* Wizard Main Neon Glass Container (More compact) */}
        <div
          className="rounded-2xl bg-zinc-950/90 border border-orange-500/40 shadow-2xl backdrop-blur-2xl overflow-hidden neon-border-orange"
          data-reveal="scale"
          style={revealDelay(200)}
        >
          {!isSubmitted ? (
            <div>
              {/* Step Navigation Pill Bar */}
              <nav className="p-4 sm:p-5 pb-3 sm:pb-4 border-b border-zinc-800/80 bg-zinc-900/60" aria-label="Etapas do diagnóstico">
                <ol className="grid grid-cols-4 gap-2 mb-3">
                  {[1, 2, 3, 4].map((stepNum) => {
                    const isPassed = currentStep > stepNum;
                    const isCurrent = currentStep === stepNum;
                    return (
                      <li key={stepNum} className="flex flex-col gap-1">
                        <span
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            isPassed || isCurrent
                              ? 'bg-gradient-to-r from-orange-500 to-amber-400 shadow-[0_0_8px_#f97316]'
                              : 'bg-zinc-800'
                          }`}
                        />
                        <span
                          className={`text-[9px] sm:text-[11px] font-bold text-center whitespace-nowrap leading-tight ${
                            isCurrent
                              ? 'text-orange-400 drop-shadow-[0_0_6px_rgba(249,115,22,0.4)]'
                              : isPassed
                              ? 'text-zinc-300'
                              : 'text-zinc-500'
                          }`}
                        >
                          <span className="hidden sm:inline">{stepNum}. </span>
                          {stepTitles[stepNum - 1]}
                        </span>
                      </li>
                    );
                  })}
                </ol>

                <p className="flex items-center justify-between text-[11px] text-zinc-400 pt-0.5">
                  <span className="font-bold text-zinc-200">
                    Etapa {currentStep} de 4
                  </span>
                  <span className="flex items-center gap-1.5 text-orange-400 font-semibold drop-shadow-[0_0_6px_rgba(249,115,22,0.3)]">
                    <Clock className="w-3 h-3" />
                    Tempo estimado: 45 seg
                  </span>
                </p>
              </nav>

              {/* Step Body */}
              <div className="p-5 sm:p-7">
                {/* ETAPA 1 */}
                {currentStep === 1 && (
                  <div className="animate-fade-in">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1.5">
                      Qual é o principal desafio do seu negócio hoje?
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 mb-5">
                      Selecione a situação que mais se aproxima do seu momento atual.
                    </p>

                    <ul className="space-y-2.5 mb-6">
                      {STEP1_OPTIONS.map((opt, idx) => {
                        const isSelected = formData.step1_challenge === opt;
                        return (
                          <li key={idx}>
                            <button
                              type="button"
                              id={`step1-opt-${idx}`}
                              onClick={() => {
                                setFormData((prev) => ({ ...prev, step1_challenge: opt }));
                                if (formErrors.step1) {
                                  setFormErrors((prev) => ({ ...prev, step1: '' }));
                                }
                              }}
                              className={`w-full p-3 sm:p-3.5 rounded-xl border text-left transition-all duration-200 flex items-center justify-between cursor-pointer ${
                                isSelected
                                  ? 'bg-orange-500/20 border-orange-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.2)]'
                                  : 'bg-zinc-900/60 border-zinc-800 text-zinc-300 hover:border-zinc-700 hover:bg-zinc-900/90'
                              }`}
                            >
                              <span className="text-xs sm:text-sm font-semibold">{opt}</span>
                              <span
                                className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ml-2.5 transition-all ${
                                  isSelected
                                    ? 'border-orange-500 bg-orange-500 text-zinc-950 shadow-[0_0_8px_#f97316]'
                                    : 'border-zinc-700 bg-zinc-950'
                                }`}
                              >
                                {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                              </span>
                            </button>

                            {opt === 'Outro' && isSelected && (
                              <p className="mt-2.5 pl-1">
                                <input
                                  type="text"
                                  id="step1-other-input"
                                  placeholder="Descreva brevemente seu desafio..."
                                  value={formData.step1_other}
                                  onChange={(e) =>
                                    setFormData((prev) => ({
                                      ...prev,
                                      step1_other: e.target.value,
                                    }))
                                  }
                                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-orange-500 transition-colors shadow-inner"
                                />
                                {formErrors.step1_other && (
                                  <span className="text-xs text-amber-400 mt-1 block">
                                    {formErrors.step1_other}
                                  </span>
                                )}
                              </p>
                            )}
                          </li>
                        );
                      })}
                    </ul>

                    {formErrors.step1 && (
                      <p className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300 mb-4" role="alert">
                        {formErrors.step1}
                      </p>
                    )}
                  </div>
                )}

                {/* ETAPA 2 */}
                {currentStep === 2 && (
                  <div className="animate-fade-in">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1.5">
                      O que você gostaria que sua presença digital fizesse melhor?
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 mb-5">
                      Qual é o principal resultado que você espera alcançar?
                    </p>

                    <ul className="space-y-2.5 mb-6">
                      {STEP2_OPTIONS.map((opt, idx) => {
                        const isSelected = formData.step2_goal === opt;
                        return (
                          <li key={idx}>
                            <button
                              type="button"
                              id={`step2-opt-${idx}`}
                              onClick={() => {
                                setFormData((prev) => ({ ...prev, step2_goal: opt }));
                                if (formErrors.step2) {
                                  setFormErrors((prev) => ({ ...prev, step2: '' }));
                                }
                              }}
                              className={`w-full p-3 sm:p-3.5 rounded-xl border text-left transition-all duration-200 flex items-center justify-between cursor-pointer ${
                                isSelected
                                  ? 'bg-orange-500/20 border-orange-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.2)]'
                                  : 'bg-zinc-900/60 border-zinc-800 text-zinc-300 hover:border-zinc-700 hover:bg-zinc-900/90'
                              }`}
                            >
                              <span className="text-xs sm:text-sm font-semibold">{opt}</span>
                              <span
                                className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ml-2.5 transition-all ${
                                  isSelected
                                    ? 'border-orange-500 bg-orange-500 text-zinc-950 shadow-[0_0_8px_#f97316]'
                                    : 'border-zinc-700 bg-zinc-950'
                                }`}
                              >
                                {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                              </span>
                            </button>

                            {opt === 'Outro' && isSelected && (
                              <p className="mt-2.5 pl-1">
                                <input
                                  type="text"
                                  id="step2-other-input"
                                  placeholder="Descreva o que gostaria que fizesse melhor..."
                                  value={formData.step2_other}
                                  onChange={(e) =>
                                    setFormData((prev) => ({
                                      ...prev,
                                      step2_other: e.target.value,
                                    }))
                                  }
                                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-orange-500 transition-colors shadow-inner"
                                />
                                {formErrors.step2_other && (
                                  <span className="text-xs text-amber-400 mt-1 block">
                                    {formErrors.step2_other}
                                  </span>
                                )}
                              </p>
                            )}
                          </li>
                        );
                      })}
                    </ul>

                    {formErrors.step2 && (
                      <p className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300 mb-4" role="alert">
                        {formErrors.step2}
                      </p>
                    )}
                  </div>
                )}

                {/* ETAPA 3 */}
                {currentStep === 3 && (
                  <div className="animate-fade-in">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1.5">
                      Qual faixa de investimento você considera para este projeto?
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 mb-5">
                      Isso nos ajuda a calibrar a melhor estratégia para o seu orçamento atual.
                    </p>

                    <ul className="space-y-2.5 mb-6">
                      {STEP3_OPTIONS.map((opt, idx) => {
                        const isSelected = formData.step3_budget === opt;
                        return (
                          <li key={idx}>
                            <button
                              type="button"
                              id={`step3-opt-${idx}`}
                              onClick={() => {
                                setFormData((prev) => ({ ...prev, step3_budget: opt }));
                                if (formErrors.step3) {
                                  setFormErrors((prev) => ({ ...prev, step3: '' }));
                                }
                              }}
                              className={`w-full p-3 sm:p-3.5 rounded-xl border text-left transition-all duration-200 flex items-center justify-between cursor-pointer ${
                                isSelected
                                  ? 'bg-orange-500/20 border-orange-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.2)]'
                                  : 'bg-zinc-900/60 border-zinc-800 text-zinc-300 hover:border-zinc-700 hover:bg-zinc-900/90'
                              }`}
                            >
                              <span className="text-xs sm:text-sm font-semibold">{opt}</span>
                              <span
                                className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ml-2.5 transition-all ${
                                  isSelected
                                    ? 'border-orange-500 bg-orange-500 text-zinc-950 shadow-[0_0_8px_#f97316]'
                                    : 'border-zinc-700 bg-zinc-950'
                                }`}
                              >
                                {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                              </span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>

                    {formErrors.step3 && (
                      <p className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300 mb-4" role="alert">
                        {formErrors.step3}
                      </p>
                    )}
                  </div>
                )}

                {/* ETAPA 4 */}
                {currentStep === 4 && (
                  <form onSubmit={handleSubmit} className="animate-fade-in">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1.5">
                      Onde podemos falar com você?
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 mb-5">
                      Seus dados são confidenciais e usados exclusivamente para apresentar o diagnóstico.
                    </p>

                    <div className="space-y-3 mb-6">
                      <div>
                        <label htmlFor="input-name" className="block text-xs font-bold text-zinc-300 mb-1.5 flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-orange-400" />
                          <span>Seu Nome *</span>
                        </label>
                        <input
                          type="text"
                          id="input-name"
                          required
                          placeholder="Ex: Carlos Silva"
                          value={formData.name}
                          onChange={(e) => {
                            setFormData((prev) => ({ ...prev, name: e.target.value }));
                            if (formErrors.name) {
                              setFormErrors((prev) => ({ ...prev, name: '' }));
                            }
                          }}
                          className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-700 text-white placeholder-zinc-600 text-xs sm:text-sm focus:outline-none focus:border-orange-500 transition-colors shadow-inner"
                        />
                        {formErrors.name && (
                          <span className="text-xs text-amber-400 mt-1 block">
                            {formErrors.name}
                          </span>
                        )}
                      </div>

                      <div>
                        <label htmlFor="input-whatsapp" className="block text-xs font-bold text-zinc-300 mb-1.5 flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-amber-400" />
                          <span>WhatsApp com DDD *</span>
                        </label>
                        <input
                          type="tel"
                          id="input-whatsapp"
                          required
                          placeholder="(11) 98765-4321"
                          value={formData.whatsapp}
                          onChange={handleWhatsAppChange}
                          className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-700 text-white placeholder-zinc-600 text-xs sm:text-sm focus:outline-none focus:border-orange-500 transition-colors shadow-inner"
                        />
                        {formErrors.whatsapp && (
                          <span className="text-xs text-amber-400 mt-1 block">
                            {formErrors.whatsapp}
                          </span>
                        )}
                      </div>

                      <div>
                        <label htmlFor="input-company" className="block text-xs font-bold text-zinc-300 mb-1.5 flex items-center gap-1.5">
                          <Building2 className="w-3.5 h-3.5 text-orange-400" />
                          <span>Nome da Empresa *</span>
                        </label>
                        <input
                          type="text"
                          id="input-company"
                          required
                          placeholder="Ex: Clínica Alpha / Consultoria Silva"
                          value={formData.company}
                          onChange={(e) => {
                            setFormData((prev) => ({ ...prev, company: e.target.value }));
                            if (formErrors.company) {
                              setFormErrors((prev) => ({ ...prev, company: '' }));
                            }
                          }}
                          className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-700 text-white placeholder-zinc-600 text-xs sm:text-sm focus:outline-none focus:border-orange-500 transition-colors shadow-inner"
                        />
                        {formErrors.company && (
                          <span className="text-xs text-amber-400 mt-1 block">
                            {formErrors.company}
                          </span>
                        )}
                      </div>

                      <div>
                        <label htmlFor="input-current-site" className="block text-xs font-bold text-zinc-300 mb-1.5 flex items-center gap-1.5">
                          <Globe className="w-3.5 h-3.5 text-zinc-400" />
                          <span>Site atual ou Instagram (se tiver)</span>
                        </label>
                        <input
                          type="text"
                          id="input-current-site"
                          placeholder="Ex: minhaempresa.com.br ou @minhaempresa"
                          value={formData.currentSite}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, currentSite: e.target.value }))
                          }
                          className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-700 text-white placeholder-zinc-600 text-xs sm:text-sm focus:outline-none focus:border-orange-500 transition-colors shadow-inner"
                        />
                      </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-between gap-3 pt-4 border-t border-zinc-800">
                      <button
                        type="button"
                        id="btn-step-prev"
                        onClick={handlePrevStep}
                        className="px-5 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white font-bold text-xs sm:text-sm transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Voltar</span>
                      </button>

                      <button
                        type="submit"
                        id="btn-submit-diagnostic"
                        disabled={isSubmitting}
                        className="relative group flex-1 sm:flex-initial px-7 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-amber-400 hover:from-orange-600 hover:to-amber-500 text-zinc-950 font-extrabold text-sm sm:text-base transition-all duration-300 shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 active:scale-[0.98] overflow-hidden"
                      >
                        <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                        {isSubmitting ? (
                          <span>Processando diagnóstico...</span>
                        ) : (
                          <>
                            <span>Enviar diagnóstico</span>
                            <Send className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-center text-[11px] text-zinc-400 mt-4">
                      Seus dados são usados só pra esse contato, sem compromisso.
                    </p>
                  </form>
                )}

                {/* Steps 1-3 Navigation */}
                {currentStep < 4 && (
                  <div className="flex items-center justify-between gap-3 pt-4 border-t border-zinc-800">
                    {currentStep > 1 ? (
                      <button
                        type="button"
                        id="btn-step-prev"
                        onClick={handlePrevStep}
                        className="px-5 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white font-bold text-xs sm:text-sm transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Voltar</span>
                      </button>
                    ) : (
                      <span />
                    )}

                    <button
                      type="button"
                      id="btn-step-next"
                      onClick={handleNextStep}
                      className="relative group px-7 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-amber-400 hover:from-orange-600 hover:to-amber-500 text-zinc-950 font-extrabold text-sm sm:text-base transition-all duration-300 shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98] overflow-hidden"
                    >
                      <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                      <span>Avançar</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* SUCCESS STATE */
            <div className="p-6 sm:p-10 text-center animate-fade-in">
              <span className="w-16 h-16 rounded-2xl bg-orange-500/15 border border-orange-500/40 text-orange-400 flex items-center justify-center mx-auto mb-4 shadow-[0_0_25px_rgba(249,115,22,0.3)]">
                <CheckCircle2 className="w-8 h-8" />
              </span>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                Diagnóstico gerado com sucesso!
              </h3>

              <p className="text-zinc-300 text-xs sm:text-sm max-w-md mx-auto mb-6">
                Obrigado, <strong className="text-white">{formData.name}</strong>. Mapeamos as necessidades da <strong className="text-white">{formData.company}</strong> para estruturar sua nova presença digital focada em clientes.
              </p>

              <dl className="p-4 sm:p-5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-left max-w-md mx-auto mb-6 space-y-2.5 text-xs sm:text-sm shadow-xl">
                <div className="flex justify-between border-b border-zinc-800 pb-2">
                  <dt className="text-zinc-400">Desafio Atual:</dt>
                  <dd className="font-semibold text-zinc-200 text-right m-0">
                    {formData.step1_challenge === 'Outro' ? formData.step1_other : formData.step1_challenge}
                  </dd>
                </div>
                <div className="flex justify-between border-b border-zinc-800 pb-2">
                  <dt className="text-zinc-400">Objetivo:</dt>
                  <dd className="font-semibold text-orange-400 text-right m-0">
                    {formData.step2_goal === 'Outro' ? formData.step2_other : formData.step2_goal}
                  </dd>
                </div>
                <div className="flex justify-between border-b border-zinc-800 pb-2">
                  <dt className="text-zinc-400">Investimento:</dt>
                  <dd className="font-semibold text-amber-400 text-right m-0">
                    {formData.step3_budget}
                  </dd>
                </div>
                <div className="flex justify-between pt-0.5">
                  <dt className="text-zinc-400">WhatsApp:</dt>
                  <dd className="font-semibold text-zinc-200 text-right m-0">
                    {formData.whatsapp}
                  </dd>
                </div>
              </dl>

              <div className="max-w-md mx-auto">
                <a
                  id="btn-whatsapp-diagnostic"
                  href={`https://wa.me/?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-amber-400 hover:from-orange-600 hover:to-amber-500 text-zinc-950 font-extrabold text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2.5 shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5 active:scale-[0.98] overflow-hidden"
                >
                  <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                  <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                  <span>Falar com especialista no WhatsApp</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 shrink-0" />
                </a>
              </div>

              <div className="mt-5">
                <button
                  type="button"
                  id="btn-reset-diagnostic"
                  onClick={resetForm}
                  className="text-xs text-zinc-400 hover:text-zinc-300 inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Fazer outro diagnóstico</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Glowing Neon Divider */}
      <div className="neon-divider mt-14" />
    </section>
  );
};
