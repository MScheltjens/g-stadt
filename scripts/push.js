#!/usr/bin/env node
const { spawn } = require('child_process');

// Simple wrapper: node scripts/push.js [--fast] [git-push-args...]
const args = process.argv.slice(2);
let fast = false;
const gitArgs = [];
for (const a of args) {
  if (a === '--fast') fast = true;
  else gitArgs.push(a);
}

const env = { ...process.env };
if (fast) env.PUSH_FAST = '1';

const git = spawn('git', ['push', ...gitArgs], { stdio: 'inherit', env });
git.on('exit', (code) => process.exit(code));
