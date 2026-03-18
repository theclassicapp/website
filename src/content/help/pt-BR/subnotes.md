# Subnotas

As subnotas permitem criar notas aninhadas e hierárquicas dentro do Classic. Organize tópicos complexos em partes gerenciáveis.

## O Que São Subnotas?

Subnotas são notas dentro de notas — uma forma de criar estruturas de conteúdo hierárquicas.

### Benefícios

- **Organização**: Divida tópicos complexos em partes menores
- **Aninhamento**: Crie múltiplos níveis de hierarquia
- **Navegação**: Fácil navegar entre notas relacionadas
- **Flexibilidade**: Expanda e recolha conforme necessário

## Criando Subnotas

### Método 1: Indentação

Crie subnotas indentando conteúdo sob uma nota pai:

1. Crie uma nota pai
2. Crie uma nova nota
3. Arraste a nova nota sobre a pai
4. Ela se torna uma subnota

### Método 2: Menu de Contexto

1. Clique com o botão direito em uma nota
2. Selecione "Nova Subnota"
3. Uma nota aninhada é criada

### Método 3: Atalho de Teclado

1. Selecione uma nota
2. Pressione `Cmd/Ctrl+Shift+N`
3. Uma subnota é criada

## Gerenciando Subnotas

### Expandindo e Recolhendo

Clique na seta ao lado de uma nota com subnotas:

- **Expandir**: Mostra todas as notas aninhadas
- **Recolher**: Esconde as notas aninhadas

### Navegação

- Clique para abrir uma subnota
- Use as setas para navegar na hierarquia
- Breadcrumb mostra sua localização

### Movendo Subnotas

Arraste e solte para reorganizar:

1. Clique e segure a subnota
2. Arraste para o novo local
3. Solte para reposicionar

### Convertendo para Nota Principal

Promova uma subnota para o nível superior:

1. Clique com o botão direito na subnota
2. Selecione "Mover para Raiz"
3. A nota se torna uma nota principal

## Profundidade de Subnotas

O Classic suporta múltiplos níveis de aninhamento:

```
📁 Projeto
  📄 Visão Geral
  📁 Pesquisa
    📄 Entrevistas com Usuários
    📄 Resultados da Pesquisa
    📁 Análise
      📄 Descobertas Principais
      📄 Recomendações
  📁 Planejamento
    📄 Cronograma
    📄 Recursos
```

### Melhores Práticas

- **Limite de profundidade**: Máximo de 3-4 níveis para clareza
- **Agrupamento lógico**: Agrupe conteúdo relacionado junto
- **Nomes claros**: Use nomes descritivos para subnotas

## Casos de Uso

### Documentação de Projeto

```
Projeto Alpha
├── Requisitos
├── Arquitetura
│   ├── Frontend
│   ├── Backend
│   └── Banco de Dados
├── Notas de Reunião
└── Relatórios de Progresso
```

### Base de Conhecimento

```
Programação
├── JavaScript
│   ├── Básico
│   ├── Avançado
│   └── Melhores Práticas
├── Python
│   ├── Básico
│   └── Bibliotecas
└── Recursos
```

### Notas de Estudo

```
Biologia 101
├── Estrutura Celular
│   ├── Membrana
│   ├── Núcleo
│   └── Organelas
├── Genética
│   ├── DNA
│   └── RNA
└── Evolução
```

## Vinculando com Subnotas

### Backlinks

Subnotas criam automaticamente backlinks para notas pai:

- Veja a seção "Referências Vinculadas"
- Navegue entre notas relacionadas
- Entenda os relacionamentos entre notas

### Wikilinks

Vincule a subnotas de qualquer lugar:

```markdown
Veja [[Projeto/Pesquisa/Análise]] para detalhes.
```

## Dicas

### Convenção de Nomenclatura

Use nomenclatura clara e consistente:

```
✅ Bom:
Projeto/Requisitos/Funcionais
Projeto/Requisitos/NaoFuncionais

❌ Evitar:
Projeto/req/func
Projeto/rq/nf
```

### Navegação por Breadcrumb

Use breadcrumbs para entender sua localização:

```
Projeto > Pesquisa > Análise
```

### Pesquisa

A pesquisa inclui subnotas automaticamente:

- Encontre conteúdo em todos os níveis
- Filtre por profundidade da nota
- Navegação rápida

### Templates

Aplique templates a subnotas:

1. Crie a subnota
2. Use o comando com barra `/template`
3. Escolha o template

## Atalhos de Teclado

| Ação | Atalho |
|------|--------|
| Nova Subnota | `Cmd/Ctrl+Shift+N` |
| Expandir Tudo | `Cmd/Ctrl+Down` |
| Recolher Tudo | `Cmd/Ctrl+Up` |
| Mover para Cima | `Opt/Alt+Up` |
| Mover para Baixo | `Opt/Alt+Down` |
| Promover | `Opt/Alt+Left` |
| Rebaixar | `Opt/Alt+Right` |

## Solução de Problemas

### Subnota Não Aparecendo

- Verifique se a pai está recolhida
- Verifique se a nota não foi movida
- Atualize a barra lateral

### Não Consigo Criar Subnota

- Certifique-se de que a nota pai existe
- Verifique as permissões
- Tente o método do menu de contexto

### Subnotas Perdidas

Use a pesquisa para encontrar notas perdidas:

1. Abra a pesquisa (`Cmd/Ctrl+F`)
2. Digite o nome da nota
3. Veja o caminho completo nos resultados
