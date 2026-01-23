# Web Application

Next.js frontend for the **knowhere** digital city portal.

This application is the public-facing website used by residents and visitors
to access city information, services, and content.

---

## Role in the Monorepo

The web app is responsible for:

- Rendering the user interface
- Navigation and layout
- Client-side interactions
- Internationalized content

It consumes the public API and shared packages from this repository.

---

## Shared Packages Used

- @invicity/ui
- @invicity/i18n
- @invicity/contracts
- @invicity/constants

---

## Development

Start the development server:

pnpm dev

yaml
Copy code

The app runs at: http://localhost:3001

---

## Notes

- Uses Next.js App Router
- Modals are implemented via routing
- Locale is derived from the URL
