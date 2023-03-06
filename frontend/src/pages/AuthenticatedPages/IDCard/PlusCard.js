import React, { useState, useEffect } from 'react';
import { Grid, Card, CardMedia, Typography, Box } from '@mui/material';
import Accordian from './Accordian';
import axios from 'axios';

//3rd party
import ReactCardFlip from 'react-card-flip';
import BackOfPlusCard from './BackOfPlusCard';

const PlusCard = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [dateValue, setDateValue] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('/profile');
        const dateValue = response.data.dob;
        const dateObj = new Date(dateValue);
        const dateString = dateObj.toLocaleDateString('en-GB');
        setDateValue(dateString);
        setUserDetails(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const IDFront = require('../../../assets/images/PlusIDCard/PlusFront.png');
  const IDBack = require('../../../assets/images/IDCard/Back-id-card.png');
  const [isFlipped, setisFlipped] = useState(false);

  const handleFlipChange = () => {
    setisFlipped(!isFlipped);
  };
  return (
    <>
      <Grid spacing={2} container sx={{ textAlign: 'center', mt: { xs: 4, md: 3 } }}>
        <Grid item xs={12} md={3} order={{ xs: 2, sm: 2 }}></Grid>
        <Grid item xs={12} md={6} order={{ xs: 1, sm: 2 }}>
          <Box sx={{ mt: -3, mb: 0.8 }}>
            {' '}
            {isFlipped ? (
              <Typography variant="p">Tap Card to see front</Typography>
            ) : (
              <Typography variant="p">Tap Card to see reverse</Typography>
            )}
          </Box>
          <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <Card sx={{ borderRadius: 2 }} onClick={handleFlipChange}>
              <CardMedia component="img" alt="Front of ID Card" width={1} image={IDFront} />{' '}
              {userDetails &&
                userDetails.map((item, index) => {
                  return (
                    <Box key={index} sx={{ position: 'absolute', mt: { xs: -7, md: -11 }, ml: { xs: 2, md: 3.7 } }}>
                      <Typography variant="h4">{item.patient_record.fullname}</Typography>
                    </Box>
                  );
                })}
            </Card>
            <Card sx={{ borderRadius: 2 }} onClick={handleFlipChange}>
              <CardMedia component="img" alt="Back of ID Card" width={1} image={IDBack} />
              <BackOfPlusCard userDetails={userDetails} />
            </Card>
          </ReactCardFlip>
        </Grid>
        <Grid sx={{ textAlign: 'right' }} item xs={12} md={3} order={{ xs: 3, sm: 2 }}></Grid>
      </Grid>
      <Grid spacing={4} container sx={{ textAlign: 'center', mt: 2 }}>
        <Grid item xs={12} md={12}>
          <Accordian />
        </Grid>
      </Grid>
    </>
  );
};

export default PlusCard;
