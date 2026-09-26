# Roadmap

## What this is
A study task list for people learning a language. You sign in, add study tasks tagged with a skill such as Speaking or Reading, and the site shows which skill you have been avoiding.

## What Done means
A stranger can open https://ai-workshop-wheat.vercel.app/, create an account with an email and password, add study tasks that each carry one of five skill tags (Listening, Speaking, Reading, Writing, Vocabulary), tick tasks off, and see a count of completed tasks per skill with the lowest-count skill or skills marked "Avoiding". When they log out and log back in, their tasks are still there, and no other account can see them. Nothing beyond this is required to call the project finished.

## Slices
1. Sign up and log in | done-criteria: (a) On the live site, click Sign up, enter an email you control and a password, click the link in the confirmation email, and land on the site showing "Signed in as" followed by that email. (b) Click Log out and reload: the login form shows and the email does not. (c) Log in with the right email and a wrong password: an error message appears and the login form is still showing. (d) Log in, close the tab, open the site in a new tab: it still shows "Signed in as" with your email. | status: ACTIVE
2. Tasks that stay put | done-criteria: (a) Signed in, type "Review 20 flashcards" and click Add: it appears in the list, and after a reload it is still there. (b) Tick its checkbox and reload: it is still ticked. (c) Click Delete on it and reload: it is gone. (d) In a private window, sign in as a second account: none of the first account's tasks appear. | status: pending
3. Skill tags and the avoided skill | done-criteria: (a) Try to add a task without picking a skill: the task is not added and a message asks you to pick one. (b) Add a task with Speaking picked: the list shows "Speaking" next to it. (c) With exactly one completed task, tagged Reading, the summary shows Reading 1 and the other four skills at 0, and those four are marked "Avoiding". (d) Complete one task each in Listening, Speaking, and Vocabulary: only Writing is marked "Avoiding". | status: pending

## Backlog
- Editing a task's text
- Due dates and reminders
- Password reset
- Google or other social login
- Custom skills beyond the fixed five
- Tracking more than one language
- "Avoiding" measured over the last 7 days instead of all time
- Streaks, charts, or history views
- Reordering tasks
- Sharing lists with a teacher or study partner
- Dark mode
- Mobile app
