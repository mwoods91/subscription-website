import React from 'react';
import { Grid, Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

const Features = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down('md'), {
    defaultMatches: true
  });

  return (
    <>
      <Box marginBottom={{ xs: 0, sm: 4 }} display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <Typography
          variant="h3"
          gutterBottom
          align={'center'}
          sx={{
            fontWeight: 600
          }}
        >
          HRI Plus App Features
        </Typography>
      </Box>
      <Grid spacing={4} container>
        <Grid sx={{ mt: { xs: -10, md: 10 } }} item xs={12} md={4} order={{ xs: 2, sm: 2 }}>
          <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
            <Grid container spacing={2}>
              {['Digital Device ID card', 'Secure / Encrypted Details', 'Easy set up'].map((item, i) => (
                <Grid item xs={12} key={i}>
                  <Box sx={{ ml: { xs: 7, md: 10 } }} component={ListItem} disableGutters width={'auto'} padding={0}>
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
        </Grid>

        <Grid item xs={12} md={4} order={{ xs: 1, sm: 2 }}>
          <Box
            sx={{ p: { xs: 8, md: 10 }, mt: { xs: -5, md: -10 } }}
            component={'img'}
            width="100%"
            height="100%"
            minHeight={30}
            src={require('../../../assets/images/OurApp/AppFeature.png')}
            borderRadius={2}
          />
        </Grid>
        <Grid sx={{ mt: { xs: -2, md: 10 } }} item xs={12} md={4} order={{ xs: 3, sm: 2 }}>
          <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
            <Grid container spacing={2}>
              {['Peace of Mind', 'Recognised Globally', 'Device Share'].map((item, i) => (
                <Grid item xs={12} key={i}>
                  <Box sx={{ ml: { xs: 7, md: 10 } }} component={ListItem} disableGutters width={'auto'} padding={0}>
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
        </Grid>
      </Grid>
    </>
  );
};

export default Features;
