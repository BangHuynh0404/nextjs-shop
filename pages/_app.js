import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import NavigationBar from '../components/layout/NavigationBar/NavigationBar';
import Footer from '../components/layout/Footer/Footer';

import styled from 'styled-components';
const WrapperApp = styled.div`
  &&& {
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <WrapperApp>
      <NavigationBar />
      <Component {...pageProps} />
      <Footer />
    </WrapperApp>
  );
}

export default MyApp;
