import styled from 'styled-components';
const WrapperProductCardStyled = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,500;0,600;0,700;1,500;1,600;1,700&family=Nunito+Sans:wght@200;300;400;600&family=Paytone+One&family=Poppins:wght@200;300&display=swap');
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin: 20px;
  width: 250px;
  height: 400px;
  cursor: pointer;
  font-family: 'Josefin Sans', sans-serif;
  /* glass effect */
  background: rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(11.8px);
  -webkit-backdrop-filter: blur(11.8px);

  @media (max-width: 562px) {
    width: 80%;
  }
  &&& {
    .card-img-container {
      display: flex;
      align-items: center;
      width: 200px;
      height: 200px;
    }
    .card-img {
      /* width: 200px; */
      height: 150px;
      object-fit: contain;
    }
    .card-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 10px;
      width: 200px;

      word-break: break-all;
    }
    .product-title {
      font-weight: bold;

      text-align: center;
      letter-spacing: 0px;
    }
    .product-price {
      font-size: 200%;
      font-family: 'Paytone One', sans-serif;
    }
    .btn-add-to-cart {
      position: absolute;
      top: 7px;
      right: 7px;
      &:hover {
        background-color: #a7c4f2;
      }
    }
    .btn-add-to-like {
      position: absolute;
      top: 7px;
      left: 7px;

      &:hover {
        background-color: #f7d2d2;
      }
    }
  }
`;
export default WrapperProductCardStyled;
