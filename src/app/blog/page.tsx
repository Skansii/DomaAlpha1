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
  Chip, 
  TextField,
  InputAdornment,
  Breadcrumbs,
  Divider,
  Pagination
} from '@mui/material';
import Link from 'next/link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Sample blog post data
const blogPosts = [
  {
    id: 'kitchen-trends-2023',
    title: 'Kitchen Trends 2023: What\'s Hot and What\'s Not',
    excerpt: 'Explore the latest kitchen design trends for 2023, from innovative storage solutions to trending color palettes and cabinet styles.',
    image: '/images/blog/kitchen-trends-2023.jpg',
    author: 'Sarah Johnson',
    date: 'May 15, 2023',
    category: 'Design Trends',
    tags: ['Kitchen Design', 'Trends', '2023']
  },
  {
    id: 'sustainable-materials',
    title: 'Sustainable Materials for Eco-Friendly Kitchens',
    excerpt: 'Discover environmentally-friendly materials for your kitchen renovation that don\'t compromise on style or functionality.',
    image: '/images/blog/sustainable-materials.jpg',
    author: 'Michael Chen',
    date: 'April 28, 2023',
    category: 'Sustainability',
    tags: ['Eco-Friendly', 'Materials', 'Sustainability']
  },
  {
    id: 'small-kitchen-storage',
    title: 'Maximizing Storage in Small Kitchen Spaces',
    excerpt: 'Clever storage solutions and design tricks to make the most of limited kitchen space without sacrificing style or functionality.',
    image: '/images/blog/small-kitchen-storage.jpg',
    author: 'Emily Rodriguez',
    date: 'April 10, 2023',
    category: 'Storage Solutions',
    tags: ['Small Spaces', 'Organization', 'Storage']
  },
  {
    id: 'lighting-guide',
    title: 'The Ultimate Guide to Kitchen Lighting',
    excerpt: 'Everything you need to know about layering different types of kitchen lighting to create both functional and beautiful spaces.',
    image: '/images/blog/lighting-guide.jpg',
    author: 'James Wilson',
    date: 'March 22, 2023',
    category: 'Lighting',
    tags: ['Lighting', 'Design Guide', 'Interior']
  },
  {
    id: 'cabinet-finishes',
    title: 'Exploring Cabinet Finishes: From Matte to High Gloss',
    excerpt: 'A comparison of popular cabinet finishes, helping you choose the right look and durability for your kitchen cabinets.',
    image: '/images/blog/cabinet-finishes.jpg',
    author: 'Sarah Johnson',
    date: 'March 5, 2023',
    category: 'Cabinets',
    tags: ['Cabinets', 'Finishes', 'Materials']
  },
  {
    id: 'kitchen-renovation-budget',
    title: 'How to Budget for Your Kitchen Renovation',
    excerpt: 'Practical tips on setting a realistic budget for your kitchen renovation project, including where to save and where to splurge.',
    image: '/images/blog/kitchen-renovation-budget.jpg',
    author: 'David Parker',
    date: 'February 18, 2023',
    category: 'Renovation',
    tags: ['Budget', 'Renovation', 'Planning']
  }
];

// Extracting all unique categories and tags for filtering
const allCategories = Array.from(new Set(blogPosts.map(post => post.category)));
const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  // Filter posts based on search term, category, and tag
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === null || post.category === selectedCategory;
    
    const matchesTag = selectedTag === null || post.tags.includes(selectedTag);
    
    return matchesSearch && matchesCategory && matchesTag;
  });

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(prev => prev === category ? null : category);
  };

  const handleTagClick = (tag: string) => {
    setSelectedTag(prev => prev === tag ? null : tag);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory(null);
    setSelectedTag(null);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ mb: 4 }}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          <Link href="/" passHref>
            <Typography color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
              Home
            </Typography>
          </Link>
          <Typography color="text.primary">Blog</Typography>
        </Breadcrumbs>
      </Box>

      <Typography variant="h3" component="h1" sx={{ mb: 2, fontWeight: 600 }}>
        DOMA Design Blog
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 6, maxWidth: 800 }}>
        Discover kitchen and cabinet design inspiration, industry trends, and practical advice 
        to help you create your perfect space.
      </Typography>

      <Grid container spacing={4}>
        {/* Left sidebar - filters */}
        <Grid item xs={12} md={3}>
          <Box sx={{ mb: 4 }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={handleSearchChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              size="small"
            />
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Categories
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {allCategories.map(category => (
                <Chip
                  key={category}
                  label={category}
                  onClick={() => handleCategoryClick(category)}
                  variant={selectedCategory === category ? 'filled' : 'outlined'}
                  color={selectedCategory === category ? 'primary' : 'default'}
                  clickable
                />
              ))}
            </Box>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Popular Tags
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {allTags.map(tag => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  onClick={() => handleTagClick(tag)}
                  variant={selectedTag === tag ? 'filled' : 'outlined'}
                  color={selectedTag === tag ? 'primary' : 'default'}
                  clickable
                />
              ))}
            </Box>
          </Box>

          {(searchTerm || selectedCategory || selectedTag) && (
            <Button 
              variant="outlined" 
              onClick={clearFilters}
              sx={{ mt: 2 }}
              size="small"
            >
              Clear Filters
            </Button>
          )}
        </Grid>

        {/* Right content - blog posts */}
        <Grid item xs={12} md={9}>
          {filteredPosts.length === 0 ? (
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <Typography variant="h6" gutterBottom>
                No articles found
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Try adjusting your search or filter criteria.
              </Typography>
            </Box>
          ) : (
            <Grid container spacing={3}>
              {filteredPosts.map(post => (
                <Grid item xs={12} sm={6} md={4} key={post.id}>
                  <Card sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: 4
                    }
                  }}>
                    <CardMedia
                      component="div"
                      sx={{
                        pt: '56.25%', // 16:9 aspect ratio
                        backgroundColor: '#f5f5f5',
                      }}
                      image={post.image}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Chip
                        label={post.category}
                        size="small"
                        color="primary"
                        variant="outlined"
                        sx={{ mb: 1 }}
                      />
                      <Typography gutterBottom variant="h6" component="h2" sx={{ fontWeight: 600 }}>
                        {post.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {post.excerpt}
                      </Typography>
                      <Divider sx={{ my: 2 }} />
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <PersonIcon fontSize="small" sx={{ mr: 0.5, color: 'text.secondary' }} />
                          <Typography variant="caption" color="text.secondary">
                            {post.author}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <DateRangeIcon fontSize="small" sx={{ mr: 0.5, color: 'text.secondary' }} />
                          <Typography variant="caption" color="text.secondary">
                            {post.date}
                          </Typography>
                        </Box>
                      </Box>
                      <Button 
                        fullWidth
                        variant="text" 
                        endIcon={<ArrowForwardIcon />} 
                        sx={{ mt: 2 }}
                        component={Link}
                        href={`/blog/${post.id}`}
                      >
                        Read More
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
          
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
            <Pagination count={3} color="primary" />
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ mt: 10, p: 4, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom align="center">
          Subscribe to Our Newsletter
        </Typography>
        <Typography variant="body1" paragraph align="center" sx={{ mb: 4 }}>
          Stay updated with our latest articles, design tips, and product announcements.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, maxWidth: 600, mx: 'auto' }}>
          <TextField
            fullWidth
            placeholder="Enter your email"
            size="small"
          />
          <Button variant="contained" color="primary">
            Subscribe
          </Button>
        </Box>
      </Box>
    </Container>
  );
} 