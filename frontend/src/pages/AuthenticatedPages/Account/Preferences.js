import React from 'react';
import Page from './components/Page';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import FormControlLabel from '@mui/material/FormControlLabel';

const Preferences = () => {
  return (
    <Page>
      <Box>
        <Box
          display={'flex'}
          flexDirection={{ xs: 'column', md: 'row' }}
          justifyContent={'space-between'}
          alignItems={{ xs: 'flex-start', md: 'center' }}
        >
          <Typography variant="h6" fontWeight={700}>
            Update your preferences
          </Typography>
          <Button size={'large'} variant={'outlined'} sx={{ marginTop: { xs: 2, md: 0 } }}>
            Reset all
          </Button>
        </Box>
        <Box paddingY={4}>
          <Divider />
        </Box>
        <form>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6">App settings</Typography>
              <Typography variant="caption">you will recieve emails in your email address provided</Typography>
              <Box>
                <Box>
                  <FormControlLabel control={<Checkbox defaultChecked={true} color="primary" />} label="E-mail alerts" />
                </Box>
                <Box>
                  <FormControlLabel control={<Checkbox defaultChecked={true} color="primary" />} label="Push notifications" />
                </Box>
                <Box>
                  <FormControlLabel control={<Checkbox defaultChecked={true} color="primary" />} label="Text messages" />
                </Box>
                <Box>
                  <FormControlLabel control={<Checkbox defaultChecked={false} color="primary" />} label="Phone calles" />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6">Contact settings</Typography>
              <Typography variant="caption">You will recieve emails in your business email address</Typography>
              <Box>
                <Box>
                  <FormControlLabel control={<Checkbox defaultChecked={false} color="primary" />} label="E-mail alerts" />
                </Box>
                <Box>
                  <FormControlLabel control={<Checkbox defaultChecked={true} color="primary" />} label="Push notifications" />
                </Box>
              </Box>
            </Grid>
            <Grid item container xs={12}>
              <Box
                display="flex"
                flexDirection={{ xs: 'column', sm: 'row' }}
                alignItems={{ xs: 'stretched', sm: 'center' }}
                justifyContent={'space-between'}
                width={1}
                margin={'0 auto'}
              >
                <Button size={'large'} variant={'contained'} type={'submit'}>
                  Save
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Page>
  );
};

export default Preferences;
