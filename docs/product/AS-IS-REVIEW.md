# Diagnóstico técnico — BarberShop atual (AS IS)

**Inspecionado em:** 2026-10-28, `main` no commit `0329bfcb55c3c17b3eca3b215ef041e2042d6c93`. Esta é uma revisão estática de arquivos do GitHub; não é auditoria de runtime, deploy, testes executados ou segurança em produção.

## Mapeamento confirmado

| Área | Evidência no código | Situação |
|---|---|---|
| Plataforma | `package.json`: Next `^15.0.0`, React `^19.0.0`, TypeScript `^5.6.0`, Tailwind `^3.4.14` | Frontend web existente |
| Landing page | `app/page.tsx`, `components/sections/*` | Implementada |
| Agendamento | `app/agendamento/page.tsx`, `components/booking/BookingForm.tsx` | UI e validação local |
| Formulário | React Hook Form + Zod em `lib/validations.ts` | Implementado no cliente |
| Horários | `data/time-slots.ts` (lista fixa de 8 horários) | Mock; não valida disponibilidade |
| Serviços e profissionais | `data/services.ts`, `data/barbers.ts` | Mock estático |
| Confirmação | `confirmBooking()`: `setTimeout(..., 800)` seguido da tela de sucesso | Simulação; não grava reservas |
| Administração | `app/admin/page.tsx` com cards constantes (0 agendamentos etc.) | Protótipo; não há proteção na rota |
| Clube/planos do cliente | `app/planos/page.tsx` e `localStorage` | Simulado; sem cobrança/crédito real |
| Persistência/API | Ausência de Prisma, modelos e endpoints `app/api` na árvore inspecionada | Não implementada |
| Documentação | `docs/SPEC.md`, `docs/EXECUTION_FLOW.md` | Descreve fases anteriores |

## Problemas que impedem uma venda como agenda real

1. **Falsa confirmação operacional:** a tela é visualmente convincente, mas o agendamento só existe no estado React; a própria UI informa que é demonstração.
2. **Sem cálculo de disponibilidade:** duração variável por serviço, jornada, folgas, bloqueios e reservas simultâneas não são considerados.
3. **Sem isolamento/autenticação:** `/admin` é uma página demonstrativa aberta; não pode exibir dados reais sem controle de acesso.
4. **Dados de domínio inadequados para persistência:** o formulário usa nomes como identificação de serviço/profissional; migrar para IDs estáveis, preços em centavos e duração em minutos.
5. **Sem confiança no cliente:** validação Zod feita no navegador não substitui validação, autorização, idempotência e transação no servidor.
6. **Datas e fuso:** a lógica de `getToday()` usa fuso do navegador; API precisa considerar a timezone da barbearia e persistir instantes UTC.
7. **Sem infraestrutura de operação:** não identifiquei no repositório testes automatizados, pipelines CI, monitoramento, provider de mensagens ou filas; conferir ambientes externos separadamente.
8. **Mídias pesadas:** `public/videos/hero-motion.mp4` tem cerca de 29 MB na árvore Git; revisar performance móvel, sem bloquear o avanço do backend.

## O que preservar e reutilizar

- Landing page, identidade visual, componentes de apresentação, responsividade e formulário.
- Schemas Zod como ponto de partida, com validação equivalente no servidor.
- Fluxo UX `form -> review -> success`, trocando a simulação por resposta confirmada da API.
- Componentização por área e documentação legada, que vira registro histórico.

## Refatorações prioritárias

- Substituir `data/*` por consultas de serviços/barbeiros reais mantendo seeds para demo/testes.
- Converter `BookingForm` em cliente de `GET /availability` e `POST /appointments`; somente exibir sucesso após gravação confirmada.
- Proteger `/admin`; separar funções administrativas de ações públicas.
- Decidir o tratamento da experiência `Clube BarberFlow` simulada até haver cobrança real: esconder no piloto ou sinalizar claramente como demo.
- Adicionar testes concorrentes e casos de timezone antes do lançamento.

**Conclusão:** a base visual é reaproveitável; o núcleo transacional de reservas e os serviços de IA ainda precisam ser construídos.
