# 📄 Resume Download Setup

## How to Add Your Resume

1. **Prepare your resume**:
   - Save it as a PDF file
   - Name it: `resume.pdf`
   - Recommended: Keep file size under 2MB for faster downloads

2. **Place the file**:
   - Put `resume.pdf` in the `public/` folder
   - **Location**: `Portfolio/public/resume.pdf`

3. **File structure should look like**:
   ```
   Portfolio/
     └── public/
         ├── images/
         │   ├── profile.jpg
         │   └── linkedin-post-1.jpg
         └── resume.pdf  ← Your resume here
   ```

4. **That's it!** The "Resume" button in the About section will automatically download your resume when clicked.

## File Format

- ✅ **PDF format** (recommended) - `resume.pdf`
- ✅ **File name**: `resume.pdf` (lowercase, no spaces)

## Testing

1. Start your dev server: `npm run dev`
2. Go to the **About** section
3. Click the **"Resume"** button
4. Your resume should download automatically!

## Troubleshooting

### Resume not downloading?
- Make sure the file is named exactly `resume.pdf` (case-sensitive)
- Check that it's in the `public/` folder (not `public/images/`)
- Verify the file isn't corrupted
- Try a hard refresh (Ctrl+F5)

### File too large?
- Compress your PDF using online tools like [SmallPDF](https://smallpdf.com/compress-pdf)
- Aim for under 2MB for best user experience

### Want a different filename when downloaded?
- The download attribute in the code sets it to `Kanishk_Ashra_Resume.pdf`
- You can change this in `src/components/About.jsx` if needed

---

**Quick Steps:**
1. Save your resume as `resume.pdf`
2. Put it in `Portfolio/public/resume.pdf`
3. Done! 🎉

