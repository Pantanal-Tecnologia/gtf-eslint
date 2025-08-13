import js from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import tseslint from "typescript-eslint";

export default tseslint.config({
  ignores: ["/dist"],
  extends: [
    eslintPluginPrettierRecommended,
    js.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.strictTypeChecked,
  ],
  files: ["**/*.{ts,tsx,js}"],
  languageOptions: {
    ecmaVersion: 2022,
  },
  rules: {
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
        endOfLine: "crlf",
        quoteProps: "as-needed",
        embeddedLanguageFormatting: "auto",
        proseWrap: "preserve",
        htmlWhitespaceSensitivity: "css",
        vueIndentScriptAndStyle: false,
        jsxSingleQuote: false,
        insertPragma: false,
        requirePragma: false,
        endOfLine: "auto",
        quoteProps: "as-needed",
        jsxSingleQuote: false,
        insertPragma: false,
        requirePragma: false,
        endOfLine: "auto",
        quoteProps: "as-needed",
        embeddedLanguageFormatting: "auto",
      },
    ],
  },
});
