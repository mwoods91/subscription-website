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
    title: 'Monthly',
    subtitle: 'Spread your cost across the year',
    price: 4.99,
    features: [
      'HRI Global Access',
      'HRI PLUS App Access (Coming Soon)',
      'FREE Replacment ID Cards',
      'Key Fobs',
      'Silicone Identity Bracelet'
    ],
    isHighlighted: false
  },
  {
    title: 'Annually',
    subtitle: 'Pay in one installment. ',
    price: 59.99,
    features: [
      'HRI Global Access',
      'HRI PLUS App Access (Coming Soon)',
      'FREE Replacment ID Cards',
      'Key Fobs',
      'Silicone Identity Bracelet'
    ],
    isHighlighted: true
  }
];

const Pricing = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true
  });

  const [pricingOption] = useState('Plus');

  const renderToggler = () => (
    <Box display={'flex'} justifyContent={'center'} sx={{ mb: 4 }}>
      <ToggleButton
        value="Plus"
        size={isMd ? 'large' : 'small'}
        sx={{
          borderRadius: 3,
          color: 'white',
          backgroundColor: pricingOption === 'Plus' ? `${theme.palette.primary.light} !important` : 'transparent',
          border: `1px solid ${theme.palette.primary}`
        }}
      >
        HRI PLUS
      </ToggleButton>
    </Box>
  );

  return (
    <Box>
      <Box
        sx={{
          position: 'relative',
          backgroundColor: theme.palette.primary,
          backgroundImage: `linear-gradient(120deg, ${theme.palette.background.paper} 0%, ${theme.palette.primary} 100%)`,
          marginTop: 2.5,
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
                Flexible pricing options
              </Typography>
              <Typography variant="h6" component="p" color="text.primary" align={'center'}>
                We have two pricing options to get you started on your Heart Rhythm Ireland Journey
              </Typography>
            </Box>
            {renderToggler()}
          </Box>
        </Container>
      </Box>
      <Container>
        <Grid container spacing={4}>
          {Plus.map((item, i) => (
            <Grid item xs={12} md={6} key={i}>
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
                      {pricingOption === 'Plus' && item.title === 'Annually' ? '/y' : '/mo'}
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
        </Grid>
      </Container>
    </Box>
  );
};

export default Pricing;
