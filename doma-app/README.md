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
- Supabase account for authentication (free tier works fine)

### Installation

```bash
# Install dependencies
npm install

# Set up Supabase authentication
npm run setup-auth
```

### Authentication Setup

This application uses Supabase for authentication. Follow these steps to set up authentication:

1. Create a Supabase account at [https://supabase.com](https://supabase.com) if you don't have one
2. Create a new project in Supabase
3. Navigate to Project Settings > API to get your project URL and anon key
4. Run `npm run setup-auth` and enter these credentials
5. Enable Email/Password authentication in Supabase (Auth > Providers)
6. Configure any other auth settings as needed (confirmation emails, OAuth providers, etc.)

The user dashboard is protected and only accessible to authenticated users.

### Development

```bash
# Start the development server
npm run dev

# Or use the dashboard script for a fresh start
./start-dashboard.sh
```

The application will be available at:
- Main website: http://localhost:3000
- User dashboard: http://localhost:3000/user-dashboard (requires authentication)
- Login: http://localhost:3000/login
- Sign up: http://localhost:3000/signup

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

## Environment Setup Guide

This application requires certain environment variables to be set for proper operation. Follow these steps to configure your environment:

### 1. Create `.env.local` File

Create a file named `.env.local` in the root of the project (doma-app directory).

### 2. Configure Required Environment Variables

Add the following required environment variables to your `.env.local` file:

```
# MongoDB Connection
MONGODB_URI=mongodb://<username>:<password>@<host>:<port>/<dbname>?authSource=admin
MONGODB_DB_NAME=doma_admin

# NextAuth Configuration
NEXTAUTH_SECRET=<generate-a-secure-random-string>
NEXTAUTH_URL=http://localhost:3000

# Supabase (if using)
NEXT_PUBLIC_SUPABASE_URL=<your-supabase-url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-supabase-anon-key>
```

### 3. Security Notes

- **NEVER commit your `.env.local` file to version control**
- Make sure to generate a strong random string for `NEXTAUTH_SECRET`
- Store your production secrets securely in your deployment environment
- Rotate credentials regularly for security

### 4. Setting Up Admin User

To create an initial admin user:

```bash
npm run seed-admin
```

This script will generate a secure random password. Save this password securely as it will only be shown once.

## Development

To start the development server:

```bash
npm run dev
```

## Production

For production deployment, make sure to set up the environment variables in your hosting provider's environment configuration system.

```bash
npm run build
npm start
```
