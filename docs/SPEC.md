# BarberFlow - SPEC

## Visao geral

BarberFlow e uma aplicacao web para barbearias e saloes com foco inicial em
landing page premium, apresentacao de servicos, equipe, galeria, depoimentos e
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

## Especificacoes inspiradas no prestige-salon

O projeto `rr3s1/prestige-salon` sera usado apenas como inspiracao conceitual
para uma landing page moderna de salao/barbearia, com foco em servicos,
agendamento e depoimentos.

Regras de uso da referencia:

- Nao copiar codigo diretamente.
- Nao copiar textos diretamente.
- Nao copiar identidade visual diretamente.
- Usar apenas como referencia de produto e experiencia.
- Adaptar a experiencia para a identidade propria do BarberFlow.

Direcoes de produto inspiradas pela referencia:

- Primeira dobra forte, com impacto visual e chamada clara para agendamento.
- Apresentacao objetiva dos servicos.
- Equipe/barbeiros em destaque para gerar confianca.
- Galeria ou imagens editoriais para comunicar qualidade.
- Depoimentos como prova social.
- CTA recorrente para agendamento.
- Experiencia responsiva e mobile-first.

## Fases do projeto

## Status atual

- Fase 1: concluida na estrutura inicial, landing page, rotas e dados mockados.
- Fase 2: em andamento com refinamento visual, video/parallax, animacoes leves e microinteracoes.
- Fases 3 a 7: pendentes, respeitando a ordem definida abaixo.

### Fase 1

Landing page, rotas preparadas e dados mockados.

A rota de agendamento deve estar preparada visualmente, mas sem banco.

Mensagem oficial:

> "Fase 1: rota preparada com dados mockados. Banco, Prisma e regras de disponibilidade entram em fases futuras."

Inclui:

- Estrutura inicial do projeto.
- Componentes de layout e secoes da landing page.
- Dados mockados para servicos, barbeiros e depoimentos.
- Rotas `/agendamento` e `/admin` com estrutura visual inicial.

Nao inclui:

- Banco de dados.
- Prisma.
- API real.
- Autenticacao.
- Regras reais de disponibilidade.
- Persistencia de agendamentos.

### Fase 2

Melhorias visuais e animacoes.

Inclui:

- Refinamento visual da landing page.
- Microinteracoes.
- Animacoes leves.
- Melhorias de responsividade.
- Otimizacao de imagens e midias.

### Fase 3

Formulario com React Hook Form e Zod.

Inclui:

- Formulario de agendamento no front-end.
- Validacao com Zod.
- Gerenciamento de formulario com React Hook Form.
- Estados de erro, sucesso e carregamento simulados.

### Fase 4

Banco de dados, Prisma e API real.

Inclui:

- Configuracao do Prisma.
- Modelagem inicial do banco.
- API real para servicos, barbeiros e agendamentos.
- Persistencia de dados.

### Fase 5

Regras de disponibilidade.

Inclui:

- Horarios de atendimento.
- Bloqueios de agenda.
- Duracao por servico.
- Disponibilidade por barbeiro.
- Prevencao de conflito de horarios.

### Fase 6

Painel administrativo.

Inclui:

- Area administrativa funcional.
- Gestao de servicos.
- Gestao de barbeiros.
- Visualizacao e gerenciamento de agendamentos.

### Fase 7

Integracoes futuras.

Possibilidades:

- WhatsApp.
- E-mail transacional.
- Pagamentos.
- Calendario externo.
- Analytics.
- CRM.
