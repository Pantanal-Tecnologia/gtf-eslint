# Guia de Migração - GTF ESLint

Este documento explica as principais melhorias implementadas na configuração do ESLint, seguindo os novos padrões do typescript-eslint.

## 🚀 Principais Melhorias

### 1. **Linting com Type Information**

**Antes:**
```javascript
parserOptions: {
  project: ["./tsconfig.node.json", "./tsconfig.app.json"],
  tsconfigRootDir: import.meta.dirname,
}
```

**Depois:**
```javascript
parserOptions: {
  projectService: true,
  tsconfigRootDir: import.meta.dirname,
}
```

**Benefícios:**
- ✅ Melhor performance em projetos grandes
- ✅ Análise estática mais precisa
- ✅ Melhor integração com TypeScript
- ✅ Configuração mais simples

### 2. **Configurações Completas do TypeScript**

**Antes:**
```javascript
extends: [
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.strictTypeChecked,
]
```

**Depois:**
```javascript
extends: [
  ...tseslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.strict,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylistic,
  ...tseslint.configs.stylisticTypeChecked,
]
```

**Benefícios:**
- ✅ Todas as regras recomendadas habilitadas
- ✅ Regras strict para máxima segurança
- ✅ Regras stylistic para consistência de código
- ✅ Cobertura completa de linting

### 3. **Configurações Separadas por Tipo de Arquivo**

**Antes:** Configuração única para todos os arquivos

**Depois:** Configurações específicas para:
- **TypeScript/TSX**: Com linting tipado completo
- **JavaScript/JSX**: Sem linting tipado para compatibilidade

**Benefícios:**
- ✅ Melhor performance para arquivos JS
- ✅ Linting apropriado para cada tipo de arquivo
- ✅ Suporte para projetos híbridos (TS + JS)

### 4. **Regras Avançadas do TypeScript**

**Novas regras adicionadas:**
```javascript
// Nullish coalescing e optional chaining
"@typescript-eslint/prefer-nullish-coalescing": "error",
"@typescript-eslint/prefer-optional-chain": "error",

// Imports de tipos consistentes
"@typescript-eslint/consistent-type-imports": [
  "error",
  {
    prefer: "type-imports",
    disallowTypeAnnotations: false,
  },
],

// Detecção de condições desnecessárias
"@typescript-eslint/no-unnecessary-condition": "warn",
```

**Benefícios:**
- ✅ Código mais seguro e moderno
- ✅ Melhor uso de recursos do TypeScript
- ✅ Consistência na importação de tipos

### 5. **Configurações de Estilo Otimizadas**

**React:**
- `printWidth: 120` (padrão React)
- `semi: false` (padrão React)
- Integração com `prettier-plugin-tailwindcss`

**Node.js:**
- `printWidth: 80` (padrão Node.js)
- `semi: true` (padrão Node.js)
- Regras específicas para ambiente Node.js

## 📋 Regras de Migração

### Regras Removidas/Substituídas

| Antiga | Nova | Motivo |
|--------|------|---------|
| `project` | `projectService: true` | Melhor performance |
| Configuração única | Configurações separadas | Melhor organização |
| Regras básicas | Regras completas | Cobertura total |

### Regras Adicionadas

| Regra | Descrição | Nível |
|-------|-----------|-------|
| `@typescript-eslint/prefer-nullish-coalescing` | Força uso de `??` | Error |
| `@typescript-eslint/prefer-optional-chain` | Força uso de `?.` | Error |
| `@typescript-eslint/consistent-type-imports` | Imports de tipos consistentes | Error |
| `@typescript-eslint/no-unnecessary-condition` | Detecta condições desnecessárias | Warn |

## 🔧 Como Aplicar as Melhorias

### 1. **Atualizar Dependências**
```bash
pnpm update typescript-eslint
```

### 2. **Substituir Configuração**
```javascript
// Antes
parserOptions: {
  project: ["./tsconfig.node.json", "./tsconfig.app.json"],
}

// Depois
parserOptions: {
  projectService: true,
}
```

### 3. **Adicionar Configurações Completas**
```javascript
extends: [
  ...tseslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.strict,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylistic,
  ...tseslint.configs.stylisticTypeChecked,
]
```

### 4. **Configurar TypeScript**
Certifique-se de ter um `tsconfig.json` válido com:
- `strict: true`
- `allowJs: true`
- `esModuleInterop: true`

## ⚠️ Possíveis Problemas

### 1. **Erro de Type Information**
```
Error: You must provide a value for the 'project' option when using rules that require type information.
```

**Solução:** Verifique se o `tsconfigRootDir` está correto e se o `tsconfig.json` existe.

### 2. **Performance Lenta**
**Solução:** O `projectService: true` deve melhorar a performance. Se ainda estiver lento, considere usar apenas em IDEs.

### 3. **Regras Muito Restritivas**
**Solução:** Ajuste o nível das regras de `error` para `warn` conforme necessário.

## 📚 Recursos Adicionais

- [Documentação Oficial typescript-eslint](https://typescript-eslint.io/)
- [Guia de Linting com Type Information](https://typescript-eslint.io/getting-started/typed-linting)
- [Regras Disponíveis](https://typescript-eslint.io/rules/)
- [Configurações Compartilhadas](https://typescript-eslint.io/getting-started/typed-linting#shared-configurations)

## 🤝 Suporte

Se encontrar problemas durante a migração:
1. Verifique se todas as dependências estão atualizadas
2. Confirme que o `tsconfig.json` está configurado corretamente
3. Teste com configurações básicas primeiro
4. Abra uma issue no repositório para suporte
