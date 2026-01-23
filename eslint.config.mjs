import { libraryConfig } from '@kwh/eslint-config/library';
import tsParser from '@typescript-eslint/parser';

export default [
    {
        ignores: ['apps/**', 'packages/**', 'dist/**', 'node_modules/**'],
    },
    ...libraryConfig,
    {
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                project: true,
            },
        },
    },
    {
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/unbound-method': 'off',
        },
    },
];
