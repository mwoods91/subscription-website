import { lazy } from 'react';

// project import
import AuthenticatedLayout from '../layouts/authenticatedLayout';
import Loadable from '../components/Loadable';
import AuthRoute from '../utils/Auth-guard/AuthRoute';

//render Dashboard
const Orders = Loadable(lazy(() => import('../pages/AuthenticatedPages/Orders')));
const IDCard = Loadable(lazy(() => import('../pages/AuthenticatedPages/IDCard')));
const PaymentPlan = Loadable(lazy(() => import('../pages/AuthenticatedPages/Subscription')));
const Account = Loadable(lazy(() => import('../pages/AuthenticatedPages/Account/components/Page')));
const PersonalInfo = Loadable(lazy(() => import('../pages/AuthenticatedPages/Account/Personal')));
const PasswordReset = Loadable(lazy(() => import('../pages/AuthenticatedPages/Account/Password')));
const Preferences = Loadable(lazy(() => import('../pages/AuthenticatedPages/Account/Preferences')));
const SuccessPage = Loadable(lazy(() => import('../pages/AuthenticatedPages/Success')));
const CancelPage = Loadable(lazy(() => import('../pages/AuthenticatedPages/Cancel')));

const AuthorizedRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: (
        <AuthRoute>
          <AuthenticatedLayout />
        </AuthRoute>
      ),
      children: [
        // {
        //   path: '/my-orders',
        //   element: <Orders />
        // },
        {
          path: '/my-id-card',
          element: <IDCard />
        },
        {
          path: '/payment-plan',
          element: <PaymentPlan />
        },
        {
          path: '/my-account',
          element: <Account />
        },
        {
          path: '/my-account/personal',
          element: <PersonalInfo />
        },
        {
          path: '/my-account/personal',
          element: <PersonalInfo />
        },
        {
          path: '/my-account/password-reset',
          element: <PasswordReset />
        },
        {
          path: '/my-account/preferences',
          element: <Preferences />
        },
        {
          path: '/stripe/success',
          element: <SuccessPage />
        },
        {
          path: '/stripe/cancel',
          element: <CancelPage />
        }
      ]
    }
  ]
};
export default AuthorizedRoutes;
