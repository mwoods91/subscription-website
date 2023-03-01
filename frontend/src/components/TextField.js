/**
 * @author  Mark Woods
 */

import React from 'react';
import { TextField } from '@mui/material';

const MuiTextField = (props) => {
  const { name, label, value, onChange, type, ...other } = props;
  return (
    <TextField
      sx={{ '& .MuiInputBase-root': { height: 29, Width: 100 } }}
      fullWidth
      variant="outlined"
      InputLabelProps={{ shrink: true }}
      label={label}
      value={value}
      onChange={onChange}
      name={name}
      type={type}
      {...other}
    ></TextField>
  );
};

export default MuiTextField;
