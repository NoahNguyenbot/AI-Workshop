# CLAUDE.md

## Stack
- Next.js with the App Router, TypeScript
- Plain CSS only (no Tailwind, no CSS-in-JS libraries)
- Supabase for sign-in and the database
- Deployed on Vercel from the main branch of NoahNguyenbot/AI-Workshop
- Live site: https://ai-workshop-wheat.vercel.app/

## Commands
- `npm install` installs dependencies
- `npm run dev` runs the site locally at http://localhost:3000
- `npm run build` builds the site the way Vercel will; run it before any pull request
- `npm run lint` checks code style
If package.json lists different script names, the package.json names are correct; say so and update this section.

## Never
- Add a dependency without asking first.
- Edit .env, .env.local, or any environment variable.
- Change auth configuration without saying what is changing and why.
- Create new top-level folders.
- Put passwords, API keys, or connection strings in code, commits, or chat.
- Use real personal data. Fake names and fake content only.
- Work on anything outside the slice marked ACTIVE in roadmap.md.

## Conventions
- Every Supabase table has row level security turned on, with policies so each user can read and change only their own rows.
- Work on a branch and open a pull request; do not push straight to main.
- After a change, explain in plain language what changed and why, show the diff, and stop before committing unless the prompt says otherwise.
- Keep roadmap.md and project-state.md accurate. If work changes what they say, say which lines need updating.
- Test data uses obviously fake content, such as "Review 20 flashcards".

## Current focus
See roadmap.md. Work only on the slice marked ACTIVE.
