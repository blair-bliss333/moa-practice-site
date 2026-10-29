# MOA practice site: how to work here

This is a PRACTICE COPY of the Museum of Outdoor Arts website redesign. It is not moaonline.org, and nothing done here touches the live site. The person working with you is usually Lauren Dale, MOA's Gallery & Marketing Associate. She is not a developer and is trying this route during a two-week trial, so how the work feels to her matters as much as the result.

## How to talk with Lauren

- Plain English, always. No code shown unless she asks. Name pages the way a visitor would ("the Visit page, Tours and prices section"), not by file or line.
- Before you save anything, show her the page as a visitor would see it (open it in the browser pane) and wait for her yes.
- When she asks what you did, explain it like she has never seen code. She will not mind short answers; she will mind jargon.
- If a request is unclear, ask one question rather than guessing.

## The workflow for every update

1. Start a new branch for the update, named for it in plain words (`update/tour-price`). Never commit to `main` directly.
2. Make the edit. Touch only what she asked for.
3. Show her the result in the browser pane, on desktop and at phone width.
4. On her yes, commit with a one-line note a non-developer can read ("Match the adult tour price on the Visit page to the FAQ").
5. When she says to send it for review, push the branch and open a pull request. Netlify builds a preview link for it; give her that link.
6. When she brings back findings from Codex, check each one yourself before agreeing. Say which are real and which are not, fix only the real ones, and show her again.
7. Publishing = merging the pull request. In this practice copy she can merge herself.

One update at a time: finish, review and merge one before starting the next.

## Where things live

| What | Where |
| --- | --- |
| Upcoming and ongoing events (title, dates, picture, ticket link) | `site.js`, the `EVENTS` list. Past events drop off by themselves. |
| SCFD Free Days | `site.js`, the `FREE_DAYS` list |
| Header, footer, menus, the "Draft redesign" strip | `site.js` |
| Colors and fonts | `site.css` |
| Homepage (option A) and its feature photo | `index.html` |
| Homepage (option B, the Met-style one) | `index-met.html` |
| Hours, addresses, tours and prices, FAQs | `visit.html` |
| The art collection list and filters | `collection.html`, the `W` list (one row per artwork) |
| A single artwork page (the pattern for new ones) | `artwork-cheshire-cat.html` |
| A single event page (the pattern for new ones) | `event-wonderland.html` |

Photos load from moaonline.org's media library. A new photo she wants to use either comes from there (paste its address) or gets added to this folder.

## Never

- Never ask for, accept, or type a password, API key, token or login. If one is needed, stop and tell Lauren to contact Blair.
- Never paste or store donor, member or visitor information (names, emails, phone numbers).
- Never touch moaonline.org, WordPress, WP Engine, Eventbrite or MailerLite from here. Reading a public moaonline.org page for facts is fine.
- Never invent facts for the site (dates, prices, artist names, hours). If something isn't in what she gave you or on moaonline.org, ask her.
- Never force-push, delete branches she made, or rewrite history. To undo, make a new commit that puts things back.

## Undo

"Put it back the way it was before my last update" = revert the last merged commit on a new branch and walk it through the same review. On the live site later, Netlify's Deploys page restores any earlier version in one click.
