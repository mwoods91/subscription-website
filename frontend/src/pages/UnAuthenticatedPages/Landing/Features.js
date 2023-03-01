/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCard';
import MobileFriendlyOutlinedIcon from '@mui/icons-material/MobileFriendlyOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import { alpha } from '@mui/material/styles';
import { colors } from '@mui/material';

const mock = [
  {
    color: colors.lightBlue[500],
    title: 'Your ID Card',
    subtitle: 'See more about your ID card',
    icon: (
      <svg height={24} width={24} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <CreditCardOutlinedIcon />
      </svg>
    ),
    url: '/'
  },
  {
    color: colors.yellow[500],
    title: 'HRI Plus',
    subtitle: 'Learn more about HRI Plus membership service',
    icon: (
      <svg height={24} width={24} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <AddOutlinedIcon />
      </svg>
    )
  },
  {
    color: colors.indigo[500],
    title: 'Our App',
    subtitle: 'Take a tour of our PlusApp',
    icon: (
      <svg height={24} width={24} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <MobileFriendlyOutlinedIcon />
      </svg>
    )
  },
  {
    color: '#38AECC',
    title: 'Customer Service',
    subtitle: 'Send us a message in our contact form',
    icon: (
      <svg height={24} width={24} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <SupportAgentOutlinedIcon />
      </svg>
    ),
    url: '/help-center'
  }
];

const Features = () => {
  const theme = useTheme();

  const LeftSide = () => (
    <Grid container spacing={2}>
      {mock.map((item, index) => (
        <Grid item xs={12} sm={6} key={index} data-aos="fade-up" data-aos-delay={index * 100} data-aos-offset={100} data-aos-duration={600}>
          <Box
            display={'block'}
            width={1}
            sx={{
              transform: index % 2 === 1 ? { md: 'translateY(80px)' } : 'none'
            }}
          >
            <Box component={Card} padding={4} borderRadius={2} width={1}>
              <Box display={'flex'} flexDirection={'column'}>
                <Box
                  component={Avatar}
                  width={60}
                  height={60}
                  marginBottom={2}
                  bgcolor={alpha(item.color, 0.1)}
                  color={item.color}
                  variant={'rounded'}
                  borderRadius={2}
                >
                  {item.icon}
                </Box>
                <Typography variant={'h6'} gutterBottom sx={{ fontWeight: 700 }}>
                  {item.title}
                </Typography>
                <Typography color="text.secondary">{item.subtitle}</Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Box marginTop={2} display={'flex'} justifyContent={'flex-end'}>
                  <Button
                    component={Link}
                    to={item.url}
                    endIcon={
                      <Box
                        component={'svg'}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width={24}
                        height={24}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </Box>
                    }
                  >
                    Learn more
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );

  const RightSide = () => (
    <Box>
      <Box marginBottom={2}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium'
          }}
          gutterBottom
          color={'primary'}
        >
          Ireland's Only Cardiac Device ID Manufacturer
        </Typography>
      </Box>
      <Box marginBottom={2}>
        <Typography variant={'h3'} sx={{ fontWeight: 700 }} gutterBottom>
          What becoming part of our community means for you...
        </Typography>
        <Typography color="text.secondary" variant={'p'}>
          For the past 13 years, we have been serving the needs of cardiology patients
          <br />
          reaching across 43 hospitals nationwide
        </Typography>
      </Box>
      <Grid container spacing={1}>
        {[
          'Real time updates about your device details',
          'Hasle Free Travelling abroad',
          'Implant and follow up records',
          'FREE ID card with your Implant',
          'Get more with our HRI PLUS app'
        ].map((item, i) => (
          <Grid item xs={12} key={i}>
            <Box component={ListItem} disableGutters width={'auto'} padding={0}>
              <Box component={ListItemAvatar} minWidth={'auto !important'} marginRight={2}>
                <Box component={Avatar} bgcolor={theme.palette.secondary.main} width={20} height={20}>
                  <svg width={12} height={12} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Box>
              </Box>
              <ListItemText primary={item} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  return (
    <Grid sx={{ mt: 3, bgcolor: '#f5f6f6' }} container spacing={4}>
      <Grid item xs={12} md={6}>
        <LeftSide />
      </Grid>
      <Grid item container alignItems={'center'} xs={12} md={6}>
        <RightSide />
      </Grid>
    </Grid>
  );
};

export default Features;
