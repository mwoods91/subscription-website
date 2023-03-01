import React, { Fragment } from 'react';
import { useLocation } from 'react-router-dom';

// material-ui
import { Button, Grid, Typography, Container, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { UpOutlined } from '@ant-design/icons';

const Footer = () => {
  const location = useLocation();

  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down('lg'));
  return (
    <Fragment>
      {location.pathname === '/login' ||
      location.pathname === '/register' ||
      location.pathname === '/password-reset' ? null : matchDownMd ? (
        <Container sx={{ textAlign: 'center', p: 2.5 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
              <Typography>
                &copy; Copyright{' '}
                <strong>
                  <span>Heart Rhythm Ireland</span>
                </strong>{' '}
                2023
              </Typography>
            </Grid>
          </Grid>
        </Container>
      ) : (
        <Container sx={{ p: 2.5 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
              <Typography>
                &copy; Copyright{' '}
                <strong>
                  <span>Heart Rhythm Ireland</span>
                </strong>{' '}
                2023
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Grid container spacing={2} alignItems="center" sx={{ justifyContent: 'flex-end' }}>
                <Button variant="contained" sx={{ mt: 1, display: { xs: 'none', md: 'block' } }}>
                  <UpOutlined
                    sx={{ color: '#437CAF' }}
                    onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                    }}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      )}
    </Fragment>
  );
};
export default Footer;
