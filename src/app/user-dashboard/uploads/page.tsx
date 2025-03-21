'use client';

import { Box, Typography, Paper } from '@mui/material';

export default function UploadsPage() {
  return (
    <Box sx={{ py: 3 }}>
      <Typography variant="h4" component="h1" fontWeight="600" sx={{ mb: 4 }}>
        File Uploads
      </Typography>
      
      <Paper sx={{ p: 3 }}>
        <Typography variant="body1">
          This is the File Uploads page where users can upload scanned plans and other documents related to their kitchen projects.
        </Typography>
      </Paper>
    </Box>
  );
} 