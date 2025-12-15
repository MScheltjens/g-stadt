#!/usr/bin/env node
const http = require('http');

const apiUrl = process.env.API_URL || 'http://localhost:3000';
const timeout = 5000;
const url = new URL('/links', apiUrl);

const req = http.get(url, { timeout }, (res) => {
  const { statusCode } = res;
  let raw = '';
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    raw += chunk;
  });
  res.on('end', () => {
    if (statusCode >= 200 && statusCode < 300) {
      try {
        const data = JSON.parse(raw);
        if (Array.isArray(data)) {
          console.log('Smoke test passed: /links returned array.');
          process.exit(0);
        } else {
          console.error('Smoke test failed: /links did not return array.');
          process.exit(2);
        }
      } catch (e) {
        console.error('Smoke test failed: invalid JSON from /links');
        process.exit(2);
      }
    } else {
      console.error(`Smoke test failed: status ${statusCode}`);
      process.exit(2);
    }
  });
});

req.on('error', (err) => {
  console.error('Smoke test failed:', err.message);
  process.exit(2);
});

req.setTimeout(timeout, () => {
  console.error('Smoke test failed: request timed out');
  req.destroy();
  process.exit(2);
});
