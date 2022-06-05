const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

import styled from 'styled-components';
const WrapperCarouselStyled = styled.div`
  display: flex;
  box-shadow: 1px 1px 3px grey;
  &&& {
    .carousel-content {
      height: '160px';
      color: '#fff';
      line-height: '160px';
      text-align: 'center';
      background: '#364d79';
    }
  }
`;
export default WrapperCarouselStyled;
