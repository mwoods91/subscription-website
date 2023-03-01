import React from 'react';
import { Box, Grid, Avatar, Typography, colors, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import MainCard from '../../../components/MainCard';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCard';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import MobileFriendlyOutlinedIcon from '@mui/icons-material/MobileFriendlyOutlined';

const IdCardQuestions = [
  {
    title: 'Authentication Issues',
    subtitle: 'Issues related to logging in, out, or about multiple devices.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!'
  },
  {
    title: 'Why doesn’t my account stay logged in?',
    subtitle: 'Issues related to authentication',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!'
  },
  {
    title: "I'd like to renew but I am getting a 404 error.",
    subtitle: 'Issues related to renewal',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!'
  },
  {
    title: "Why can't I upgrade for free?",
    subtitle: 'Payment gateway related issues',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!'
  },
  {
    title: "Why doesn't my account stay logged in?",
    subtitle: 'Login session related issues',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!'
  }
];
const PlusQuestions = [
  {
    title: 'Authentication Issues',
    subtitle: 'Issues related to logging in, out, or about multiple devices.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!'
  },
  {
    title: 'Why doesn’t my account stay logged in?',
    subtitle: 'Issues related to authentication',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!'
  },
  {
    title: "I'd like to renew but I am getting a 404 error.",
    subtitle: 'Issues related to renewal',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!'
  },

  {
    title: 'Can I use referral code to decrease my monthly fees?',
    subtitle: 'Referral bonuses and charging',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!'
  }
];
const myHRIQuestions = [
  {
    title: 'Authentication Issues',
    subtitle: 'Issues related to logging in, out, or about multiple devices.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!'
  },
  {
    title: 'Why doesn’t my account stay logged in?',
    subtitle: 'Issues related to authentication',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!'
  },
  {
    title: "I'd like to renew but I am getting a 404 error.",
    subtitle: 'Issues related to renewal',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!'
  },

  {
    title: 'Authentication Issues',
    subtitle: 'Issues related to logging in, out, or about multiple devices.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!'
  },
  {
    title: 'Why doesn’t my account stay logged in?',
    subtitle: 'Issues related to authentication',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!'
  }
];

const billingQuestion = [
  {
    title: 'Authentication Issues',
    subtitle: 'Issues related to logging in, out, or about multiple devices.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!'
  },

  {
    title: 'Can I use referral code to decrease my monthly fees?',
    subtitle: 'Referral bonuses and charging',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!'
  },
  {
    title: 'Authentication Issues',
    subtitle: 'Issues related to logging in, out, or about multiple devices.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!'
  },
  {
    title: 'Why doesn’t my account stay logged in?',
    subtitle: 'Issues related to authentication',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!'
  }
];

const mockCategories = {
  card: {
    title: 'ID Card'
  },
  plus: {
    title: 'HRI PLUS'
  },
  app: {
    title: 'myHRI+'
  },
  billing: {
    title: 'Billing'
  }
};

const Faq = () => {
  return (
    <MainCard sx={{ mt: 3 }} title="Frequently asked questions">
      <Box sx={{ mt: 5, backgroundColor: 'white' }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box marginBottom={2}>
              <Box component={Avatar} bgcolor={colors.blue[100]} color={colors.blue[700]} marginBottom={1} width={60} height={60}>
                <Box component={'svg'} fill="none" viewBox="0 0 24 24" stroke="currentColor" width={24} height={24}>
                  <CreditCardOutlinedIcon />
                </Box>
              </Box>
              <Typography variant={'h6'} fontWeight={700} gutterBottom>
                {mockCategories.card.title}
              </Typography>
              <Typography color={'text.secondary'}>{mockCategories.card.subtitle}</Typography>
            </Box>

            {IdCardQuestions.map((item, i) => (
              <Box
                component={Accordion}
                key={i}
                paddingY={1}
                elevation={0}
                sx={{
                  '&:first-of-type': {
                    borderTopLeftRadius: 1,
                    borderTopRightRadius: 1
                  },
                  '&:not(:first-of-type):before': {
                    opacity: '1 !important',
                    display: 'block !important'
                  },
                  '&.Mui-expanded': {
                    margin: 0
                  }
                }}
              >
                <Box
                  component={AccordionSummary}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id={`panel1a-header--${i}`}
                  padding={'0 !important'}
                >
                  <Box>
                    <Typography fontWeight={600}>{item.title}</Typography>
                    <Typography color="text.secondary">{item.subtitle}</Typography>
                  </Box>
                </Box>
                <AccordionDetails>
                  <Typography>{item.text}</Typography>
                </AccordionDetails>
              </Box>
            ))}
          </Grid>
          <Grid item xs={12} md={6}>
            <Box marginBottom={2}>
              <Box component={Avatar} bgcolor={colors.yellow[100]} color={colors.yellow[700]} marginBottom={1} width={60} height={60}>
                <Box component={'svg'} fill="none" viewBox="0 0 24 24" stroke="currentColor" width={24} height={24}>
                  <AddOutlinedIcon />
                </Box>
              </Box>
              <Typography variant={'h6'} fontWeight={700} gutterBottom>
                {mockCategories.plus.title}
              </Typography>
              <Typography color={'text.secondary'}>{mockCategories.plus.subtitle}</Typography>
            </Box>

            {PlusQuestions.map((item, i) => (
              <Box
                component={Accordion}
                key={i}
                paddingY={1}
                elevation={0}
                sx={{
                  '&:first-of-type': {
                    borderTopLeftRadius: 1,
                    borderTopRightRadius: 1
                  },
                  '&:not(:first-of-type):before': {
                    opacity: '1 !important',
                    display: 'block !important'
                  },
                  '&.Mui-expanded': {
                    margin: 0
                  }
                }}
              >
                <Box
                  component={AccordionSummary}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id={`panel1a-header--${i}`}
                  padding={'0 !important'}
                >
                  <Box>
                    <Typography fontWeight={600}>{item.title}</Typography>
                    <Typography color="text.secondary">{item.subtitle}</Typography>
                  </Box>
                </Box>
                <AccordionDetails>
                  <Typography>{item.text}</Typography>
                </AccordionDetails>
              </Box>
            ))}
          </Grid>
          <Grid item xs={12} md={6}>
            <Box marginBottom={2}>
              <Box component={Avatar} bgcolor={colors.purple[100]} color={colors.purple[700]} marginBottom={1} width={60} height={60}>
                <Box component={'svg'} fill="none" viewBox="0 0 24 24" stroke="currentColor" width={24} height={24}>
                  <MobileFriendlyOutlinedIcon />
                </Box>
              </Box>
              <Typography variant={'h6'} fontWeight={700} gutterBottom>
                {mockCategories.app.title}
              </Typography>
              <Typography color={'text.secondary'}>{mockCategories.app.subtitle}</Typography>
            </Box>

            {myHRIQuestions.map((item, i) => (
              <Box
                component={Accordion}
                key={i}
                paddingY={1}
                elevation={0}
                sx={{
                  '&:first-of-type': {
                    borderTopLeftRadius: 1,
                    borderTopRightRadius: 1
                  },
                  '&:not(:first-of-type):before': {
                    opacity: '1 !important',
                    display: 'block !important'
                  },
                  '&.Mui-expanded': {
                    margin: 0
                  }
                }}
              >
                <Box
                  component={AccordionSummary}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id={`panel1a-header--${i}`}
                  padding={'0 !important'}
                >
                  <Box>
                    <Typography fontWeight={600}>{item.title}</Typography>
                    <Typography color="text.secondary">{item.subtitle}</Typography>
                  </Box>
                </Box>
                <AccordionDetails>
                  <Typography>{item.text}</Typography>
                </AccordionDetails>
              </Box>
            ))}
          </Grid>
          <Grid item xs={12} md={6}>
            <Box marginBottom={2}>
              <Box component={Avatar} bgcolor={colors.red[100]} color={colors.red[700]} marginBottom={1} width={60} height={60}>
                <Box component={'svg'} fill="none" viewBox="0 0 24 24" stroke="currentColor" width={24} height={24}>
                  <AccountBalanceOutlinedIcon />
                </Box>
              </Box>
              <Typography variant={'h6'} fontWeight={700} gutterBottom>
                {mockCategories.billing.title}
              </Typography>
              <Typography color={'text.secondary'}>{mockCategories.billing.subtitle}</Typography>
            </Box>

            {billingQuestion.map((item, i) => (
              <Box
                component={Accordion}
                key={i}
                paddingY={1}
                elevation={0}
                sx={{
                  '&:first-of-type': {
                    borderTopLeftRadius: 1,
                    borderTopRightRadius: 1
                  },
                  '&:not(:first-of-type):before': {
                    opacity: '1 !important',
                    display: 'block !important'
                  },
                  '&.Mui-expanded': {
                    margin: 0
                  }
                }}
              >
                <Box
                  component={AccordionSummary}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id={`panel1a-header--${i}`}
                  padding={'0 !important'}
                >
                  <Box>
                    <Typography fontWeight={600}>{item.title}</Typography>
                    <Typography color="text.secondary">{item.subtitle}</Typography>
                  </Box>
                </Box>
                <AccordionDetails>
                  <Typography>{item.text}</Typography>
                </AccordionDetails>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Box>
    </MainCard>
  );
};

export default Faq;
