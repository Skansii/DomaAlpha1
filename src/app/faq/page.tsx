'use client';

import { useState } from 'react';
import { 
  Container, 
  Box, 
  Typography, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails,
  TextField,
  InputAdornment,
  Tabs,
  Tab,
  Breadcrumbs,
  Button,
  Divider,
  Paper
} from '@mui/material';
import Link from 'next/link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SearchIcon from '@mui/icons-material/Search';
import InfoIcon from '@mui/icons-material/Info';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BuildIcon from '@mui/icons-material/Build';
import SettingsIcon from '@mui/icons-material/Settings';
import PaymentIcon from '@mui/icons-material/Payment';
import WarrantyIcon from '@mui/icons-material/VerifiedUser';
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
      id={`faq-tabpanel-${index}`}
      aria-labelledby={`faq-tab-${index}`}
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
    id: `faq-tab-${index}`,
    'aria-controls': `faq-tabpanel-${index}`,
  };
}

// FAQ data by category
const faqCategories = [
  {
    id: 'general',
    title: 'General Information',
    icon: <InfoIcon color="primary" />,
    questions: [
      {
        question: 'What is DOMA Design?',
        answer: 'DOMA Design is a premium manufacturer and provider of custom kitchen and cabinet solutions for residential and commercial spaces. We specialize in high-quality, customizable cabinetry, combining innovative design, superior craftsmanship, and smart functionality to create beautiful and functional spaces.'
      },
      {
        question: 'Where are DOMA Design products manufactured?',
        answer: 'DOMA Design products are manufactured in our state-of-the-art facilities in Portland, Oregon and Chicago, Illinois. We source our materials from sustainable suppliers primarily in North America and Europe to ensure the highest quality while maintaining environmental responsibility.'
      },
      {
        question: 'How can I view DOMA Design products in person?',
        answer: 'You can view our products at our showrooms located in major cities across the United States, including New York, Los Angeles, Chicago, and Miami. We also have authorized dealer partners in many other locations. Visit our Contact page to find the showroom nearest to you. Additionally, we offer virtual showroom tours for those unable to visit in person.'
      },
      {
        question: 'Do you ship internationally?',
        answer: 'Currently, DOMA Design ships throughout the United States and Canada. For international inquiries, please contact our customer service team directly to discuss available options for your specific location.'
      },
      {
        question: 'How do I get a quote for my project?',
        answer: 'You can request a quote by filling out the quote request form on our website, by emailing info@domadesign.com, or by calling our customer service at 1-800-555-1234. To provide you with the most accurate quote, we\'ll need details about your project, including measurements, desired materials, and any specific requirements.'
      }
    ]
  },
  {
    id: 'products',
    title: 'Products & Materials',
    icon: <BuildIcon color="primary" />,
    questions: [
      {
        question: 'What types of cabinets do you offer?',
        answer: 'DOMA Design offers a wide range of cabinet styles, including base cabinets, wall cabinets, tall cabinets, specialty storage cabinets, and custom solutions. We provide various door styles from traditional to contemporary, with options for framed and frameless construction depending on your design preferences.'
      },
      {
        question: 'What materials are used for your cabinets?',
        answer: 'Our cabinets are crafted using premium materials, including solid hardwoods (maple, oak, cherry, walnut), engineered wood with real wood veneers, and high-quality laminates. For specialized applications, we also offer metal, glass, and eco-friendly composite materials. All materials are carefully selected for durability, beauty, and sustainability.'
      },
      {
        question: 'Can I customize the size and finish of my cabinets?',
        answer: 'Yes, DOMA Design specializes in customization. While we have standard cabinet sizes, we can accommodate custom dimensions to fit your space perfectly. We offer a wide range of finishes, colors, and door styles, and can even create custom colors to match your design vision. Speak with one of our designers to explore all customization possibilities.'
      },
      {
        question: 'Are your products environmentally friendly?',
        answer: 'Yes, sustainability is core to our values. We use responsibly sourced wood products, many with FSC certification. Our manufacturing processes minimize waste, and we use water-based, low-VOC finishes that are better for indoor air quality. Our cabinets are designed for longevity, which is the most sustainable approach to home furnishings. We also offer a specific line of eco-friendly cabinets made with recycled and rapidly renewable materials.'
      },
      {
        question: 'What hardware options do you offer?',
        answer: 'We offer a comprehensive selection of premium hardware from leading manufacturers including Blum, Häfele, and Richelieu. Options include soft-close hinges, full-extension drawer slides, pull-out systems, lift mechanisms, and decorative pulls and knobs in various styles and finishes. Our designers can help you select hardware that complements your cabinet style and enhances functionality.'
      }
    ]
  },
  {
    id: 'ordering',
    title: 'Ordering & Delivery',
    icon: <LocalShippingIcon color="primary" />,
    questions: [
      {
        question: 'What is the ordering process like?',
        answer: 'The DOMA Design ordering process involves: 1) Initial consultation and design planning, 2) Detailed measurements and design finalization, 3) Quote approval and deposit payment, 4) Order confirmation and production scheduling, 5) Manufacturing (typically 6-8 weeks), 6) Delivery coordination, and 7) Installation (if requested). Our team guides you through each step to ensure a smooth experience.'
      },
      {
        question: 'How long does it take to receive my order?',
        answer: 'Standard production time for DOMA Design cabinetry is 6-8 weeks from order confirmation. Custom or complex orders may require additional time. After production, shipping typically takes 1-2 weeks depending on your location. During the ordering process, we\'ll provide you with a more specific timeline based on your project\'s requirements and our current production schedule.'
      },
      {
        question: 'Do you offer expedited production?',
        answer: 'Yes, we do offer expedited production for an additional fee in certain situations, subject to our current production capacity. Expedited orders can typically reduce the production time by 2-3 weeks. Please discuss expedited options with your designer or customer service representative if you have specific timeline requirements.'
      },
      {
        question: 'How are deliveries handled?',
        answer: 'DOMA Design cabinets are carefully packaged and delivered by our specialized delivery team or trusted shipping partners, depending on your location. For local deliveries, our team will coordinate a specific delivery date and time window. For shipments to other regions, we work with white-glove delivery services that provide careful handling and basic placement of the cabinets in your home or job site.'
      },
      {
        question: 'What is your return policy?',
        answer: 'Custom cabinetry is manufactured specifically for your project and cannot be returned. Stock items in new, unused condition may be returned within 30 days with original packaging and receipt, subject to a restocking fee. Damaged products should be reported within 48 hours of delivery. Please review our full return policy document for detailed information.'
      }
    ]
  },
  {
    id: 'installation',
    title: 'Installation & Maintenance',
    icon: <SettingsIcon color="primary" />,
    questions: [
      {
        question: 'Do you offer installation services?',
        answer: 'Yes, DOMA Design offers professional installation services in select areas. Our certified installation teams are experienced in handling our products and will ensure proper assembly and placement. If we don\'t have installation services in your area, we can recommend trusted local contractors who are familiar with our products.'
      },
      {
        question: 'Can I install the cabinets myself?',
        answer: 'While DIY installation is possible for those with intermediate to advanced carpentry skills, we generally recommend professional installation to ensure the best results and to maintain warranty coverage. If you choose to install yourself, we provide detailed installation instructions and our customer support team is available to answer questions. Keep in mind that proper installation is crucial for the longevity and functionality of your cabinets.'
      },
      {
        question: 'How do I care for and maintain my cabinets?',
        answer: 'For daily cleaning, use a soft, damp cloth and mild soap if needed. Avoid harsh chemicals, abrasive cleaners, and scouring pads. Wipe up spills immediately to prevent damage. Periodically check and tighten hardware, and adjust hinges if doors become misaligned. For wooden cabinets, maintain consistent indoor humidity levels to prevent warping or cracking. We provide a detailed care guide with every purchase.'
      },
      {
        question: 'What should I do if my cabinets are damaged during delivery?',
        answer: 'If you notice any damage during delivery, note it on the delivery receipt before signing. For any damage discovered after delivery, take photos and contact our customer service within 48 hours. We'll work with you to assess the damage and determine the best resolution, whether that's replacement parts, repair, or other appropriate solutions.'
      },
      {
        question: 'Are spare parts available for purchase?',
        answer: 'Yes, DOMA Design provides spare parts for all our cabinet lines for at least 5 years after purchase. These include hinges, drawer slides, shelf pins, door and drawer fronts, and other components. Contact our customer service with your original order information to order replacement parts.'
      }
    ]
  },
  {
    id: 'payment',
    title: 'Payment & Financing',
    icon: <PaymentIcon color="primary" />,
    questions: [
      {
        question: 'What payment methods do you accept?',
        answer: 'DOMA Design accepts major credit cards (Visa, MasterCard, American Express, Discover), bank transfers, and personal checks (subject to clearance before production begins). For large projects, we also accept wire transfers. Payment in full is required for orders under $5,000. For larger orders, we offer a payment schedule with a deposit, mid-project payment, and final payment.'
      },
      {
        question: 'Do you require a deposit?',
        answer: 'Yes, all custom orders require a 50% deposit to begin production. The remaining balance is due before shipping or upon delivery. For especially large or complex projects, we may establish a different payment schedule that will be outlined in your contract.'
      },
      {
        question: 'Do you offer financing options?',
        answer: 'Yes, DOMA Design offers several financing options to help make your project more affordable. We partner with reputable financial institutions to provide competitive rates and flexible payment plans. Options include no-interest plans for qualified customers (6-18 months), traditional financing with extended terms (up to 84 months), and home equity loan coordination. Contact our sales team for current financing promotions.'
      },
      {
        question: 'Are taxes included in your pricing?',
        answer: 'No, applicable sales taxes are not included in our quoted prices and will be added to the final invoice based on your delivery location. If you have a valid tax exemption certificate, please provide it to your designer or customer service representative before finalizing your order.'
      },
      {
        question: 'What happens if I need to cancel my order?',
        answer: 'Order cancellation policies depend on the stage of your order. Cancellations made before production begins are subject to a design and administrative fee, typically 10% of the order total. Once production has started, cancellation fees increase significantly, as materials have been ordered and work has begun. Orders cannot be cancelled once production is complete. All cancellation requests must be submitted in writing.'
      }
    ]
  },
  {
    id: 'warranty',
    title: 'Warranty & Support',
    icon: <WarrantyIcon color="primary" />,
    questions: [
      {
        question: 'What warranty do you offer on your cabinets?',
        answer: 'DOMA Design cabinets come with a limited lifetime warranty for residential use, covering defects in material and workmanship under normal use. Hardware components such as hinges and drawer slides carry a 10-year warranty. For commercial installations, we offer a 10-year warranty on cabinets and a 5-year warranty on hardware. Detailed warranty information is provided with your purchase and available on our website.'
      },
      {
        question: 'What is not covered by the warranty?',
        answer: 'Our warranty does not cover damage resulting from improper installation, misuse, abuse, neglect, or exposure to extreme temperature or humidity conditions. Normal wear and tear, color changes due to aging or exposure to light, and slight variations in wood grain or color are also not covered. Additionally, modifications made by unauthorized personnel will void the warranty.'
      },
      {
        question: 'How do I make a warranty claim?',
        answer: 'To make a warranty claim, contact our customer service department with your original order information, a description of the issue, and photos documenting the problem. Our team will review your claim and guide you through the next steps, which may include an in-person inspection, repair, or replacement as deemed appropriate by DOMA Design.'
      },
      {
        question: 'Do you offer extended warranty options?',
        answer: 'For commercial projects or high-traffic residential installations, we do offer extended warranty packages for an additional fee. These plans can extend coverage periods and may include additional services such as annual inspections and maintenance. Contact our sales team for information about extended warranty options for your specific project.'
      },
      {
        question: 'How can I contact customer support?',
        answer: 'Our customer support team is available Monday through Friday, 8:00 AM to 6:00 PM EST. You can reach us by phone at 1-800-555-1234, by email at support@domadesign.com, or through the contact form on our website. For urgent after-hours issues, we offer emergency support via our customer portal or after-hours phone line for existing customers.'
      }
    ]
  }
];

export default function FAQPage() {
  const [value, setValue] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Filter questions based on search term
  const allQuestions = faqCategories.flatMap(category => 
    category.questions.map(q => ({
      ...q,
      category: category.title
    }))
  );
  
  const filteredQuestions = searchTerm.trim() === '' 
    ? [] 
    : allQuestions.filter(q => 
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
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
          <Typography color="text.primary">FAQ</Typography>
        </Breadcrumbs>
      </Box>

      <Typography variant="h3" component="h1" sx={{ mb: 2, fontWeight: 600 }}>
        Frequently Asked Questions
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 6, maxWidth: 800 }}>
        Find answers to commonly asked questions about DOMA Design products, services, 
        ordering process, and more. Can't find what you're looking for? Contact our support team.
      </Typography>

      <Box sx={{ bgcolor: 'background.paper', borderRadius: 2, p: 4, mb: 6 }}>
        <TextField
          fullWidth
          placeholder="Search questions and answers..."
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
              Search Results {filteredQuestions.length > 0 && `(${filteredQuestions.length})`}
            </Typography>
            {filteredQuestions.length === 0 ? (
              <Box sx={{ textAlign: 'center', py: 4 }}>
                <Typography variant="body1" color="text.secondary">
                  No questions found matching "{searchTerm}".
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
              <Box>
                {filteredQuestions.map((faq, index) => (
                  <Accordion key={index} sx={{ mb: 2 }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={`search-result-content-${index}`}
                      id={`search-result-header-${index}`}
                    >
                      <Box>
                        <Typography variant="subtitle1" fontWeight={500}>
                          {faq.question}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Category: {faq.category}
                        </Typography>
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="body1" paragraph>
                        {faq.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>
            )}
          </Box>
        )}
      </Box>

      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs 
            value={value} 
            onChange={handleTabChange} 
            aria-label="faq categories"
            variant="scrollable"
            scrollButtons="auto"
          >
            {faqCategories.map((category, index) => (
              <Tab 
                key={category.id} 
                label={category.title} 
                icon={category.icon} 
                iconPosition="start"
                {...a11yProps(index)} 
              />
            ))}
          </Tabs>
        </Box>

        {faqCategories.map((category, index) => (
          <TabPanel key={category.id} value={value} index={index}>
            <Typography variant="h4" component="h2" gutterBottom>
              {category.title}
            </Typography>
            <Box sx={{ mt: 4 }}>
              {category.questions.map((faq, faqIndex) => (
                <Accordion key={faqIndex} sx={{ mb: 2 }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`faq-content-${index}-${faqIndex}`}
                    id={`faq-header-${index}-${faqIndex}`}
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
          </TabPanel>
        ))}
      </Box>

      <Divider sx={{ my: 8 }} />

      <Paper sx={{ p: 4, bgcolor: 'background.paper', textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Still Have Questions?
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, maxWidth: 800, mx: 'auto' }}>
          If you couldn't find the answer you were looking for, our support team is ready to assist you. 
          Reach out through any of the channels below.
        </Typography>
        <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button 
            variant="contained" 
            color="primary" 
            component={Link}
            href="/support"
            endIcon={<ArrowForwardIcon />}
          >
            Visit Support Center
          </Button>
          <Button 
            variant="outlined" 
            component={Link}
            href="/contact"
            endIcon={<ArrowForwardIcon />}
          >
            Contact Us
          </Button>
          <Button 
            variant="outlined" 
            component="a"
            href="tel:+18005551234"
          >
            Call 1-800-555-1234
          </Button>
        </Box>
      </Paper>
    </Container>
  );
} 