/**
 * @author  Mark Woods
 */

import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, DialogContentText, Box } from '@mui/material';

const ConfirmDialog = (props) => {
  const { confirmDialog, setConfirmDialog } = props;

  return (
    <>
      <Dialog open={confirmDialog.isOpen} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <Box sx={{ p: 1, py: 1.5 }}>
          <DialogTitle id="alert-dialog-title">{confirmDialog.title}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">{confirmDialog.message}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })} autoFocus>
              Close
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </>
  );
};

export default ConfirmDialog;
