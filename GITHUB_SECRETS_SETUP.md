# 🔐 Setting Up GitHub Secrets for EmailJS

For your contact form to work on GitHub Pages, you need to add your EmailJS credentials as GitHub Secrets.

## Step 1: Get Your EmailJS Credentials

From your `.env` file, you have:
- `VITE_EMAILJS_SERVICE_ID=service_cn7gvi5`
- `VITE_EMAILJS_TEMPLATE_ID=template_v97dumj`
- `VITE_EMAILJS_PUBLIC_KEY=Fh4_zkT-c5FfzsSO3`

## Step 2: Add GitHub Secrets

1. **Go to your GitHub repository**: https://github.com/ashra1-ai/Portfolio
2. **Click** "Settings" (top menu)
3. **Click** "Secrets and variables" → "Actions" (left sidebar)
4. **Click** "New repository secret" button
5. **Add each secret one by one**:

### Secret 1: VITE_EMAILJS_SERVICE_ID
- **Name**: `VITE_EMAILJS_SERVICE_ID`
- **Value**: `service_cn7gvi5`
- Click "Add secret"

### Secret 2: VITE_EMAILJS_TEMPLATE_ID
- **Name**: `VITE_EMAILJS_TEMPLATE_ID`
- **Value**: `template_v97dumj`
- Click "Add secret"

### Secret 3: VITE_EMAILJS_PUBLIC_KEY
- **Name**: `VITE_EMAILJS_PUBLIC_KEY`
- **Value**: `Fh4_zkT-c5FfzsSO3`
- Click "Add secret"

## Step 3: Verify Secrets

You should now see 3 secrets in your repository:
- ✅ VITE_EMAILJS_SERVICE_ID
- ✅ VITE_EMAILJS_TEMPLATE_ID
- ✅ VITE_EMAILJS_PUBLIC_KEY

## Step 4: Test Deployment

1. **Push any change** to trigger a new deployment
2. **Go to Actions tab** and watch the workflow run
3. **Once deployed**, test the contact form on your live site
4. **It should work!** 🎉

## Important Notes

- ✅ Secrets are encrypted and only visible to you
- ✅ They're only available during GitHub Actions runs
- ✅ They won't appear in your code or logs
- ✅ Update secrets if you change your EmailJS credentials

## Troubleshooting

If the contact form still doesn't work after deployment:
1. Check that all 3 secrets are added correctly
2. Verify the values match your `.env` file exactly
3. Check the Actions logs for any build errors
4. Make sure the workflow file has the env variables (already updated!)

---

**That's it!** Your contact form will work on GitHub Pages once you add these secrets! 🚀

