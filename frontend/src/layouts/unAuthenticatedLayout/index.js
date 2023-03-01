import React from 'react';
import PropTypes from 'prop-types';
import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

// material-ui
import { styled } from '@mui/material/styles';
import { CircularProgress } from '@mui/material';

const Header = lazy(() => import('./Header.js'));
const Footer = lazy(() => import('./Footer'));

const LoaderWrapper = styled('div')(({ theme }) => ({
  position: 'absolute',
  height: '100px',
  top: '50%',
  left: '50%',
  marginLeft: '-50px',
  marginTop: '-50px',
  zindex: 2001,
  width: '100px',
  '& > * + *': {
    marginTop: theme.spacing(2)
  }
}));

const Loader = () => (
  <LoaderWrapper>
    <CircularProgress color="primary" />
  </LoaderWrapper>
);

const UnAuthenticatedLayout = ({ layout = 'blank' }) => {
  const search = useLocation();
  return (
    <>
      {layout === 'landing' && (
        <Suspense fallback={<Loader />}>
          <Header layout={layout} />
          <Outlet />
          {search.pathname === '/register-options' ? null : <Footer isFull={layout === 'landing'} />}
        </Suspense>
      )}
      {layout === 'blank' && <Outlet />}
    </>
  );
};

UnAuthenticatedLayout.propTypes = {
  layout: PropTypes.string
};

export default UnAuthenticatedLayout;
