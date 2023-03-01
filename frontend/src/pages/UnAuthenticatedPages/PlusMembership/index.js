import React from 'react';
import { Container } from '@mui/material';
import Hero from './Hero';
import Steps from './Steps';
import Features from './Features';
import Pricing from './Pricing';
import Reviews from './Reviews';

const PlusMembership = () => {
  return (
    <>
      <Container>
        <Hero />
        <Steps />
      </Container>
      <Container>
        <Features />
      </Container>
      <Container sx={{ mt: -5 }}>
        <Pricing />
      </Container>
      <Container>
        <Reviews />
      </Container>
    </>
  );
};

export default PlusMembership;
