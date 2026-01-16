import { databaseConfig } from "@invicity/eslint-config/database";

/** @type {import("eslint").Linter.Config} */
export default [
    ...databaseConfig,
    {
        ignores: [
            "**/dist/**",
            "**/node_modules/**"
        ]
    }
];