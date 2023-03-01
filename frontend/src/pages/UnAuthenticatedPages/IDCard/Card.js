import React, { useState } from 'react';
import { Grid, Box, Typography, useMediaQuery, Card, CardMedia } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

//3rd party
import ReactCardFlip from 'react-card-flip';

const DeviceCard = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down('md'), {
    defaultMatches: true
  });
  const IDFront = require('../../../assets/images/IDCard/hri-standard-card.png');
  const IDBack = require('../../../assets/images/IDCard/Back-id-card.png');
  const [isFlipped, setisFlipped] = useState(false);

  const handleFlipChange = () => {
    setisFlipped(!isFlipped);
  };
  return (
    <>
      <Box marginBottom={{ xs: 0, sm: 4 }} display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <Typography
          variant="h3"
          gutterBottom
          align={'center'}
          sx={{
            fontWeight: 900
          }}
        >
          Take a closer look at your Device ID card
        </Typography>
        <Typography variant="h6" component="p" color="text.primary" align={'center'} sx={{ marginBottom: 2 }}>
          Click the card to see reverse
        </Typography>
      </Box>
      <Grid spacing={4} container sx={{ textAlign: 'center' }}>
        <Grid item xs={12} md={4} order={{ xs: 2, sm: 2 }}>
          <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
            <Box marginBottom={2}>
              <Typography color="text.secondary" variant={'h6'}>
                The Front
              </Typography>
            </Box>
            <Grid container spacing={1}>
              {['Your Name for airport security', 'Your G Pace ID for hospitals', 'HRI logo', 'New modern slick look'].map((item, i) => (
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
        </Grid>

        <Grid item xs={12} md={4} order={{ xs: 1, sm: 2 }}>
          <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <Card sx={{ borderRadius: 2 }} onClick={handleFlipChange}>
              <CardMedia component="img" alt="Front of ID Card" width={1} image={IDFront} />
            </Card>
            <Card sx={{ borderRadius: 2 }} onClick={handleFlipChange}>
              <CardMedia component="img" alt="Back of ID Card" width={1} image={IDBack} />
            </Card>
          </ReactCardFlip>
        </Grid>
        <Grid sx={{ textAlign: 'center' }} item xs={12} md={4} order={{ xs: 3, sm: 2 }}>
          <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
            <Box marginBottom={2}>
              <Typography color="text.secondary" variant={'h6'}>
                The Back
              </Typography>
            </Box>
            <Grid container spacing={1}>
              {[
                'Your Device Type',
                'Device manufacturer, name, number, serial number',
                'Diagnosis and indications',
                'Lead details (if any)',
                'Implant center details'
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
        </Grid>
      </Grid>
    </>
  );
};

export default DeviceCard;
