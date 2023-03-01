import React from 'react';
import { useFormik } from 'formik';
import { Box, Grid, Button, Typography, Link } from '@mui/material';
import MuiTextField from '../../../components/TextField';

const Form = () => {
  const formik = useFormik({
    validateOnBlur: false,
    validateOnChange: false,
    initialValues: {
      mobile: '',
      password: ''
    },
    validate: (values) => {
      let errors = {};
      let code = values.code.trim();
      if (code === '' || isNaN(code)) {
        errors.code = 'Invalid Hospital Code';
      }
      if (values.name.trim() === '') {
        errors.name = 'Require Name';
      }
      if (values.password.trim() === '') {
        errors.password = 'Require Password';
      }
      return errors;
    },
    onSubmit: (values) => {
      console.log(values);
      //   navigate('/record-enquiry');
    }
  });
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium'
          }}
          gutterBottom
          color={'text.secondary'}
        >
          Recover account
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700
          }}
        >
          Forgot your password?
        </Typography>
        <Typography color="text.secondary">Enter your email address below and we'll get you back on track.</Typography>
      </Box>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <MuiTextField
              label="Email Address"
              id="number"
              type="email"
              name="number"
              onChange={formik.handleChange}
              value={formik.values.number}
              error={Boolean(formik.errors.number)}
              helperText={formik.errors.number}
            />
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
              <Box marginBottom={{ xs: 1, sm: 0 }}>
                <Button size={'large'} variant={'outlined'} component={Link} href={'/login'} fullWidth>
                  Back to login
                </Button>
              </Box>
              <Button size={'large'} variant={'contained'} type={'submit'}>
                Send reset link
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Form;
