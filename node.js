import js from "@eslint/js";
import globals from "globals";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist", "build", "node_modules", "*.config.js", "*.config.mjs"] },
  
  // Configuração para arquivos TypeScript (com linting tipado)
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.strict,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylistic,
      ...tseslint.configs.stylisticTypeChecked,
      eslintPluginPrettierRecommended,
    ],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.es2022,
      },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "no-process-exit": "error",
      "no-sync": "warn",
      "no-path-concat": "error",
      "@typescript-eslint/no-misused-promises": "off",
      "@typescript-eslint/no-unsafe-member-access": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unsafe-assignment": "warn",
      "@typescript-eslint/no-unsafe-call": "warn",
      "@typescript-eslint/no-unsafe-return": "warn",
      "@typescript-eslint/prefer-nullish-coalescing": "error",
      "@typescript-eslint/prefer-optional-chain": "error",
      "@typescript-eslint/no-unnecessary-condition": "warn",
            "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          disallowTypeAnnotations: false,
        },
      ],
      "@typescript-eslint/consistent-type-exports": "error",
      "@typescript-eslint/no-import-type-side-effects": "error",
      
      "prettier/prettier": [
        "error",
        {
          printWidth: 80,
          tabWidth: 2,
          useTabs: false,
          singleQuote: true,
          trailingComma: "all",
          arrowParens: "always",
          bracketSpacing: true,
          bracketSameLine: false,
          semi: true,
          endOfLine: "auto",
          quoteProps: "as-needed",
          embeddedLanguageFormatting: "auto",
          proseWrap: "preserve",
          htmlWhitespaceSensitivity: "css",
          vueIndentScriptAndStyle: false,
          jsxSingleQuote: false,
          insertPragma: false,
          requirePragma: false,
        },
      ],
    },
  },
    {
    files: ["**/*.{js,mjs}"],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.strict,
      ...tseslint.configs.stylistic,
      eslintPluginPrettierRecommended,
    ],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.es2022,
      },
    },
    rules: {
      "no-process-exit": "error",
      "no-sync": "warn",
      "no-path-concat": "error",
      "prettier/prettier": [
        "error",
        {
          printWidth: 80,
          tabWidth: 2,
          useTabs: false,
          singleQuote: true,
          trailingComma: "all",
          arrowParens: "always",
          bracketSpacing: true,
          bracketSameLine: false,
          semi: true,
          endOfLine: "auto",
          quoteProps: "as-needed",
          embeddedLanguageFormatting: "auto",
          proseWrap: "preserve",
          vueIndentScriptAndStyle: false,
          jsxSingleQuote: false,
          insertPragma: false,
          requirePragma: false,
        },
      ],
    },
  },
);