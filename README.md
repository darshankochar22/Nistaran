# NISTARAN Solutions

Marketing site for NISTARAN Solutions — positioning diagnostics for education and sales businesses in Chhattisgarh. Built with Next.js (App Router), Tailwind CSS, and a Supabase-style component system (Button/Badge/Card/Accordion ported from `@supabase/supabase`'s `packages/ui`).

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

The site works out of the box with the existing Firebase project and admin password baked in as defaults. To override them, set:

- `NEXT_PUBLIC_FIREBASE_API_KEY`, `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`, `NEXT_PUBLIC_FIREBASE_PROJECT_ID`, `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`, `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`, `NEXT_PUBLIC_FIREBASE_APP_ID` — Firebase Web SDK config (public by design; access is controlled by Firestore security rules, not by hiding these).
- `ADMIN_PASSWORD` — password for the `#admin` panel (visit counter + recent leads). Checked server-side in `src/app/api/admin/route.ts`, never shipped to the client bundle.

## Deploy

Deploys to Vercel on push to `main`.
