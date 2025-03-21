'use client';

import { useState } from 'react';
import { 
  Box, 
  Grid, 
  Typography, 
  Paper, 
  Card, 
  CardContent, 
  Chip,
  Stack,
  IconButton,
  InputBase,
  Stepper,
  Step,
  StepLabel,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Divider,
  Button
} from '@mui/material';
import Image from 'next/image';

// Icons
import SearchIcon from '@mui/icons-material/Search';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DescriptionIcon from '@mui/icons-material/Description';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EuroIcon from '@mui/icons-material/Euro';
import ForumIcon from '@mui/icons-material/Forum';

export default function MainContent() {
  // Mock project status (1-based index for active step)
  const [activeStep, setActiveStep] = useState(2);
  
  // Project status steps
  const steps = [
    'Order Placed',
    'In Production',
    'Delivery Scheduled',
    'Installed & Completed'
  ];

  return (
    <Box sx={{ py: 3 }}>
      {/* Header Section */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        mb: 4,
        flexDirection: { xs: 'column', sm: 'row' },
        gap: { xs: 2, sm: 0 }
      }}>
        <Typography variant="h4" component="h1" fontWeight="600">
          Kitchen Project Dashboard
        </Typography>
        
        <Box sx={{ 
          display: 'flex', 
          gap: 2,
          width: { xs: '100%', sm: 'auto' }
        }}>
          {/* Search Bar */}
          <Paper
            component="form"
            sx={{ 
              p: '2px 4px', 
              display: 'flex', 
              alignItems: 'center', 
              maxWidth: 400,
              width: '100%',
              borderRadius: '8px'
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search projects, files, offers"
              inputProps={{ 'aria-label': 'search dashboard' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
          
          {/* Create New Project Button */}
          <Button
            variant="contained"
            startIcon={<AddCircleOutlineIcon />}
            sx={{ 
              borderRadius: '8px',
              whiteSpace: 'nowrap'
            }}
          >
            New Project
          </Button>
        </Box>
      </Box>
      
      {/* Project Summary Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {/* Active Projects Card */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" color="text.secondary" gutterBottom>
                Active Kitchen Projects
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <Typography variant="h3" fontWeight="700">
                  2
                </Typography>
                <Chip 
                  label="One in progress" 
                  color="primary" 
                  size="small" 
                  sx={{ height: 24 }}
                />
              </Box>
              <Box sx={{ 
                mt: 2, 
                display: 'flex', 
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <Typography variant="body2" color="text.secondary">
                  Latest Project: Modern Kitchen Remodel
                </Typography>
                <Chip 
                  label="In Production" 
                  size="small" 
                  sx={{ 
                    height: 24, 
                    bgcolor: 'rgba(33, 150, 243, 0.1)', 
                    color: 'info.main'
                  }}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        
        {/* Balance & Costs Card */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" color="text.secondary" gutterBottom>
                Balance & Costs
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                  <EuroIcon sx={{ mr: 1, mb: 0.5 }} />
                  <Typography variant="h3" fontWeight="700">
                    12,450
                  </Typography>
                </Box>
                <Chip 
                  label="Offer pending" 
                  color="warning" 
                  size="small" 
                  sx={{ height: 24 }}
                />
              </Box>
              <Box sx={{ 
                mt: 2, 
                display: 'flex', 
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <Typography variant="body2" color="text.secondary">
                  Estimated remaining: €3,500
                </Typography>
                <Button size="small" variant="outlined">
                  View Details
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      
      {/* Current Project Status */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Current Project Status
        </Typography>
        <Box sx={{ mt: 3, mb: 2 }}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        <Box sx={{ 
          mt: 3, 
          p: 2, 
          bgcolor: 'rgba(33, 150, 243, 0.05)', 
          borderRadius: 2
        }}>
          <Typography variant="body2">
            Your kitchen cabinets are currently being manufactured. Estimated completion date: May 15, 2023.
          </Typography>
        </Box>
      </Paper>
      
      {/* Recent Activities */}
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Recent Activities
        </Typography>
        <List>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: 'primary.light' }}>
                <DescriptionIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Floor plan uploaded"
              secondary={
                <>
                  <Typography component="span" variant="body2" color="text.primary">
                    Kitchen_FloorPlan_Final.pdf
                  </Typography>
                  {" — Your floor plan has been received and is being reviewed by our design team."}
                </>
              }
            />
            <Chip 
              label="Today, 11:23 AM" 
              size="small" 
              variant="outlined" 
              sx={{ height: 24 }}
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: 'info.light' }}>
                <NotificationsIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Project status updated"
              secondary={
                <>
                  <Typography component="span" variant="body2" color="text.primary">
                    Status changed: 
                  </Typography>
                  {" Order Placed → In Production"}
                </>
              }
            />
            <Chip 
              label="Yesterday, 2:45 PM" 
              size="small" 
              variant="outlined" 
              sx={{ height: 24 }}
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: 'success.light' }}>
                <ForumIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Message from Support"
              secondary={
                <>
                  <Typography component="span" variant="body2" color="text.primary">
                    Sarah from DOMA Design:
                  </Typography>
                  {" We've updated your kitchen design with the requested changes. Please check the new renders in the 3D Renderings section."}
                </>
              }
            />
            <Chip 
              label="2 days ago" 
              size="small" 
              variant="outlined" 
              sx={{ height: 24 }}
            />
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
} 