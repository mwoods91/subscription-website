import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Box, Card, List, ListItem, Grid, Typography, Container } from '@mui/material';

const pages = [
  {
    id: 'general',
    href: '/my-account/personal',
    title: 'Personal'
  },
  {
    id: 'security',
    href: '/my-account/password-reset',
    title: 'Password-Reset'
  },
  {
    id: 'preferences',
    href: '/my-account/preferences',
    title: 'Preferences'
  }
  // {
  //   id: 'billing',
  //   href: '/account-billing',
  //   title: 'Billing Information'
  // }
];

const Page = ({ children }) => {
  const [activeLink, setActiveLink] = useState('');
  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : '');
  }, []);

  const theme = useTheme();
  return (
    <Box>
      <Container paddingTop={'0 !important'} marginTop={-8}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Card sx={{ boxShadow: 3 }}>
              <List
                disablePadding
                sx={{
                  display: { xs: 'inline-flex', md: 'flex' },
                  flexDirection: { xs: 'row', md: 'column' },
                  overflow: 'auto',
                  flexWrap: 'nowrap',
                  width: '100%',
                  paddingY: { xs: 3, md: 4 },
                  paddingX: { xs: 2, md: 0 }
                }}
              >
                {pages.map((item) => (
                  <ListItem
                    key={item.id}
                    component={'a'}
                    href={item.href}
                    disableGutters
                    sx={{
                      marginRight: { xs: 2, md: 0 },
                      flex: 0,
                      paddingX: { xs: 0, md: 3 },
                      borderLeft: {
                        xs: 'none',
                        md: '4px solid transparent'
                      },
                      borderLeftColor: {
                        md: activeLink === item.href ? theme.palette.primary.main : 'transparent'
                      }
                    }}
                  >
                    <Typography variant="subtitle1" noWrap color={activeLink === item.href ? 'primary' : 'text.secondary'}>
                      {item.title}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Card>
          </Grid>
          <Grid item xs={12} md={9}>
            <Card sx={{ boxShadow: 1, padding: 2 }}>{children}</Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

Page.propTypes = {
  children: PropTypes.node
};

export default Page;
