# DOMA Design Application

Modern web application for DOMA Design, a kitchen and cabinet design company.

## Features

- Public website with product catalog and company information
- Authenticated user dashboard for clients
- Project tracking and management
- 3D rendering visualization
- File uploads and document management
- Price offers and quotes

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: Node.js 20)
- npm 9+ or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev

# Or use the dashboard script for a fresh start
./start-dashboard.sh
```

The application will be available at:
- Main website: http://localhost:3000
- User dashboard: http://localhost:3000/user-dashboard

## Project Structure

```
doma-app/
├── public/              # Static files
│   ├── images/          # Image assets
│   │   └── ...
├── src/                 # Source code
│   ├── app/             # Next.js app router
│   │   ├── user-dashboard/  # Dashboard pages
│   │   │   ├── layout.tsx   # Dashboard layout
│   │   │   ├── page.tsx     # Dashboard home
│   │   │   └── ...          # Dashboard sub-pages
│   │   └── ...          # Public website pages
│   ├── components/      # React components
│   │   ├── dashboard/   # Dashboard components
│   │   │   ├── LeftSidebar.tsx
│   │   │   ├── MainContent.tsx
│   │   │   └── RightSidebar.tsx
│   │   ├── Header.tsx   # Main site header
│   │   ├── Footer.tsx   # Main site footer
│   │   └── ...
│   └── ...
├── package.json         # Dependencies and scripts
└── next.config.js       # Next.js configuration
```

## Important Notes

- Always run the server from the `doma-app` directory to ensure correct path resolution
- Use relative imports (e.g., `../components/Header`) rather than path aliases (`@/components/Header`)
- The dashboard uses Material UI components while the public site uses Tailwind CSS

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
