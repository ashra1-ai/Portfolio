# 🚀 Quick EmailJS Setup (5 Minutes)

Follow these steps to get your contact form working:

## Step 1: Create EmailJS Account (2 min)

1. Go to: **https://www.emailjs.com/**
2. Click **"Sign Up"** (top right)
3. Sign up with your email (kanishkashra@gmail.com works)
4. Verify email if needed

## Step 2: Add Gmail Service (1 min)

1. In EmailJS dashboard → Click **"Email Services"** (left sidebar)
2. Click **"Add New Service"**
3. Select **"Gmail"**
4. Click **"Connect Account"**
5. Sign in with **kanishkashra@gmail.com**
6. **Copy the Service ID** (looks like `service_abc123`)

## Step 3: Create Email Template (1 min)

1. Click **"Email Templates"** (left sidebar)
2. Click **"Create New Template"**
3. Fill in:
   - **Template Name**: `Portfolio Contact`
   - **To Email**: `kanishkashra@gmail.com`
   - **From Name**: `{{from_name}}`
   - **From Email**: `{{from_email}}`
   - **Subject**: `Portfolio Contact: {{subject}}`
   - **Message**: `{{message}}`
4. Click **"Save"**
5. **Copy the Template ID** (looks like `template_xyz789`)

## Step 4: Get Public Key (30 sec)

1. Click your **profile icon** (top right) → **"Account"**
2. Scroll to **"API Keys"** section
3. **Copy the Public Key** (long string)

## Step 5: Create .env File (30 sec)

1. In your project root (`Portfolio/` folder), create a file named `.env`
2. Add these lines (replace with YOUR actual values):

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxxx
```

**Example:**
```env
VITE_EMAILJS_SERVICE_ID=service_gmail123
VITE_EMAILJS_TEMPLATE_ID=template_portfolio456
VITE_EMAILJS_PUBLIC_KEY=user_abcdefghijklmnopqrstuvwxyz123
```

3. **Save the file**

## Step 6: Restart Dev Server

```bash
# Stop current server (Ctrl+C)
npm run dev
```

## Step 7: Test It!

1. Go to Contact section
2. Fill out the form
3. Click "Send Message"
4. Check your email (kanishkashra@gmail.com)!

---

## ⚠️ Important Notes

- `.env` file is already in `.gitignore` - your credentials are safe
- **Restart dev server** after creating/editing `.env`
- For production, you'll need to add these as environment variables in your hosting platform

---

## 🆘 Still Not Working?

1. Check browser console (F12) for errors
2. Verify all three values in `.env` are correct
3. Make sure you restarted the dev server
4. Check EmailJS dashboard → "Logs" for error messages

That's it! Your contact form will work in 5 minutes! 🎉

