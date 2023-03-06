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
                <Box sx={{ position: 'absolute', mt: { xs: -7, md: -47.9 }, ml: { xs: 2, md: 9 } }}>
                  <Typography sx={{ fontWeight: 300 }} variant="h5">
                    {item.patient_record.fullname}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -7, md: -44.8 }, ml: { xs: 2, md: 9 } }}>
                  <Typography sx={{ fontWeight: 300 }} variant="h5">
                    {item.patient_record.dob}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -7, md: -42 }, ml: { xs: 2, md: 63 } }}>
                  <Typography sx={{ fontWeight: 300, fontSize: '0.8rem' }} variant="h5">
                    {item.patient_record.client_reference_id}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -7, md: -44 }, ml: { xs: 2, md: 44.5 } }}>
                  <Typography color="white" sx={{ fontWeight: 300 }} variant="h5">
                    {item.device_type}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -7, md: -38.5 }, ml: { xs: 2, md: 1 } }}>
                  <Typography sx={{ fontWeight: 300 }} variant="h5">
                    {item.implant_center}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -7, md: -35.5 }, ml: { xs: 2, md: 53 } }}>
                  <Typography sx={{ fontWeight: 300 }} variant="h5">
                    {item.implant_phone}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -7, md: -32.5 }, ml: { xs: 2, md: 60 } }}>
                  <Typography sx={{ fontWeight: 300 }} variant="h5">
                    {item.Implant_date}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -7, md: -35 }, ml: { xs: 2, md: 14 } }}>
                  <Typography sx={{ fontWeight: 300 }} variant="h5">
                    {item.Physician}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -7, md: -30.5 }, ml: { xs: 2, md: 14 } }}>
                  <Typography sx={{ fontWeight: 300 }} variant="h5">
                    {item.patient_record.diagnosis}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -7, md: -27.5 }, ml: { xs: 2, md: 14 } }}>
                  <Typography sx={{ fontWeight: 300 }} variant="h5">
                    {item.patient_record.indication}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -7, md: -22 }, ml: { xs: 2, md: 18.5 } }}>
                  <Typography color="white" sx={{ fontWeight: 300 }} variant="h5">
                    {item.generator_manufacturer}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -7, md: -22 }, ml: { xs: 2, md: 60 } }}>
                  <Typography sx={{ fontWeight: 300 }} variant="h5">
                    {item.generator_model_number}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -7, md: -18.5 }, ml: { xs: 2, md: 17.5 } }}>
                  <Typography sx={{ fontWeight: 300 }} variant="h5">
                    {item.generator_model_name}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -7, md: -18.5 }, ml: { xs: 2, md: 59.8 } }}>
                  <Typography sx={{ fontWeight: 300 }} variant="h5">
                    {item.generator_serial_number}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -7, md: -11.3 }, ml: { xs: 2, md: 5.5 } }}>
                  <Typography sx={{ fontWeight: 300 }} variant="h5">
                    {item.atrial_manufacturer}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -7, md: -8.5 }, ml: { xs: 2, md: 5.5 } }}>
                  <Typography sx={{ fontWeight: 300 }} variant="h5">
                    {item.rv_manufacturer}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -7, md: -5.8 }, ml: { xs: 2, md: 5.5 } }}>
                  <Typography sx={{ fontWeight: 300 }} variant="h5">
                    {item.lv_manufacturer}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -7, md: -11.3 }, ml: { xs: 2, md: 27 } }}>
                  <Typography sx={{ fontWeight: 300 }} variant="h5">
                    {item.atrial_model_name}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -7, md: -8.5 }, ml: { xs: 2, md: 27 } }}>
                  <Typography sx={{ fontWeight: 300 }} variant="h5">
                    {item.rv_model_name}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -7, md: -5.8 }, ml: { xs: 2, md: 27 } }}>
                  <Typography sx={{ fontWeight: 300 }} variant="h5">
                    {item.lv_model_name}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -7, md: -11.3 }, ml: { xs: 2, md: 46 } }}>
                  <Typography sx={{ fontWeight: 300 }} variant="h5">
                    {item.atrial_length}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -7, md: -8.5 }, ml: { xs: 2, md: 46 } }}>
                  <Typography sx={{ fontWeight: 300 }} variant="h5">
                    {item.rv_length}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -7, md: -5.8 }, ml: { xs: 2, md: 46 } }}>
                  <Typography sx={{ fontWeight: 300 }} variant="h5">
                    {item.lv_length}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -7, md: -11.3 }, ml: { xs: 2, md: 58 } }}>
                  <Typography sx={{ fontWeight: 300 }} variant="h5">
                    {item.atrial_serial_number}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -7, md: -8.5 }, ml: { xs: 2, md: 58 } }}>
                  <Typography sx={{ fontWeight: 300 }} variant="h5">
                    {item.rv_serial_number}
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: { xs: -7, md: -5.8 }, ml: { xs: 2, md: 58 } }}>
                  <Typography sx={{ fontWeight: 300 }} variant="h5">
                    {item.lv_serial_number}
                  </Typography>
                </Box>{' '}
              </Box>
            </>
          );
        })}
      {/* 
     
      
      
     
      <Box sx={{ position: 'absolute', mt: { xs: -7, md: -35.5 }, ml: { xs: 2, md: 53 } }}>
        <Typography sx={{ fontWeight: 300 }} variant="h5">
          hello
        </Typography>
      </Box>
      <Box sx={{ position: 'absolute', mt: { xs: -7, md: -32.5 }, ml: { xs: 2, md: 60 } }}>
        <Typography sx={{ fontWeight: 300 }} variant="h5">
          hello
        </Typography>
      </Box>
      <Box sx={{ position: 'absolute', mt: { xs: -7, md: -35 }, ml: { xs: 2, md: 14 } }}>
        <Typography sx={{ fontWeight: 300 }} variant="h5">
          hello
        </Typography>
      </Box>
      <Box sx={{ position: 'absolute', mt: { xs: -7, md: -30.5 }, ml: { xs: 2, md: 14 } }}>
        <Typography sx={{ fontWeight: 300 }} variant="h5">
         hello
        </Typography>
      </Box>
      <Box sx={{ position: 'absolute', mt: { xs: -7, md: -27.5 }, ml: { xs: 2, md: 14 } }}>
        <Typography sx={{ fontWeight: 300 }} variant="h5">
          hello
        </Typography>
      </Box>
      <Box sx={{ position: 'absolute', mt: { xs: -7, md: -22 }, ml: { xs: 2, md: 18.5 } }}>
        <Typography color="white" sx={{ fontWeight: 300 }} variant="h5">
         hello
        </Typography>
      </Box>
      <Box sx={{ position: 'absolute', mt: { xs: -7, md: -22 }, ml: { xs: 2, md: 60 } }}>
        <Typography sx={{ fontWeight: 300 }} variant="h5">
          hello
        </Typography>
      </Box>
      <Box sx={{ position: 'absolute', mt: { xs: -7, md: -18.5 }, ml: { xs: 2, md: 17.5 } }}>
        <Typography sx={{ fontWeight: 300 }} variant="h5">
          hello
        </Typography>
      </Box>
      <Box sx={{ position: 'absolute', mt: { xs: -7, md: -18.5 }, ml: { xs: 2, md: 59.8 } }}>
        <Typography sx={{ fontWeight: 300 }} variant="h5">
          hello
        </Typography>
      </Box>

      <Box sx={{ position: 'absolute', mt: { xs: -7, md: -11.3 }, ml: { xs: 2, md: 5.5 } }}>
        <Typography sx={{ fontWeight: 300 }} variant="h5">
          hello
        </Typography>
      </Box>
      <Box sx={{ position: 'absolute', mt: { xs: -7, md: -8.5 }, ml: { xs: 2, md: 5.5 } }}>
        <Typography sx={{ fontWeight: 300 }} variant="h5">
          hello
        </Typography>
      </Box>
      <Box sx={{ position: 'absolute', mt: { xs: -7, md: -5.8 }, ml: { xs: 2, md: 5.5 } }}>
        <Typography sx={{ fontWeight: 300 }} variant="h5">
          hello
        </Typography>
      </Box>

      <Box sx={{ position: 'absolute', mt: { xs: -7, md: -11.3 }, ml: { xs: 2, md: 26 } }}>
        <Typography sx={{ fontWeight: 300 }} variant="h5">
          5965
        </Typography>
      </Box>
      <Box sx={{ position: 'absolute', mt: { xs: -7, md: -8.5 }, ml: { xs: 2, md: 26 } }}>
        <Typography sx={{ fontWeight: 300 }} variant="h5">
          2088TC
        </Typography>
      </Box>
      <Box sx={{ position: 'absolute', mt: { xs: -7, md: -5.8 }, ml: { xs: 2, md: 26 } }}>
        <Typography sx={{ fontWeight: 300 }} variant="h5">
          2088TC
        </Typography>
      </Box>

      <Box sx={{ position: 'absolute', mt: { xs: -7, md: -11.3 }, ml: { xs: 2, md: 46 } }}>
        <Typography sx={{ fontWeight: 300 }} variant="h5">
          53
        </Typography>
      </Box>
      <Box sx={{ position: 'absolute', mt: { xs: -7, md: -8.5 }, ml: { xs: 2, md: 46 } }}>
        <Typography sx={{ fontWeight: 300 }} variant="h5">
          49
        </Typography>
      </Box>
      <Box sx={{ position: 'absolute', mt: { xs: -7, md: -5.8 }, ml: { xs: 2, md: 46 } }}>
        <Typography sx={{ fontWeight: 300 }} variant="h5">
          93
        </Typography>
      </Box>

      <Box sx={{ position: 'absolute', mt: { xs: -7, md: -11.3 }, ml: { xs: 2, md: 58 } }}>
        <Typography sx={{ fontWeight: 300 }} variant="h5">
         hello
        </Typography>
      </Box>
      <Box sx={{ position: 'absolute', mt: { xs: -7, md: -8.5 }, ml: { xs: 2, md: 58 } }}>
        <Typography sx={{ fontWeight: 300 }} variant="h5">
          hello
        </Typography>
      </Box>
      <Box sx={{ position: 'absolute', mt: { xs: -7, md: -5.8 }, ml: { xs: 2, md: 58 } }}>
        <Typography sx={{ fontWeight: 300 }} variant="h5">
          hello
        </Typography>
      </Box> */}
    </>
  );
};

export default BackOfPlusCard;
