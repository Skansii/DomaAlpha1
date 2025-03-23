'use client';

import React, { useState } from 'react';
import { 
  Container, 
  Box, 
  Typography, 
  Breadcrumbs, 
  Tabs,
  Tab,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Paper,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip
} from '@mui/material';
import Link from 'next/link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ImageIcon from '@mui/icons-material/Image';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ArticleIcon from '@mui/icons-material/Article';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SearchIcon from '@mui/icons-material/Search';
import EventIcon from '@mui/icons-material/Event';

// Sample press releases data
const pressReleases = [
  {
    id: 1,
    title: "DOMA Design Launches New Sustainable Kitchen Collection",
    date: "March 15, 2023",
    excerpt: "DOMA Design introduces a groundbreaking collection of sustainable kitchen cabinets and systems made from recycled materials and responsibly sourced wood.",
    image: "https://source.unsplash.com/random/800x600/?kitchen",
    category: "Product Launch",
    featured: true
  },
  {
    id: 2,
    title: "DOMA Design Announces Partnership with Leading Architects",
    date: "February 8, 2023",
    excerpt: "Strategic partnership with the Architectural Design Network aims to bring innovative kitchen solutions to high-end residential projects across North America.",
    image: "https://source.unsplash.com/random/800x600/?architecture",
    category: "Partnership",
    featured: true
  },
  {
    id: 3,
    title: "DOMA Design Opens New Showroom in San Francisco",
    date: "January 20, 2023",
    excerpt: "The new flagship showroom in San Francisco's design district showcases DOMA's premium kitchen and cabinet systems in an immersive retail environment.",
    image: "https://source.unsplash.com/random/800x600/?showroom",
    category: "Expansion",
    featured: false
  },
  {
    id: 4,
    title: "DOMA Design Wins Industry Award for Innovation",
    date: "December 5, 2022",
    excerpt: "The company's smart kitchen system receives recognition at the annual Kitchen & Bath Industry Show (KBIS) for its innovative approach to kitchen design.",
    image: "https://source.unsplash.com/random/800x600/?award",
    category: "Award",
    featured: false
  },
  {
    id: 5,
    title: "DOMA Design Announces Expansion into European Markets",
    date: "November 12, 2022",
    excerpt: "Following success in North America, DOMA Design plans to enter key European markets with tailored products for European homes and design preferences.",
    image: "https://source.unsplash.com/random/800x600/?europe",
    category: "Expansion",
    featured: false
  },
  {
    id: 6,
    title: "DOMA Design Releases Annual Sustainability Report",
    date: "October 18, 2022",
    excerpt: "The report highlights the company's progress toward environmental goals, including carbon footprint reduction and sustainable material sourcing initiatives.",
    image: "https://source.unsplash.com/random/800x600/?sustainability",
    category: "Corporate",
    featured: false
  }
];

// Sample media kit resources
const mediaKits = [
  {
    id: 1,
    title: "Company Fact Sheet",
    description: "Key information about DOMA Design, our history, mission, and leadership team.",
    fileType: "PDF",
    icon: <PictureAsPdfIcon />,
    size: "1.2 MB"
  },
  {
    id: 2,
    title: "Brand Logo Package",
    description: "Official DOMA Design logos in various formats and sizes for media use.",
    fileType: "ZIP",
    icon: <ImageIcon />,
    size: "4.8 MB"
  },
  {
    id: 3,
    title: "Product Image Library",
    description: "High-resolution images of our flagship kitchen and cabinet systems.",
    fileType: "ZIP",
    icon: <ImageIcon />,
    size: "15.3 MB"
  },
  {
    id: 4,
    title: "Executive Headshots & Bios",
    description: "Professional photos and biographical information for DOMA's leadership team.",
    fileType: "ZIP",
    icon: <ImageIcon />,
    size: "8.7 MB"
  },
  {
    id: 5,
    title: "Sustainability Commitment",
    description: "Detailed information about our environmental initiatives and sustainable practices.",
    fileType: "PDF",
    icon: <PictureAsPdfIcon />,
    size: "2.1 MB"
  },
  {
    id: 6,
    title: "Corporate Press Kit",
    description: "Comprehensive media kit with company background, key statistics, and visual assets.",
    fileType: "ZIP",
    icon: <ArticleIcon />,
    size: "22.5 MB"
  }
];

// Sample media coverage
const mediaCoverage = [
  {
    id: 1,
    title: "DOMA Design Revolutionizes Kitchen Spaces with Smart Technology",
    publication: "Interior Design Today",
    date: "April 2, 2023",
    link: "#",
    excerpt: "The feature story explores how DOMA Design is integrating smart technology into traditional kitchen spaces, creating functional and forward-thinking environments."
  },
  {
    id: 2,
    title: "How DOMA Design is Setting New Standards in Sustainable Kitchen Manufacturing",
    publication: "Sustainable Living Magazine",
    date: "March 18, 2023",
    link: "#",
    excerpt: "An in-depth look at DOMA Design's commitment to sustainability and how they're changing industry standards for eco-friendly production."
  },
  {
    id: 3,
    title: "DOMA's New San Francisco Showroom Blends Art and Functionality",
    publication: "Architecture Digest",
    date: "February 5, 2023",
    link: "#",
    excerpt: "A review of DOMA Design's innovative new showroom that creates an immersive experience for customers exploring kitchen design options."
  },
  {
    id: 4,
    title: "The Minds Behind DOMA Design: An Interview with Founder Sarah Johnson",
    publication: "Entrepreneur Spotlight",
    date: "January 12, 2023",
    link: "#",
    excerpt: "A revealing interview with DOMA Design's founder discussing the company's journey, philosophy, and vision for the future of kitchen design."
  }
];

// Sample upcoming events
const upcomingEvents = [
  {
    id: 1,
    title: "Kitchen & Bath Industry Show (KBIS)",
    date: "February 8-10, 2024",
    location: "Las Vegas Convention Center, Las Vegas, NV",
    description: "DOMA Design will be exhibiting at Booth #4567 with live demonstrations of our new integrated kitchen systems."
  },
  {
    id: 2,
    title: "International Contemporary Furniture Fair (ICFF)",
    date: "May 14-16, 2024",
    location: "Jacob K. Javits Convention Center, New York, NY",
    description: "Visit us at ICFF where we'll be unveiling our latest collection of modern kitchen designs."
  },
  {
    id: 3,
    title: "Sustainability in Design Conference",
    date: "June 22-24, 2024",
    location: "San Francisco Design Center, San Francisco, CA",
    description: "Our Director of Sustainability will be a keynote speaker discussing eco-friendly approaches to kitchen manufacturing."
  }
];

// Press contact information
const pressContacts = [
  {
    name: "Emily Rodriguez",
    title: "Media Relations Director",
    email: "media@domadesign.com",
    phone: "+1 (415) 555-1234"
  },
  {
    name: "Jason Chen",
    title: "PR Manager, North America",
    email: "pr@domadesign.com",
    phone: "+1 (415) 555-5678"
  }
];

export default function PressPage() {
  const [tabValue, setTabValue] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategoryFilter(event.target.value);
  };

  // Filter press releases based on search term and category
  const filteredPressReleases = pressReleases.filter(release => {
    const matchesSearch = release.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         release.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || release.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  // Extract unique categories for the filter dropdown
  const categories = ['All', ...new Set(pressReleases.map(release => release.category))];

  // Get featured press releases
  const featuredReleases = pressReleases.filter(release => release.featured);

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ mb: 4 }}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          <Link href="/" passHref>
            <Typography color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
              Home
            </Typography>
          </Link>
          <Typography color="text.primary">Press & Media</Typography>
        </Breadcrumbs>
      </Box>

      <Typography variant="h3" component="h1" sx={{ mb: 2, fontWeight: 600 }}>
        Press & Media
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 4 }}>
        Latest news, media resources, and contact information
      </Typography>

      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        textColor="primary"
        indicatorColor="primary"
        sx={{ mb: 4 }}
      >
        <Tab label="Press Releases" />
        <Tab label="Media Kit" />
        <Tab label="Media Coverage" />
        <Tab label="Events" />
        <Tab label="Contact" />
      </Tabs>

      {/* Press Releases Tab */}
      <Box sx={{ display: tabValue === 0 ? 'block' : 'none' }}>
        {/* Featured Press Releases */}
        {featuredReleases.length > 0 && (
          <>
            <Typography variant="h5" component="h2" sx={{ mb: 3, fontWeight: 600 }}>
              Featured Press Releases
            </Typography>
            <Grid container spacing={4} sx={{ mb: 6 }}>
              {featuredReleases.map((release) => (
                <Grid item xs={12} md={6} key={release.id}>
                  <Card sx={{ 
                    display: 'flex', 
                    flexDirection: { xs: 'column', sm: 'row' },
                    height: '100%'
                  }}>
                    <CardMedia
                      component="img"
                      sx={{ 
                        width: { xs: '100%', sm: 200 },
                        height: { xs: 200, sm: 'auto' }
                      }}
                      image={release.image}
                      alt={release.title}
                    />
                    <CardContent sx={{ flex: '1 0 auto' }}>
                      <Chip
                        label={release.category}
                        size="small"
                        color="primary"
                        variant="outlined"
                        sx={{ mb: 1 }}
                      />
                      <Typography variant="subtitle1" component="h3" sx={{ fontWeight: 600, mb: 1 }}>
                        {release.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        {release.date}
                      </Typography>
                      <Typography variant="body2" paragraph>
                        {release.excerpt}
                      </Typography>
                      <Button
                        size="small"
                        endIcon={<ArrowForwardIcon />}
                        sx={{ mt: 1 }}
                      >
                        Read Full Release
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </>
        )}

        {/* Press Release Search and Filter */}
        <Paper sx={{ p: 3, mb: 4 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                placeholder="Search press releases..."
                value={searchTerm}
                onChange={handleSearchChange}
                InputProps={{
                  startAdornment: <SearchIcon sx={{ color: 'text.secondary', mr: 1 }} />,
                }}
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth size="small">
                <InputLabel>Filter by Category</InputLabel>
                <Select
                  value={categoryFilter}
                  onChange={handleCategoryChange}
                  label="Filter by Category"
                >
                  {categories.map((category) => (
                    <MenuItem key={category} value={category}>
                      {category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Paper>

        {/* All Press Releases */}
        <Typography variant="h5" component="h2" sx={{ mb: 3, fontWeight: 600 }}>
          All Press Releases
        </Typography>
        
        {filteredPressReleases.length > 0 ? (
          <Grid container spacing={3}>
            {filteredPressReleases.map((release) => (
              <Grid item xs={12} key={release.id}>
                <Card sx={{ mb: 2 }}>
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={3} md={2}>
                        <Typography variant="body2" color="text.secondary">
                          {release.date}
                        </Typography>
                        <Chip
                          label={release.category}
                          size="small"
                          color="primary"
                          variant="outlined"
                          sx={{ mt: 1 }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={9} md={10}>
                        <Typography variant="subtitle1" component="h3" sx={{ fontWeight: 600, mb: 1 }}>
                          {release.title}
                        </Typography>
                        <Typography variant="body2" paragraph>
                          {release.excerpt}
                        </Typography>
                        <Button
                          size="small"
                          endIcon={<ArrowForwardIcon />}
                        >
                          Read Full Release
                        </Button>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography variant="body1" sx={{ textAlign: 'center', py: 4 }}>
            No press releases match your search criteria. Please try another search term or category.
          </Typography>
        )}
      </Box>

      {/* Media Kit Tab */}
      <Box sx={{ display: tabValue === 1 ? 'block' : 'none' }}>
        <Paper sx={{ p: 4, mb: 6 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <NewspaperIcon sx={{ mr: 2, color: 'primary.main', fontSize: 28 }} />
            <Typography variant="h5" component="h2">
              Media Resources
            </Typography>
          </Box>
          <Typography variant="body1" paragraph>
            Welcome to DOMA Design's Media Kit. Here you'll find resources that can help with your coverage of our company, products, and initiatives. All materials are available for download and free to use in publications, websites, and broadcasts that feature DOMA Design.
          </Typography>
          <Typography variant="body1" paragraph>
            If you need additional materials or have specific requests, please contact our media relations team at <strong>media@domadesign.com</strong>.
          </Typography>
        </Paper>

        <Typography variant="h5" component="h2" sx={{ mb: 3, fontWeight: 600 }}>
          Available Resources
        </Typography>
        
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {mediaKits.map((kit) => (
            <Grid item xs={12} sm={6} md={4} key={kit.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    mb: 2,
                    color: 'primary.main'
                  }}>
                    {kit.icon}
                    <Typography variant="caption" sx={{ ml: 1, bgcolor: 'action.hover', px: 1, borderRadius: 1 }}>
                      {kit.fileType} • {kit.size}
                    </Typography>
                  </Box>
                  <Typography variant="subtitle1" component="h3" sx={{ fontWeight: 600, mb: 1 }}>
                    {kit.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {kit.description}
                  </Typography>
                </CardContent>
                <Box sx={{ p: 2, pt: 0 }}>
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<FileDownloadIcon />}
                    fullWidth
                  >
                    Download
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ bgcolor: 'action.hover', p: 4, borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom>
            Usage Guidelines
          </Typography>
          <Typography variant="body2" paragraph>
            When using DOMA Design assets, please adhere to the following guidelines:
          </Typography>
          <List dense>
            <ListItem>
              <ListItemText primary="Do not alter, distort, or change the colors of our logo." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Maintain the proper aspect ratio when resizing images." />
            </ListItem>
            <ListItem>
              <ListItemText primary="When using product images, please credit: 'Courtesy of DOMA Design.'" />
            </ListItem>
            <ListItem>
              <ListItemText primary="For questions about proper usage, please contact our media relations team." />
            </ListItem>
          </List>
        </Box>
      </Box>

      {/* Media Coverage Tab */}
      <Box sx={{ display: tabValue === 2 ? 'block' : 'none' }}>
        <Typography variant="h5" component="h2" sx={{ mb: 3, fontWeight: 600 }}>
          Recent Media Coverage
        </Typography>

        {mediaCoverage.map((item, index) => (
          <React.Fragment key={item.id}>
            <Paper sx={{ p: 3, mb: 3 }}>
              <Typography variant="subtitle1" component="h3" sx={{ fontWeight: 600, mb: 1 }}>
                {item.title}
              </Typography>
              <Typography variant="caption" display="block" sx={{ mb: 2 }}>
                <strong>{item.publication}</strong> • {item.date}
              </Typography>
              <Typography variant="body2" paragraph>
                {item.excerpt}
              </Typography>
              <Button
                size="small"
                component="a"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                endIcon={<ArrowForwardIcon />}
              >
                Read Article
              </Button>
            </Paper>
            {index < mediaCoverage.length - 1 && <Divider sx={{ my: 3 }} />}
          </React.Fragment>
        ))}

        <Box sx={{ textAlign: 'center', mt: 6, mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Have you featured DOMA Design in your publication?
          </Typography>
          <Typography variant="body2" paragraph sx={{ maxWidth: 600, mx: 'auto' }}>
            If you've written about us and would like to see your article included here, please let us know.
          </Typography>
          <Button 
            variant="contained" 
            color="primary"
            component={Link}
            href="/contact"
          >
            Contact Our Media Team
          </Button>
        </Box>
      </Box>

      {/* Events Tab */}
      <Box sx={{ display: tabValue === 3 ? 'block' : 'none' }}>
        <Typography variant="h5" component="h2" sx={{ mb: 3, fontWeight: 600 }}>
          Upcoming Events
        </Typography>
        
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {upcomingEvents.map((event) => (
            <Grid item xs={12} md={4} key={event.id}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    mb: 2,
                    color: 'primary.main'
                  }}>
                    <EventIcon sx={{ mr: 1 }} />
                    <Typography variant="subtitle1" component="h3" sx={{ fontWeight: 600 }}>
                      {event.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                    {event.date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {event.location}
                  </Typography>
                  <Typography variant="body2">
                    {event.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Paper sx={{ p: 4, bgcolor: 'action.hover' }}>
          <Typography variant="h6" gutterBottom>
            Media Registration for Events
          </Typography>
          <Typography variant="body2" paragraph>
            Members of the media are welcome to attend our events. Please contact our media relations team at least 
            one week prior to the event to secure press credentials and arrange interviews with DOMA Design 
            representatives.
          </Typography>
          <Button 
            variant="contained" 
            color="primary"
            component={Link}
            href="/contact"
            endIcon={<ArrowForwardIcon />}
          >
            Request Media Pass
          </Button>
        </Paper>
      </Box>

      {/* Contact Tab */}
      <Box sx={{ display: tabValue === 4 ? 'block' : 'none' }}>
        <Paper sx={{ p: 4, mb: 6 }}>
          <Typography variant="h5" component="h2" sx={{ mb: 3, fontWeight: 600 }}>
            Media Contacts
          </Typography>
          <Typography variant="body1" paragraph>
            For media inquiries, interview requests, or additional information about DOMA Design, please contact:
          </Typography>
          
          <Grid container spacing={4}>
            {pressContacts.map((contact, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    {contact.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {contact.title}
                  </Typography>
                  <List dense disablePadding>
                    <ListItem disablePadding sx={{ mt: 1 }}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <MailOutlineIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary={contact.email} />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <PhoneIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary={contact.phone} />
                    </ListItem>
                  </List>
                </Box>
              </Grid>
            ))}
          </Grid>
          
          <Divider sx={{ my: 4 }} />
          
          <Typography variant="h6" gutterBottom>
            Social Media
          </Typography>
          <Typography variant="body2" paragraph>
            Connect with DOMA Design on social media for the latest news and updates:
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button startIcon={<TwitterIcon />} variant="outlined">
              Twitter
            </Button>
            <Button startIcon={<LinkedInIcon />} variant="outlined">
              LinkedIn
            </Button>
            <Button startIcon={<InstagramIcon />} variant="outlined">
              Instagram
            </Button>
          </Box>
        </Paper>
        
        <Box sx={{ bgcolor: 'action.hover', p: 4, borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom>
            Press Release Subscriptions
          </Typography>
          <Typography variant="body2" paragraph>
            To receive DOMA Design press releases and news directly to your inbox, please subscribe to our media list:
          </Typography>
          
          <Grid container spacing={2} alignItems="flex-start">
            <Grid item xs={12} sm={7} md={8}>
              <TextField
                fullWidth
                label="Email Address"
                placeholder="Enter your email address"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={5} md={4}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
              >
                Subscribe
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
} 