# Histórico de Versões

O Classic acompanha todas as mudanças nas suas notas. Navegue, compare e restaure versões anteriores sempre que precisar.

## Como o Histórico de Versões Funciona

### Rastreamento Automático

O Classic salva automaticamente versões das suas notas:

- **Cada edição**: Cada salvamento cria uma versão
- **Com carimbo de tempo**: Saiba quando as mudanças ocorreram
- **Conteúdo completo**: Snapshots completos preservados

### Retenção

| Configuração | Padrão |
|--------------|--------|
| **Retenção de Histórico** | 90 dias |
| **Máximo de Versões** | 100 por nota |
| **Limpeza automática** | Sim |

Configure isso em Configurações → Editor → Histórico de Versões.

## Visualizando o Histórico

### Abrindo o Histórico de Versões

1. Abra qualquer nota
2. Clique no ícone de histórico na barra de ferramentas
3. Ou use `Cmd/Ctrl+H`

### Painel de Histórico

O painel de histórico mostra:

- **Linha do tempo**: Lista de todas as versões
- **Carimbos de tempo**: Quando cada versão foi salva
- **Visualização**: Veja o conteúdo da versão selecionada

### Navegando Versões

1. Clique em qualquer versão na lista
2. A visualização mostra aquela versão
3. Role pelas mudanças
4. Compare com a versão atual

## Comparando Versões

### Visualização Lado a Lado

Veja diferenças entre versões:

1. Abra o histórico de versões
2. Selecione uma versão
3. Clique em "Comparar"
4. Veja adições (verde) e remoções (vermelho)

### Visualização Diff

Diferenças de texto são destacadas:

- **Verde**: Conteúdo adicionado
- **Vermelho**: Conteúdo removido
- **Inalterado**: Texto normal

## Restaurando Versões

### Restaurar Nota Inteira

Substitua o conteúdo atual por uma versão anterior:

1. Abra o histórico de versões
2. Selecione a versão
3. Clique em "Restaurar"
4. Confirme a ação

### Restaurar Seleção

Copie apenas parte de uma versão anterior:

1. Abra o histórico de versões
2. Selecione a versão
3. Destaque o texto que deseja
4. Clique em "Copiar para Área de Transferência"
5. Cole na sua nota atual

### Criar Nova Nota a Partir de Versão

Mantenha ambas as versões:

1. Abra o histórico de versões
2. Selecione a versão
3. Clique em "Criar Nota a Partir de Versão"
4. Uma nova nota é criada

## Ações do Histórico de Versões

| Ação | Descrição |
|------|-----------|
| **Visualizar** | Pré-visualizar a versão |
| **Comparar** | Diff com a atual |
| **Restaurar** | Substituir atual por esta |
| **Copiar** | Copiar conteúdo para área de transferência |
| **Excluir** | Remover esta versão |

## Atalhos de Teclado

| Ação | Atalho |
|------|--------|
| Abrir Histórico | `Cmd/Ctrl+H` |
| Versão Anterior | `Up` |
| Próxima Versão | `Down` |
| Restaurar | `Cmd/Ctrl+R` |
| Fechar Histórico | `Escape` |

## Configurações

### Configure em Configurações → Editor → Histórico de Versões

| Configuração | Opções | Padrão |
|--------------|--------|--------|
| Habilitar Histórico | Ligado/Desligado | Ligado |
| Período de Retenção | 30/60/90/180 dias | 90 dias |
| Máximo de Versões | 50/100/200/500 | 100 |
| Intervalo de Salvamento Automático | 1/5/10/30 minutos | 5 minutos |

### Localização de Armazenamento

O histórico de versões é armazenado localmente:

- **macOS**: `~/Library/Application Support/Classic/history/`
- **Windows**: `%APPDATA%/Classic/history/`
- **Linux**: `~/.config/Classic/history/`

## Casos de Uso

### Recuperando Mudanças Acidentais

1. Abra o histórico de versões
2. Encontre a versão antes do erro
3. Restaure aquela versão

### Comparando Rascunhos

1. Abra o histórico
2. Compare diferentes versões
3. Veja como a nota evoluiu

### Encontrando Conteúdo Excluído

1. Navegue por versões mais antigas
2. Pesquise texto excluído
3. Copie de volta

### Acompanhando Progresso

Veja como uma nota se desenvolveu ao longo do tempo:

- Quando ideias foram adicionadas
- Como a estrutura mudou
- Evolução da escrita

## Dicas

### Revisão Regular

Periodicamente revise o histórico de versões:

- Limpe versões desnecessárias
- Note como o conteúdo evoluiu
- Aprenda com seus padrões de edição

### Antes de Mudanças Importantes

Crie um ponto de verificação:

1. Faça uma pequena edição
2. Salve (cria uma versão)
3. Agora faça suas mudanças importantes
4. Fácil de reverter se necessário

### Nomeie Versões Importantes

Adicione marcadores em suas notas:

```markdown
<!-- VERSÃO: Rascunho final -->
<!-- VERSÃO: Antes da reestruturação -->
```

Estes ajudam a identificar versões depois.

## Solução de Problemas

### Histórico Não Está Salvando

- Verifique se o histórico de versões está habilitado
- Verifique se a localização de armazenamento tem espaço
- Verifique as permissões do arquivo

### Não Consigo Encontrar Versão Antiga

- A versão pode ter sido limpa automaticamente
- Verifique as configurações de retenção
- Aumente o período de retenção

### Histórico Ocupando Muito Espaço

1. Reduza o período de retenção
2. Diminua o máximo de versões por nota
3. Execute limpeza manual

### Carregamento de Histórico Lento

Notas grandes com muitas versões podem carregar lentamente:

- Tenha paciência com grandes históricos
- Considere reduzir o máximo de versões
- Arquive notas antigas

## Privacidade e Segurança

### Armazenamento Local

O histórico de versões é armazenado localmente:

- Nunca enviado para servidores
- Seus dados permanecem privados
- Apenas você tem acesso

### Backups Criptografados

Se você usar backups criptografados:

- O histórico de versões é incluído
- Protegido pela senha do seu backup
- Seguro mesmo em arquivos de backup
