DEPLOY NA VERCEL — DEVOLWEB
===========================

CONFIGURAÇÃO (já pronta no projeto)
  Framework:        Vite
  Build Command:    npm run build
  Output Directory: dist
  Variáveis de ambiente: nenhuma obrigatória
  Node:             18+ (Vercel usa Node 22 por padrão)

O arquivo vercel.json já define build, pasta de saída e cache dos assets.

OPÇÃO 1 — PELO GITHUB (recomendado)
  1. Envie o projeto para um repositório no GitHub (a pasta dist/ e
     node_modules/ não precisam ser enviadas; o .gitignore já as ignora).
  2. Em vercel.com, clique em "Add New Project" e importe o repositório.
  3. A Vercel detecta o Vite automaticamente. Confirme:
       Build Command: npm run build
       Output Directory: dist
  4. Clique em Deploy.

OPÇÃO 2 — PELO TERMINAL (Vercel CLI)
  Na pasta do projeto, execute:
       npx vercel
  Na primeira vez, faça login e aceite as configurações detectadas.
  Para publicar em produção:
       npx vercel --prod

OPÇÃO 3 — PACOTE ESTÁTICO
  O arquivo deploy-devolweb.zip contém o conteúdo pronto de dist/.
  Serve para qualquer hospedagem estática (Netlify Drop, cPanel, etc.).
  Basta enviar/extrair o conteúdo na raiz pública do site.

TESTE LOCAL ANTES DE PUBLICAR
       npm run build
       npm run preview
  Depois abra o endereço mostrado no terminal (normalmente
  http://localhost:4173).

VERSÕES PARA VISUALIZAR SEM SERVIDOR
  Devolweb.html            -> arquivo único, abre com duplo clique
  site-estatico/index.html -> versão em pasta (HTML, CSS, JS separados)
  NÃO abra o index.html da raiz: ele é a entrada do Vite e fica em branco
  fora do servidor de desenvolvimento.

PENDÊNCIA ANTES DE DIVULGAR O SITE
  O botão de WhatsApp do diagnóstico abre "https://wa.me/?text=..."
  sem número de destino. Para os contatos chegarem em um número da
  Devolweb, informe o número no formato 55DDDNÚMERO em:
  src/components/DiagnosticWizard.tsx (linha do href do botão).
