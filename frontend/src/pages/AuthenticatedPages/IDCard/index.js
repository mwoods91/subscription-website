import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import PlusCard from './PlusCard';
import Pricing from './LoggedInPricing';
import { UserContext } from '../../../contexts/UserContext';
import Loader from '../../../components/Loader';

const IDCard = () => {
  const [state, setState] = useContext(UserContext);
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    const getSubscriptions = async () => {
      const { data } = await axios.get('/subscriptions');
      setSubscriptions(data.data);
    };

    if (state && state.confirmtoken) getSubscriptions();
  }, [state && state.token]);

  return <>{subscriptions.length === 0 ? <Pricing /> : <PlusCard />}</>;
};

export default IDCard;
