import { libraryConfig } from "@repo/eslint-config/library";

/** @type {import("eslint").Linter.Config} */
export default [
    ...libraryConfig,
    {
        ignores: ["prisma/.generated/zod/**", "**/dist/**", "**/node_modules/**"]
    }
]; 