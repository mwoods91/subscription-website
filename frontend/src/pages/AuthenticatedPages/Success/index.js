import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Loader from '../../../components/Loader';
import { UserContext } from '../../../contexts/UserContext';

const SuccessPage = () => {
  const [state, setState] = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    getSubscriptionStatus();
  }, []);

  const getSubscriptionStatus = async () => {
    const data = await axios.get('/subscription-status');
    console.log('Subscription status data', data);
    if (data && data.length === 0) {
      navigate('/my-id-card');
    } else {
      //update user in local storage
      const auth = JSON.parse(localStorage.getItem('auth'));
      auth.user = data;
      localStorage.setItem('auth', JSON.stringify(auth));

      //update user in context
      setState(auth);
      setTimeout(() => {
        navigate('/payment-plan');
      }, 1000);
    }
  };

  return <Loader />;
};

export default SuccessPage;
