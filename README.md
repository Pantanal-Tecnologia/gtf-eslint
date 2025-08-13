# GTF ESLint Config

Configurações otimizadas do ESLint para projetos React e Node.js com TypeScript, seguindo os mais recentes padrões do typescript-eslint.

## 🚀 Características

- **Linting com Type Information**: Configuração completa com `projectService: true` para análise estática avançada
- **Configurações separadas**: React (TSX) e Node.js com regras específicas para cada ambiente
- **Regras modernas**: Inclui todas as configurações recomendadas, strict e stylistic do typescript-eslint
- **Integração Prettier**: Configuração otimizada para formatação consistente
- **Suporte React**: Regras específicas para React Hooks, Refresh e DOM
- **Performance otimizada**: Usa `projectService` em vez de `project` para melhor performance

## 📦 Instalação

```bash
pnpm add -D gtf-eslint
```

## 🔧 Uso

### Para projetos React

```javascript
// eslint.config.js
import reactConfig from 'gtf-eslint/react';

export default reactConfig;
```

### Para projetos Node.js

```javascript
// eslint.config.js
import nodeConfig from 'gtf-eslint/node';

export default nodeConfig;
```

## ⚡ Principais Melhorias Implementadas

### 1. **Linting com Type Information**
- Substituído `project` por `projectService: true` para melhor performance
- Configurações `recommendedTypeChecked`, `strictTypeChecked` e `stylisticTypeChecked`
- Análise estática completa com informações de tipos do TypeScript

### 2. **Configurações Separadas por Tipo de Arquivo**
- **TypeScript/TSX**: Linting completo com type checking
- **JavaScript/JSX**: Linting sem type checking para compatibilidade
- **Configurações específicas**: React para frontend, Node.js para backend

### 3. **Regras Avançadas do TypeScript**
- `@typescript-eslint/prefer-nullish-coalescing`: Força uso de `??` em vez de `||`
- `@typescript-eslint/prefer-optional-chain`: Força uso de `?.` para acesso seguro
- `@typescript-eslint/consistent-type-imports`: Imports de tipos consistentes
- `@typescript-eslint/no-unnecessary-condition`: Detecta condições desnecessárias

### 4. **Configurações de Estilo**
- **React**: `printWidth: 120`, `semi: false` (padrão React)
- **Node.js**: `printWidth: 80`, `semi: true` (padrão Node.js)
- Integração com `prettier-plugin-tailwindcss` para React

### 5. **Performance e Compatibilidade**
- `projectService: true` para melhor performance em projetos grandes
- Suporte para arquivos `.mjs` e `.js`
- Configurações específicas para diferentes ambientes

## 📋 Regras Principais

### TypeScript (Com Type Checking)
- Análise estática completa de tipos
- Detecção de uso inseguro de `any`
- Verificação de condições desnecessárias
- Imports e exports de tipos consistentes

### React
- Regras para React Hooks
- Fast Refresh para desenvolvimento
- Regras específicas para JSX/TSX
- Integração com React DOM

### Node.js
- Regras específicas para ambiente Node.js
- Prevenção de operações síncronas bloqueantes
- Verificação de paths seguros

## 🔍 Troubleshooting

### Erro de Type Information
Se você receber erros sobre type information, verifique se:
1. Seu `tsconfig.json` está configurado corretamente
2. O `tsconfigRootDir` está apontando para o diretório correto
3. Todas as dependências do TypeScript estão instaladas

### Performance
- `projectService: true` é mais rápido que `project` para projetos grandes
- O linting tipado pode ser mais lento inicialmente, mas oferece análises mais profundas
- Use em IDEs para melhor experiência de desenvolvimento

## 📚 Referências

- [typescript-eslint Typed Linting](https://typescript-eslint.io/getting-started/typed-linting)
- [ESLint Flat Config](https://eslint.org/docs/latest/use/configure/configuration-files-new)
- [TypeScript ESLint Rules](https://typescript-eslint.io/rules/)

## 🤝 Contribuição

Contribuições são bem-vindas! Por favor, abra uma issue ou pull request para melhorias.

## 📄 Licença

ISC
