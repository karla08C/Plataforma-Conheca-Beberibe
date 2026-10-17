# Conheca Beberibe

Plataforma digital responsiva desenvolvida para valorizar o turismo, a preservacao ambiental e os negocios locais do municipio de Beberibe, no litoral leste do Ceara.

O projeto disponibiliza informacoes em tempo real sobre condicoes climaticas e tabua de mares, alem de oferecer um guia interativo com atrativos naturais, sugestoes de roteiros e contato direto com empreendedores da regiao.

Deploy em producao: [conheca-beberibe.vercel.app](https://conheca-beberibe.vercel.app)

---

## Funcionalidades Principais

### Clima e Horario em Tempo Real
- Consulta em tempo real das condicoes meteorologicas de Beberibe (temperatura, umidade, velocidade do vento e indice de radiacao UV) via Open-Meteo.
- Relogio sincronizado no fuso horario oficial local (America/Fortaleza, UTC-3).

### Tabua de Mares Dinamica
- Calculo astronomico automatizado do ciclo semidiurno de mares para a costa de Beberibe.
- Indicacao dos horarios previstos para mare baixa e mare alta.
- Calculo da janela ideal de visitacao segura para caminhadas no Labirinto das Falesias de Morro Branco e nas grutas da Praia das Fontes.

### Catalogo Comercial e Servicos Locais
- Diretorio categorizado de barracas de praia, pousadas, associacoes de rendeiras e bugueiros credenciados.
- Filtros por categoria comercial e distritos (Morro Branco, Praia das Fontes, Uruau, Sucatinga, Parajuru, Serra do Felix e Centro).
- Integracao direta de atendimento via WhatsApp oficial de cada prestador de servicos, sem intermediarios.

### Roteiros Sugeridos
- Itinerarios otimizados para 1, 2 ou 3 dias de viagem, considerando horarios de mare baixa, pontos panoramicos e paradas gastronomicas.

### Cadastro Comunitario de Empreendedores
- Modal interativo para que moradores e prestadores locais cadastrem seus estabelecimentos ou servicos no catalogo sem custo.

### Conscientizacao e Preservacao Ambiental
- Secao dedicada orientando sobre a preservacao permanente do Monumento Natural das Falesias de Beberibe, proibicao de degradacao das paredes de areia e descarte consciente de residuos.

---

## Tecnologias Utilizadas

- Framework: Next.js (App Router, Turbopack)
- Linguagem: TypeScript
- Biblioteca de Interface: React
- Estilizacao: Tailwind CSS
- Icones: Inline SVG responsivo com estilizacao unificada
- Dados Meteorologicos: Open-Meteo API (endpoint publico, sem necessidade de armazenamento de tokens ou segredos de terceiros)
- Plataforma de Hospedagem: Vercel

---

## Seguranca e Politica de Credenciais

- Nao ha chaves de API privadas, credenciais ou segredos embutidos no codigo-fonte ou commitados no repositorio.
- Todas as fontes de dados externas utilizadas sao publicas e nao exigem autenticacao proprietaria.
- O arquivo `.gitignore` esta configurado para bloquear qualquer arquivo `.env`, credenciais do sistema ou pastas de autenticacao local (`.vercel`, `node_modules`).

---

## Como Executar o Projeto Localmente

### Pre-requisitos
- Node.js (versao 18.18 ou superior)
- npm, yarn ou pnpm

### Passo a Passo

1. Clone o repositorio:
```bash
git clone https://github.com/karla08C/Conhe-a-Beberibe.git
```

2. Acesse a pasta do projeto:
```bash
cd Conhe-a-Beberibe
```

3. Instale as dependencias:
```bash
npm install
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

5. Abra o navegador no endereco:
```text
http://localhost:3000
```

---

## Scripts Disponiveis

- `npm run dev`: Inicia o servidor local de desenvolvimento com Turbopack.
- `npm run build`: Valida tipagem TypeScript e gera o pacote estatico otimizado de producao.
- `npm run start`: Executa o servidor de producao localmente apos o build.
- `npm run lint`: Executa a verificacao de boas praticas com ESLint.

---

## Estrutura do Codigo

```text
conheca-beberibe/
├── public/                  # Arquivos estaticos
├── src/
│   ├── app/
│   │   ├── globals.css      # Variaveis de tema e estilos globais
│   │   ├── layout.tsx       # Estrutura base HTML e fontes
│   │   └── page.tsx         # Pagina principal e orquestracao de abas
│   ├── components/
│   │   ├── AgendaView.tsx          # Aba de agenda cultural e tabua de mares
│   │   ├── AttractionModal.tsx     # Modal com detalhes dos pontos turisticos
│   │   ├── BottomNav.tsx           # Barra de navegacao mobile
│   │   ├── CadastrarModal.tsx      # Modal de cadastro de novos comercios
│   │   ├── ComerciosView.tsx       # Catalogo expandido de estabelecimentos
│   │   ├── CommerceCard.tsx        # Cartao de apresentacao comercial
│   │   ├── EcoBanner.tsx           # Painel de preservacao ambiental
│   │   ├── Header.tsx              # Cabecalho responsivo com status em tempo real
│   │   ├── HighlightsCarousel.tsx  # Destaques dos atrativos naturais
│   │   ├── Icon.tsx                # Renderizador de icones SVG inline
│   │   ├── ItineraryBanner.tsx     # Bloco de atalho para roteiros
│   │   ├── NotificationsModal.tsx  # Alertas de clima e janelas de mare
│   │   ├── RoteirosView.tsx        # Detalhamento de planos de 1 a 3 dias
│   │   ├── SearchAndFilters.tsx    # Campo de busca e seletores de categoria/distrito
│   │   └── TideWidget.tsx          # Card superior com clima e mare ao vivo
│   ├── data/
│   │   └── beberibeData.ts         # Base de dados locais, atrativos e distritos
│   ├── hooks/
│   │   └── useRealtime.ts          # Hook para atualizacao periodica de clima e horario
│   └── lib/
│       └── realtime.ts             # Algoritmo de mares e integracao com Open-Meteo
├── vercel.json              # Configuracoes de deploy na Vercel
├── tsconfig.json            # Configuracao do TypeScript
└── package.json             # Dependencias e scripts do projeto
```

---

## Licenca

Projeto desenvolvido para fins educacionais, turisticos e de promocao comunitaria do municipio de Beberibe - CE.
