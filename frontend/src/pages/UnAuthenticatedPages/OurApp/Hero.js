import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';

const HeroImage = require('../../../assets/images/Login/login-image.jpeg');

const Hero = () => {
  const theme = useTheme();
  return (
    <Box
      position={'relative'}
      sx={{
        opacity: 0.7,
        zIndex: 1,
        height: { xs: '100%', md: '100%' },
        '& img': {
          objectFit: 'cover'
        }
      }}
    >
      <Box
        component={'img'}
        src={HeroImage}
        height={{ xs: 'auto', md: 1 }}
        maxHeight={{ xs: 300, md: 400 }}
        width={1}
        maxWidth={1}
        sx={{ filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none' }}
      />
      <Box
        sx={{ position: 'absolute', top: { xs: '25%', md: '35%' }, left: { xs: '10%', md: '38%' }, textAlign: 'center', cursor: 'pointer' }}
      >
        {' '}
        <Typography color="#f1f1f1" variant="h5">
          Check out our Plus App Video
        </Typography>
        <br />
        <IconButton sx={{ mt: { xs: -3 } }} aria-label="delete">
          <PlayCircleFilledWhiteOutlinedIcon sx={{ fontSize: { xs: '5rem', md: '6rem' }, color: '#ffffff' }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Hero;
