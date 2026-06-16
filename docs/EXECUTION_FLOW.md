# BarberFlow - Execution Flow

## Objetivo do fluxo

Este documento organiza a execução do BarberFlow por fases, mantendo clara a
separação entre interface visual, validação de formulário, persistência,
disponibilidade real e administração.

## Especificações inspiradas no prestige-salon

O projeto `rr3s1/prestige-salon` será usado apenas como inspiração conceitual
para uma landing page moderna de salão/barbearia, com foco em serviços,
agendamento e depoimentos.

Importante:

- Não copiar código diretamente.
- Não copiar textos diretamente.
- Não copiar identidade visual diretamente.
- Usar apenas como referência de produto e experiência.

Como aplicar a inspiração:

- Observar a estrutura de experiência: hero, serviços, equipe, galeria,
  depoimentos, contato e agendamento.
- Reinterpretar a direção visual para o BarberFlow.
- Manter componentes, textos, dados e identidade próprios do projeto.
- Priorizar uma experiência clara de conversão para agendamento.

## Fluxo por fases

## Status atual de execução

- Fase 1 concluída: estrutura, landing page, rotas preparadas e dados mockados.
- Fase 2 em andamento: polimento visual, vídeo/parallax, animações de entrada e microinterações.
- Prisma, banco de dados, API real e disponibilidade real continuam fora do escopo atual.

### Fase 1 - Estrutura e landing page

Executar:

1. Criar a estrutura inicial do projeto.
2. Criar componentes de layout e seções.
3. Criar dados mockados.
4. Montar a landing page.
5. Criar as rotas `/agendamento` e `/admin`.
6. Preparar visualmente a rota de agendamento.

Mensagem oficial da rota de agendamento:

> "Fase 1: rota preparada com dados mockados. Banco, Prisma e regras de disponibilidade entram em fases futuras."

Limites obrigatórios da Fase 1:

- Não configurar Prisma.
- Não criar banco de dados.
- Não criar migrations.
- Não implementar API real.
- Não implementar regras reais de disponibilidade.
- Não persistir agendamentos.

Resultado esperado:

- Landing page funcional e responsiva.
- Rotas preparadas visualmente.
- Dados mockados suficientes para demonstrar a experiência.

### Fase 2 - Melhorias visuais e animações

Executar:

1. Refinar layout, hierarquia e ritmo visual.
2. Adicionar animações leves.
3. Melhorar estados de hover/focus.
4. Revisar responsividade.
5. Otimizar imagens e vídeo quando necessário.

Resultado esperado:

- Experiência visual mais polida.
- Interações mais fluidas.
- Nenhuma dependência de banco ou Prisma.

### Fase 3 - Formulário com React Hook Form e Zod

Executar:

1. Criar formulário de agendamento.
2. Adicionar React Hook Form.
3. Criar schema de validação com Zod.
4. Exibir erros por campo.
5. Simular estado de sucesso sem persistencia real.

Resultado esperado:

- Formulário validado no front-end.
- Dados ainda não persistidos em banco.

### Fase 4 - Banco de dados, Prisma e API real

Executar:

1. Definir modelos de dados.
2. Configurar Prisma.
3. Criar migrations.
4. Criar API real.
5. Persistir serviços, barbeiros e agendamentos.

Resultado esperado:

- Persistência real.
- Primeira camada de API conectada ao banco.

### Fase 5 - Regras de disponibilidade

Executar:

1. Definir horários de funcionamento.
2. Definir duração dos serviços.
3. Definir disponibilidade por barbeiro.
4. Bloquear horários indisponíveis.
5. Evitar conflito de agendamentos.

Resultado esperado:

- Agendamento respeitando disponibilidade real.

### Fase 6 - Painel administrativo

Executar:

1. Criar fluxo administrativo funcional.
2. Gerenciar serviços.
3. Gerenciar barbeiros.
4. Visualizar agendamentos.
5. Atualizar status de agendamentos.

Resultado esperado:

- Painel administrativo utilizável.

### Fase 7 - Integrações futuras

Executar conforme prioridade:

1. WhatsApp.
2. E-mail transacional.
3. Pagamentos.
4. Calendário externo.
5. Analytics.
6. CRM.

Resultado esperado:

- BarberFlow integrado a ferramentas externas relevantes.

## Regra de proteção da Fase 1

Durante a Fase 1, qualquer solicitação para Prisma, banco de dados,
persistência real ou regras reais de disponibilidade deve ser movida para fases
futuras, salvo se o escopo do projeto for explicitamente alterado.
