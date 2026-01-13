# Migration Plan: zod-prisma-types → prisma-zod-generator

1. **Install prisma-zod-generator**
   - Run: `pnpm add -D prisma-zod-generator`

2. **Update your Prisma schema**
   - In `packages/database/prisma/schema.prisma`, replace the `zod-prisma-types` generator block with:

```
generator zod {
  provider = "prisma-zod-generator"
  output   = "./.generated/zod"
}
```

3. **Remove zod-prisma-types**
   - Run: `pnpm remove zod-prisma-types`

4. **Update build scripts**
   - Remove the cleanup script from your build steps in `packages/database/package.json`.
   - You can now use just: `prisma generate` for Zod types.

5. **Generate Zod schemas**
   - Run: `pnpm --filter @repo/database run db:generate`

6. **Test and fix imports**
   - Check your codebase for any import path or type changes in the generated Zod schemas.
   - Update usages as needed (see the [prisma-zod-generator docs](https://github.com/omar-dulaimi/prisma-zod-generator)).

7. **Commit and push**
   - Commit your changes and push to your repository.

---

For more options and advanced configuration, see:
https://github.com/omar-dulaimi/prisma-zod-generator
