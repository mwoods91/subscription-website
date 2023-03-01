import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import { useMediaQuery, Box, Typography, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  let navigate = useNavigate();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down('md'), {
    defaultMatches: true
  });

  const MobileAndCard = require('../../../assets/images/Hero/Mobile-and-card-3.png');

  const navigateToRegister = () => {
    navigate('/register-options');
  };
  return (
    <Grid container spacing={2}>
      <Grid item container xs={12} md={6} alignItems={'center'}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-right'}>
          <Box sx={{ mt: isMd ? 15 : 5 }} marginBottom={2}>
            <Typography
              variant="h1"
              color="text.primary"
              sx={{
                fontWeight: 800
              }}
            >
              Official{' '}
              <Typography
                color={'primary'}
                component={'span'}
                variant={'inherit'}
                sx={{
                  background: `linear-gradient(180deg, transparent 90%, ${alpha(theme.palette.secondary.main, 0.3)} 0%)`
                }}
              >
                cardiac device ID card
              </Typography>
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography variant="h6" component="p" color="text.secondary">
              Travelling with your cardiac device ID has never been easier.
              <br />
              Join our community today.
              <br />
              HRI+ Members can enjoy 24/7 Global access to their device details
              <br />
              with our{' '}
              <Typography
                color={'primary'}
                component={'span'}
                variant={'inherit'}
                sx={{
                  background: `linear-gradient(180deg, transparent 90%, ${alpha(theme.palette.secondary.main, 0.3)} 0%)`
                }}
              >
                NEW APP (Coming soon!)
              </Typography>
            </Typography>
          </Box>

          <Box display="flex" marginTop={1}>
            <Button onClick={navigateToRegister} sx={{ borderRadius: 43, width: '50%' }} variant="contained">
              Get Started
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        container
        alignItems={'center'}
        justifyContent={'center'}
        xs={12}
        md={6}
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <Box
          sx={{ mt: isMd ? 1 : 13 }}
          component={'img'}
          loading="lazy"
          height={1}
          width={1}
          src={MobileAndCard}
          alt="..."
          maxWidth={600}
        />
      </Grid>
    </Grid>
  );
};

export default Hero;
