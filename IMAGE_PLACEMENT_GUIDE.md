# Image Placement Guide for Portfolio Enhancement

This guide outlines all the recommended places to add images to improve your portfolio's visual appeal and professionalism.

## 📁 Recommended Folder Structure

```
Portfolio/
├── public/
│   ├── images/
│   │   ├── profile/
│   │   │   └── profile.jpg (or .png)
│   │   ├── projects/
│   │   │   ├── aura-farming/
│   │   │   │   ├── dashboard-screenshot.png
│   │   │   │   ├── esp32-setup.jpg
│   │   │   │   ├── hardware-setup.jpg
│   │   │   │   └── irrigation-system.jpg
│   │   │   ├── cgan-mnist/
│   │   │   │   ├── generated-digits-grid.png
│   │   │   │   ├── latent-interpolation.gif
│   │   │   │   ├── training-curves.png
│   │   │   │   └── class-samples.png
│   │   │   └── egeat/
│   │   │       ├── research-diagram.png
│   │   │       └── results-visualization.png
│   │   ├── achievements/
│   │   │   ├── nathacks-trophy.jpg
│   │   │   └── certificates/
│   │   │       ├── deeplearning-ai-ml.jpg
│   │   │       ├── deeplearning-ai-gans.jpg
│   │   │       ├── google-advanced-analytics.jpg
│   │   │       └── google-cybersecurity.jpg
│   │   └── experience/
│   │       ├── delta-airlines.jpg
│   │       └── university-alberta.jpg
```

---

## 🎯 Priority Image Placements

### 1. **Hero Section** (HIGH PRIORITY)
**Location:** `src/components/Hero.jsx`
**Current:** Text-only hero
**Recommended:**
- **Profile Picture** (Right side or background)
  - Path: `public/images/profile/profile.jpg`
  - Size: 400x400px (square, circular crop)
  - Style: Professional headshot, good lighting
  - **Why:** Personalizes the portfolio immediately

**Code to add:**
```jsx
<div className="relative">
  <img 
    src={`${import.meta.env.BASE_URL}images/profile/profile.jpg`}
    alt="Kanishk Ashra"
    className="w-64 h-64 rounded-full border-4 border-accent-primary/30 object-cover"
  />
</div>
```

---

### 2. **About Section** (HIGH PRIORITY)
**Location:** `src/components/About.jsx`
**Current:** Text-only
**Recommended:**
- **Profile Picture** (if not in Hero)
  - Same as above
- **Background Image** (Subtle, behind content)
  - Path: `public/images/profile/about-background.jpg`
  - Style: Blurred, low opacity, tech-themed

---

### 3. **Aura Farming Case Study** (HIGH PRIORITY)
**Location:** `src/components/AuraFarmingCaseStudy.jsx`

#### a. Hero Dashboard Screenshot
- **Line ~79:** Replace placeholder
- **Path:** `public/images/projects/aura-farming/dashboard-screenshot.png`
- **Size:** 1920x1080px (16:9 aspect ratio)
- **Content:** Full dashboard showing zones, charts, real-time data

#### b. Hardware Setup Image
- **Add new section** after "System Architecture"
- **Path:** `public/images/projects/aura-farming/hardware-setup.jpg`
- **Size:** 1200x800px
- **Content:** ESP32 boards, sensors, wiring setup
- **Why:** Shows real hardware implementation

#### c. ESP32 Close-up
- **Add to Hardware tab** in Deep-Dive section
- **Path:** `public/images/projects/aura-farming/esp32-setup.jpg`
- **Size:** 800x600px
- **Content:** Close-up of ESP32 with sensors connected

#### d. Irrigation System in Action
- **Add to Engineering Insights section**
- **Path:** `public/images/projects/aura-farming/irrigation-system.jpg`
- **Size:** 1200x800px
- **Content:** Sprinklers in field, system working

**Code example for hero:**
```jsx
<div className="aspect-video bg-dark-surface-1dp rounded-lg overflow-hidden border border-dark-border">
  <img 
    src={`${import.meta.env.BASE_URL}images/projects/aura-farming/dashboard-screenshot.png`}
    alt="Aura Farming Dashboard"
    className="w-full h-full object-cover"
  />
</div>
```

---

### 4. **CGAN MNIST Case Study** (HIGH PRIORITY)
**Location:** `src/components/CGANCaseStudy.jsx`

#### a. Generated Digits Grid
- **Line ~95:** Replace animated digit tiles
- **Path:** `public/images/projects/cgan-mnist/generated-digits-grid.png`
- **Size:** 1000x1000px (10x10 grid of generated digits)
- **Content:** Actual generated MNIST digits (0-9) in grid layout

#### b. Latent-Space Interpolation GIF
- **Line ~420:** Replace shimmer box
- **Path:** `public/images/projects/cgan-mnist/latent-interpolation.gif`
- **Size:** 800x800px
- **Content:** Animated interpolation between digit classes
- **Why:** Shows smooth transitions between classes

#### c. Training Curves
- **Line ~380:** Replace animated chart (or keep both)
- **Path:** `public/images/projects/cgan-mnist/training-curves.png`
- **Size:** 1200x600px
- **Content:** Actual loss curves from training

#### d. Class-Specific Samples
- **Add to Latent-Space tab**
- **Path:** `public/images/projects/cgan-mnist/class-samples.png`
- **Size:** 1000x500px
- **Content:** Best samples for each digit class (0-9)

**Code example:**
```jsx
// Replace DigitTile grid with:
<img 
  src={`${import.meta.env.BASE_URL}images/projects/cgan-mnist/generated-digits-grid.png`}
  alt="Generated MNIST Digits"
  className="w-full h-full object-contain rounded-lg"
/>

// Replace shimmer box with:
<img 
  src={`${import.meta.env.BASE_URL}images/projects/cgan-mnist/latent-interpolation.gif`}
  alt="Latent Space Interpolation"
  className="w-full h-full object-contain rounded-lg"
/>
```

---

### 5. **Projects Section** (MEDIUM PRIORITY)
**Location:** `src/components/Projects.jsx`
**Current:** Text-only cards
**Recommended:**
- **Project Thumbnails** for each project card
  - Path: `public/images/projects/[project-name]/thumbnail.jpg`
  - Size: 400x300px (4:3 aspect ratio)
  - Content: Screenshot or key visual from project

**Code to add:**
```jsx
<div className="mb-4 aspect-video rounded-lg overflow-hidden">
  <img 
    src={`${import.meta.env.BASE_URL}images/projects/${project.slug}/thumbnail.jpg`}
    alt={project.title}
    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
  />
</div>
```

---

### 6. **Research Highlights** (MEDIUM PRIORITY)
**Location:** `src/components/ResearchHighlights.jsx`
**Current:** Flip cards with text only
**Recommended:**
- **Research Paper Cover/Diagram**
  - Path: `public/images/projects/egeat/research-diagram.png`
  - Size: 600x400px
  - Content: Key diagram from EGEAT paper or abstract visualization

**Add to flip card front:**
```jsx
<div className="mb-4 aspect-video rounded-lg overflow-hidden">
  <img 
    src={`${import.meta.env.BASE_URL}images/projects/egeat/research-diagram.png`}
    alt="EGEAT Research"
    className="w-full h-full object-cover"
  />
</div>
```

---

### 7. **Achievements Section** (MEDIUM PRIORITY)
**Location:** `src/components/Achievements.jsx`
**Current:** Icons only
**Recommended:**
- **NaTHacks Trophy Photo**
  - Path: `public/images/achievements/nathacks-trophy.jpg`
  - Size: 400x400px
  - Content: Photo of trophy/award or team photo

- **Certification Badges** (Optional)
  - Path: `public/images/achievements/certificates/[cert-name].jpg`
  - Size: 300x400px
  - Content: Screenshots of certificates

**Code to add:**
```jsx
{achievement.type === 'Award' && (
  <img 
    src={`${import.meta.env.BASE_URL}images/achievements/nathacks-trophy.jpg`}
    alt={achievement.title}
    className="w-full h-48 object-cover rounded-lg mb-4"
  />
)}
```

---

### 8. **Experience Section** (LOW PRIORITY)
**Location:** `src/components/Experience.jsx`
**Current:** Text-only cards
**Recommended:**
- **Company Logos** (Small, subtle)
  - Path: `public/images/experience/[company]-logo.png`
  - Size: 100x100px
  - Content: Company logos (Delta, UAlberta, etc.)

---

### 9. **Education Section** (LOW PRIORITY)
**Location:** `src/components/Education.jsx`
**Current:** Text-only
**Recommended:**
- **University Logo**
  - Path: `public/images/experience/university-alberta-logo.png`
  - Size: 200x200px

---

## 🎨 Image Optimization Tips

1. **Format:**
   - Use **WebP** for photos (better compression)
   - Use **PNG** for screenshots/diagrams (preserves quality)
   - Use **GIF** for animations (latent interpolation)

2. **Sizes:**
   - Hero images: 1920x1080px (can be larger, will scale)
   - Thumbnails: 400x300px
   - Profile: 400x400px
   - Icons/Logos: 100-200px

3. **Compression:**
   - Use tools like TinyPNG or Squoosh
   - Aim for <200KB per image
   - Keep quality at 80-90%

4. **Naming Convention:**
   - Use lowercase
   - Use hyphens: `aura-farming-dashboard.png`
   - Be descriptive

---

## 📝 Quick Checklist

### High Priority (Do First):
- [ ] Profile picture for Hero/About
- [ ] Aura Farming dashboard screenshot
- [ ] CGAN generated digits grid
- [ ] CGAN latent interpolation GIF

### Medium Priority:
- [ ] Aura Farming hardware setup photos
- [ ] Project thumbnails for Projects section
- [ ] Research diagram for EGEAT
- [ ] NaTHacks trophy photo

### Low Priority (Nice to Have):
- [ ] Company logos for Experience
- [ ] University logo for Education
- [ ] Certification badges

---

## 🔧 How to Add Images

1. **Create the folder structure** in `public/images/`
2. **Add your images** to the appropriate folders
3. **Update components** using the code examples above
4. **Test locally** to ensure paths work
5. **Commit and push** to GitHub

**Important:** Always use `${import.meta.env.BASE_URL}` prefix for images to work on GitHub Pages!

Example:
```jsx
src={`${import.meta.env.BASE_URL}images/profile/profile.jpg`}
```

---

## 💡 Pro Tips

1. **Use real screenshots** - They're more authentic than placeholders
2. **Show your work** - Hardware photos prove you built it
3. **Keep it professional** - Good lighting, clean backgrounds
4. **Optimize everything** - Fast loading = better UX
5. **Add alt text** - Important for accessibility and SEO

---

## 🚀 Next Steps

1. Start with **High Priority** images
2. Test each image as you add it
3. Ensure all images load correctly on GitHub Pages
4. Optimize file sizes before committing
5. Update this guide as you add more images

Good luck! 🎉

