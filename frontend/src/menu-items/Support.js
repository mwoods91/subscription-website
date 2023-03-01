// assets
import { UserOutlined } from '@ant-design/icons';

// icons
const icons = {
  UserOutlined
};

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const Support = {
  id: 'account',
  title: 'Account',
  type: 'group',
  children: [
    {
      id: 'account',
      title: 'Account Settings',
      type: 'item',
      url: '/my-account/personal',
      icon: icons.UserOutlined
    }
  ]
};

export default Support;
