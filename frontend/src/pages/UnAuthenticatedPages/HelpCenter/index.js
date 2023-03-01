import React from 'react';
import { Container } from '@mui/material';
import Categories from './Categories';
import Questions from './Questions';

const HelpCenter = () => {
  return (
    <Container>
      <Categories />
      <Questions />
    </Container>
  );
};

export default HelpCenter;
