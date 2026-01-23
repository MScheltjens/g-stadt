# API Application

NestJS backend API for the **knowhere** platform.

The API provides data and services consumed by the web application
and defines the public backend interface of the platform.

---

## Role in the Monorepo

The API is responsible for:

- Business logic
- Authentication and authorization
- Data persistence
- Public HTTP endpoints

---

## Shared Packages Used

- @invicity/contracts
- @invicity/constants

---

## Development

Start the API in development mode:

pnpm --filter api dev

yaml
Copy code

The API runs at:
http://localhost:3000

---

## Build Notes

Before building or testing the API, shared packages must be built:

pnpm build --filter ./packages/\*

yaml
Copy code

---

## Notes

- Database models are not exposed to clients
- All public data structures are defined in @invicity/contracts
