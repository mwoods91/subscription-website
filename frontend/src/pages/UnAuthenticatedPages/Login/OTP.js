import { useTheme } from '@mui/material/styles';
import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../contexts/UserContext';
import { toast } from 'react-hot-toast';
import MuiTextField from '../../../components/TextField';
import { Box, Container, Grid, TextField, Typography, Button } from '@mui/material';

const OTP = () => {
  const navigate = useNavigate();
  const [state, setState] = useContext(UserContext);
  const LoginImage = require('../../../assets/images/Login/login-image.jpeg');
  const theme = useTheme();

  const formik = useFormik({
    validateOnBlur: false,
    validateOnChange: false,
    initialValues: {
      otp: ''
      // password: '15011991Mw'
    },
    validate: (values) => {
      let errors = {};
      if (values.otp.trim() === '') {
        errors.otp = 'Require OTP';
      }
      // if (values.password.trim() === '') {
      //   errors.password = 'Require Password';
      // }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        const { data } = await axios.post('/verify-email', {
          otp: values.otp
          // password: values.password
        });
        if (values.error) {
          toast.error(values.error);
        } else {
          setState(data);
          localStorage.setItem('auth', JSON.stringify(data));
          navigate('/my-id-card');
        }
      } catch (err) {
        console.log(err);
        toast.error('Something went wrong. Try again');
      }
    }
  });
  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        overflow: 'hidden'
      }}
    >
      <Container paddingx={0} paddingy={0}>
        <Box display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} position={'relative'}>
          <Box width={1} order={{ xs: 2, md: 1 }} display={'flex'} alignItems={'center'}>
            <Container>
              <Grid sx={{ textAlign: 'center' }} container>
                <Grid item xs={12}>
                  <Typography variant="h6">OTP verification</Typography>
                </Grid>
              </Grid>
              <form validate={formik.validate} onSubmit={formik.handleSubmit}>
                <Grid sx={{ mt: 2 }} container spacing={2}>
                  <Grid item xs={12}>
                    <MuiTextField
                      inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                      label="OPT Verification"
                      id="otp"
                      name="otp"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.otp}
                      error={Boolean(formik.errors.otp)}
                      helperText={formik.errors.otp}
                    />
                    {/* <TextField
                      onChange={formik.handleChange}
                      value={formik.values.otp}
                      error={Boolean(formik.errors.otp)}
                      helperText={formik.errors.otp}
                      fullWidth
                      label="OTP Code"
                      InputLabelProps={{ shrink: true }}
                      type="number"
                      inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    /> */}
                  </Grid>
                </Grid>
                <Grid sx={{ textAlign: 'center', mt: 3 }} container>
                  <Grid item xs={12}>
                    <Button fullWidth variant="contained" type="submit">
                      Verify OTP
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Container>
          </Box>
          <Box
            sx={{
              flex: { xs: '0 0 100%', md: '0 0 50%' },
              position: 'relative',
              maxWidth: { xs: '100%', md: '50%' },
              order: { xs: 1, md: 2 },
              minHeight: { xs: 'auto', md: 'calc(100vh - 58px)' }
            }}
          >
            <Box
              sx={{
                width: { xs: 1, md: '50vw' },
                height: '100%',
                position: 'relative'
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden'
                }}
              >
                <Box
                  sx={{
                    overflow: 'hidden',
                    left: '0%',
                    width: 1,
                    height: 1,
                    position: { xs: 'relative', md: 'absolute' },
                    clipPath: {
                      xs: 'none',
                      md: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)'
                    },
                    shapeOutside: {
                      xs: 'none',
                      md: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)'
                    }
                  }}
                >
                  <Box
                    sx={{
                      height: { xs: 'auto', md: 1 },
                      '& img': {
                        objectFit: 'cover'
                      }
                    }}
                  >
                    <Box
                      component={'img'}
                      src={LoginImage}
                      height={{ xs: 'auto', md: 1 }}
                      maxHeight={{ xs: 300, md: 1 }}
                      width={1}
                      maxWidth={1}
                      sx={{ filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none' }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default OTP;
