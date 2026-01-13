// This script removes unused 'Prisma' imports from generated zod files
// Usage: node scripts/cleanup-zod-imports.js

const fs = require('fs');
const path = require('path');

const GENERATED_DIR = path.join(
  __dirname,
  '../packages/database/prisma/.generated/zod',
);
const TARGET_FILE = path.join(GENERATED_DIR, 'index.ts');

function removeUnusedPrismaImport(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  // Remove 'import type { Prisma } from ...' if Prisma is not used
  const importRegex = /^import type \{ Prisma \} from '@prisma\/client';\n?/m;
  if (importRegex.test(content)) {
    // Check if 'Prisma' is used elsewhere
    const used = /Prisma\s*\./.test(content);
    if (!used) {
      content = content.replace(importRegex, '');
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Removed unused Prisma import from ${filePath}`);
    }
  }
}

removeUnusedPrismaImport(TARGET_FILE);
