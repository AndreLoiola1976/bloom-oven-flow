

# The Bloom Oven — Premium Landing Page

## Design Vision

A warm, artisanal, emotionally resonant landing page that feels like stepping into a sunlit bakery. Every section funnels toward WhatsApp ordering while maintaining visual sophistication.

## Color Palette & Typography

- **Cream background:** `#FDF8F3`
- **Sage green:** `#A3B18A` (brand accent)
- **Soft rose:** `#E8A0A0` (warm accent)
- **Charcoal text:** `#2D2D2D`
- **WhatsApp green:** `#25D366` (primary CTA only)
- **Headings:** Playfair Display (Google Font, serif — elegant, bakery-appropriate)
- **Body:** Inter (Google Font, clean sans-serif)

## WhatsApp Utility

A `getWhatsAppUrl(message)` helper using phone `+14752569577` and URL-encoded pre-filled messages for each CTA context.

## Page Sections

### 1. Header
- Logo (uploaded image) left, minimal nav right (just "Menu" / "About" scroll anchors + small Instagram icon)
- Clean, translucent backdrop on scroll

### 2. Hero
- Full-width warm gradient/texture background
- Large serif headline: *"Baked with Heart. Free from Gluten, Dairy & Refined Sugar."*
- Subline: *"Weekly fresh bakes from our licensed home kitchen in Connecticut 🍪"*
- Primary CTA: large green "Order on WhatsApp" button
- Micro-copy below: "We reply within 30 minutes"

### 3. How It Works (3 steps)
- **Message us** → **We confirm details** → **Fresh to your door**
- Simple icons, horizontal on desktop, vertical on mobile
- Removes ordering anxiety

### 4. Product Showcase — Intent Paths
- 3-4 elegant cards (Cookies & Treats, Cakes, Cupcakes, Custom Orders)
- Each with a beautiful placeholder image, short description, and intent-specific WhatsApp CTA
- Pre-filled messages like: `Hi! I'd like to order cookies 🍪`

### 5. Brand Story
- Short warm paragraph about the bakery's mission — health-conscious, handmade, love
- Soft background, maybe a subtle pattern

### 6. Testimonials
- 2-3 elegant quote cards with customer names
- Positioned after products to resolve hesitation

### 7. Instagram Section
- Grid of lifestyle-style placeholder images
- "Follow @thebloomoven" link — secondary, discovery-focused

### 8. Final CTA
- Full-width warm section
- "Not sure what to order? Just say hi."
- WhatsApp button with pre-filled: `Hi! I'd love to learn more about your bakes 🌸`

### 9. Footer
- Logo, address (5 Grand St, CT), phone, Instagram, Facebook links
- Small WhatsApp link
- Copyright

### 10. Sticky WhatsApp Button
- Fixed bottom-right floating button, always visible
- WhatsApp icon + "Order Now"
- Pre-filled: `Hi! I'd like to place an order 🌸`

## Files to Create/Modify

| File | Purpose |
|------|---------|
| `src/pages/Index.tsx` | Full landing page composing all sections |
| `src/components/Header.tsx` | Minimal nav with logo |
| `src/components/HeroSection.tsx` | Hero with primary CTA |
| `src/components/HowItWorks.tsx` | 3-step ordering process |
| `src/components/OrderPaths.tsx` | Intent-based product cards |
| `src/components/BrandStory.tsx` | About section |
| `src/components/Testimonials.tsx` | Social proof |
| `src/components/InstagramSection.tsx` | Visual grid + follow link |
| `src/components/FinalCTA.tsx` | Catch-all conversion block |
| `src/components/Footer.tsx` | Secondary channels + info |
| `src/components/WhatsAppButton.tsx` | Sticky floating CTA |
| `src/lib/whatsapp.ts` | `getWhatsAppUrl()` helper |
| `src/index.css` | Google Fonts imports + brand CSS variables |
| `tailwind.config.ts` | Extended brand colors |
| `index.html` | Add Google Fonts link |

## Key Design Principles
- Mobile-first responsive layout
- Single primary action (WhatsApp) at every scroll position
- Intent-specific pre-filled messages reduce friction
- Visual warmth and premium feel throughout
- Instagram/phone are accessible but never compete with WhatsApp

