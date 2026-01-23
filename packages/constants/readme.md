# @invicity/constants

Shared constants used across knowhere applications and packages.

This package centralizes static values to ensure consistency between
frontend, backend, and shared tooling.

---

## Purpose

Constants provide a single source of truth for values that:

- Do not change at runtime
- Are used in multiple places
- Must stay in sync across apps

---

## What belongs in this package

- Route definitions
- Locale identifiers
- Enums
- Static configuration values
- Feature flags

---

## What does NOT belong here

- Environment-specific values
- Secrets
- Business logic

---

## Usage

import { ROUTES, LOCALES } from '@invicity/constants';

yaml
Copy code

---

## Used by

- apps/web
- apps/api
- packages/ui
- packages/i18n
