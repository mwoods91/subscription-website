import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Box, Container } from '@mui/material';
import Form from './Form';
import FormIndex from './Form/FormIndex';

// ==============================|| AUTHENTICATION - WRAPPER ||============================== //

const RegisterWrapper = () => {
  const RegisterImage = require('../../../../assets/images/Register/Register.jpeg');

  const theme = useTheme();

  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        overflow: 'hidden'
      }}
    >
      <Container>
        <Box display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} position={'relative'}>
          <Box width={1} order={{ xs: 2, md: 1 }} display={'flex'} alignItems={'center'}>
            <Container>
              {/* <Form /> */}
              <FormIndex />
            </Container>
          </Box>
          <Box
            sx={{
              flex: { xs: '0 0 100%', md: '0 0 50%' },
              position: 'relative',
              maxWidth: { xs: '100%', md: '50%' },
              order: { xs: 1, md: 2 },
              minHeight: { xs: 'auto', md: 'calc(100vh - 58px)' }
            }}
          >
            <Box
              sx={{
                width: { xs: 1, md: '50vw' },
                height: '100%',
                position: 'relative'
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden'
                }}
              >
                <Box
                  sx={{
                    overflow: 'hidden',
                    left: '0%',
                    width: 1,
                    height: 1,
                    position: { xs: 'relative', md: 'absolute' },
                    clipPath: {
                      xs: 'none',
                      md: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)'
                    },
                    shapeOutside: {
                      xs: 'none',
                      md: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)'
                    }
                  }}
                >
                  <Box
                    sx={{
                      height: { xs: 'auto', md: 1 },
                      '& img': {
                        objectFit: 'cover'
                      }
                    }}
                  >
                    <Box
                      component={'img'}
                      loading="lazy"
                      src={RegisterImage}
                      height={{ xs: 'auto', md: 1 }}
                      maxHeight={{ xs: 300, md: 1 }}
                      width={1}
                      maxWidth={1}
                      sx={{ opacity: '75%', filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none' }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

RegisterWrapper.propTypes = {
  children: PropTypes.node
};

export default RegisterWrapper;
