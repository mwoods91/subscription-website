import PropTypes from 'prop-types';
import * as React from 'react';
import { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

// material-ui
import AppBar from '@mui/material/AppBar';
import { useTheme } from '@mui/material/styles';
import {
  useMediaQuery,
  Box,
  Button,
  Container,
  Drawer,
  Link,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
  useScrollTrigger,
  Divider
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

// project import
import Logo from '../../assets/images/Navbar/logo.png';
import Logo1 from '../../assets/images/Navbar/logo1.png';

// assets
import { LoginOutlined } from '@ant-design/icons';
import { MenuOutlined } from '@ant-design/icons';

function ElevationScroll({ layout, children, window }) {
  const theme = useTheme();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 10,
    target: window ? window() : undefined
  });

  const backColorScroll = theme.palette.mode === 'dark' ? theme.palette.grey[100] : '#fafafa';

  const backColor = layout !== 'landing' ? backColorScroll : 'transparent';

  return React.cloneElement(children, {
    style: {
      backgroundColor: trigger ? backColorScroll : backColor
    }
  });
}

const Header = ({ handleDrawerOpen, layout = 'landing', ...others }) => {
  const search = useLocation();
  const theme = useTheme();
  const matchDownLg = useMediaQuery(theme.breakpoints.down('lg'));
  const matchDownMd = useMediaQuery(theme.breakpoints.down('sm'));

  const [drawerToggle, setDrawerToggle] = useState(false);

  let navigate = useNavigate();
  const LoginButton = () => {
    navigate('/login');
  };

  const onClickHome = () => {
    navigate('/');
  };

  const drawerToggler = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerToggle(open);
  };

  return (
    <ElevationScroll layout={layout} {...others}>
      <AppBar
        sx={{
          bgcolor: 'transparent',
          color: theme.palette.text.primary,
          boxShadow: 'none',
          height: 80
        }}
      >
        <Container disableGutters={matchDownMd}>
          <Toolbar sx={{ px: { xs: 1.5, md: 0, lg: 0 }, py: 2 }}>
            <Stack direction="row" sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }} alignItems="center">
              <Typography onClick={onClickHome} component="div" sx={{ textAlign: 'left', display: 'inline-block', cursor: 'pointer' }}>
                <img src={Logo} alt="hri" height={50} width={325.5} />
              </Typography>
            </Stack>
            <Stack
              direction="row"
              sx={{
                '& .header-link': {
                  px: 1,
                  '&:hover': { color: theme.palette.primary.main }
                },
                display: { xs: 'none', md: 'block' }
              }}
              spacing={2}
            >
              {/* <Link
                className="header-link"
                color={search.pathname === '/' ? 'primary' : theme.palette.text.primary}
                component={RouterLink}
                to="/"
                underline="none"
              >
                HOME
              </Link> */}
              {/* <Link
                className="header-link"
                color={search.pathname === '/about-us' ? 'primary' : theme.palette.text.primary}
                component={RouterLink}
                to="/about-us"
                underline="none"
              >
                ABOUT US
              </Link> */}
              {/* <Link
                className="header-link"
                color={search.pathname === '/id-card' ? 'primary' : theme.palette.text.primary}
                component={RouterLink}
                to="/id-card"
                underline="none"
              >
                ID CARD
              </Link> */}
              {/* <Link
                className="header-link"
                color={search.pathname === '/plus-package' ? 'primary' : theme.palette.text.primary}
                component={RouterLink}
                to="/plus-package"
                underline="none"
              >
                HRI PLUS+
              </Link> */}
              {/* <Link
                className="header-link"
                color={search.pathname === '/hri-app' ? 'primary' : theme.palette.text.primary}
                component={RouterLink}
                to="/hri-app"
                underline="none"
              >
                OUR APP
              </Link> */}
              {/* <Link
                className="header-link"
                color={search.pathname === '/help-center' ? 'primary' : theme.palette.text.primary}
                component={RouterLink}
                to="/help-center"
                underline="none"
              >
                HELP CENTER
              </Link> */}
              <Link
                className="header-link"
                color={search.pathname === '/' ? 'primary' : theme.palette.text.primary}
                component={RouterLink}
                to="/"
                underline="none"
              >
                REGISTER
              </Link>
              <Box sx={{ display: 'inline-block' }}>
                <Button
                  sx={{ borderRadius: 4 }}
                  size="large"
                  color="primary"
                  variant="contained"
                  onClick={LoginButton}
                  endIcon={<LoginOutlined style={{ fontSize: '1.15rem' }} />}
                >
                  MyHRI+
                </Button>
              </Box>
            </Stack>

            {matchDownLg && (
              <Box
                sx={{
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  display: { xs: 'flex', md: 'none' }
                }}
              >
                {matchDownMd ? (
                  <>
                    <Stack direction="row" spacing={2}>
                      <Button
                        color="secondary"
                        {...(layout === 'component' ? { onClick: handleDrawerOpen } : { onClick: drawerToggler(true) })}
                        sx={{
                          '&:hover': {
                            bgcolor: theme.palette.mode === 'dark' ? 'secondary.lighter' : 'primary'
                          }
                        }}
                      >
                        <MenuOutlined
                          style={{
                            fontSize: '25px',
                            color: theme.palette.mode === 'dark' ? 'inherit' : theme.palette.grey[700]
                          }}
                        />
                      </Button>
                    </Stack>
                    <Typography component="div" sx={{ textAlign: 'left', display: 'inline-block' }}>
                      <img src={Logo1} alt="hri" height={50} width={60} />
                    </Typography>
                    <Button
                      sx={{ borderRadius: 4 }}
                      color="primary"
                      variant="contained"
                      onClick={LoginButton}
                      // startIcon={<LoginOutlined style={{ fontSize: '1.15rem' }} />}
                    >
                      MyHRI+
                    </Button>
                  </>
                ) : (
                  <>
                    <Stack direction="row" spacing={2}>
                      <Button
                        color="secondary"
                        {...(layout === 'component' ? { onClick: handleDrawerOpen } : { onClick: drawerToggler(true) })}
                        sx={{
                          '&:hover': {
                            bgcolor: theme.palette.mode === 'dark' ? 'secondary.lighter' : 'primary'
                          }
                        }}
                      >
                        <MenuOutlined
                          style={{
                            fontSize: '25px',
                            color: theme.palette.mode === 'dark' ? 'inherit' : theme.palette.grey[700]
                          }}
                        />
                      </Button>
                    </Stack>
                    <Typography component="div" sx={{ textAlign: 'left', display: 'inline-block' }}>
                      <img src={Logo} alt="hri" height={50} width={235} />
                    </Typography>
                    <Button
                      sx={{ borderRadius: 4 }}
                      color="primary"
                      variant="contained"
                      onClick={LoginButton}
                      // startIcon={<LoginOutlined style={{ fontSize: '1.15rem' }} />}
                    >
                      MyHRI+
                    </Button>
                  </>
                )}

                <Drawer
                  anchor="bottom"
                  open={drawerToggle}
                  onClose={drawerToggler(false)}
                  sx={{ '& .MuiDrawer-paper': { backgroundImage: 'none' } }}
                >
                  <Box
                    sx={{
                      width: 'auto',
                      '& .MuiListItemIcon-root': {
                        fontSize: '1rem',
                        minWidth: 28
                      }
                    }}
                    role="presentation"
                    onClick={drawerToggler(false)}
                    onKeyDown={drawerToggler(false)}
                  >
                    <List>
                      <Link style={{ textDecoration: 'none' }} href="tel:0416871457">
                        <ListItemButton component="span">
                          <ListItemIcon>
                            <LocalPhoneIcon sx={{ color: '#437CAF' }} />
                          </ListItemIcon>
                          <ListItemText
                            primary="041-6871457"
                            primaryTypographyProps={{
                              variant: 'h6',
                              color: 'text.primary'
                            }}
                          />
                        </ListItemButton>
                      </Link>
                      <Divider />
                      <Link style={{ textDecoration: 'none' }} href="/">
                        <ListItemButton component="span">
                          <ListItemIcon></ListItemIcon>
                          <ListItemText
                            primary="Home"
                            primaryTypographyProps={{
                              variant: 'h6',
                              color: search.pathname === '/' ? 'primary' : 'text.primary'
                            }}
                          />
                        </ListItemButton>
                      </Link>
                      <Divider />
                      <Link style={{ textDecoration: 'none' }} href="/about-us">
                        <ListItemButton component="span">
                          <ListItemIcon></ListItemIcon>
                          <ListItemText
                            primary="About"
                            primaryTypographyProps={{
                              variant: 'h6',
                              color: search.pathname === '/about-us' ? 'primary' : 'text.primary'
                            }}
                          />
                        </ListItemButton>
                      </Link>
                      <Divider />
                      <Link style={{ textDecoration: 'none' }} href="/id-card">
                        <ListItemButton component="span">
                          <ListItemIcon></ListItemIcon>
                          <ListItemText
                            primary="ID Card"
                            primaryTypographyProps={{
                              variant: 'h6',
                              color: search.pathname === '/id-card' ? 'primary' : 'text.primary'
                            }}
                          />
                        </ListItemButton>
                      </Link>
                      <Divider />
                      <Link style={{ textDecoration: 'none' }} href="/plus-package">
                        <ListItemButton component="span">
                          <ListItemIcon></ListItemIcon>
                          <ListItemText
                            primary="HRI Plus+"
                            primaryTypographyProps={{
                              variant: 'h6',
                              color: search.pathname === '/plus-package' ? 'primary' : 'text.primary'
                            }}
                          />
                        </ListItemButton>
                      </Link>
                    </List>
                    <Divider />
                    <Link style={{ textDecoration: 'none' }} href="/hri-app">
                      <ListItemButton component="span">
                        <ListItemIcon></ListItemIcon>
                        <ListItemText
                          primary="Our App"
                          primaryTypographyProps={{
                            variant: 'h6',
                            color: search.pathname === '/hri-app' ? 'primary' : 'text.primary'
                          }}
                        />
                      </ListItemButton>
                    </Link>
                    <Divider />
                    <Link style={{ textDecoration: 'none' }} href="/help-center">
                      <ListItemButton component="span">
                        <ListItemIcon></ListItemIcon>
                        <ListItemText
                          primary="Help Center"
                          primaryTypographyProps={{
                            variant: 'h6',
                            color: search.pathname === '/help-center' ? 'primary' : 'text.primary'
                          }}
                        />
                      </ListItemButton>
                    </Link>
                  </Box>
                </Drawer>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </ElevationScroll>
  );
};

Header.propTypes = {
  handleDrawerOpen: PropTypes.func,
  layout: PropTypes.string
};
export default Header;
