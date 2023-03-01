import React, { Fragment, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

//third party
import { Step, Stepper, StepLabel, Box } from '@mui/material';
import { useFormik } from 'formik';

//project import
import PersonalSummary from './FormStep1';
import DeviceSummary from './FormStep2';

const FormIndex = () => {
  const [search] = useSearchParams();
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const formik = useFormik({
    initialValues: {
      //personal data
      prefix: 'Mr',
      firstname: 'Mark',
      lastname: 'Woods',
      address1: '23 Boyle O Reilly Terrace',
      address2: '',
      town: 'Dundalk',
      county: 'Louth',
      eircode: 'A91 T2P3',
      phone: '0877767940',
      email: 'mark@heartrhythmireland.com',
      dob: '15-01-1991',
      diagnosis: ['Diabetes'],
      indication: [],
      physician: 'Dr Walsh',
      date: new Date(),

      //generator data
      GeneratorManufacturer: 'Medtronic',
      GeneratorModelName: 'Azure DR MRI',
      GeneratorModelNumber: 'WSR01',
      GeneratorChambers: 'Dual Chamber',
      GeneratorType: 'Pacemaker',
      GeneratorSerialNumber: 'RZL5669559',

      //atrial lead data
      atrialManufacturer: '',
      atriallength: '',
      atrialfixation: '',
      atrialModelNumber: '',
      atrialSerialNumber: '',

      //rv lead data
      RVManufacturer: 'Medtronic',
      RVlength: '52cm',
      RVfixation: 'Screw In',
      RVModelNumber: '5698',
      RVSerialNumber: 'NLW569852',

      //lv text
      LVManufacturer: '',
      LVlength: '',
      LVfixation: '',
      LVModelNumber: '',
      LVSerialNumber: ''
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log(values);
    }
  });

  const FormSteps = ['Personal information', 'Device Information'];

  function getStepContent() {
    switch (step) {
      case 0:
        return <PersonalSummary nextStep={nextStep} onChange={formik.handleChange} onSubmit={formik.handleSubmit} values={formik.values} />;
      case 1:
        return (
          <DeviceSummary
            nextStep={nextStep}
            prevStep={prevStep}
            onChange={formik.handleChange}
            onSubmit={formik.handleSubmit}
            values={formik.values}
          />
        );
      default:
        throw new Error('Unknown step');
    }
  }

  return (
    <Fragment>
      <Stepper activeStep={step} sx={{ pt: 3, pb: 5 }}>
        {FormSteps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box>
        <form onSubmit={formik.handleSubmit}>{getStepContent(step)}</form>
      </Box>
    </Fragment>
  );
};

export default FormIndex;
