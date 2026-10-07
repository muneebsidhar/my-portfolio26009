# Muneeb Sidhar - Portfolio

## Run it on your computer
1. Install Node.js (nodejs.org).
2. In this folder run: `npm install`
3. Copy `.env.example` to `.env` and fill it in (steps below).
4. Run: `npm start` and open http://localhost:3000

## Get messages straight to your Gmail
The contact form sends every message to your inbox. Replying to the email replies to the visitor.

1. Open your Google Account > Security and turn on 2-Step Verification.
2. Search for "App passwords" in your Google Account, create one named "Portfolio", and copy the 16-letter password.
3. Put it in `.env` as `GMAIL_APP_PASSWORD` (no spaces). `GMAIL_USER` is your Gmail address.
4. Restart the server. Send a test message from the Contact page.

Never put the app password in the website files or share the `.env` file. If it leaks, delete it in your Google Account and create a new one.

## When you put the site online
Use a host that runs Node.js (for example Render). Add `GMAIL_USER` and `GMAIL_APP_PASSWORD` in the host's "Environment variables" settings instead of uploading `.env`. Free hosts can erase `messages.json`, so rely on the emails.
