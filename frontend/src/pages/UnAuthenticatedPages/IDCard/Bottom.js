import React from 'react';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery, Grid, Box, Typography } from '@mui/material';

const Bottom = () => {
  const CardImages = require('../../../assets/images/IDCard/ID-card-images.png');
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true
  });
  return (
    <Box sx={{ mt: 10 }}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item container justifyContent={'center'} xs={12} md={6}>
          <Box component={'img'} loading="lazy" src={CardImages} width={1} height={1} maxWidth={400} />
        </Grid>
        <Grid item container alignItems="center" xs={12} md={6}>
          <Box>
            <Typography
              variant="h4"
              data-aos={'fade-up'}
              gutterBottom
              sx={{
                fontWeight: 700
              }}
            >
              Why is my cardiac device ID card important?
            </Typography>
            <Typography sx={{ mb: 5 }} data-aos={'fade-up'}>
              A cardiac device ID card is an important document that contains information about a patient's implanted cardiac device, such
              as a pacemaker or ICD. The card provides details about the type of device, the manufacturer, the model number, and the date of
              implantation. This information can be critical in emergency situations where medical personnel need to quickly and accurately
              identify a patient's device and its settings.
              <br />
              <br />
              Carrying a cardiac device ID card is particularly important for patients with cardiac devices because it allows medical
              professionals to make informed decisions about treatment options in case of a medical emergency. It also helps to prevent any
              potential complications or misunderstandings that could arise from the lack of information about a patient's cardiac device.
              <br />
              <br />
              In summary, a cardiac device ID card is a simple but essential tool for patients with cardiac devices to ensure that they
              receive prompt and accurate medical attention in case of an emergency.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Bottom;
