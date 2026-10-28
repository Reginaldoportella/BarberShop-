# PRD — BarberFlow IA

**Estado:** proposta para alinhamento • **Versão:** 0.1 • **Data:** 2026-10-28

## 1. Problema e oportunidade

Barbearias pequenas recebem agendamentos por mensagens, lidam com confirmações manuais, cancelamentos e clientes que deixam de retornar. Um chatbot genérico apenas transfere conversa; o diferencial desejado é **conversar, agendar corretamente e incentivar o retorno de clientes com consentimento e transparência**.

### Proposta de valor

> BarberFlow IA: agenda confiável e assistente que atende, organiza reservas e ajuda a recuperar clientes — com resultados mensuráveis para o proprietário.

## 2. Públicos

- **Cliente:** descobre serviços, consulta disponibilidade e marca/cancela com simplicidade.
- **Proprietário ou gestor:** configura horários e equipe, vê agenda e avalia retorno das campanhas.
- **Atendente/barbeiro:** enxerga compromissos, bloqueia folgas e atualiza o status de atendimento.
- **Operador da plataforma (futuro):** mantém múltiplas barbearias e assinatura SaaS.

## 3. Jornada principal

1. Cliente informa serviço, preferência de barbeiro e data pelo site ou, futuramente, WhatsApp.
2. Serviço de disponibilidade calcula slots reais a partir de duração, jornada, bloqueios e reservas.
3. Cliente seleciona um slot; backend revalida e grava atomicamente.
4. Sistema retorna número/ID e status da reserva; falha com conflito se outra pessoa ganhou o slot.
5. Proprietário acompanha a agenda no painel.
6. Quando elegível e com consentimento para marketing registrado, cliente inativo recebe convite proporcional por canal permitido.
7. Agendamento decorrente do convite é associado à campanha para métricas; valor agendado não equivale a receita recebida.

## 4. MVP para piloto (P0 + P1)

**P0 — Agenda real comercializável**
- CRUD administrativo de serviços, profissionais, jornada e bloqueios.
- Disponibilidade real e confirmação persistida sem sobreposição.
- Cancelamento/reagendamento com verificação de identidade e regras da barbearia.
- Login e autorização para proprietário/atendente.
- Site atual adaptado para consumir a API real.

**P1 — Diferencial com IA e retenção**
- Chat no site com linguagem natural para consultar preços, serviços e vagas.
- IA pode chamar ferramentas de leitura e solicitar criação de reserva **somente após confirmação explícita do cliente**.
- Automação de reativação por inatividade via n8n, com consentimento, limites de frequência e opção de parar.
- Painel com reservas assistidas, clientes reativados, valor de serviços agendados por campanhas e falhas.

**Fase seguinte (P2)**
- Canal oficial do WhatsApp (entrada e saída), templates aprovados conforme políticas vigentes.
- Lista de espera e oferta de vagas liberadas após cancelamentos.
- Ajuste de mensagens mediante feedback de clientes e barbearias.

**Fora do MVP**
- ERP/estoque, folha/financeiro completo, marketplace, pagamento automático e assinaturas de serviços para consumidores.
- SaaS com cobrança automática e múltiplos tenants em operação; **modelos preparam isolamento desde o começo**, mas só uma barbearia será atendida no piloto.
- Voz/áudio como requisito obrigatório; possível evolução quando a integração estiver segura.

## 5. Requisitos não funcionais

- Nunca exibir horário como confirmado antes da transação persistida.
- Zero reservas sobrepostas para o mesmo profissional (invariante garantida pelo banco).
- Dados de outras barbearias jamais acessíveis por um tenant.
- Segredos de IA, mensageria e banco apenas no servidor.
- Logs de auditoria sem vazar mensagens integrais/PII; política de retenção documentada.
- Resiliência: quando IA ou n8n cair, agenda manual/site permanece utilizável.
- LGPD: finalidade, base legal apropriada, transparência, minimização, exercício de direitos; consentimento separado para publicidade/reativação quando aplicável.

## 6. Métricas de sucesso — hipóteses para piloto

| Métrica | Definição | Meta inicial a validar |
|---|---|---|
| Conflito confirmado | Reservas confirmadas sobrepostas | 0 |
| Conclusão de reserva | Reservas concluídas / início de solicitações válidas | Medir linha de base |
| Tempo economizado | Tempo de atendimento manual estimado antes/depois | Validar com proprietário |
| Reativação | Clientes com novo agendamento após convite / clientes contatados | Medir, sem prometer causalidade |
| Ocupação | Minutos reservados / minutos disponíveis | Acompanhar tendência |
| Valor potencial gerado | Soma dos preços de serviços agendados atribuídos | Exibir como **potencial**, não receita realizada |
| Consentimento e opt-out | Taxa de exclusão e reclamações | Monitorar e respeitar |

## 7. Riscos e hipóteses

- Clientes podem preferir humano ao chatbot; oferecer transbordo e formulário tradicional.
- Mensagens de reativação sem controle podem ser percebidas como spam; limites e opt-out são obrigatórios.
- Custos variáveis de tokens e mensagens podem inviabilizar plano barato; medir custo por reserva/conversa.
- IA pode interpretar datas ou intenções erroneamente; sempre confirmar dados estruturados antes de gravar.
- WhatsApp requer integração oficial e conformidade com regras por categoria/janela; revisar políticas e valores antes de lançar.
- Testar demanda e preço em entrevistas antes de construir cobrança SaaS.

## 8. Critérios de aceite do produto

O MVP estará pronto para um piloto quando um cliente conseguir reservar um slot verdadeiro, o painel mostrar essa reserva, duas requisições simultâneas não puderem ocupar o mesmo barbeiro/horário, o assistente só confirmar após resposta da API e a reativação respeitar consentimento/opt-out com rastreabilidade.

## 9. Questões ainda abertas (não bloqueiam a documentação)

Nome comercial final, regras de cancelamento/no-show, período de inatividade (ex.: 30 dias como configuração), provedor de IA, provedor oficial WhatsApp, hosting, suporte e limites por plano.
