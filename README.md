# inbox-ripper

A devilish program for executing inboxes with extreme prejudice

# Disclaimer

This is an experimental project made for educational purposes. It is not intended
for actual use. The source code is released as is with no support or warranty provided.

# Usage

```bash
inrip -e emailToExecute@gmail.com -p 111-111-1111
```

# How does this work?

Basically this project is a proof of concept
for basic security practice. Using [puppeteer](https://www.npmjs.com/package/puppeteer)
this tool takes a given email and/or phone number, then attempts to sign up
that contact information on spam/newsletter sites. How is this automated tool
allowed to do this? The majority of sites still don't use captcha, allowing
for extensive abuse. Remember to use captcha and protect yourself
and others from spam abuse.
