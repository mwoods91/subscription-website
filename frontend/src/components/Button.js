/**
 * @author  Mark Woods
 */

import React from 'react';
import { Button } from '@mui/material';

const MuiButton = (props) => {
  const { text, ...other } = props;
  return (
    <Button fullWidth disableElevation size="large" variant="contained" color="primary" {...other}>
      {text}
    </Button>
  );
};

export default MuiButton;
