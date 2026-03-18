# Importar e Exportar

Traga suas notas para o Classic de outros apps, ou exporte-as para compartilhar ou fazer backup. O Classic suporta múltiplos formatos para migração de dados sem problemas.

## Importando Notas

### Formatos Suportados

| Formato | Extensão | Observações |
| ------- | -------- | ----------- |
| Markdown | `.md` | ✅ Suporte completo |
| Texto Simples | `.txt` | ✅ Importado como nota |
| JSON | `.json` | ✅ Formato Classic |
| HTML | `.html` | ⚠️ Convertido para Markdown |
| Evernote | `.enex` | ⚠️ Experimental |
| Notion | Exportação Notion | ⚠️ Experimental |
| Obsidian | Exportação Markdown | ✅ Suporte completo |

### Processo de Importação

1. Abra **Arquivo** → **Importar** (ou `Cmd/Ctrl+I`)
2. Selecione seu(s) arquivo(s) para importar
3. Escolha a pasta de destino
4. Revise a pré-visualização da importação
5. Confirme a importação

### Importar da Área de Transferência

Importação rápida de qualquer fonte:

1. Copie texto para a área de transferência
2. Abra a Paleta de Comandos
3. Digite "Importar da Área de Transferência"
4. Nova nota criada automaticamente

### Importação em Massa

Importe múltiplos arquivos de uma vez:

1. Abra **Arquivo** → **Importar**
2. Selecione **Importar Pasta**
3. Escolha a pasta contendo as notas
4. Todos os arquivos suportados são importados

## Exportando Notas

### Formatos de Exportação

| Formato | Caso de Uso |
| ------- | ----------- |
| **Markdown** | Compartilhamento, backups, outros apps |
| **HTML** | Publicação web |
| **PDF** | Arquivamento, impressão |
| **Texto Simples** | Compartilhamento simples |
| **JSON** | Integração de API |

### Exportar Nota Única

1. Abra a nota que deseja exportar
2. Clique em **Arquivo** → **Exportar**
3. Escolha o formato
4. Selecione a localização
5. Salve

### Exportar Múltiplas Notas

1. Selecione notas na barra lateral (Cmd/Ctrl+clique)
2. Clique com botão direito → **Exportar Selecionadas**
3. Escolha o formato
4. Selecione a localização
5. Salve

### Exportar Todas as Notas

1. Abra **Arquivo** → **Exportar Tudo**
2. Escolha o formato
3. Selecione a localização
4. Aguarde a exportação ser concluída

## Guias de Migração

### Do Obsidian

O Classic pode importar vaults do Obsidian diretamente:

1. Abra **Arquivo** → **Importar**
2. Selecione **Vault Obsidian**
3. Navegue até a pasta do seu vault
4. Selecione para importar

**O que é transferido**

- ✅ Notas e pastas
- ✅ Tags
- ✅ Links (convertidos para backlinks)
- ✅ Metadados
- ⚠️ Plugins (não suportados)

### Do Notion

1. Exporte do Notion como Markdown
2. Importe para o Classic
3. Revise a formatação
4. Corrija links quebrados

**Dicas para migração do Notion**

- Use a opção "Exportar como Markdown" do Notion
- Verifique a formatação de checkboxes
- Verifique referências de banco de dados
- Recrie bancos de dados vinculados manualmente

### Do Evernote

1. Exporte do Evernote como HTML
2. Use a importação HTML do Classic
3. Revise o conteúdo convertido

**Dicas para migração do Evernote**

- Cadernos se tornam pastas
- Tags são preservadas
- Anexos são importados
- Verifique a formatação

## Melhores Práticas

### Antes de Importar

- Faça backup das notas existentes
- Revise a pré-visualização da importação
- Verifique duplicatas
- Verifique a formatação

### Depois de Importar

- Revise as notas importadas
- Corrija problemas de formatação
- Atualize links internos
- Adicione tags conforme necessário

### Exportações Regulares

- Exporte backups mensalmente
- Use formatos diferentes para propósitos diferentes
- Mantenha exportações organizadas por data
- Armazene na nuvem para backup externo

## Solução de Problemas

### Falha na Importação

**Causas comuns**

- Formato não suportado
- Arquivo corrompido
- Problemas de permissão
- Limitações de memória

**Soluções**

1. Tente um formato diferente
2. Verifique a integridade do arquivo
3. Verifique permissões de leitura
4. Importe menos arquivos de uma vez

### Formatação Perdida

**Causas comuns**

- Formatação complexa
- Sintaxe não suportada
- Limitações de conversão

**Soluções**

1. Use exportação Markdown do app de origem
2. Simplifique a formatação antes de importar
3. Corrija manualmente após importar

### Anexos Faltando

**Causas comuns**

- Importação não incluiu anexos
- Caminho de anexo incorreto
- Limitações de tamanho

**Soluções**

1. Re-importe com anexos
2. Verifique a pasta de anexos
3. Importe anexos separadamente
