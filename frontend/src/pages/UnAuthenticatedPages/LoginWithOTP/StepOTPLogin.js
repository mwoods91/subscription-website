import React, { useState, useContext } from 'react';
import MuiTextField from '../../../components/TextField';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import axios from 'axios';
import { UserContext } from '../../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const StepOTPLogin = (props) => {
  const [state, setState] = useContext(UserContext);
  const { value, handleChange } = props;
  const navigate = useNavigate();

  const confirmOtp = async () => {
    try {
      const { data } = await axios.post('/verify-email', {
        email: `${value.email}`,
        otp: `${value.otp}`
        // password: values.password
      });
      console.log(data);

      setState(data);
      localStorage.setItem('auth', JSON.stringify(data));
      navigate('/my-id-card');
    } catch (err) {
      console.log(err);
    }
  };
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
                  <Typography variant="h4">OTP verification</Typography>
                </Grid>
              </Grid>
              <Grid sx={{ textAlign: 'center' }} container>
                <Grid item xs={12}>
                  <Typography variant="p">A verification code has been sent to your email</Typography>
                </Grid>
              </Grid>
              <Grid sx={{ mt: 2 }} container spacing={2}>
                <Grid item xs={12}>
                  <MuiTextField
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    label="OPT Verification"
                    id="otp"
                    name="otp"
                    type="text"
                    value={value.otp}
                    onChange={handleChange('otp')}
                  />
                </Grid>
              </Grid>
              <Grid sx={{ textAlign: 'center', mt: 3 }} container>
                <Grid item xs={12}>
                  <Button fullWidth variant="contained" onClick={confirmOtp}>
                    Verify OTP
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default StepOTPLogin;
