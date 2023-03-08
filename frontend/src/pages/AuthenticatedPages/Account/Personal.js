import { useState, useEffect, useContext } from 'react';
import * as React from 'react';
import Page from './components/Page';
import { Typography, Divider, Grid, MenuItem, TextField } from '@mui/material';
import MuiTextField from '../../../components/TextField';
import MuiButton from '../../../components/Button';
import { Prefix, County, Gender } from '../../../data';
import axios from 'axios';
import { UserContext } from '../../../contexts/UserContext';
import { toast } from 'react-hot-toast';

import 'react-toastify/dist/ReactToastify.css';

// third party
import { useFormik } from 'formik';

const Personal = () => {
  const [state, setState] = useContext(UserContext);
  const [formValues, setFormValues] = useState({});
  // const [dateValue, setDateValue] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('/profile');
        // const dateValue = response.data.dob;
        // const dateObj = new Date(dateValue);
        // const dateString = dateObj.toLocaleDateString('en-GB');
        // setDateValue(dateString);
        setFormValues(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    validateOnBlur: false,
    validateOnChange: false,
    initialValues: formValues || {
      prefix: '',
      fullname: '',
      address1: '',
      address2: '',
      county: '',
      eircode: '',
      dob: '',
      gender: '',
      email: '',
      phone: ''
    },

    validate: (values) => {
      let errors = {};
      if (values.fullname.trim() === '') {
        errors.fullname = 'Name Required';
      }
      if (values.address1.trim() === '') {
        errors.address1 = 'Address Line 1 required';
      }
      if (values.county.trim() === '') {
        errors.county = 'County required';
      }
      if (values.eircode.trim() === '') {
        errors.eircode = 'Eircode required';
      }
      if (values.dob.trim() === '') {
        errors.dob = 'Date of birth required';
      }
      if (values.email.trim() === '') {
        errors.email = 'Email required';
      }
      if (values.phone.trim() === '') {
        errors.phone = 'Phone required';
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        const response = await axios.put('/update-user', {
          prefix: values.prefix,
          fullname: values.fullname,
          address1: values.address1,
          address2: values.address2 || '',
          county: values.county,
          eircode: values.eircode,
          dob: values.dob,
          email: values.email,
          phone: values.phone,
          gender: values.gender
        });
        window.location.reload();
        const auth = JSON.parse(localStorage.getItem('auth'));
        auth.user = response;
        localStorage.setItem('auth', JSON.stringify(auth));
        setState(auth);
        toast.success('You have successfully updated your details', {
          duration: 4000,
          position: 'top-center'
        });
      } catch (error) {
        toast.error('Something went wrong updating your details', {
          duration: 4000,
          position: 'top-center'
        });
      }
    }
  });

  return (
    <Page>
      <form validate={formik.validate} onSubmit={formik.handleSubmit}>
        <Grid container>
          <Grid item xs={12} md={12}>
            <Typography variant="h6">Personal Information: </Typography>
          </Grid>
          <Grid sx={{ mt: 2 }} item xs={12} md={4}>
            <MuiTextField
              disabled
              label="HRI ID"
              id="client_reference_id"
              type="text"
              value={formik.values.client_reference_id || ''}
              name="client_reference_id"
              onChange={formik.handleChange}
            />
          </Grid>
        </Grid>

        <Grid sx={{ mt: 1 }} container spacing={1}>
          <Grid sx={{ mt: 1 }} item xs={12} md={2}>
            <TextField
              select
              sx={{ '& .MuiInputBase-root': { height: 29, Width: 100 } }}
              fullWidth
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              name="prefix"
              value={formik.values.prefix || ''}
              label="Prefix"
              onChange={formik.handleChange}
            >
              {Prefix.map((item) => (
                <MenuItem key={item.id} value={item.title}>
                  {item.title}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid sx={{ mt: 1 }} item xs={12} md={10}>
            <MuiTextField
              label="Full name"
              id="fullname"
              name="fullname"
              type="text"
              value={formik.values.fullname || ''}
              onChange={formik.handleChange}
              error={Boolean(formik.errors.fullname)}
              helperText={formik.errors.fullname}
            />
          </Grid>
        </Grid>
        <Grid sx={{ mt: 1 }} container spacing={1}>
          <Grid sx={{ mt: 1 }} item xs={12} md={6}>
            <MuiTextField
              label="Address Line 1"
              id="address1"
              type="text"
              name="address1"
              value={formik.values.address1 || ''}
              onChange={formik.handleChange}
              error={Boolean(formik.errors.address1)}
              helperText={formik.errors.address1}
            />
          </Grid>
          <Grid sx={{ mt: 1 }} item xs={12} md={6}>
            <MuiTextField
              label="Address Line 2"
              id="address2"
              type="text"
              name="address2"
              value={formik.values.address2 || ''}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid sx={{ mt: 1 }} item xs={12} md={6}>
            <TextField
              select
              sx={{ '& .MuiInputBase-root': { height: 29, Width: 100 } }}
              fullWidth
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              name="county"
              value={formik.values.county || ''}
              label="County"
              onChange={formik.handleChange}
              error={Boolean(formik.errors.county)}
              helperText={formik.errors.county}
            >
              {County.map((item) => (
                <MenuItem key={item.id} value={item.county}>
                  {item.county}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid sx={{ mt: 1 }} item xs={12} md={6}>
            <MuiTextField
              label="Eircode"
              id="eircode"
              type="text"
              name="eircode"
              value={formik.values.eircode || ''}
              onChange={formik.handleChange}
              error={Boolean(formik.errors.eircode)}
              helperText={formik.errors.eircode}
            />
          </Grid>
          <Grid sx={{ mt: 1 }} item xs={12} md={6}>
            <TextField
              select
              sx={{ '& .MuiInputBase-root': { height: 29, Width: 100 } }}
              fullWidth
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              name="gender"
              id="gender"
              value={formik.values.gender || ''}
              label="Gender"
              onChange={formik.handleChange}
              error={Boolean(formik.errors.gender)}
              helperText={formik.errors.gender}
            >
              {Gender.map((item) => (
                <MenuItem key={item.id} value={item.title}>
                  {item.title}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid sx={{ mt: 1 }} item xs={12} md={6}>
            <MuiTextField
              label="DOB"
              id="dob"
              type="text"
              name="dob"
              value={formik.values.dob || ''}
              onChange={formik.handleChange}
              error={Boolean(formik.errors.dob)}
              helperText={formik.errors.dob}
            />
          </Grid>
          <Grid sx={{ mt: 1 }} item xs={12} md={6}>
            <MuiTextField
              label="Email address"
              id="email"
              type="text"
              name="email"
              value={formik.values.email || ''}
              onChange={formik.handleChange}
              error={Boolean(formik.errors.email)}
              helperText={formik.errors.email}
            />
          </Grid>
          <Grid sx={{ mt: 1 }} item xs={12} md={6}>
            <MuiTextField
              label="Mobile"
              id="phone"
              type="text"
              name="phone"
              value={formik.values.phone || ''}
              onChange={formik.handleChange}
              error={Boolean(formik.errors.phone)}
              helperText={formik.errors.phone}
            />
          </Grid>
        </Grid>
        <Divider sx={{ mt: 2, border: 0.5, color: '#437CAF' }} />
        <Grid sx={{ mt: 1 }} container spacing={1}>
          <Grid item xs={12} md={12}>
            <Typography variant="h6">Other medical information (if applicable)</Typography>
          </Grid>
          <Grid sx={{ mt: 1 }} item xs={12} md={12}>
            <MuiTextField disabled label="Diagnosis" id="diagnosis" type="text" name="diagnosis" value={formik.values.diagnosis || ''} />
          </Grid>
          <Grid sx={{ mt: 1 }} item xs={12} md={12}>
            <MuiTextField
              disabled
              label="Indication"
              id="indication"
              type="text"
              name="indication"
              value={formik.values.indication || ''}
            />
          </Grid>
        </Grid>
        <Grid sx={{ mt: 1 }} container spacing={1}>
          <Grid item xs={12} md={4}></Grid>
          <Grid item xs={12} md={4}></Grid>
          <Grid sx={{ mt: 1 }} item xs={12} md={4}>
            <MuiButton type="submit" text="Update" />
          </Grid>
        </Grid>
      </form>
    </Page>
  );
};

export default Personal;
