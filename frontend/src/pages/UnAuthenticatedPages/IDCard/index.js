import React from 'react';
import DeviceCard from './Card';
import { Container } from '@mui/material';
import Bottom from './Bottom';
import Pricing from './Pricing';
import Reviews from './reviews';

const IDCard = () => {
  return (
    <>
      <Container sx={{ mt: 12 }}>
        <DeviceCard />
      </Container>
      <Container sx={{ bgcolor: '#ffffff' }}>
        <Bottom />
      </Container>
      <Container>
        <Pricing />
      </Container>
      <Container sx={{ mt: 2 }}>
        <Reviews />
      </Container>
    </>
  );
};

export default IDCard;
