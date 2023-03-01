import React from 'react';
import { Typography } from '@mui/material';

const TypographyValues = (props) => {
  const { text, ...other } = props;
  return (
    <Typography
      variant="h5"
      sx={{
        fontSize: '1rem',
        lineHeight: 1.5,
        fontWeight: 400
      }}
      {...other}
    >
      {text}
    </Typography>
  );
};

export default TypographyValues;
