import js from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import tseslint from "typescript-eslint";

export default tseslint.config({
	ignores: ["/dist"],
	extends: [
		js.configs.recommended,
		tseslint.configs.strictTypeChecked,
		tseslint.configs.stylisticTypeChecked,
		eslintPluginPrettierRecommended,
	],
	files: ["**/*.{ts,tsx,js}"],
	languageOptions: {
		ecmaVersion: 2022,
		parserOptions: {
			projectService: true,
			tsconfigRootDir: import.meta.dirname,
		},
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
				endOfLine: "auto",
				quoteProps: "as-needed",
				embeddedLanguageFormatting: "auto",
				proseWrap: "preserve",
				htmlWhitespaceSensitivity: "css",
				vueIndentScriptAndStyle: false,
				jsxSingleQuote: false,
				insertPragma: false,
				requirePragma: false
			},
		],
	},
});