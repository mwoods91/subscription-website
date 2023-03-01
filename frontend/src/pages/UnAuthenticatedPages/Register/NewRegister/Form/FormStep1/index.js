import React from 'react';
import { Grid, TextField, Button, Box, MenuItem, Select, FormControl, InputLabel, Chip, OutlinedInput } from '@mui/material';
import { Prefix, County, Diagnosis, Indication } from '../../../../../../data';
import MuiTextField from '../../../../../../components/TextField';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const PersonalSummary = ({ nextStep, values, onChange }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  const ITEM_HEIGHT = 29;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 12.5 + ITEM_PADDING_TOP,
        width: 250
      }
    }
  };

  return (
    <>
      <Grid spacing={0.5} container>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <TextField
            select
            sx={{ '& .MuiInputBase-root': { height: 29, Width: 100 } }}
            fullWidth
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            name="prefix"
            value={values.prefix}
            label="Prefix"
            onChange={onChange}
          >
            {Prefix.map((item) => (
              <MenuItem key={item.id} value={item.title}>
                {item.title}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={12} md={4.5} lg={4.5}>
          <MuiTextField variant="outlined" name="firstname" value={values.firstname} label="First Name" onChange={onChange} />
        </Grid>
        <Grid item xs={12} sm={12} md={4.5} lg={4.5}>
          <MuiTextField variant="outlined" name="lastname" label="Last Name" value={values.lastname} onChange={onChange} />
        </Grid>
      </Grid>
      <Grid sx={{ mt: 1.5 }} container spacing={0.5}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <MuiTextField variant="outlined" name="address1" value={values.address1} label="Address Line 1" onChange={onChange} />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <MuiTextField variant="outlined" name="address2" value={values.address2} label="Address Line 2" onChange={onChange} />
        </Grid>
      </Grid>
      <Grid container sx={{ mt: 1.5 }} spacing={1}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <MuiTextField variant="outlined" name="town" value={values.town} label="Town" onChange={onChange} />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <MuiTextField variant="outlined" name="eircode" value={values.eircode} label="Eircode" onChange={onChange} />
        </Grid>
      </Grid>
      <Grid container sx={{ mt: 1.5 }} spacing={0.5}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <TextField
            select
            sx={{ '& .MuiInputBase-root': { height: 29, Width: 100 } }}
            fullWidth
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            name="county"
            value={values.county}
            label="County"
            onChange={onChange}
          >
            {County.map((item) => (
              <MenuItem key={item.id} value={item.county}>
                {item.county}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <MuiTextField variant="outlined" name="phone" value={values.phone} label="Phone" onChange={onChange} />
        </Grid>
      </Grid>
      <Grid container sx={{ mt: 1.5 }} spacing={0.5}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <MuiTextField variant="outlined" name="email" value={values.email} label="Email Address" onChange={onChange} />
        </Grid>
      </Grid>
      <Grid container sx={{ mt: 1 }} spacing={0.5}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <FormControl>
            <InputLabel shrink id="diagnosis">
              Diagnosis
            </InputLabel>
            <Select
              sx={{
                minWidth: matches ? 550 : 310,
                maxHeight: values.diagnosis.length === 0 ? 29 : 300
              }}
              labelId="diagnosis"
              id="diagnosis"
              multiple
              name="diagnosis"
              value={values.diagnosis}
              onChange={onChange}
              input={<OutlinedInput label="Diagnosis" />}
              renderValue={(selectedDiagnosis) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, maxWidth: '500px', whiteSpace: 'nowrap' }}>
                  {selectedDiagnosis.map((value) => (
                    <Chip key={value} label={value} variant="outlined" color="primary" size="small" />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {Diagnosis.map((name) => (
                <MenuItem key={name.id} value={name.name}>
                  {name.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container sx={{ mt: 1 }} spacing={0.5}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <FormControl>
            <InputLabel shrink id="indication">
              Indication
            </InputLabel>
            <Select
              sx={{
                minWidth: matches ? 550 : 310,
                maxHeight: values.diagnosis.length === 0 ? 29 : 300
              }}
              labelId="indication"
              id="indication"
              multiple
              name="indication"
              value={values.indication}
              onChange={onChange}
              input={<OutlinedInput label="Indication" />}
              renderValue={(selectedDiagnosis) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, maxWidth: '500px', whiteSpace: 'nowrap' }}>
                  {selectedDiagnosis.map((value) => (
                    <Chip key={value} label={value} variant="outlined" color="primary" size="small" />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {Indication.map((name) => (
                <MenuItem key={name.id} value={name.name}>
                  {name.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
        <Button type="button" variant="contained" onClick={nextStep}>
          Go to device details
        </Button>
      </Box>
    </>
  );
};

export default PersonalSummary;
