# 🔧 Troubleshooting EmailJS Configuration

If you're getting "EmailJS not configured" error, follow these steps:

## ✅ Step 1: Check .env File Location

The `.env` file **MUST** be in the `Portfolio/` folder (same level as `package.json`):

```
Portfolio/
  ├── .env              ← HERE (same folder as package.json)
  ├── package.json
  ├── vite.config.js
  └── src/
```

**NOT** in:
- ❌ `Portfolio/src/.env`
- ❌ `Portfolio/public/.env`
- ❌ Root folder (outside Portfolio/)

## ✅ Step 2: Check .env File Content

Open your `.env` file and make sure it looks like this (with YOUR actual values):

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=user_abcdefghijklmnopqrstuvwxyz
```

**Common mistakes:**
- ❌ Still has `service_xxxxxxxxx` (placeholder)
- ❌ Still has `template_xxxxxxxxx` (placeholder)
- ❌ Still has `xxxxxxxxxxxxxxxxxxxxx` (placeholder)
- ❌ Missing `VITE_` prefix
- ❌ Has spaces around `=`
- ❌ Has quotes around values (don't use quotes)

## ✅ Step 3: Restart Dev Server

**IMPORTANT:** Environment variables only load when the server starts!

1. **Stop** your dev server (press `Ctrl+C` in the terminal)
2. **Start it again**: `npm run dev`
3. **Try the form again**

## ✅ Step 4: Check Browser Console

1. Open browser DevTools (F12)
2. Go to **Console** tab
3. Try submitting the form
4. Look for the debug log: `EmailJS Config Check:`
5. This will show you what values are being read

## ✅ Step 5: Verify Your EmailJS Credentials

Make sure you copied the **exact** values from EmailJS:

1. **Service ID**: Should start with `service_` (e.g., `service_gmail123`)
2. **Template ID**: Should start with `template_` (e.g., `template_abc456`)
3. **Public Key**: Long string, usually starts with `user_` (e.g., `user_abcdefgh...`)

## ✅ Step 6: Check File Format

Make sure your `.env` file:
- ✅ Has no file extension (just `.env`, not `.env.txt`)
- ✅ Uses Unix line endings (LF, not CRLF)
- ✅ No BOM (Byte Order Mark)
- ✅ Saved as UTF-8 encoding

## 🆘 Still Not Working?

1. **Delete `.env` file** and create it again
2. **Copy the template** from `QUICK_EMAILJS_SETUP.md`
3. **Paste your actual values** (no quotes, no spaces)
4. **Save the file**
5. **Restart dev server** (`Ctrl+C` then `npm run dev`)
6. **Check browser console** for the debug log

## 📝 Quick Checklist

- [ ] `.env` file is in `Portfolio/` folder (same as `package.json`)
- [ ] All three variables have `VITE_` prefix
- [ ] Values are replaced (not placeholders)
- [ ] No quotes around values
- [ ] No spaces around `=`
- [ ] Dev server was restarted after creating/editing `.env`
- [ ] Browser console shows the debug log

If all these are correct, your EmailJS should work! 🎉

