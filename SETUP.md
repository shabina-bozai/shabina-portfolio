# Quick Setup Instructions

## Prerequisites
- Node.js 18.17 or later installed
- npm or yarn package manager

## Installation Steps

1. **Extract the portfolio folder**
   - Unzip the portfolio files to your desired location

2. **Navigate to the project directory**
   \`\`\`bash
   cd shabina-portfolio
   \`\`\`

3. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`
   This will install:
   - Next.js 14
   - React 18
   - TypeScript
   - Tailwind CSS
   - Framer Motion (for animations)

4. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

5. **Open your browser**
   - Navigate to: http://localhost:3000
   - Your portfolio should be live!

## What You'll See

Your portfolio includes:

✨ **Hero Section**
- Animated introduction with your name and title
- Direct links to LinkedIn, email, and phone
- Smooth scroll-down indicator

🎯 **About Section**
- Professional summary highlighting 20+ years of experience
- Key achievements (30% defect reduction, modernization initiatives)
- Core skills organized by category (Architecture, Backend, Cloud, etc.)

💼 **Experience Section**
- Timeline view of your career history
- Current role at Delta Dental (2018-Present) prominently featured
- Previous positions at Ericsson, Wolters Kluwer, Genesys, and consulting firms
- Technology stacks listed for each role

🎓 **Education & Contact Section**
- MCA degree from JNTU
- Continuous learning in AI-assisted development
- Interactive contact form (opens email client)
- Direct contact information

## Customization

Want to make changes?

1. **Update Contact Info**
   - Edit \`components/Hero.tsx\`
   - Edit \`components/EducationContact.tsx\`

2. **Modify Experience**
   - Edit the \`experiences\` array in \`components/Experience.tsx\`

3. **Change Colors**
   - Edit \`tailwind.config.js\` for the color scheme
   - Edit \`app/globals.css\` for theme variables

4. **Add New Sections**
   - Create new component in \`components/\`
   - Import and add to \`app/page.tsx\`

## Building for Production

When ready to deploy:

\`\`\`bash
npm run build
npm run start
\`\`\`

See \`DEPLOYMENT.md\` for detailed deployment instructions to Vercel, Netlify, or other platforms.

## Troubleshooting

**Port already in use?**
\`\`\`bash
npm run dev -- -p 3001
\`\`\`

**Install errors?**
- Make sure Node.js is 18.17 or later: \`node --version\`
- Clear npm cache: \`npm cache clean --force\`
- Delete node_modules and reinstall: \`rm -rf node_modules && npm install\`

**Build errors?**
- Check TypeScript errors: \`npm run lint\`

## Next Steps

1. ✅ Test the site locally
2. ✅ Customize content to your preferences
3. ✅ Choose a deployment platform (Vercel recommended)
4. ✅ Deploy and share your portfolio!

## Support

For Next.js questions: https://nextjs.org/docs
For Tailwind CSS: https://tailwindcss.com/docs
For Framer Motion: https://www.framer.com/motion/

---

Built with ❤️ for Shabina Bozai
