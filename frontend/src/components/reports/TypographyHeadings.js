import React from 'react';
import { Typography } from '@mui/material';

const TypographyHeadings = (props) => {
  const { text, ...other } = props;
  return (
    <Typography
      color={'primary'}
      variant="h5"
      sx={{
        fontSize: '1.05rem',
        lineHeight: 1.5,
        fontWeight: 500
      }}
      {...other}
    >
      {text}
    </Typography>
  );
};

export default TypographyHeadings;
