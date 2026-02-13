# QuoteFlow Marketing Website

Marketing website for QuoteFlow - Custom Pricing for Shopify.

## Tech Stack

- **Framework**: Next.js 15.1.6 with App Router
- **UI Library**: React 19
- **Styling**: Tailwind CSS 3.4.1
- **Language**: TypeScript 5

## Project Structure

```
quote-flow-website/
├── app/
│   ├── globals.css      # Global styles with Tailwind directives
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Homepage
├── components/          # React components (to be added)
├── public/             # Static assets
├── tailwind.config.ts  # Tailwind configuration (includes custom cream color)
├── tsconfig.json       # TypeScript configuration
├── next.config.ts      # Next.js configuration
└── package.json        # Dependencies

```

## Getting Started

1. **Install dependencies** (already done):
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Custom Theme

- **Primary Background**: `bg-cream` (#F0ECE6) - matches existing landing page

## Migration Progress

Porting sections from existing Vite/React landing page:

- [x] Phase 1: Project Setup
- [ ] Navigation component
- [ ] Footer component
- [ ] Hero section
- [ ] LogoMarquee section
- [ ] Dashboard section
- [ ] Features section
- [ ] Integrations section
- [ ] Pricing section
- [ ] SuccessStories section
- [ ] FAQ section
- [ ] Contact section

## Development

```bash
# Development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```
