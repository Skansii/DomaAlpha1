'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MaterialButton from '@/components/MaterialButton';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Tabs,
  Tab,
  Avatar,
  Divider,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import FlashOnOutlinedIcon from '@mui/icons-material/FlashOnOutlined';
import RecyclingOutlinedIcon from '@mui/icons-material/RecyclingOutlined';

export default function About() {
  const [activeTab, setActiveTab] = useState(0);
  
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };
  
  const teamMembers = [
    {
      name: 'Jane Smith',
      role: 'Founder & Lead Designer',
      bio: 'With over 15 years of experience in kitchen design, Jane has a passion for creating spaces that are both beautiful and functional.',
      image: 'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Production',
      bio: 'Michael ensures that every cabinet and component we produce meets our exacting standards for quality and craftsmanship.',
      image: 'https://images.pexels.com/photos/8961001/pexels-photo-8961001.jpeg'
    },
    {
      name: 'Sarah Johnson',
      role: 'Client Experience Manager',
      bio: 'Sarah works directly with our clients to understand their needs and ensure their vision becomes reality.',
      image: 'https://images.pexels.com/photos/5538624/pexels-photo-5538624.jpeg'
    }
  ];

  const values = [
    {
      title: 'Quality',
      description: 'We believe in delivering exceptional quality in every aspect of our work, from design to installation.',
      icon: <BuildOutlinedIcon sx={{ fontSize: 28 }} />
    },
    {
      title: 'Innovation',
      description: 'We continuously explore new materials, techniques, and designs to bring fresh ideas to our clients.',
      icon: <FlashOnOutlinedIcon sx={{ fontSize: 28 }} />
    },
    {
      title: 'Sustainability',
      description: 'We are committed to sustainable practices, using eco-friendly materials and minimizing waste.',
      icon: <RecyclingOutlinedIcon sx={{ fontSize: 28 }} />
    }
  ];

  return (
    <Box component="main">
      {/* Hero Section */}
      <Box 
        sx={{ 
          position: 'relative',
          height: { xs: '50vh', md: '60vh' },
          minHeight: 400,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Box
          component="img"
          src="https://images.pexels.com/photos/6958658/pexels-photo-6958658.jpeg"
          alt="Kitchen design studio"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 100%)',
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Box maxWidth="xl">
            <Typography variant="h2" component="h1" fontWeight={700} color="white" gutterBottom>
              About Doma Design
            </Typography>
            <Typography variant="h5" color="white" sx={{ maxWidth: 800, opacity: 0.9 }}>
              We're on a mission to create beautiful, functional kitchen spaces that inspire and bring joy to everyday living.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Navigation Tabs */}
      <Container maxWidth="lg">
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 0 }}>
          <Tabs 
            value={activeTab} 
            onChange={handleTabChange}
            textColor="primary"
            indicatorColor="primary"
            aria-label="about tabs"
          >
            <Tab label="Our Story" id="tab-0" aria-controls="tabpanel-0" />
            <Tab label="Our Values" id="tab-1" aria-controls="tabpanel-1" />
            <Tab label="Our Team" id="tab-2" aria-controls="tabpanel-2" />
          </Tabs>
        </Box>
      </Container>

      {/* Main Content */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          {/* Story Section */}
          <Box
            role="tabpanel"
            id="tabpanel-0"
            aria-labelledby="tab-0"
            hidden={activeTab !== 0}
          >
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={5}>
                <Box
                  sx={{
                    position: 'relative',
                    height: 400,
                    width: '100%',
                    borderRadius: 4,
                    overflow: 'hidden',
                    boxShadow: 6
                  }}
                >
                  <Box
                    component="img"
                    src="https://images.pexels.com/photos/6707628/pexels-photo-6707628.jpeg"
                    alt="Kitchen designers at work"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: '40%',
                      background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)',
                      opacity: 0.4
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={7}>
                <Typography variant="h3" component="h2" fontWeight={700} gutterBottom>
                  Our Story
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  Founded in 2015, Doma Design emerged from a passion for creating beautiful, functional kitchens that serve as the heart of the home. Our journey began when our founder, Jane Smith, recognized the need for kitchen designs that seamlessly blend aesthetics with practicality.
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  What started as a small design studio has grown into a comprehensive kitchen design and manufacturing company, serving clients throughout the region. Our success is built on our commitment to quality craftsmanship, innovative design, and exceptional customer service.
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  At Doma Design, we believe that the kitchen is more than just a functional space—it's where memories are made, conversations flow, and life happens. This philosophy guides every project we undertake.
                </Typography>
                <Box sx={{ mt: 4 }}>
                  <MaterialButton 
                    href="/contact" 
                    variant="outlined" 
                    color="primary"
                    size="large"
                  >
                    Get in Touch
                  </MaterialButton>
                </Box>
              </Grid>
            </Grid>
          </Box>
          
          {/* Values Section */}
          <Box
            role="tabpanel"
            id="tabpanel-1"
            aria-labelledby="tab-1"
            hidden={activeTab !== 1}
          >
            <Box sx={{ textAlign: 'center', mb: 8, maxWidth: 800, mx: 'auto' }}>
              <Typography 
                variant="overline" 
                component="span" 
                color="primary" 
                fontWeight={600} 
                sx={{ letterSpacing: 1 }}
              >
                What We Believe
              </Typography>
              <Typography variant="h3" component="h2" fontWeight={800} gutterBottom>
                Our Core Values
              </Typography>
              <Typography variant="h6" color="text.secondary">
                These principles guide everything we do
              </Typography>
            </Box>
            
            <Grid container spacing={4} sx={{ mb: 8 }}>
              {values.map((value, index) => (
                <Grid item key={index} xs={12} md={4}>
                  <Card 
                    sx={{ 
                      height: '100%', 
                      p: 2, 
                      boxShadow: 2,
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: 6
                      },
                      borderRadius: 3
                    }}
                  >
                    <CardContent>
                      <Avatar
                        sx={{
                          bgcolor: 'primary.light',
                          color: 'primary.main',
                          width: 56,
                          height: 56,
                          mb: 3
                        }}
                      >
                        {value.icon}
                      </Avatar>
                      <Typography variant="h5" component="h3" fontWeight={600} gutterBottom>
                        {value.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {value.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            
            <Paper 
              elevation={4} 
              sx={{ 
                borderRadius: 4,
                overflow: 'hidden'
              }}
            >
              <Grid container>
                <Grid item xs={12} md={6} sx={{ bgcolor: 'primary.main', color: 'white', p: { xs: 4, md: 6 } }}>
                  <Typography variant="h4" component="h3" fontWeight={700} gutterBottom>
                    Our Commitment to Quality
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Quality is at the heart of everything we do. We believe that every kitchen should be built to last, using the finest materials and expert craftsmanship.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Our team takes pride in their work, paying attention to every detail to ensure that your kitchen not only looks beautiful but functions perfectly for years to come.
                  </Typography>
                  <Typography variant="body1">
                    We stand behind our work with comprehensive warranties and exceptional after-sales service, giving you peace of mind with your investment.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6} sx={{ bgcolor: 'background.paper', p: { xs: 4, md: 6 } }}>
                  <Typography variant="h4" component="h3" fontWeight={700} color="text.primary" gutterBottom>
                    Our Commitment to Sustainability
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    We believe in creating kitchens that not only look beautiful but are also environmentally responsible.
                  </Typography>
                  <List>
                    {[
                      "Sourcing materials from sustainable suppliers",
                      "Minimizing waste through efficient manufacturing processes",
                      "Using water-based, low-VOC finishes",
                      "Designing for longevity to reduce the need for replacement",
                      "Recycling and repurposing materials whenever possible"
                    ].map((item, index) => (
                      <ListItem key={index} sx={{ py: 1 }}>
                        <ListItemIcon>
                          <CheckCircleOutlineIcon color="success" />
                        </ListItemIcon>
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              </Grid>
            </Paper>
          </Box>
          
          {/* Team Section */}
          <Box
            role="tabpanel"
            id="tabpanel-2"
            aria-labelledby="tab-2"
            hidden={activeTab !== 2}
          >
            <Box sx={{ textAlign: 'center', mb: 8, maxWidth: 800, mx: 'auto' }}>
              <Typography 
                variant="overline" 
                component="span" 
                color="primary" 
                fontWeight={600} 
                sx={{ letterSpacing: 1 }}
              >
                The People Behind Our Work
              </Typography>
              <Typography variant="h3" component="h2" fontWeight={800} gutterBottom>
                Meet Our Team
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Talented professionals dedicated to bringing your vision to life
              </Typography>
            </Box>
            
            <Grid container spacing={4}>
              {teamMembers.map((member, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Card 
                    sx={{ 
                      height: '100%',
                      borderRadius: 3,
                      overflow: 'hidden',
                      boxShadow: 3,
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: 6
                      }
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="280"
                      image={member.image}
                      alt={member.name}
                    />
                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="h5" component="h3" fontWeight={600} gutterBottom>
                        {member.name}
                      </Typography>
                      <Typography variant="subtitle1" color="primary" gutterBottom>
                        {member.role}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {member.bio}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            
            <Box sx={{ textAlign: 'center', mt: 8 }}>
              <Typography variant="h5" fontWeight={600} gutterBottom>
                Interested in joining our team?
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph sx={{ maxWidth: 600, mx: 'auto' }}>
                We're always looking for talented designers, craftspeople, and customer service professionals to join the Doma Design family.
              </Typography>
              <MaterialButton 
                href="/contact" 
                variant="contained" 
                color="primary"
                size="large"
              >
                Contact Us
              </MaterialButton>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
} 