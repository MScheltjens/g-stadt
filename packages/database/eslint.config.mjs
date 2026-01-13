import { databaseConfig } from "@repo/eslint-config/database";

/** @type {import("eslint").Linter.Config} */
export default [
    ...databaseConfig,
    {
        ignores: ["**/dist/**", "**/node_modules/**"]
    }
]; 