import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

//render - Routes
import UnAuthenticatedLayout from '../layouts/unAuthenticatedLayout';
import AuthorizedRoutes from './authorizedRoutes';

import Loadable from '../components/Loadable';

// render - landing page
// const PagesLanding = Loadable(lazy(() => import('../pages/UnAuthenticatedPages/Landing')));

// const About = Loadable(lazy(() => import('../pages/UnAuthenticatedPages/AboutUs')));
// const IDCard = Loadable(lazy(() => import('../pages/UnAuthenticatedPages/IDCard')));
// const PlusPackage = Loadable(lazy(() => import('../pages/UnAuthenticatedPages/PlusMembership')));
// const OurApp = Loadable(lazy(() => import('../pages/UnAuthenticatedPages/OurApp')));
// const HelpCenter = Loadable(lazy(() => import('../pages/UnAuthenticatedPages/HelpCenter')));

const Login = Loadable(lazy(() => import('../pages/UnAuthenticatedPages/LoginWithOTP')));
const OTPGenerator = Loadable(lazy(() => import('../pages/UnAuthenticatedPages/Login/OTP')));
// const RegisterNew = Loadable(lazy(() => import('../pages/UnAuthenticatedPages/Register/NewRegister')));
const RegisterExisting = Loadable(lazy(() => import('../pages/UnAuthenticatedPages/Register/ExistingRegister')));
// const RegisterChoices = Loadable(lazy(() => import('../pages/UnAuthenticatedPages/RegisterChoices')));

const PasswordReset = Loadable(lazy(() => import('../pages/UnAuthenticatedPages/PasswordReset')));

const Error404 = Loadable(lazy(() => import('../pages/Error/404.js')));

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([
    {
      path: '/',
      element: <UnAuthenticatedLayout layout="landing" />,
      children: [
        {
          path: '/',
          element: <RegisterExisting />
        },
        // {
        //   path: '/about-us',
        //   element: <About />
        // },
        // {
        //   path: '/id-card',
        //   element: <IDCard />
        // },
        // {
        //   path: '/plus-package',
        //   element: <PlusPackage />
        // },
        // {
        //   path: '/hri-app',
        //   element: <OurApp />
        // },
        // {
        //   path: '/Help-center',
        //   element: <HelpCenter />
        // },

        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/OTP-verification',
          element: <OTPGenerator />
        },

        // {
        //   path: '/register-new',
        //   element: <RegisterNew />
        // },
        // {
        //   path: '/register-existing',
        //   element: <RegisterExisting />
        // },
        // {
        //   path: '/register-options',
        //   element: <RegisterChoices />
        // },
        {
          path: '/password-reset',
          element: <PasswordReset />
        },
        {
          path: '*',
          element: <Error404 />
        }
      ]
    },
    AuthorizedRoutes
  ]);
}
