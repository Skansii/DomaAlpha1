'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MaterialButton from '@/components/ui/MaterialButton';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Breadcrumbs,
  Paper
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Designs() {
  const designStyles = [
    {
      id: 'modern-kitchen',
      title: "Moderne Küche",
      description: "Schlichtes Design mit modernsten Funktionen und klaren Linien.",
      image: "https://images.pexels.com/photos/6283972/pexels-photo-6283972.jpeg",
      alt: "Moderne Küche mit weißen Schränken und Insel",
      path: "/designs/modern-kitchen"
    },
    {
      id: 'classic-cabinets',
      title: "Klassische Schränke",
      description: "Zeitlose Eleganz mit Qualitätshandwerk und Liebe zum Detail.",
      image: "https://images.pexels.com/photos/6032424/pexels-photo-6032424.jpeg",
      alt: "Klassische Küche mit Holzschränken",
      path: "/designs/classic-cabinets"
    },
    {
      id: 'contemporary-style',
      title: "Zeitgenössischer Stil",
      description: "Innovative Lösungen für das moderne Zuhause.",
      image: "https://images.pexels.com/photos/6032418/pexels-photo-6032418.jpeg",
      alt: "Zeitgenössische Küche mit minimalistischem Design",
      path: "/designs/contemporary-style"
    },
    {
      id: 'transitional-design',
      title: "Übergangsdesign",
      description: "Die perfekte Balance zwischen warm-traditionell und frisch-modern.",
      image: "https://images.pexels.com/photos/6207744/pexels-photo-6207744.jpeg",
      alt: "Übergangsdesign Küche",
      path: "/designs/transitional-design",
      comingSoon: true
    },
    {
      id: 'scandinavian-style',
      title: "Skandinavischer Stil",
      description: "Helle, luftige Designs mit Fokus auf Funktionalität und Schlichtheit.",
      image: "https://images.pexels.com/photos/6207815/pexels-photo-6207815.jpeg",
      alt: "Skandinavische Küche mit hellen Holzakzenten",
      path: "/designs/scandinavian-style",
      comingSoon: true
    },
    {
      id: 'industrial-design',
      title: "Industrielles Design",
      description: "Robuste Materialien und funktionale Ästhetik für einen urbanen Look.",
      image: "https://images.pexels.com/photos/6444256/pexels-photo-6444256.jpeg",
      alt: "Industrielle Küche mit Metall- und Betonelementen",
      path: "/designs/industrial-design",
      comingSoon: true
    }
  ];

  return (
    <Box sx={{ pb: 10 }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: 300, md: 400 },
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          component="img"
          src="https://images.pexels.com/photos/6489117/pexels-photo-6489117.jpeg"
          alt="Verschiedene Küchendesigns"
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
            Unsere Küchendesigns
          </Typography>
          <Typography variant="h5" color="white" sx={{ maxWidth: 700, mx: 'auto', opacity: 0.9 }}>
            Entdecken Sie unsere vielfältigen Küchenstile und finden Sie die perfekte Lösung für Ihr Zuhause
          </Typography>
        </Container>
      </Box>

      {/* Breadcrumbs */}
      <Container maxWidth="lg" sx={{ mt: 4, mb: 8 }}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          <Link href="/" passHref>
            <Typography color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
              Home
            </Typography>
          </Link>
          <Typography color="text.primary">Designs</Typography>
        </Breadcrumbs>
      </Container>

      {/* Designs Grid */}
      <Container maxWidth="lg">
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom fontWeight={600}>
            Entdecken Sie unsere Designoptionen
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Bei DOMA Design verstehen wir, dass jeder Kunde einzigartige Vorlieben und Bedürfnisse hat. 
            Deshalb bieten wir eine Vielzahl von Küchenstilen an, die an Ihre persönlichen Wünsche angepasst werden können. 
            Erkunden Sie unsere Designkategorien und lassen Sie sich inspirieren.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {designStyles.map((style) => (
            <Grid item xs={12} sm={6} md={4} key={style.id}>
              <Card 
                sx={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.15)'
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="240"
                  image={style.image}
                  alt={style.alt}
                />
                
                {style.comingSoon && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 20,
                      right: 20,
                      bgcolor: 'primary.main',
                      color: 'white',
                      py: 0.5,
                      px: 1.5,
                      borderRadius: 5,
                      boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                    }}
                  >
                    <Typography variant="caption" fontWeight={600}>
                      Demnächst
                    </Typography>
                  </Box>
                )}
                
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography variant="h5" component="h3" gutterBottom fontWeight={600}>
                    {style.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    {style.description}
                  </Typography>
                </CardContent>
                
                <Box sx={{ p: 2, mt: 'auto' }}>
                  {!style.comingSoon ? (
                    <Link href={style.path} passHref style={{ textDecoration: 'none' }}>
                      <Box 
                        sx={{ 
                          display: 'flex',
                          alignItems: 'center',
                          color: 'primary.main',
                          fontWeight: 500,
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
                  ) : (
                    <Box 
                      sx={{ 
                        display: 'flex',
                        alignItems: 'center',
                        color: 'text.disabled',
                        fontWeight: 500,
                      }}
                    >
                      Bald verfügbar
                    </Box>
                  )}
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Contact Info */}
        <Paper elevation={2} sx={{ mt: 10, p: 4, borderRadius: 3, bgcolor: 'background.paper' }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h4" component="h3" gutterBottom fontWeight={600}>
                Möchten Sie mehr über unsere Designs erfahren?
              </Typography>
              <Typography variant="body1" paragraph>
                Unsere erfahrenen Designer helfen Ihnen gerne bei der Auswahl des perfekten Stils für Ihre Küche 
                und beraten Sie zu allen Details Ihres Projekts.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
              <MaterialButton
                href="/contact"
                variant="contained"
                color="primary"
                size="large"
              >
                Kontakt aufnehmen
              </MaterialButton>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
} 