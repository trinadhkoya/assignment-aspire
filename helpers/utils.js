import { Dimensions, PixelRatio } from 'react-native';

const pixelRatio = PixelRatio.get();
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const adjust = (size) => {
  return size;
};

export default adjust;
