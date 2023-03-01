// assets
import { ShopOutlined } from '@ant-design/icons';

// icons
const icons = {
  ShopOutlined
};

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const Orders = {
  id: 'orders',
  title: 'Requests',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'My Orders',
      type: 'item',
      url: '/my-orders',
      icon: icons.ShopOutlined
    }
  ]
};

export default Orders;
