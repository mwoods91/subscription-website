import React from 'react';
import { Container } from '@mui/material';
import MainSection from './MainSection';

const AboutUs = () => {
  return (
    <>
      <Container sx={{ mt: 15, bgcolor: '#fafafa', minHeight: '60vh' }}>
        <MainSection />
      </Container>
    </>
  );
};

export default AboutUs;
