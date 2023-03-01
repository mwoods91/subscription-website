import React from 'react';
import Slider from 'react-slick';
import { useTheme } from '@mui/material/styles';
import { Card, Box, CardActions, CardContent, Typography, Avatar, ListItem, ListItemText, ListItemAvatar, Container } from '@mui/material';
import MainCard from '../../../components/MainCard';

const mock = [
  {
    feedback: 'I received my ID card within 2 days of my implant. The service is very fast and reliable',
    name: 'Jenny Mc Arthur',
    title: 'Loop Recorder patient',
    avatar: 'https://assets.maccarianagency.com/avatars/img1.jpg'
  },
  {
    feedback: ' I have travelled on numerous occasions with my HRI ID Card and I have never had any issues with airport security.',
    name: 'Mark Coleman',
    title: 'ICD implant patient',
    avatar: 'https://assets.maccarianagency.com/avatars/img2.jpg'
  },
  {
    feedback: 'It is very reassuring that I know I can carry my device details with me at all times',
    name: 'Patrick Mahon',
    title: 'Pacemaker implant patient',
    avatar: 'https://assets.maccarianagency.com/avatars/img2.jpg'
  },
  {
    feedback: 'Its very convenient that the card is the same size as my debit cards. I have found this service to be excellent',
    name: 'Marie Kavanagh',
    title: 'Loop Recorder patient',
    avatar: 'https://assets.maccarianagency.com/avatars/img3.jpg'
  }
];

const Reviews = () => {
  const theme = useTheme();

  const sliderOpts = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500
  };

  return (
    <>
      <MainCard sx={{ mt: 3 }}>
        <Box
          sx={{
            marginTop: 2,
            paddingTop: 2
          }}
        >
          <Container>
            <Box>
              <Box marginBottom={{ xs: 0, sm: 4 }} display={'flex'} flexDirection={'column'} alignItems={'center'}>
                <Typography
                  variant="h3"
                  gutterBottom
                  align={'center'}
                  sx={{
                    fontWeight: 900
                  }}
                >
                  Exisiting HRI patients....
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>
        <Box marginBottom={3} display={'flex'} flexDirection={'column'} alignItems={'center'}>
          <Box marginBottom={1}>
            <Box
              component={'svg'}
              width={48}
              height={48}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              color={theme.palette.primary.main}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </Box>
          </Box>
          <Box maxWidth={800} width={1}>
            <Slider {...sliderOpts}>
              {mock.map((item, i) => (
                <Box key={i}>
                  <Box
                    width={1}
                    height={1}
                    component={Card}
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    boxShadow={0}
                    sx={{ bgcolor: 'transparent', backgroundImage: 'none' }}
                  >
                    <CardContent
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                      }}
                    >
                      <Typography align={'center'} variant={'h6'}>
                        {item.feedback}
                      </Typography>
                    </CardContent>
                    <Box flexGrow={1} />
                    <CardActions sx={{ paddingBottom: 2 }}>
                      <ListItem component="div" disableGutters sx={{ padding: 0 }}>
                        <ListItemAvatar>
                          <Avatar src={item.avatar} />
                        </ListItemAvatar>
                        <ListItemText sx={{ margin: 0 }} primary={item.name} secondary={item.title} />
                      </ListItem>
                    </CardActions>
                  </Box>
                </Box>
              ))}
            </Slider>
          </Box>
        </Box>
      </MainCard>
    </>
  );
};

export default Reviews;
