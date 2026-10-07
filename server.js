require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const MESSAGES_FILE = path.join(__dirname, 'messages.json');
const { GMAIL_USER, GMAIL_APP_PASSWORD } = process.env;
const RECEIVER = process.env.RECEIVER_EMAIL || GMAIL_USER || 'muneebsidhar@gmail.com';
const emailReady = Boolean(GMAIL_USER && GMAIL_APP_PASSWORD);

const transporter = emailReady
  ? nodemailer.createTransport({ service: 'gmail', auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD } })
  : null;
if (!emailReady) console.warn('Email is not configured. Messages will only be saved to messages.json. See README.md.');

app.set('trust proxy', 1);
app.use(express.json({ limit: '10kb' }));
app.use(express.static(path.join(__dirname, 'public')));

/* Simple spam protection: at most 5 messages per IP every 15 minutes */
const hits = new Map();
function limited(ip) {
  const now = Date.now(), windowMs = 15 * 60 * 1000;
  const recent = (hits.get(ip) || []).filter((t) => now - t < windowMs);
  recent.push(now); hits.set(ip, recent);
  return recent.length > 5;
}

const clean = (v, max) => String(v || '').replace(/[\r\n]+/g, ' ').trim().slice(0, max);

app.post('/api/contact', async (req, res) => {
  const body = req.body || {};
  if (body.website) return res.json({ ok: true }); // hidden field filled in: a bot, ignore quietly
  if (limited(req.ip)) return res.status(429).json({ error: 'Too many messages. Please try again later.' });

  const name = clean(body.name, 100);
  const email = clean(body.email, 120);
  const message = String(body.message || '').trim().slice(0, 3000);
  if (!name || !message || !/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ error: 'Name, valid email and message are required.' });
  }

  // 1. Keep a backup copy on disk
  try {
    let saved = [];
    try { saved = JSON.parse(fs.readFileSync(MESSAGES_FILE, 'utf8')); } catch {}
    saved.push({ name, email, message, date: new Date().toISOString() });
    fs.writeFileSync(MESSAGES_FILE, JSON.stringify(saved, null, 2));
  } catch (err) { console.error('Could not save message:', err.message); }

  // 2. Email it straight to you
  if (transporter) {
    try {
      await transporter.sendMail({
        from: `"Portfolio website" <${GMAIL_USER}>`,
        to: RECEIVER,
        replyTo: `"${name.replace(/"/g, '')}" <${email}>`,
        subject: `New portfolio message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}\n`,
      });
    } catch (err) {
      console.error('Email failed:', err.message);
      return res.status(502).json({ error: 'Email could not be sent.' });
    }
  }
  res.json({ ok: true });
});

app.listen(PORT, () => console.log(`Portfolio running at http://localhost:${PORT}`));
