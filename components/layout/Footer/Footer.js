import Image from 'next/image';
import WrapperFooterStyled from './FooterStyled';
const Footer = () => {
  return (
    <WrapperFooterStyled>
      <footer className='footer'>
        Created By &nbsp; <span className='author-name'>Bang Huynh</span>
        <div></div>
      </footer>
    </WrapperFooterStyled>
  );
};
export default Footer;
