'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MaterialButton from '@/components/ui/MaterialButton';
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
      role: 'Gründerin & Chefdesignerin',
      bio: 'Mit über 15 Jahren Erfahrung im Küchendesign hat Jane eine Leidenschaft für die Schaffung von Räumen, die sowohl schön als auch funktional sind.',
      image: '/images/about/jane-smith.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'Produktionsleiter',
      bio: 'Michael stellt sicher, dass jeder Schrank und jede Komponente, die wir produzieren, unseren hohen Qualitäts- und Handwerksstandards entspricht.',
      image: '/images/about/michael-chen.jpg'
    },
    {
      name: 'Sarah Johnson',
      role: 'Kundenerfahrungsmanagerin',
      bio: 'Sarah arbeitet direkt mit unseren Kunden zusammen, um ihre Bedürfnisse zu verstehen und sicherzustellen, dass ihre Vision Wirklichkeit wird.',
      image: '/images/about/sarah-johnson.jpg'
    }
  ];

  const values = [
    {
      title: 'Qualität',
      description: 'Wir glauben daran, außergewöhnliche Qualität in jedem Aspekt unserer Arbeit zu liefern, vom Design bis zur Installation.',
      icon: <BuildOutlinedIcon sx={{ fontSize: 28 }} />
    },
    {
      title: 'Innovation',
      description: 'Wir erkunden kontinuierlich neue Materialien, Techniken und Designs, um unseren Kunden frische Ideen zu präsentieren.',
      icon: <FlashOnOutlinedIcon sx={{ fontSize: 28 }} />
    },
    {
      title: 'Nachhaltigkeit',
      description: 'Wir sind nachhaltigen Praktiken verpflichtet, verwenden umweltfreundliche Materialien und minimieren Abfall.',
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
          src="/images/about/hero-kitchen.jpg"
          alt="Küchendesignstudio"
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
              Über Doma Design
            </Typography>
            <Typography variant="h5" color="white" sx={{ maxWidth: 800, opacity: 0.9 }}>
              Unsere Mission ist es, schöne, funktionale Küchenräume zu schaffen, die inspirieren und Freude am alltäglichen Leben bringen.
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
            <Tab label="Unsere Geschichte" id="tab-0" aria-controls="tabpanel-0" />
            <Tab label="Unsere Werte" id="tab-1" aria-controls="tabpanel-1" />
            <Tab label="Unser Team" id="tab-2" aria-controls="tabpanel-2" />
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
                    src="/images/about/team-working.jpg"
                    alt="Küchendesigner bei der Arbeit"
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
                  Unsere Geschichte
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  Doma Design wurde 2015 gegründet und entstand aus der Leidenschaft, schöne, funktionale Küchen zu schaffen, die das Herz des Zuhauses bilden. Unsere Reise begann, als unsere Gründerin Jane Smith die Notwendigkeit von Küchendesigns erkannte, die Ästhetik nahtlos mit Funktionalität verbinden.
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  Was als kleines Designstudio begann, hat sich zu einem umfassenden Küchendesign- und Herstellungsunternehmen entwickelt, das Kunden in der gesamten Region bedient. Unser Erfolg basiert auf unserem Engagement für qualitativ hochwertige Handwerkskunst, innovatives Design und außergewöhnlichen Kundenservice.
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  Bei Doma Design glauben wir, dass die Küche mehr als nur ein funktionaler Raum ist – hier werden Erinnerungen geschaffen, Gespräche geführt und das Leben findet statt. Diese Philosophie leitet jedes Projekt, das wir übernehmen.
                </Typography>
                <Box sx={{ mt: 4 }}>
                  <MaterialButton 
                    href="/contact" 
                    variant="outlined" 
                    color="primary"
                    size="large"
                  >
                    Kontakt aufnehmen
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
                Woran wir glauben
              </Typography>
              <Typography variant="h3" component="h2" fontWeight={800} gutterBottom>
                Unsere Kernwerte
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Diese Grundsätze leiten alles, was wir tun
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
                    Unser Qualitätsversprechen
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Qualität ist das Herzstück all unserer Tätigkeiten. Wir glauben, dass jede Küche langlebig sein sollte, gefertigt aus den besten Materialien und mit fachmännischem Handwerk.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Unser Team ist stolz auf seine Arbeit und achtet auf jedes Detail, um sicherzustellen, dass Ihre Küche nicht nur schön aussieht, sondern auch über Jahre hinweg perfekt funktioniert.
                  </Typography>
                  <Typography variant="body1">
                    Wir stehen hinter unserer Arbeit mit umfassenden Garantien und außergewöhnlichem Kundenservice nach dem Verkauf, damit Sie sich bei Ihrer Investition sicher fühlen können.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6} sx={{ bgcolor: 'background.paper', p: { xs: 4, md: 6 } }}>
                  <Typography variant="h4" component="h3" fontWeight={700} color="text.primary" gutterBottom>
                    Unser Engagement für Nachhaltigkeit
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    Wir glauben daran, Küchen zu schaffen, die nicht nur schön aussehen, sondern auch umweltbewusst sind.
                  </Typography>
                  <List>
                    {[
                      "Bezug von Materialien von nachhaltigen Lieferanten",
                      "Minimierung von Abfall durch effiziente Herstellungsprozesse",
                      "Verwendung von wasserbasierten Lacken mit niedrigem VOC-Gehalt",
                      "Design für Langlebigkeit, um die Notwendigkeit eines Ersatzes zu reduzieren",
                      "Recycling und Wiederverwendung von Materialien, wann immer möglich"
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
                Die Menschen hinter unserer Arbeit
              </Typography>
              <Typography variant="h3" component="h2" fontWeight={800} gutterBottom>
                Lernen Sie unser Team kennen
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Talentierte Fachleute, die sich dafür einsetzen, Ihre Vision zum Leben zu erwecken
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
                Interesse, Teil unseres Teams zu werden?
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph sx={{ maxWidth: 600, mx: 'auto' }}>
                Wir suchen immer nach talentierten Designern, Handwerkern und Kundenservice-Profis, die der Doma Design Familie beitreten möchten.
              </Typography>
              <MaterialButton 
                href="/contact" 
                variant="contained" 
                color="primary"
                size="large"
              >
                Kontaktieren Sie uns
              </MaterialButton>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
} 