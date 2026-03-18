# Arquitetura Local-First

O Classic é construído com privacidade como base. Seus dados ficam no seu dispositivo, sempre.

## O Que Significa "Local-First"?

Local-first significa:

1. **Seus dados são armazenados localmente** em seu computador. Todas as suas notas, anexos e configurações são armazenados em uma pasta no seu computador.
2. **Nenhuma nuvem necessária** O Classic funciona sem conexão à internet.
3. **Você é dono dos seus dados** Você tem controle completo sobre seus dados.

## Armazenamento de Dados

### Localização Padrão

Seus dados são armazenados em uma pasta dedicada:

| Plataforma | Localização |
| ---------- | ----------- |
| **macOS** | `~/Library/Application Support/Classic/notes` |
| **Windows** | `%APPDATA%\Classic\notes` |
| **Linux** | `~/.config/Classic/notes` |

### Formato dos Dados

- Notas são armazenadas como arquivos de texto simples (`.md`)
- Anexos são armazenados em uma subpasta `attachments`
- Configurações são armazenadas em `settings.json`

### Estrutura de Arquivos

```
notes/
├── Inbox/
├── Notas Diárias/
│   └── 2024-01-15.md
├── Projetos/
│   ├── Meu Projeto.md
│   └── sub-nota.md
└── attachments/
    └── imagem.png
settings.json
```

## Benefícios de Privacidade

### Nenhuma Conta Necessária

- Não é necessário cadastro
- Sem verificação de email
- Nenhuma informação pessoal coletada

### Sem Rastreamento

- Sem analytics
- Sem telemetria
- Nenhum dado de uso enviado para servidores externos

### Capaz de Funcionar Offline

- Funciona sem internet
- Sincroniza apenas quando você escolhe
- Seus dados estão sempre acessíveis

## Segurança de Dados

### Sua Responsabilidade

- **Backups**: Configure backups automáticos nas Configurações
- **Exportações**: Exporte seus dados regularmente
- **Atualizações**: Mantenha o Classic atualizado para correções de segurança

### Nossa Responsabilidade

- **Armazenamento local**: Nunca vemos ou tocamos seus dados
- **Sem backdoors**: Nenhuma coleta de dados oculta
- **Transparência**: Abertos e honestos sobre o manuseio de dados

## Sincronização (Opcional)

O Classic não inclui sincronização na nuvem integrada. No entanto, você pode sincronizar seus dados:

### Usando iCloud/OneDrive/Dropbox

1. Abra as Configurações do Classic
2. Mude a localização da pasta de Notas para sua pasta na nuvem
3. O Classic sincronizará através do seu provedor de nuvem

### Usando Git

1. Inicialize um repositório git na sua pasta de notas
2. Faça commit e push das alterações manualmente ou com automação

## Recuperação de Dados

### A partir de Backup

1. Abra as Configurações
2. Vá para Backup e Restauração
3. Selecione um arquivo de backup
4. Clique em Restaurar

### Recuperação Manual

1. Localize sua pasta de notas
2. Copie os arquivos para um local seguro
3. Importe em uma nova instalação do Classic

## Perguntas Frequentes

### Meus dados são realmente privados?

**Sim.** Seus dados nunca saem do seu dispositivo a menos que você os sincronize explicitamente usando um serviço de terceiros.

### Posso mover meus dados para outro computador?

**Sim.** Simplesmente copie sua pasta de notas para o novo computador e aponte o Classic para ela nas configurações.

### O que acontece se eu desinstalar o Classic?

**Seus dados permanecem.** Desinstalar o Classic não exclui sua pasta de notas. Você pode desinstalar e reinstalar com segurança sem perder dados.

### O Classic pode acessar meus dados?

**Não.** O Classic é um aplicativo local sem conectividade externa para coleta de dados.
