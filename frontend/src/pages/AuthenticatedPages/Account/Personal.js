import React from 'react';
import Page from './components/Page';
import { Typography, Divider, Grid } from '@mui/material';
import MuiTextField from '../../../components/TextField';
import MuiButton from '../../../components/Button';
const Personal = () => {
  return (
    <Page>
      <Grid container>
        <Grid item xs={12} md={12}>
          <Typography variant="h6">Personal Information: </Typography>
        </Grid>
        <Grid sx={{ mt: 2 }} item xs={12} md={4}>
          <MuiTextField disabled label="G Pace ID" id="code" type="text" name="code" value={237859555} />
        </Grid>
      </Grid>
      <Grid sx={{ mt: 1 }} container spacing={1}>
        <Grid sx={{ mt: 1 }} item xs={12} md={2}>
          <MuiTextField label="Prefix" id="code" type="text" name="code" value={'Mr'} />
        </Grid>
        <Grid sx={{ mt: 1 }} item xs={12} md={5}>
          <MuiTextField label="First Name" id="code" type="text" name="code" value={'Mark'} />
        </Grid>
        <Grid sx={{ mt: 1 }} item xs={12} md={5}>
          <MuiTextField label="Last Name" id="code" type="text" name="code" value={'Woods'} />
        </Grid>
      </Grid>
      <Grid sx={{ mt: 1 }} container spacing={1}>
        <Grid sx={{ mt: 1 }} item xs={12} md={6}>
          <MuiTextField label="Address Line 1" id="code" type="text" name="code" value={'John Street Business Park'} />
        </Grid>
        <Grid sx={{ mt: 1 }} item xs={12} md={6}>
          <MuiTextField label="Address Line 2" id="code" type="text" name="code" value={'Ardee'} />
        </Grid>
        <Grid sx={{ mt: 1 }} item xs={12} md={6}>
          <MuiTextField label="County" id="code" type="text" name="code" value={'Louth'} />
        </Grid>
        <Grid sx={{ mt: 1 }} item xs={12} md={6}>
          <MuiTextField label="Eircode" id="code" type="text" name="code" value={'A91 T2P3'} />
        </Grid>
        <Grid sx={{ mt: 1 }} item xs={12} md={6}>
          <MuiTextField label="Gender" id="code" type="text" name="code" value={'Male'} />
        </Grid>
        <Grid sx={{ mt: 1 }} item xs={12} md={6}>
          <MuiTextField label="DOB" id="code" type="text" name="code" value={'15/01/1991'} />
        </Grid>
        <Grid sx={{ mt: 1 }} item xs={12} md={6}>
          <MuiTextField label="Email address" id="code" type="text" name="code" value={'mark@heartrhythmireland.com'} />
        </Grid>
        <Grid sx={{ mt: 1 }} item xs={12} md={6}>
          <MuiTextField label="Mobile" id="code" type="text" name="code" value={'0877767940'} />
        </Grid>
      </Grid>
      <Divider sx={{ mt: 2, border: 0.5, color: '#437CAF' }} />
      <Grid sx={{ mt: 1 }} container spacing={1}>
        <Grid item xs={12} md={12}>
          <Typography variant="h6">Other medical information (if applicable)</Typography>
        </Grid>
        <Grid sx={{ mt: 1 }} item xs={12} md={12}>
          <MuiTextField label="Medical Conditions" id="code" type="text" name="code" value={''} />
        </Grid>
        <Grid sx={{ mt: 1 }} item xs={12} md={12}>
          <MuiTextField label="Allergies and reactions" id="code" type="text" name="code" value={''} />
        </Grid>
        <Grid sx={{ mt: 1 }} item xs={12} md={12}>
          <MuiTextField label="medication" id="code" type="text" name="code" value={''} />
        </Grid>
      </Grid>
      <Grid sx={{ mt: 1 }} container spacing={1}>
        <Grid item xs={12} md={4}></Grid>
        <Grid item xs={12} md={4}></Grid>
        <Grid sx={{ mt: 1 }} item xs={12} md={4}>
          <MuiButton type="submit" text="Update" />
        </Grid>
      </Grid>
    </Page>
  );
};

export default Personal;
