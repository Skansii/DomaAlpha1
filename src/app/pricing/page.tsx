'use client';

import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import MaterialButton from '@/components/MaterialButton';

const pricingPlans = [
  {
    title: 'Basic',
    price: '$99',
    description: 'Perfect for small projects and simple kitchen designs',
    features: [
      { included: true, text: 'Basic kitchen design' },
      { included: true, text: '1 design revision' },
      { included: true, text: 'Standard materials catalog' },
      { included: false, text: 'Custom cabinet options' },
      { included: false, text: '3D visualization' },
      { included: false, text: 'Installation support' },
    ],
    buttonText: 'Get Started',
    buttonVariant: 'outlined',
  },
  {
    title: 'Professional',
    price: '$249',
    description: 'Ideal for complete kitchen remodeling projects',
    features: [
      { included: true, text: 'Advanced kitchen design' },
      { included: true, text: '3 design revisions' },
      { included: true, text: 'Premium materials catalog' },
      { included: true, text: 'Custom cabinet options' },
      { included: true, text: '3D visualization' },
      { included: false, text: 'Installation support' },
    ],
    buttonText: 'Get Started',
    buttonVariant: 'contained',
    mostPopular: true,
  },
  {
    title: 'Premium',
    price: '$499',
    description: 'Full-service solution for luxury kitchen designs',
    features: [
      { included: true, text: 'Expert kitchen design' },
      { included: true, text: 'Unlimited design revisions' },
      { included: true, text: 'Luxury materials catalog' },
      { included: true, text: 'Custom cabinet options' },
      { included: true, text: '3D visualization' },
      { included: true, text: 'Installation support' },
    ],
    buttonText: 'Get Started',
    buttonVariant: 'outlined',
  },
];

export default function Pricing() {
  const theme = useTheme();
  
  return (
    <Box sx={{ py: 12 }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            component="h1"
            variant="h2"
            fontWeight={700}
            sx={{ mb: 3 }}
          >
            Simple, Transparent Pricing
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: 800, mx: 'auto' }}
          >
            Choose the perfect plan for your kitchen design needs.
            All plans include access to our design consultants.
          </Typography>
        </Box>

        {/* Pricing Plans */}
        <Grid container spacing={4} justifyContent="center">
          {pricingPlans.map((plan, index) => (
            <Grid
              item
              key={plan.title}
              xs={12}
              sm={6}
              md={4}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'visible',
                  borderRadius: 4,
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  boxShadow: plan.mostPopular 
                    ? `0 12px 24px rgba(0,0,0,0.1)` 
                    : `0 6px 12px rgba(0,0,0,0.05)`,
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 16px 32px rgba(0,0,0,0.12)`,
                  },
                  ...(plan.mostPopular && {
                    border: `2px solid ${theme.palette.primary.main}`,
                  }),
                }}
              >
                {plan.mostPopular && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -12,
                      right: 0,
                      left: 0,
                      mx: 'auto',
                      width: 'fit-content',
                      py: 0.5,
                      px: 2,
                      bgcolor: 'primary.main',
                      color: 'primary.contrastText',
                      borderRadius: 4,
                      fontSize: '0.75rem',
                      fontWeight: 'bold',
                      textTransform: 'uppercase',
                      zIndex: 1,
                    }}
                  >
                    Most Popular
                  </Box>
                )}
                <CardHeader
                  title={plan.title}
                  titleTypographyProps={{ align: 'center', variant: 'h4', fontWeight: 700 }}
                  sx={{ bgcolor: 'background.default', pt: 4, pb: 2 }}
                />
                <CardContent sx={{ flexGrow: 1, px: 3, pb: 4 }}>
                  <Box sx={{ textAlign: 'center', mb: 4 }}>
                    <Typography variant="h3" fontWeight={700} color="primary.main">
                      {plan.price}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                      one-time payment
                    </Typography>
                    <Typography variant="body2" sx={{ my: 2, color: 'text.secondary', minHeight: 42 }}>
                      {plan.description}
                    </Typography>
                  </Box>
                  <Divider sx={{ mb: 3 }} />
                  <List sx={{ mb: 4 }}>
                    {plan.features.map((feature, featureIndex) => (
                      <ListItem key={featureIndex} disablePadding sx={{ py: 1 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          {feature.included ? (
                            <CheckIcon sx={{ color: 'success.main' }} />
                          ) : (
                            <CloseIcon sx={{ color: 'text.disabled' }} />
                          )}
                        </ListItemIcon>
                        <ListItemText
                          primary={feature.text}
                          primaryTypographyProps={{
                            variant: 'body2',
                            fontWeight: feature.included ? 500 : 400,
                            color: feature.included ? 'text.primary' : 'text.disabled',
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                  <Box sx={{ textAlign: 'center', mt: 'auto' }}>
                    <MaterialButton
                      fullWidth
                      variant={plan.buttonVariant as any}
                      color="primary"
                      href="/signup"
                      size="large"
                    >
                      {plan.buttonText}
                    </MaterialButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        
        {/* FAQ Section */}
        <Box sx={{ mt: 16, textAlign: 'center' }}>
          <Typography variant="h3" fontWeight={700} gutterBottom>
            Frequently Asked Questions
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 6 }}>
            Have other questions? Contact our customer support team.
          </Typography>
          
          <Grid container spacing={4} sx={{ textAlign: 'left' }}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                How does the design process work?
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                After you select a plan, our designers will schedule a consultation to understand your needs. 
                We'll create initial designs based on your requirements and then refine them based on your feedback.
              </Typography>
              
              <Typography variant="h6" fontWeight={600} gutterBottom>
                What's included in the materials catalog?
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Our materials catalog includes a selection of countertops, cabinets, hardware, and finishes.
                Higher-tier plans include premium and luxury options from top brands.
              </Typography>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                How long does the design process take?
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Basic designs are typically completed within 1 week. Professional designs take 2-3 weeks,
                and Premium designs can take 3-4 weeks depending on complexity and revision needs.
              </Typography>
              
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Can I upgrade my plan later?
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Yes, you can upgrade to a higher tier plan at any time. You'll only need to pay the difference
                between your current plan and the new plan you choose.
              </Typography>
            </Grid>
          </Grid>
          
          <Box sx={{ mt: 6 }}>
            <MaterialButton variant="contained" color="primary" href="/contact" size="large">
              Contact Us
            </MaterialButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
} 