import React, { useEffect } from 'react';
import LoginWrapper from './LoginWrapper';
import { useNavigate } from 'react-router-dom';
import { Container } from '@mui/material';

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('auth');

    if (token) {
      navigate('/my-id-card');
    }
  }, [navigate]);
  return (
    <Container sx={{ mt: 10 }}>
      <LoginWrapper />
    </Container>
  );
};

export default Login;
