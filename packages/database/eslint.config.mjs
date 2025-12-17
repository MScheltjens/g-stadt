import { libraryConfig } from "@repo/eslint-config/library";

/** @type {import("eslint").Linter.Config} */
export default [
    ...libraryConfig,
    {
        ignores: ["**/prisma/generated/**", "**/dist/**", "**/node_modules/**"]
    }
]; 