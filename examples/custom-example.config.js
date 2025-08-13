// Exemplo de configuração ESLint personalizada
// eslint.config.js

import reactConfig from '../react.js';
import nodeConfig from '../node.js';

export default [
  // Configuração base do React
  ...reactConfig,
  
  // Configuração base do Node.js
  ...nodeConfig,
  
  // Configurações personalizadas do projeto
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    rules: {
      // Regras personalizadas específicas do projeto
      '@typescript-eslint/no-console': 'warn',
      '@typescript-eslint/no-debugger': 'error',
      
      // Regras de importação personalizadas
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'always',
        },
      ],
      
      // Regras de React personalizadas
      'react/jsx-uses-react': 'off', // Não necessário no React 17+
      'react/react-in-jsx-scope': 'off', // Não necessário no React 17+
      
      // Regras de acessibilidade
      'jsx-a11y/alt-text': 'error',
      'jsx-a11y/anchor-has-content': 'error',
      'jsx-a11y/anchor-is-valid': 'error',
    },
  },
  
  // Configuração específica para testes
  {
    files: ['**/*.test.{ts,tsx,js,jsx}', '**/*.spec.{ts,tsx,js,jsx}'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
    },
  },
  
  // Configuração para arquivos de configuração
  {
    files: ['*.config.{js,mjs}', '*.config.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
      'no-process-exit': 'off',
    },
  },
];
