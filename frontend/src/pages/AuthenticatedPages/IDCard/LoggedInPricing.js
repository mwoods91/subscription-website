import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useTheme } from '@mui/material/styles';
import { Box, Typography, Grid, Container } from '@mui/material';
import PriceCard from './LoggedInPriceCard';
import { UserContext } from '../../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  const navigate = useNavigate();
  const [state, setState] = useContext(UserContext);
  const [prices, setPrices] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    fetchPrices();
  }, []);

  const fetchPrices = async () => {
    const { data } = await axios.get('/prices');
    console.log(data);
    setPrices(data);
  };

  const handleClick = async (price) => {
    if (state && state.confirmtoken) {
      const { data } = await axios.post('/create-subscription', {
        priceId: price.id
      });
      window.open(data);
    } else {
      navigate('/register');
    }
  };

  return (
    <Box>
      <Box
        sx={{
          position: 'relative',
          backgroundColor: theme.palette.primary,
          backgroundImage: `linear-gradient(120deg, ${theme.palette.background.paper} 0%, ${theme.palette.primary} 100%)`,
          marginTop: -5,
          paddingTop: 13
        }}
      >
        <Container position={'relative'} zindex={3}>
          <Box>
            <Box marginBottom={4}>
              <Typography
                variant="h3"
                gutterBottom
                align={'center'}
                sx={{
                  fontWeight: 900
                }}
              >
                Lets get you started on a subscription plan for HRI PLUS
              </Typography>
              <Typography variant="h6" component="p" color="text.primary" align={'center'}>
                Choose your preferred pricing options
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
      <Container>
        <Grid container spacing={4}>
          {prices &&
            prices
              .slice(0, 2)
              .reverse()
              .map((price) => <PriceCard key={price.id} price={price} handleSubscription={handleClick} />)}
        </Grid>
      </Container>
    </Box>
  );
};

export default Pricing;
