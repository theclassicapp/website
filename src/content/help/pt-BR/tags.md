# Tags

Tags são uma maneira poderosa de organizar e categorizar suas notas no Classic. Encontre conteúdo relacionado instantaneamente.

## Criando Tags

### Tags Inline

Adicione tags diretamente no conteúdo da sua nota:

```markdown
# Notas de Reunião

Discutido o roadmap do Q4 #trabalho #reunioes #planejamento
```

### Usando o Botão de Tag

1. Clique no ícone de tag na barra de ferramentas
2. Digite o nome da sua tag
3. Pressione Enter

### Atalho de Teclado

| Plataforma | Atalho |
|------------|--------|
| **macOS** | `Cmd+T` |
| **Windows/Linux** | `Ctrl+T` |

## Sintaxe de Tags

### Tags Básicas

```markdown
#projeto #trabalho #importante
```

### Tags Aninhadas

Crie hierarquias de tags com `/`:

```markdown
#trabalho/reunioes
#trabalho/projetos
#pessoal/hobbies/leitura
```

### Tags com Múltiplas Palavras

Use hífens ou underscores:

```markdown
#projeto-alfa
#notas_reuniao
#planejamento-q4
```

## Gerenciando Tags

### Visualizando Todas as Tags

1. Abra a barra lateral
2. Encontre a seção "Tags"
3. Veja todas as suas tags

### Nuvem de Tags

Visualize suas tags mais usadas:

- Tags maiores = mais notas
- Clique em qualquer tag para filtrar
- Veja contagem de notas por tag

### Renomeando Tags

1. Clique com o botão direito em uma tag
2. Selecione "Renomear"
3. Digite o novo nome
4. Todas as notas são atualizadas automaticamente

### Excluindo Tags

1. Clique com o botão direito em uma tag
2. Selecione "Excluir"
3. Confirme a exclusão
4. Tag removida de todas as notas

## Pesquisando por Tag

### Painel de Tags

Clique em uma tag na barra lateral para filtrar notas.

### Sintaxe de Pesquisa

Use `tag:` na pesquisa:

```
tag:trabalho
tag:trabalho/reunioes
```

### Combinando Tags

Encontre notas com múltiplas tags:

```
tag:trabalho tag:urgente
```

### Excluindo Tags

Encontre notas sem uma tag:

```
-tag:arquivado
```

## Melhores Práticas de Tags

### Mantenha Simples

- Use 3-5 tags por nota
- Seja consistente com nomenclatura
- Evite proliferação de tags

### Use Hierarquias

Organize tags relacionadas:

```
#trabalho
  #trabalho/reunioes
  #trabalho/projetos
  #trabalho/prazos

#pessoal
  #pessoal/saude
  #pessoal/financas
```

### Estabeleça Convenções

Defina padrões de tags para você mesmo:

- **Status**: `#fazer` `#em-progresso` `#feito`
- **Prioridade**: `#urgente` `#alta` `#baixa`
- **Tipo**: `#reuniao` `#referencia` `#ideia`

## Sugestões de Tags

Conforme você digita `#`, o Classic sugere tags existentes:

- Tags recentes aparecem primeiro
- Correspondência fuzzy suportada
- Pressione Tab para aceitar a sugestão

## Estatísticas de Tags

Visualize o uso de tags nas Configurações:

- Tags mais usadas
- Tags não utilizadas
- Tendências de tags ao longo do tempo

## Casos de Uso

### Gestão de Projetos

```markdown
# Início do Projeto #projeto-alfa #reuniao #2024-01-15

Participantes: Time Alpha
Status: #fazer
```

### Base de Conhecimento

```markdown
# Closures em JavaScript #programacao #javascript #referencia #avancado

Closures são funções que têm acesso a...
```

### Notas Diárias

```markdown
# 2024-01-15

- Standup matinal #trabalho #reunioes
- Revisão de código #trabalho #desenvolvimento
- Sessão de academia #pessoal #saude
```

### Notas de Leitura

```markdown
# Notas de Hábitos Atômicos #leitura #livros #produtividade

Principais pontos do livro...
```

## Atalhos de Teclado

| Ação | Atalho |
|------|--------|
| Adicionar Tag | `Cmd/Ctrl+T` |
| Pesquisar Tags | `Cmd/Ctrl+F`, depois digite `tag:` |
| Mostrar Painel de Tags | `Cmd/Ctrl+Shift+T` |

## Dicas

### Nomenclatura Consistente

Mantenha uma convenção:

```
✅ #notas-reuniao
✅ #notas_reuniao
❌ #Notas Reunião (espaços não permitidos)
❌ #notasReuniao (inconsistente)
```

### Evite Excesso de Tags

Muitas tags ficam incontroláveis:

```
✅ #trabalho #urgente #projeto-alfa
❌ #trabalho #urgente #importante #hoje #segunda #escritorio #mesa #computador
```

### Limpeza Periódica

Revise e consolide tags regularmente:

- Mescle tags similares
- Remova tags não utilizadas
- Atualize convenções

## Recursos Avançados

### Pastas Inteligentes Baseadas em Tags

Crie pastas que se preenchem automaticamente baseadas em tags:

1. Crie uma nova pasta
2. Defina o filtro: `tag:projeto`
3. Todas as notas com a tag aparecem

### Tag em YAML

Adicione tags ao frontmatter da nota:

```yaml
---
tags:
  - trabalho
  - reunioes
  - projeto-alfa
---
```

### Aliases de Tags

Configure aliases de tags nas Configurações:

- `#fazer` = `#tarefa` = `#acao`
- Consolide tags similares
