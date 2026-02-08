# Shabina Bozai - Portfolio Website

A modern, professional portfolio website built with Next.js 14, TypeScript, and Tailwind CSS, showcasing 20+ years of experience as a Principal Software Engineer.

## Features

- ✨ Modern, distinctive design with animated components
- 🎨 Custom color scheme with gradient accents
- 📱 Fully responsive across all devices
- ⚡ Fast performance with Next.js 14 App Router
- 🎭 Smooth animations using Framer Motion
- 💼 Professional sections: Hero, About, Experience, Education, Contact
- 📧 Contact form with email integration
- 🎯 SEO optimized with proper metadata

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Fonts:** 
  - Crimson Pro (Display)
  - Archivo (Body)
  - JetBrains Mono (Code)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd shabina-portfolio
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

\`\`\`
shabina-portfolio/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── Hero.tsx             # Hero section with animated intro
│   ├── About.tsx            # Professional summary and skills
│   ├── Experience.tsx       # Timeline of work experience
│   ├── EducationContact.tsx # Education and contact form
│   └── Footer.tsx           # Footer with links
├── public/                  # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
\`\`\`

## Customization

### Colors
Edit the color scheme in \`tailwind.config.js\`:
\`\`\`javascript
colors: {
  primary: { /* Your primary colors */ },
  accent: { /* Your accent colors */ },
}
\`\`\`

### Content
Update personal information in:
- \`components/Hero.tsx\` - Contact details and intro
- \`components/About.tsx\` - Professional summary and skills
- \`components/Experience.tsx\` - Work history
- \`components/EducationContact.tsx\` - Education and contact info

### Styling
Global styles are in \`app/globals.css\`. Modify:
- CSS variables for theme colors
- Animation keyframes
- Custom utility classes

## Building for Production

\`\`\`bash
npm run build
npm run start
\`\`\`

## Deployment

This Next.js app can be deployed to:
- **Vercel** (recommended): One-click deployment
- **Netlify**: Configure build command as \`npm run build\`
- **AWS/Azure/GCP**: Deploy as a Node.js application
- **Static Export**: Add \`output: 'export'\` to \`next.config.js\`

## Performance Optimizations

- Uses Next.js 14 App Router for optimal performance
- Lazy loading animations with Framer Motion
- Optimized fonts with next/font
- CSS-only animations where possible
- Responsive images and assets

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2026 Shabina Bozai. All rights reserved.

## Contact

- **Email:** Shabina.bozai@gmail.com
- **Phone:** 919-523-1943
- **LinkedIn:** [linkedin.com/in/shabina-bozai](https://www.linkedin.com/in/shabina-bozai)

---

**Seeking opportunities as:**
- Lead Software Engineer
- Principal Software Developer
- Software Architect

*Authorized to work in the United States*
