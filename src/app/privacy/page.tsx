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
  ListItemIcon,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button
} from '@mui/material';
import Link from 'next/link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import SecurityIcon from '@mui/icons-material/Security';
import StorageIcon from '@mui/icons-material/Storage';
import SettingsIcon from '@mui/icons-material/Settings';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CookieIcon from '@mui/icons-material/Cookie';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import BusinessIcon from '@mui/icons-material/Business';

export default function PrivacyPage() {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

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
          <Typography color="text.primary">Privacy Policy</Typography>
        </Breadcrumbs>
      </Box>

      <Typography variant="h3" component="h1" sx={{ mb: 2, fontWeight: 600 }}>
        Privacy Policy
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
        Last updated: {lastUpdated}
      </Typography>
      <Typography variant="body1" sx={{ mb: 6, maxWidth: 800 }}>
        This Privacy Policy describes how DOMA Design ("we", "us", or "our") collects, uses, and shares 
        your personal information when you use our website, products, and services. We respect your 
        privacy and are committed to protecting your personal data.
      </Typography>

      <Paper elevation={2} sx={{ p: 4, mb: 6 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <PrivacyTipIcon sx={{ mr: 2, color: 'primary.main', fontSize: 28 }} />
          <Typography variant="h5" component="h2">
            Policy Overview
          </Typography>
        </Box>
        <Typography variant="body1" paragraph>
          This Privacy Policy applies to all information collected through our website, mobile application, 
          and any related services, sales, marketing, or events (collectively, the "Services"). By accessing 
          or using our Services, you consent to the collection, use, and disclosure of information in 
          accordance with this Privacy Policy.
        </Typography>
        <Typography variant="body1" paragraph>
          We may change this Privacy Policy from time to time. If we make changes, we will notify you by 
          revising the date at the top of the policy and, in some cases, we may provide you with additional 
          notice (such as adding a statement to our website homepage or sending you a notification). We 
          encourage you to review the Privacy Policy whenever you access the Services or otherwise interact 
          with us to stay informed about our information practices and the choices available to you.
        </Typography>
      </Paper>

      <Box sx={{ mb: 6 }}>
        <Accordion 
          expanded={expanded === 'panel1'} 
          onChange={handleChange('panel1')}
          sx={{ mb: 2 }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <StorageIcon sx={{ mr: 2, color: 'primary.main' }} />
              <Typography variant="h6">1. Information We Collect</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle1" fontWeight={500} gutterBottom>
              Information You Provide to Us
            </Typography>
            <Typography variant="body1" paragraph>
              We collect information you provide directly to us. For example, we collect information when you:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  Create an account or profile on our website or mobile application
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  Request a quote, place an order, or make a purchase
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  Use our design tools or save kitchen/cabinet designs
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  Sign up for our newsletter or marketing communications
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  Contact our customer service or support team
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  Participate in surveys, contests, or promotions
                </ListItemText>
              </ListItem>
            </List>
            
            <Typography variant="body1" paragraph>
              The types of information we may collect include your name, email address, postal address, 
              phone number, payment information, product preferences, design data, home measurements, 
              and any other information you choose to provide.
            </Typography>

            <Typography variant="subtitle1" fontWeight={500} gutterBottom sx={{ mt: 3 }}>
              Information We Collect Automatically
            </Typography>
            <Typography variant="body1" paragraph>
              When you access or use our Services, we automatically collect certain information, including:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  <strong>Log Information:</strong> We collect log information about your use of the Services, 
                  including the type of browser you use, access times, pages viewed, your IP address, and the 
                  page you visited before navigating to our Services.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  <strong>Device Information:</strong> We collect information about the computer or mobile device 
                  you use to access our Services, including the hardware model, operating system and version, 
                  unique device identifiers, and mobile network information.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  <strong>Location Information:</strong> With your consent, we may collect information about your 
                  precise location using methods that include GPS, wireless networks, cell towers, and Wi-Fi access 
                  points. We may also collect information about your approximate location based on your IP address.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  <strong>Information Collected by Cookies and Similar Technologies:</strong> We use various 
                  technologies to collect information, including cookies, web beacons, and similar technologies. 
                  Cookies are small data files stored on your hard drive or in device memory that help us improve 
                  our Services and your experience, see which areas and features of our Services are popular, and 
                  count visits.
                </ListItemText>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion 
          expanded={expanded === 'panel2'} 
          onChange={handleChange('panel2')}
          sx={{ mb: 2 }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <VisibilityIcon sx={{ mr: 2, color: 'primary.main' }} />
              <Typography variant="h6">2. How We Use Your Information</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              We use the information we collect to provide, maintain, and improve our Services, such as:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  Process and fulfill your orders, including sending order confirmations, invoices, and shipping notifications
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  Provide customer service and respond to your inquiries, comments, and requests
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  Save and manage your kitchen and cabinet designs created with our design tools
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  Send you technical notices, updates, security alerts, and support and administrative messages
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  Communicate with you about products, services, offers, promotions, and events, and provide other news or information about DOMA Design
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  Personalize and improve the Services, including providing content or features that match user profiles or interests
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  Monitor and analyze trends, usage, and activities in connection with our Services
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  Detect, investigate, and prevent security incidents and other malicious, deceptive, fraudulent, or illegal activity and protect the rights and property of DOMA Design and others
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  Debug to identify and repair errors that impair existing intended functionality
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  Comply with our legal and financial obligations
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  Carry out any other purpose described to you at the time the information was collected
                </ListItemText>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion 
          expanded={expanded === 'panel3'} 
          onChange={handleChange('panel3')}
          sx={{ mb: 2 }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <BusinessIcon sx={{ mr: 2, color: 'primary.main' }} />
              <Typography variant="h6">3. Sharing of Information</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              We may share information about you as follows or as otherwise described in this Privacy Policy:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  <strong>With vendors, service providers, and consultants</strong> that perform services for us, including 
                  shipping and delivery services, payment processing, customer service, email delivery, and analytics
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  <strong>With installation partners</strong> when you request installation services, to facilitate 
                  the proper installation of your purchased products
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  <strong>In response to a request for information</strong> if we believe disclosure is in accordance 
                  with, or required by, any applicable law or legal process, including lawful requests by public 
                  authorities to meet national security or law enforcement requirements
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  <strong>If we believe your actions are inconsistent</strong> with our user agreements or policies, 
                  if we believe you have violated the law, or to protect the rights, property, and safety of DOMA 
                  Design or others
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  <strong>In connection with, or during negotiations of,</strong> any merger, sale of company assets, 
                  financing, or acquisition of all or a portion of our business by another company
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  <strong>Between and among DOMA Design and our current and future parents, affiliates, subsidiaries,</strong> 
                  and other companies under common control and ownership
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  <strong>With your consent</strong> or at your direction
                </ListItemText>
              </ListItem>
            </List>

            <Typography variant="body1" paragraph sx={{ mt: 2 }}>
              We may also share aggregated or de-identified information that cannot reasonably be used to identify you.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion 
          expanded={expanded === 'panel4'} 
          onChange={handleChange('panel4')}
          sx={{ mb: 2 }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CookieIcon sx={{ mr: 2, color: 'primary.main' }} />
              <Typography variant="h6">4. Cookies and Tracking Technologies</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              We and our third-party partners may use cookies, web beacons, and other tracking technologies 
              to track your use of our website and other online services.
            </Typography>
            
            <Typography variant="subtitle1" fontWeight={500} gutterBottom>
              Types of Cookies We Use
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  <strong>Essential cookies:</strong> These cookies are necessary for the website to function properly. 
                  They enable basic functions like page navigation and access to secure areas of the website.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  <strong>Preference cookies:</strong> These cookies enable the website to remember information that 
                  changes the way the website behaves or looks, like your preferred language or region.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  <strong>Statistical cookies:</strong> These cookies help us understand how visitors interact with the 
                  website by collecting and reporting information anonymously.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  <strong>Marketing cookies:</strong> These cookies are used to track visitors across websites. The 
                  intention is to display ads that are relevant and engaging for the individual user.
                </ListItemText>
              </ListItem>
            </List>

            <Typography variant="subtitle1" fontWeight={500} gutterBottom sx={{ mt: 3 }}>
              Managing Your Cookie Preferences
            </Typography>
            <Typography variant="body1" paragraph>
              Most web browsers are set to accept cookies by default. If you prefer, you can usually choose to 
              set your browser to remove or reject browser cookies. Please note that if you choose to remove or 
              reject cookies, this could affect the availability and functionality of our Services.
            </Typography>
            
            <Typography variant="subtitle1" fontWeight={500} gutterBottom sx={{ mt: 3 }}>
              Do Not Track Signals
            </Typography>
            <Typography variant="body1" paragraph>
              Some browsers may be configured to send "Do Not Track" signals to the websites you visit. We 
              currently do not respond to "Do Not Track" or similar signals. To find out more about "Do Not Track," 
              please visit http://www.allaboutdnt.com.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion 
          expanded={expanded === 'panel5'} 
          onChange={handleChange('panel5')}
          sx={{ mb: 2 }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5bh-content"
            id="panel5bh-header"
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <SecurityIcon sx={{ mr: 2, color: 'primary.main' }} />
              <Typography variant="h6">5. Security</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              DOMA Design takes reasonable measures to help protect information about you from loss, theft, 
              misuse, unauthorized access, disclosure, alteration, and destruction. However, no security system 
              is impenetrable, and we cannot guarantee the security of our systems or your information.
            </Typography>
            
            <Typography variant="subtitle1" fontWeight={500} gutterBottom sx={{ mt: 2 }}>
              Our Security Measures Include:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  Encryption of sensitive information using secure socket layer technology (SSL/TLS)
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  Implementation of appropriate access controls and authentication procedures
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  Regular security assessments and penetration testing
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  Employee training on security and privacy practices
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  Physical security measures at our data centers and offices
                </ListItemText>
              </ListItem>
            </List>
            
            <Typography variant="body1" paragraph sx={{ mt: 2 }}>
              We encourage you to help protect your information by creating a strong password, not sharing your 
              account information with others, and logging out of your account when using shared devices.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion 
          expanded={expanded === 'panel6'} 
          onChange={handleChange('panel6')}
          sx={{ mb: 2 }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel6bh-content"
            id="panel6bh-header"
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <SettingsIcon sx={{ mr: 2, color: 'primary.main' }} />
              <Typography variant="h6">6. Your Choices</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle1" fontWeight={500} gutterBottom>
              Account Information
            </Typography>
            <Typography variant="body1" paragraph>
              You may update, correct, or delete information about you at any time by logging into your online 
              account or emailing us at privacy@domadesign.com. We may retain certain information as required 
              by law or for legitimate business purposes. We may also retain cached or archived copies of 
              information about you for a certain period of time.
            </Typography>
            
            <Typography variant="subtitle1" fontWeight={500} gutterBottom sx={{ mt: 3 }}>
              Marketing Communications
            </Typography>
            <Typography variant="body1" paragraph>
              You can opt out of receiving promotional emails from DOMA Design by following the instructions in 
              those emails or by updating your preferences in your account settings. If you opt out, we may still 
              send you non-promotional emails, such as those about your account or our ongoing business relations.
            </Typography>
            
            <Typography variant="subtitle1" fontWeight={500} gutterBottom sx={{ mt: 3 }}>
              Mobile Push Notifications/Alerts
            </Typography>
            <Typography variant="body1" paragraph>
              With your consent, we may send promotional and non-promotional push notifications or alerts to your 
              mobile device. You can deactivate these messages at any time by changing the notification settings 
              on your mobile device.
            </Typography>
            
            <Typography variant="subtitle1" fontWeight={500} gutterBottom sx={{ mt: 3 }}>
              Location Information
            </Typography>
            <Typography variant="body1" paragraph>
              When you first launch any of our mobile applications that collect location information, you will be 
              asked to consent to the application's collection of this information. If you initially consent to our 
              collection of location information, you can subsequently stop the collection of this information by 
              changing the preferences on your mobile device.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion 
          expanded={expanded === 'panel7'} 
          onChange={handleChange('panel7')}
          sx={{ mb: 2 }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel7bh-content"
            id="panel7bh-header"
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ChildCareIcon sx={{ mr: 2, color: 'primary.main' }} />
              <Typography variant="h6">7. Children's Privacy</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              Our Services are not directed to children under 16 years of age, and we do not knowingly collect 
              personal information from children under 16. If we learn that we have collected personal information 
              of a child under 16, we will take reasonable steps to delete such information as soon as practicable. 
              If you believe we might have any information from or about a child under 16, please contact us at 
              privacy@domadesign.com.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion 
          expanded={expanded === 'panel8'} 
          onChange={handleChange('panel8')}
          sx={{ mb: 2 }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel8bh-content"
            id="panel8bh-header"
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <PrivacyTipIcon sx={{ mr: 2, color: 'primary.main' }} />
              <Typography variant="h6">8. Contact Us</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              If you have any questions about this Privacy Policy, please contact us at:
            </Typography>
            <Box sx={{ pl: 2, mb: 2 }}>
              <Typography variant="body1">DOMA Design, Inc.</Typography>
              <Typography variant="body1">123 Design Street</Typography>
              <Typography variant="body1">Portland, OR 97204</Typography>
              <Typography variant="body1">United States</Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>Email: privacy@domadesign.com</Typography>
              <Typography variant="body1">Phone: 1-800-555-1234</Typography>
            </Box>
            <Typography variant="body1">
              We will respond to your inquiries as soon as possible, typically within 30 days.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>

      <Divider sx={{ my: 6 }} />

      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h5" gutterBottom>
          Have Questions About Your Privacy?
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, maxWidth: 800, mx: 'auto' }}>
          If you have any concerns about your privacy or our data practices, our privacy team is here to help.
        </Typography>
        <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button 
            variant="contained" 
            color="primary" 
            component={Link}
            href="/contact"
            endIcon={<ArrowForwardIcon />}
          >
            Contact Our Privacy Team
          </Button>
          <Button 
            variant="outlined" 
            component={Link}
            href="/terms"
            endIcon={<ArrowForwardIcon />}
          >
            View Terms & Conditions
          </Button>
        </Box>
      </Box>
    </Container>
  );
} 