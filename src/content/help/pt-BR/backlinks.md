# Backlinks

Backlinks mostram conexões entre suas notas, criando uma rede de ideias relacionadas. Descubra relacionamentos que você não sabia que existiam.

## O Que São Backlinks?

Backlinks mostram quais notas vinculam à nota atual. São conexões no seu grafo de conhecimento.

### Benefícios

- **Descubra conexões**: Encontre notas relacionadas automaticamente
- **Contexto**: Entenda como as ideias se relacionam
- **Navegação**: Pule entre notas conectadas
- **Grafo de conhecimento**: Visualize seu pensamento

## Como Backlinks Funcionam

Quando você cria um link para outra nota, o Classic automaticamente cria um backlink.

```markdown
Na nota A:
Veja [[Planejamento do Projeto]] para detalhes.

Resultado:
- Nota A vincula a "Planejamento do Projeto"
- "Planejamento do Projeto" mostra um backlink para Nota A
```

## Visualizando Backlinks

### Painel de Backlinks

Abra o painel de backlinks para ver todas as referências:

1. Abra qualquer nota
2. Clique no ícone de backlinks na barra lateral
3. Veja todas as notas que vinculam a esta

### Backlinks Inline

Backlinks aparecem no final de cada nota:

- Mostra o nome da nota de origem
- Exibe um trecho de contexto
- Clique para navegar

## Criando Links

### Sintaxe Wikilink

Use colchetes duplos para vincular a notas:

```markdown
[[Nome da Nota]]
[[Outra Nota]]
```

### Texto de Exibição

Personalize o texto do link:

```markdown
[[Projeto Alpha|o projeto alfa]]
[[Notas de Reunião|reunião de ontem]]
```

### Vincular a Títulos

Vincule a seções específicas:

```markdown
[[Nome da Nota#Titulo]]
[[Nome da Nota#Secao|pular para seção]]
```

## Tipos de Backlink

### Links Diretos

Wikilinks explícitos que você cria:

```markdown
Relacionado: [[Nota Similar]]
```

### Menções Não Vinculadas

Notas que mencionam o título mas não estão vinculadas:

```markdown
Nota menciona "Projeto Alpha" mas não está vinculada
```

O Classic sugere converter estas em links.

## Painel de Backlinks

### Recursos

- **Filtrar**: Pesquise através dos backlinks
- **Ordenar**: Por data, nome ou relevância
- **Visualizar**: Passe o mouse para visualizar o conteúdo
- **Contexto**: Veja o texto ao redor

### Ações

- Clique para abrir a nota vinculada
- Clique com o botão direito para opções
- Converta menções não vinculadas

## Casos de Uso

### Gestão de Conhecimento

Construa uma wiki pessoal:

```markdown
# Aprendizado de Máquina

Relacionado a [[Inteligência Artificial]]
Baseado em [[Estatística]]
Usado em [[Processamento de Linguagem Natural]]
```

### Documentação de Projeto

Conecte documentos relacionados:

```markdown
# Design de API

Referências [[Schema do Banco de Dados]]
Depende de [[Fluxo de Autenticação]]
Veja também [[Integração Frontend]]
```

### Pesquisa

Vincule conceitos e fontes:

```markdown
# Notas de Pesquisa

Baseado em [[Artigo Fonte A]]
Contradiz [[Artigo Fonte B]]
Suporta [[Hipótese 1]]
```

### Notas de Reunião

Conecte reuniões a projetos:

```markdown
# Reunião: Planejamento Q4

Projeto: [[Projeto Alpha]]
Anterior: [[Revisão Q3]]
Próxima: [[Kickoff Q4]]
```

## Visualização em Grafo

Visualize seus backlinks como uma rede:

1. Abra a Visualização em Grafo (`Cmd/Ctrl+G`)
2. Veja todas as notas como nós
3. Linhas mostram conexões
4. Clique nos nós para navegar

### Controles do Grafo

- **Zoom**: Role para ampliar
- **Pan**: Arraste para mover
- **Filtrar**: Mostrar/ocultar por tag
- **Foco**: Destaque as conexões de uma nota

## Dicas

### Vincule Generosamente

Crie links sempre que referenciar outro conceito:

```markdown
✅ Bom:
Discutido o [[Roadmap Q4]] e [[Alocação de Orçamento]].

❌ Evitar:
Discutido o Roadmap Q4 e Alocação de Orçamento.
```

### Use Nomes Consistentes

Corresponda exatamente aos títulos das notas para vinculação confiável:

```markdown
✅ [[Notas de Reunião]]
❌ [[notas de reuniao]] (maiúsculas importam)
```

### Revise Backlinks

Periodicamente verifique backlinks para:

- Descobrir conexões esquecidas
- Encontrar notas para mesclar
- Identificar lacunas de conhecimento

### Visualização de Link

Passe o mouse sobre links para visualizar sem abrir:

- Veja as primeiras linhas
- Verifique se é a nota certa
- Referência rápida

## Atalhos de Teclado

| Ação | Atalho |
|------|--------|
| Abrir Backlinks | `Cmd/Ctrl+Shift+B` |
| Criar Link | `[[` (autocompleta) |
| Abrir Visualização em Grafo | `Cmd/Ctrl+G` |
| Navegar Links | `Tab` através dos links |

## Recursos Avançados

### Incorporação

Incorpore conteúdo de outras notas:

```markdown
![[Nome da Nota]]
![[Nome da Nota#Secao]]
```

### Transclusão

Inclua conteúdo inline:

```markdown
## Conteúdo Relacionado
![[Template Compartilhado#Cabecalho]]
```

### Coloração de Links

Links mudam de cor baseado em:

- **Azul**: Link não visitado
- **Roxo**: Link visitado
- **Vermelho**: Link quebrado (nota não existe)

## Solução de Problemas

### Backlinks Faltando

- Verifique a sintaxe do link `[[Nome da Nota]]`
- Verifique se o título da nota corresponde exatamente
- Atualize o painel de backlinks

### Links Quebrados

- A nota pode ter sido renomeada
- A nota pode ter sido excluída
- Use a pesquisa para encontrar a nota correta

### Links Duplicados

- Consolide notas similares
- Use redirecionamentos para notas renomeadas
- Verifique variações de título
