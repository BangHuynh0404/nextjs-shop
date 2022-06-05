import Lottie from 'react-lottie-player';
import content from '../public/json/404.json';
const PageNotFoundStyled = {
  width: 500,
  height: 500,
  margin: 'auto',
};
const PageNotFound = () => {
  return <Lottie loop={false} animationData={content} play style={PageNotFoundStyled} />;
};
export default PageNotFound;
