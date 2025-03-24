'use client';

import React from 'react';
import Image from 'next/image';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Divider,
  Paper,
  useTheme,
  Stack,
  Avatar,
} from '@mui/material';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import SupportOutlinedIcon from '@mui/icons-material/SupportOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import MaterialButton from '@/components/ui/MaterialButton';

export default function Features() {
  const theme = useTheme();
  
  const mainFeatures = [
    {
      icon: <DesignServicesOutlinedIcon sx={{ fontSize: 40 }} />,
      title: 'Expert Design Services',
      description: 'Our team of professional designers create personalized kitchen layouts tailored to your specific needs and preferences.',
    },
    {
      icon: <Diversity3OutlinedIcon sx={{ fontSize: 40 }} />,
      title: 'Collaborative Process',
      description: 'Work directly with our designers through a collaborative process that ensures your vision comes to life exactly as you imagine.',
    },
    {
      icon: <ViewInArOutlinedIcon sx={{ fontSize: 40 }} />,
      title: '3D Visualization',
      description: 'See your kitchen before it\'s built with our state-of-the-art 3D visualization tools that provide photorealistic renderings.',
    },
    {
      icon: <ConstructionOutlinedIcon sx={{ fontSize: 40 }} />,
      title: 'Quality Craftsmanship',
      description: 'All our cabinets and installations are handled by skilled craftsmen with years of experience in kitchen remodeling.',
    },
    {
      icon: <DashboardCustomizeOutlinedIcon sx={{ fontSize: 40 }} />,
      title: 'Customization Options',
      description: 'Choose from thousands of combinations of materials, finishes, hardware, and accessories to create your perfect kitchen.',
    },
    {
      icon: <SupportOutlinedIcon sx={{ fontSize: 40 }} />,
      title: 'Lifetime Support',
      description: 'Our relationship doesn\'t end with installation. We provide lifetime support for all our products and services.',
    },
  ];
  
  const detailedFeatures = [
    {
      title: 'Design Excellence',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg',
      points: [
        'Personalized kitchen layouts based on your space and needs',
        'Consideration of workflow and ergonomics',
        'Optimization of storage and counter space',
        'Integration of appliances and fixtures',
        'Color scheme and material selection guidance',
      ],
    },
    {
      title: 'Premium Materials',
      image: 'https://images.pexels.com/photos/5824883/pexels-photo-5824883.jpeg',
      points: [
        'High-quality wood, veneer, and laminate options',
        'Durable countertop materials including granite, quartz, and solid surface',
        'Soft-close drawers and doors standard on all cabinets',
        'Water-resistant and stain-resistant finishes',
        'Environmentally sustainable material options',
      ],
    },
    {
      title: 'Cutting-Edge Technology',
      image: 'https://images.pexels.com/photos/7937326/pexels-photo-7937326.jpeg',
      points: [
        'State-of-the-art design software',
        'Photorealistic 3D renderings',
        'Virtual reality kitchen tours available',
        'Digital material and finish library',
        'Cloud-based project management system',
      ],
    },
  ];
  
  return (
    <Box>
      {/* Hero Section */}
      <Box 
        sx={{ 
          position: 'relative',
          height: { xs: 300, md: 400 },
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: { xs: 8, md: 12 },
        }}
      >
        <Box 
          component="img"
          src="https://images.pexels.com/photos/3926542/pexels-photo-3926542.jpeg"
          alt="Kitchen design feature"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <Box 
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7))',
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <Typography variant="h2" component="h1" fontWeight={700} color="white" gutterBottom>
            Our Features
          </Typography>
          <Typography variant="h5" color="white" sx={{ maxWidth: 700, mx: 'auto', opacity: 0.9 }}>
            Discover the innovative features that make Doma Design the perfect choice for your dream kitchen.
          </Typography>
        </Container>
      </Box>
      
      {/* Main Features */}
      <Container maxWidth="lg" sx={{ mb: { xs: 8, md: 12 } }}>
        <Typography variant="h3" component="h2" fontWeight={700} textAlign="center" gutterBottom>
          Why Choose Doma Design?
        </Typography>
        <Typography variant="h6" color="text.secondary" textAlign="center" sx={{ mb: 8, maxWidth: 800, mx: 'auto' }}>
          Our comprehensive kitchen design services combine expert craftsmanship with innovative technology to deliver exceptional results.
        </Typography>
        
        <Grid container spacing={4}>
          {mainFeatures.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 3,
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 8px 24px rgba(0,0,0,0.1)`,
                  },
                }}
                elevation={2}
              >
                <CardContent sx={{ flexGrow: 1, p: 4 }}>
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h5" component="h3" fontWeight={600} gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      
      {/* Detailed Features */}
      <Box sx={{ bgcolor: 'background.default', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" fontWeight={700} textAlign="center" gutterBottom>
            Our Comprehensive Services
          </Typography>
          <Typography variant="h6" color="text.secondary" textAlign="center" sx={{ mb: 8, maxWidth: 800, mx: 'auto' }}>
            Every aspect of our service is crafted to ensure your kitchen is not only beautiful but functional and durable.
          </Typography>
          
          <Grid container spacing={8}>
            {detailedFeatures.map((feature, index) => (
              <Grid item xs={12} key={index}>
                <Paper 
                  elevation={4} 
                  sx={{ 
                    borderRadius: 4,
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' }
                  }}
                >
                  <Box 
                    sx={{ 
                      width: { xs: '100%', md: '50%' },
                      position: 'relative',
                      minHeight: { xs: 300, md: 400 }
                    }}
                  >
                    <Box
                      component="img"
                      src={feature.image}
                      alt={feature.title}
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </Box>
                  <Box 
                    sx={{ 
                      width: { xs: '100%', md: '50%' },
                      p: { xs: 4, md: 6 },
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center'
                    }}
                  >
                    <Typography variant="h4" component="h3" fontWeight={700} gutterBottom>
                      {feature.title}
                    </Typography>
                    <Divider sx={{ width: 80, borderWidth: 2, borderColor: 'primary.main', my: 3 }} />
                    <Box>
                      {feature.points.map((point, i) => (
                        <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                          <CheckCircleOutlineIcon sx={{ color: 'success.main', mr: 2, mt: 0.5 }} />
                          <Typography variant="body1">{point}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      
      {/* Call to Action */}
      <Box 
        sx={{ 
          bgcolor: 'primary.main',
          color: 'white',
          py: { xs: 8, md: 12 },
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" fontWeight={700} gutterBottom>
            Ready to Start Your Project?
          </Typography>
          <Typography variant="h6" sx={{ mb: 6, opacity: 0.9 }}>
            Transform your kitchen with our expert design services. Get in touch with our team today to begin your journey.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
            <MaterialButton 
              href="/pricing" 
              variant="contained" 
              color="secondary" 
              size="large"
              sx={{ 
                bgcolor: 'white', 
                color: 'primary.main',
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.9)',
                }
              }}
            >
              View Pricing
            </MaterialButton>
            <MaterialButton 
              href="/contact" 
              variant="outlined" 
              color="inherit" 
              size="large"
              sx={{ 
                borderColor: 'white',
                '&:hover': {
                  borderColor: 'white',
                  bgcolor: 'rgba(255,255,255,0.1)',
                }
              }}
            >
              Contact Us
            </MaterialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
} 