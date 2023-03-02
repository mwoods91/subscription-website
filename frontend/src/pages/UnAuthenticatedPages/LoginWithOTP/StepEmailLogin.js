/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import axios from 'axios';
import { Stack } from '@mui/material';
import MuiTextField from '../../../components/TextField';
import MuiButton from '../../../components/Button';

const StepEmailLogin = (props) => {
  const { value, handleChange } = props;

  const Continue = async (e) => {
    const { data } = await axios.post('/send-otp', {
      email: `${value.email}`
      // password: values.password
    });
    console.log(data);
    props.nextStep();
  };
  return (
    <>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700
          }}
        >
          Welcome back
        </Typography>
        <Typography color="text.secondary">Login to manage your account.</Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack spacing={1}>
            <MuiTextField label="Email" id="email" type="email" name="email" value={value.email} onChange={handleChange('email')} />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          {/* <Typography sx={{ textAlign: 'right', mt: 0, mb: 1 }} variant={'subtitle2'}>
          <Link component={'a'} color={'primary'} href={'/password-reset'} underline={'none'}>
            Forgot your password?
          </Link>
        </Typography> */}
          <MuiButton type="button" text="Login to HRI+ Portal" onClick={Continue} />
          <Box marginBottom={{ xs: 1, sm: 0 }}>
            <Typography sx={{ textAlign: 'center', mt: 1, mb: 1 }} variant={'subtitle2'}>
              Don't have an account yet?{' '}
              <Link component={'a'} color={'primary'} href={'/'} underline={'none'}>
                Sign up here.
              </Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default StepEmailLogin;
