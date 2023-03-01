import React from 'react';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const mock = [
  {
    title: 'New HRI Customer',
    subtitle: 'For Customers outside of the ROI who wish to get a permanent ID card or simply sign up to HRI Plus membership',
    icon: require('../../../assets/images/IDCard/pacemakerPaper.png'),
    url: '/register-new'
  },
  {
    title: 'Exisitng HRI Customer',
    subtitle: 'For customers within ROI who have recieved a HRI ID card from us and want to avail of HRI Plus membership',
    icon: require('../../../assets/images/IDCard/hri-standard-card.png'),
    url: '/register-existing'
  }
];

const ChoiceOptions = () => {
  const theme = useTheme();
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}></Grid>
        {mock.map((item, i) => (
          <>
            <Grid key={i} item xs={12} md={3}>
              <Box
                component={'a'}
                href={item.url}
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
                <Box
                  component={Card}
                  width={1}
                  height={1}
                  data-aos={'fade-up'}
                  data-aos-delay={i * 100}
                  data-aos-offset={100}
                  data-aos-duration={600}
                  flexDirection={'column'}
                  display={'flex'}
                >
                  <CardContent
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center'
                    }}
                  >
                    <Box
                      component={'img'}
                      alt="profile user"
                      src={item.icon}
                      sx={{ width: { xs: 60, md: 120 }, height: { xs: 60, md: 120 }, objectFit: 'contain' }}
                    />
                    <Typography variant={'h6'} gutterBottom sx={{ fontWeight: 600 }}>
                      {item.title}
                    </Typography>
                    <Typography color="text.secondary">{item.subtitle}</Typography>
                  </CardContent>
                </Box>
              </Box>
            </Grid>
          </>
        ))}
        <Grid item xs={12} md={3}></Grid>
      </Grid>
    </Box>
  );
};

export default ChoiceOptions;
