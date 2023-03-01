/**
 * @author  Mark Woods
 */
import * as React from 'react';
import { Typography } from '@mui/material';
import { useState, useEffect } from 'react';
// import { Breadcrumbs as MUIBreadcrumbs } from '@mui/material';
import { useLocation } from 'react-router-dom';
// import MainCard from './MainCard';
// import { useTheme } from '@mui/material/styles';
// import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Container, Box } from '@mui/material';

const Breadcrumbs = () => {
  // const theme = useTheme();
  // const matchDownSm = useMediaQuery(theme.breakpoints.down('lg'));
  // const navigate = useNavigate();
  // const { pathname } = useLocation();
  // const pathnames = pathname.split('/').filter(Boolean);

  const [pageTitle, setPageTitle] = useState('Home');

  const titleMap = [
    {
      path: '/',
      title: pageTitle
    },
    {
      path: '/my-orders',
      title: 'Order Requests',
      subtitle: 'Place additional card or bracelet orders '
    },
    {
      path: '/my-id-card',
      title: 'MyHRI+ Dashboard',
      subtitle: ''
    },
    {
      path: '/payment-plan',
      title: 'My Subscription Plan',
      subtitle: 'Your payment and subscription plan'
    },
    {
      path: '/my-account/personal',
      title: 'Account',
      subtitle: 'Change account information and settings'
    },
    {
      path: '/my-account/password-reset',
      title: 'Account',
      subtitle: 'Change account information and settings'
    },
    {
      path: '/my-account/preferences',
      title: 'Account',
      subtitle: 'Change account information and settings'
    }
  ];

  let currentPageLocation = useLocation();

  useEffect(() => {
    const currentPageTitle = titleMap.find((item) => item.path === currentPageLocation.pathname);
    if (currentPageTitle && currentPageTitle.title) {
      setPageTitle(currentPageTitle.title);
      document.title = currentPageTitle.title;
      document.subtitle = currentPageTitle.subtitle;
    }
    // eslint-disable-next-line
  }, [currentPageLocation]);

  // const Return = () => {
  //   navigate(-1);
  // };

  return (
    <Box sx={{ borderRadius: 2, mt: 4 }} bgcolor={'primary.main'} paddingY={4}>
      <Container>
        <Typography variant="h4" fontWeight={700} gutterBottom sx={{ color: 'common.white' }}>
          {document.title}
        </Typography>
        <Typography variant="h6" sx={{ color: 'common.white' }}>
          {document.subtitle}
        </Typography>
      </Container>
    </Box>
    // <MainCard sx={{ mb: 3, bgcolor: 'transparent', border: 0 }} shadow="none">
    //   {matchDownSm ? (
    //     <Button onClick={Return} variant="outlined" startIcon={<KeyboardReturnIcon />}>
    //       Back
    //     </Button>
    //   ) : (
    //     <Grid container spacing={1}>
    //       <Grid item xs={12}>
    //         <MUIBreadcrumbs aria-label="breadcrumb">
    //           {pathnames.length ? (
    //             <Typography variant="h5" sx={{ cursor: 'pointer' }} onClick={() => navigate('/record-enquiry')}>
    //               Home
    //             </Typography>
    //           ) : (
    //             <Typography variant="h5" sx={{ cursor: 'pointer' }}>
    //               {' '}
    //               Home{' '}
    //             </Typography>
    //           )}
    //           {pathnames.map((name, index) => {
    //             const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
    //             const isLast = index === pathnames.length - 2;
    //             return isLast ? (
    //               <Typography variant="h5" key={name} sx={{ cursor: 'pointer' }}>
    //                 {name}
    //               </Typography>
    //             ) : (
    //               <Typography variant="h5" key={name} onClick={() => navigate(routeTo)} sx={{ cursor: 'pointer' }}>
    //                 {name}
    //               </Typography>
    //             );
    //           })}
    //         </MUIBreadcrumbs>
    //       </Grid>
    //       <Grid item xs={12}>
    //         <Typography sx={{ mt: 2 }} variant="h3">
    //           {document.title}
    //         </Typography>
    //       </Grid>
    //     </Grid>
    //   )}
    // </MainCard>
  );
};

export default Breadcrumbs;
