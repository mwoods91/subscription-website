import React, { useState } from 'react';
import Page from './components/Page';
//material ui
import {
  Grid,
  Stack,
  TextField,
  InputAdornment,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Box,
  Typography,
  FormHelperText
} from '@mui/material';

//3rd party
import * as Yup from 'yup';
import { Formik } from 'formik';

//assets
import { CheckOutlined, EyeTwoTone, EyeInvisibleTwoTone, CloseOutlined } from '@ant-design/icons';

//project imports
import MainCard from '../../../components/MainCard';
import SnackbarMessage from '../../../components/Snackbar';

const PasswordReset = () => {
  function isLowercaseChar(value) {
    return new RegExp('^(?=.*[a-z]).+$').test(value);
  }

  function isUppercaseChar(value) {
    return new RegExp('^(?=.*[A-Z]).+$').test(value);
  }

  function isNumber(value) {
    return new RegExp('^(?=.*[0-9]).+$').test(value);
  }

  const [snackbar, setSnackBar] = useState({
    open: false,
    close: true,
    actionButton: false,
    alert: { color: 'primary', variant: 'filled' },
    message: '',
    vertical: 'top',
    horizontal: 'center'
  });
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const clickShowOldPassword = () => {
    setShowOldPassword(!showOldPassword);
  };

  const clickShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };
  const clickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const initialValues = {
    oldPassword: 'Hello',
    newPassword: '',
    confirmNewPassword: ''
  };

  const passwordResetSchema = Yup.object().shape({
    oldPassword: Yup.string().required('You must enter your old password'),
    newPassword: Yup.string()
      .required('Please enter your new password')
      .matches(
        /^.*(?=.*\d)((?=.*[A-Z]){1})((?=.*[a-z]){1}).*$/,
        'Password must contain at least one uppercase, one lower case and one number'
      ),
    confirmNewPassword: Yup.string()
      .required('Please confirm you password')
      .oneOf([Yup.ref('newPassword'), null], 'Passwords do not match!')
  });

  const submitForm = (e, values) => {
    try {
      // alert(JSON.stringify(values, null, 2));
      setSnackBar({
        open: true,
        message: 'Something went wrong',
        variant: 'alert',
        alert: {
          color: 'success'
        }
      });
    } catch {
      setSnackBar({
        open: true,
        message: 'Something went wrong',
        variant: 'alert',
        alert: {
          color: 'error'
        },
        close: false
      });
    }
  };
  return (
    <>
      <Page>
        <Box>
          <Formik initialValues={initialValues} validationSchema={passwordResetSchema} onSubmit={submitForm}>
            {({ errors, handleBlur, handleChange, handleSubmit, touched, values, resetForm }) => (
              <form onSubmit={handleSubmit}>
                <Grid container spacing={1}>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <MainCard title="Reset Password">
                      <Grid container spacing={1}>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                          <Stack sx={{ mt: 2 }} spacing={1}>
                            <TextField
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment sx={{ cursor: 'pointer' }} onClick={clickShowOldPassword} position="end">
                                    {showOldPassword ? (
                                      <EyeTwoTone twoToneColor="#437CBF" />
                                    ) : (
                                      <EyeInvisibleTwoTone twoToneColor="#437CBF" />
                                    )}
                                  </InputAdornment>
                                )
                              }}
                              InputLabelProps={{ shrink: true }}
                              variant="outlined"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              label="Old Password"
                              id="oldPassword"
                              value={values.oldPassword}
                              type={showOldPassword ? 'text' : 'password'}
                              name="oldPassword"
                              fullWidth
                            />
                            {touched.oldPassword && errors.oldPassword && (
                              <FormHelperText error id="confirm-password">
                                {errors.oldPassword}
                              </FormHelperText>
                            )}
                          </Stack>
                          <Stack sx={{ mt: 2 }} spacing={1}>
                            <TextField
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment sx={{ cursor: 'pointer' }} onClick={clickShowNewPassword} position="end">
                                    {showNewPassword ? (
                                      <EyeTwoTone twoToneColor="#437CBF" />
                                    ) : (
                                      <EyeInvisibleTwoTone twoToneColor="#437CBF" />
                                    )}
                                  </InputAdornment>
                                )
                              }}
                              InputLabelProps={{ shrink: true }}
                              variant="outlined"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              label="New Password"
                              value={values.newPassword}
                              id="new-password"
                              type={showNewPassword ? 'text' : 'password'}
                              name="newPassword"
                              fullWidth
                            />
                            {touched.newPassword && errors.newPassword && (
                              <FormHelperText error id="confirm-password">
                                {errors.newPassword}
                              </FormHelperText>
                            )}
                          </Stack>
                          <Stack sx={{ mt: 2 }} spacing={1}>
                            <TextField
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment sx={{ cursor: 'pointer' }} onClick={clickShowConfirmPassword} position="end">
                                    {showConfirmPassword ? (
                                      <EyeTwoTone twoToneColor="#437CBF" />
                                    ) : (
                                      <EyeInvisibleTwoTone twoToneColor="#437CBF" />
                                    )}
                                  </InputAdornment>
                                )
                              }}
                              InputLabelProps={{ shrink: true }}
                              variant="outlined"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.confirmNewPassword}
                              label="Confirm New Password"
                              id="confirmNewPassword"
                              type={showConfirmPassword ? 'text' : 'password'}
                              name="confirmNewPassword"
                              fullWidth
                            />
                            {touched.confirmNewPassword && errors.confirmNewPassword && (
                              <FormHelperText error id="confirm-password">
                                {errors.confirmNewPassword}
                              </FormHelperText>
                            )}
                          </Stack>
                          <SnackbarMessage snackbar={snackbar} setSnackBar={setSnackBar} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Box sx={{ p: { xs: 0, sm: 2, md: 1.5, lg: 3 } }}>
                            <Typography variant="h5">Criteria:</Typography>
                            <List sx={{ p: 0, mt: 0 }}>
                              <ListItem divider>
                                <ListItemIcon sx={{ color: isLowercaseChar(values.newPassword) ? 'success.main' : 'inherit' }}>
                                  {isLowercaseChar(values.newPassword) ? <CheckOutlined /> : <CloseOutlined />}
                                </ListItemIcon>
                                <ListItemText primary="At least 1 lower letter (a-z)" />
                              </ListItem>
                              <ListItem divider>
                                <ListItemIcon sx={{ color: isUppercaseChar(values.newPassword) ? 'success.main' : 'inherit' }}>
                                  {isUppercaseChar(values.newPassword) ? <CheckOutlined /> : <CloseOutlined />}
                                </ListItemIcon>
                                <ListItemText primary="At least 1 uppercase letter (A-Z)" />
                              </ListItem>
                              <ListItem divider>
                                <ListItemIcon sx={{ color: isNumber(values.newPassword) ? 'success.main' : 'inherit' }}>
                                  {isNumber(values.newPassword) ? <CheckOutlined /> : <CloseOutlined />}
                                </ListItemIcon>
                                <ListItemText primary="At least 1 number (0-9)" />
                              </ListItem>
                            </List>
                          </Box>
                        </Grid>
                        <Grid item xs={12}>
                          <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2}>
                            <Button type="submit" variant="outlined" color="primary">
                              Reset
                            </Button>
                            <Button type="submit" variant="contained">
                              Update Password
                            </Button>
                          </Stack>
                        </Grid>
                      </Grid>
                    </MainCard>
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>
        </Box>
      </Page>
    </>
  );
};

export default PasswordReset;
