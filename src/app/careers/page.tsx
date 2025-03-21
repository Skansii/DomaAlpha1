'use client';

import { 
  Container, 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Button, 
  Divider, 
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Breadcrumbs
} from '@mui/material';
import Link from 'next/link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import Image from 'next/image';

const jobs = [
  {
    id: 'senior-designer',
    title: 'Senior Kitchen Designer',
    department: 'Design',
    location: 'San Francisco, CA (Hybrid)',
    type: 'Full-time',
    description: 'Lead kitchen design projects from concept to completion, collaborate with clients and contractors, and create detailed 3D renderings and technical drawings.',
    requirements: [
      'Bachelor\'s degree in Interior Design, Architecture, or related field',
      'Minimum 5 years of kitchen design experience',
      '3D design software proficiency (preferably in AutoCAD and SketchUp)',
      'Strong portfolio demonstrating kitchen and cabinet design expertise',
      'Excellent communication and project management skills'
    ]
  },
  {
    id: 'manufacturing-specialist',
    title: 'Cabinet Manufacturing Specialist',
    department: 'Production',
    location: 'Portland, OR',
    type: 'Full-time',
    description: 'Oversee the production of custom cabinets, ensure quality control, and implement efficient manufacturing processes.',
    requirements: [
      'Experience in woodworking or cabinet manufacturing',
      'Knowledge of cabinet hardware and assembly techniques',
      'Familiarity with CNC machinery operation',
      'Strong attention to detail and quality control',
      'Ability to read and interpret technical drawings'
    ]
  },
  {
    id: 'sales-consultant',
    title: 'Kitchen Sales Consultant',
    department: 'Sales',
    location: 'Remote (U.S.)',
    type: 'Full-time',
    description: 'Guide customers through the selection and purchasing process, create quotes, and collaborate with designers to deliver exceptional customer solutions.',
    requirements: [
      'Previous sales experience, preferably in home improvement or design',
      'Strong knowledge of kitchen products and design principles',
      'Excellent customer service and communication skills',
      'Ability to understand customer needs and recommend appropriate solutions',
      'Goal-oriented with proven sales achievement'
    ]
  },
  {
    id: 'ux-designer',
    title: 'UX/UI Designer',
    department: 'Digital',
    location: 'Los Angeles, CA (Hybrid)',
    type: 'Full-time',
    description: 'Design and improve the user experience for our digital kitchen design tools, customer portal, and e-commerce platforms.',
    requirements: [
      'Bachelor's degree in Design, HCI, or related field',
      'Portfolio demonstrating user-centered design approach',
      'Experience with design tools (Figma, Adobe XD)',
      'Understanding of user research and testing methodologies',
      'Excellent visual design skills with attention to detail'
    ]
  }
];

const benefits = [
  'Competitive salary and performance bonuses',
  'Comprehensive health, dental, and vision insurance',
  'Retirement plan with company matching',
  'Generous paid time off and holidays',
  'Professional development opportunities',
  'Employee discount on DOMA products',
  'Flexible work arrangements where possible',
  'Collaborative and innovative work environment'
];

export default function CareersPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ mb: 4 }}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          <Link href="/" passHref>
            <Typography color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
              Home
            </Typography>
          </Link>
          <Typography color="text.primary">Careers</Typography>
        </Breadcrumbs>
      </Box>

      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography variant="h3" component="h1" sx={{ mb: 2, fontWeight: 600 }}>
          Join Our Team
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
          Be part of a dynamic team that's revolutionizing kitchen and cabinet design. 
          We're looking for passionate professionals to help us build the future of home spaces.
        </Typography>
      </Box>

      <Grid container spacing={6} sx={{ mb: 10 }}>
        <Grid item xs={12} md={6}>
          <Box sx={{ position: 'relative', height: { xs: 300, md: 400 }, width: '100%' }}>
            <Image
              src="/images/team-collaboration.jpg"
              alt="DOMA Design team collaborating"
              fill
              style={{ objectFit: 'cover', borderRadius: '8px' }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h2" gutterBottom>
            Our Culture
          </Typography>
          <Typography variant="body1" paragraph>
            At DOMA Design, we believe in creating beautiful, functional spaces and a workplace 
            that embodies these same qualities. Our collaborative environment encourages innovation, 
            creativity, and personal growth.
          </Typography>
          <Typography variant="body1" paragraph>
            We're a team of designers, craftspeople, technologists, and customer advocates united 
            by our passion for exceptional kitchen and cabinet design. We value diverse perspectives 
            and believe that the best solutions come from collaborative teamwork.
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" gutterBottom>
              What We Value
            </Typography>
            <List>
              {['Innovation', 'Quality', 'Collaboration', 'Customer Focus', 'Sustainability'].map((value) => (
                <ListItem key={value} disableGutters sx={{ py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={value} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
      </Grid>

      <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4 }}>
        Current Openings
      </Typography>

      <Grid container spacing={3} sx={{ mb: 8 }}>
        {jobs.map((job) => (
          <Grid item xs={12} key={job.id}>
            <Card variant="outlined" sx={{ '&:hover': { boxShadow: 3 }, transition: 'box-shadow 0.3s' }}>
              <CardContent>
                <Grid container alignItems="flex-start">
                  <Grid item xs={12} md={8}>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {job.title}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, mb: 2, flexWrap: 'wrap' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <WorkIcon fontSize="small" sx={{ mr: 0.5, color: 'text.secondary' }} />
                        <Typography variant="body2" color="text.secondary">
                          {job.department}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <LocationOnIcon fontSize="small" sx={{ mr: 0.5, color: 'text.secondary' }} />
                        <Typography variant="body2" color="text.secondary">
                          {job.location}
                        </Typography>
                      </Box>
                      <Chip size="small" label={job.type} />
                    </Box>
                    <Typography variant="body1" paragraph>
                      {job.description}
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                      Requirements:
                    </Typography>
                    <List dense>
                      {job.requirements.map((req, index) => (
                        <ListItem key={index} disableGutters>
                          <ListItemIcon sx={{ minWidth: 28 }}>
                            <CheckCircleOutlineIcon fontSize="small" color="primary" />
                          </ListItemIcon>
                          <ListItemText primary={req} />
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                  <Grid item xs={12} md={4} sx={{ 
                    display: 'flex', 
                    justifyContent: { xs: 'flex-start', md: 'flex-end' },
                    alignItems: 'center',
                    mt: { xs: 2, md: 0 }
                  }}>
                    <Button 
                      variant="contained" 
                      color="primary" 
                      endIcon={<ArrowForwardIcon />}
                      sx={{ minWidth: 150 }}
                    >
                      Apply Now
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mb: 10 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Benefits & Perks
        </Typography>
        <Typography variant="body1" paragraph>
          We offer a competitive benefits package designed to support your wellbeing, growth, and work-life balance.
        </Typography>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card variant="outlined" sx={{ height: '100%' }}>
                <CardContent>
                  <CheckCircleOutlineIcon color="primary" sx={{ mb: 1 }} />
                  <Typography variant="body1">
                    {benefit}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Divider sx={{ my: 6 }} />

      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Don't see the right position?
        </Typography>
        <Typography variant="body1" paragraph>
          We're always interested in connecting with talented individuals. 
          Send us your resume for future opportunities.
        </Typography>
        <Button 
          variant="outlined" 
          color="primary" 
          endIcon={<ArrowForwardIcon />}
          component={Link}
          href="/contact"
          sx={{ mt: 2 }}
        >
          Contact Us
        </Button>
      </Box>
    </Container>
  );
} 