import React from 'react';
import { Box, Grid, Typography, ListItem, ListItemAvatar, Avatar, Tooltip, ListItemText } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MainCard from '../../../components/MainCard';

const Features = () => {
  const theme = useTheme();
  return (
    <MainCard>
      <Grid sx={{ mt: { xs: 1, md: -2 } }} container spacing={4}>
        <Grid item container alignItems={'center'} xs={12} md={6}>
          <Box>
            <Box marginBottom={2}>
              <Typography variant={'h4'} sx={{ fontWeight: 700 }} gutterBottom>
                As part of the HRI Plus package, you get the benefits of the following features
              </Typography>
              <Typography color="text.secondary">All plus members can access the features</Typography>
            </Box>
            <Grid container spacing={1}>
              {[
                'HRI Global Access',
                'HRI PLUS App (NEW)',
                'Additional ID Cards',
                'Key Fobs',
                'Silicone Bracelet',
                'Information Line',
                'Online Portal',
                'Future new features'
              ].map((item, i) => (
                <Grid item xs={12} sm={6} key={i}>
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
                    <ListItemText primary={item} />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box height={1} width={1} display={'flex'} flexDirection={'column'}>
            <Tooltip placement="top" title="Silicone Bracelet">
              <Box
                component={'img'}
                src={require('../../../assets/images/PlusBenefits/WristBands.png')}
                alt="..."
                width={160}
                height={160}
                marginLeft={'calc(60% - 160px)'}
                zindex={3}
                boxShadow={0}
                data-aos={'fade-up'}
                sx={{
                  objectFit: 'contain',
                  filter: theme.palette.mode === 'dark' ? 'brightness(0.5)' : 'none'
                }}
              />
            </Tooltip>
            <Tooltip placement="top" title="HRI Plus App">
              <Box
                component={'img'}
                width={200}
                height={200}
                src={require('../../../assets/images/PlusBenefits/MobileApp.png')}
                alt="..."
                marginTop={'-8%'}
                zindex={2}
                boxShadow={0}
                data-aos={'fade-up'}
                sx={{
                  objectFit: 'contain',
                  filter: theme.palette.mode === 'dark' ? 'brightness(0.5)' : 'none'
                }}
              />
            </Tooltip>
            <Tooltip placement="top" title="New ID Card and 3 KeyFobs">
              <Box
                component={'img'}
                width={300}
                height={300}
                src={require('../../../assets/images/PlusBenefits/cardAndKeyfob.png')}
                alt="..."
                marginTop={'-20%'}
                marginLeft={'calc(100% - 310px)'}
                zindex={1}
                boxShadow={0}
                data-aos={'fade-up'}
                sx={{
                  p: 2,
                  objectFit: 'contain',
                  filter: theme.palette.mode === 'dark' ? 'brightness(0.5)' : 'none'
                }}
              />
            </Tooltip>
          </Box>
          <Tooltip placement="top" title="HRI GLOBAL">
            <Box
              component={'img'}
              src={require('../../../assets/images/PlusBenefits/WorldMap.png')}
              alt="..."
              width={160}
              height={160}
              marginTop={'-45%'}
              zindex={3}
              boxShadow={0}
              data-aos={'fade-up'}
              sx={{
                objectFit: 'contain',
                filter: theme.palette.mode === 'dark' ? 'brightness(0.5)' : 'none'
              }}
            />
          </Tooltip>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default Features;
