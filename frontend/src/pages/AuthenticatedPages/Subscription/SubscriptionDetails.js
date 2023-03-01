import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Box, Card, Divider, Grid, Typography, Container, Button } from '@mui/material';
import Logo from '../../../components/logo';
import { UserContext } from '../../../contexts/UserContext';

const SubscriptionDetails = ({ children }) => {
  const [state, setState] = useContext(UserContext);
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    const getSubscriptions = async () => {
      const { data } = await axios.get('/subscriptions');
      setSubscriptions(data.data);
    };

    if (state && state.token) getSubscriptions();
  }, [state && state.token]);

  const manageSubscription = async () => {
    const { data } = await axios.get('/customer-portal');
    window.open(data);
  };

  return (
    <Box>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={5.7}>
            <Card sx={{ boxShadow: 3, p: 1 }}>
              <Grid sx={{ mt: 1 }} item xs={12}>
                <Typography variant="h6">Summary</Typography>
                <Divider sx={{ color: '#437CAF', border: 0.5, mt: 1 }} />
              </Grid>
              <Grid sx={{ mt: 2, textAlign: 'center' }} item xs={12}>
                <Logo />
              </Grid>
              {subscriptions &&
                subscriptions.slice(0, 1).map((sub) => (
                  <Grid container key={sub.id}>
                    <Grid sx={{ mt: 2 }} item xs={6}>
                      <Typography variant="h6">Subscription </Typography>
                    </Grid>
                    <Grid sx={{ mt: 2 }} item xs={6}>
                      <Typography variant="body2">{sub.id}</Typography>
                    </Grid>
                    <Grid sx={{ mt: 2 }} item xs={6}>
                      <Typography variant="h6">Status</Typography>
                    </Grid>
                    <Grid sx={{ mt: 2 }} item xs={6}>
                      <Typography variant="body2">{sub.status.charAt(0).toUpperCase() + sub.status.slice(1)}</Typography>
                    </Grid>
                    <Grid sx={{ mt: 2 }} item xs={6}>
                      <Typography variant="h6">Payment Start</Typography>
                    </Grid>
                    <Grid sx={{ mt: 2 }} item xs={6}>
                      <Typography variant="body2">
                        {
                          (sub.current_period_start = new Date(sub.current_period_start * 1000).toLocaleDateString('en-IE', {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit'
                          }))
                        }
                      </Typography>
                    </Grid>
                    <Grid sx={{ mt: 2 }} item xs={6}>
                      <Typography variant="h6">Next Payment </Typography>
                    </Grid>
                    <Grid sx={{ mt: 2 }} item xs={6}>
                      <Typography variant="body2">
                        {
                          (sub.current_period_end = new Date(sub.current_period_end * 1000).toLocaleDateString('en-IE', {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit'
                          }))
                        }
                      </Typography>
                    </Grid>
                  </Grid>
                ))}{' '}
            </Card>
          </Grid>

          <Grid item xs={12} md={6.3}>
            <Card sx={{ boxShadow: 1, padding: 2 }}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography variant="h6">My Subscription Plan</Typography>
                  <Divider sx={{ color: '#437CAF', border: 0.5, mt: 1 }} />
                </Grid>
                {subscriptions &&
                  subscriptions.slice(0, 1).map((sub) => (
                    <Grid container key={sub.id}>
                      <Grid sx={{ mt: 2 }} item xs={6}>
                        <Typography variant="h6">Name</Typography>
                      </Grid>
                      <Grid sx={{ mt: 2 }} item xs={6}>
                        <Typography variant="body2">HRI {sub.plan.nickname} Membership</Typography>
                      </Grid>
                      <Grid sx={{ mt: 2 }} item xs={6}>
                        <Typography variant="h6">Billing</Typography>
                      </Grid>
                      <Grid sx={{ mt: 2 }} item xs={6}>
                        <Typography variant="body2">{sub.object.charAt(0).toUpperCase() + sub.object.slice(1)}</Typography>
                      </Grid>
                      <Grid sx={{ mt: 2 }} item xs={6}>
                        <Typography variant="h6">Price</Typography>
                      </Grid>
                      <Grid sx={{ mt: 2 }} item xs={6}>
                        <Typography variant="body2">€{sub.plan.amount / 100}</Typography>
                      </Grid>
                      <Grid sx={{ mt: 2 }} item xs={6}>
                        <Typography variant="h6">Last 4 digits on card</Typography>
                      </Grid>
                      <Grid sx={{ mt: 2 }} item xs={6}>
                        <Typography variant="body2">{sub.default_payment_method.card.last4}</Typography>
                      </Grid>
                    </Grid>
                  ))}
                <Grid container>
                  <Grid sx={{ mt: 4, textAlign: 'center' }} item xs={12}>
                    <Button
                      onClick={manageSubscription}
                      sx={{
                        backgroundColor: '#ffb74d',
                        '&:hover': {
                          backgroundColor: '#ffa726'
                        }
                      }}
                      variant="contained"
                    >
                      Manage Subscription
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SubscriptionDetails;
