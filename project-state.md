# Project state
Last updated: 2026-09-25

## Works
- Next.js site (App Router, TypeScript, plain CSS) is live on Vercel at https://ai-workshop-wheat.vercel.app/
- GitHub repo NoahNguyenbot/AI-Workshop exists and is connected to Vercel.
- A Supabase project exists and is linked to the repo. The site does not use it yet.

## Broken or flaky
- Nothing known. The site has no features yet beyond the starter page.

## Environment notes
- Supabase keys belong in .env.local on a local machine and in Vercel under Project Settings, Environment Variables. They never go in chat or in committed files.
- Not yet confirmed: whether the Supabase URL and key are already set in Vercel's environment variables. Check this before starting slice 1.
- Supabase's built-in email sender has a low hourly limit. Check the real number under Supabase, Authentication, Rate Limits.
- Assumed: Vercel redeploys automatically when main changes.

## Next session
- Start slice 1, Sign up and log in, per roadmap.md.
- Expect Claude Code to ask before adding the Supabase libraries (likely @supabase/supabase-js and @supabase/ssr).
- Open question: keep email confirmation on (current plan) or turn it off for the demo. Undecided.
