import React from 'react';
import { Container } from '@mui/material';
import Hero from './Hero';
import Features from './Features';
import SlideShow from './SlideShow';
import HoldingMobile from './HoldingMobile';
import Partners from './Partners';
import Bottom from './Bottom';

const OurApp = () => {
  return (
    <>
      <Container sx={{ mt: 10 }}>
        <Hero />
      </Container>
      <Container sx={{ mt: { xs: 3, md: 7 }, p: 4, backgroundColor: '#f5f5f5' }}>
        <Features />
      </Container>
      <Container sx={{ mt: { xs: -8, md: 7 } }}>
        <SlideShow />
      </Container>
      <Container sx={{ mt: 10, backgroundColor: '#f5f5f5' }}>
        <HoldingMobile />
      </Container>
      <Container sx={{ mt: { xs: 11, md: 11 } }}>
        <Partners />
      </Container>
      <Container sx={{ mt: { xs: 3, md: -3 }, backgroundColor: '#fafafa' }}>
        <Bottom />
      </Container>
    </>
  );
};

export default OurApp;
