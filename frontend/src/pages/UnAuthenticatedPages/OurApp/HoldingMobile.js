import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const HoldingMobile = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true
  });
  return (
    <Grid container spacing={4}>
      <Grid item container alignItems={'center'} xs={12} md={5}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={2}>
            <Typography color={'primary'} component={'span'} variant="h2" sx={{ fontWeight: 700 }}>
              See all your Cardiac device details in full screen
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography variant="h6" component="p" color="text.secondary">
              Sign up to create your account and download the app to generate your Digital Cardiac Device ID
            </Typography>
          </Box>
          <Box display="flex" flexDirection={'column'} justifyContent={'center'}>
            <Box
              component={'form'}
              noValidate
              autoComplete="off"
              sx={{
                '& .MuiInputBase-input.MuiOutlinedInput-input': {
                  bgcolor: 'background.paper'
                }
              }}
            >
              <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} alignItems={{ xs: 'stretched', sm: 'flex-start' }}>
                <Box
                  data-aos="zoom-in"
                  component={Button}
                  variant="contained"
                  color="primary"
                  size="large"
                  marginTop={{ xs: 2, sm: 0 }}
                  marginLeft={{ sm: 0 }}
                >
                  Sign Up
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={7}>
        <Box height={1} width={1} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Box height={1} width={1} maxHeight={600}>
            <Box
              sx={{ p: { xs: 2, md: 7 } }}
              component={'img'}
              width="100%"
              height="100%"
              minHeight={30}
              src={require('../../../assets/images/OurApp/HoldingMobile.png')}
              borderRadius={2}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default HoldingMobile;
