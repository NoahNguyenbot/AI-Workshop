# Project state
Last updated: 2026-10-14

## Works
- Next.js site (App Router, TypeScript, plain CSS) is live on Vercel at https://ai-workshop-wheat.vercel.app/
- GitHub repo NoahNguyenbot/AI-Workshop exists and is connected to Vercel.
- A Supabase project exists and is linked to the repo. The site uses it for sign-in through @supabase/supabase-js.
- On the live site, a person can create an account with an email and a password and is signed in straight away.
- A signed-in person sees "Signed in as" followed by their email, and stays signed in after closing the tab and opening the site again.
- A person can log out, which brings back the login form.
- Logging in with a wrong password shows an error message and keeps the login form on screen.
- A signed-in person can type a study task and click Add, and it appears in their list.
- A person can tick a task's checkbox to mark it done, and untick it again.
- A person can click Delete to remove a task.
- Tasks, and whether they are ticked, are still there after a reload.
- Each person sees only their own tasks; a second account cannot see the first account's tasks.

## Broken or flaky
- Supabase pauses the free project after a period of no use. When paused, login and sign-up show "Failed to fetch". Fix: Supabase dashboard, open the project, click Restore. Found paused 2026-10-13.

## Environment notes
- Supabase keys belong in .env.local on a local machine and in Vercel under Project Settings, Environment Variables. They never go in chat or in committed files.
- NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY are set in Vercel for both Production and Preview (per Noah, 2026-10-01).
- Email confirmation is turned off in Supabase, so a new account is signed in straight away.
- Supabase's built-in email sender has a low hourly limit. Check the real number under Supabase, Authentication, Rate Limits.
- Assumed: Vercel redeploys automatically when main changes.

## Next session
- Start slice 3, Skill tags and the avoided skill, per roadmap.md.
