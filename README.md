# startproj

A Next.js app using the App Router, Tailwind CSS, Drizzle ORM, Neon, and Docker Compose for local development.

## Requirements

- Node.js 20.9 or newer
- npm
- Docker Desktop

## Environment

Create a `.env.local` file in the project root. At minimum, the database connection needs:

```env
DATABASE_URL="postgresql://user:password@host/database?sslmode=require"
```

Use `.env.example` as the safe template. Real `.env*` files are ignored by Git.

## Local Development

Install dependencies:

```bash
npm install
```

Run the app locally:

```bash
npm run dev
```

Open http://localhost:3000.

## Docker Development

Run the app with Docker Compose:

```bash
docker compose up --build
```

The Compose setup automatically loads `.env.local` into the container.

## Useful Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Current Notes

- The Dockerfile uses Node 20 because Next.js 16 requires Node 20.9 or newer.
- `next.config.ts` enables standalone output for production Docker builds.
- Database access is initialized in `src/index.ts` with Drizzle's Neon HTTP driver.
