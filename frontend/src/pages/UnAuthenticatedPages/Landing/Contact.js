import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

//material ui
import { Container, Grid, Typography, TextField, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

//3rd party
import Iframe from 'react-iframe';
// third party
import { useFormik } from 'formik';
import useMediaQuery from '@mui/material/useMediaQuery';

const Contact = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down('md'), {
    defaultMatches: true
  });
  const form = useRef();
  const formik = useFormik({
    validateOnBlur: false,
    validateOnChange: false,
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
    validate: (values) => {
      let errors = {};

      if (values.name.trim() === '') {
        errors.name = 'Require Name';
      }
      if (values.email.trim() === '') {
        errors.email = 'Your Email address is required';
      }
      if (values.subject.trim() === '') {
        errors.subject = 'The subject is required';
      }
      if (values.message.trim() === '') {
        errors.message = 'You must enter a message';
      }
      return errors;
    },

    onSubmit: (values, { resetForm }) => {
      emailjs.sendForm('service_j2zednb', 'template_sggoz16', form.current, 'vsgTQoLSwj3ghgMTD').then(
        (result) => {
          alert('SUCCESS: Your form has been submitted', result);
        },
        (error) => {
          alert('ERROR: Your request has not been submitted', error);
        }
      );
      resetForm();
    }
  });

  return (
    <Container sx={{ p: 3, mt: 5, bgcolor: 'white' }}>
      <Grid container alignItems="left" justifyContent="space-between" spacing={2} sx={{ pt: { md: 0, xs: 8 }, pb: { md: 0, xs: 5 } }}>
        {' '}
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12}>
              {isMd ? (
                <Iframe
                  url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9413.769946498172!2d-6.553578267778639!3d53.85277923853141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48674a50100127d3%3A0x28c97b4a25b16dfd!2sMulladrillen%2C%20Co.%20Louth%2C%20A92%20W540!5e0!3m2!1sen!2sie!4v1663157225047!5m2!1sen!2sie"
                  width="100%"
                  height="100%"
                  frameBorder={5}
                />
              ) : (
                <Iframe
                  url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9413.769946498172!2d-6.553578267778639!3d53.85277923853141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48674a50100127d3%3A0x28c97b4a25b16dfd!2sMulladrillen%2C%20Co.%20Louth%2C%20A92%20W540!5e0!3m2!1sen!2sie!4v1663157225047!5m2!1sen!2sie"
                  width="100%"
                  height="200%"
                  frameBorder="0"
                />
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <Grid item xs={12}>
            <Typography
              variant="h1"
              color={theme.palette.text.primary}
              sx={{
                fontSize: { xs: '1.825rem', sm: '2rem', md: '2.4rem' },
                fontWeight: 500,
                lineHeight: { xs: 1.3, sm: 1.3, md: 1.3 }
              }}
            >
              <span>Contact Us </span>
            </Typography>
            <Typography sx={{ mt: 1 }} variant="h6" color={theme.palette.text.secondary}>
              If you have any questions you would like to ask us, fill in the form and we will get back to you as soon as possible
            </Typography>
            <form validate={formik.validate} onSubmit={formik.handleSubmit} ref={form}>
              <Grid sx={{ mt: 2 }} item xs={12} sm={12} md={12} lg={12}>
                <Grid sx={{ display: 'flex', mt: 1.5 }} item xs={12} sm={12} md={12}>
                  <Grid item xs={12} sm={6} md={12}>
                    <TextField
                      fullWidth
                      name="name"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                      error={Boolean(formik.errors.name)}
                      helperText={formik.errors.name}
                      InputLabelProps={{ shrink: true }}
                      variant="outlined"
                      label="Name"
                    />
                  </Grid>
                  <Grid sx={{ ml: 1 }} item xs={12} sm={6} md={12}>
                    <TextField
                      fullWidth
                      name="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      error={Boolean(formik.errors.email)}
                      helperText={formik.errors.email}
                      InputLabelProps={{ shrink: true }}
                      variant="outlined"
                      label="Email Address"
                    />
                  </Grid>
                </Grid>
                <Grid sx={{ display: 'flex', mt: 1.5 }} item xs={12} sm={12} md={12}>
                  <Grid item xs={12} sm={12} md={12}>
                    <TextField
                      fullWidth
                      name="subject"
                      onChange={formik.handleChange}
                      value={formik.values.subject}
                      error={Boolean(formik.errors.subject)}
                      helperText={formik.errors.subject}
                      InputLabelProps={{ shrink: true }}
                      variant="outlined"
                      label="Subject"
                    />
                  </Grid>
                </Grid>
                <Grid sx={{ display: 'flex', mt: 1.5 }} item xs={12} sm={12} md={12}>
                  <Grid item xs={12} sm={12} md={12}>
                    <TextField
                      multiline
                      fullWidth
                      name="message"
                      onChange={formik.handleChange}
                      value={formik.values.message}
                      error={Boolean(formik.errors.message)}
                      helperText={formik.errors.message}
                      InputLabelProps={{ shrink: true }}
                      variant="outlined"
                      label="Message"
                    />
                  </Grid>
                </Grid>
                <Grid sx={{ display: 'flex', mt: 1.5 }} item xs={12} sm={12} md={12}>
                  <Grid item xs={12} sm={12} md={12} lg={4}>
                    <Button type="submit" fullWidth variant="contained">
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
