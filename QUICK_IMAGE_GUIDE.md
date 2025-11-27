# 🚀 Quick Image Upload Guide

## 📍 Where to Put Images

**All images go in**: `Portfolio/public/images/`

---

## 👤 Profile Picture (1 image)

### Steps:
1. **Get your profile photo** (headshot/portrait)
2. **Name it**: `profile.jpg`
3. **Save to**: `Portfolio/public/images/profile.jpg`
4. **Done!** It will appear in the About section automatically

**Recommended**: 800x800px, square format

---

## 📱 LinkedIn Post Images (multiple images)

### Steps:
1. **Go to your LinkedIn post**
2. **Right-click the image** → "Save image as..."
3. **Name it**: `linkedin-post-1.jpg` (for first post)
4. **Save to**: `Portfolio/public/images/linkedin-post-1.jpg`
5. **Repeat** for more posts: `linkedin-post-2.jpg`, `linkedin-post-3.jpg`, etc.
6. **Update** `src/data/linkedinPostsData.js` with the correct filenames

**Recommended**: 1200x675px, 16:9 ratio

---

## 📂 Final Folder Structure

```
Portfolio/
  └── public/
      └── images/
          ├── profile.jpg              ← Your profile picture
          ├── linkedin-post-1.jpg      ← First LinkedIn post image
          ├── linkedin-post-2.jpg      ← Second LinkedIn post image
          └── linkedin-post-3.jpg      ← Third LinkedIn post image
```

---

## ✅ Checklist

- [ ] Profile picture saved as `profile.jpg` in `public/images/`
- [ ] LinkedIn post images saved as `linkedin-post-1.jpg`, etc.
- [ ] Updated `src/data/linkedinPostsData.js` with correct image filenames
- [ ] Tested locally with `npm run dev`

---

## 🆘 Need More Help?

See `HOW_TO_UPLOAD_IMAGES.md` for detailed instructions with troubleshooting tips!

