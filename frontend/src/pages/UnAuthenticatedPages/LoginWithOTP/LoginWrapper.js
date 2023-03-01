import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Box, Container } from '@mui/material';
import StepEmailLogin from './StepEmailLogin';
import StepOTPLogin from './StepOTPLogin';
import { toast } from 'react-hot-toast';
import { useFormik } from 'formik';
import { UserContext } from '../../../contexts/UserContext';

// ==============================|| AUTHENTICATION - WRAPPER ||============================== //

const LoginWrapper = () => {
  const navigate = useNavigate();
  // const [state, setState] = useContext(UserContext);
  const [step, setStep] = useState(0);
  const LoginImage = require('../../../assets/images/Login/login-image.jpeg');
  const theme = useTheme();

  const [state, setState] = useState({
    email: 'markwoods9@hotmail.com',
    otp: ''
  });

  const handleChange = (input) => (e) => {
    setState({ ...state, [input]: e.target.value });
  };

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const { email, otp } = state;
  const value = { email, otp };

  function getStepContent() {
    switch (step) {
      case 0:
        return <StepEmailLogin nextStep={nextStep} handleChange={handleChange} value={value} />;
      case 1:
        return <StepOTPLogin nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} value={value} />;

      default:
        throw new Error('Unknown step');
    }
  }

  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        overflow: 'hidden'
      }}
    >
      <Container paddingx={0} paddingy={0}>
        <Box display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} position={'relative'}>
          <Box width={1} order={{ xs: 2, md: 1 }} display={'flex'} alignItems={'center'}>
            <Container>{getStepContent(step)}</Container>
          </Box>
          <Box
            sx={{
              flex: { xs: '0 0 100%', md: '0 0 50%' },
              position: 'relative',
              maxWidth: { xs: '100%', md: '50%' },
              order: { xs: 1, md: 2 },
              minHeight: { xs: 'auto', md: 'calc(100vh - 58px)' }
            }}
          >
            <Box
              sx={{
                width: { xs: 1, md: '50vw' },
                height: '100%',
                position: 'relative'
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden'
                }}
              >
                <Box
                  sx={{
                    overflow: 'hidden',
                    left: '0%',
                    width: 1,
                    height: 1,
                    position: { xs: 'relative', md: 'absolute' },
                    clipPath: {
                      xs: 'none',
                      md: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)'
                    },
                    shapeOutside: {
                      xs: 'none',
                      md: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)'
                    }
                  }}
                >
                  <Box
                    sx={{
                      height: { xs: 'auto', md: 1 },
                      '& img': {
                        objectFit: 'cover'
                      }
                    }}
                  >
                    <Box
                      component={'img'}
                      src={LoginImage}
                      height={{ xs: 'auto', md: 1 }}
                      maxHeight={{ xs: 300, md: 1 }}
                      width={1}
                      maxWidth={1}
                      sx={{ filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none' }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

LoginWrapper.propTypes = {
  children: PropTypes.node
};

export default LoginWrapper;
