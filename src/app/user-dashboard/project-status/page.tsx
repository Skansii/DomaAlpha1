'use client';

import { Box, Typography, Paper } from '@mui/material';

export default function ProjectStatusPage() {
  return (
    <Box sx={{ py: 3 }}>
      <Typography variant="h4" component="h1" fontWeight="600" sx={{ mb: 4 }}>
        Project Status
      </Typography>
      
      <Paper sx={{ p: 3 }}>
        <Typography variant="body1">
          This is the Project Status page where users can track the execution progress of their kitchen projects.
        </Typography>
      </Paper>
    </Box>
  );
} 