/**
 * @author  Mark Woods
 */

import React from 'react';
import { styled } from '@mui/material/styles';

import { ThreeDots } from 'react-loader-spinner';

// loader style
const LoaderWrapper = styled('div')(({ theme }) => ({
  position: 'absolute',
  height: '130px',
  top: '50%',
  left: '50%',
  marginLeft: '-50px',
  marginTop: '-50px',
  zindex: 2001,
  width: '130px',
  '& > * + *': {
    marginTop: theme.spacing(2)
  }
}));

const Loader = () => {
  return (
    <LoaderWrapper>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#437CAF"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </LoaderWrapper>
  );
};

export default Loader;
