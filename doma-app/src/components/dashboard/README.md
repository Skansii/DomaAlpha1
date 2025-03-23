# User Dashboard Components

This directory contains components for the authenticated user dashboard following the design specifications in `User Dashboard.md`.

## Component Structure

The dashboard follows a 3-panel layout:

1. **LeftSidebar.tsx** - Navigation panel with links to different dashboard sections
2. **MainContent.tsx** - Primary content area showing project overview and status
3. **RightSidebar.tsx** - Quick access panel with notifications and recent activity

## Pages

The dashboard includes the following pages:
- Dashboard home (`/user-dashboard`)
- My Offers (`/user-dashboard/offers`)
- 3D Renderings (`/user-dashboard/renderings`)
- Project Status (`/user-dashboard/project-status`)
- File Uploads (`/user-dashboard/uploads`)
- Help & Support (`/user-dashboard/support`)
- Profile & Settings (`/user-dashboard/profile`)

## Implementation Notes

- All components use relative imports (e.g., `import X from "../../components/Y"`) rather than path aliases
- The dashboard uses Material UI components with a custom DOMA Design theme
- Images are stored in the `/public/images` directory
- The dashboard is responsive and adapts to different screen sizes

## Troubleshooting

If you encounter import issues:
1. Make sure you're using relative imports throughout the dashboard components
2. Check that the app is being run from the `doma-app` directory with `npm run dev`
3. Clear the Next.js cache with `rm -rf .next` if needed 