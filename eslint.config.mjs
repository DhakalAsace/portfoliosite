import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Extend Next.js core web vitals and TypeScript rules
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    // Custom rules
    rules: {
      'react-hooks/exhaustive-deps': 'warn', // Adjust rule level here
    },
  },
];

export default eslintConfig;
