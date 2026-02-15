

# Medex Medical Website — Implementation Plan

## Overview
A pixel-perfect, responsive medical supplies website for Medex, a dental implant and medical equipment distributor. The design follows a clean, modern medical aesthetic with a red and white color scheme, soft shadows, and rounded containers.

---

## Pages to Build

### 1. Home Page
The longest and most complex page with multiple sections:
- **Navbar** — Sticky header with Medex logo, 7 navigation links, red "Download App" button, and language switcher icon
- **Hero Section** — Large banner with dental implant imagery, heading text, CTA buttons, and slider navigation arrows
- **About Preview** — Team photo with text about the company and vision statement
- **Our Values** — Circular implant graphic at center with 4 value cards arranged around it
- **Services Section** — Floating pinned service cards with medical imagery
- **Medex Academy** — Course cards showing images, instructor avatars, pricing
- **Testimonials** — Stacked testimonial cards UI
- **Business Partners** — Logo grid of partner brands
- **Join Our Community** — Contact form on the left, world map graphic on the right
- **Footer** — 4-column layout with company info, quick links, products, newsletter, app store buttons, social icons, and contact details

### 2. Products Page
- Hero banner with "Products" title overlay
- Grid of 4 large rounded product category cards (Advanced Dental Implants, CAD/CAM Systems, Specialized Laser Devices, Advanced Filling Materials)
- Each card has a title, product image, and a red "+" button
- Download App popup/modal with phone mockup

### 3. Category Page
- Hero banner with "Category" title
- 3x2 grid of brand cards (e.g., Operations Equipment, Bluem Oxygen Gel, B&B Implant, etc.)
- Each card shows: brand title, product count ("10 Products"), and red "See Products >" link

### 4. Sub-category Page
- Same hero banner style with "Sub-category" title
- 3x2 grid of sub-category cards (e.g., B&B Fixtures Line, Healing Abutments, Ball Abutments, etc.)
- Same card layout as Category page

### 5. About Us Page
- Hero banner with team photo
- Large decorative typography headline about the company mission
- "Our Vision" section with descriptive text
- Full-width team/office image
- "Our Values" section with 4 numbered cards, each with image and description
- "Our Business Partners" logo grid
- Footer

### 6. Contact Us Page
- Hero banner with "Contact Us" title
- Large card container with "Medex" badge and "Join to Our Community" heading
- Contact form (Name, Phone, Email, Subject, Message fields) on the left
- World map graphic with red location dots on the right
- Red "Submit" button
- Footer

---

## Reusable Components
- **Navbar** — Shared across all pages with active state highlighting
- **HeroBanner** — Configurable hero with background image and title text
- **Footer** — Full 4-column footer with newsletter, links, and contact info
- **CategoryCard** — Used on Category and Sub-category pages (title, count, CTA link)
- **ProductCard** — Large rounded cards with image and "+" button for Products page
- **ValueCard** — Numbered cards with image and description for About/Home
- **ContactForm** — Form with validation for Contact and Home pages
- **PartnersGrid** — Partner logo grid for About and Home pages
- **SectionTitle** — Reusable section heading component
- **AppDownloadModal** — Popup with phone mockup and download CTA

---

## Design System
- **Primary color**: Red (#DC2626 / similar) for buttons, highlights, active links
- **Background**: White with light gray (#F5F5F5) section alternation
- **Typography**: Clean sans-serif font (as per Figma), bold headings
- **Shadows**: Soft box shadows on cards
- **Border radius**: Large rounded corners on hero containers and cards
- **Spacing**: Consistent padding/margin system matching Figma exactly

---

## Responsiveness
- Desktop: Full multi-column layouts as shown in designs
- Tablet: Stacked 2-column grids, hamburger menu
- Mobile: Single column, optimized spacing, collapsed navigation

---

## Routing Structure
- `/` — Home
- `/about` — About Us
- `/products` — Products listing
- `/products/:category` — Category page
- `/products/:category/:subcategory` — Sub-category page
- `/contact` — Contact Us

---

## Notes
- All content is static/frontend-only (no backend needed)
- Placeholder images will be used for product photos, team images, and partner logos since actual assets aren't available from Figma
- SVG icons from Lucide React where applicable
- The Medex logo will be created as an SVG component

