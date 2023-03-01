import React from 'react';
import { Grid, Container } from '@mui/material';
import Form from './Form';

const ResetWrapper = () => {
  return (
    <Container sx={{ mt: 10 }}>
      <Grid container spacing={12}>
        <Grid sx={{ minHeight: '100vh' }} item container alignItems={'center'} justifyContent={'center'} xs={12} md={12}>
          <Form />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ResetWrapper;
