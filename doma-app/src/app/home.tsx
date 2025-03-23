'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Stack, 
  Paper,
  Divider
} from '@mui/material';
import MaterialButton from '@/components/ui/MaterialButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import CropOriginalOutlinedIcon from '@mui/icons-material/CropOriginalOutlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';

/**
 * Client-side Home Component
 * Renders the main landing page with all sections:
 * - Hero banner with particles effect
 * - Features section
 * - Featured designs
 * - Call to action
 * - Testimonials
 */
export default function HomeClient() {
  // State to track if the hero image has loaded
  const [imageLoaded, setImageLoaded] = useState(false);
  // Ref to ensure particles.js is only initialized once
  const particlesInitialized = React.useRef(false);

  // Check if hero image exists
  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageLoaded(false);
    img.src = '/images/kitchen-ar-visualization.jpg';
  }, []);

  // Initialize particles.js when component mounts
  useEffect(() => {
    // Skip on server side and avoid re-initialization
    if (typeof window === 'undefined' || particlesInitialized.current) return;
    
    particlesInitialized.current = true;
    
    // Load particles.js script dynamically
    const particlesScript = document.createElement('script');
    particlesScript.src = '/js/particles.min.js';
    particlesScript.async = true;
    particlesScript.onload = () => {
      // Load and execute the configuration
      const configScript = document.createElement('script');
      configScript.src = '/js/particles-config.js';
      configScript.async = true;
      document.body.appendChild(configScript);
    };
    document.body.appendChild(particlesScript);

    // Clean up function to remove scripts when component unmounts
    return () => {
      const scripts = document.querySelectorAll('script[src*="particles"]');
      scripts.forEach(script => script.remove());
      particlesInitialized.current = false;
    };
  }, []);

  const featuredDesigns = [
    {
      id: 1,
      title: "Moderne Küche",
      description: "Schlichtes Design mit modernsten Funktionen und klaren Linien.",
      image: "https://images.pexels.com/photos/6283972/pexels-photo-6283972.jpeg",
      alt: "Moderne Küche mit weißen Schränken und Insel"
    },
    {
      id: 2,
      title: "Klassische Schränke",
      description: "Zeitlose Eleganz mit Qualitätshandwerk und Liebe zum Detail.",
      image: "https://images.pexels.com/photos/6032424/pexels-photo-6032424.jpeg",
      alt: "Klassische Küche mit Holzschränken"
    },
    {
      id: 3,
      title: "Zeitgenössischer Stil",
      description: "Innovative Lösungen für das moderne Zuhause, die Form und Funktion verbinden.",
      image: "https://images.pexels.com/photos/6032418/pexels-photo-6032418.jpeg",
      alt: "Zeitgenössische Küche mit minimalistischem Design"
    }
  ];

  const features = [
    {
      icon: <DesignServicesOutlinedIcon sx={{ fontSize: 40 }} />,
      title: "Individuelles Design",
      description: "Küchen, die auf Ihre spezifischen Bedürfnisse, Vorlieben und Ihren Lebensstil zugeschnitten sind"
    },
    {
      icon: <CropOriginalOutlinedIcon sx={{ fontSize: 40 }} />,
      title: "Premium-Materialien",
      description: "Hochwertige Materialien, die Haltbarkeit, Funktionalität und Ästhetik gewährleisten"
    },
    {
      icon: <HandymanOutlinedIcon sx={{ fontSize: 40 }} />,
      title: "Fachgerechte Installation",
      description: "Professionelle Installationsteams, die eine perfekte Umsetzung Ihres Designs gewährleisten"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Box 
        className={!imageLoaded ? 'hero-fallback-bg' : ''}
        sx={{ 
          position: 'relative',
          height: 'calc(85vh - 200px)',
          minHeight: '400px',
          display: 'flex',
          alignItems: 'center',
          color: 'white',
          overflow: 'hidden',
          background: 'linear-gradient(to bottom right, rgba(0,0,0,0.6), rgba(0,0,0,0.7))',
          '&::before': imageLoaded ? {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url(/images/kitchen-ar-visualization.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.5,
            zIndex: -1
          } : {}
        }}
      >
        {/* Particles.js container */}
        {typeof window !== 'undefined' && (
          <Box
            id="particles-container"
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 0
            }}
          />
        )}
        
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
            Schöne Küchenlösungen
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
              für modernes Wohnen
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
            Wir entwerfen und fertigen maßgeschneiderte Küchen und Schränke, die Form, 
            Funktion und hochwertige Handwerkskunst vereinen.
          </Typography>
          
          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={2} 
            sx={{ mt: 6, justifyContent: 'center' }}
          >
            <MaterialButton 
              href="/products" 
              variant="contained" 
              color="primary"
              size="large" 
            >
              Unsere Leistungen
            </MaterialButton>
            <MaterialButton 
              href="/contact" 
              variant="outlined" 
              color="secondary"
              size="large" 
            >
              Kontakt aufnehmen
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
              Unsere Lösungen
            </Typography>
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 700, 
                mt: 1,
                fontSize: { xs: '2rem', md: '2.75rem' } 
              }}
            >
              Designed für modernes Wohnen
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
              Alles, was Sie für Ihre perfekte Küche brauchen
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
              Galerie
            </Typography>
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 700, 
                mt: 1,
                fontSize: { xs: '2rem', md: '2.75rem' } 
              }}
            >
              Ausgewählte Designs
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
              Entdecken Sie unsere Auswahl an maßgeschneiderten Küchen, die für Kunden mit verschiedenen Vorlieben und Bedürfnissen entworfen und gebaut wurden.
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
                    <Link 
                      href={
                        design.id === 1 ? "/designs/modern-kitchen" : 
                        design.id === 2 ? "/designs/classic-cabinets" : 
                        "/designs/contemporary-style"
                      } 
                      passHref 
                      style={{ textDecoration: 'none' }}
                    >
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
                        Details anzeigen
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
            Bereit, Ihre Traumküche zu gestalten?
          </Typography>
          <Typography variant="h5" color="primary.lighter" sx={{ mt: 2, fontWeight: 400 }}>
            Lassen Sie unsere Designexperten Ihnen helfen, Ihre Vision zum Leben zu erwecken.
          </Typography>
          <Box sx={{ mt: 5 }}>
            <MaterialButton
              href="/signup"
              variant="contained"
              color="secondary"
              size="large"
            >
              Jetzt loslegen
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
              Kundenstimmen
            </Typography>
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 700, 
                mt: 1,
                fontSize: { xs: '2rem', md: '2.75rem' } 
              }}
            >
              Was unsere Kunden sagen
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
              Hören Sie von einigen unserer zufriedenen Kunden über ihre Erfahrungen mit Doma Design.
            </Typography>
          </Box>
          
          <Grid container spacing={4}>
            {[
              {
                quote: "Die Zusammenarbeit mit Doma Design war von Anfang bis Ende eine fantastische Erfahrung. Ihre Liebe zum Detail und ihr Engagement für Qualität übertrafen meine Erwartungen.",
                author: "Sarah Johnson",
                position: "Hausbesitzerin",
                avatar: "https://randomuser.me/api/portraits/women/34.jpg"
              },
              {
                quote: "Das Team von Doma Design hat unsere veraltete Küche in ein modernes Meisterwerk verwandelt. Die Handwerkskunst ist außergewöhnlich und das Design ist genau das, was wir wollten.",
                author: "Michael Chen",
                position: "Immobilienentwickler",
                avatar: "https://randomuser.me/api/portraits/men/32.jpg"
              },
              {
                quote: "Ich war beeindruckt davon, wie gut sie auf unsere Bedürfnisse eingegangen sind und eine Küche geliefert haben, die perfekt zu unserem Lebensstil passt. Die Qualität der Schränke ist hervorragend.",
                author: "Emma Garcia",
                position: "Innenarchitektin",
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