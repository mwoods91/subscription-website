/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Typography, Button } from '@mui/material/';
import { UserContext } from '../../../../contexts/UserContext';
// import DatePicker from 'react-mobile-datepicker';
//3rd party

//project imports
import MuiTextField from '../../../../components/TextField';

const Form = () => {
  const [state, setState] = useContext(UserContext);

  const navigate = useNavigate();
  const formik = useFormik({
    validateOnBlur: false,
    validateOnChange: false,
    initialValues: {
      client_reference_id: '',
      dob: '',
      fullname: '',
      email: '',
      phone: ''
      // password: ''
    },
    validate: (values) => {
      let errors = {};
      if (values.client_reference_id.trim() === '') {
        errors.client_reference_id = 'G Pace ID required. This is on your plastic ID card';
      }

      if (values.dob.trim() === '') {
        errors.dob = 'DOB required';
      }
      if (values.phone.trim() === '') {
        errors.phone = 'Mobile number required';
      }
      if (values.email.trim() === '') {
        errors.email = 'Email address required';
      }

      return errors;
    },
    onSubmit: async (values) => {
      try {
        await axios.post('/register', {
          client_reference_id: values.client_reference_id,
          dob: values.dob,
          fullname: values.fullname,
          email: values.email,
          phone: values.phone
        });
        if (values.error) {
          toast.error(values.error);
        } else {
          toast.error('Congratulations, Your account is set up', {
            duration: 6000,
            position: 'top-center'
          });
          setState(values);
          localStorage.setItem('auth', JSON.stringify(values));
          navigate('/login');
        }
      } catch (err) {
        console.log(err);
        toast.error(err.response.data.error, {
          duration: 6000,
          position: 'top-center'
        });
      }
    }
  });
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700
          }}
        >
          Register with HRI PLUS today
        </Typography>
        <Typography color="text.secondary">
          *Please use HRI ID and DOB supplied on the ID card issued to you so we can check if your account exists*
        </Typography>
      </Box>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <MuiTextField
              label="HRI ID"
              id="client_reference_id"
              type="text"
              name="client_reference_id"
              onChange={formik.handleChange}
              value={formik.values.client_reference_id}
              error={Boolean(formik.errors.client_reference_id)}
              helperText={formik.errors.client_reference_id}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <MuiTextField
              label="DOB"
              id="dob"
              type="date"
              name="dob"
              onChange={formik.handleChange}
              value={formik.values.dob}
              error={Boolean(formik.errors.dob)}
              helperText={formik.errors.dob}
            />
          </Grid>

          <Grid item xs={12}>
            <MuiTextField
              label="Full name"
              id="fullname"
              type="text"
              name="fullname"
              onChange={formik.handleChange}
              value={formik.values.fullname}
              error={Boolean(formik.errors.fullname)}
              helperText={formik.errors.fullname}
            />
          </Grid>
        </Grid>
        <Grid sx={{ mt: 0.2 }} container spacing={2}>
          <Grid item xs={12} md={6}>
            <MuiTextField
              label="Mobile Number"
              id="phone"
              type="text"
              name="phone"
              onChange={formik.handleChange}
              value={formik.values.phone}
              error={Boolean(formik.errors.phone)}
              helperText={formik.errors.phone}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <MuiTextField
              label="Email Address"
              id="email"
              type="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={Boolean(formik.errors.email)}
              helperText={formik.errors.email}
            />
          </Grid>

          {/* <Grid item xs={12}>
            <MuiTextField
              name="password"
              label="Password"
              color={capsWarning ? 'warning' : 'primary'}
              id="-password-login"
              type={showPassword ? 'text' : 'password'}
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={(event) => {
                setCapsWarning(false);
              }}
              error={Boolean(formik.errors.password)}
              helperText={formik.errors.password}
              onKeyDown={onKeyDown}
              InputProps={{
                endAdornment: (
                  <InputAdornment sx={{ cursor: 'pointer' }} onClick={handleClickShowPassword} position="end">
                    {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                  </InputAdornment>
                )
              }}
            />
            {capsWarning && !formik.errors.password && (
              <Typography variant="caption" sx={{ color: 'warning.main' }} id="warning-helper-text-password-login">
                Caps lock on!
              </Typography>
            )}
          </Grid> */}

          <Grid item container xs={12}>
            <Box
              display="flex"
              flexDirection={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'stretched', sm: 'center' }}
              justifyContent={'space-between'}
              width={1}
              maxWidth={600}
              margin={'0 auto'}
            >
              <Button size={'large'} variant={'contained'} type={'submit'}>
                Proceed to account
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Form;
