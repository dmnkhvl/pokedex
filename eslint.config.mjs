import next from 'eslint-plugin-next'
import tseslint from '@typescript-eslint/eslint-plugin'
import js from '@eslint/js'
import prettier from 'eslint-plugin-prettier'
import tailwindcss from 'eslint-plugin-tailwindcss'
import imports from 'eslint-plugin-unused-imports'

export default [
  js.configs.recommended, // Use ESLint recommended settings
  next.configs['core-web-vitals'], // Next.js recommended config
  {
    plugins: {
      '@typescript-eslint': tseslint,
      prettier,
      tailwindcss,
      'unused-imports': imports,
    },
    rules: {
      'prettier/prettier': 'warn',
      'tailwindcss/classnames-order': 'warn', // Ensure Tailwind classes are sorted
      'tailwindcss/no-custom-classname': 'off', // Allow custom class names
      'unused-imports/no-unused-imports': 'error', // REMOVE UNUSED IMPORTS
      'unused-imports/no-unused-vars': [
        'warn',
        { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
      ],
    },
  },
]
