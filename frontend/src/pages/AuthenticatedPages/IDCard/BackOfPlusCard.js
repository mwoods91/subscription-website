import React from 'react';
import { Typography, Box } from '@mui/material';

const BackOfPlusCard = (props) => {
  return (
    <>
      {props.userDetails &&
        props.userDetails.map((item, index) => {
          return (
            <>
              <Box key={index}>
                <Box sx={{ position: 'absolute', mt: { xs: -27.2, md: -47.8 }, ml: { xs: 5.2, md: 9 } }}>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '1.1rem' } }} variant="h5">
                    {item.patient_record.fullname}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -25.4, md: -44.8 }, ml: { xs: 4.5, md: 9 } }}>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.8rem' } }} variant="h5">
                    {item.patient_record.dob}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -23.5, md: -42 }, ml: { xs: 34, md: 63 } }}>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.6rem', sm: '0.8rem', md: '0.8rem' } }} variant="h5">
                    {item.patient_record.client_reference_id}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -24.8, md: -44 }, ml: { xs: 25, md: 44.5 } }}>
                  <Typography color="white" sx={{ fontWeight: 300, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.8rem' } }} variant="h5">
                    {item.device_type}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -21.7, md: -38.5 }, ml: { xs: 0.5, md: 1 } }}>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.8rem' } }} variant="h5">
                    {item.implant_center}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -20, md: -35.5 }, ml: { xs: 30, md: 53 } }}>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.8rem' } }} variant="h5">
                    {item.implant_phone}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -18.3, md: -32.5 }, ml: { xs: 34, md: 60 } }}>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.8rem' } }} variant="h5">
                    {item.Implant_date}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -19.8, md: -35 }, ml: { xs: 7.7, md: 14 } }}>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.8rem' } }} variant="h5">
                    {item.Physician}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -17.4, md: -30.5 }, ml: { xs: 8, md: 14 } }}>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.8rem' } }} variant="h5">
                    {item.patient_record.diagnosis}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -15.6, md: -27.5 }, ml: { xs: 8, md: 14 } }}>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.8rem' } }} variant="h5">
                    {item.patient_record.indication}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -12.5, md: -22 }, ml: { xs: 10, md: 18.5 } }}>
                  <Typography color="white" sx={{ fontWeight: 300, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.8rem' } }} variant="h5">
                    {item.generator_manufacturer}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -12.5, md: -20 }, ml: { xs: 33.5, md: 55 } }}>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '1rem' } }} variant="h5">
                    {item.generator_model_number}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -10.5, md: -16.5 }, ml: { xs: 9.5, md: 15.5 } }}>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '1rem' } }} variant="h5">
                    {item.generator_model_name}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -10.5, md: -16.5 }, ml: { xs: 33.4, md: 54.8 } }}>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '1rem' } }} variant="h5">
                    {item.generator_serial_number}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -6.5, md: -10 }, ml: { xs: 2.9, md: 5.5 } }}>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '1rem' } }} variant="h5">
                    {item.atrial_manufacturer}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -5, md: -7.6 }, ml: { xs: 2.9, md: 5.5 } }}>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '1rem' } }} variant="h5">
                    {item.rv_manufacturer}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -3.4, md: -5.2 }, ml: { xs: 2.9, md: 5.5 } }}>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '1rem' } }} variant="h5">
                    {item.lv_manufacturer}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -6.5, md: -10 }, ml: { xs: 15.5, md: 24.5 } }}>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '1rem' } }} variant="h5">
                    {item.atrial_model_name}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -5, md: -7.6 }, ml: { xs: 15.5, md: 24.5 } }}>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '1rem' } }} variant="h5">
                    {item.rv_model_name}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -3.4, md: -5.2 }, ml: { xs: 15.5, md: 24.5 } }}>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '1rem' } }} variant="h5">
                    {item.lv_model_name}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -6.5, md: -10 }, ml: { xs: 26, md: 42 } }}>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.8rem', sm: '0.8rem', md: '1rem' } }} variant="h5">
                    {item.atrial_length}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -5, md: -7.6 }, ml: { xs: 26, md: 42 } }}>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.8rem', sm: '0.8rem', md: '1rem' } }} variant="h5">
                    {item.rv_length}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -3.4, md: -5.2 }, ml: { xs: 26, md: 42 } }}>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.8rem', sm: '0.8rem', md: '1rem' } }} variant="h5">
                    {item.lv_length}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -6.5, md: -10 }, ml: { xs: 32.5, md: 54 } }}>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '1rem' } }} variant="h5">
                    {item.atrial_serial_number}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -5, md: -7.6 }, ml: { xs: 32.5, md: 54 } }}>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '1rem' } }} variant="h5">
                    {item.rv_serial_number}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -3.4, md: -5.2 }, ml: { xs: 32.5, md: 54 } }}>
                  <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '1rem' } }} variant="h5">
                    {item.lv_serial_number}
                  </Typography>
                </Box>{' '}
              </Box>
            </>
          );
        })}
    </>
  );
};

export default BackOfPlusCard;
