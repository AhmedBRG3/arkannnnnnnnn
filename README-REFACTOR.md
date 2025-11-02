# Arkan Al Tafawuq - Refactored Design System

## Overview
This refactor transforms the Arkan Al Tafawuq website to match the visual style and motion language of caduceuslane.com while preserving all existing content, pages, and functionality.

## Key Features Implemented

### 🎨 Visual Design
- **Dark Theme**: Deep black background (#0b0b0b) with high contrast text
- **Cinematic Typography**: Large, bold headings with proper spacing and letter-spacing
- **Color Palette**: Accent color (#d3aa8b) with proper contrast ratios
- **Rounded Corners**: Consistent border-radius system (8px, 16px, 24px, 32px)

### 🎬 Motion & Interactions
- **Full-Screen Loader**: Progress bar with percentage display
- **Custom Cursor**: Interactive cursor that scales on hover
- **Scroll Reveals**: Smooth fade-in animations with stagger
- **Magnetic Hovers**: CTAs and buttons with magnetic hover effects
- **Video Behavior**: Rounded video panels with autoplay/pause on view

### ♿ Accessibility
- **WCAG 2.2 AA Compliance**: Proper contrast ratios and focus states
- **Reduced Motion Support**: Respects `prefers-reduced-motion`
- **Keyboard Navigation**: Full keyboard accessibility
- **Skip Links**: Skip to main content functionality
- **ARIA Labels**: Proper labeling for screen readers

### ⚡ Performance
- **Lazy Loading**: Images load as they enter viewport
- **Font Preloading**: Critical fonts preloaded for better performance
- **CSS Optimization**: Efficient CSS with custom properties
- **Image Optimization**: WebP format with proper loading attributes

## File Structure

```
src/
├── index.css                 # Global styles and design system
├── utils/site.js            # Site utilities (loader, cursor, reveals)
├── components/
│   ├── Arkanhome/
│   │   ├── Arkanhome.js     # Updated with new classes
│   │   └── Arkanhome.css    # Refactored styles
│   └── Navbar/
│       ├── Navbar.js        # Preserved functionality
│       └── Navbar.css       # Updated with new design system
└── App.js                   # Updated with site utilities
```

## CSS Design System

### Variables
```css
:root {
  /* Colors */
  --bg: #0b0b0b;
  --fg: #f5f5f5;
  --muted: #bfbfbf;
  --accent: #d3aa8b;
  
  /* Spacing */
  --space-xs: 8px;
  --space-sm: 16px;
  --space-md: 24px;
  --space-lg: 40px;
  --space-xl: clamp(72px, 8vw, 140px);
  
  /* Typography */
  --font-display: 'DMSerifText-Regular', serif;
  --text-base: 1rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  /* ... more sizes */
  
  /* Animation */
  --ease: cubic-bezier(0.2, 0.6, 0, 1);
  --duration-fast: 0.2s;
  --duration-normal: 0.4s;
  --duration-slow: 0.6s;
}
```

## Usage Guide

### Adding Reveal Animations
```html
<div class="reveal">Content that fades in on scroll</div>
```

### Adding Magnetic Hovers
```html
<span class="magnetic">
  <button>Magnetic Button</button>
</span>
```

### Adding Video Wrappers
```html
<div class="videoWrap">
  <video autoplay muted loop>
    <source src="video.mp4" type="video/mp4">
  </video>
</div>
```

### Adding Custom Classes
The site utilities automatically add classes to common elements:
- `.reveal` - Added to headings, cards, and section headers
- `.magnetic` - Added to buttons and CTAs
- `.videoWrap` - Added to video elements

## Performance Targets
- **LCP**: ≤ 2.5s on fast 4G
- **CLS**: ≤ 0.05
- **TBT**: ≤ 200ms on desktop

## Browser Support
- Modern browsers with ES6+ support
- IntersectionObserver API for scroll reveals
- CSS Custom Properties for theming
- Graceful degradation for older browsers

## Development Notes

### Preserved Functionality
- All existing pages and routes maintained
- Navigation structure unchanged
- Content and metadata preserved
- SEO tags and structured data intact

### New Features
- Dark theme with high contrast
- Smooth animations and transitions
- Custom cursor interactions
- Magnetic hover effects
- Scroll-triggered reveals
- Video autoplay behavior

### Accessibility Features
- Skip links for keyboard navigation
- Focus management and visible focus states
- Reduced motion support
- Proper ARIA labels and roles
- High contrast color scheme

## Future Enhancements
- Add more micro-interactions
- Implement page transitions
- Add more animation variants
- Optimize for mobile performance
- Add more accessibility features

## Testing Checklist
- [ ] All pages load correctly
- [ ] Navigation works on all devices
- [ ] Animations respect reduced motion
- [ ] Keyboard navigation works
- [ ] Screen reader compatibility
- [ ] Performance targets met
- [ ] Cross-browser compatibility
