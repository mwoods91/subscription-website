import React from 'react';
import { TextField, } from '@mui/material';

const MuiSelect = (props) => {
  const { name, label, value, onChange, type, ...other } = props;
  return (
    <TextField
      sx={{ '& .MuiInputBase-root': { height: 29 } }}
      select
      fullWidth
      variant="outlined"
      InputLabelProps={{ shrink: true }}
      label={label}
      onChange={onChange}
      name={name}
      type={type}
      {...other}
    >
    
    </TextField>
  );
};

export default MuiSelect;
