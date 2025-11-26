# EmailJS Setup Guide - Step by Step

This guide will help you set up EmailJS to receive contact form submissions at **kanishkashra@gmail.com**.

## Quick Overview
EmailJS is a free service (200 emails/month) that allows you to send emails directly from your frontend without a backend server.

---

## Step 1: Create EmailJS Account

1. **Go to**: https://www.emailjs.com/
2. **Click** "Sign Up" (top right)
3. **Sign up** with:
   - Email: Use your Gmail (kanishkashra@gmail.com) or any email
   - Password: Create a secure password
4. **Verify your email** if prompted
5. **You're now logged in!**

---

## Step 2: Add Email Service (Gmail)

1. **In EmailJS Dashboard**, click **"Email Services"** in the left sidebar
2. **Click** "Add New Service" button
3. **Select** "Gmail" from the list
4. **Click** "Connect Account"
5. **Sign in** with your Gmail account (kanishkashra@gmail.com)
6. **Grant permissions** when prompted
7. **Copy the Service ID** - it looks like: `service_xxxxxxxxx`
   - You'll see it displayed after connection
   - Write it down or keep the tab open

**Note**: The Service ID is shown on the service card after you add it.

---

## Step 3: Create Email Template

1. **Click** "Email Templates" in the left sidebar
2. **Click** "Create New Template" button
3. **Fill in the template**:

   **Template Name**: `Portfolio Contact Form`
   
   **Content**:
   ```
   To Email: kanishkashra@gmail.com
   From Name: {{from_name}}
   From Email: {{from_email}}
   Subject: Portfolio Contact: {{subject}}
   
   Message:
   {{message}}
   
   ---
   This email was sent from your portfolio contact form.
   ```

4. **In the template editor**:
   - **To Email**: Type `kanishkashra@gmail.com` (your email)
   - **From Name**: Click the variable button and select `{{from_name}}`
   - **From Email**: Click the variable button and select `{{from_email}}`
   - **Subject**: Type `Portfolio Contact: ` then add `{{subject}}` variable
   - **Content/Message**: Add `{{message}}` variable

5. **Click** "Save" button
6. **Copy the Template ID** - it looks like: `template_xxxxxxxxx`
   - Found at the top of the template editor or in the template list

---

## Step 4: Get Public Key

1. **Click** your profile icon (top right) → **"Account"**
2. **Scroll down** to "API Keys" section
3. **Copy the Public Key** - it looks like: `xxxxxxxxxxxxxxxxxxxxx`
   - This is a long string of characters
   - Click the copy icon or select and copy

---

## Step 5: Create .env File

1. **In your project root** (same folder as `package.json`), create a new file named `.env`
2. **Add these lines** (replace with YOUR actual values):

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxxx
```

**Example** (with fake values):
```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=user_abcdefghijklmnopqrstuvwxyz
```

3. **Save the file**

---

## Step 6: Restart Development Server

1. **Stop** your current dev server (Ctrl+C in terminal)
2. **Start it again**: `npm run dev`
3. **Important**: Environment variables only load when the server starts!

---

## Step 7: Test the Form

1. **Open** your portfolio in the browser
2. **Navigate** to the Contact section
3. **Fill out the form**:
   - Name: Test User
   - Email: your-test-email@gmail.com
   - Subject: Test Message
   - Message: This is a test
4. **Click** "Send Message"
5. **Check your email** (kanishkashra@gmail.com) - you should receive the message!

---

## Troubleshooting

### "EmailJS not configured" error
- Make sure `.env` file exists in project root
- Check that variable names start with `VITE_`
- Restart your dev server after creating/editing `.env`

### "Failed to send message"
- Verify all three IDs are correct in `.env`
- Check EmailJS dashboard for error logs
- Make sure Gmail service is connected properly
- Check spam folder

### Email not received
- Check spam/junk folder
- Verify email template has correct "To Email"
- Check EmailJS dashboard → "Logs" for delivery status

---

## Security Notes

✅ `.env` file is already in `.gitignore` - your credentials are safe  
✅ Public Key is safe to use in frontend (it's designed for this)  
✅ Never commit `.env` file to Git  

---

## Need Help?

- EmailJS Docs: https://www.emailjs.com/docs/
- EmailJS Support: support@emailjs.com
- Check EmailJS dashboard → "Logs" for detailed error messages

---

## Quick Reference

After setup, your `.env` file should look like:
```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxxx
```

All three values come from your EmailJS dashboard!
