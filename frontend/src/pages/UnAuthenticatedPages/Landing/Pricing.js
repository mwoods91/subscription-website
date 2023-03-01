import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTheme } from '@mui/material/styles';
import { Box, Typography, ToggleButton, Grid, useMediaQuery, Container } from '@mui/material';
import PriceCard from './PricesCard';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  const navigate = useNavigate();
  const [prices, setPrices] = useState([]);
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true
  });

  useEffect(() => {
    fetchPrices();
  }, []);

  const fetchPrices = async () => {
    const { data } = await axios.get('http://localhost:5000/prices');
    console.log('prices get request', data);
    setPrices(data);
  };

  const [pricingOption] = useState('Plus');

  const handleClick = async (price) => {
    navigate('/register');
  };

  const renderToggler = () => (
    <Box display={'flex'} justifyContent={'center'} sx={{ mb: 4 }}>
      <ToggleButton
        value="Plus"
        size={isMd ? 'large' : 'small'}
        sx={{
          borderRadius: 3,
          color: 'white',
          backgroundColor: pricingOption === 'Plus' ? `${theme.palette.primary.light} !important` : 'transparent',
          border: `1px solid ${theme.palette.primary}`
        }}
      >
        HRI PLUS
      </ToggleButton>
    </Box>
  );

  return (
    <Box>
      <Box
        sx={{
          position: 'relative',
          backgroundColor: theme.palette.primary,
          backgroundImage: `linear-gradient(120deg, ${theme.palette.background.paper} 0%, ${theme.palette.primary} 100%)`,
          marginTop: 2.5,
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
                Flexible pricing options
              </Typography>
              <Typography variant="h6" component="p" color="text.primary" align={'center'}>
                We have two pricing options to get you started on your Heart Rhythm Ireland Journey
              </Typography>
            </Box>
            {renderToggler()}
          </Box>
        </Container>
      </Box>
      <Container>
        <Grid container spacing={4}>
          {prices &&
            prices
              .splice(0, 2)
              .reverse()
              .map((price) => {
                return <PriceCard key={price.id} price={price} handleClick={handleClick} />;
              })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Pricing;
