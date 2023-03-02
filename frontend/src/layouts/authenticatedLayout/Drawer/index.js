import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from '../../../components/logo';

// material-ui
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery, Box, Drawer, Link, List, ListItemButton, ListItemIcon, ListItemText, Button, Divider } from '@mui/material';

// project import
import DrawerHeader from './DrawerHeader';
import DrawerContent from './DrawerContent';
import MiniDrawerStyled from './MiniDrawerStyled';
import { drawerWidth } from '../../../config';

// ==============================|| MAIN LAYOUT - DRAWER ||============================== //

const MainDrawer = ({ open, handleDrawerToggle, window }) => {
  const navigate = useNavigate();
  const search = useLocation();
  const theme = useTheme();
  const [drawerToggle, setDrawerToggle] = useState(false);
  const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

  // responsive drawer container
  const container = window !== undefined ? () => window().document.body : undefined;

  const drawerToggler = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerToggle(open);
  };

  const LogOut = () => {
    navigate('/');
  };

  // header content
  const drawerContent = useMemo(() => <DrawerContent />, []);
  const drawerHeader = useMemo(() => <DrawerHeader open={open} />, [open]);

  return (
    <Box component="nav" sx={{ flexShrink: { md: 0 }, zindex: 1300 }} aria-label="mailbox folders">
      {matchDownSM ? (
        <Drawer anchor="bottom" open={open} onClose={handleDrawerToggle} sx={{ '& .MuiDrawer-paper': { backgroundImage: 'none' } }}>
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
              <Link style={{ textDecoration: 'none' }} href="/dashboard">
                <Box sx={{ textAlign: 'center', height: '3rem', mt: 0.8 }}>
                  <Logo isIcon={!open} sx={{ width: open ? 'auto' : 35, height: 35 }} />
                </Box>
              </Link>
              <Divider />
              {/* <Link style={{ textDecoration: 'none' }} href="/dashboard">
                <ListItemButton component="span">
                  <ListItemIcon></ListItemIcon>
                  <ListItemText
                    primary="HOME"
                    primaryTypographyProps={{
                      variant: 'h6',
                      color: search.pathname === '/dashboard' ? 'primary' : 'text.primary'
                    }}
                  />
                </ListItemButton>
              </Link> */}
              <Divider />
              <Link style={{ textDecoration: 'none' }} href="/my-id-card">
                <ListItemButton component="span">
                  <ListItemIcon></ListItemIcon>
                  <ListItemText
                    primary="MY ID CARD"
                    primaryTypographyProps={{
                      variant: 'h6',
                      color: search.pathname === '/my-id-card' ? 'primary' : 'text.primary'
                    }}
                  />
                </ListItemButton>
              </Link>
              <Divider />
              <Link style={{ textDecoration: 'none' }} href="/payment-plan">
                <ListItemButton component="span">
                  <ListItemIcon></ListItemIcon>
                  <ListItemText
                    primary="MY SUBSCRIPTION"
                    primaryTypographyProps={{
                      variant: 'h6',
                      color: search.pathname === '/payment-plan' ? 'primary' : 'text.primary'
                    }}
                  />
                </ListItemButton>
              </Link>
              <Divider />
              {/* <Link style={{ textDecoration: 'none' }} href="/my-orders">
                <ListItemButton component="span">
                  <ListItemIcon></ListItemIcon>
                  <ListItemText
                    primary="MY ORDERS"
                    primaryTypographyProps={{
                      variant: 'h6',
                      color: search.pathname === '/my-orders' ? 'primary' : 'text.primary'
                    }}
                  />
                </ListItemButton>
              </Link>
              <Divider /> */}
              <Link style={{ textDecoration: 'none' }} href="/my-account/personal">
                <ListItemButton component="span">
                  <ListItemIcon></ListItemIcon>
                  <ListItemText
                    primary="MY ACCOUNT"
                    primaryTypographyProps={{
                      variant: 'h6',
                      color: search.pathname === '/my-account' ? 'primary' : 'text.primary'
                    }}
                  />
                </ListItemButton>
              </Link>
              <Divider />
              <Box sx={{ textAlign: 'center', height: '3rem', mt: 1.2 }}>
                <Button sx={{ borderRadius: 2 }} color="primary" variant="contained" onClick={LogOut}>
                  LOGOUT
                </Button>
              </Box>
            </List>
          </Box>
        </Drawer>
      ) : !matchDownMD ? (
        <MiniDrawerStyled variant="permanent" open={open}>
          {drawerHeader}
          {drawerContent}
        </MiniDrawerStyled>
      ) : (
        <Drawer
          anchor="bottom"
          container={container}
          variant="temporary"
          open={open}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', lg: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              borderRight: `1px solid ${theme.palette.divider}`,
              backgroundImage: 'none',
              boxShadow: 'inherit'
            }
          }}
        >
          {drawerHeader}
          {drawerContent}
        </Drawer>
      )}
    </Box>
  );
};

MainDrawer.propTypes = {
  open: PropTypes.bool,
  window: PropTypes.object,
  handleDrawerToggle: PropTypes.func
};

export default MainDrawer;
