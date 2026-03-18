# Diagramas Mermaid

Crie diagramas bonitos diretamente em suas notas usando a sintaxe Mermaid.

## Uso Básico

Para criar um diagrama Mermaid, use um bloco de código com o identificador de linguagem `mermaid`:

```mermaid
graph TD
    A[Início] --> B[Processo]
    B --> C[Fim]
```

## Fluxograma

```mermaid
flowchart TD
    A[Início] --> B{Está funcionando?}
    B -->|Sim| C[Ótimo!]
    B -->|Não| D[Depurar]
    D --> B
```

## Diagrama de Sequência

```mermaid
sequenceDiagram
    participant Usuário
    participant Navegador
    participant Servidor

    Usuário->>Navegador: Clica no botão
    Navegador->>Servidor: Envia requisição
    Servidor-->>Navegador: Retorna dados
    Navegador-->>Usuário: Exibe resultado
```

## Diagrama de Classes

```mermaid
classDiagram
    class Nota {
        +String titulo
        +String conteudo
        +DateTime criadoEm
        +salvar()
    }
    class Tag {
        +String nome
        +adicionarNota()
    }
    Nota "1" -- "*" Tag
```

## Diagrama de Estados

```mermaid
stateDiagram-v2
    [*] --> Rascunho
    Rascunho --> EmProgresso : Começar edição
    EmProgresso --> Revisao : Terminar
    Revisao --> Publicado : Aprovar
    Revisao --> Rascunho : Rejeitar
    Publicado --> [*]
```

## Gráfico de Gantt

```mermaid
gantt
    title Cronograma do Projeto
    dateFormat  YYYY-MM-DD
    section Planejamento
        Pesquisa     :a1, 2024-01-01, 30d
        Design       :2024-01-15, 20d
    section Desenvolvimento
        Backend      :2024-02-01, 45d
        Frontend     :2024-02-15, 30d
    section Testes
        QA Testing   :2024-03-01, 15d
```

## Gráfico de Pizza

```mermaid
pie showPets
    "Cachorros" : 386
    "Gatos" : 85
    "Coelhos" : 15
```

## Mapa Mental

```mermaid
mindmap
  root((Classic))
    Recursos((Recursos))
      Editor((Editor))
      Organizacao((Organização))
    Beneficios((Benefícios))
      Privacidade((Privacidade))
      Velocidade((Velocidade))
```

## Dicas

### Estilização

- Use subgrafos para organizar diagramas complexos
- Adicione estilos e temas para consistência visual
- Mantenha os diagramas simples e legíveis

### Performance

- Diagramas grandes podem deixar o editor lento
- Considere dividir diagramas complexos em menores
- Use `%%{init: ... }%%` para configuração

### Problemas Comuns

**Diagrama não está renderizando?**
- Verifique a sintaxe Mermaid
- Certifique-se de que o bloco de código tem a linguagem `mermaid`
- Procure erros de sintaxe na visualização

**Diagrama muito pequeno/grande?**
- Use `%%{init: {'theme': 'base', 'themeVariables': { 'fontSize': '16px' }}}%%` para ajustar o tamanho

## Recursos

- [Documentação Mermaid](https://mermaid.js.org/)
- [Editor Mermaid Live](https://mermaid.live/)
- [Mermaid GitHub](https://github.com/mermaid-js/mermaid)
