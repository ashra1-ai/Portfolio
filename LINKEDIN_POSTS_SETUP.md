# LinkedIn Posts Setup Guide

This guide will help you add your LinkedIn posts with images to your portfolio.

## Quick Overview

The LinkedIn Posts section displays your recent LinkedIn posts with images, engagement stats, and links to view them on LinkedIn.

---

## Step 1: Add Your LinkedIn Post Images

1. **Save images from your LinkedIn posts** to your computer
2. **Place them in**: `public/images/`
3. **Name them**:
   - `linkedin-post-1.jpg` (or `.png`)
   - `linkedin-post-2.jpg`
   - `linkedin-post-3.jpg`
   - etc.

**Recommended image sizes**: 1200x675px (16:9 aspect ratio) or larger

---

## Step 2: Update LinkedIn Posts Data

1. **Open**: `src/components/LinkedInPosts.jsx`
2. **Find the `linkedInPosts` array** (around line 8)
3. **Update each post** with your actual data:

```javascript
const linkedInPosts = [
  {
    id: 1,
    title: 'Your Post Title Here',
    content: 'Your post content/excerpt here...',
    image: '/images/linkedin-post-1.jpg', // Your image filename
    date: 'Jan 2025', // When you posted
    likes: 45, // Number of likes
    comments: 12, // Number of comments
    shares: 8, // Number of shares
    link: 'https://www.linkedin.com/posts/kanishkashra_YOUR_POST_ID', // Direct link to the post
    color: 'accent-primary', // accent-primary, accent-secondary, or accent-tertiary
  },
  // Add more posts...
]
```

---

## Step 3: Get Your LinkedIn Post URLs

1. **Go to your LinkedIn post**
2. **Click the three dots** (⋯) on the post
3. **Click "Copy link to post"**
4. **Paste the URL** in the `link` field

**Example post URL format**:
```
https://www.linkedin.com/posts/kanishkashra_activity-1234567890-abcdef
```

---

## Step 4: Add More Posts

To add more than 3 posts:

1. **Add a new object** to the `linkedInPosts` array
2. **Add the corresponding image** to `public/images/`
3. **Update the image path** in the post object

**Example**:
```javascript
{
  id: 4,
  title: 'New Post Title',
  content: 'Post content...',
  image: '/images/linkedin-post-4.jpg',
  date: 'Feb 2025',
  likes: 30,
  comments: 8,
  shares: 5,
  link: 'https://www.linkedin.com/posts/kanishkashra_activity-1234567890',
  color: 'accent-secondary',
}
```

---

## Step 5: Customize Colors

Each post can have a different accent color:
- `'accent-primary'` - Blue/purple theme
- `'accent-secondary'` - Green theme
- `'accent-tertiary'` - Orange/yellow theme

Mix and match for visual variety!

---

## Tips

✅ **Image Quality**: Use high-quality images (at least 1200px wide)  
✅ **Content Length**: Keep titles under 60 characters for best display  
✅ **Excerpt**: Keep content excerpts to 2-3 sentences  
✅ **Engagement Stats**: Update likes, comments, and shares to reflect actual numbers  
✅ **Post Order**: Most recent posts first (top to bottom)  

---

## Troubleshooting

### Images not showing?
- Check that images are in `public/images/` folder
- Verify the filename matches exactly (case-sensitive)
- Make sure the file extension is `.jpg` or `.png`

### Post links not working?
- Make sure you copied the full LinkedIn post URL
- Test the link in a new browser tab first
- LinkedIn post URLs should start with `https://www.linkedin.com/posts/`

### Want to remove a post?
- Simply delete the post object from the `linkedInPosts` array
- Or comment it out with `//`

---

## Example Complete Post

```javascript
{
  id: 1,
  title: 'AI-Powered IoT Irrigation System Wins NaTHacks 2025',
  content: 'Excited to share that our Aura Farming project won NaTHacks 2025! Built a multi-zone IoT irrigation system using ESP32 boards collecting 5k+ soil moisture and rainfall telemetry points in real time.',
  image: '/images/linkedin-post-1.jpg',
  date: 'Jan 2025',
  likes: 45,
  comments: 12,
  shares: 8,
  link: 'https://www.linkedin.com/posts/kanishkashra_nathacks2025-iot-ai-activity-1234567890',
  color: 'accent-primary',
}
```

---

## Need Help?

- Check the component file: `src/components/LinkedInPosts.jsx`
- All images go in: `public/images/`
- Your LinkedIn profile: https://www.linkedin.com/in/kanishkashra/

