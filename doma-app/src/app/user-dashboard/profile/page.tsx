'use client';

import { useState } from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Tabs, 
  Tab, 
  Grid, 
  TextField, 
  Button, 
  Divider, 
  Switch, 
  FormControlLabel,
  Avatar,
  Stack,
  IconButton,
  Card,
  CardContent,
  Alert
} from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import SaveIcon from '@mui/icons-material/Save';
import SecurityIcon from '@mui/icons-material/Security';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import PaymentIcon from '@mui/icons-material/Payment';

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
      id={`profile-tabpanel-${index}`}
      aria-labelledby={`profile-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default function ProfilePage() {
  const [tabValue, setTabValue] = useState(0);
  const [saved, setSaved] = useState(false);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
    }, 3000);
  };

  return (
    <Box sx={{ py: 3 }}>
      <Typography variant="h4" component="h1" fontWeight="600" sx={{ mb: 4 }}>
        Profile & Settings
      </Typography>
      
      <Paper sx={{ mb: 3 }}>
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange} 
          variant="scrollable"
          scrollButtons="auto"
          sx={{ 
            borderBottom: 1, 
            borderColor: 'divider',
            px: { xs: 1, sm: 2 },
          }}
        >
          <Tab icon={<PersonIcon />} label="Personal Info" iconPosition="start" />
          <Tab icon={<SettingsIcon />} label="Preferences" iconPosition="start" />
          <Tab icon={<NotificationsIcon />} label="Notifications" iconPosition="start" />
          <Tab icon={<SecurityIcon />} label="Security" iconPosition="start" />
          <Tab icon={<PaymentIcon />} label="Billing" iconPosition="start" />
        </Tabs>

        {/* Personal Info Tab */}
        <TabPanel value={tabValue} index={0}>
          <Box sx={{ px: 3 }}>
            {saved && (
              <Alert severity="success" sx={{ mb: 3 }}>
                Profile information saved successfully!
              </Alert>
            )}
            
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Card sx={{ height: '100%' }}>
                  <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                    <Avatar 
                      sx={{ 
                        width: 120, 
                        height: 120,
                        mb: 1
                      }}
                      alt="User Profile"
                      src="/profile-placeholder.jpg"
                    />
                    
                    <Button
                      component="label"
                      variant="outlined"
                      startIcon={<PhotoCamera />}
                      sx={{ mt: 1 }}
                    >
                      Change Photo
                      <input
                        type="file"
                        hidden
                        accept="image/*"
                      />
                    </Button>
                    
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1, textAlign: 'center' }}>
                      Upload a profile picture. JPG, PNG or GIF. Max 5MB.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12} md={8}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="First Name"
                      defaultValue="John"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      defaultValue="Doe"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      defaultValue="john.doe@example.com"
                      variant="outlined"
                      type="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      defaultValue="+1 (555) 123-4567"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Address"
                      defaultValue="123 Main Street"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      label="City"
                      defaultValue="New York"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      label="State"
                      defaultValue="NY"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      label="Zip Code"
                      defaultValue="10001"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
              <Button
                variant="contained"
                startIcon={<SaveIcon />}
                onClick={handleSave}
              >
                Save Changes
              </Button>
            </Box>
          </Box>
        </TabPanel>

        {/* Preferences Tab */}
        <TabPanel value={tabValue} index={1}>
          <Box sx={{ px: 3 }}>
            {saved && (
              <Alert severity="success" sx={{ mb: 3 }}>
                Preferences saved successfully!
              </Alert>
            )}
            
            <Typography variant="h6" sx={{ mb: 3 }}>Display Settings</Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Enable dark mode"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Show project previews in dashboard"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Switch />}
                  label="Compact view for project lists"
                />
              </Grid>
            </Grid>
            
            <Divider sx={{ my: 4 }} />
            
            <Typography variant="h6" sx={{ mb: 3 }}>Communication Preferences</Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Receive order confirmations via email"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Receive shipping confirmations via email"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Receive SMS notifications for important updates"
                />
              </Grid>
            </Grid>
            
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
              <Button
                variant="contained"
                startIcon={<SaveIcon />}
                onClick={handleSave}
              >
                Save Changes
              </Button>
            </Box>
          </Box>
        </TabPanel>

        {/* Notifications Tab */}
        <TabPanel value={tabValue} index={2}>
          <Box sx={{ px: 3 }}>
            {saved && (
              <Alert severity="success" sx={{ mb: 3 }}>
                Notification settings saved successfully!
              </Alert>
            )}
            
            <Typography variant="h6" sx={{ mb: 3 }}>Email Notifications</Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Project updates and status changes"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="New design renderings available"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Delivery and installation information"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Switch />}
                  label="Marketing emails and promotions"
                />
              </Grid>
            </Grid>
            
            <Divider sx={{ my: 4 }} />
            
            <Typography variant="h6" sx={{ mb: 3 }}>SMS Notifications</Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Urgent project updates"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Delivery appointment reminders"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Switch />}
                  label="Special offers and promotions"
                />
              </Grid>
            </Grid>
            
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
              <Button
                variant="contained"
                startIcon={<SaveIcon />}
                onClick={handleSave}
              >
                Save Changes
              </Button>
            </Box>
          </Box>
        </TabPanel>

        {/* Security Tab */}
        <TabPanel value={tabValue} index={3}>
          <Box sx={{ px: 3 }}>
            {saved && (
              <Alert severity="success" sx={{ mb: 3 }}>
                Security settings updated successfully!
              </Alert>
            )}
            
            <Typography variant="h6" sx={{ mb: 3 }}>Password</Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Current Password"
                  type="password"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="New Password"
                  type="password"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Confirm New Password"
                  type="password"
                  variant="outlined"
                />
              </Grid>
            </Grid>
            
            <Divider sx={{ my: 4 }} />
            
            <Typography variant="h6" sx={{ mb: 3 }}>Two-Factor Authentication</Typography>
            
            <Stack spacing={2}>
              <FormControlLabel
                control={<Switch />}
                label="Enable two-factor authentication"
              />
              
              <Typography variant="body2" color="text.secondary">
                Two-factor authentication adds an additional layer of security to your account. 
                When enabled, you'll be required to enter a verification code when signing in.
              </Typography>
            </Stack>
            
            <Divider sx={{ my: 4 }} />
            
            <Typography variant="h6" sx={{ mb: 3 }}>Login Sessions</Typography>
            
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              This will log you out of all devices except the current one.
            </Typography>
            
            <Button
              variant="outlined"
              color="error"
            >
              Sign Out From All Devices
            </Button>
            
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
              <Button
                variant="contained"
                startIcon={<SaveIcon />}
                onClick={handleSave}
              >
                Save Changes
              </Button>
            </Box>
          </Box>
        </TabPanel>

        {/* Billing Tab */}
        <TabPanel value={tabValue} index={4}>
          <Box sx={{ px: 3 }}>
            {saved && (
              <Alert severity="success" sx={{ mb: 3 }}>
                Billing information updated successfully!
              </Alert>
            )}
            
            <Typography variant="h6" sx={{ mb: 3 }}>Payment Methods</Typography>
            
            <Card sx={{ mb: 4 }}>
              <CardContent>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box
                      component="img"
                      src="https://placehold.co/40x25/cccccc/444444?text=VISA"
                      alt="Visa"
                      sx={{ borderRadius: 1 }}
                    />
                    <Typography>
                      •••• •••• •••• 4242 (expires 05/26)
                    </Typography>
                  </Stack>
                  <Button size="small" variant="outlined">
                    Remove
                  </Button>
                </Stack>
              </CardContent>
            </Card>
            
            <Button variant="outlined" sx={{ mb: 4 }}>
              Add Payment Method
            </Button>
            
            <Divider sx={{ my: 4 }} />
            
            <Typography variant="h6" sx={{ mb: 3 }}>Billing Address</Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Full Name"
                  defaultValue="John Doe"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Address"
                  defaultValue="123 Main Street"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="City"
                  defaultValue="New York"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="State/Province"
                  defaultValue="NY"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Postal Code"
                  defaultValue="10001"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Country"
                  defaultValue="United States"
                  variant="outlined"
                />
              </Grid>
            </Grid>
            
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
              <Button
                variant="contained"
                startIcon={<SaveIcon />}
                onClick={handleSave}
              >
                Save Changes
              </Button>
            </Box>
          </Box>
        </TabPanel>
      </Paper>
    </Box>
  );
} 