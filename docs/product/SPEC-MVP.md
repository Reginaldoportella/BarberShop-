# SPEC técnica — MVP BarberFlow IA

**Status:** proposta de contrato, não implementado • **Versão:** 0.1 • **Data:** 2026-10-28  
**Referências:** [PRD](./PRD.md), [Arquitetura](./ARCHITECTURE.md).

## 1. Regras de domínio

**Catálogo:** cada serviço tem ID imutável, nome, duração inteira em minutos e preço em centavos. Cada barbeiro pertence a um único tenant (no MVP). Todos os horários calculados usam jornada, folga, bloqueios, duração e reservas confirmadas.

**Reserva:** status iniciais `CONFIRMED`, `CANCELLED`, `COMPLETED`, `NO_SHOW`. Criar somente `CONFIRMED` após validação no servidor e persistência atômica. A versão inicial não usa estados de hold; se forem acrescentados, atualizar regra de exclusão e expiração. Não confirmar vagas antigas exibidas pela IA.

**Reagendar:** operar como transição transacional e verificar novo intervalo antes de liberar o antigo; nunca gerar duas reservas por erro de rede. Cancelamento por cliente exige link assinado de uso único/expiração ou verificação adequada, conforme canal.

**Retenção:** `eligible = marketingOptIn && !optOut && daysSinceLastVisit >= configuredDays && noFutureAppointment && !recentCampaign`. Janela, frequência, finalidade e limites definidos pelo gestor. Não presumir opt-in a partir de simples agendamento. Toda mensagem e resposta relevante tem correlação e logs mínimos.

## 2. APIs propostas (exemplos; exigir contrato OpenAPI na implementação)

| Método | Endpoint | Autorização | Resultado |
|---|---|---|---|
| GET | `/api/v1/services` | Público, catálogo restrito à barbearia | Serviços ativos |
| GET | `/api/v1/barbers` | Público | Profissionais ativos |
| GET | `/api/v1/availability?serviceId=...&barberId=...&date=YYYY-MM-DD` | Público, rate limit | Lista de slots |
| POST | `/api/v1/appointments` | Público validado + antifraude | 201 confirmado / 409 conflito |
| GET | `/api/v1/admin/appointments?date=...` | STAFF/OWNER | Agenda filtrada por tenant |
| PATCH | `/api/v1/admin/appointments/:id` | STAFF/OWNER | Cancelar/concluir/no-show |
| POST | `/api/v1/chat/messages` | Público, rate limit | Mensagem e ações permitidas |
| POST | `/api/v1/internal/campaigns/reactivation/run` | Token de serviço específico | Lote elegível/deduplicado |
| POST | `/api/v1/webhooks/whatsapp` | Assinatura validada, fase 2 | Recebimentos/status |

No piloto com uma barbearia, o `tenantId` é resolvido no servidor por configuração/host confiável. Na evolução SaaS, usar tenant por subdomínio ou rota validada e checar membership em toda consulta.

### POST /api/v1/appointments

Requisição:

```http
POST /api/v1/appointments
Content-Type: application/json
Idempotency-Key: 55d4bfe1-... (UUID completo em implementação)
```

```json
{
  "customer": { "name": "João", "phone": "+5541999999999" },
  "serviceId": "uuid-servico",
  "barberId": "uuid-barbeiro",
  "startsAt": "2026-11-03T17:00:00Z",
  "source": "WEB"
}
```

Resposta de sucesso:

```json
{
  "id": "uuid-reserva",
  "status": "CONFIRMED",
  "startsAt": "2026-11-03T17:00:00Z",
  "endsAt": "2026-11-03T17:45:00Z"
}
```

Conflito: `409 {"code":"SLOT_UNAVAILABLE"}`. Erros: `400 INVALID_INPUT`, `401/403` nas rotas privadas, `404` para recursos inacessíveis, `429 RATE_LIMITED`, `500 INTERNAL_ERROR`. Não incluir informações de outros clientes.

### GET /api/v1/availability

Recebe `serviceId`, `barberId` opcional, `date` da barbearia. Retorna `[{barberId,startsAt,endsAt}]` com instantes ISO UTC. Não garante posse do horário: POST precisa revalidar. Para `barberId` opcional, agrupar slots por profissional.

### POST /api/v1/chat/messages

- Recebe `conversationId?`, `message` e dados mínimos de sessão.
- Retorna `assistantMessage`, `conversationId` e estado estruturado (`needsConfirmation`, `proposedAppointment` etc.).
- Tools no servidor: `listServices`, `getAvailability`, `createAppointment` após confirmação, `cancelAppointment` após autenticação adequada.
- Instruções do cliente não podem desativar validações, consultar SQL diretamente ou acessar outro tenant.
- Quando ferramenta falha, resposta informa indisponibilidade sem fabricar horário ou ID.

## 3. Agendador de reativação

- Cron n8n diário; API retorna candidatos elegíveis com paginação e controle de lease/deduplicação.
- Antes do envio, revalidar consentimento, opt-out, agendamentos futuros e limite por cliente.
- Mensagens outbound são enviadas **somente via canal configurado, autorizado e em conformidade com o provedor**. Para WhatsApp iniciar conversa, observar templates aprovados e políticas atuais da Meta.
- Persistir `campaignId`, `messageId` do provedor, entrega/falha e atribuição opcional a reserva.
- Não atribuir receita realizada sem informação de serviço concluído e pagamento.

## 4. Aceites de QA obrigatórios

1. Duas chamadas simultâneas para mesmo profissional e intervalo: **uma confirmação, uma resposta de conflito**.
2. Serviços de 35 e 75 minutos não se sobrepõem à próxima reserva; respeitam bloqueios e jornada.
3. Formulário e IA usam a **mesma** API/regra de disponibilidade; falha do provedor IA não impede agendamento pelo formulário.
4. GET de disponibilidade não expõe nomes/telefones.
5. `/admin` redireciona não autenticado; papel STAFF só possui permissões definidas.
6. Reservas canceladas não bloqueiam agenda; eventos de mudança ficam auditáveis.
7. Mesmo `Idempotency-Key` + mesmo payload retorna mesma operação; payload diferente com mesma chave gera conflito explícito.
8. Sem opt-in, opt-out recebido ou reserva futura: campanha não envia mensagem.
9. Falhas/retries de webhook e n8n não enviam mensagens duplicadas.
10. Conversa com prompt adversarial não executa ações fora das tools.
11. Dados armazenados em UTC e exibidos na timezone configurada; horários passados são recusados.
12. Páginas legadas de planos não devem afirmar cobrança ou créditos reais.

## 5. Critérios mínimos para liberar piloto

Lint, build, testes unitários/integrados/concorrrência/E2E passando no CI; migrações versionadas e backup testado; configuração de segredos; proteção de dados e logs; termos e política de privacidade; revisão manual do fluxo com barbearia piloto.

**Nota:** os endpoints, exemplos e requisitos acima são **propostas** para implementação futura; não foram encontrados na árvore atual.

## 6. Extensão opcional — ofertas aprovadas para reconquista

Sem modificar a regra de agenda, adicionar entidades `Offer`, `Campaign`, `Coupon` e `CouponRedemption` após consolidar o MVP. A API deve validar de maneira atômica: campanha ativa, tenant, elegibilidade do destinatário, estoque quando houver produtos, preço mínimo, margem configurada, limite por cliente, validade, não acumulação e idempotência. A IA recebe apenas ofertas autorizadas e responde com IDs; preço final e autorização são exclusivos do backend. Não contar cupom emitido como compra realizada.

Contratos e fluxos detalhados: [RECONQUISTA-OFERTAS.md](./RECONQUISTA-OFERTAS.md).
