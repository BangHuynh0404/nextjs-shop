import styled from 'styled-components';

const WrapperNavigationBarStyled = styled.nav`
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;600&family=Paytone+One&family=Poppins:wght@200;300&display=swap');
  display: flex;
  position: sticky;
  top: 0;
  padding: 5px;
  height: 60px;
  width: 100%;
  min-width: 414px;
  justify-content: space-between;
  /* glass effect */
  background: rgba(255, 255, 255, 0.22);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(11.7px);
  -webkit-backdrop-filter: blur(11.7px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  z-index: 10;

  &&& {
    .navbar-left {
      flex: 1;
      display: flex;
      /* Navbar left Items */

      @media (max-width: 768px) {
        display: none;
      }
    }
    .logo {
      width: 60px;
      height: 100%;
    }
    .shop-name {
      font-family: 'Paytone One', sans-serif;
      font-size: 25px;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
      & > a {
        color: black;
      }
    }

    .menu {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 90%;

      @media (max-width: 768px) {
        display: none;
      }
    }
    .menu-items {
      text-align: center;
      padding: 10px;
      margin: 10px;
      color: black;
      font-weight: bold;
      -webkit-transition: box-shadow 0.3s 0s linear;
      -moz-transition: box-shadow 0.3s 0s linear;
      -o-transition: box-shadow 0.3s 0s linear;
      transition: box-shadow 0.3s 0s linear;
      &:hover {
        box-shadow: 0 -2px 0 black inset;
      }
      > * {
        color: black;
      }
    }
    .select-item {
      box-shadow: 0 -2px 0 black inset;
    }
    .login {
      display: flex;
      align-items: center;
      padding-left: 10px;
      padding-right: 10px;
    }
    .navbar-mobile {
      width: 100%;
      display: none;
      justify-content: space-around;
      align-items: center;
      @media (max-width: 768px) {
        display: flex;
      }
    }
    .navbar-right {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: end;
      gap: 20px;
      @media (max-width: 768px) {
        display: none;
      }
    }

    .menu-mobile {
      display: flex;
      justify-content: center;
      align-items: center;
      color: black;
      height: 50px;
      width: 60px;
      font-size: 30px;
    }
    .navbar-right-mobile {
      display: flex;
      align-items: center;
      justify-content: end;
      gap: 20px;
    }
  }
`;
export default WrapperNavigationBarStyled;
