/**
 * @author  Mark Woods
 */

import React, { useState } from 'react';
// material-ui

import { Alert, Button, Slide } from '@mui/material';

import MuiSnackbar from '@mui/material/Snackbar';

// project-import
import IconButton from '../components/IconButton';

// assets
import { CloseOutlined } from '@ant-design/icons';

const anchorOrigin = {
  vertical: 'top',
  horizontal: 'center'
};

const SnackbarMessage = (props) => {
  const [state] = useState({ Transition: Slide });
  const { snackbar, setSnackBar } = props;

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackBar({
      ...snackbar,
      open: false
    });
  };
  return (
    <MuiSnackbar
      sx={{ position: 'fixed', mt: 5 }}
      TransitionComponent={state.Transition}
      anchorOrigin={anchorOrigin}
      open={snackbar.open}
      autoHideDuration={4000}
      onClose={handleClose}
    >
      <Alert
        variant={snackbar.alert.variant}
        color={snackbar.alert.color}
        action={
          <>
            {snackbar.actionButton !== false && (
              <Button color={snackbar.alert.color} size="small" onClick={handleClose}>
                X
              </Button>
            )}
            {snackbar.close !== false && (
              <IconButton
                sx={{ mt: 0.25 }}
                size="small"
                aria-label="close"
                variant="contained"
                color={snackbar.alert.color}
                onClick={handleClose}
              >
                <CloseOutlined />
              </IconButton>
            )}
          </>
        }
        sx={{
          ...(snackbar.alert.variant === 'outlined' && {
            bgcolor: 'grey.0'
          })
        }}
      >
        {snackbar.message}
      </Alert>
    </MuiSnackbar>
  );
};

export default SnackbarMessage;
