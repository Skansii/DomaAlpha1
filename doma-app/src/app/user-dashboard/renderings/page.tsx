'use client';

import { Box, Typography, Paper, Grid, Card, CardMedia, CardContent, Button, Chip, Stack } from '@mui/material';
import Image from 'next/image';

export default function RenderingsPage() {
  // Sample rendering data
  const renderings = [
    {
      id: 1,
      title: 'Modern Kitchen Design',
      description: 'Open concept with island and premium fixtures',
      image: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4',
      date: '2023-03-15',
      status: 'Final',
    },
    {
      id: 2,
      title: 'Scandinavian Style Kitchen',
      description: 'Bright, airy design with natural wood elements',
      image: 'https://images.unsplash.com/photo-1556912167-f556f1f39fdf',
      date: '2023-03-10',
      status: 'In Progress',
    },
    {
      id: 3,
      title: 'Luxury Dark Kitchen',
      description: 'Dark cabinets with marble countertops',
      image: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77',
      date: '2023-03-05',
      status: 'Final',
    },
    {
      id: 4,
      title: 'Minimalist White Kitchen',
      description: 'Clean lines and seamless storage solutions',
      image: 'https://images.unsplash.com/photo-1574739782594-db4ead022697',
      date: '2023-02-28',
      status: 'Final',
    },
    {
      id: 5,
      title: 'Industrial Style Kitchen',
      description: 'Raw materials and exposed elements',
      image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a',
      date: '2023-02-20',
      status: 'Revision',
    },
    {
      id: 6,
      title: 'Farmhouse Kitchen',
      description: 'Rustic elements with modern functionality',
      image: 'https://images.unsplash.com/photo-1560185007-5f0bb1866cab',
      date: '2023-02-15',
      status: 'Final',
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Final': return 'success';
      case 'In Progress': return 'info';
      case 'Revision': return 'warning';
      default: return 'default';
    }
  };

  return (
    <Box sx={{ py: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1" fontWeight="600">
          3D Renderings
        </Typography>
        <Button variant="contained" color="primary">
          Request New Rendering
        </Button>
      </Box>
      
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>Recent Renderings</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          View and manage your kitchen design visualizations. Click on any rendering to see details and provide feedback.
        </Typography>
        
        <Grid container spacing={3}>
          {renderings.map((rendering) => (
            <Grid item xs={12} sm={6} md={4} key={rendering.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                <Box sx={{ position: 'relative', pt: '56.25%' /* 16:9 aspect ratio */ }}>
                  <CardMedia
                    component="img"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                    image={`${rendering.image}?q=80&w=800&auto=format&fit=crop`}
                    alt={rendering.title}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      p: 1,
                    }}
                  >
                    <Chip 
                      label={rendering.status} 
                      color={getStatusColor(rendering.status)} 
                      size="small"
                      sx={{ fontWeight: 'medium' }}
                    />
                  </Box>
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
                    {rendering.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {rendering.description}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Last updated: {new Date(rendering.date).toLocaleDateString()}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
} 