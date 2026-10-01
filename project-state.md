# Project state
Last updated: 2026-10-01

## Works
- Next.js site (App Router, TypeScript, plain CSS) is live on Vercel at https://ai-workshop-wheat.vercel.app/
- GitHub repo NoahNguyenbot/AI-Workshop exists and is connected to Vercel.
- A Supabase project exists and is linked to the repo. The site uses it for sign-in through @supabase/supabase-js.
- On the live site, a person can create an account with an email and a password and is signed in straight away.
- A signed-in person sees "Signed in as" followed by their email, and stays signed in after closing the tab and opening the site again.
- A person can log out, which brings back the login form.
- Logging in with a wrong password shows an error message and keeps the login form on screen.

## Broken or flaky
- Nothing known.

## Environment notes
- Supabase keys belong in .env.local on a local machine and in Vercel under Project Settings, Environment Variables. They never go in chat or in committed files.
- NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY are set in Vercel for both Production and Preview (per Noah, 2026-10-01).
- Email confirmation is turned off in Supabase, so a new account is signed in straight away.
- Supabase's built-in email sender has a low hourly limit. Check the real number under Supabase, Authentication, Rate Limits.
- Assumed: Vercel redeploys automatically when main changes.

## Next session
- Check slice 1 on the pull request's preview link against its done-criteria, then merge.
- Then start slice 2, Tasks that stay put, per roadmap.md.
