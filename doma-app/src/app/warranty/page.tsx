'use client';

import React, { useState } from 'react';
import { 
  Container, 
  Box, 
  Typography, 
  Breadcrumbs, 
  Paper,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  MenuItem,
  Stepper,
  Step,
  StepLabel,
  Card,
  CardContent
} from '@mui/material';
import Link from 'next/link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import CheckIcon from '@mui/icons-material/Check';
import ConstructionIcon from '@mui/icons-material/Construction';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BuildIcon from '@mui/icons-material/Build';
import WarningIcon from '@mui/icons-material/Warning';
import DescriptionIcon from '@mui/icons-material/Description';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const warrantyTypes = [
  {
    title: "Limited Lifetime Warranty",
    icon: <VerifiedUserIcon />,
    description: "Our cabinets are backed by a limited lifetime warranty that covers defects in materials and workmanship for as long as the original purchaser owns the home.",
    coverage: [
      "Cabinet box construction",
      "Drawer box construction",
      "Door and drawer fronts",
      "Hinges and drawer glides (mechanical parts)"
    ],
    exclusions: [
      "Normal wear and tear",
      "Improper installation",
      "Misuse or abuse",
      "Environmental factors (extreme humidity, heat, etc.)",
      "Commercial applications"
    ],
    duration: "For as long as the original purchaser owns and occupies the home"
  },
  {
    title: "5-Year Hardware Warranty",
    icon: <BuildIcon />,
    description: "All hardware components including handles, knobs, and decorative elements are covered by a 5-year warranty against manufacturing defects.",
    coverage: [
      "Handles and knobs",
      "Decorative hardware",
      "Soft-close mechanisms",
      "Pull-out features"
    ],
    exclusions: [
      "Normal wear and tear",
      "Improper installation",
      "Misuse or abuse",
      "Environmental factors (extreme humidity, heat, etc.)",
      "Commercial applications"
    ],
    duration: "5 years from date of purchase"
  },
  {
    title: "1-Year Installation Warranty",
    icon: <ConstructionIcon />,
    description: "If we installed your cabinets, our work is guaranteed for one year from the installation date. This covers issues related to the installation process.",
    coverage: [
      "Cabinet alignment",
      "Secure mounting",
      "Hardware installation",
      "Functionality of installed components"
    ],
    exclusions: [
      "Alterations by customer or third parties",
      "Normal settling of the home",
      "Damage caused by other contractors",
      "Damage from water leaks or other household issues"
    ],
    duration: "1 year from date of installation"
  }
];

const claimSteps = [
  'Submit Claim Form',
  'Documentation Review',
  'Assessment',
  'Resolution'
];

const faqs = [
  {
    question: "What should I do if I discover a defect in my cabinets?",
    answer: "Contact our customer service department as soon as possible. Take clear photos of the defect and have your order information ready. You can initiate a warranty claim through our online portal or by calling our customer service number."
  },
  {
    question: "Is my warranty transferable if I sell my home?",
    answer: "No, our warranties are non-transferable and apply only to the original purchaser who installed the products in their home."
  },
  {
    question: "Do I need to register my warranty?",
    answer: "Yes, for full warranty coverage, please register your products within 30 days of installation. This can be done online through our warranty registration portal or by mailing in the warranty card that came with your products."
  },
  {
    question: "What is not covered by the warranty?",
    answer: "Our warranties do not cover damage resulting from improper installation, misuse, abuse, neglect, unauthorized repairs, normal wear and tear, or exposure to extreme temperature or humidity conditions. Commercial applications have different warranty terms."
  },
  {
    question: "How long will the warranty claim process take?",
    answer: "Most warranty claims are processed within 2-4 weeks from the time all required documentation is received. Complex cases may take longer, especially if an in-home inspection is required."
  },
  {
    question: "Will you replace the entire cabinet if one part is defective?",
    answer: "We generally replace only the defective component unless the defect affects the structural integrity or functionality of the entire cabinet. Our goal is to provide the most appropriate solution based on the specific situation."
  }
];

export default function WarrantyPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [claimForm, setClaimForm] = useState({
    name: '',
    email: '',
    phone: '',
    orderNumber: '',
    purchaseDate: '',
    warrantyType: '',
    description: '',
    hasDocumentation: ''
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setClaimForm({
      ...claimForm,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would submit the form to a server
    console.log("Form submitted:", claimForm);
    // Move to next step
    setActiveStep(1);
  };

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
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
          <Typography color="text.primary">Warranty Information</Typography>
        </Breadcrumbs>
      </Box>

      <Typography variant="h3" component="h1" sx={{ mb: 2, fontWeight: 600 }}>
        Warranty Information
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 4 }}>
        Our commitment to quality extends to our warranty policies
      </Typography>
      
      <Paper elevation={2} sx={{ p: 4, mb: 6 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <VerifiedUserIcon sx={{ mr: 2, color: 'primary.main', fontSize: 28 }} />
          <Typography variant="h5" component="h2">
            Our Warranty Promise
          </Typography>
        </Box>
        <Typography variant="body1" paragraph>
          At DOMA Design, we stand behind the quality of our products with comprehensive warranty coverage. 
          We're committed to delivering exceptional products that meet the highest standards of craftsmanship 
          and durability. Our warranties reflect our confidence in the quality of our cabinetry systems.
        </Typography>
        <Typography variant="body1">
          All warranties are valid from the date of purchase or installation and apply to products used in 
          residential settings under normal use conditions. Commercial applications may have different warranty terms.
        </Typography>
      </Paper>

      <Typography variant="h4" component="h2" sx={{ mb: 4, fontWeight: 600 }}>
        Warranty Coverage
      </Typography>

      <Grid container spacing={4} sx={{ mb: 6 }}>
        {warrantyTypes.map((warranty, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box sx={{ 
                    p: 1.5, 
                    borderRadius: '50%', 
                    bgcolor: 'primary.main', 
                    color: 'white',
                    mr: 2
                  }}>
                    {warranty.icon}
                  </Box>
                  <Typography variant="h6" component="h3">
                    {warranty.title}
                  </Typography>
                </Box>
                
                <Typography variant="body2" color="text.secondary" paragraph sx={{ mb: 3 }}>
                  {warranty.description}
                </Typography>
                
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                  Coverage Includes:
                </Typography>
                <List dense disablePadding sx={{ mb: 2 }}>
                  {warranty.coverage.map((item, idx) => (
                    <ListItem key={idx} disablePadding sx={{ mb: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 28 }}>
                        <CheckIcon fontSize="small" color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
                
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                  Exclusions:
                </Typography>
                <List dense disablePadding sx={{ mb: 2 }}>
                  {warranty.exclusions.slice(0, 3).map((item, idx) => (
                    <ListItem key={idx} disablePadding sx={{ mb: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 28 }}>
                        <WarningIcon fontSize="small" color="warning" />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
                
                {warranty.exclusions.length > 3 && (
                  <Typography variant="body2" color="text.secondary">
                    + {warranty.exclusions.length - 3} more exclusions
                  </Typography>
                )}
              </CardContent>
              <Box sx={{ p: 2, pt: 0, borderTop: '1px solid', borderColor: 'divider', mt: 'auto' }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                  Duration: {warranty.duration}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h4" component="h2" sx={{ mt: 6, mb: 4, fontWeight: 600 }}>
        Warranty Claim Process
      </Typography>
      
      <Paper sx={{ p: 4, mb: 6 }}>
        <Stepper activeStep={-1} alternativeLabel sx={{ mb: 4 }}>
          {claimSteps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              How to Submit a Warranty Claim
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <AssignmentIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="Complete the Warranty Claim Form" 
                  secondary="Fill out all required information including your order details and description of the issue."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <DescriptionIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="Provide Documentation" 
                  secondary="Upload clear photos of the defect, your proof of purchase, and any other relevant documentation."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LocalShippingIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="Assessment" 
                  secondary="Our warranty team will review your claim. In some cases, we may schedule an in-home inspection."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <SupportAgentIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="Resolution" 
                  secondary="If your claim is approved, we will repair or replace the defective items according to our warranty terms."
                />
              </ListItem>
            </List>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Box component="form" onSubmit={handleSubmit} sx={{ display: activeStep === 0 ? 'block' : 'none' }}>
              <Typography variant="h6" gutterBottom>
                Warranty Claim Form
              </Typography>
              
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Full Name"
                    name="name"
                    value={claimForm.name}
                    onChange={handleFormChange}
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={claimForm.email}
                    onChange={handleFormChange}
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    value={claimForm.phone}
                    onChange={handleFormChange}
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Order Number"
                    name="orderNumber"
                    value={claimForm.orderNumber}
                    onChange={handleFormChange}
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Purchase Date"
                    name="purchaseDate"
                    type="date"
                    value={claimForm.purchaseDate}
                    onChange={handleFormChange}
                    margin="normal"
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    select
                    label="Warranty Type"
                    name="warrantyType"
                    value={claimForm.warrantyType}
                    onChange={handleFormChange}
                    margin="normal"
                  >
                    {warrantyTypes.map((option) => (
                      <MenuItem key={option.title} value={option.title}>
                        {option.title}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    multiline
                    rows={4}
                    label="Description of Issue"
                    name="description"
                    value={claimForm.description}
                    onChange={handleFormChange}
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    select
                    label="Do you have photos or documentation of the issue?"
                    name="hasDocumentation"
                    value={claimForm.hasDocumentation}
                    onChange={handleFormChange}
                    margin="normal"
                  >
                    <MenuItem value="yes">Yes, I have photos/documentation</MenuItem>
                    <MenuItem value="no">No, I don't have documentation yet</MenuItem>
                  </TextField>
                </Grid>
              </Grid>
              
              <Box sx={{ mt: 3 }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Submit Claim
                </Button>
              </Box>
            </Box>
            
            {activeStep > 0 && (
              <Box sx={{ textAlign: 'center', py: 4 }}>
                <Typography variant="h6" gutterBottom color="primary">
                  Thank you for submitting your warranty claim!
                </Typography>
                <Typography variant="body1" paragraph>
                  Your claim has been received and is being processed. Our warranty team will review your information and 
                  contact you within 2-3 business days regarding the next steps.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Claim Reference: WC-{Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}
                </Typography>
              </Box>
            )}
          </Grid>
        </Grid>
      </Paper>

      <Typography variant="h4" component="h2" sx={{ mb: 4, fontWeight: 600 }}>
        Frequently Asked Questions
      </Typography>
      
      {faqs.map((faq, index) => (
        <Accordion key={index} sx={{ mb: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`faq-${index}-content`}
            id={`faq-${index}-header`}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}

      <Divider sx={{ my: 6 }} />

      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h5" gutterBottom>
          Need Help with Warranty Claims?
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, maxWidth: 800, mx: 'auto' }}>
          Our customer service team is here to assist you with any warranty-related questions. 
          Contact us during business hours or download our complete warranty documentation.
        </Typography>
        <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button 
            variant="contained" 
            color="primary" 
            component={Link}
            href="/contact"
            endIcon={<ArrowForwardIcon />}
          >
            Contact Support
          </Button>
          <Button 
            variant="outlined" 
            startIcon={<DescriptionIcon />}
          >
            Download Warranty Documents
          </Button>
        </Box>
      </Box>
    </Container>
  );
} 