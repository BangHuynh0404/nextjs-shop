import styled from 'styled-components';
const WrapperFooterStyled = styled.div`
  display: flex;
  &&& {
    .footer {
      display: flex;
      flex: 1;
      padding: 2rem 0;
      border-top: 1px solid #eaeaea;
      justify-content: center;
      align-items: center;
    }

    .author-name {
      font-weight: bold;
    }
  }
`;
export default WrapperFooterStyled;
