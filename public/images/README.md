# Image Organization

## Directory Structure:
```
public/images/
├── projects/           # Project thumbnail images
│   ├── onboarding-redesign.jpg
│   └── mobile-banking-app.jpg
├── case-studies/       # Case study detailed images
│   ├── onboarding/
│   │   ├── hero.jpg
│   │   ├── research.jpg
│   │   └── solution.jpg
│   └── banking/
│       ├── hero.jpg
│       ├── research.jpg
│       └── solution.jpg
└── profile/           # Profile and general images
    └── profile-photo.jpg

## Image Guidelines:
- **Format**: Use WebP for best performance, fallback to JPG/PNG
- **Sizes**:
  - Project thumbnails: 400x250px
  - Hero images: 800x500px
  - Detail images: 700x400px
- **Optimization**: Compress images before uploading
- **Naming**: Use kebab-case (lowercase with hyphens)

## Usage in Code:
```jsx
// In React components (Portfolio.jsx)
<img src="/portfolio/images/projects/onboarding-redesign.jpg" alt="Project thumbnail" />

// In Astro pages
<img src="/portfolio/images/case-studies/onboarding/hero.jpg" alt="Case study hero" />
```

Note: The `/portfolio/` prefix is needed because of the GitHub Pages base path.
