module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react"],
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  rules: {
    "no-console": "error"
  },
  "husky":{
    "hooks":{
        "pre-commit":"npm run lint"
    }
  },
  "lint-staged":{
    "*.js":"eslint --cache --fix"
  }
};
