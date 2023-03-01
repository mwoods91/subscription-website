/**
 * @author  Mark Woods
 */

import { Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import React from 'react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const UserPopUp = (props) => {
  const { title, children, openPopup, setOpenPopup } = props;

  return (
    <div>
      <div>
        <Dialog
          open={openPopup}
          className="modal"
          sx={{
            '& .MuiDialog-container': {
              '& .MuiPaper-root': {
                minWidth: '30%',
                position: 'fixed'
              }
            }
          }}
        >
          <DialogTitle>
            <div style={{ display: 'flex' }}>
              <Typography variant="h3" component="div" style={{ flexGrow: 1 }}>
                {title}
              </Typography>
              <CloseOutlinedIcon
                fontSize="medium"
                color="primary"
                sx={{ borderRadius: 10, mt: 0.5, cursor: 'pointer' }}
                onClick={() => {
                  setOpenPopup(false);
                }}
              />
            </div>
          </DialogTitle>
          <DialogContent dividers>{children}</DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
export default UserPopUp;
