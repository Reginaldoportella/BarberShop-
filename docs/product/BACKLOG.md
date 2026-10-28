# Backlog priorizado — BarberFlow IA

**Versão:** 0.1 • **Data:** 2026-10-28 • **Estado de todos os itens:** TODO (nenhuma implementação atribuída a este backlog).  
**Estimativas:** pontos relativos iniciais, sujeitas a refinamento; não são promessas de prazo.

## Prioridade e dependências

P0 = operação real e segura; P1 = diferencial IA/reativação; P2 = WhatsApp e recuperação de cancelamentos; P3 = escala comercial SaaS.  
Não iniciar automação de marketing antes de cadastro, consentimento, rastreio e mecanismo de opt-out.

| ID | Entrega / história | P | Pontos | Dependências | Aceite curto |
|---|---|---|---:|---|---|
| BF-001 | Setup PostgreSQL + Prisma + migrations | P0 | 5 | — | Banco sobe com migrations reproduzíveis |
| BF-002 | Modelar tenants, usuários, barbeiros, serviços, clientes e reservas | P0 | 5 | 001 | IDs estáveis, tenantId e timezone |
| BF-003 | Cadastro/seed e CRUD interno de catálogo | P0 | 3 | 002 | UI mostra dados do banco |
| BF-004 | Jornadas, pausas, bloqueios e algoritmo de disponibilidade | P0 | 8 | 002 | Slots respeitam duração e folgas |
| BF-005 | API criar reserva com transação, exclusão de conflito e idempotência | P0 | 8 | 004 | Concorrência: 1 sucesso, 1 conflito |
| BF-006 | Integrar BookingForm à API e tratar 409/erro | P0 | 5 | 005 | Sucesso apenas com ID persistido |
| BF-007 | Autenticação e RBAC para /admin | P0 | 5 | 002 | Usuário não autorizado bloqueado |
| BF-008 | Painel real de agenda e mudança de status | P0 | 5 | 005,007 | Gestor controla reservas |
| BF-009 | Testes integração, E2E, concorrência + CI | P0 | 8 | 005,008 | Pipeline verde; regra anti-overlap testada |
| BF-010 | Logs, backup, rate limits e revisão LGPD do piloto | P0 | 5 | 002,005 | Runbook e política básica documentados |
| BF-011 | Orquestrador de IA e tool calling restrito | P1 | 8 | 005 | Modelo só executa tools autorizadas |
| BF-012 | Chat web com agendamento via confirmação explícita | P1 | 5 | 011 | Cliente reserva sem horários inventados |
| BF-013 | Consentimento para campanhas, revogação e preferências | P1 | 5 | 002,008 | Opt-in e opt-out auditáveis |
| BF-014 | Elegibilidade de cliente inativo e limites de frequência | P1 | 5 | 013 | Sem futuro agendamento/opt-out não entra |
| BF-015 | n8n workflow de reativação, dedupe e webhooks de status | P1 | 8 | 014 | Retry seguro e status rastreável |
| BF-016 | Dashboard de IA/campanhas e valor potencial | P1 | 5 | 012,015 | Métricas distinguem reservas de faturamento |
| BF-017 | Integração oficial WhatsApp inbound + templates outbound | P2 | 8 | 011,013,015 | Webhook verificado, envio permitido |
| BF-018 | Lista de espera para cancelamento e oferta com expiração | P2 | 8 | 005,017 | Oferta nunca cria reserva duplicada |
| BF-019 | Onboarding de nova barbearia e isolamento teste entre tenants | P3 | 8 | 007,009 | Dados isolados ponta a ponta |
| BF-020 | Planos SaaS, quotas, cobrança e suporte | P3 | 8 | 019 | Estados de assinatura governam recursos |

## Sequência de execução sugerida

**Marco 1 — Agenda real:** BF-001 a BF-010. Essa é a condição para demonstrar produto real, ainda sem IA.  
**Marco 2 — Conversar e recuperar clientes:** BF-011 a BF-016. A escolha do canal outbound deve estar conforme consentimento/provedor; se WhatsApp for o canal piloto, antecipar dependência BF-017 antes de BF-015.  
**Marco 3 — Canal WhatsApp e cancelamentos:** BF-017 a BF-018.  
**Marco 4 — SaaS multiempresa:** BF-019 e BF-020.

## Primeira entrega de engenharia

**BF-001 + BF-002 (fundação).** Abrir PR com schema Prisma, migration inicial e instruções de desenvolvimento. Critérios: `docker compose up -d` ou Postgres gerenciado configurado, `prisma migrate dev` reproduzível, schema de entidades essenciais, seed de dados não sensíveis e nenhum segredo versionado.

## Definition of Done

Uma história está concluída somente se: código em branch revisável, testes relevantes automatizados, validações/erros explícitos, observabilidade mínima, documentação atualizada, nenhuma credencial versionada e critério de aceite demonstrável. Marcações neste documento só devem mudar para DONE após evidência no repositório.

## Riscos de implementação

- **Maior risco:** sobreposição de reservas e invasão entre tenants. Tratar no banco e nos testes.
- **Custo:** IA, mensagens, n8n e hospedagem exigem medição antes de definir preço SaaS.
- **Compliance:** campanha nunca envia sem base legal e preferências válidas; template WhatsApp deve estar aprovado quando exigido.
- **Produto:** testar operação na barbearia piloto antes de automatizar campanhas em escala.
