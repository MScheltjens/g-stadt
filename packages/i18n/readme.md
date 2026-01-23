# @invicity/i18n

Internationalization utilities for knowhere applications.

This package provides shared helpers and configuration for multi-language
support across the frontend.

---

## Purpose

The i18n package centralizes internationalization logic to ensure consistent
locale handling and translation usage throughout the application.

---

## Responsibilities

- Locale detection
- Translation hooks and helpers
- Shared message loading
- Typed translation utilities

---

## What does NOT belong here

- UI components
- App-specific copy
- Routing or navigation logic

---

## Usage

import { useTranslations, useLocale } from '@invicity/i18n';

yaml
Copy code

---

## Notes

- Locale is derived from routing
- Providers should receive locale explicitly
- UI components should consume locale via hooks

---

## Used by

- apps/web
