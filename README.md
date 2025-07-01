# GTF-ESLint

A shareable ESLint configuration with TypeScript and Prettier integration.

## Description

GTF-ESLint provides a pre-configured ESLint setup that includes:

- TypeScript integration with strict type checking
- Prettier integration for consistent code formatting
- Recommended ESLint rules
- Modern JavaScript support (ECMAScript 2022)

## Installation

Install the package using npm:

```bash
npm install gtf-eslint --save-dev
```

Or using pnpm (recommended):

```bash
pnpm add -D gtf-eslint
```

## Usage

### In your ESLint config file

Create an ESLint config file (e.g., `eslint.config.js`) in your project root:

```javascript
import gtfEslint from 'gtf-eslint/node';

export default [
  ...gtfEslint,
  // Your custom configurations (if needed)
];
```

### Configuration Details

This configuration:

- Ignores the `/dist` directory
- Applies to TypeScript files (`.ts`)
- Uses ECMAScript 2022 features
- Includes recommended ESLint rules
- Includes TypeScript ESLint's recommended and strict type-checking rules
- Configures Prettier with the following settings:
  - 80 character line width
  - 2 space indentation
  - Single quotes
  - Trailing commas
  - Semicolons
  - CRLF line endings
  - And more formatting options

## Customization

You can extend or override the default configuration by adding your own rules:

```javascript
import gtfEslint from 'gtf-eslint/node';

export default [
  ...gtfEslint,
  {
    rules: {
      // Your custom rules here
    }
  }
];
```

## License

This project is licensed under the ISC License.
