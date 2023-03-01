import React from 'react';
import { Box, Grid, Avatar, Typography, Card, CardContent, colors } from '@mui/material';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCard';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import MobileFriendlyOutlinedIcon from '@mui/icons-material/MobileFriendlyOutlined';
import MainCard from '../../../components/MainCard';

const mock = [
  {
    title: 'ID Card',
    subtitle: 'ID Card issues.',
    count: 5,
    icon: (
      <Box component={'svg'} fill="none" viewBox="0 0 24 24" stroke="currentColor" width={24} height={24}>
        <CreditCardOutlinedIcon />
      </Box>
    ),
    color: colors.lightBlue
  },
  {
    title: 'HRI PLUS',
    subtitle: 'Plus Membership Issues.',
    count: 4,
    icon: (
      <Box component={'svg'} fill="none" viewBox="0 0 24 24" stroke="currentColor" width={24} height={24}>
        <AddOutlinedIcon />
      </Box>
    ),
    color: colors.yellow
  },

  {
    title: 'MyHRI+',
    subtitle: 'App Issues.',
    count: 5,
    icon: (
      <Box component={'svg'} fill="none" viewBox="0 0 24 24" stroke="currentColor" width={24} height={24}>
        <MobileFriendlyOutlinedIcon />
      </Box>
    ),
    color: colors.purple
  },
  {
    title: 'Billing',
    subtitle: 'Billing Issues.',
    count: 4,
    icon: (
      <Box component={'svg'} fill="none" viewBox="0 0 24 24" stroke="currentColor" width={24} height={24}>
        <AccountBalanceOutlinedIcon />
      </Box>
    ),
    color: colors.red
  }
];

const Categories = () => {
  const renderContent = (title, subtitle, count, icon, color) => (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
      <Box component={Avatar} bgcolor={color[100]} color={color[900]} marginBottom={1} width={60} height={60}>
        {icon}
      </Box>
      <Typography variant={'h6'} fontWeight={700} align={'center'} gutterBottom>
        {title}
      </Typography>
      <Typography color={'text.secondary'} align={'center'}>
        {subtitle}
      </Typography>
      <Box paddingY={1 / 2} paddingX={1} bgcolor={'primary.main'} borderRadius={2} marginTop={2}>
        <Typography variant={'caption'} fontWeight={700} sx={{ color: 'white' }}>
          {count} answers
        </Typography>
      </Box>
    </Box>
  );

  return (
    <MainCard sx={{ mt: 13 }} title="Related help Center Categories">
      <Grid container spacing={3} sx={{ mt: 1, mb: 1 }}>
        {mock.map((item, i) => (
          <Grid item xs={12} md={3} key={i}>
            <Card
              sx={{
                borderTop: `2px solid ${item.color[800]}`,
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0
              }}
            >
              <CardContent sx={{ padding: 3 }}>{renderContent(item.title, item.subtitle, item.count, item.icon, item.color)}</CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </MainCard>
  );
};

export default Categories;
