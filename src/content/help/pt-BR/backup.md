# Backup e Restauração

Mantenha suas notas seguras com o sistema de backup integrado do Classic. Nunca mais perca seu trabalho.

## Backups Automáticos

### Como Funciona

O Classic cria automaticamente backups das suas notas em intervalos regulares:

- **Frequência padrão**: A cada 30 minutos
- **Localização do backup**: Mesma pasta das suas notas
- **Retenção**: Mantém os últimos 10 backups
- **Formato**: Arquivo compactado (`.cbak`)

### Configurando Backup Automático

1. Abra as Configurações
2. Navegue para **Backup e Restauração**
3. Configure o seguinte:

| Configuração | Opções | Padrão |
| ------------ | ------ | ------ |
| Habilitar Backup Automático | Ligado/Desligado | Ligado |
| Frequência de Backup | 15min / 30min / 1h / 4h | 30min |
| Manter Backups | 5 / 10 / 20 / 50 | 10 |
| Localização do Backup | Caminho personalizado | Pasta de notas |

## Backup Manual

### Criar Backup Agora

1. Abra a Paleta de Comandos (`Cmd/Ctrl+P`)
2. Digite "Backup"
3. Selecione **Criar Backup Agora**
4. Escolha a localização (opcional)
5. O backup é criado

### Formato do Arquivo de Backup

Backups são armazenados como arquivos `.cbak` contendo:

- Todas as notas (arquivos Markdown)
- Anexos
- Configurações
- Metadados (tags, links, etc.)

## Restaurar de Backup

### Processo de Restauração

1. Abra as Configurações
2. Vá para **Backup e Restauração**
3. Clique em **Restaurar de Backup**
4. Selecione o arquivo de backup
5. Escolha as opções de restauração
6. Confirme a restauração

### Opções de Restauração

| Opção | Descrição |
| ----- | --------- |
| **Substituir Tudo** | Substituir completamente as notas atuais pelo backup |
| **Mesclar** | Combinar backup com notas existentes |
| **Visualizar** | Ver conteúdo do backup antes de restaurar |

### O Que É Restaurado

- ✅ Todas as notas e pastas
- ✅ Anexos
- ✅ Tags e metadados
- ✅ Histórico de notas
- ⚠️ Configurações (opcional)
- ❌ Preferências do aplicativo

## Localizações de Backup

### Localização Padrão

```
~/Classic/backups/
├── backup-2024-01-15-10-30.cbak
├── backup-2024-01-15-11-00.cbak
└── backup-2024-01-15-11-30.cbak
```

### Localização Personalizada

1. Abra as Configurações
2. Vá para Backup e Restauração
3. Clique em "Mudar Localização do Backup"
4. Selecione sua pasta preferida

### Backup na Nuvem

Aponte a localização do backup para uma pasta sincronizada com a nuvem:

- **iCloud**: `~/Library/Mobile Documents/com~apple~CloudDocs/Classic Backups`
- **Dropbox**: `~/Dropbox/Classic Backups`
- **Google Drive**: `~/Google Drive/Classic Backups`
- **OneDrive**: `~/OneDrive/Classic Backups`

## Melhores Práticas

### Cronograma de Backup

- **Backup Automático**: Mantenha habilitado em intervalos de 30 minutos
- **Backup Manual**: Crie antes de mudanças importantes
- **Backup Externo**: Copie backups regularmente para armazenamento externo

### Verificação de Backup

Verifique periodicamente seus backups:

1. Crie uma restauração de teste
2. Verifique o conteúdo das notas
3. Verifique os anexos
4. Confirme os metadados

### Rotação de Backup

- Mantenha backups recentes localmente
- Arquive backups mais antigos para armazenamento externo
- Exclua backups muito antigos para economizar espaço

## Solução de Problemas

### Falha no Backup

**Possíveis causas**

- Espaço em disco insuficiente
- Problemas de permissão
- Arquivo em uso

**Soluções**

1. Verifique o espaço em disco disponível
2. Verifique as permissões da pasta
3. Feche outros aplicativos
4. Tente uma localização diferente

### Falha na Restauração

**Possíveis causas**

- Arquivo de backup corrompido
- Versão incompatível
- Espaço insuficiente

**Soluções**

1. Tente um backup mais antigo
2. Verifique a integridade do arquivo de backup
3. Libere espaço em disco
4. Entre em contato com o suporte

### Backups Faltando

**Possíveis causas**

- Backup automático desabilitado
- Localização do backup mudou
- Backups excluídos

**Soluções**

1. Verifique as configurações de backup
2. Verifique a localização do backup
3. Habilite backup automático
4. Crie um backup manual agora

## Opções Avançadas

### Backups Criptografados

Para segurança adicional:

1. Abra as Configurações
2. Vá para Backup e Restauração
3. Habilite "Criptografar Backups"
4. Defina uma senha
5. Lembre-se desta senha - ela não pode ser recuperada

### Backups Incrementais

Economize espaço com backups incrementais:

- Apenas as alterações desde o último backup são armazenadas
- Restauração completa reconstrói o estado completo
- Reduz tempo e tamanho do backup

### Exclusões de Backup

Exclua conteúdo específico dos backups:

1. Abra as Configurações
2. Vá para Backup e Restauração
3. Clique em "Exclusões"
4. Adicione pastas ou arquivos para excluir
