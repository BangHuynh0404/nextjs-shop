import { Carousel } from 'antd';
import WrapperCarouselStyled from './CarouselStyled';

const CarouselCustom = () => (
  <WrapperCarouselStyled>
    <Carousel autoplay className='carousel'>
      <div>
        <h3 className='carousel-content'>1</h3>
      </div>
      <div>
        <h3 className='carousel-content'>2</h3>
      </div>
      <div>
        <h3 className='carousel-content'>3</h3>
      </div>
      <div>
        <h3 className='carousel-content'>4</h3>
      </div>
    </Carousel>
  </WrapperCarouselStyled>
);

export default CarouselCustom;
