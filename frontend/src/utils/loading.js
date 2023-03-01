
import React from 'react';
import { styled } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';

// loader style
const LoaderWrapper = styled('div')(({ theme }) => ({
  position: 'absolute',
  height: '100px',
  top: '50%',
  left: '50%',
  marginLeft: '-50px',
  marginTop: '-50px',
  zIndex: 2001,
  width: '100px',
  '& > * + *': {
    marginTop: theme.spacing(2)
  }
}));

const Loader = () => {
  return (
    <LoaderWrapper>
      <CircularProgress color="primary" />
    </LoaderWrapper>
  );
};

export default Loader;
