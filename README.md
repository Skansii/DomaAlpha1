# Doma Design - Kitchen & Cabinet Solutions

A modern web application for Doma Design, a company specializing in kitchen design and cabinet solutions. This application allows users to explore design options, request quotes, and manage their projects.

## Features

- Responsive design optimized for all devices
- User authentication system with secure login/signup
- Interactive dashboard for registered users
- Contact form for inquiries and quote requests
- Service catalog with detailed information
- Clean, modern UI built with Tailwind CSS

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Authentication**: JWT-based authentication (simulated in the demo version)
- **Architecture**: MVC pattern with service objects for business logic

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/doma-design.git
   cd doma-design
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` with your specific configuration.

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
├── public/            # Static assets
├── src/
│   ├── app/           # App router pages
│   ├── components/    # Reusable UI components
│   ├── context/       # React context providers
│   ├── services/      # Business logic services
│   └── styles/        # Global styles
├── .env.example       # Example environment variables
├── .gitignore         # Git ignore file
├── next.config.js     # Next.js configuration
├── package.json       # Project dependencies
├── README.md          # Project documentation
└── tailwind.config.js # Tailwind CSS configuration
```

## Development Guidelines

- Follow the MVC architecture
- Use service objects for business logic
- Adhere to TypeScript type safety
- Enforce test coverage minimums (coming soon)
- Add new environment variables to `.env.example`

## Demo Credentials

For testing purposes, you can use the following demo credentials:

- **Email**: demo@example.com
- **Password**: password123

## Deployment

This application can be deployed to Vercel with minimal configuration:

```bash
npm run build
# or
yarn build
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/) 