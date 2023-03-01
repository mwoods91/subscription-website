import React from 'react';

import { Grid, Box, Typography, Card, CardContent } from '@mui/material';

const Steps = () => {
  const mock = [
    {
      title: 'Complete your application',
      subtitle: 'You can return the postal application recieved with your ID card or sign up online',
      icon: (
        <svg height={24} width={24} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          />
        </svg>
      )
    },
    {
      title: 'Choose your subscription plan',
      subtitle: 'Easy payment plans that suit your budget whether you prefer monthly or annually',
      icon: (
        <svg height={24} width={24} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
          />
        </svg>
      )
    },
    {
      title: 'Let us take of the rest',
      subtitle: 'Existing patients will have their device details on their app within 24 hours.',
      icon: (
        <svg height={24} width={24} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      )
    }
  ];
  return (
    <Box>
      <Box>
        <Grid container spacing={2}>
          {mock.map((item, i) => (
            <Grid sx={{ mb: 5 }} item xs={12} md={4} key={i}>
              <Box data-aos={'fade-up'} data-aos-delay={i * 80} data-aos-offset={100} data-aos-duration={400} height={1}>
                <Box
                  component={Card}
                  variant={'outlined'}
                  height={1}
                  padding={2}
                  sx={{
                    transition: 'all .2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 1
                    }
                  }}
                >
                  <CardContent>
                    <Box>
                      <Box marginBottom={2} color={'primary.main'}>
                        {item.icon}
                      </Box>
                      <Typography variant={'h5'} gutterBottom sx={{ fontWeight: 700 }}>
                        {item.title}
                      </Typography>
                      <Typography color="text.secondary">{item.subtitle}</Typography>
                    </Box>
                  </CardContent>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Steps;
