import { Typography, Grid } from '@mui/material';
import React from 'react';
import MainCard from '../../../components/MainCard';

const CancelPage = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <MainCard>
          <Typography variant="h6">It looks like you cancelled your payment</Typography>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default CancelPage;
