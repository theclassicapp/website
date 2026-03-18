# Notas Diárias

As Notas Diárias criam automaticamente uma nova nota para cada dia, perfeito para registro em diário, planejamento diário ou captura de informações baseadas em tempo.

## Como Funciona

### Criação Automática

- Uma nova nota é criada para cada dia
- As notas são nomeadas usando o formato de data (ex: `2024-01-15.md`)
- As notas dos dias anteriores são preservadas e pesquisáveis

### Acessando Notas Diárias

1. Clique em **Notas Diárias** na barra lateral
2. Ou pressione `Ctrl/Cmd+D`
3. A nota de hoje abre automaticamente

## Template de Nota Diária

Personalize o template para novas notas diárias:

### Template Padrão

```markdown
# {{date}}

## Tarefas
- [ ]
- [ ]

## Notas


## Diário

```

### Personalizando

1. Abra as Configurações
2. Vá para Notas Diárias
3. Edite o template
4. Use `{{date}}` para a data atual

### Variáveis do Template

| Variável | Descrição |
| -------- | --------- |
| `{{date}}` | Data atual (AAAA-MM-DD) |
| `{{time}}` | Hora atual (HH:mm) |
| `{{weekday}}` | Nome do dia (Segunda, etc.) |

## Recursos

### Navegação por Data

- **Anterior/Próximo**: Navegue entre dias
- **Calendário**: Pule para datas específicas
- **Pesquisa**: Encontre conteúdo em todas as notas diárias

### Vinculação Automática

- Notas criadas no mesmo dia são automaticamente vinculadas
- Backlinks mostram conexões entre dias
- Tags funcionam em todas as notas diárias

### Integração

- **Captura Rápida**: Adicione à nota de hoje com `#hoje`
- **Visualização de Calendário**: Visão geral visual das suas notas diárias
- **Estatísticas**: Acompanhe suas sequências de escrita

## Melhores Práticas

### Registro em Diário Diário

```markdown
# 2024-01-15

## Manhã
- Acordei às 6:30
- Sentimento: Energizado

## Tarefas
- [x] Treino matinal
- [ ] Revisar PRs
- [ ] Reunião de equipe às 14h

## Aprendizados
- Descobri um novo atalho de teclado
- Aprendi sobre diagramas Mermaid

## Amanhã
- Focar em documentação
- Agendar revisão de código
```

### Notas de Reunião

```markdown
# 2024-01-15

## Standup da Equipe

**Participantes**: Alice, Bob, Carol

### Atualizações
- Alice: Terminou integração da API
- Bob: Trabalhando em componentes de UI
- Carol: Testes em andamento

### Bloqueios
- Aguardando revisão de design

### Itens de Ação
- [ ] Alice: Deploy para staging
- [ ] Bob: Completar biblioteca de componentes
- [ ] Carol: Escrever testes de integração
```

### Registro de Aprendizado

```markdown
# 2024-01-15

## Hoje Eu Aprendi

### Diagramas Mermaid
- Posso criar fluxogramas em Markdown
- A sintaxe é direta
- A visualização em tempo real é útil

### Recursos
- [Documentação Mermaid](https://mermaid.js.org/)

## Perguntas
- Como criar diagramas complexos?
- Melhores práticas para organização de diagramas?
```

## Dicas

### Consistência

- Crie notas no mesmo horário todos os dias
- Use formatação consistente
- Revise e atualize ao longo do dia

### Organização

- Use títulos para diferentes seções
- Adicione tags para fácil pesquisa
- Vincule a notas relacionadas

### Revisão

- Revisão semanal das notas diárias
- Extraia itens importantes para notas permanentes
- Arquive ou resuma notas antigas
