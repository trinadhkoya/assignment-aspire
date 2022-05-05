import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import colors from '../../colors';
import PropTypes from 'prop-types';

const IcoBack = (props) => (
  <Svg
    width={props.width}
    height={props.height}
    viewBox="0 0 512.006 512.006"
    style={{
      enableBackground: 'new 0 0 512.006 512.006',
    }}
    {...props}>
    <G fill={props.fillColor}>
      <G>
        <Path d="M388.419,475.59L168.834,256.005L388.418,36.421c8.341-8.341,8.341-21.824,0-30.165s-21.824-8.341-30.165,0 L123.586,240.923c-8.341,8.341-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251 c5.461,0,10.923-2.091,15.083-6.251C396.76,497.414,396.76,483.931,388.419,475.59z" />
      </G>
    </G>
  </Svg>
);

IcoBack.defaultProps = {
  fillColor: colors.white,
  width: 32,
  height: 32,
};
IcoBack.propTypes = {
  fillColor: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};
export default IcoBack;
