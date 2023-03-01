import PropTypes from 'prop-types';
import { forwardRef, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Chip, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';

// project import
import { activeItem } from '../../../../../store/reducers/menu';

// ==============================|| NAVIGATION - LIST ITEM ||============================== //

const NavItem = ({ item, level }) => {
  const location = useLocation();
  const theme = useTheme();
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menu);
  const { drawerOpen, openItem } = menu;

  let itemTarget = '_self';
  if (item.target) {
    itemTarget = '_blank';
  }

  let listItemProps = { component: forwardRef((props, ref) => <Link {...props} to={item.url} target={itemTarget} ref={ref} />) };
  if (item?.external) {
    listItemProps = { component: 'a', href: item.url, target: itemTarget };
  }

  const Icon = item.icon;
  const itemIcon = item.icon ? <Icon style={{ fontSize: drawerOpen ? '1.25rem' : '1.25rem' }} /> : false;

  const isSelected = openItem.findIndex((id) => id === item.id) > -1;

  const { pathname } = useLocation();

  // active menu item on page load
  useEffect(() => {
    if (pathname.startsWith(item.url)) {
      dispatch(activeItem({ openItem: [item.id] }));
    }

    // eslint-disable-next-line
  }, [pathname, location]);

  const textColor = theme.palette.mode === 'dark' ? 'grey.400' : 'text.primary';
  const iconSelectedColor = theme.palette.mode === 'dark' && drawerOpen ? 'text.primary' : 'primary.main';

  return (
    <ListItemButton
      {...listItemProps}
      disabled={item.disabled}
      selected={isSelected}
      sx={{
        mt: -1.5,
        zindex: 1201,
        pl: drawerOpen ? `${level * 27}px` : 1.5,
        py: !drawerOpen && level === 1 ? 1.25 : 0.8,
        ...(drawerOpen && {
          '&:hover': {
            bgcolor: theme.palette.mode === 'dark' ? 'divider' : '#f0f0f0'
          },
          '&.Mui-selected': {
            bgcolor: theme.palette.mode === 'dark' ? 'divider' : '#f5f5f5',
            borderRight: `2px solid ${theme.palette.primary.main}`,
            color: iconSelectedColor,
            '&:hover': {
              color: iconSelectedColor,
              bgcolor: theme.palette.mode === 'dark' ? 'divider' : '#f0f0f0'
            }
          }
        }),
        ...(!drawerOpen && {
          '&:hover': {
            bgcolor: 'transparent'
          },
          '&.Mui-selected': {
            '&:hover': {
              bgcolor: 'transparent'
            },
            bgcolor: 'transparent'
          }
        })
      }}
    >
      {itemIcon && (
        <ListItemIcon
          sx={{
            minWidth: 28,
            color: isSelected ? iconSelectedColor : textColor,
            ...(!drawerOpen && {
              width: 36,
              height: 36,
              alignItems: 'center',
              justifyContent: 'center',
              '&:hover': {
                bgcolor: theme.palette.mode === 'dark' ? 'secondary.light' : 'primary.lighter'
              }
            }),
            ...(!drawerOpen &&
              isSelected && {
                bgcolor: theme.palette.mode === 'dark' ? 'primary.900' : 'primary.lighter',
                '&:hover': {
                  bgcolor: theme.palette.mode === 'dark' ? 'primary.darker' : 'primary.lighter'
                }
              })
          }}
        >
          {itemIcon}
        </ListItemIcon>
      )}
      {(drawerOpen || (!drawerOpen && level !== 1)) && (
        <ListItemText
          primary={
            <Typography variant="h6" sx={{ color: isSelected ? iconSelectedColor : textColor }}>
              {item.title}
            </Typography>
          }
        />
      )}
      {(drawerOpen || (!drawerOpen && level !== 1)) && item.chip && (
        <Chip
          color={item.chip.color}
          variant={item.chip.variant}
          size={item.chip.size}
          label={item.chip.label}
          avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
        />
      )}
    </ListItemButton>
  );
};

NavItem.propTypes = {
  item: PropTypes.object,
  level: PropTypes.number
};

export default NavItem;
