'use client';
import Link from 'next/link';
import Image from 'next/image';
import MaterialButton from '@/components/MaterialButton';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Stack, Paper, Divider } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import CropOriginalOutlinedIcon from '@mui/icons-material/CropOriginalOutlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';

export default function Home() {
  const featuredDesigns = [
    {
      id: 1,
      title: "Modern Kitchen",
      description: "Sleek design with cutting-edge features and clean lines.",
      image: "https://images.pexels.com/photos/3935349/pexels-photo-3935349.jpeg",
      alt: "Modern kitchen with white cabinets and island"
    },
    {
      id: 2,
      title: "Classic Cabinets",
      description: "Timeless elegance with quality craftsmanship and attention to detail.",
      image: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg",
      alt: "Classic kitchen with wooden cabinets"
    },
    {
      id: 3,
      title: "Contemporary Style",
      description: "Innovative solutions for the modern home, blending form and function.",
      image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
      alt: "Contemporary kitchen with minimalist design"
    }
  ];

  const features = [
    {
      icon: <DesignServicesOutlinedIcon sx={{ fontSize: 40 }} />,
      title: "Custom Design",
      description: "Kitchens designed around your specific needs, preferences, and lifestyle"
    },
    {
      icon: <CropOriginalOutlinedIcon sx={{ fontSize: 40 }} />,
      title: "Premium Materials",
      description: "High-quality materials that ensure durability, functionality, and aesthetics"
    },
    {
      icon: <HandymanOutlinedIcon sx={{ fontSize: 40 }} />,
      title: "Expert Installation",
      description: "Professional installation teams that ensure perfect execution of your design"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Box 
        sx={{ 
          position: 'relative',
          height: '85vh',
          minHeight: '600px',
          display: 'flex',
          alignItems: 'center',
          color: 'white',
          overflow: 'hidden',
          background: 'linear-gradient(to bottom right, rgba(0,0,0,0.8), rgba(0,0,0,0.7))',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url(https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.3,
            zIndex: -1
          }
        }}
      >
        {/* Decorative elements */}
        <Box
          sx={{
            position: 'absolute',
            top: '-100px',
            left: '-100px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, rgba(59,130,246,0) 70%)',
            filter: 'blur(40px)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '-50px',
            right: '-50px',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(99,102,241,0) 70%)',
            filter: 'blur(40px)',
          }}
        />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <Box 
            component="img"
            src="/images/doma_2_Balken_rot.png"
            alt="DOMA DESIGN Logo"
            sx={{ 
              height: { xs: '60px', md: '80px', lg: '100px' }, 
              width: 'auto',
              mb: 4,
              mx: 'auto'
            }}
          />
          <Typography 
            variant="h1" 
            sx={{ 
              fontWeight: 800,
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
              letterSpacing: '-0.02em',
              mb: 2,
              lineHeight: 1.1
            }}
          >
            Beautiful Kitchen Solutions
            <Typography 
              component="span" 
              variant="h1"
              sx={{ 
                display: 'block', 
                color: 'primary.main',
                fontWeight: 800,
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' }
              }}
            >
              for Modern Living
            </Typography>
          </Typography>
          
          <Typography 
            variant="h5" 
            sx={{ 
              color: 'grey.300', 
              maxWidth: '800px', 
              mx: 'auto',
              mt: 3,
              fontWeight: 400
            }}
          >
            We design and manufacture custom kitchens and cabinets that combine 
            form, function, and quality craftsmanship.
          </Typography>
          
          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={2} 
            sx={{ mt: 6, justifyContent: 'center' }}
          >
            <MaterialButton 
              href="/services" 
              variant="contained" 
              color="primary"
              size="large" 
            >
              Explore Our Services
            </MaterialButton>
            <MaterialButton 
              href="/contact" 
              variant="outlined" 
              color="secondary"
              size="large" 
            >
              Get In Touch
            </MaterialButton>
          </Stack>
        </Container>
      </Box>
      
      {/* Features Section */}
      <Box sx={{ py: 12, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography 
              variant="overline" 
              component="span" 
              sx={{ 
                color: 'primary.main', 
                fontWeight: 600,
                letterSpacing: 1
              }}
            >
              Our Solutions
            </Typography>
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 700, 
                mt: 1,
                fontSize: { xs: '2rem', md: '2.75rem' } 
              }}
            >
              Designed for modern living
            </Typography>
            <Typography 
              variant="h5" 
              color="text.secondary" 
              sx={{ 
                mt: 2, 
                maxWidth: '700px', 
                mx: 'auto',
                fontWeight: 400
              }}
            >
              Everything you need for your perfect kitchen
            </Typography>
          </Box>
          
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper 
                  elevation={1}
                  sx={{ 
                    p: 4, 
                    height: '100%',
                    textAlign: 'center',
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                      transform: 'translateY(-5px)'
                    }
                  }}
                >
                  <Box 
                    sx={{ 
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      bgcolor: 'primary.lighter',
                      color: 'primary.main',
                      mx: 'auto',
                      mb: 3
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography variant="h5" fontWeight={600} gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {feature.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      
      {/* Featured Designs Section */}
      <Box sx={{ py: 12, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography 
              variant="overline" 
              component="span" 
              sx={{ 
                color: 'primary.main', 
                fontWeight: 600,
                letterSpacing: 1
              }}
            >
              Showcase
            </Typography>
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 700, 
                mt: 1,
                fontSize: { xs: '2rem', md: '2.75rem' } 
              }}
            >
              Featured Designs
            </Typography>
            <Typography 
              variant="h5" 
              color="text.secondary" 
              sx={{ 
                mt: 2, 
                maxWidth: '700px', 
                mx: 'auto',
                fontWeight: 400
              }}
            >
              Explore our showcase of custom kitchens designed and built for clients with various preferences and needs.
            </Typography>
          </Box>
          
          <Grid container spacing={4}>
            {featuredDesigns.map((design) => (
              <Grid item xs={12} sm={6} md={4} key={design.id}>
                <Card 
                  sx={{ 
                    borderRadius: 4,
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 14px 40px rgba(0,0,0,0.12)'
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    height="240"
                    image={design.image}
                    alt={design.alt}
                  />
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h5" component="h3" fontWeight={600} gutterBottom>
                      {design.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                      {design.description}
                    </Typography>
                    <Link href="/services" passHref style={{ textDecoration: 'none' }}>
                      <Box 
                        sx={{ 
                          display: 'flex',
                          alignItems: 'center',
                          color: 'primary.main',
                          fontWeight: 500,
                          gap: 0.5,
                          '&:hover': {
                            color: 'primary.dark',
                            '& .arrow': {
                              transform: 'translateX(4px)'
                            }
                          }
                        }}
                      >
                        View Details
                        <ArrowForwardIcon 
                          className="arrow" 
                          fontSize="small" 
                          sx={{ 
                            ml: 0.5,
                            transition: 'transform 0.2s ease'
                          }} 
                        />
                      </Box>
                    </Link>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      
      {/* CTA Section */}
      <Box 
        sx={{ 
          py: 10, 
          background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '-100px',
            left: '-100px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)',
            filter: 'blur(40px)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '-50px',
            right: '-50px',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
            filter: 'blur(40px)',
          }}
        />
        
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <Typography 
            variant="h2" 
            color="white" 
            fontWeight={700} 
            sx={{ fontSize: { xs: '2rem', md: '2.75rem' } }}
          >
            Ready to create your dream kitchen?
          </Typography>
          <Typography variant="h5" color="primary.lighter" sx={{ mt: 2, fontWeight: 400 }}>
            Let our design experts help you bring your vision to life.
          </Typography>
          <Box sx={{ mt: 5 }}>
            <MaterialButton
              href="/signup"
              variant="contained"
              color="secondary"
              size="large"
            >
              Get Started Today
            </MaterialButton>
          </Box>
        </Container>
      </Box>
      
      {/* Testimonials */}
      <Box sx={{ py: 12, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography 
              variant="overline" 
              component="span" 
              sx={{ 
                color: 'primary.main', 
                fontWeight: 600,
                letterSpacing: 1
              }}
            >
              Testimonials
            </Typography>
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 700, 
                mt: 1,
                fontSize: { xs: '2rem', md: '2.75rem' } 
              }}
            >
              What Our Clients Say
            </Typography>
            <Typography 
              variant="h5" 
              color="text.secondary" 
              sx={{ 
                mt: 2, 
                maxWidth: '700px', 
                mx: 'auto',
                fontWeight: 400
              }}
            >
              Hear from some of our satisfied customers about their experience working with Doma Design.
            </Typography>
          </Box>
          
          <Grid container spacing={4}>
            {[
              {
                quote: "Working with Doma Design was a fantastic experience from start to finish. Their attention to detail and commitment to quality exceeded my expectations.",
                author: "Sarah Johnson",
                position: "Homeowner",
                avatar: "https://randomuser.me/api/portraits/women/34.jpg"
              },
              {
                quote: "The team at Doma Design transformed our outdated kitchen into a modern masterpiece. The craftsmanship is exceptional and the design is exactly what we wanted.",
                author: "Michael Chen",
                position: "Property Developer",
                avatar: "https://randomuser.me/api/portraits/men/32.jpg"
              },
              {
                quote: "I was impressed by how well they listened to our needs and delivered a kitchen that perfectly fits our lifestyle. The quality of the cabinets is outstanding.",
                author: "Emma Garcia",
                position: "Interior Designer",
                avatar: "https://randomuser.me/api/portraits/women/68.jpg"
              }
            ].map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper
                  elevation={1}
                  sx={{
                    p: 4,
                    height: '100%',
                    borderRadius: 3,
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      flex: 1,
                      fontStyle: 'italic',
                      color: 'text.secondary'
                    }}
                  >
                    "{testimonial.quote}"
                  </Typography>
                  
                  <Divider sx={{ my: 2 }} />
                  
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box
                      component="img"
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        mr: 2
                      }}
                    />
                    <Box>
                      <Typography variant="subtitle1" fontWeight={600}>
                        {testimonial.author}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.position}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
