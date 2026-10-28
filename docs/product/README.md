# BarberFlow IA — documentação do produto

**Versão:** 0.1 (proposta, não implementada)  
**Data:** 2026-10-28  
**Base da revisão:** branch `main` do repositório `Reginaldoportella/BarberShop-`, commit `0329bfc`.

## Visão rápida

O BarberFlow evoluirá de uma landing page com agendamento demonstrativo para uma solução de **agenda real + recepcionista com IA + recuperação consentida de clientes**, inicialmente validada em uma barbearia piloto. A ideia comercial é vender resultado operacional — horários organizados, retorno de clientes e oportunidades de agenda aproveitadas — e não somente um chatbot.

## Documentos

1. [Diagnóstico da implementação atual](./AS-IS-REVIEW.md) — fatos observados no código e lacunas.
2. [PRD](./PRD.md) — problema, usuários, proposta de valor, escopo e métricas.
3. [Arquitetura](./ARCHITECTURE.md) — visão atual e arquitetura-alvo, diagramas e decisões de segurança.
4. [Especificação do MVP](./SPEC-MVP.md) — regras de negócio, APIs propostas, modelos e critérios de aceite.
5. [Backlog](./BACKLOG.md) — tarefas priorizadas, dependências e definição de pronto.
6. [ADR-001](./ADR-001.md) — decisões e trade-offs técnicos.
7. [Orquestração Dify e reativação inteligente](./DIFY-ORCHESTRATION.md) — agentes, fluxos de dados, critérios de seleção, ferramentas HTTP, envio autorizado e backlog complementar.

## Legenda de status

- **Confirmado no repositório:** identificado no código lido.
- **Proposto:** decisão/documentação para uma implementação futura.
- **A validar:** exige decisão, experimento, documentação de fornecedor ou feedback de clientes.

## Ordem recomendada

1. Persistência, API, autenticação administrativa e prevenção transacional de conflitos.
2. Disponibilidade real, painel funcional e testes de reserva.
3. Chat com IA consumindo exclusivamente ferramentas de agenda autorizadas.
4. Consentimento e automação de reativação com rastreabilidade.
5. WhatsApp oficial e recuperação de vagas canceladas após validação do piloto.
6. Multiempresa operando em produção, cobrança SaaS e recursos avançados.

## Preservação do histórico

Os documentos legados `docs/SPEC.md` e `docs/EXECUTION_FLOW.md` descrevem a fase inicial do projeto e **não foram substituídos**. Os novos documentos descrevem o pivot para BarberFlow IA. O `Clube BarberFlow` mostrado ao cliente na interface atual é diferente dos futuros **planos SaaS vendidos à barbearia**; não misturar esses conceitos.

## Primeira validação de negócio

Entrevistar 3–5 barbearias sobre volume de agendamentos por mensagem, faltas, cancelamentos, recorrência de clientes e disposição a pagar. Validar custos de hospedagem, IA, n8n, mensagens e suporte antes de fixar preços.

> Toda menção a recursos de IA, WhatsApp, banco ou automações é **escopo futuro**, não uma afirmação de que já funcionam no código atual.
