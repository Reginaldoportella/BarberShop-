# BarberFlow - Execution Flow

## Objetivo do fluxo

Este documento organiza a execucao do BarberFlow por fases, mantendo clara a
separacao entre interface visual, validacao de formulario, persistencia,
disponibilidade real e administracao.

## Especificacoes inspiradas no prestige-salon

O projeto `rr3s1/prestige-salon` sera usado apenas como inspiracao conceitual
para uma landing page moderna de salao/barbearia, com foco em servicos,
agendamento e depoimentos.

Importante:

- Nao copiar codigo diretamente.
- Nao copiar textos diretamente.
- Nao copiar identidade visual diretamente.
- Usar apenas como referencia de produto e experiencia.

Como aplicar a inspiracao:

- Observar a estrutura de experiencia: hero, servicos, equipe, galeria,
  depoimentos, contato e agendamento.
- Reinterpretar a direcao visual para o BarberFlow.
- Manter componentes, textos, dados e identidade proprios do projeto.
- Priorizar uma experiencia clara de conversao para agendamento.

## Fluxo por fases

## Status atual de execucao

- Fase 1 concluida: estrutura, landing page, rotas preparadas e dados mockados.
- Fase 2 em andamento: polimento visual, video/parallax, animacoes de entrada e microinteracoes.
- Prisma, banco de dados, API real e disponibilidade real continuam fora do escopo atual.

### Fase 1 - Estrutura e landing page

Executar:

1. Criar a estrutura inicial do projeto.
2. Criar componentes de layout e secoes.
3. Criar dados mockados.
4. Montar a landing page.
5. Criar as rotas `/agendamento` e `/admin`.
6. Preparar visualmente a rota de agendamento.

Mensagem oficial da rota de agendamento:

> "Fase 1: rota preparada com dados mockados. Banco, Prisma e regras de disponibilidade entram em fases futuras."

Limites obrigatorios da Fase 1:

- Nao configurar Prisma.
- Nao criar banco de dados.
- Nao criar migrations.
- Nao implementar API real.
- Nao implementar regras reais de disponibilidade.
- Nao persistir agendamentos.

Resultado esperado:

- Landing page funcional e responsiva.
- Rotas preparadas visualmente.
- Dados mockados suficientes para demonstrar a experiencia.

### Fase 2 - Melhorias visuais e animacoes

Executar:

1. Refinar layout, hierarquia e ritmo visual.
2. Adicionar animacoes leves.
3. Melhorar estados de hover/focus.
4. Revisar responsividade.
5. Otimizar imagens e video quando necessario.

Resultado esperado:

- Experiencia visual mais polida.
- Interacoes mais fluidas.
- Nenhuma dependencia de banco ou Prisma.

### Fase 3 - Formulario com React Hook Form e Zod

Executar:

1. Criar formulario de agendamento.
2. Adicionar React Hook Form.
3. Criar schema de validacao com Zod.
4. Exibir erros por campo.
5. Simular estado de sucesso sem persistencia real.

Resultado esperado:

- Formulario validado no front-end.
- Dados ainda nao persistidos em banco.

### Fase 4 - Banco de dados, Prisma e API real

Executar:

1. Definir modelos de dados.
2. Configurar Prisma.
3. Criar migrations.
4. Criar API real.
5. Persistir servicos, barbeiros e agendamentos.

Resultado esperado:

- Persistencia real.
- Primeira camada de API conectada ao banco.

### Fase 5 - Regras de disponibilidade

Executar:

1. Definir horarios de funcionamento.
2. Definir duracao dos servicos.
3. Definir disponibilidade por barbeiro.
4. Bloquear horarios indisponiveis.
5. Evitar conflito de agendamentos.

Resultado esperado:

- Agendamento respeitando disponibilidade real.

### Fase 6 - Painel administrativo

Executar:

1. Criar fluxo administrativo funcional.
2. Gerenciar servicos.
3. Gerenciar barbeiros.
4. Visualizar agendamentos.
5. Atualizar status de agendamentos.

Resultado esperado:

- Painel administrativo utilizavel.

### Fase 7 - Integracoes futuras

Executar conforme prioridade:

1. WhatsApp.
2. E-mail transacional.
3. Pagamentos.
4. Calendario externo.
5. Analytics.
6. CRM.

Resultado esperado:

- BarberFlow integrado a ferramentas externas relevantes.

## Regra de protecao da Fase 1

Durante a Fase 1, qualquer solicitacao para Prisma, banco de dados,
persistencia real ou regras reais de disponibilidade deve ser movida para fases
futuras, salvo se o escopo do projeto for explicitamente alterado.
