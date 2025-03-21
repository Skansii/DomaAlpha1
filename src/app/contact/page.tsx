'use client';

import React, { useState } from 'react';
import { 
  Container, 
  Box, 
  Typography, 
  Grid, 
  TextField, 
  Button, 
  MenuItem, 
  Paper,
  Snackbar,
  Alert,
  Breadcrumbs,
  Divider,
  Card,
  CardContent,
  Stack
} from '@mui/material';
import Link from 'next/link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';

// Define inquiry types
const inquiryTypes = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'sales', label: 'Sales & Pricing' },
  { value: 'support', label: 'Technical Support' },
  { value: 'design', label: 'Design Consultation' },
  { value: 'installation', label: 'Installation Services' },
  { value: 'career', label: 'Career Opportunities' },
  { value: 'press', label: 'Press & Media' },
];

// Define office locations
const officeLocations = [
  {
    name: 'Portland Headquarters',
    address: '123 Design Street, Portland, OR 97204',
    phone: '+1 (503) 555-1234',
    email: 'portland@domadesign.com',
    hours: 'Mon-Fri: 9AM-5PM PST',
  },
  {
    name: 'New York Showroom',
    address: '456 Kitchen Avenue, New York, NY 10001',
    phone: '+1 (212) 555-5678',
    email: 'newyork@domadesign.com',
    hours: 'Mon-Sat: 10AM-7PM EST',
  },
  {
    name: 'Chicago Design Center',
    address: '789 Cabinet Boulevard, Chicago, IL 60607',
    phone: '+1 (312) 555-9012',
    email: 'chicago@domadesign.com',
    hours: 'Mon-Fri: 9AM-6PM CST',
  }
];

export default function ContactPage() {
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: '',
  });

  // Form validation state
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    inquiryType: false,
    message: false,
  });

  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error for this field if it was previously marked as error
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: false,
      });
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {
      firstName: !formData.firstName,
      lastName: !formData.lastName,
      email: !formData.email || !/^\S+@\S+\.\S+$/.test(formData.email),
      inquiryType: !formData.inquiryType,
      message: !formData.message,
    };
    
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call for form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        inquiryType: '',
        message: '',
      });
    }, 1500);
  };

  // Handle success message close
  const handleSuccessClose = () => {
    setSubmitSuccess(false);
  };

  // Handle error message close
  const handleErrorClose = () => {
    setSubmitError(false);
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
          <Typography color="text.primary">Contact</Typography>
        </Breadcrumbs>
      </Box>

      <Typography variant="h3" component="h1" sx={{ mb: 2, fontWeight: 600 }}>
        Contact Us
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 6, maxWidth: 800 }}>
        We're here to help with your kitchen and cabinet needs. Reach out to our team for support, 
        sales inquiries, or to schedule a consultation.
      </Typography>

      <Grid container spacing={5}>
        <Grid item xs={12} md={7}>
          <Paper elevation={2} sx={{ p: { xs: 3, md: 5 }, borderRadius: 2 }}>
            <Typography variant="h5" component="h2" sx={{ mb: 4 }}>
              Get in Touch
            </Typography>
            
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    fullWidth
                    required
                    error={errors.firstName}
                    helperText={errors.firstName ? 'First name is required' : ''}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    fullWidth
                    required
                    error={errors.lastName}
                    helperText={errors.lastName ? 'Last name is required' : ''}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                    required
                    error={errors.email}
                    helperText={errors.email ? 'Valid email is required' : ''}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Phone (optional)"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    select
                    label="Inquiry Type"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    fullWidth
                    required
                    error={errors.inquiryType}
                    helperText={errors.inquiryType ? 'Please select an inquiry type' : ''}
                  >
                    {inquiryTypes.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    multiline
                    rows={5}
                    fullWidth
                    required
                    error={errors.message}
                    helperText={errors.message ? 'Please enter your message' : ''}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    disabled={isSubmitting}
                    endIcon={<SendIcon />}
                    sx={{ mt: 2 }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>

        <Grid item xs={12} md={5}>
          <Box>
            <Typography variant="h5" component="h2" sx={{ mb: 4 }}>
              Our Locations
            </Typography>
            
            <Stack spacing={3}>
              {officeLocations.map((office, index) => (
                <Card key={index} elevation={1} sx={{ borderRadius: 2 }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {office.name}
                    </Typography>
                    
                    <Grid container spacing={2} sx={{ mt: 1 }}>
                      <Grid item xs={12}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                          <LocationOnIcon sx={{ color: 'primary.main', mr: 1, mt: 0.3 }} fontSize="small" />
                          <Typography variant="body2">
                            {office.address}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <PhoneIcon sx={{ color: 'primary.main', mr: 1 }} fontSize="small" />
                          <Typography variant="body2">
                            {office.phone}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <EmailIcon sx={{ color: 'primary.main', mr: 1 }} fontSize="small" />
                          <Typography variant="body2">
                            {office.email}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <AccessTimeIcon sx={{ color: 'primary.main', mr: 1 }} fontSize="small" />
                          <Typography variant="body2">
                            {office.hours}
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              ))}
            </Stack>
            
            <Box sx={{ mt: 5 }}>
              <Typography variant="h6" gutterBottom>
                Customer Support
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                <strong>Email:</strong> support@domadesign.com
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                <strong>Phone:</strong> 1-800-555-1234
              </Typography>
              <Typography variant="body1">
                <strong>Hours:</strong> Monday-Friday, 8AM-8PM EST
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ my: 8 }} />

      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h5" gutterBottom>
          Looking for Something Specific?
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, maxWidth: 800, mx: 'auto' }}>
          Visit our comprehensive support center or view our product catalog to find answers to frequently asked questions.
        </Typography>
        <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button 
            variant="contained" 
            color="primary" 
            component={Link}
            href="/support"
          >
            Visit Support Center
          </Button>
          <Button 
            variant="outlined" 
            component={Link}
            href="/products"
          >
            Browse Products
          </Button>
        </Box>
      </Box>

      {/* Success Snackbar */}
      <Snackbar open={submitSuccess} autoHideDuration={6000} onClose={handleSuccessClose}>
        <Alert onClose={handleSuccessClose} severity="success" sx={{ width: '100%' }}>
          Your message has been sent successfully! We'll be in touch soon.
        </Alert>
      </Snackbar>

      {/* Error Snackbar */}
      <Snackbar open={submitError} autoHideDuration={6000} onClose={handleErrorClose}>
        <Alert onClose={handleErrorClose} severity="error" sx={{ width: '100%' }}>
          There was an error sending your message. Please try again.
        </Alert>
      </Snackbar>
    </Container>
  );
} 