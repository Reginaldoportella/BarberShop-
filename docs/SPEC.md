# BarberFlow - SPEC

## Visão geral

BarberFlow é uma aplicação web para barbearias e salões com foco inicial em
landing page premium, apresentação de serviços, equipe, galeria, depoimentos e
entrada visual para agendamento.

## Escopo atual

- Next.js App Router.
- TypeScript.
- Tailwind CSS.
- Landing page responsiva.
- Rotas preparadas para `/agendamento` e `/admin`.
- Dados mockados em arquivos locais.
- Sem banco de dados nesta fase.
- Sem Prisma nesta fase.
- Sem regras reais de disponibilidade nesta fase.

## Especificações inspiradas no prestige-salon

O projeto `rr3s1/prestige-salon` será usado apenas como inspiração conceitual
para uma landing page moderna de salão/barbearia, com foco em serviços,
agendamento e depoimentos.

Regras de uso da referência:

- Não copiar código diretamente.
- Não copiar textos diretamente.
- Não copiar identidade visual diretamente.
- Usar apenas como referência de produto e experiência.
- Adaptar a experiência para a identidade própria do BarberFlow.

Direções de produto inspiradas pela referência:

- Primeira dobra forte, com impacto visual e chamada clara para agendamento.
- Apresentação objetiva dos serviços.
- Equipe/barbeiros em destaque para gerar confiança.
- Galeria ou imagens editoriais para comunicar qualidade.
- Depoimentos como prova social.
- CTA recorrente para agendamento.
- Experiência responsiva e mobile-first.

## Fases do projeto

## Status atual

- Fase 1: concluída na estrutura inicial, landing page, rotas e dados mockados.
- Fase 2: em andamento com refinamento visual, vídeo/parallax, animações leves e microinterações.
- Fases 3 a 7: pendentes, respeitando a ordem definida abaixo.

### Fase 1

Landing page, rotas preparadas e dados mockados.

A rota de agendamento deve estar preparada visualmente, mas sem banco.

Mensagem oficial:

> "Fase 1: rota preparada com dados mockados. Banco, Prisma e regras de disponibilidade entram em fases futuras."

Inclui:

- Estrutura inicial do projeto.
- Componentes de layout e seções da landing page.
- Dados mockados para serviços, barbeiros e depoimentos.
- Rotas `/agendamento` e `/admin` com estrutura visual inicial.

Não inclui:

- Banco de dados.
- Prisma.
- API real.
- Autenticação.
- Regras reais de disponibilidade.
- Persistencia de agendamentos.

### Fase 2

Melhorias visuais e animações.

Inclui:

- Refinamento visual da landing page.
- Microinterações.
- Animações leves.
- Melhorias de responsividade.
- Otimização de imagens e mídias.

### Fase 3

Formulário com React Hook Form e Zod.

Inclui:

- Formulário de agendamento no front-end.
- Validação com Zod.
- Gerenciamento de formulário com React Hook Form.
- Estados de erro, sucesso e carregamento simulados.

### Fase 4

Banco de dados, Prisma e API real.

Inclui:

- Configuração do Prisma.
- Modelagem inicial do banco.
- API real para serviços, barbeiros e agendamentos.
- Persistência de dados.

### Fase 5

Regras de disponibilidade.

Inclui:

- Horários de atendimento.
- Bloqueios de agenda.
- Duração por serviço.
- Disponibilidade por barbeiro.
- Prevenção de conflito de horários.

### Fase 6

Painel administrativo.

Inclui:

- Área administrativa funcional.
- Gestão de serviços.
- Gestão de barbeiros.
- Visualização e gerenciamento de agendamentos.

### Fase 7

Integrações futuras.

Possibilidades:

- WhatsApp.
- E-mail transacional.
- Pagamentos.
- Calendário externo.
- Analytics.
- CRM.
