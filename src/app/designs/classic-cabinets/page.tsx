'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MaterialButton from '@/components/MaterialButton';
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

export default function ClassicCabinets() {
  // Features and gallery items for this specific design
  const features = [
    "Profilierte Schranktüren mit erhöhten Paneelen und dekorativen Kanten",
    "Handwerkskunst mit Betonung auf Details und Verzierungen",
    "Präzise Holzarbeiten und traditionelle Konstruktionstechniken",
    "Natürliche Holztöne, Cremeweiß und warme Farbtöne",
    "Dekorative Leisten, Gesimse und Formteile für architektonisches Interesse",
    "Hochwertige Griffe und Knöpfe aus Messing, Bronze oder Schmiedeeisen"
  ];

  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/6186507/pexels-photo-6186507.jpeg",
      alt: "Klassische Küche mit Holzschränken",
      title: "Traditionelles Holzdesign"
    },
    {
      src: "https://images.pexels.com/photos/6152340/pexels-photo-6152340.jpeg",
      alt: "Klassische Küche mit weißen Schränken",
      title: "Elegantes Weiß"
    },
    {
      src: "https://images.pexels.com/photos/6032425/pexels-photo-6032425.jpeg",
      alt: "Detailreiche klassische Schränke",
      title: "Detailreiche Ausführung"
    },
    {
      src: "https://images.pexels.com/photos/6207738/pexels-photo-6207738.jpeg",
      alt: "Klassische Küche mit Kochinsel",
      title: "Klassische Kochinsel"
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
          src="https://images.pexels.com/photos/6032424/pexels-photo-6032424.jpeg"
          alt="Klassische Schränke"
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
            Klassische Schränke
          </Typography>
          <Typography variant="h5" color="white" sx={{ maxWidth: 700, mx: 'auto', opacity: 0.9 }}>
            Zeitlose Eleganz mit Qualitätshandwerk und Liebe zum Detail
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
          <Typography color="text.primary">Klassische Schränke</Typography>
        </Breadcrumbs>
      </Container>

      {/* Main Content */}
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Left Column - Description */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom fontWeight={600}>
              Der zeitlose Charme klassischer Schränke
            </Typography>
            <Typography variant="body1" paragraph sx={{ mb: 4 }}>
              Klassische Schränke verkörpern zeitlose Eleganz und traditionelle Handwerkskunst, 
              die auch nach Jahrzehnten noch stilvoll und attraktiv wirken. Mit ihrer 
              Liebe zum Detail und exquisiter Verarbeitung schaffen sie eine warme, 
              einladende Atmosphäre in jedem Zuhause.
            </Typography>
            <Typography variant="body1" paragraph>
              Charakteristisch für klassische Schränke sind profilierte Türen mit 
              erhöhten Paneelen, dekorative Leisten und sorgfältig ausgewählte Beschläge. 
              Die Handwerkskunst zeigt sich in präzisen Holzverbindungen, fein gearbeiteten Details 
              und der hochwertigen Verarbeitung jedes Elements.
            </Typography>
            <Typography variant="body1" paragraph sx={{ mb: 4 }}>
              Die Farbpalette klassischer Schränke umfasst typischerweise warme Holztöne 
              wie Kirsche, Mahagoni und Walnuss sowie cremefarbene und weiße Lackierungen. 
              Die sorgfältig ausgewählten Farben und Materialien unterstreichen den 
              traditionellen Charakter und die Zeitlosigkeit des Designs.
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
                "Klassische Schränke sind mehr als nur Möbelstücke – sie sind Kunstwerke, die die Traditionen und das Können erfahrener Handwerker widerspiegeln. Mit ihnen erschaffen wir Küchen und Räume, die jahrzehntelang Bestand haben."
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                DOMA Design Meisterschreiner
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
                Klassische Schränke verwenden typischerweise:
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
                    <Typography variant="body2">• Massivholz</Typography>
                    <Typography variant="body2">• Furnierplatten</Typography>
                    <Typography variant="body2">• Dekorative Einsätze</Typography>
                    <Typography variant="body2">• Hochwertige Lackierungen</Typography>
                    <Typography variant="body2">• Metall-Beschläge</Typography>
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
                    <Typography variant="body2">• Cremeweiß</Typography>
                    <Typography variant="body2">• Kirsch-Holzton</Typography>
                    <Typography variant="body2">• Walnuss</Typography>
                    <Typography variant="body2">• Mahagoni</Typography>
                    <Typography variant="body2">• Antikes Weiß</Typography>
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