import React from 'react';
import { Typography, Grid, Stack } from '@mui/material';
import Barcode from 'react-barcode';

const BackOfPlusCard = (props) => {
  const { userDetails } = props;

  return (
    <>
      {userDetails &&
        userDetails.map((item, index) => {
          return (
            <Grid key={index} container sx={{ p: 0.2, ml: 0.5 }}>
              <Grid item xs={6} md={6}>
                <Stack spacing={0.5} direction="row">
                  <Typography sx={{ fontWeight: 600, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '15px' } }} variant="h5">
                    Name:
                  </Typography>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '15px' } }} variant="h5">
                    {item.patient_record.fullname}
                  </Typography>
                </Stack>
                <Stack spacing={0.5} direction="row">
                  <Typography sx={{ fontWeight: 600, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '15px' } }} variant="h5">
                    DOB:
                  </Typography>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '15px' } }} variant="h5">
                    {item.patient_record.dob}
                  </Typography>
                </Stack>
                <Stack direction="row">
                  <Typography sx={{ fontWeight: 600, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '15px' } }} variant="h5">
                    Implant Center:
                  </Typography>
                </Stack>
                <Stack sx={{ mt: -0.4 }} direction="row">
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '15px' } }} variant="h5">
                    {item.implant_center}
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={3} md={3}>
                <Stack
                  spacing={0.5}
                  direction="row"
                  sx={{
                    ml: { xs: -4.5, md: 0 },
                    justifyContent: 'center',
                    textAlign: 'center',
                    mt: { xs: 2.5, md: 3.5 },
                    backgroundColor: '#000000',
                    width: { xs: '90%', md: '70%' }
                  }}
                >
                  <Typography
                    color="white"
                    sx={{ left: '-50%', display: 'flex', ml: 0.5, fontWeight: 500, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '16px' } }}
                    variant="h5"
                  >
                    {item.device_type}
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={3} md={3}>
                <Stack sx={{ ml: { xs: -5, md: 4.5 }, objectFit: 'contain' }} spacing={0.5} direction="column">
                  <Barcode width={1} height={40} textAlign="center" value={item.patient_record.client_reference_id} fontSize={10} />
                </Stack>
              </Grid>
            </Grid>
          );
        })}

      {userDetails &&
        userDetails.map((item, index) => {
          return (
            <Grid key={index} container sx={{ p: 0.2, ml: 0.5 }}>
              <Grid sx={{ mt: { xs: 0.3, md: 1 } }} item xs={7}>
                <Stack spacing={0.5} direction="row">
                  <Typography sx={{ fontWeight: 600, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '15px' } }} variant="h5">
                    Physician:
                  </Typography>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '15px' } }} variant="h5">
                    {item.Physician}
                  </Typography>
                </Stack>
              </Grid>
              <Grid sx={{ mt: { xs: 0.3, md: 1 } }} item xs={5}>
                <Stack spacing={0.5} direction="row">
                  <Typography sx={{ fontWeight: 600, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '15px' } }} variant="h5">
                    Phone:
                  </Typography>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '15px' } }} variant="h5">
                    {item.implant_phone}
                  </Typography>
                </Stack>
                <Stack spacing={0.5} direction="row">
                  <Typography sx={{ fontWeight: 600, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '15px' } }} variant="h5">
                    Implant Date:
                  </Typography>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '15px' } }} variant="h5">
                    {item.Implant_date}
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          );
        })}

      {userDetails &&
        userDetails.map((item, index) => {
          return (
            <Grid key={index} container sx={{ p: 0.2, ml: 0.5 }}>
              <Grid item xs={12}>
                <Stack spacing={0.5} direction="row">
                  <Typography sx={{ fontWeight: 600, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '15px' } }} variant="h5">
                    Diagnosis:
                  </Typography>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '15px' } }} variant="h5">
                    {item.patient_record.diagnosis}
                  </Typography>
                </Stack>
                <Stack spacing={0.5} direction="row">
                  <Typography sx={{ fontWeight: 600, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '15px' } }} variant="h5">
                    Indication:
                  </Typography>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '15px' } }} variant="h5">
                    {item.patient_record.indication}
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          );
        })}

      {userDetails &&
        userDetails.map((item, index) => {
          return (
            <Grid key={index} container sx={{ p: 0.2, mt: { xs: 0.3, md: 1 } }}>
              <Grid item xs={7} md={7.5}>
                <Stack spacing={0.5} sx={{ mt: 0.2, backgroundColor: '#000000', width: { xs: '90%', md: '75%' } }} direction="row">
                  <Typography color="white" sx={{ fontWeight: 600, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '15px' } }} variant="h5">
                    Manufacturer:
                  </Typography>
                  <Typography color="white" sx={{ fontWeight: 300, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '15px' } }} variant="h5">
                    {item.generator_manufacturer}
                  </Typography>
                </Stack>
                <Stack spacing={0.5} direction="row">
                  <Typography sx={{ fontWeight: 600, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '15px' } }} variant="h5">
                    Model Name:
                  </Typography>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '15px' } }} variant="h5">
                    {item.generator_model_name}
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={5} md={4.5}>
                <Stack sx={{ mt: 0.2 }} spacing={0.5} direction="row">
                  <Typography sx={{ fontWeight: 600, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '15px' } }} variant="h5">
                    Model
                  </Typography>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '15px' } }} variant="h5">
                    {item.generator_model_number}
                  </Typography>
                </Stack>
                <Stack spacing={0.5} direction="row">
                  <Typography sx={{ fontWeight: 600, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '15px' } }} variant="h5">
                    Serial No:
                  </Typography>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '15px' } }} variant="h5">
                    {item.generator_serial_number}
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          );
        })}

      <Grid container sx={{ mt: { xs: 0.1, md: 1 } }}>
        <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
        <Grid item xs={3.5} sm={2.75} md={2.75} lg={2.75}>
          <Typography sx={{ fontWeight: 600, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '16px' } }} variant="h5">
            Manufacturer
          </Typography>
        </Grid>
        <Grid item xs={2.75} sm={2.75} md={2.75} lg={2.75}>
          <Typography sx={{ fontWeight: 600, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '16px' } }} variant="h5">
            Model
          </Typography>
        </Grid>
        <Grid item xs={1.8} sm={2.75} md={2.75} lg={2.75}>
          <Typography sx={{ fontWeight: 600, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '16px' } }} variant="h5">
            Length(CM)
          </Typography>
        </Grid>
        <Grid item xs={2.95} sm={2.75} md={2.75} lg={2.75}>
          <Typography sx={{ fontWeight: 600, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '16px' } }} variant="h5">
            Serial
          </Typography>
        </Grid>
      </Grid>

      {userDetails &&
        userDetails.map((item, index) => {
          return (
            <Grid key={index} container>
              <Grid sx={{ mt: -0.3 }} item xs={1} sm={1} md={1} lg={1}>
                <Typography sx={{ fontWeight: 600, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '16px' } }} variant="h5">
                  RA:
                </Typography>
              </Grid>
              <Grid sx={{ mt: -0.3 }} item xs={3.5} sm={2.75} md={2.75} lg={2.75}>
                <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '14.5px' } }} variant="h5">
                  {item.atrial_manufacturer}
                </Typography>
              </Grid>
              <Grid sx={{ mt: -0.3 }} item xs={2.75} sm={2.75} md={2.75} lg={2.75}>
                <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '14.5px' } }} variant="h5">
                  {item.atrial_model_name}
                </Typography>
              </Grid>
              <Grid sx={{ mt: -0.3 }} item xs={1.8} sm={2.75} md={2.75} lg={2.75}>
                <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '14.5px' } }} variant="h5">
                  {item.atrial_length}
                </Typography>
              </Grid>
              <Grid sx={{ mt: -0.3 }} item xs={2.95} sm={2.75} md={2.75} lg={2.75}>
                <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '14.5px' } }} variant="h5">
                  {item.atrial_serial_number}
                </Typography>
              </Grid>
            </Grid>
          );
        })}

      {userDetails &&
        userDetails.map((item, index) => {
          return (
            <Grid key={index} container>
              <Grid sx={{ mt: -0.3 }} item xs={1} sm={1} md={1} lg={1}>
                <Typography sx={{ fontWeight: 600, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '16px' } }} variant="h5">
                  RV:
                </Typography>
              </Grid>
              <Grid sx={{ mt: -0.3 }} item xs={3.5} sm={2.75} md={2.75} lg={2.75}>
                <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '14.5px' } }} variant="h5">
                  {item.rv_manufacturer}
                </Typography>
              </Grid>
              <Grid sx={{ mt: -0.3 }} item xs={2.75} sm={2.75} md={2.75} lg={2.75}>
                <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '14.5px' } }} variant="h5">
                  {item.rv_model_name}
                </Typography>
              </Grid>
              <Grid sx={{ mt: -0.3 }} item xs={1.8} sm={2.75} md={2.75} lg={2.75}>
                <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '14.5px' } }} variant="h5">
                  {item.rv_length}
                </Typography>
              </Grid>
              <Grid sx={{ mt: -0.3 }} item xs={2.95} sm={2.75} md={2.75} lg={2.75}>
                <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '14.5px' } }} variant="h5">
                  {item.rv_serial_number}
                </Typography>
              </Grid>
            </Grid>
          );
        })}

      {userDetails &&
        userDetails.map((item, index) => {
          return (
            <Grid key={index} sx={{ mb: 1 }} container>
              <Grid sx={{ mt: -0.3 }} item xs={1} sm={1} md={1} lg={1}>
                <Typography sx={{ fontWeight: 600, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '16px' } }} variant="h5">
                  LV:
                </Typography>
              </Grid>
              <Grid sx={{ mt: -0.3 }} item xs={3.5} sm={2.75} md={2.75} lg={2.75}>
                <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '14.5px' } }} variant="h5">
                  {item.lv_manufacturer}
                </Typography>
              </Grid>
              <Grid sx={{ mt: -0.3 }} item xs={2.75} sm={2.75} md={2.75} lg={2.75}>
                <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '14.5px' } }} variant="h5">
                  {item.lv_model_name}
                </Typography>
              </Grid>
              <Grid sx={{ mt: -0.3 }} item xs={1.8} sm={2.75} md={2.75} lg={2.75}>
                <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '14.5px' } }} variant="h5">
                  {item.lv_length}
                </Typography>
              </Grid>
              <Grid sx={{ mt: -0.3 }} item xs={2.95} sm={2.75} md={2.75} lg={2.75}>
                <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '14.5px' } }} variant="h5">
                  {item.lv_serial_number}
                </Typography>
              </Grid>
            </Grid>
          );
        })}
    </>
  );
};

export default BackOfPlusCard;
