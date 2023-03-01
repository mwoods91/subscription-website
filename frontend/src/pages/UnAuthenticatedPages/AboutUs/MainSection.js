import React from 'react';
import { useTheme } from '@mui/material/styles';

import {
  Box,
  Typography,
  Divider,
  Grid,
  useMediaQuery,
  ListItemAvatar,
  ListItem,
  ListItemText,
  Avatar,
  Card,
  CardContent
} from '@mui/material';

const MainSection = () => {
  const Barcode = require('../../../assets/images/AboutUs/barcode.png');
  const Card1 = require('../../../assets/images/AboutUs/hri-standard-card.png');
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true
  });

  const mock = [
    {
      media: Card1,
      title: 'New Look ID Card',
      subtitle: 'We have created a updated patient ID card that gives a smooth and modern look to your details'
    },
    {
      media: Barcode,
      title: 'Device barcoding',
      subtitle: 'We are delighted to announce device barcoding is now available nationwide'
    }
  ];
  return (
    <>
      <Box>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={{ xs: 'flex-start', sm: 'center' }}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box>
            <Typography fontWeight={700} variant={'h4'} gutterBottom>
              National Cardiac Registery of Ireland
            </Typography>
            <Typography variant={'h6'}>Heart Rhythm Ireland, Unit 5, John Street Business Park, Ardee, A92 W540, Co Louth</Typography>
          </Box>
        </Box>
      </Box>

      <Divider sx={{ marginY: 4 }} />
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={8}>
          <Box marginBottom={3}>
            <Typography variant={'h5'} fontWeight={700} gutterBottom>
              Who we are
            </Typography>
            <Typography variant="h6">
              Since 2008, Heart Rhythm Ireland has been providing patients with Cardiac Device ID cards. Our patient ID cards are recognized
              worldwide, giving patients the freedom to travel with complete peace of mind.
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography variant={'h3'} fontWeight={700} gutterBottom>
              What we do
            </Typography>
            <Typography variant="h6">
              Heart Rhythm Ireland is a CRM system and the national registry of cardiac devices which patient details nationwide. We are
              currently in 43 hospitals and centers across the country.
            </Typography>
            <Grid container spacing={1} sx={{ marginTop: 1 }}>
              {[
                'Device implant information',
                'Patient follow up appointments',
                'Secure national database',
                'Patients get a FREE permanent ID card with their implanted device',
                'Manage appointments for hospitals',
                'Custom templating for physicians and technicians'
              ].map((item, i) => (
                <Grid item xs={12} key={i}>
                  <Box data-aos={isMd ? 'fade-up' : 'fade-up'} component={ListItem} disableGutters width={'auto'} padding={0}>
                    <Box component={ListItemAvatar} minWidth={'auto !important'} marginRight={2}>
                      <Box component={Avatar} bgcolor={theme.palette.primary.main} width={20} height={20}>
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
        <Grid item xs={12} md={4}>
          <Grid container spacing={isMd ? 2 : 2} direction="column">
            <Grid item xs={12} data-aos="fade-up">
              <Box marginBottom={0}>
                <Typography variant={'h4'} gutterBottom align={'left'} sx={{ fontWeight: 700, textDecoration: 'underline' }}>
                  Our latest news
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} data-aos="fade-up">
              {mock.map((item, index) => {
                return (
                  <Box
                    key={index}
                    sx={{ border: 0.2, borderColor: '#437CAF', elevation: false, mt: 1 }}
                    component={Card}
                    display={'flex'}
                    flexDirection={{ xs: 'column', sm: 'row' }}
                  >
                    <CardContent>
                      <Box>
                        <Typography variant="h5" gutterBottom color="primary">
                          {item.title}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                          {item.subtitle}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Box>
                );
              })}
              <Box></Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default MainSection;
