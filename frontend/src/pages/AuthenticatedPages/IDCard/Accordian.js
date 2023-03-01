import React, { useState } from 'react';
import MainCard from '../../../components/MainCard';
import { useTheme } from '@mui/material/styles';
import { Accordion, AccordionDetails, AccordionSummary, Box, Stack, Typography } from '@mui/material';

//3rd party
import { IdcardOutlined, GlobalOutlined, MobileOutlined, RightOutlined, UpOutlined, PhoneOutlined } from '@ant-design/icons';

const Accordian = () => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState('');

  const WristbandIcon = require('../../../assets/images/PlusIDCard/braceletIcon.png');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <MainCard title="Membership benefits" sx={{ mt: { xs: -7, md: 0 } }}>
      {' '}
      <Box
        sx={{
          '& .MuiAccordion-root': {
            borderColor: theme.palette.divider,
            '& .MuiAccordionSummary-root': {
              bgcolor: 'transparent',
              flexDirection: 'row',
              '&:focus-visible': {
                bgcolor: 'primary.lighter'
              }
            },
            '& .MuiAccordionDetails-root': {
              borderColor: theme.palette.divider
            },
            '& .Mui-expanded': {
              color: theme.palette.primary.main
            }
          }
        }}
      >
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Stack direction="row" spacing={1.5} alignItems="center">
              <GlobalOutlined style={{ color: '#437CAF', fontSize: '1.5rem' }} />
              <Typography variant="h6">HRI Global Access</Typography>
              <Box sx={{ position: 'absolute', right: 10 }}>{expanded === 'panel1' ? <UpOutlined /> : <RightOutlined />}</Box>
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', ml: { xs: '0%', md: '37%' } }}>
                <Box component={'img'} height={200} width={300} src={require('../../../assets/images/PlusBenefits/WorldMap.png')} />
              </Box>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </Stack>
          </AccordionDetails>
        </Accordion>
        {/* <Accordion sx={{ mt: 1 }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Stack direction="row" spacing={1.5} alignItems="center">
              <MobileOutlined style={{ color: '#437CAF', fontSize: '1.5rem' }} />
              <Typography variant="h6">HRI Plus App</Typography>
              <Box sx={{ position: 'absolute', right: 10 }}>{expanded === 'panel2' ? <UpOutlined /> : <RightOutlined />}</Box>
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, textAlign: 'center', ml: { xs: '35%', md: '45%' } }}>
              <Box component={'img'} height={150} width={90} src={require('../../../assets/images/PlusBenefits/MobileApp.png')} />
            </Box>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion> */}
        <Accordion sx={{ mt: 1 }} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Stack direction="row" spacing={1.5} alignItems="center">
              <IdcardOutlined style={{ color: '#437CAF', fontSize: '1.5rem' }} />
              <Typography variant="h6">Replacement ID Cards</Typography>
              <Box sx={{ position: 'absolute', right: 10 }}>{expanded === 'panel3' ? <UpOutlined /> : <RightOutlined />}</Box>
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, textAlign: 'center', ml: { xs: '0%', md: '36%' } }}>
              <Box component={'img'} height={150} width={300} src={require('../../../assets/images/PlusBenefits/PlusFront.png')} />
            </Box>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ mt: 1 }} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Box component={'img'} src={WristbandIcon} />
              <Typography variant="h6">Silcone Bracelet</Typography>
              <Box sx={{ position: 'absolute', right: 10 }}>{expanded === 'panel4' ? <UpOutlined /> : <RightOutlined />}</Box>{' '}
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, textAlign: 'center', ml: { xs: '0%', md: '36%' } }}>
              <Box component={'img'} height={120} width={270} src={require('../../../assets/images/PlusBenefits/WristBands.png')} />
            </Box>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ mt: 1 }} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <Stack direction="row" spacing={1.5} alignItems="center">
              <PhoneOutlined style={{ color: '#437CAF', fontSize: '1.5rem' }} />
              <Typography variant="h6">Information Line</Typography>
              <Box sx={{ position: 'absolute', right: 10 }}>{expanded === 'panel5' ? <UpOutlined /> : <RightOutlined />}</Box>
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </MainCard>
  );
};

export default Accordian;
