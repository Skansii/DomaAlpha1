'use client';

import { useState } from 'react';
import { 
  Container, 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Button, 
  Tabs, 
  Tab,
  Breadcrumbs,
  Link as MuiLink
} from '@mui/material';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`product-tabpanel-${index}`}
      aria-labelledby={`product-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `product-tab-${index}`,
    'aria-controls': `product-tabpanel-${index}`,
  };
}

const productCategories = [
  {
    id: 'kitchen-systems',
    name: 'Kitchen Systems',
    description: 'Complete kitchen solutions designed for modern homes, featuring elegant cabinetry, countertops, and storage systems.',
    image: '/images/products/kitchen-system.jpg',
    items: [
      { name: 'Modern Kitchen Suite', image: '/images/products/modern-kitchen.jpg', price: 'Starting at $8,999' },
      { name: 'Minimalist Kitchen Collection', image: '/images/products/minimalist-kitchen.jpg', price: 'Starting at $7,499' },
      { name: 'Urban Compact Kitchen', image: '/images/products/urban-kitchen.jpg', price: 'Starting at $5,999' },
    ]
  },
  {
    id: 'cabinet-solutions',
    name: 'Cabinet Solutions',
    description: 'Premium cabinet options for kitchens, bathrooms, and other spaces. Customizable to fit your specific needs and style preferences.',
    image: '/images/products/cabinet-solutions.jpg',
    items: [
      { name: 'Premium Cabinetry Set', image: '/images/products/premium-cabinets.jpg', price: 'Starting at $3,499' },
      { name: 'Wall Cabinet Collection', image: '/images/products/wall-cabinets.jpg', price: 'Starting at $1,999' },
      { name: 'Base Cabinet Series', image: '/images/products/base-cabinets.jpg', price: 'Starting at $2,499' },
    ]
  },
  {
    id: 'smart-storage',
    name: 'Smart Storage',
    description: 'Innovative storage solutions designed to maximize space and improve organization in your kitchen and living spaces.',
    image: '/images/products/smart-storage.jpg',
    items: [
      { name: 'Pull-Out Organizers', image: '/images/products/pull-out-organizers.jpg', price: 'Starting at $499' },
      { name: 'Corner Cabinet Solutions', image: '/images/products/corner-solutions.jpg', price: 'Starting at $799' },
      { name: 'Pantry Organization Systems', image: '/images/products/pantry-systems.jpg', price: 'Starting at $1,299' },
    ]
  },
  {
    id: 'design-catalog',
    name: 'Design Catalog',
    description: 'Browse our collection of design ideas, materials, and finishes to inspire your next kitchen or cabinet project.',
    image: '/images/products/design-catalog.jpg',
    items: [
      { name: 'Hardware Collection', image: '/images/products/hardware-collection.jpg', price: 'Varies' },
      { name: 'Material Samples', image: '/images/products/material-samples.jpg', price: 'Sample kits from $99' },
      { name: 'Finish Options', image: '/images/products/finish-options.jpg', price: 'Custom pricing' },
    ]
  }
];

export default function ProductsPage() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ mb: 4 }}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          <Link href="/" passHref>
            <MuiLink underline="hover" color="inherit">Home</MuiLink>
          </Link>
          <Typography color="text.primary">Products</Typography>
        </Breadcrumbs>
      </Box>

      <Typography variant="h3" component="h1" sx={{ mb: 2, fontWeight: 600 }}>
        Our Products
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 6, maxWidth: 800 }}>
        Explore DOMA Design's premium kitchen and cabinet solutions. Our products combine 
        innovative design, superior craftsmanship, and smart functionality to create 
        beautiful spaces that meet your needs and reflect your style.
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs 
          value={value} 
          onChange={handleChange} 
          aria-label="product categories" 
          variant="scrollable" 
          scrollButtons="auto"
        >
          {productCategories.map((category, index) => (
            <Tab key={category.id} label={category.name} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Box>

      {productCategories.map((category, index) => (
        <TabPanel key={category.id} value={value} index={index}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" component="h2" gutterBottom>
              {category.name}
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              {category.description}
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {category.items.map((item) => (
              <Grid item key={item.name} xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="div"
                    sx={{
                      pt: '56.25%', // 16:9 aspect ratio
                      backgroundColor: '#f5f5f5',
                    }}
                    image={item.image}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h6" component="h3">
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {item.price}
                    </Typography>
                    <Button 
                      size="small" 
                      endIcon={<ArrowForwardIcon />} 
                      sx={{ mt: 'auto' }}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Button variant="contained" color="primary" endIcon={<ArrowForwardIcon />}>
              View All {category.name}
            </Button>
          </Box>
        </TabPanel>
      ))}

      <Box sx={{ mt: 10, mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Custom Solutions
        </Typography>
        <Typography variant="body1" paragraph>
          Can't find exactly what you're looking for? Our design team specializes in creating 
          custom solutions tailored to your specific needs and space requirements.
        </Typography>
        <Button 
          variant="outlined" 
          color="primary" 
          endIcon={<ArrowForwardIcon />}
          component={Link}
          href="/contact"
        >
          Contact Us for Custom Orders
        </Button>
      </Box>
    </Container>
  );
} 