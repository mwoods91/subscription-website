import React from 'react';
import { useTheme } from '@mui/material/styles';

import {
  Box,
  Typography,
  Card,
  CardActions,
  Button,
  CardContent,
  Avatar,
  Grid,
  ListItem,
  ListItemText,
  ListItemAvatar
} from '@mui/material';

const PriceCard = ({ price, handleSubscription }) => {
  const theme = useTheme();

  const dynamicDescription1 = () => {
    if (price.nickname === 'Annual') {
      return 'HRI Global Access';
    } else if (price.nickname === 'Monthly') {
      return 'HRI Global Access';
    }
  };
  const dynamicDescription2 = () => {
    if (price.nickname === 'Annual') {
      return 'HRI PLUS App Access(coming soon)';
    } else if (price.nickname === 'Monthly') {
      return 'HRI PLUS App Access(coming soon)';
    }
  };
  const dynamicDescription3 = () => {
    if (price.nickname === 'Annual') {
      return 'FREE Replacement ID Cards';
    } else if (price.nickname === 'Monthly') {
      return 'FREE Replacement ID Cards';
    }
  };
  const dynamicDescription4 = () => {
    if (price.nickname === 'Annual') {
      return 'Key Fobs';
    } else if (price.nickname === 'Monthly') {
      return 'Key Fobs';
    }
  };
  const dynamicDescription5 = () => {
    if (price.nickname === 'Annual') {
      return 'Silicone Identity Bracelet';
    } else if (price.nickname === 'Monthly') {
      return 'Silicone Identity Bracelet';
    }
  };
  const dynamicPricing = () => {
    if (price.nickname === 'Annual') {
      return 49.99;
    } else if (price.nickname === 'Monthly') {
      return 4.99;
    }
  };
  const dynamicyear = () => {
    if (price.nickname === 'Annual') {
      return '/yr';
    } else if (price.nickname === 'Monthly') {
      return '/mo';
    }
  };
  const dynamicSubtitle = () => {
    if (price.nickname === 'Annual') {
      return 'Pay in one installment. ';
    } else if (price.nickname === 'Monthly') {
      return 'Spread your cost across the year';
    }
  };
  const dynamicPrices = () => {
    if (price.nickname === 'Annual') {
      return 49.99;
    } else if (price.nickname === 'Monthly') {
      return 4.99;
    }
  };

  return (
    <Grid item xs={12} md={6}>
      <Box component={Card} height={1} display={'flex'} flexDirection={'column'} variant={'outlined'}>
        <CardContent
          sx={{
            padding: 4
          }}
        >
          <Box marginBottom={2}>
            <Typography variant={'h4'} fontWeight={600} gutterBottom>
              {price.nickname}
            </Typography>
            <Typography color={'text.secondary'}>{dynamicSubtitle()}</Typography>
          </Box>
          <Box display={'flex'} alignItems={'baseline'} marginBottom={2}>
            <Typography variant={'h3'} fontWeight={700}>
              {(price.unit_amount / 100).toLocaleString('en-IE', {
                style: 'currency',
                currency: 'EUR'
              })}{' '}
            </Typography>
            <Typography variant={'subtitle1'} color={'text.secondary'} fontWeight={700}>
              {dynamicyear()}
            </Typography>
          </Box>
          <Grid container spacing={1}>
            <Grid item xs={12}>
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
                <ListItemText primary={dynamicDescription1()} />
              </Box>
            </Grid>
            <Grid item xs={12}>
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
                <ListItemText primary={dynamicDescription2()} />
              </Box>
            </Grid>
            <Grid item xs={12}>
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
                <ListItemText primary={dynamicDescription3()} />
              </Box>
            </Grid>
            <Grid item xs={12}>
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
                <ListItemText primary={dynamicDescription4()} />
              </Box>
            </Grid>
            <Grid item xs={12}>
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
                <ListItemText primary={dynamicDescription5()} />
              </Box>
            </Grid>
          </Grid>
        </CardContent>
        <Box flexGrow={1} />
        <CardActions sx={{ justifyContent: 'flex-end', padding: 4 }}>
          <Button onClick={() => handleSubscription(price)} sx={{ borderRadius: 3 }} size={'large'} variant={'contained'}>
            Pay Now €{dynamicPrices()}
          </Button>
        </CardActions>
      </Box>
    </Grid>
  );
};

export default PriceCard;
