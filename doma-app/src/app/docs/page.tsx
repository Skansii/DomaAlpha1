'use client';

import { useState } from 'react';
import { 
  Container, 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Button, 
  TextField, 
  InputAdornment,
  Breadcrumbs,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Tabs,
  Tab,
  Chip
} from '@mui/material';
import Link from 'next/link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import KitchenIcon from '@mui/icons-material/Kitchen';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

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
      id={`docs-tabpanel-${index}`}
      aria-labelledby={`docs-tab-${index}`}
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
    id: `docs-tab-${index}`,
    'aria-controls': `docs-tabpanel-${index}`,
  };
}

// Define document categories
const documentCategories = [
  {
    id: 'product-documentation',
    title: 'Product Documentation',
    icon: <KitchenIcon color="primary" />,
    description: 'Detailed documentation for all DOMA Design products',
    documents: [
      { 
        id: 'kitchen-systems-guide',
        title: 'Kitchen Systems User Guide',
        description: 'Complete guide to our kitchen systems including specifications, features, and options',
        label: 'Guide',
        path: '/docs/kitchen-systems-guide'
      },
      { 
        id: 'cabinet-specifications',
        title: 'Cabinet Technical Specifications',
        description: 'Detailed technical specifications for all cabinet models including dimensions and materials',
        label: 'Technical',
        path: '/docs/cabinet-specifications'
      },
      { 
        id: 'finishes-catalog',
        title: 'Finishes and Materials Catalog',
        description: 'Comprehensive catalog of all available finishes, materials, and color options',
        label: 'Catalog',
        path: '/docs/finishes-catalog'
      },
      { 
        id: 'hardware-guide',
        title: 'Hardware Selection Guide',
        description: 'Guide to selecting the right hardware for your cabinets and kitchen systems',
        label: 'Guide',
        path: '/docs/hardware-guide'
      }
    ]
  },
  {
    id: 'installation-maintenance',
    title: 'Installation & Maintenance',
    icon: <HomeRepairServiceIcon color="primary" />,
    description: 'Guides for installing and maintaining your DOMA Design products',
    documents: [
      { 
        id: 'installation-manual',
        title: 'Installation Manual',
        description: 'Step-by-step instructions for installing DOMA cabinets and kitchen systems',
        label: 'Manual',
        path: '/docs/installation-manual'
      },
      { 
        id: 'maintenance-guide',
        title: 'Care and Maintenance Guide',
        description: 'Best practices for maintaining the beauty and functionality of your DOMA products',
        label: 'Guide',
        path: '/docs/maintenance-guide'
      },
      { 
        id: 'troubleshooting',
        title: 'Troubleshooting Common Issues',
        description: 'Solutions for common issues and problems that may arise with your cabinets',
        label: 'Support',
        path: '/docs/troubleshooting'
      },
      { 
        id: 'warranty-information',
        title: 'Warranty Information',
        description: 'Detailed information about DOMA product warranties and coverage',
        label: 'Legal',
        path: '/docs/warranty-information'
      }
    ]
  },
  {
    id: 'planning-design',
    title: 'Planning & Design',
    icon: <SettingsIcon color="primary" />,
    description: 'Resources for planning your kitchen renovation and design projects',
    documents: [
      { 
        id: 'design-guide',
        title: 'Kitchen Design Guide',
        description: 'Comprehensive guide to designing a functional and beautiful kitchen',
        label: 'Guide',
        path: '/docs/design-guide'
      },
      { 
        id: 'measurement-guide',
        title: 'Measurement Guide',
        description: 'How to properly measure your space for a successful cabinet installation',
        label: 'Guide',
        path: '/docs/measurement-guide'
      },
      { 
        id: 'planning-checklist',
        title: 'Renovation Planning Checklist',
        description: 'Step-by-step checklist for planning a successful kitchen renovation',
        label: 'Checklist',
        path: '/docs/planning-checklist'
      },
      { 
        id: 'style-guide',
        title: 'Style and Trend Guide',
        description: 'Explore current kitchen and cabinet design trends and styles',
        label: 'Guide',
        path: '/docs/style-guide'
      }
    ]
  },
  {
    id: 'ordering-delivery',
    title: 'Ordering & Delivery',
    icon: <LocalShippingIcon color="primary" />,
    description: 'Information about the ordering process and delivery of DOMA products',
    documents: [
      { 
        id: 'ordering-process',
        title: 'Ordering Process Guide',
        description: 'Step-by-step guide to the ordering process from consultation to delivery',
        label: 'Guide',
        path: '/docs/ordering-process'
      },
      { 
        id: 'delivery-information',
        title: 'Delivery Information',
        description: 'What to expect during the delivery process and how to prepare',
        label: 'Information',
        path: '/docs/delivery-information'
      },
      { 
        id: 'return-policy',
        title: 'Return and Exchange Policy',
        description: 'Detailed information about our return and exchange policies',
        label: 'Policy',
        path: '/docs/return-policy'
      },
      { 
        id: 'shipping-faq',
        title: 'Shipping FAQ',
        description: 'Answers to frequently asked questions about shipping and delivery',
        label: 'FAQ',
        path: '/docs/shipping-faq'
      }
    ]
  },
  {
    id: 'payments-financing',
    title: 'Payments & Financing',
    icon: <CreditCardIcon color="primary" />,
    description: 'Information about payment options and financing for your DOMA purchase',
    documents: [
      { 
        id: 'payment-options',
        title: 'Payment Options',
        description: 'Overview of available payment methods and processing information',
        label: 'Information',
        path: '/docs/payment-options'
      },
      { 
        id: 'financing-guide',
        title: 'Financing Guide',
        description: 'Information about financing options, requirements, and application process',
        label: 'Guide',
        path: '/docs/financing-guide'
      },
      { 
        id: 'pricing-guide',
        title: 'Pricing Guide',
        description: 'Understanding DOMA product pricing and cost factors',
        label: 'Guide',
        path: '/docs/pricing-guide'
      },
      { 
        id: 'billing-faq',
        title: 'Billing FAQ',
        description: 'Answers to frequently asked questions about billing and payments',
        label: 'FAQ',
        path: '/docs/billing-faq'
      }
    ]
  },
  {
    id: 'faq-help',
    title: 'FAQ & Help',
    icon: <HelpIcon color="primary" />,
    description: 'Frequently asked questions and additional help resources',
    documents: [
      { 
        id: 'general-faq',
        title: 'General FAQ',
        description: 'Answers to the most common questions about DOMA products and services',
        label: 'FAQ',
        path: '/docs/general-faq'
      },
      { 
        id: 'glossary',
        title: 'Kitchen & Cabinet Glossary',
        description: 'Definitions of common terms and concepts related to kitchens and cabinets',
        label: 'Reference',
        path: '/docs/glossary'
      },
      { 
        id: 'support-guide',
        title: 'Customer Support Guide',
        description: 'How to get help and support for your DOMA products',
        label: 'Guide',
        path: '/docs/support-guide'
      },
      { 
        id: 'video-tutorials',
        title: 'Video Tutorials',
        description: 'Collection of instructional videos for DOMA products and services',
        label: 'Video',
        path: '/docs/video-tutorials'
      }
    ]
  }
];

export default function DocsPage() {
  const [value, setValue] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Filter documents based on search term
  const allDocuments = documentCategories.flatMap(category => category.documents);
  const filteredDocuments = searchTerm.trim() === '' 
    ? [] 
    : allDocuments.filter(doc => 
        doc.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        doc.description.toLowerCase().includes(searchTerm.toLowerCase())
      );

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ mb: 4 }}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          <Link href="/" passHref>
            <Typography color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
              Home
            </Typography>
          </Link>
          <Typography color="text.primary">Documentation</Typography>
        </Breadcrumbs>
      </Box>

      <Typography variant="h3" component="h1" sx={{ mb: 2, fontWeight: 600 }}>
        Product Documentation
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 6, maxWidth: 800 }}>
        Find comprehensive documentation, guides, and technical information for all DOMA Design products 
        and services. Browse by category or use the search to find what you need.
      </Typography>

      <Box sx={{ bgcolor: 'background.paper', borderRadius: 2, p: 4, mb: 6 }}>
        <TextField
          fullWidth
          placeholder="Search documentation..."
          variant="outlined"
          value={searchTerm}
          onChange={handleSearchChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        {searchTerm.trim() !== '' && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
              Search Results {filteredDocuments.length > 0 && `(${filteredDocuments.length})`}
            </Typography>
            {filteredDocuments.length === 0 ? (
              <Box sx={{ textAlign: 'center', py: 4 }}>
                <Typography variant="body1" color="text.secondary">
                  No documents found matching "{searchTerm}".
                </Typography>
                <Button 
                  variant="outlined" 
                  color="primary" 
                  sx={{ mt: 2 }}
                  onClick={() => setSearchTerm('')}
                >
                  Clear Search
                </Button>
              </Box>
            ) : (
              <List>
                {filteredDocuments.map((doc) => (
                  <ListItem 
                    key={doc.id} 
                    component={Link} 
                    href={doc.path}
                    sx={{
                      borderRadius: 1,
                      mb: 1,
                      '&:hover': {
                        bgcolor: 'action.hover',
                      }
                    }}
                  >
                    <ListItemIcon>
                      <DescriptionIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary={doc.title}
                      secondary={doc.description}
                      primaryTypographyProps={{ fontWeight: 500 }}
                    />
                    <Chip size="small" label={doc.label} />
                  </ListItem>
                ))}
              </List>
            )}
          </Box>
        )}
      </Box>

      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs 
            value={value} 
            onChange={handleTabChange} 
            aria-label="documentation categories"
            variant="scrollable"
            scrollButtons="auto"
          >
            {documentCategories.map((category, index) => (
              <Tab key={category.id} label={category.title} {...a11yProps(index)} />
            ))}
          </Tabs>
        </Box>

        {documentCategories.map((category, index) => (
          <TabPanel key={category.id} value={value} index={index}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Box sx={{ mr: 2 }}>
                {category.icon}
              </Box>
              <Box>
                <Typography variant="h4" component="h2" gutterBottom>
                  {category.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {category.description}
                </Typography>
              </Box>
            </Box>

            <Grid container spacing={3} sx={{ mt: 2 }}>
              {category.documents.map((doc) => (
                <Grid item xs={12} sm={6} key={doc.id}>
                  <Card 
                    sx={{ 
                      height: '100%',
                      transition: 'transform 0.2s, box-shadow 0.2s',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: 3
                      }
                    }}
                  >
                    <CardContent>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                        <Typography variant="h6" component="h3">
                          {doc.title}
                        </Typography>
                        <Chip size="small" label={doc.label} color="primary" variant="outlined" />
                      </Box>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {doc.description}
                      </Typography>
                      <Button 
                        variant="text" 
                        endIcon={<ArrowForwardIcon />} 
                        component={Link}
                        href={doc.path}
                        sx={{ mt: 'auto' }}
                      >
                        Read Document
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </TabPanel>
        ))}
      </Box>

      <Divider sx={{ my: 8 }} />

      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Need Additional Help?
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, maxWidth: 800, mx: 'auto' }}>
          If you can't find what you're looking for in our documentation, our support team is ready to assist you.
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Button 
              variant="contained" 
              color="primary" 
              component={Link}
              href="/support"
              endIcon={<ArrowForwardIcon />}
            >
              Contact Support
            </Button>
          </Grid>
          <Grid item>
            <Button 
              variant="outlined" 
              component={Link}
              href="/faq"
              endIcon={<ArrowForwardIcon />}
            >
              View FAQ
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
} 