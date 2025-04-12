module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['src/**/*.ts?(x)', 'src/**/*.js?(x)'],
      rules: {
        'react-hooks/exhaustive-deps': 'off',
        'jsx-a11y/alt-text': 'off',
        'import/no-anonymous-default-export': 'off',
        'default-case': 'off',
        'no-undef': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        'no-extra-boolean-cast': 'off',
        'no-empty': 'off',
        'no-prototype-builtins': 'off',
        'no-case-declarations': 'warn',
        'no-useless-escape': 'warn',
        'prefer-const': 'off',
      },
    },
  ],
};
