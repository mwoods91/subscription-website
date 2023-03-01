// assets
import { IdcardOutlined } from '@ant-design/icons';

// icons
const icons = {
  IdcardOutlined
};

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const IDCard = {
  id: 'idcard',
  title: 'Card',
  type: 'group',
  children: [
    {
      id: 'idcard',
      title: 'Device ID Card',
      type: 'item',
      url: '/my-id-card',
      icon: icons.IdcardOutlined
    }
  ]
};

export default IDCard;
