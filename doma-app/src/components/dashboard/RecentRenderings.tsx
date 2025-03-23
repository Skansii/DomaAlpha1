'use client';

import { 
  Box, 
  Typography, 
  Paper, 
  Card, 
  CardContent,
  Chip
} from '@mui/material';

export default function RecentRenderings() {
  return (
    <Paper sx={{ p: 3, height: '100%' }}>
      <Typography variant="h6" sx={{ mb: 2 }}>Recent 3D Renderings</Typography>
      
      <Card 
        sx={{ 
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          borderRadius: 2
        }}
      >
        <Box sx={{ position: 'relative' }}>
          <Box 
            component="img"
            src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77?q=80&w=800" 
            alt="Luxury Dark Kitchen"
            sx={{ 
              width: '100%',
              height: 180,
              objectFit: 'cover',
              display: 'block'
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 8,
              right: 8
            }}
          >
            <Chip 
              label="Final" 
              size="small"
              sx={{ 
                bgcolor: '#2e7d32',
                color: 'white',
                fontSize: '0.7rem',
                height: 24
              }}
            />
          </Box>
        </Box>
        <CardContent sx={{ p: 2 }}>
          <Typography variant="subtitle1" fontWeight="medium">
            Luxury Dark Kitchen
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
            Dark cabinets with marble countertops
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1 }}>
            Updated: 05/03/2023
          </Typography>
        </CardContent>
      </Card>
    </Paper>
  );
} 