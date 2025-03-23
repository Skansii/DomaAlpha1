'use client';

import { Box, Typography, Paper } from '@mui/material';

export default function SupportPage() {
  return (
    <Box sx={{ py: 3 }}>
      <Typography variant="h4" component="h1" fontWeight="600" sx={{ mb: 4 }}>
        Help & Support
      </Typography>
      
      <Paper sx={{ p: 3 }}>
        <Typography variant="body1">
          This is the Help & Support page where users can find FAQs and contact customer support.
        </Typography>
      </Paper>
    </Box>
  );
} 