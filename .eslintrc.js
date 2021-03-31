module.exports = {
  "root": true,
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.eslint.json",
    "tsconfigRootDir": __dirname
  },
  "plugins": [
    "@typescript-eslint",
    "react",
    "react-hooks",
  ],
  "extends": [
    "airbnb-typescript",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  "env": {
    "browser": true
  },
  "rules": {
    "import/no-named-as-default": "off",
    "import/no-named-as-default-member": "off",
    "no-underscore-dangle": "off",
    "spaced-comment": ["error", "always", {
      "markers": ["/"]
    }],
    "react/jsx-props-no-spreading": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "react/prop-types": "off",
    "react/no-array-index-key": "warn",
    "react/require-default-props": "off",
    "max-lines": ["error", { "max": 250 }],
    "@typescript-eslint/ban-ts-ignore": "warn",
    "@typescript-eslint/camelcase": "off"
  },
  "overrides": [
    {
      "files": ["src/**/__storybook__/**/*", "index.ts"],
      "rules": {
        "import/prefer-default-export": "off"
      }
    },
    {
      "files": ["*.stories.*", "src/**/__storybook__/*"],
      "rules": {
        "import/no-extraneous-dependencies": "off",
        "no-alert": "off",
        "max-lines": "off"
      }
    }
  ]
};
