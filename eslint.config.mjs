import prettier from 'eslint-config-prettier';
import next from 'eslint-config-next';

const eslintConfig = [
  ...next.configs['core-web-vitals'],
  prettier,
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
    },
  },
];

export default eslintConfig;