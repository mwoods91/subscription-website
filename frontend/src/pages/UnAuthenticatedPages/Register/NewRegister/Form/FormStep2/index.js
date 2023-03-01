import React from 'react';

//third party
import { Button, Box } from '@mui/material';

const DeviceSummary = ({ prevStep, nextStep, values, onChange }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
      <Button onClick={prevStep} type="submit" variant="outlined">
        Previous
      </Button>{' '}
      <Button sx={{ ml: 2 }} type="button" variant="contained" onClick={nextStep}>
        Register
      </Button>
    </Box>
  );
};

export default DeviceSummary;
