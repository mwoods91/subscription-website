// assets
import { PoundCircleOutlined } from '@ant-design/icons';

// icons
const icons = {
  PoundCircleOutlined
};

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const Subscription = {
  id: 'subscription',
  title: 'Subscription',
  type: 'group',
  children: [
    {
      id: 'subscription',
      title: 'My Subscription',
      type: 'item',
      url: '/payment-plan',
      icon: icons.PoundCircleOutlined
    }
  ]
};

export default Subscription;
