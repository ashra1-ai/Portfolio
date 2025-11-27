# How to Extract Your LinkedIn Posts

Since LinkedIn requires authentication, I can't directly access your profile. Here's a simple step-by-step guide to extract your posts and add them to your portfolio.

---

## Quick Method: Manual Extraction

### Step 1: Go to Your LinkedIn Profile
1. Visit: https://www.linkedin.com/in/kanishkashra/
2. Scroll down to see your posts
3. Identify the posts you want to feature (start with 3-5 recent ones)

### Step 2: For Each Post, Collect This Information:

#### A. Get the Post URL
1. Click on the post to open it
2. Click the **three dots (⋯)** in the top right of the post
3. Click **"Copy link to post"**
4. Paste it somewhere (you'll need it later)

**Example URL format:**
```
https://www.linkedin.com/posts/kanishkashra_activity-1234567890-abcdef
```

#### B. Get the Post Image
1. Right-click on the image in the post
2. Click **"Save image as..."**
3. Save it to: `Portfolio/public/images/`
4. Name it: `linkedin-post-1.jpg` (or `linkedin-post-2.jpg`, etc.)

**Tip:** If the post has multiple images, save the main/featured one.

#### C. Copy the Post Content
1. Copy the post title/text (first line or two)
2. Copy a 2-3 sentence excerpt from the post
3. Note the engagement stats:
   - Number of likes (❤️)
   - Number of comments (💬)
   - Number of shares (↗️)

#### D. Note the Date
- Check when the post was published (e.g., "2 weeks ago", "Jan 2025")

---

## Step 3: Update the Data File

1. **Open**: `Portfolio/src/data/linkedinPostsData.js`

2. **Replace the sample posts** with your actual data:

```javascript
export const linkedInPosts = [
  {
    id: 1,
    title: 'Your Actual Post Title Here', // First line of your post
    content: 'Your post excerpt here - 2-3 sentences that summarize the post...', // 2-3 sentence summary
    image: '/images/linkedin-post-1.jpg', // Your saved image filename
    date: 'Jan 2025', // When you posted
    likes: 45, // Actual number of likes
    comments: 12, // Actual number of comments
    shares: 8, // Actual number of shares
    link: 'https://www.linkedin.com/posts/kanishkashra_activity-1234567890', // The copied post URL
    color: 'accent-primary', // Choose: 'accent-primary', 'accent-secondary', or 'accent-tertiary'
  },
  {
    id: 2,
    title: 'Your Second Post Title',
    content: 'Second post content...',
    image: '/images/linkedin-post-2.jpg',
    date: 'Dec 2024',
    likes: 38,
    comments: 15,
    shares: 5,
    link: 'https://www.linkedin.com/posts/kanishkashra_activity-1234567891',
    color: 'accent-secondary',
  },
  // Add more posts...
]
```

---

## Step 4: Example - Real Post Extraction

Let's say you have this LinkedIn post:

**Post on LinkedIn:**
```
🎉 Excited to announce that our Aura Farming project won NaTHacks 2025!

We built a multi-zone IoT irrigation system using ESP32 boards that collects 
5,000+ soil moisture and rainfall telemetry points in real time. The system 
features automated irrigation logic with servo-controlled sprinklers and a 
Supabase-backed data pipeline.

This was an incredible learning experience working with IoT, real-time data, 
and automation. Huge thanks to my team!

#IoT #AI #Hackathon #NaTHacks2025

[Image: Screenshot of the irrigation system dashboard]
```

**Extracted Data:**
```javascript
{
  id: 1,
  title: 'Aura Farming project won NaTHacks 2025',
  content: 'We built a multi-zone IoT irrigation system using ESP32 boards that collects 5,000+ soil moisture and rainfall telemetry points in real time. Features automated irrigation logic with servo-controlled sprinklers and Supabase-backed pipeline.',
  image: '/images/linkedin-post-1.jpg',
  date: 'Jan 2025',
  likes: 45, // Check actual likes on LinkedIn
  comments: 12, // Check actual comments
  shares: 8, // Check actual shares
  link: 'https://www.linkedin.com/posts/kanishkashra_nathacks2025-iot-ai-activity-1234567890',
  color: 'accent-primary',
}
```

---

## Step 5: Tips for Best Results

✅ **Title**: Keep it under 60 characters for best display  
✅ **Content**: 2-3 sentences (150-200 characters) works best  
✅ **Images**: Use high-quality images (at least 1200px wide, 16:9 ratio)  
✅ **Dates**: Use format like "Jan 2025", "Dec 2024"  
✅ **Engagement**: Update with actual numbers from LinkedIn  
✅ **Order**: Most recent posts first (top to bottom)  
✅ **Colors**: Mix and match colors for visual variety  

---

## Step 6: Adding More Posts

To add more than 3 posts:

1. Save the image to `public/images/linkedin-post-4.jpg`
2. Add a new object to the array in `linkedinPostsData.js`
3. Increment the `id` number
4. Fill in all the fields

---

## Quick Checklist

For each post you want to add:

- [ ] Copied the post URL (three dots → Copy link)
- [ ] Saved the post image to `public/images/`
- [ ] Named the image file (e.g., `linkedin-post-1.jpg`)
- [ ] Copied the post title
- [ ] Wrote a 2-3 sentence excerpt
- [ ] Noted the engagement stats (likes, comments, shares)
- [ ] Noted the post date
- [ ] Added all data to `linkedinPostsData.js`
- [ ] Tested the link works

---

## Need Help?

- **File to edit**: `src/data/linkedinPostsData.js`
- **Images folder**: `public/images/`
- **Your LinkedIn**: https://www.linkedin.com/in/kanishkashra/

Once you've added your posts, they'll automatically appear in the LinkedIn Posts section of your portfolio! 🚀

