import WrapperNavigationBarStyled from './NavigationBarStyled';
import { useRouter } from 'next/router';
import logo from '../../../public/json/logo.json';
import Lottie from 'react-lottie-player';
import LinkCustom from '../../Link/Link.Custom';
import { Dropdown, Image } from 'antd';
import { menu } from '../layoutUtils/navbarLinkItems';
import { AppstoreFilled } from '@ant-design/icons';
import Avatar from 'antd/lib/avatar/avatar';
import { useRef } from 'react';
import { menuClassItems } from '../layoutUtils/utilsFunction';
import Link from 'next/link';
import Cart from './Cart/Cart';
import { motion } from 'framer-motion';
const NavigationBar = () => {
  const router = useRouter();
  const currentPath = router?.route.replace('/', '');
  return (
    <WrapperNavigationBarStyled className='navbar'>
      {/* LEFT AREA */}

      <div className='navbar-left'>
        {/* BRAND ICON */}
        <motion.div whileHover={{ scale: 1.5 }}>
          <LinkCustom href='/'>
            <Lottie loop animationData={logo} play className='logo' />
          </LinkCustom>
        </motion.div>

        {/* BRAND NAME */}
        <motion.div className='shop-name' whileHover={{ scale: 1.1 }}>
          <LinkCustom href='/'>Meow Shop</LinkCustom>
        </motion.div>
      </div>

      {/* CENTER AREA */}

      <div className='menu'>
        <Link href='about'>
          <a>
            <div className={menuClassItems('about', currentPath)}>About</div>
          </a>
        </Link>
        <Link href='shop'>
          <a>
            <div className={menuClassItems('shop', currentPath)}>Shop</div>
          </a>
        </Link>
        <Link href='contact'>
          <a>
            <div className={menuClassItems('Contact', currentPath)}>Contact</div>
          </a>
        </Link>
      </div>

      {/* RIGHT AREA */}

      <div className='navbar-right'>
        {/* CART */}

        <Cart />

        {/* LOGIN */}

        <motion.div className='login' whileHover={{ scale: 1.1 }}>
          {' '}
          <Avatar
            src={
              <Image
                preview={false}
                src='https://joeschmoe.io/api/v1/random'
                style={{ width: 42 }}
                alt='user avarta'
              />
            }
            size={42}
          />
        </motion.div>
      </div>

      {/* MOBILE VIEW */}

      <div className='navbar-mobile'>
        <Dropdown
          overlay={menu}
          placement='bottom'
          arrow={{ pointAtCenter: true }}
          trigger={['click']}
          className='menu-mobile'
        >
          <AppstoreFilled />
        </Dropdown>

        <div className='shop-name'>
          <LinkCustom href='/'>
            <Lottie loop animationData={logo} play className='logo' />
          </LinkCustom>
          <LinkCustom href='/'>Meow Shop</LinkCustom>
        </div>
        <div className='navbar-right-mobile'>
          <Cart />{' '}
          <Avatar
            src={
              <Image
                preview={false}
                src='https://joeschmoe.io/api/v1/random'
                style={{ width: 32 }}
                alt='user avarta'
              />
            }
          />
        </div>
      </div>
    </WrapperNavigationBarStyled>
  );
};
export default NavigationBar;
