import React from 'react';
import Slider from 'react-slick';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import useMediaQuery from '@mui/material/useMediaQuery';
import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const mock = [
  {
    media: require('../../../assets/images/OurApp/DeviceDetails.jpg')
  },
  {
    media: require('../../../assets/images/OurApp/signUp.jpg')
  },
  {
    media: require('../../../assets/images/OurApp/Payment.jpg')
  },
  {
    media: require('../../../assets/images/OurApp/deviceID.jpg')
  }
];

const SlideShow = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true
  });

  const sliderOpts = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: isMd ? 3 : 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <Box>
      <Grid container spacing={1}>
        <Grid item xs={12} md={4}>
          <Box sx={{ mt: 15 }}>
            <Typography
              variant="h4"
              sx={{
                textTransform: 'uppercase',
                fontWeight: 'medium'
              }}
              gutterBottom
              color={'primary'}
            >
              A new mobile experience, bringing your device details to one location
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: 200
              }}
            >
              Take your digital ID card with you wherever you go and take comfort in knowing your details are available 24/7.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box data-aos={'fade-up'} maxWidth={{ xs: 420, sm: 620, md: 1 }} margin={'0 auto'}>
            <Slider {...sliderOpts}>
              {mock.map((item, i) => (
                <Box key={i} padding={{ xs: 1, md: 2, lg: 3 }}>
                  <Box
                    display={'block'}
                    width={1}
                    height={1}
                    sx={{
                      textDecoration: 'none',
                      transition: 'all .2s ease-in-out',
                      '&:hover': {
                        transform: `translateY(-${theme.spacing(1 / 2)})`
                      }
                    }}
                  >
                    <Box component={'img'} width="100%" height="100%" minHeight={30} src={item.media} borderRadius={2} />
                  </Box>
                </Box>
              ))}
            </Slider>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SlideShow;
