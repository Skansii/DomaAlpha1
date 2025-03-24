'use client';

import { Box, Typography, Paper } from '@mui/material';

export default function OffersPage() {
  return (
    <Box sx={{ py: 3 }}>
      <Typography variant="h4" component="h1" fontWeight="600" sx={{ mb: 4 }}>
        My Offers
      </Typography>
      
      <Paper sx={{ p: 3 }}>
        <Typography variant="body1">
          This is the My Offers page where users can view price offers for their kitchen projects.
        </Typography>
      </Paper>
    </Box>
  );
} 