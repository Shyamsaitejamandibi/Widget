# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# Widget Clone

Welcome to my Widget clone Project! This project utilizes the Shadcn UI library for styling and Recharts for data visualization.

## Installation

To get started with this project, follow these steps:

Clone the repository:

```bash
git clone https://github.com/Shyamsaitejamandibi/Widget
```

Navigate to the project directory:

```js
cd Widget
```

Install dependencies:

```js
npm install
```

# Usage

## Shadcn UI Library

I used the Shadcn UI library to create a beautiful and consistent user interface.

For more information on using Shadcn UI, please refer to the [documentation](https://ui.shadcn.com/).

## Recharts

I utilized Recharts to create stunning and interactive charts for data visualization.

For more information on using Recharts, please refer to the [documentation](https://recharts.org/en-US/).
