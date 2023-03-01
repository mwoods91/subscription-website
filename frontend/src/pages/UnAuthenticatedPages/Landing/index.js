import React from 'react';
import { Container } from '@mui/material';
import Hero from './Hero';
import Features from './Features';
import Pricing from './Pricing';
import Contact from './Contact';

// ==============================|| LANDING - HEADER PAGE ||============================== //

const Landing = () => {
  return (
    <>
      <Container>
        <Hero />
      </Container>
      <Container sx={{ bgcolor: '#f5f6f6' }}>
        <Features />
      </Container>
      <Container>
        <Pricing />
      </Container>
      <Container>
        <Contact />
      </Container>
    </>
  );
};

export default Landing;
