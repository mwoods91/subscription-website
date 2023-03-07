import React, { useRef, useEffect } from 'react';
import { Typography, Box, Grid, Stack } from '@mui/material';
import Barcode from 'react-barcode';

const BackOfPlusCard = (props) => {
  console.log(props);

  return (
    <>
      <Grid container sx={{ p: 0.2, ml: 0.5 }}>
        <Grid item xs={6} md={6}>
          <Stack spacing={0.5} direction="row">
            <Typography sx={{ fontWeight: 600, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '15px' } }} variant="h5">
              Name:
            </Typography>
            <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '15px' } }} variant="h5">
              Mark Woods
            </Typography>
          </Stack>
          <Stack spacing={0.5} direction="row">
            <Typography sx={{ fontWeight: 600, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '15px' } }} variant="h5">
              DOB:
            </Typography>
            <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '15px' } }} variant="h5">
              15/01/1991
            </Typography>
          </Stack>
          <Stack direction="row">
            <Typography sx={{ fontWeight: 600, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '15px' } }} variant="h5">
              Implant Center:
            </Typography>
          </Stack>
          <Stack sx={{ mt: -0.4 }} direction="row">
            <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '15px' } }} variant="h5">
              Beaumont Hospital Dublin
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
              Pacemaker
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={3} md={3}>
          <Stack sx={{ ml: { xs: -5, md: 4.5 }, objectFit: 'contain' }} spacing={0.5} direction="column">
            <Barcode width={1} height={40} textAlign="center" value="237856955" fontSize={10} />
          </Stack>
        </Grid>
      </Grid>
      <Grid container sx={{ p: 0.2, ml: 0.5 }}>
        <Grid sx={{ mt: 0.3 }} item xs={7}>
          <Stack spacing={0.5} direction="row">
            <Typography sx={{ fontWeight: 600, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '15px' } }} variant="h5">
              Physician:
            </Typography>
            <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '15px' } }} variant="h5">
              Dr Joseph Galvin
            </Typography>
          </Stack>
        </Grid>
        <Grid sx={{ mt: 0.3 }} item xs={5}>
          <Stack spacing={0.5} direction="row">
            <Typography sx={{ fontWeight: 600, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '15px' } }} variant="h5">
              Phone:
            </Typography>
            <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '15px' } }} variant="h5">
              01 685565
            </Typography>
          </Stack>
          <Stack spacing={0.5} direction="row">
            <Typography sx={{ fontWeight: 600, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '15px' } }} variant="h5">
              Implant Date:
            </Typography>
            <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '15px' } }} variant="h5">
              15/01/1991
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <Grid container sx={{ p: 0.2, ml: 0.5 }}>
        <Grid item xs={12}>
          <Stack spacing={0.5} direction="row">
            <Typography sx={{ fontWeight: 600, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '15px' } }} variant="h5">
              Diagnosis:
            </Typography>
            <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '15px' } }} variant="h5">
              AV Block
            </Typography>
          </Stack>
          <Stack spacing={0.5} direction="row">
            <Typography sx={{ fontWeight: 600, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '15px' } }} variant="h5">
              Indication:
            </Typography>
            <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '15px' } }} variant="h5">
              History of A-Fib
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <Grid container sx={{ p: 0.2, ml: 0.5 }}>
        <Grid item xs={7} md={7.5}>
          <Stack spacing={0.5} sx={{ mt: 0.2, backgroundColor: '#000000', width: { xs: '90%', md: '75%' } }} direction="row">
            <Typography color="white" sx={{ fontWeight: 600, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '15px' } }} variant="h5">
              Manufacturer:
            </Typography>
            <Typography color="white" sx={{ fontWeight: 300, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '15px' } }} variant="h5">
              Boston Scientific
            </Typography>
          </Stack>
          <Stack spacing={0.5} direction="row">
            <Typography sx={{ fontWeight: 600, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '15px' } }} variant="h5">
              Model Name:
            </Typography>
            <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '15px' } }} variant="h5">
              ADVISA DR MRI
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={5} md={4.5}>
          <Stack sx={{ mt: 0.2 }} spacing={0.5} direction="row">
            <Typography sx={{ fontWeight: 600, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '15px' } }} variant="h5">
              Model
            </Typography>
            <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '15px' } }} variant="h5">
              WSDR01
            </Typography>
          </Stack>
          <Stack spacing={0.5} direction="row">
            <Typography sx={{ fontWeight: 600, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '15px' } }} variant="h5">
              Name:
            </Typography>
            <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '15px' } }} variant="h5">
              RXU2356565
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <Grid sx={{ mt: 0.1 }} container>
        <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
        <Grid item xs={3.5} sm={2.75} md={2.75} lg={2.75}>
          <Typography sx={{ fontWeight: 600, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '16px' } }} variant="h5">
            Manufacturer
          </Typography>
        </Grid>
        <Grid item xs={2.75} sm={2.75} md={2.75} lg={2.75}>
          <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '16px' } }} variant="h5">
            Model
          </Typography>
        </Grid>
        <Grid item xs={1.8} sm={2.75} md={2.75} lg={2.75}>
          <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '16px' } }} variant="h5">
            Length(CM)
          </Typography>
        </Grid>
        <Grid item xs={2.95} sm={2.75} md={2.75} lg={2.75}>
          <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '16px' } }} variant="h5">
            Serial
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid sx={{ mt: -0.3 }} item xs={1} sm={1} md={1} lg={1}>
          <Typography sx={{ fontWeight: 600, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '16px' } }} variant="h5">
            RA:
          </Typography>
        </Grid>
        <Grid sx={{ mt: -0.3 }} item xs={3.5} sm={2.75} md={2.75} lg={2.75}>
          <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '14.5px' } }} variant="h5">
            Boston Scientific
          </Typography>
        </Grid>
        <Grid sx={{ mt: -0.3 }} item xs={2.75} sm={2.75} md={2.75} lg={2.75}>
          <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '14.5px' } }} variant="h5">
            4569M
          </Typography>
        </Grid>
        <Grid sx={{ mt: -0.3 }} item xs={1.8} sm={2.75} md={2.75} lg={2.75}>
          <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '14.5px' } }} variant="h5">
            93
          </Typography>
        </Grid>
        <Grid sx={{ mt: -0.3 }} item xs={2.95} sm={2.75} md={2.75} lg={2.75}>
          <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '14.5px' } }} variant="h5">
            PXS265355
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid sx={{ mt: -0.3 }} item xs={1} sm={1} md={1} lg={1}>
          <Typography sx={{ fontWeight: 600, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '16px' } }} variant="h5">
            RV:
          </Typography>
        </Grid>
        <Grid sx={{ mt: -0.3 }} item xs={3.5} sm={2.75} md={2.75} lg={2.75}>
          <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '14.5px' } }} variant="h5">
            Boston Scientific
          </Typography>
        </Grid>
        <Grid sx={{ mt: -0.3 }} item xs={2.75} sm={2.75} md={2.75} lg={2.75}>
          <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '14.5px' } }} variant="h5">
            4569M
          </Typography>
        </Grid>
        <Grid sx={{ mt: -0.3 }} item xs={1.8} sm={2.75} md={2.75} lg={2.75}>
          <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '14.5px' } }} variant="h5">
            93
          </Typography>
        </Grid>
        <Grid sx={{ mt: -0.3 }} item xs={2.95} sm={2.75} md={2.75} lg={2.75}>
          <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '14.5px' } }} variant="h5">
            PXS265355
          </Typography>
        </Grid>
      </Grid>
      <Grid sx={{ mb: 1 }} container>
        <Grid sx={{ mt: -0.3 }} item xs={1} sm={1} md={1} lg={1}>
          <Typography sx={{ fontWeight: 600, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '16px' } }} variant="h5">
            LV:
          </Typography>
        </Grid>
        <Grid sx={{ mt: -0.3 }} item xs={3.5} sm={2.75} md={2.75} lg={2.75}>
          <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '14.5px' } }} variant="h5">
            Boston Scientific
          </Typography>
        </Grid>
        <Grid sx={{ mt: -0.3 }} item xs={2.75} sm={2.75} md={2.75} lg={2.75}>
          <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '14.5px' } }} variant="h5">
            4569M
          </Typography>
        </Grid>
        <Grid sx={{ mt: -0.3 }} item xs={1.8} sm={2.75} md={2.75} lg={2.75}>
          <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '14.5px' } }} variant="h5">
            93
          </Typography>
        </Grid>
        <Grid sx={{ mt: -0.3 }} item xs={2.95} sm={2.75} md={2.75} lg={2.75}>
          <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.70rem', sm: '0.8rem', md: '14.5px' } }} variant="h5">
            PXS265355
          </Typography>
        </Grid>
      </Grid>

      {/* {props.userDetails &&
        props.userDetails.map((item, index) => {
          return (
            <>
              <Box key={index}>
                <Box sx={{ position: 'absolute', mt: { xs: -27.2, md: -47.8 }, ml: { xs: 5.2, md: 9 } }}>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '1.1rem' } }} variant="h5">
                    {item.patient_record.fullname}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -25.4, md: -44.8 }, ml: { xs: 4.5, md: 9 } }}>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.8rem' } }} variant="h5">
                    {item.patient_record.dob}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -23.5, md: -42 }, ml: { xs: 34, md: 63 } }}>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.6rem', sm: '0.8rem', md: '0.8rem' } }} variant="h5">
                    {item.patient_record.client_reference_id}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -24.8, md: -44 }, ml: { xs: 25, md: 44.5 } }}>
                  <Typography color="white" sx={{ fontWeight: 300, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.8rem' } }} variant="h5">
                    {item.device_type}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -21.7, md: -38.5 }, ml: { xs: 0.5, md: 1 } }}>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.8rem' } }} variant="h5">
                    {item.implant_center}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -20, md: -35.5 }, ml: { xs: 30, md: 53 } }}>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.8rem' } }} variant="h5">
                    {item.implant_phone}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -18.3, md: -32.5 }, ml: { xs: 34, md: 60 } }}>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.8rem' } }} variant="h5">
                    {item.Implant_date}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -19.8, md: -35 }, ml: { xs: 7.7, md: 14 } }}>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.8rem' } }} variant="h5">
                    {item.Physician}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -17.4, md: -30.5 }, ml: { xs: 8, md: 14 } }}>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.8rem' } }} variant="h5">
                    {item.patient_record.diagnosis}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -15.6, md: -27.5 }, ml: { xs: 8, md: 14 } }}>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.8rem' } }} variant="h5">
                    {item.patient_record.indication}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -12.5, md: -22 }, ml: { xs: 10, md: 18.5 } }}>
                  <Typography color="white" sx={{ fontWeight: 300, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.8rem' } }} variant="h5">
                    {item.generator_manufacturer}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -12.5, md: -20 }, ml: { xs: 33.5, md: 55 } }}>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '1rem' } }} variant="h5">
                    {item.generator_model_number}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -10.5, md: -16.5 }, ml: { xs: 9.5, md: 15.5 } }}>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '1rem' } }} variant="h5">
                    {item.generator_model_name}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -10.5, md: -16.5 }, ml: { xs: 33.4, md: 54.8 } }}>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '1rem' } }} variant="h5">
                    {item.generator_serial_number}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -6.5, md: -10 }, ml: { xs: 2.9, md: 5.5 } }}>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '1rem' } }} variant="h5">
                    {item.atrial_manufacturer}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -5, md: -7.6 }, ml: { xs: 2.9, md: 5.5 } }}>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '1rem' } }} variant="h5">
                    {item.rv_manufacturer}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -3.4, md: -5.2 }, ml: { xs: 2.9, md: 5.5 } }}>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '1rem' } }} variant="h5">
                    {item.lv_manufacturer}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -6.5, md: -10 }, ml: { xs: 15.5, md: 24.5 } }}>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '1rem' } }} variant="h5">
                    {item.atrial_model_name}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -5, md: -7.6 }, ml: { xs: 15.5, md: 24.5 } }}>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '1rem' } }} variant="h5">
                    {item.rv_model_name}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -3.4, md: -5.2 }, ml: { xs: 15.5, md: 24.5 } }}>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '1rem' } }} variant="h5">
                    {item.lv_model_name}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -6.5, md: -10 }, ml: { xs: 26, md: 42 } }}>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.8rem', sm: '0.8rem', md: '1rem' } }} variant="h5">
                    {item.atrial_length}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -5, md: -7.6 }, ml: { xs: 26, md: 42 } }}>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.8rem', sm: '0.8rem', md: '1rem' } }} variant="h5">
                    {item.rv_length}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -3.4, md: -5.2 }, ml: { xs: 26, md: 42 } }}>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.8rem', sm: '0.8rem', md: '1rem' } }} variant="h5">
                    {item.lv_length}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -6.5, md: -10 }, ml: { xs: 32.5, md: 54 } }}>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '1rem' } }} variant="h5">
                    {item.atrial_serial_number}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -5, md: -7.6 }, ml: { xs: 32.5, md: 54 } }}>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '1rem' } }} variant="h5">
                    {item.rv_serial_number}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -3.4, md: -5.2 }, ml: { xs: 32.5, md: 54 } }}>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '1rem' } }} variant="h5">
                    {item.lv_serial_number}
                  </Typography>
                </Box>{' '}
              </Box>
            </>
          );
        })} */}
    </>
  );
};

export default BackOfPlusCard;
