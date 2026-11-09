# 📋 RESUMO CONSOLIDADO — Projeto Devolweb

Este arquivo reúne todas as informações do projeto da landing page oficial da Devolweb, para facilitar a visualização e edição.

## 1. Visão Geral

Landing page de alta conversão para a **Devolweb** — criação de sites profissionais focados em diagnóstico estratégico e geração de clientes.

- Idioma: Português (pt-BR)
- Tema: escuro (preto / âmago / laranja neon)
- Tecnologia: React 19 + Vite + Tailwind CSS 4 + TypeScript
- Recursos: diagnóstico interativo de 4 etapas, portfólio com 18 projetos, acordeão de FAQ, canvas de meteoros no hero, envio via WhatsApp

Fonte original: gerado no Google AI Studio (conforme README.md)

## 2. Stack Tecnológica

```
React         ^19.0.1
Vite          ^6.2.3
Tailwind CSS  ^4.1.14
TypeScript    ~5.8.2
lucide-react  ^0.546.0
motion        ^12.23.24
express       ^4.21.2
@google/genai ^2.4.0
dotenv        ^17.2.3
sharp         ^0.35.5
```

Scripts (`package.json`):
- `npm run dev` — servidor dev na porta 3000
- `npm run build` — build de produção em `dist/`
- `npm run preview` — pré-visualiza o build
- `npm run lint` — checagem de tipos TypeScript
- `npm run clean` — remove `dist/` e `server.js`

## 3. Estrutura de Pastas e Arquivos

```
página-oficial-devolweb/
├── index.html
├── vite.config.ts
├── tsconfig.json
├── package.json
├── package-lock.json
├── bun.lock
├── .env.example
├── .gitignore
├── README.md
├── metadata.json
├── optimize-images.cjs
├── dist/                (build já gerado)
├── node_modules/
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── types.ts
    ├── vite-env.d.ts
    ├── components/
    │   ├── HeroSection.tsx
    │   ├── ProblemSearchSection.tsx
    │   ├── PerceptionSection.tsx
    │   ├── SolutionSection.tsx
    │   ├── ProjectsSection.tsx
    │   ├── DiagnosticWizard.tsx
    │   ├── HowItWorksSection.tsx
    │   ├── WhyDevolwebSection.tsx
    │   ├── FaqSection.tsx
    │   └── FinalCtaSection.tsx
    └── MeteorShowerCanvas.tsx
    ├── data/
    │   ├── faq.ts
    │   └── projects.ts
    └── assets/images/   (44 arquivos PNG/JPG/WEBP)
```

## 4. Seções da Página (ordem de renderização em App.tsx)

| Seção | ID | Conteúdo Principal |
|-------|----|-------------------|
| Hero | `#hero` | Título, subtítulo, CTA diagnóstico, imagem dashboard, meteoros |
| Problema/Pesquisa | `#problema-pesquisa` | 3 cards de problemas do cliente |
| Percepção | `#percepcao-valor` | Antes × Depois (genérico vs Devolweb) |
| Solução | `#o-que-resolvemos` | 4 pilares de entrega |
| Projetos | `#projetos` | Portfólio 18 casos + filtro + modal |
| Diagnóstico | `#diagnostico` | Wizard de 4 etapas |
| Como funciona | `#como-funciona` | Processo de 5 passos |
| Por que Devolweb | `#por-que-devolweb` | 3 pilares diferenciais |
| FAQ | `#faq` | 11 perguntas em acordeão |
| CTA Final | `#cta-final` | Chamada final + rodapé |

## 5. Portfólio de Projetos (18 itens — src/data/projects.ts)

1. Agência Marketiar — Landing Page — +200% orçamentos
2. Barbearia Corte Supremo — Presença Local — +85 agendamentos
3. AutoFusion — Site Institucional — -50% consultas básicas
4. Blog Papo Singular — Presença Local — +320% tráfego orgânico
5. Fragato Multimarcas — Loja Virtual — +150 contatos/mês
6. Hotel Serenità — Site Institucional — +40% reservas diretas
7. Imobiliária Digital — Site Institucional — +90 leads/mês
8. Loja Acellus — Loja Virtual — +180% vendas online
9. Loja Kactus — Loja Virtual — +210% tráfego mobile
10. Loja Tiklets Store — Loja Virtual — +95% engajamento
11. Pizzaria Delivery — Presença Local — +130 pedidos/semana
12. Protocolo do Desapego — Presença Local — +250 inscritos
13. Clínica Consulta de Exames — Site Institucional — +120 agendamentos/mês
14. Clínica de Estética — Landing Page — +95 pacientes/mês
15. Clínica Odontologia — Presença Local — +80 pacientes via web
16. Clínica Psicologia — Site Institucional — +60 pacientes em 3 meses
17. Dr. Fabiano Oncologista — Site Institucional — +45 consultas via site
18. Escritório de Advocacia — Landing Page — 12.5% conversão

## 6. FAQ (11 itens — src/data/faq.ts)

1. Quanto custa o projeto?
2. Quanto tempo leva?
3. Vocês fazem apenas o site?
4. Preciso ter identidade visual pronta?
5. Vocês fazem o site funcionar no celular?
6. Como funciona o pagamento?
7. Posso contratar apenas uma reformulação?
8. Vocês trabalham com empresas de qualquer segmento?
9. O que acontece depois que envio o formulário?
10. Posso atualizar o site depois?
11. Vocês dão suporte depois da entrega?

## 7. Como Executar Localmente

```bash
# Acesse a pasta do projeto
cd "C:\Users\martc\OneDrive\Área de Trabalho\página-oficial-devolweb"

# Instale dependências
npm install

# Rode em modo desenvolvimento (abre em http://localhost:3000)
npm run dev

# Para build de produção
npm run build

# Para pré-visualizar o build
npm run preview
```

Variáveis de ambiente (copie `.env.example` para `.env.local` e preencha):
- `GEMINI_API_KEY` — chave da API do Gemini
- `APP_URL` — URL da aplicação

## 8. Imagens (src/assets/images/)

44 arquivos entre PNG, JPG e WEBP, incluindo:
- Logo: `devolweb-removebg-preview.png`
- Hero: `hero-dashboard-floating.png/jpg`, `laptop_neon_hero_*.jpg`
- Capturas de tela dos 18 projetos do portfólio (WEBP otimizados + PNG originais)
- Imagens das clínicas e escritório de advocacia

## 9. Observações Técnicas

- O `DiagnosticWizard` gera uma mensagem formatada e abre o WhatsApp (`wa.me`) ao finalizar.
- O `MeteorShowerCanvas` desenha cometas caindo no canvas do Hero via requestAnimationFrame.
- O `ProjectsSection` usa um carrossel infinito (`animate-marquee`) duplicando a lista de projetos.
- Todas as imagens são importadas com caminhos relativos e tipadas via `vite-env.d.ts`.
- O build já existe na pasta `dist/`.