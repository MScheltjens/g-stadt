# @invicity/contracts

Shared API contracts for type-safe communication between frontend and backend.

This package defines the **public data structures** exposed by the API and
consumed by client applications.

---

## Purpose

The goal of this package is to provide a clear and stable boundary between
backend implementation details and frontend consumers.

Contracts ensure that:

- Frontend and backend agree on data shape
- Internal database models are never exposed
- API evolution is explicit and safe

---

## What belongs in this package

- DTOs (Data Transfer Objects)
- API request and response types
- Validation schemas (e.g. Zod)
- Shared enums related to API data

---

## What does NOT belong here

- Database entities or ORM models
- Business logic
- UI-related types

---

## Usage

import { UserDto } from '@invicity/contracts';

yaml
Copy code

---

## Used by

- apps/api
- apps/web
