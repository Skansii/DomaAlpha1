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
  MenuItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Breadcrumbs,
  Tabs,
  Tab,
  Divider,
  Paper
} from '@mui/material';
import Link from 'next/link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import ChatIcon from '@mui/icons-material/Chat';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ArticleIcon from '@mui/icons-material/Article';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
      id={`support-tabpanel-${index}`}
      aria-labelledby={`support-tab-${index}`}
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
    id: `support-tab-${index}`,
    'aria-controls': `support-tabpanel-${index}`,
  };
}

const faqs = [
  {
    question: 'How do I measure my space for a kitchen design?',
    answer: 'To accurately measure your kitchen space, start by drawing a rough floor plan. Measure the length of each wall from corner to corner, and note the location of windows, doors, and any obstacles. Measure the ceiling height, and make note of any irregularities in the walls or floor. Our design team can provide a detailed measuring guide, or you can schedule an in-home measuring service.'
  },
  {
    question: 'What is the typical timeline for a kitchen renovation project?',
    answer: 'A typical kitchen renovation with DOMA Design takes 8-12 weeks from final design approval to completion. This includes 3-5 weeks for cabinet manufacturing, 1-2 weeks for delivery, and 4-5 weeks for installation. Custom projects or those requiring special materials may take longer. Our project managers will provide you with a detailed timeline specific to your project.'
  },
  {
    question: 'Do you offer installation services?',
    answer: 'Yes, DOMA Design offers professional installation services in select areas. Our certified installation teams are experienced in handling our products and will ensure proper assembly and placement. If we don\'t have installation services in your area, we can recommend trusted local contractors who are familiar with our products.'
  },
  {
    question: 'What warranty do you offer on your cabinets?',
    answer: 'DOMA Design cabinets come with a limited lifetime warranty for residential use, covering defects in material and workmanship under normal use. Hardware components such as hinges and drawer slides carry a 10-year warranty. For commercial installations, we offer a 10-year warranty on cabinets and a 5-year warranty on hardware.'
  },
  {
    question: 'Can I customize the size and finish of my cabinets?',
    answer: 'Yes, DOMA Design offers extensive customization options. While we have standard cabinet sizes, we can accommodate custom dimensions to fit your space. We offer a wide range of finishes, colors, and door styles, and can even create custom colors to match your design vision. Speak with one of our designers to explore all customization possibilities.'
  },
  {
    question: 'How do I care for and maintain my cabinets?',
    answer: 'For daily cleaning, use a soft, damp cloth and mild soap if needed. Avoid harsh chemicals, abrasive cleaners, and scouring pads. Wipe up spills immediately to prevent damage. Periodically check and tighten hardware, and adjust hinges if doors become misaligned. For wooden cabinets, maintain consistent indoor humidity levels to prevent warping or cracking.'
  },
  {
    question: 'Do you offer financing options?',
    answer: 'Yes, DOMA Design offers several financing options to help make your project more affordable. We partner with reputable financial institutions to provide competitive rates and flexible payment plans. Options include no-interest plans for qualified customers, traditional financing with extended terms, and home equity loan coordination. Contact our sales team for current financing promotions.'
  },
  {
    question: 'What is your return policy?',
    answer: 'Custom cabinetry is manufactured specifically for your project and cannot be returned. Stock items in new, unused condition may be returned within 30 days with original packaging and receipt, subject to a restocking fee. Damaged products should be reported within 48 hours of delivery. Please review our full return policy document for detailed information.'
  }
];

const supportOptions = [
  {
    icon: <HelpOutlineIcon fontSize="large" />,
    title: 'FAQs',
    description: 'Find answers to common questions about our products and services',
    action: 'View FAQs',
    link: '#faq-section'
  },
  {
    icon: <ArticleIcon fontSize="large" />,
    title: 'Knowledge Base',
    description: 'Explore detailed articles, guides, and tutorials for self-help',
    action: 'Browse Articles',
    link: '/docs'
  },
  {
    icon: <EmailIcon fontSize="large" />,
    title: 'Email Support',
    description: 'Send us an email and we\'ll respond within 24 hours',
    action: 'Email Us',
    link: 'mailto:support@domadesign.com'
  },
  {
    icon: <PhoneIcon fontSize="large" />,
    title: 'Phone Support',
    description: 'Speak directly with our support team during business hours',
    action: 'Call Us',
    link: 'tel:+18005551234'
  },
  {
    icon: <ChatIcon fontSize="large" />,
    title: 'Live Chat',
    description: 'Chat with a representative for immediate assistance',
    action: 'Start Chat',
    link: '#chat'
  }
];

export default function SupportPage() {
  const [value, setValue] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [ticketFormData, setTicketFormData] = useState({
    name: '',
    email: '',
    subject: '',
    orderNumber: '',
    category: '',
    priority: 'medium',
    message: ''
  });

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleTicketFormChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setTicketFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTicketSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // In a real implementation, this would submit the form data to a backend
    console.log('Submitting ticket:', ticketFormData);
    alert('Support ticket submitted successfully!');
    // Reset form
    setTicketFormData({
      name: '',
      email: '',
      subject: '',
      orderNumber: '',
      category: '',
      priority: 'medium',
      message: ''
    });
  };

  // Filter FAQs based on search query
  const filteredFaqs = faqs.filter(faq => 
    searchQuery === '' || 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
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
          <Typography color="text.primary">Support Center</Typography>
        </Breadcrumbs>
      </Box>

      <Typography variant="h3" component="h1" sx={{ mb: 2, fontWeight: 600 }}>
        Support Center
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 6, maxWidth: 800 }}>
        Get help with your DOMA Design products and services. We're here to assist you 
        every step of the way.
      </Typography>

      <Box sx={{ bgcolor: 'background.paper', borderRadius: 2, p: 4, mb: 8 }}>
        <Typography variant="h5" gutterBottom align="center">
          How can we help you today?
        </Typography>
        <Box 
          component="form" 
          sx={{ 
            display: 'flex', 
            mt: 3, 
            maxWidth: 600, 
            mx: 'auto' 
          }}
        >
          <TextField
            fullWidth
            placeholder="Search for answers..."
            variant="outlined"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: <SearchIcon sx={{ mr: 1, color: 'text.secondary' }} />,
            }}
          />
          <Button 
            variant="contained" 
            color="primary" 
            sx={{ ml: 1 }}
          >
            Search
          </Button>
        </Box>
      </Box>

      <Grid container spacing={4} sx={{ mb: 8 }}>
        {supportOptions.map((option, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ 
              height: '100%', 
              textAlign: 'center', 
              p: 2,
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: 3
              }
            }}>
              <CardContent>
                <Box sx={{ color: 'primary.main', mb: 2 }}>
                  {option.icon}
                </Box>
                <Typography variant="h6" component="h3" gutterBottom>
                  {option.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {option.description}
                </Typography>
                <Button 
                  variant="outlined" 
                  color="primary"
                  component={option.link.startsWith('#') || option.link.startsWith('mailto:') || option.link.startsWith('tel:') ? 'a' : Link}
                  href={option.link}
                >
                  {option.action}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs 
          value={value} 
          onChange={handleTabChange} 
          aria-label="support tabs"
          variant="fullWidth"
        >
          <Tab label="FAQs" {...a11yProps(0)} />
          <Tab label="Submit a Ticket" {...a11yProps(1)} />
          <Tab label="Order Status" {...a11yProps(2)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <Box id="faq-section" sx={{ mb: 6 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Frequently Asked Questions
          </Typography>
          
          {filteredFaqs.length === 0 ? (
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <Typography variant="h6" gutterBottom>
                No results found
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Try adjusting your search or browse all FAQs below.
              </Typography>
              <Button 
                variant="outlined" 
                color="primary" 
                sx={{ mt: 2 }}
                onClick={() => setSearchQuery('')}
              >
                View All FAQs
              </Button>
            </Box>
          ) : (
            <Box sx={{ mt: 4 }}>
              {filteredFaqs.map((faq, index) => (
                <Accordion key={index} sx={{ mb: 2 }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`faq-content-${index}`}
                    id={`faq-header-${index}`}
                  >
                    <Typography variant="subtitle1" fontWeight={500}>
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body1">
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          )}
          
          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Don't see your question listed?
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={() => setValue(1)}
            >
              Contact Support
            </Button>
          </Box>
        </Box>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Submit a Support Ticket
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Need personalized assistance? Fill out the form below and our support team will get back to you as soon as possible.
          </Typography>
          
          <Paper sx={{ p: 3, mt: 4 }}>
            <Box component="form" noValidate onSubmit={handleTicketSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Full Name"
                    name="name"
                    value={ticketFormData.name}
                    onChange={handleTicketFormChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={ticketFormData.email}
                    onChange={handleTicketFormChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={ticketFormData.subject}
                    onChange={handleTicketFormChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Order Number (if applicable)"
                    name="orderNumber"
                    value={ticketFormData.orderNumber}
                    onChange={handleTicketFormChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    select
                    fullWidth
                    label="Category"
                    name="category"
                    value={ticketFormData.category}
                    onChange={handleTicketFormChange}
                  >
                    <MenuItem value="product-inquiry">Product Inquiry</MenuItem>
                    <MenuItem value="order-status">Order Status</MenuItem>
                    <MenuItem value="returns">Returns & Refunds</MenuItem>
                    <MenuItem value="technical-issue">Technical Issue</MenuItem>
                    <MenuItem value="installation">Installation Help</MenuItem>
                    <MenuItem value="warranty">Warranty Claim</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    select
                    fullWidth
                    label="Priority"
                    name="priority"
                    value={ticketFormData.priority}
                    onChange={handleTicketFormChange}
                  >
                    <MenuItem value="low">Low</MenuItem>
                    <MenuItem value="medium">Medium</MenuItem>
                    <MenuItem value="high">High</MenuItem>
                    <MenuItem value="urgent">Urgent</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    value={ticketFormData.message}
                    onChange={handleTicketFormChange}
                    placeholder="Please describe your issue in detail..."
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                  >
                    Submit Ticket
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Box>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Check Order Status
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Track the status of your order by entering your order number and email address below.
          </Typography>
          
          <Paper sx={{ p: 3, mt: 4, maxWidth: 600, mx: 'auto' }}>
            <Box component="form">
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Order Number"
                    placeholder="e.g., DO-12345"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Email Address"
                    type="email"
                    placeholder="Enter the email used for your order"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Track Order
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Paper>
          
          <Divider sx={{ my: 6 }} />
          
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
              Need additional help?
            </Typography>
            <Typography variant="body1" paragraph>
              Contact our customer service team directly.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
              <Button 
                variant="outlined" 
                startIcon={<PhoneIcon />} 
                component="a" 
                href="tel:+18005551234"
              >
                Call Us: 1-800-555-1234
              </Button>
              <Button 
                variant="outlined" 
                startIcon={<EmailIcon />} 
                component="a" 
                href="mailto:orders@domadesign.com"
              >
                Email: orders@domadesign.com
              </Button>
            </Box>
          </Box>
        </Box>
      </TabPanel>

      <Box sx={{ bgcolor: 'background.paper', p: 4, borderRadius: 2, textAlign: 'center', mt: 8 }}>
        <Typography variant="h5" gutterBottom>
          Need More Resources?
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, maxWidth: 800, mx: 'auto' }}>
          Explore our comprehensive documentation, design guides, and video tutorials to make the most of your DOMA Design products.
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Button 
              variant="contained" 
              color="primary" 
              component={Link}
              href="/docs"
              endIcon={<ArrowForwardIcon />}
            >
              Documentation
            </Button>
          </Grid>
          <Grid item>
            <Button 
              variant="outlined" 
              component={Link}
              href="/guides"
              endIcon={<ArrowForwardIcon />}
            >
              Design Guides
            </Button>
          </Grid>
          <Grid item>
            <Button 
              variant="outlined" 
              component={Link}
              href="/faq"
              endIcon={<ArrowForwardIcon />}
            >
              Full FAQ
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
} 