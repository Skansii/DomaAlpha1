'use client';

import React from 'react';
import { 
  Container, 
  Box, 
  Typography, 
  Breadcrumbs, 
  Paper,
  Divider,
  List,
  ListItem,
  ListItemText,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import Link from 'next/link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CookieIcon from '@mui/icons-material/Cookie';

// Define cookie categories and examples
const cookieCategories = [
  {
    id: 'necessary',
    name: 'Necessary Cookies',
    description: 'These cookies are essential for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.',
    canBeDisabled: false,
    examples: [
      { name: 'session', provider: 'doma.design', purpose: 'Preserves user session state across page requests', duration: 'Session' },
      { name: 'XSRF-TOKEN', provider: 'doma.design', purpose: 'Ensures visitor browsing security by preventing cross-site request forgery', duration: '1 day' },
      { name: 'cookieconsent_status', provider: 'doma.design', purpose: 'Stores your cookie consent preferences', duration: '1 year' }
    ]
  },
  {
    id: 'preferences',
    name: 'Preference Cookies',
    description: 'These cookies allow the website to remember choices you make and provide enhanced, personalized features. They may be set by us or by third-party providers whose services we have added to our pages.',
    canBeDisabled: true,
    examples: [
      { name: 'language', provider: 'doma.design', purpose: 'Remembers the user\'s selected language version of a website', duration: '1 year' },
      { name: 'currency', provider: 'doma.design', purpose: 'Remembers the user\'s selected currency for pricing', duration: '30 days' },
      { name: 'ui_theme', provider: 'doma.design', purpose: 'Stores user preferences for site appearance (light/dark mode)', duration: '1 year' }
    ]
  },
  {
    id: 'statistics',
    name: 'Statistics Cookies',
    description: 'These cookies collect information about how visitors use a website, for instance which pages visitors go to most often. We use this information to improve our website and user experience.',
    canBeDisabled: true,
    examples: [
      { name: '_ga', provider: 'Google Analytics', purpose: 'Registers a unique ID that is used to generate statistical data on how the visitor uses the website', duration: '2 years' },
      { name: '_gat', provider: 'Google Analytics', purpose: 'Used by Google Analytics to throttle request rate', duration: '1 day' },
      { name: '_gid', provider: 'Google Analytics', purpose: 'Registers a unique ID that is used to generate statistical data on how the visitor uses the website', duration: '1 day' }
    ]
  },
  {
    id: 'marketing',
    name: 'Marketing Cookies',
    description: 'These cookies track visitors across websites and collect information to provide customized ads. They are used to deliver advertisements more relevant to you and your interests.',
    canBeDisabled: true,
    examples: [
      { name: '_fbp', provider: 'Facebook', purpose: 'Used by Facebook to deliver a series of advertisement products such as real time bidding from third party advertisers', duration: '3 months' },
      { name: 'IDE', provider: 'Google DoubleClick', purpose: 'Used by Google DoubleClick to register and report the website user\'s actions after viewing or clicking one of the advertiser\'s ads', duration: '1 year' },
      { name: 'ads/ga-audiences', provider: 'Google', purpose: 'Used by Google AdWords to re-engage visitors that are likely to convert to customers based on the visitor\'s online behavior across websites', duration: 'Session' }
    ]
  }
];

export default function CookiePolicyPage() {
  const lastUpdated = 'January 15, 2023';

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ mb: 4 }}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          <Link href="/" passHref>
            <Typography color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
              Home
            </Typography>
          </Link>
          <Typography color="text.primary">Cookie Policy</Typography>
        </Breadcrumbs>
      </Box>

      <Typography variant="h3" component="h1" sx={{ mb: 2, fontWeight: 600 }}>
        Cookie Policy
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
        Last updated: {lastUpdated}
      </Typography>
      
      <Paper elevation={2} sx={{ p: 4, mb: 6 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <CookieIcon sx={{ mr: 2, color: 'primary.main', fontSize: 28 }} />
          <Typography variant="h5" component="h2">
            Cookie Policy Overview
          </Typography>
        </Box>
        <Typography variant="body1" paragraph>
          This Cookie Policy explains how DOMA Design ("we", "us", or "our") uses cookies and similar technologies 
          to recognize and remember you when you visit our website. It explains what these technologies are, why 
          we use them, and your rights to control our use of them.
        </Typography>
        <Typography variant="body1" paragraph>
          Cookies are small data files that are placed on your computer or mobile device when you visit a website. 
          They are widely used by website owners to help their websites work efficiently, provide analytical information, 
          remember your preferences, and deliver relevant advertising to you.
        </Typography>
        <Typography variant="body1">
          We use both session cookies (which expire once you close your web browser) and persistent cookies 
          (which stay on your device until you delete them or they expire). We use these technologies for the 
          following purposes:
        </Typography>
        <List>
          <ListItem>
            <ListItemText>
              • To enable certain functions of the website
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              • To provide analytics and understand how visitors interact with our website
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              • To store your preferences and personalize your experience
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              • To improve our products, services, and marketing efforts
            </ListItemText>
          </ListItem>
        </List>
      </Paper>

      <Typography variant="h4" component="h2" sx={{ mb: 4, fontWeight: 600 }}>
        Types of Cookies We Use
      </Typography>

      {cookieCategories.map((category, index) => (
        <Accordion key={category.id} defaultExpanded={index === 0} sx={{ mb: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${category.id}-content`}
            id={`${category.id}-header`}
          >
            <Typography variant="h6">{category.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              {category.description}
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              {category.canBeDisabled ? 
                'These cookies can be disabled in your browser settings, but some parts of the website may not work properly.' : 
                'These cookies cannot be disabled as they are necessary for the website to function properly.'}
            </Typography>
            
            <Typography variant="subtitle2" sx={{ mt: 2, mb: 1, fontWeight: 600 }}>
              Examples of {category.name}:
            </Typography>
            
            <TableContainer component={Paper} variant="outlined" sx={{ mb: 2 }}>
              <Table size="small">
                <TableHead>
                  <TableRow sx={{ backgroundColor: 'action.hover' }}>
                    <TableCell><Typography variant="subtitle2">Name</Typography></TableCell>
                    <TableCell><Typography variant="subtitle2">Provider</Typography></TableCell>
                    <TableCell><Typography variant="subtitle2">Purpose</Typography></TableCell>
                    <TableCell><Typography variant="subtitle2">Expiration</Typography></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {category.examples.map((cookie, idx) => (
                    <TableRow key={idx}>
                      <TableCell>{cookie.name}</TableCell>
                      <TableCell>{cookie.provider}</TableCell>
                      <TableCell>{cookie.purpose}</TableCell>
                      <TableCell>{cookie.duration}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
      ))}

      <Typography variant="h4" component="h2" sx={{ mt: 6, mb: 4, fontWeight: 600 }}>
        How to Manage Cookies
      </Typography>
      
      <Paper sx={{ p: 4, mb: 6 }}>
        <Typography variant="body1" paragraph>
          You can control and manage cookies in various ways. Please keep in mind that removing or blocking cookies 
          can impact your user experience and parts of our website may no longer be fully accessible.
        </Typography>
        
        <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>Browser Controls</Typography>
        <Typography variant="body1" paragraph>
          Most browsers allow you to view, delete or block cookies from specific or all websites. To manage cookies:
        </Typography>
        <List>
          <ListItem>
            <ListItemText>
              <strong>Google Chrome:</strong> Menu > Settings > Privacy and security > Cookies and other site data
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <strong>Mozilla Firefox:</strong> Menu > Options > Privacy & Security > Cookies and Site Data
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <strong>Safari:</strong> Preferences > Privacy > Cookies and website data
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <strong>Microsoft Edge:</strong> Settings > Cookies and site permissions > Cookies and site data
            </ListItemText>
          </ListItem>
        </List>
        
        <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>Do Not Track</Typography>
        <Typography variant="body1" paragraph>
          Some browsers have a "Do Not Track" feature that lets you tell websites that you do not want to have your online 
          activities tracked. Currently, there is no industry standard for handling Do Not Track signals, so we do not 
          currently respond to them.
        </Typography>
        
        <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>Third-Party Opt-Out Tools</Typography>
        <Typography variant="body1" paragraph>
          For cookies used by third-party services like Google Analytics or Facebook Pixel, you can opt out using:
        </Typography>
        <List>
          <ListItem>
            <ListItemText>
              <strong>Google Analytics:</strong>{' '}
              <Link 
                href="https://tools.google.com/dlpage/gaoptout" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'inherit', textDecoration: 'underline' }}
              >
                Google Analytics Opt-out Browser Add-on
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <strong>Facebook:</strong>{' '}
              <Link 
                href="https://www.facebook.com/ads/preferences/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'inherit', textDecoration: 'underline' }}
              >
                Facebook Ad Preferences
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <strong>Network Advertising Initiative:</strong>{' '}
              <Link 
                href="https://optout.networkadvertising.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'inherit', textDecoration: 'underline' }}
              >
                NAI Opt-out Tool
              </Link>
            </ListItemText>
          </ListItem>
        </List>
      </Paper>

      <Typography variant="h4" component="h2" sx={{ mt: 6, mb: 4, fontWeight: 600 }}>
        Cookie Consent
      </Typography>
      
      <Paper sx={{ p: 4, mb: 6 }}>
        <Typography variant="body1" paragraph>
          When you first visit our website, you will be presented with a cookie banner that allows you to accept or 
          decline non-essential cookies. You can change your preferences at any time by clicking on the "Cookie Settings" 
          button in the footer of our website.
        </Typography>
        
        <Typography variant="body1" paragraph>
          By clicking "Accept All Cookies" on the cookie banner, you consent to the use of all cookie categories mentioned 
          in this policy. If you click "Reject Non-Essential Cookies", we will only use necessary cookies that are required 
          for the functioning of our website.
        </Typography>
        
        <Typography variant="body1" paragraph>
          Please note that your consent preferences are saved using a cookie. If you delete cookies through your browser 
          settings, you will need to refresh your consent preferences the next time you visit our website.
        </Typography>
      </Paper>

      <Typography variant="h4" component="h2" sx={{ mt: 6, mb: 4, fontWeight: 600 }}>
        Updates to this Cookie Policy
      </Typography>
      
      <Paper sx={{ p: 4, mb: 6 }}>
        <Typography variant="body1" paragraph>
          We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business 
          practices. Any changes will become effective when we post the revised policy on this page, and we will indicate 
          the last updated date at the top of this page.
        </Typography>
        
        <Typography variant="body1" paragraph>
          We encourage you to review this policy periodically to stay informed about our use of cookies and related technologies.
        </Typography>
      </Paper>

      <Divider sx={{ my: 6 }} />

      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h5" gutterBottom>
          Questions about our Cookie Policy?
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, maxWidth: 800, mx: 'auto' }}>
          If you have any questions about our use of cookies or this Cookie Policy, please contact our privacy team.
        </Typography>
        <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button 
            variant="contained" 
            color="primary" 
            component={Link}
            href="/contact"
            endIcon={<ArrowForwardIcon />}
          >
            Contact Us
          </Button>
          <Button 
            variant="outlined" 
            component={Link}
            href="/privacy"
            endIcon={<ArrowForwardIcon />}
          >
            View Privacy Policy
          </Button>
        </Box>
      </Box>
    </Container>
  );
} 