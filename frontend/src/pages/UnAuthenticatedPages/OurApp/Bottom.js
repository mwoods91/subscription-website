import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';

const Bottom = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true
  });
  return (
    <Grid container spacing={1}>
      <Grid item container alignItems={'center'} xs={12} md={6}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Grid container>
            <Grid item xs={12} md={4}></Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }} marginBottom={2}>
                <Typography color={'primary'} component={'span'} variant="h2" sx={{ fontWeight: 700 }}>
                  Get the app
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}></Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} md={2}></Grid>
            <Grid item xs={12} md={8}>
              <Box marginBottom={3}>
                <Typography variant="h6" component="p" color="text.secondary">
                  Effortlessly find your cardiac device details at the click of a button to make your appointments and travel experience
                  more enjoyable
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={2}></Grid>
          </Grid>

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
              <Box
                sx={{ textAlign: 'center' }}
                display="flex"
                flexDirection={{ xs: 'column', sm: 'row' }}
                alignItems={{ xs: 'stretched', sm: 'flex-start' }}
              >
                <Grid container>
                  <Grid item xs={12} md={2}></Grid>
                  <Grid item xs={12} md={8}>
                    <Box sx={{ left: '50%' }} marginBottom={3}>
                      <Button
                        startIcon={<AppleOutlined />}
                        variant="contained"
                        color="primary"
                        size="large"
                        fullWidth={isMd ? false : true}
                      >
                        Appstore
                      </Button>
                      <Box
                        component={Button}
                        variant="outlined"
                        color="primary"
                        size="large"
                        startIcon={<AndroidOutlined />}
                        marginTop={{ xs: 2, sm: 0 }}
                        marginLeft={{ sm: 2 }}
                        fullWidth={isMd ? false : true}
                      >
                        Playstore
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={2}></Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box height={1} width={1} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Box height={1} width={1} maxHeight={600}>
            <Box
              sx={{ p: { xs: 10, md: 17 } }}
              component={'img'}
              width="90%"
              height="100%"
              minHeight={30}
              src={require('../../../assets/images/PlusBenefits/MobileApp.png')}
              borderRadius={2}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Bottom;
