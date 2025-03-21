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
import GavelIcon from '@mui/icons-material/Gavel';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentIcon from '@mui/icons-material/Payment';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

export default function TermsPage() {
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
          <Typography color="text.primary">Terms & Conditions</Typography>
        </Breadcrumbs>
      </Box>

      <Typography variant="h3" component="h1" sx={{ mb: 2, fontWeight: 600 }}>
        Terms & Conditions
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
        Last updated: {lastUpdated}
      </Typography>
      <Typography variant="body1" sx={{ mb: 6, maxWidth: 800 }}>
        Please read these terms and conditions carefully before using DOMA Design's services. 
        By accessing or using our website, products, or services, you agree to be bound by these terms.
      </Typography>

      <Paper elevation={2} sx={{ p: 4, mb: 6 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <GavelIcon sx={{ mr: 2, color: 'primary.main', fontSize: 28 }} />
          <Typography variant="h5" component="h2">
            Agreement Overview
          </Typography>
        </Box>
        <Typography variant="body1" paragraph>
          These Terms and Conditions ("Terms") govern your relationship with DOMA Design ("Company", "we", "us", or "our") 
          and your use of our website, applications, products, and services (collectively, the "Services"). By using our Services, 
          you acknowledge that you have read, understood, and agree to be bound by these Terms.
        </Typography>
        <Typography variant="body1" paragraph>
          We may modify these Terms at any time. If we do this, we will post the changed Terms on this page and will indicate at the 
          top of this page the date the Terms were last revised. You understand and agree that your continued use of the Service after 
          we have made any such changes constitutes your acceptance of the new Terms.
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
              <PrivacyTipIcon sx={{ mr: 2, color: 'primary.main' }} />
              <Typography variant="h6">1. Use of Services</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              Our Services are intended for personal and commercial use related to kitchen and cabinet design, purchase, 
              and installation. You may not use our Services for any illegal or unauthorized purpose nor may you violate 
              any laws in your jurisdiction.
            </Typography>
            <Typography variant="body1" paragraph>
              You are responsible for maintaining the confidentiality of your account and password and for restricting 
              access to your computer, and you agree to accept responsibility for all activities that occur under your 
              account or password.
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  You may use our design tools to create kitchen and cabinet layouts for your personal or professional projects.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  You may save, print, and share designs created using our design tools for non-commercial purposes.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  You may request quotes, place orders, and track your purchases through our Services.
                </ListItemText>
              </ListItem>
            </List>
            <Typography variant="body1" paragraph>
              We reserve the right to refuse service, terminate accounts, remove or edit content, or cancel orders at 
              our sole discretion.
            </Typography>
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
              <VerifiedUserIcon sx={{ mr: 2, color: 'primary.main' }} />
              <Typography variant="h6">2. Intellectual Property Rights</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              The Service and its original content, features, and functionality are and will remain the exclusive property 
              of DOMA Design and its licensors. The Service is protected by copyright, trademark, and other laws of both 
              the United States and foreign countries.
            </Typography>
            <Typography variant="body1" paragraph>
              Our trademarks and trade dress may not be used in connection with any product or service without the prior 
              written consent of DOMA Design.
            </Typography>
            <Typography variant="body1" paragraph>
              Designs created using our design tools are subject to the following ownership terms:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  You retain ownership of the specific design layouts you create using our tools.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  DOMA Design retains ownership of all templates, design elements, and software functionality used to create designs.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  You grant DOMA Design a non-exclusive, royalty-free license to use designs created with our tools for 
                  marketing, training, and improvement of our Services, with attribution where appropriate.
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
              <PaymentIcon sx={{ mr: 2, color: 'primary.main' }} />
              <Typography variant="h6">3. Pricing and Payment</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              All prices for products and services are shown in US dollars and are subject to change without notice. 
              While we strive to provide accurate pricing information, pricing errors may occur. We reserve the right 
              to correct any errors and to change or update information at any time without prior notice.
            </Typography>
            <Typography variant="body1" paragraph>
              Payment terms for products and services:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  For custom cabinet orders, a 50% deposit is required to begin production.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  The remaining balance is due prior to shipping or delivery.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  For design services, payment is due at the time services are rendered unless otherwise specified in a written agreement.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  Design fees may be credited toward cabinet purchases as specified in your agreement.
                </ListItemText>
              </ListItem>
            </List>
            <Typography variant="body1" paragraph>
              We accept payment via credit card, bank transfer, and other methods as specified at the time of purchase. 
              By providing a payment method, you represent that you are authorized to use the payment method and authorize 
              us to charge your payment method for all orders placed.
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
              <LocalShippingIcon sx={{ mr: 2, color: 'primary.main' }} />
              <Typography variant="h6">4. Shipping and Delivery</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              Delivery times are estimates only and commence from the date of order confirmation. DOMA Design is not 
              responsible for delays in delivery that are beyond our control, including but not limited to delays caused 
              by shipping carriers, manufacturer delays, or natural disasters.
            </Typography>
            <Typography variant="body1" paragraph>
              Shipping and delivery terms:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  Risk of loss and title for items purchased from our website pass to you upon delivery of the items to 
                  the carrier.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  You are responsible for inspecting all products upon delivery and noting any damage or discrepancies 
                  on the delivery receipt.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  Any damage or discrepancies not noted on the delivery receipt must be reported to DOMA Design within 
                  48 hours of delivery.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  Delivery to remote locations may incur additional fees.
                </ListItemText>
              </ListItem>
            </List>
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
              <GavelIcon sx={{ mr: 2, color: 'primary.main' }} />
              <Typography variant="h6">5. Warranty and Returns</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              DOMA Design products come with a limited lifetime warranty for residential use and a 10-year warranty for 
              commercial use, covering defects in material and workmanship under normal use and maintenance.
            </Typography>
            <Typography variant="body1" paragraph>
              Warranty and return terms:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  Custom-made products cannot be returned unless they are defective or damaged.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  Stock items in new, unused condition may be returned within 30 days with original packaging and receipt, 
                  subject to a restocking fee.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  Warranty claims must be submitted with proof of purchase, a description of the defect, and photos of the 
                  defective product.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  The warranty does not cover damage resulting from improper installation, misuse, abuse, neglect, or 
                  exposure to extreme temperature or humidity conditions.
                </ListItemText>
              </ListItem>
            </List>
            <Typography variant="body1" paragraph>
              DOMA Design's liability is limited to repair or replacement of the defective product, at our discretion. 
              We are not responsible for installation, removal, or reinstallation costs associated with warranty claims.
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
              <GavelIcon sx={{ mr: 2, color: 'primary.main' }} />
              <Typography variant="h6">6. Limitation of Liability</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              IN NO EVENT SHALL DOMA DESIGN, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS, BE LIABLE TO YOU FOR ANY 
              DIRECT, INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES WHATSOEVER RESULTING FROM ANY 
              (I) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT, (II) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE 
              WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF OUR SERVICE, (III) ANY UNAUTHORIZED ACCESS TO OR USE 
              OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, 
              (IV) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM OUR SERVICE, (V) ANY BUGS, VIRUSES, TROJAN 
              HORSES, OR THE LIKE, WHICH MAY BE TRANSMITTED TO OR THROUGH OUR SERVICE BY ANY THIRD PARTY, AND/OR (VI) ANY 
              ERRORS OR OMISSIONS IN ANY CONTENT OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF YOUR USE 
              OF ANY CONTENT POSTED, EMAILED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICE, WHETHER BASED ON 
              WARRANTY, CONTRACT, TORT, OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT THE COMPANY IS ADVISED OF THE 
              POSSIBILITY OF SUCH DAMAGES.
            </Typography>
            <Typography variant="body1" paragraph>
              THE FOREGOING LIMITATION OF LIABILITY SHALL APPLY TO THE FULLEST EXTENT PERMITTED BY LAW IN THE APPLICABLE 
              JURISDICTION. YOU SPECIFICALLY ACKNOWLEDGE THAT DOMA DESIGN SHALL NOT BE LIABLE FOR USER SUBMISSIONS OR THE 
              DEFAMATORY, OFFENSIVE, OR ILLEGAL CONDUCT OF ANY THIRD PARTY AND THAT THE RISK OF HARM OR DAMAGE FROM THE 
              FOREGOING RESTS ENTIRELY WITH YOU.
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
              <GavelIcon sx={{ mr: 2, color: 'primary.main' }} />
              <Typography variant="h6">7. Governing Law and Dispute Resolution</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              These Terms shall be governed and construed in accordance with the laws of the State of Oregon, United States, 
              without regard to its conflict of law provisions.
            </Typography>
            <Typography variant="body1" paragraph>
              Any dispute arising from or relating to the subject matter of these Terms shall be finally settled by arbitration 
              in Portland, Oregon, using the English language in accordance with the Arbitration Rules and Procedures of 
              the Judicial Arbitration and Mediation Services, Inc. (JAMS) then in effect, by one commercial arbitrator with 
              substantial experience in resolving intellectual property and commercial contract disputes, who shall be selected 
              from the appropriate list of JAMS arbitrators in accordance with the Arbitration Rules and Procedures of JAMS.
            </Typography>
            <Typography variant="body1" paragraph>
              The prevailing party in any arbitration or litigation shall be entitled to recover its attorneys' fees and costs 
              from the non-prevailing party.
            </Typography>
            <Typography variant="body1" paragraph>
              Notwithstanding the foregoing, we may seek injunctive or other equitable relief to protect our intellectual 
              property rights in any court of competent jurisdiction.
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
              <GavelIcon sx={{ mr: 2, color: 'primary.main' }} />
              <Typography variant="h6">8. Miscellaneous Provisions</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              <strong>Entire Agreement:</strong> These Terms constitute the entire agreement between you and DOMA Design 
              regarding the use of the Service, superseding any prior agreements between you and DOMA Design relating to 
              your use of the Service.
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Waiver and Severability:</strong> The failure of DOMA Design to exercise or enforce any right or 
              provision of these Terms shall not constitute a waiver of such right or provision. If any provision of these 
              Terms is found by a court of competent jurisdiction to be invalid, the parties nevertheless agree that the court 
              should endeavor to give effect to the parties' intentions as reflected in the provision, and the other provisions 
              of these Terms remain in full force and effect.
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Assignment:</strong> These Terms, and any rights and licenses granted hereunder, may not be transferred 
              or assigned by you, but may be assigned by DOMA Design without restriction. Any assignment attempted to be made 
              in violation of these Terms shall be void.
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Notices:</strong> Any notices or other communications provided by DOMA Design under these Terms, including 
              those regarding modifications to these Terms, will be given: (i) via email; or (ii) by posting to the Service. 
              For notices made by e-mail, the date of receipt will be deemed the date on which such notice is transmitted.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>

      <Divider sx={{ my: 6 }} />

      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h5" gutterBottom>
          Have Questions About Our Terms?
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, maxWidth: 800, mx: 'auto' }}>
          If you have any questions about these Terms & Conditions, please contact our legal department.
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