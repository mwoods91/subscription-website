/* eslint-disable react/no-unescaped-entities */
import React, { useState, useContext } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, InputAdornment, Typography, Button } from '@mui/material/';
import { UserContext } from '../../../../contexts/UserContext';

//3rd party
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

//project imports
import MuiTextField from '../../../../components/TextField';

const Form = () => {
  const [state, setState] = useContext(UserContext);

  const [capsWarning, setCapsWarning] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onKeyDown = (keyEvent) => {
    if (keyEvent.getModifierState('CapsLock')) {
      setCapsWarning(true);
    } else {
      setCapsWarning(false);
    }
  };
  const navigate = useNavigate();
  const formik = useFormik({
    validateOnBlur: false,
    validateOnChange: false,
    initialValues: {
      client_reference_id: '237875695',
      fullname: 'Mark Woods',
      dob: '1991-01-15',
      email: 'markwoodsy1991@gmail.com',
      phone: '0877767940',
      password: '15011991Mw'
    },
    validate: (values) => {
      let errors = {};
      if (values.client_reference_id.trim() === '') {
        errors.client_reference_id = 'G Pace ID required. This is on your plastic ID card';
      }
      if (values.fullname.trim() === '') {
        errors.fullname = 'Full name required';
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
      if (values.password.trim() === '') {
        errors.password = 'Password required for account set up';
      }

      return errors;
    },
    onSubmit: async (values) => {
      try {
        await axios.post('http://localhost:5000/register', {
          client_reference_id: values.client_reference_id,
          fullname: values.fullname,
          dob: values.dob,
          email: values.email,
          phone: values.phone,
          password: values.password
        });
        console.log(values);
        if (values.error) {
          toast.error(values.error);
        } else {
          toast.success(`${values.firstname}. You have successsfully registered`);
          setState(values);
          localStorage.setItem('auth', JSON.stringify(values));
          navigate('/login');
        }
      } catch (err) {
        console.log(err);
        toast.error('Something went wrong. Try again');
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
        <Typography color="text.secondary">*Please use G Pace ID and DOB supplied on ID card issued to you *</Typography>
      </Box>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <MuiTextField
              label="G Pace ID"
              id="client_reference_id"
              type="text"
              name="client_reference_id"
              onChange={formik.handleChange}
              value={formik.values.client_reference_id}
              error={Boolean(formik.errors.client_reference_id)}
              helperText={formik.errors.client_reference_id}
            />
          </Grid>
        </Grid>
        <Grid sx={{ mt: 0.2 }} container spacing={2}>
          <Grid item xs={12} md={12}>
            <MuiTextField
              label="First Name"
              id="fullname"
              type="text"
              name="fullname"
              onChange={formik.handleChange}
              value={formik.values.fullname}
              error={Boolean(formik.errors.fullname)}
              helperText={formik.errors.fullname}
            />
          </Grid>

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
          <Grid item xs={12}>
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
          </Grid>

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
                Proceed to payment
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Form;
