'use client';

import { 
  Container, 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Button, 
  Breadcrumbs,
  Divider,
  Chip
} from '@mui/material';
import Link from 'next/link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';

// Design guide data
const designGuides = [
  {
    id: 'kitchen-layouts',
    title: 'Kitchen Layout Guide',
    excerpt: 'Discover the pros and cons of different kitchen layouts, from galley to L-shaped, U-shaped, and island configurations.',
    image: '/images/guides/kitchen-layouts.jpg',
    category: 'Layout Planning',
    readTime: '10 min read',
    featured: true,
    path: '/guides/kitchen-layouts'
  },
  {
    id: 'color-selection',
    title: 'Color Selection for Kitchens',
    excerpt: 'Learn how to choose the perfect color palette for your kitchen that reflects your style while creating a harmonious space.',
    image: '/images/guides/color-selection.jpg',
    category: 'Design Principles',
    readTime: '8 min read',
    featured: true,
    path: '/guides/color-selection'
  },
  {
    id: 'storage-solutions',
    title: 'Innovative Storage Solutions',
    excerpt: 'Explore creative and functional storage solutions to maximize space and organization in your kitchen design.',
    image: '/images/guides/storage-solutions.jpg',
    category: 'Organization',
    readTime: '12 min read',
    featured: true,
    path: '/guides/storage-solutions'
  },
  {
    id: 'countertop-materials',
    title: 'Countertop Material Guide',
    excerpt: 'Compare different countertop materials including granite, quartz, marble, solid surface, and laminate options.',
    image: '/images/guides/countertop-materials.jpg',
    category: 'Materials',
    readTime: '15 min read',
    featured: false,
    path: '/guides/countertop-materials'
  },
  {
    id: 'cabinet-styles',
    title: 'Cabinet Door Styles & Finishes',
    excerpt: 'Understand different cabinet door styles, from shaker to flat panel, raised panel, and glass front options.',
    image: '/images/guides/cabinet-styles.jpg',
    category: 'Style Guide',
    readTime: '9 min read',
    featured: false,
    path: '/guides/cabinet-styles'
  },
  {
    id: 'kitchen-lighting',
    title: 'Kitchen Lighting Design Guide',
    excerpt: 'Learn the principles of effective kitchen lighting, including task, ambient, and accent lighting considerations.',
    image: '/images/guides/kitchen-lighting.jpg',
    category: 'Lighting',
    readTime: '11 min read',
    featured: false,
    path: '/guides/kitchen-lighting'
  },
  {
    id: 'small-kitchen-design',
    title: 'Small Kitchen Design Strategies',
    excerpt: 'Discover design strategies and tricks to make the most of small kitchen spaces without sacrificing functionality or style.',
    image: '/images/guides/small-kitchen-design.jpg',
    category: 'Space Planning',
    readTime: '13 min read',
    featured: false,
    path: '/guides/small-kitchen-design'
  },
  {
    id: 'appliance-selection',
    title: 'Kitchen Appliance Selection Guide',
    excerpt: 'Tips for selecting and positioning kitchen appliances that complement your design and meet your cooking needs.',
    image: '/images/guides/appliance-selection.jpg',
    category: 'Appliances',
    readTime: '10 min read',
    featured: false,
    path: '/guides/appliance-selection'
  },
  {
    id: 'kitchen-flooring',
    title: 'Kitchen Flooring Options',
    excerpt: 'Compare different kitchen flooring materials including tile, hardwood, laminate, vinyl, and concrete options.',
    image: '/images/guides/kitchen-flooring.jpg',
    category: 'Materials',
    readTime: '8 min read',
    featured: false,
    path: '/guides/kitchen-flooring'
  },
  {
    id: 'ergonomic-design',
    title: 'Ergonomic Kitchen Design Principles',
    excerpt: 'Learn how to design a kitchen that prioritizes comfort, efficiency, and ease of movement for all users.',
    image: '/images/guides/ergonomic-design.jpg',
    category: 'Space Planning',
    readTime: '14 min read',
    featured: false,
    path: '/guides/ergonomic-design'
  },
  {
    id: 'sustainable-kitchens',
    title: 'Sustainable Kitchen Design Guide',
    excerpt: 'Discover eco-friendly materials, energy-efficient appliances, and sustainable practices for your kitchen design.',
    image: '/images/guides/sustainable-kitchens.jpg',
    category: 'Sustainability',
    readTime: '12 min read',
    featured: false,
    path: '/guides/sustainable-kitchens'
  },
  {
    id: 'hardware-selection',
    title: 'Cabinet Hardware Selection Guide',
    excerpt: 'Tips for choosing the perfect cabinet hardware that complements your kitchen style and enhances functionality.',
    image: '/images/guides/hardware-selection.jpg',
    category: 'Style Guide',
    readTime: '7 min read',
    featured: false,
    path: '/guides/hardware-selection'
  }
];

// Get all unique categories
const allCategories = ['All', ...Array.from(new Set(designGuides.map(guide => guide.category)))];

export default function GuidesPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ mb: 4 }}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          <Link href="/" passHref>
            <Typography color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
              Home
            </Typography>
          </Link>
          <Typography color="text.primary">Design Guides</Typography>
        </Breadcrumbs>
      </Box>

      <Typography variant="h3" component="h1" sx={{ mb: 2, fontWeight: 600 }}>
        Kitchen & Cabinet Design Guides
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 6, maxWidth: 800 }}>
        Explore our comprehensive collection of design guides to help you plan, design, 
        and implement your dream kitchen or cabinet project with confidence.
      </Typography>

      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4 }}>
          Featured Guides
        </Typography>
        <Grid container spacing={3}>
          {designGuides.filter(guide => guide.featured).map((guide) => (
            <Grid item xs={12} md={4} key={guide.id}>
              <Card sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 4
                }
              }}>
                <Box sx={{ position: 'relative', pt: '56.25%' }}>
                  <Image
                    src={guide.image}
                    alt={guide.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <Box 
                    sx={{ 
                      position: 'absolute', 
                      top: 16, 
                      left: 16, 
                      bgcolor: 'primary.main', 
                      color: 'white',
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 1
                    }}
                  >
                    <Typography variant="caption" sx={{ fontWeight: 500 }}>
                      {guide.category}
                    </Typography>
                  </Box>
                </Box>
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography gutterBottom variant="h5" component="h3" sx={{ fontWeight: 600 }}>
                    {guide.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {guide.excerpt}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto' }}>
                    <Typography variant="caption" color="text.secondary">
                      {guide.readTime}
                    </Typography>
                    <Button 
                      variant="text" 
                      endIcon={<ArrowForwardIcon />} 
                      component={Link}
                      href={guide.path}
                    >
                      Read Guide
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Divider sx={{ my: 6 }} />

      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Browse All Guides
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 4 }}>
          {allCategories.map((category) => (
            <Chip 
              key={category} 
              label={category} 
              clickable
              variant={category === 'All' ? 'filled' : 'outlined'}
              color={category === 'All' ? 'primary' : 'default'}
            />
          ))}
        </Box>
      </Box>

      <Grid container spacing={4}>
        {designGuides.filter(guide => !guide.featured).map((guide) => (
          <Grid item xs={12} sm={6} md={4} key={guide.id}>
            <Card sx={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: 3
              }
            }}>
              <CardMedia
                component="img"
                height="200"
                image={guide.image}
                alt={guide.title}
              />
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                  <Chip 
                    size="small" 
                    label={guide.category} 
                    color="primary" 
                    variant="outlined" 
                  />
                  <Typography variant="caption" color="text.secondary">
                    {guide.readTime}
                  </Typography>
                </Box>
                <Typography gutterBottom variant="h6" component="h3">
                  {guide.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {guide.excerpt}
                </Typography>
                <Button 
                  variant="text" 
                  endIcon={<ArrowForwardIcon />} 
                  component={Link}
                  href={guide.path}
                  sx={{ mt: 'auto', alignSelf: 'flex-start' }}
                >
                  Read Guide
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 10, p: 4, bgcolor: 'background.paper', borderRadius: 2, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Looking for Something Specific?
        </Typography>
        <Typography variant="body1" paragraph sx={{ maxWidth: 800, mx: 'auto' }}>
          If you can't find the design guidance you're looking for, our team is here to help. 
          Contact us for personalized design advice for your project.
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Button 
              variant="contained" 
              color="primary" 
              component={Link}
              href="/contact"
              endIcon={<ArrowForwardIcon />}
            >
              Contact Our Design Team
            </Button>
          </Grid>
          <Grid item>
            <Button 
              variant="outlined" 
              component={Link}
              href="/products"
              endIcon={<ArrowForwardIcon />}
            >
              Browse Our Products
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
} 