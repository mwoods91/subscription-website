import PropTypes from 'prop-types';
import { useContext, useRef, useState, Fragment } from 'react';
import { UserContext } from '../../../../../contexts/UserContext';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Avatar,
  Box,
  ButtonBase,
  CardContent,
  ClickAwayListener,
  Grid,
  Paper,
  Popper,
  Stack,
  Tooltip,
  Typography,
  useMediaQuery
} from '@mui/material';

// project import

import MainCard from '../../../../../components/MainCard';
import Transitions from '../../../../../components/Transitions';
import IconButton from '../../../../../components/IconButton';

import { useNavigate } from 'react-router-dom';

import LogoutIcon from '@mui/icons-material/Logout';

// tab panel wrapper
function TabPanel({ children, value, index, ...other }) {
  return (
    <div role="tabpanel" hidden={value !== index} id={`profile-tabpanel-${index}`} aria-labelledby={`profile-tab-${index}`} {...other}>
      {value === index && children}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

// ==============================|| HEADER CONTENT - PROFILE ||============================== //

const Profile = () => {
  const [state, setState] = useContext(UserContext);

  let navigate = useNavigate();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down('md'), {
    defaultMatches: true
  });
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const [value] = useState(0);

  const profilePage = () => {
    navigate('/my-account/personal');
  };

  const handleLogout = () => {
    setState({ user: {}, confirmtoken: '' });
    localStorage.removeItem('auth');
    navigate('/login');
  };

  console.log('STATE => ', state);

  const iconBackColorOpen = theme.palette.mode === 'dark' ? 'grey.200' : 'grey.300';

  return (
    <>
      {state && state.confirmtoken ? (
        <Box sx={{ flexShrink: 0, ml: 0.75 }}>
          {isMd ? (
            <>
              <ButtonBase
                sx={{
                  p: 0.25,
                  bgcolor: open ? iconBackColorOpen : 'transparent',
                  borderRadius: 1,
                  '&:hover': { bgcolor: theme.palette.mode === 'dark' ? 'secondary.light' : 'secondary.lighter' },
                  '&:focus-visible': {
                    outline: `2px solid ${theme.palette.secondary.dark}`,
                    outlineOffset: 2
                  }
                }}
                aria-label="open profile"
                ref={anchorRef}
                aria-controls={open ? 'profile-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
              >
                <Stack direction="row" spacing={1} alignItems="center" sx={{ p: 0.5 }}>
                  <Avatar></Avatar>
                  <Typography variant="subtitle1">{state.user.fullname}</Typography>
                </Stack>
              </ButtonBase>
            </>
          ) : (
            <>
              <ButtonBase
                sx={{
                  p: 0.25,
                  bgcolor: open ? iconBackColorOpen : 'transparent',
                  borderRadius: 1,
                  '&:hover': { bgcolor: theme.palette.mode === 'dark' ? 'secondary.light' : 'secondary.lighter' },
                  '&:focus-visible': {
                    outline: `2px solid ${theme.palette.secondary.dark}`,
                    outlineOffset: 2
                  }
                }}
                aria-label="open profile"
                ref={anchorRef}
                aria-controls={open ? 'profile-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
              >
                <Stack direction="row" spacing={1} alignItems="center" sx={{ p: 0.5 }}>
                  <Avatar></Avatar>
                  {/* <Box component={'img'} alt="profile user" src={''} sx={{ width: 60, height: 60, objectFit: 'contain' }} /> */}
                  {/* <Typography variant="subtitle1">{user?.userName}</Typography> */}
                  <Typography variant="subtitle1">{state.user.fullname}</Typography>
                </Stack>
              </ButtonBase>
              <Popper
                placement="bottom-end"
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
                popperOptions={{
                  modifiers: [
                    {
                      name: 'offset',
                      options: {
                        offset: [0, 9]
                      }
                    }
                  ]
                }}
              >
                {({ TransitionProps }) => (
                  <Transitions type="fade" in={open} {...TransitionProps}>
                    {open && (
                      <Paper
                        sx={{
                          boxShadow: theme.customShadows.z1,
                          width: 230,
                          minWidth: 300,
                          maxWidth: 290,
                          [theme.breakpoints.down('md')]: {
                            maxWidth: 250
                          }
                        }}
                      >
                        <ClickAwayListener onClickAway={handleClose}>
                          <MainCard elevation={0} border={false} content={false}>
                            <CardContent sx={{ px: 1, pt: 3 }}>
                              <Grid sx={{ cursor: 'pointer' }} container justifyContent="space-between" alignItems="center">
                                <Grid item>
                                  <Stack onClick={profilePage} direction="row" spacing={1.25} alignItems="center">
                                    <Avatar></Avatar>
                                    <Stack>
                                      <Typography variant="h6">{state.user.fullname}</Typography>
                                      <Typography variant="body2" color="textSecondary">
                                        {state.user.email}
                                      </Typography>
                                    </Stack>
                                  </Stack>
                                </Grid>
                                <Grid item>
                                  <Tooltip title="Logout">
                                    <IconButton onClick={handleLogout} size="medium" sx={{ color: 'text.primary' }}>
                                      <LogoutIcon />
                                    </IconButton>
                                  </Tooltip>
                                </Grid>
                              </Grid>
                            </CardContent>
                            {open && (
                              <>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}></Box>
                                <TabPanel value={value} index={0} dir={theme.direction}></TabPanel>
                              </>
                            )}
                          </MainCard>
                        </ClickAwayListener>
                      </Paper>
                    )}
                  </Transitions>
                )}
              </Popper>
            </>
          )}
        </Box>
      ) : null}
    </>
  );
};

export default Profile;
