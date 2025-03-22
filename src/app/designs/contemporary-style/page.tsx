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

export default function ContemporaryStyle() {
  // Features and gallery items for this specific design
  const features = [
    "Mischung aus modernen und traditionellen Elementen für einen zeitgemäßen Look",
    "Saubere, elegante Linien mit dezenten dekorativen Details",
    "Innovative Materialien kombiniert mit klassischen Elementen",
    "Nutzung von Texturen und Mustern für visuelles Interesse",
    "Neutrale Farben mit durchdachten Akzenten für Dynamik",
    "Fokus auf funktionalen Raum und ergonomisches Design"
  ];

  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg",
      alt: "Zeitgenössische Küche mit gemischten Materialien",
      title: "Mix aus Holz und Glas"
    },
    {
      src: "https://images.pexels.com/photos/6207815/pexels-photo-6207815.jpeg",
      alt: "Zeitgenössische Küche mit Textur",
      title: "Texturen & Oberflächen"
    },
    {
      src: "https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg",
      alt: "Zeitgenössische Küche mit offenem Konzept",
      title: "Offenes Konzept"
    },
    {
      src: "https://images.pexels.com/photos/6032424/pexels-photo-6032424.jpeg",
      alt: "Zeitgenössisches Design mit Akzenten",
      title: "Akzente & Details"
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
          src="https://images.pexels.com/photos/6032418/pexels-photo-6032418.jpeg"
          alt="Zeitgenössischer Stil"
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
            Zeitgenössischer Stil
          </Typography>
          <Typography variant="h5" color="white" sx={{ maxWidth: 700, mx: 'auto', opacity: 0.9 }}>
            Innovative Lösungen für das moderne Zuhause, die Form und Funktion verbinden
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
          <Typography color="text.primary">Zeitgenössischer Stil</Typography>
        </Breadcrumbs>
      </Container>

      {/* Main Content */}
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Left Column - Description */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom fontWeight={600}>
              Die Essenz des zeitgenössischen Designs
            </Typography>
            <Typography variant="body1" paragraph sx={{ mb: 4 }}>
              Der zeitgenössische Stil überbrückt die Kluft zwischen moderner Minimalität und 
              klassischer Wärme, indem er Elemente von beiden entlehnt, um eine ausgewogene, 
              einladende Ästhetik zu schaffen. Dieser Stil ist flüssig und entwickelt sich mit 
              aktuellen Trends weiter, wobei er stets einen Fokus auf Komfort und Praktikabilität behält.
            </Typography>
            <Typography variant="body1" paragraph>
              Zeitgenössisches Design zeichnet sich durch saubere, subtile und raffinierte Linien aus. 
              Die Räume wirken frisch, leicht und luftig, mit einer fokussierten Verwendung von 
              Textur und Farbe. Materialien wie Holz, Stein und Stahl werden oft mit Glas und anderen 
              innovativen Materialien kombiniert, um ein harmonisches Gleichgewicht zu schaffen.
            </Typography>
            <Typography variant="body1" paragraph sx={{ mb: 4 }}>
              Die Farbpalette des zeitgenössischen Stils ist in der Regel neutral, mit gezielten 
              Akzenten, die dem Raum Tiefe und Persönlichkeit verleihen. Schwarz fungiert oft als 
              Anker, während gelegentliche Farbakzente die Neutralität durchbrechen und für visuelle 
              Spannung sorgen, ohne zu überwältigen.
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
                "Zeitgenössisches Design kombiniert das Beste aus Vergangenheit und Gegenwart, um Räume zu schaffen, die sowohl die heutigen Lebensstile als auch zeitlose Designprinzipien respektieren. Es geht nicht nur darum, was gerade im Trend liegt, sondern was für unsere Kunden in ihrem täglichen Leben funktioniert."
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
                Zeitgenössisches Design setzt typischerweise auf:
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
                    <Typography variant="body2">• Kombinierte Hölzer</Typography>
                    <Typography variant="body2">• Glas und Spiegel</Typography>
                    <Typography variant="body2">• Naturstein</Typography>
                    <Typography variant="body2">• Metall-Akzente</Typography>
                    <Typography variant="body2">• Innovative Texturen</Typography>
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
                    <Typography variant="body2">• Neutrales Fundament</Typography>
                    <Typography variant="body2">• Schwarz als Anker</Typography>
                    <Typography variant="body2">• Gezielte Akzente</Typography>
                    <Typography variant="body2">• Ton-in-Ton Nuancen</Typography>
                    <Typography variant="body2">• Metallische Töne</Typography>
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