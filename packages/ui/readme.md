# @invicity/ui

Shared UI components and design system for the knowhere applications.

This package provides reusable, consistent UI primitives used by the frontend.

---

## Purpose

The UI package ensures a consistent look and feel across all applications by
centralizing visual components and design decisions.

---

## What belongs in this package

- Reusable UI components (buttons, inputs, navigation, etc.)
- Layout primitives
- Icons
- Tailwind theme tokens
- Accessibility-focused components

---

## Design principles

- Civic and professional (not playful)
- Accessible by default
- No app-specific business logic
- Composable over configurable

---

## Usage

import { Button } from '@invicity/ui/components/button';

yaml
Copy code

---

## Notes

- Client-side components only
- Requires Tailwind CSS
- Depends on shared constants and theme tokens

---

## Used by

- apps/web
