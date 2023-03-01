/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Stack, InputAdornment } from '@mui/material';
import MuiTextField from '../../../components/TextField';
import MuiButton from '../../../components/Button';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { UserContext } from '../../../contexts/UserContext';
// import { useAuthContext } from '../../../hooks/useAuthContext';

const Form = () => {
  // const { dispatch } = useAuthContext();
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
      email: 'markwoods9@hotmail.com'
      // password: '15011991Mw'
    },
    validate: (values) => {
      let errors = {};
      if (values.email.trim() === '') {
        errors.email = 'Require Email';
      }

      return errors;
    },
    onSubmit: async (values) => {
      try {
        const { data } = await axios.post('/login', {
          email: values.email
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
      <form validate={formik.validate} onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Stack spacing={1}>
              <MuiTextField
                label="Email"
                id="email"
                type="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                error={Boolean(formik.errors.email)}
                helperText={formik.errors.email}
              />
            </Stack>
          </Grid>
          {/* <Grid item xs={12}>
            <Stack spacing={1}>
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
            </Stack>
          </Grid> */}
          <Grid item xs={12}>
            {/* <Typography sx={{ textAlign: 'right', mt: 0, mb: 1 }} variant={'subtitle2'}>
              <Link component={'a'} color={'primary'} href={'/password-reset'} underline={'none'}>
                Forgot your password?
              </Link>
            </Typography> */}
            <MuiButton type="submit" text="Login to HRI+ Portal" />
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
      </form>
      {/* <form validate={formik.validate} onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Stack spacing={1}>
              <MuiTextField
                label="Mobile Number"
                id="code"
                type="text"
                name="code"
                onChange={formik.handleChange}
                value={formik.values.code}
                error={Boolean(formik.errors.code)}
                helperText={formik.errors.code}
              />
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={1}>
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
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Typography sx={{ textAlign: 'right', mt: 0, mb: 1 }} variant={'subtitle2'}>
              <Link component={'a'} color={'primary'} href={'/password-reset'} underline={'none'}>
                Forgot your password?
              </Link>
            </Typography>
            <MuiButton type="submit" text="MyHRI+ Login" />
            <Box marginBottom={{ xs: 1, sm: 0 }}>
              <Typography sx={{ textAlign: 'center', mt: 1, mb: 1 }} variant={'subtitle2'}>
                Don't have an account yet?{' '}
                <Link component={'a'} color={'primary'} href={'/register'} underline={'none'}>
                  Sign up here.
                </Link>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </form> */}
    </>
  );
};

export default Form;
