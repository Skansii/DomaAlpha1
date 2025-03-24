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
  Paper,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Breadcrumbs,
  Stack
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

export default function ModernKitchen() {
  // Features and gallery items for this specific design
  const features = [
    "Glatte, grifflose Schränke für ein minimalistisches Erscheinungsbild",
    "Lineare Formen und klare Linien ohne überflüssige Verzierungen",
    "Hochglanz- oder matte Oberflächen in neutralen oder monochromatischen Farbpaletten",
    "Integrierte Smart-Home-Technologie und energieeffiziente Geräte",
    "Offene Regale und versteckte Aufbewahrungslösungen für ein aufgeräumtes Aussehen",
    "Hochwertige Materialien wie Edelstahl, Glas, Beton und Laminat"
  ];

  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg",
      alt: "Moderne Küche mit weißen Schränken und Holzakzenten",
      title: "Weiß-Holz Kombination"
    },
    {
      src: "https://images.pexels.com/photos/6306387/pexels-photo-6306387.jpeg",
      alt: "Moderne graue Küche mit Insel",
      title: "Graue Inselküche"
    },
    {
      src: "https://images.pexels.com/photos/6032416/pexels-photo-6032416.jpeg",
      alt: "Moderne weiße Küche mit schwarzen Akzenten",
      title: "Weiß-Schwarz Design"
    },
    {
      src: "https://images.pexels.com/photos/6312368/pexels-photo-6312368.jpeg",
      alt: "Minimalistische moderne Küche",
      title: "Minimalistisches Design"
    }
  ];

  return (
    <Box sx={{ pb: 10 }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: 300, md: 500 },
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          component="img"
          src="https://images.pexels.com/photos/6283972/pexels-photo-6283972.jpeg"
          alt="Moderne Küche"
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
            Moderne Küche
          </Typography>
          <Typography variant="h5" color="white" sx={{ maxWidth: 700, mx: 'auto', opacity: 0.9 }}>
            Schlichtes Design mit modernsten Funktionen und klaren Linien
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
          <Link href="/designs" passHref>
            <Typography color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
              Designs
            </Typography>
          </Link>
          <Typography color="text.primary">Moderne Küche</Typography>
        </Breadcrumbs>
      </Container>

      {/* Main Content */}
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Left Column - Description */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom fontWeight={600}>
              Was eine moderne Küche ausmacht
            </Typography>
            <Typography variant="body1" paragraph sx={{ mb: 4 }}>
              Die moderne Küche ist eine perfekte Kombination aus Funktionalität und ästhetischer Schönheit.
              Mit klaren Linien, minimalistischem Design und einer raffinierten Farbpalette verkörpert sie 
              den Zeitgeist und die Innovationen des 21. Jahrhunderts.
            </Typography>
            <Typography variant="body1" paragraph>
              Der moderne Küchenstil legt Wert auf Einfachheit und Klarheit. Überflüssige Verzierungen werden 
              vermieden, um einen aufgeräumten und luftigen Raum zu schaffen. Die Schränke haben oft glatte 
              Fronten ohne sichtbare Griffe, und die gesamte Ästhetik betont horizontale Linien.
            </Typography>
            <Typography variant="body1" paragraph sx={{ mb: 4 }}>
              Hochwertige Materialien wie Edelstahl, Glas, Beton und Laminat sind typisch für die moderne Küche. 
              Die Farbpalette tendiert zu neutralen oder monochromatischen Tönen, wobei Weiß, Schwarz und Grau 
              dominieren, oft mit gezielten Farbakzenten.
            </Typography>

            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" component="h3" gutterBottom fontWeight={600}>
                Hauptmerkmale
              </Typography>
              <List>
                {features.map((feature, index) => (
                  <ListItem key={index} sx={{ py: 1 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <CheckCircleOutlineIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={feature} />
                  </ListItem>
                ))}
              </List>
            </Box>

            <Paper elevation={1} sx={{ p: 4, borderRadius: 2, bgcolor: 'background.paper', mb: 4 }}>
              <Box sx={{ display: 'flex', mb: 2 }}>
                <FormatQuoteIcon color="primary" sx={{ fontSize: 40, mr: 2 }} />
              </Box>
              <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 2 }}>
                "Die moderne Küche ist nicht nur ein Ort zum Kochen, sondern ein Statement für zeitgenössisches Design und intelligente Funktionalität. Sie verbindet Innovation mit Ästhetik für ein makelloses Erlebnis."
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                DOMA Design Team
              </Typography>
            </Paper>

            <Box sx={{ mt: 6 }}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <MaterialButton 
                  href="/contact" 
                  variant="contained" 
                  color="primary"
                >
                  Jetzt beraten lassen
                </MaterialButton>
                <MaterialButton 
                  href="/designs" 
                  variant="outlined" 
                  color="primary"
                >
                  Weitere Designs
                </MaterialButton>
              </Stack>
            </Box>
          </Grid>

          {/* Right Column - Gallery */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              {galleryImages.map((image, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Paper
                    elevation={3}
                    sx={{
                      borderRadius: 2,
                      overflow: 'hidden',
                      height: 240,
                      position: 'relative',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.02)',
                        boxShadow: '0 8px 40px rgba(0,0,0,0.12)'
                      }
                    }}
                  >
                    <Box
                      component="img"
                      src={image.src}
                      alt={image.alt}
                      sx={{
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
                        right: 0,
                        bgcolor: 'rgba(0,0,0,0.6)',
                        color: 'white',
                        p: 1.5
                      }}
                    >
                      <Typography variant="subtitle1">{image.title}</Typography>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>

            <Box sx={{ mt: 4, p: 3, bgcolor: 'background.default', borderRadius: 2 }}>
              <Typography variant="h5" component="h3" gutterBottom fontWeight={600}>
                Materialien und Farben
              </Typography>
              <Typography variant="body1" paragraph>
                Moderne Küchen setzen auf eine Kombination aus:
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Paper 
                    elevation={0} 
                    sx={{ 
                      p: 2, 
                      textAlign: 'center',
                      borderRadius: 2,
                      bgcolor: '#f5f5f5'
                    }}
                  >
                    <Typography variant="subtitle1" gutterBottom>Materialien</Typography>
                    <Divider sx={{ mb: 1 }} />
                    <Typography variant="body2">• Edelstahl</Typography>
                    <Typography variant="body2">• Glas</Typography>
                    <Typography variant="body2">• Laminat</Typography>
                    <Typography variant="body2">• Matte Oberflächen</Typography>
                    <Typography variant="body2">• Beton</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper 
                    elevation={0} 
                    sx={{ 
                      p: 2, 
                      textAlign: 'center',
                      borderRadius: 2,
                      bgcolor: '#f5f5f5'
                    }}
                  >
                    <Typography variant="subtitle1" gutterBottom>Farbpalette</Typography>
                    <Divider sx={{ mb: 1 }} />
                    <Typography variant="body2">• Weiß</Typography>
                    <Typography variant="body2">• Schwarz</Typography>
                    <Typography variant="body2">• Grau</Typography>
                    <Typography variant="body2">• Holztöne</Typography>
                    <Typography variant="body2">• Gezielte Farbakzente</Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
} 