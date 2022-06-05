import { Badge, Avatar, Dropdown } from 'antd';
import { NotificationOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { menu } from '../../layoutUtils/navbarLinkItems';
import WrapperCartStyled from './CartStyled';
const Cart = () => {
  return (
    <WrapperCartStyled>
      <Dropdown overlay={menu} placement='bottom' arrow={{ pointAtCenter: true }} className='cart'>
        <Badge count={3}>
          <ShoppingCartOutlined
            style={{
              fontSize: 23,
            }}
          />
        </Badge>
      </Dropdown>
    </WrapperCartStyled>
  );
};
export default Cart;
