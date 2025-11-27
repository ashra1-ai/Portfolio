# 📸 How to Upload Images to Your Portfolio

This guide explains exactly how to add your profile picture and LinkedIn post images to your portfolio.

---

## 🎯 Quick Overview

All images go in the **`public/images/`** folder. This folder is already created and ready to use!

**Location**: `Portfolio/public/images/`

---

## 👤 Profile Picture Setup

### Step 1: Prepare Your Profile Picture

1. **Choose a good photo** of yourself
   - Professional headshot or clear portrait
   - Square format works best (1:1 aspect ratio)
   - Recommended size: **800x800px** or larger
   - Supported formats: **JPG, PNG, or WebP**

### Step 2: Name and Save the Image

1. **Name the file**: `profile.jpg` (or `profile.png` if using PNG)
2. **Save it to**: `Portfolio/public/images/profile.jpg`

**Example path:**
```
Portfolio/
  └── public/
      └── images/
          └── profile.jpg  ← Your profile picture here
```

### Step 3: Verify It Works

1. Start your dev server: `npm run dev`
2. Navigate to the **About** section
3. Your profile picture should appear automatically!

**If the image doesn't show:**
- Check the filename is exactly `profile.jpg` (case-sensitive)
- Make sure it's in `public/images/` folder
- Try refreshing the page (Ctrl+F5 or Cmd+Shift+R)

---

## 📱 LinkedIn Post Images Setup

### Step 1: Get Images from Your LinkedIn Posts

1. **Go to your LinkedIn post**
2. **Right-click on the image** in the post
3. **Click "Save image as..."** or "Save image"
4. **Save it to your computer** (Desktop or Downloads is fine)

### Step 2: Prepare the Images

1. **Recommended size**: 1200x675px (16:9 aspect ratio) or larger
2. **Supported formats**: JPG, PNG, or WebP
3. **Tip**: If the image is very large, you can resize it using:
   - Online tools: [TinyPNG](https://tinypng.com/), [Squoosh](https://squoosh.app/)
   - Image editors: Photoshop, GIMP, or even Paint

### Step 3: Name and Save the Images

1. **Name them sequentially**:
   - `linkedin-post-1.jpg`
   - `linkedin-post-2.jpg`
   - `linkedin-post-3.jpg`
   - etc.

2. **Save them to**: `Portfolio/public/images/`

**Example structure:**
```
Portfolio/
  └── public/
      └── images/
          ├── profile.jpg
          ├── linkedin-post-1.jpg
          ├── linkedin-post-2.jpg
          └── linkedin-post-3.jpg
```

### Step 4: Update the Data File

1. **Open**: `Portfolio/src/data/linkedinPostsData.js`
2. **Update the `image` field** for each post:

```javascript
{
  id: 1,
  title: 'Your Post Title',
  content: 'Post content...',
  image: '/images/linkedin-post-1.jpg', // ← Make sure this matches your filename
  date: 'Jan 2025',
  likes: 45,
  comments: 12,
  shares: 8,
  link: 'https://www.linkedin.com/posts/kanishkashra_activity-1234567890',
  color: 'accent-primary',
}
```

---

## 📁 Complete File Structure Example

Here's what your `public/images/` folder should look like:

```
Portfolio/
  └── public/
      └── images/
          ├── profile.jpg              ← Your profile picture
          ├── linkedin-post-1.jpg      ← First LinkedIn post image
          ├── linkedin-post-2.jpg      ← Second LinkedIn post image
          ├── linkedin-post-3.jpg      ← Third LinkedIn post image
          └── linkedin-post-4.jpg      ← More posts as needed
```

---

## 🖼️ Image Requirements Summary

### Profile Picture
- **Filename**: `profile.jpg` (or `profile.png`)
- **Location**: `public/images/profile.jpg`
- **Size**: 800x800px or larger (square format)
- **Format**: JPG, PNG, or WebP

### LinkedIn Post Images
- **Filename**: `linkedin-post-1.jpg`, `linkedin-post-2.jpg`, etc.
- **Location**: `public/images/`
- **Size**: 1200x675px or larger (16:9 ratio recommended)
- **Format**: JPG, PNG, or WebP

---

## ✅ Step-by-Step Checklist

### For Profile Picture:
- [ ] Choose a good profile photo
- [ ] Resize to 800x800px (optional but recommended)
- [ ] Name it `profile.jpg`
- [ ] Save to `Portfolio/public/images/profile.jpg`
- [ ] Check it appears in the About section

### For LinkedIn Post Images:
- [ ] Go to each LinkedIn post
- [ ] Right-click and save the image
- [ ] Resize to 1200x675px (optional but recommended)
- [ ] Name them `linkedin-post-1.jpg`, `linkedin-post-2.jpg`, etc.
- [ ] Save to `Portfolio/public/images/`
- [ ] Update `src/data/linkedinPostsData.js` with correct filenames
- [ ] Check they appear in the LinkedIn Posts section

---

## 🛠️ Troubleshooting

### Image Not Showing?

1. **Check the file path**:
   - Must be in `public/images/` (not `src/images/`)
   - The `public` folder is special in Vite - files here are served directly

2. **Check the filename**:
   - Must match exactly (case-sensitive)
   - `profile.jpg` not `Profile.jpg` or `profile.JPG`
   - No spaces in filename

3. **Check the file extension**:
   - Use `.jpg`, `.png`, or `.webp`
   - Make sure the file actually has the extension

4. **Restart dev server**:
   - Sometimes you need to restart: `npm run dev`

5. **Clear browser cache**:
   - Hard refresh: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)

### Image Too Large?

- Use [TinyPNG](https://tinypng.com/) to compress images
- Or use [Squoosh](https://squoosh.app/) to resize and compress
- Aim for under 500KB per image for faster loading

### Wrong Aspect Ratio?

- **Profile picture**: Should be square (1:1)
- **Post images**: 16:9 works best (like 1200x675px)
- Use any image editor to crop/resize

---

## 💡 Pro Tips

✅ **Optimize images** before uploading (smaller file size = faster loading)  
✅ **Use consistent naming** (`linkedin-post-1.jpg`, `linkedin-post-2.jpg`)  
✅ **Keep filenames lowercase** to avoid issues  
✅ **Test locally first** before deploying  
✅ **Use JPG for photos**, PNG for graphics with transparency  

---

## 📍 Quick Reference

| Image Type | Filename | Location | Size |
|------------|----------|----------|------|
| Profile Picture | `profile.jpg` | `public/images/` | 800x800px |
| LinkedIn Post 1 | `linkedin-post-1.jpg` | `public/images/` | 1200x675px |
| LinkedIn Post 2 | `linkedin-post-2.jpg` | `public/images/` | 1200x675px |
| LinkedIn Post 3 | `linkedin-post-3.jpg` | `public/images/` | 1200x675px |

---

## 🚀 After Uploading

1. **Start your dev server**: `npm run dev`
2. **Check the About section** - profile picture should appear
3. **Check the LinkedIn Posts section** - post images should appear
4. **If everything looks good**, commit and push to GitHub!

---

## Need Help?

- **Profile picture location**: `Portfolio/public/images/profile.jpg`
- **Post images location**: `Portfolio/public/images/`
- **Data file to update**: `Portfolio/src/data/linkedinPostsData.js`

That's it! Just drag and drop your images into the `public/images/` folder and they'll appear automatically! 🎉

