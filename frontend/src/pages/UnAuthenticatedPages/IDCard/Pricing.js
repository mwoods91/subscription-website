import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Typography,
  ToggleButton,
  Card,
  CardActions,
  Button,
  CardContent,
  Avatar,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  useMediaQuery,
  Container
} from '@mui/material';

const Plus = [
  {
    title: 'Standard ID Card',
    subtitle: 'Get a replacment ID card',
    price: 10.0,
    features: ['All your device details on one location', 'Easy travel through airport security'],
    isHighlighted: false
  }
];

const Pricing = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true
  });

  const [pricingOption] = useState('Plus');

  return (
    <Box>
      <Box
        sx={{
          position: 'relative',
          backgroundColor: theme.palette.primary,
          backgroundImage: `linear-gradient(120deg, ${theme.palette.background.paper} 0%, ${theme.palette.primary} 100%)`,
          marginTop: 0,
          paddingTop: 13
        }}
      >
        <Container position={'relative'} zindex={3}>
          <Box>
            <Box marginBottom={4}>
              <Typography
                variant="h3"
                gutterBottom
                align={'center'}
                sx={{
                  fontWeight: 900
                }}
              >
                Need an additional ID card?
              </Typography>
              <Typography variant="h6" component="p" color="text.primary" align={'center'}>
                if you card has been lost or stolen, or you simply want to order an additional one
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}></Grid>
          {Plus.map((item, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Box component={Card} height={1} display={'flex'} flexDirection={'column'} variant={'outlined'}>
                <CardContent
                  sx={{
                    padding: 4
                  }}
                >
                  <Box marginBottom={2}>
                    <Typography variant={'h4'} fontWeight={600} gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography color={'text.secondary'}>{item.subtitle}</Typography>
                  </Box>
                  <Box display={'flex'} alignItems={'baseline'} marginBottom={2}>
                    <Typography variant={'h3'} fontWeight={700}>
                      €{pricingOption === 'Plus' && item.price}
                    </Typography>
                    <Typography variant={'subtitle1'} color={'text.secondary'} fontWeight={700}>
                      {pricingOption === 'Plus' && item.title === 'Annually' ? '/y' : '/per ID card'}
                    </Typography>
                  </Box>
                  <Grid container spacing={1}>
                    {item.features.map((feature, j) => (
                      <Grid item xs={12} key={j}>
                        <Box component={ListItem} disableGutters width={'auto'} padding={0}>
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
                          <ListItemText primary={feature} />
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
                <Box flexGrow={1} />
                <CardActions sx={{ justifyContent: 'flex-end', padding: 4 }}>
                  <Button sx={{ borderRadius: 3 }} size={'large'} variant={'contained'}>
                    Pay Now €{item.price}
                  </Button>
                </CardActions>
              </Box>
            </Grid>
          ))}
          <Grid item xs={12} md={4}></Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Pricing;
