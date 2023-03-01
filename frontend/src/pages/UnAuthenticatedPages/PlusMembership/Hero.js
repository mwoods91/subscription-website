import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Hero = () => {
  return (
    <Container>
      <Box
        sx={{
          position: 'relative',
          marginTop: 10,
          paddingTop: 8
        }}
      >
        <Container>
          <Box>
            <Box marginBottom={{ xs: 0, sm: 4 }} display={'flex'} flexDirection={'column'} alignItems={'center'}>
              <Typography
                variant="h3"
                gutterBottom
                align={'center'}
                sx={{
                  fontWeight: 900
                }}
              >
                Join the HRI community today
              </Typography>
              <Typography variant="h6" component="p" color="text.primary" align={'center'} sx={{ marginBottom: 2 }}>
                Becoming a HRI Plus memeber has just got easier with our 3 simple step approach
                <br />
                Take control of your device details
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </Container>
  );
};

export default Hero;
