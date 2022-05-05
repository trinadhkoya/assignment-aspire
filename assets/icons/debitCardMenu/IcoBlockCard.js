import * as React from 'react';
import Svg, { Circle, G, Path } from 'react-native-svg';
import colors from '../../colors';
import PropTypes from 'prop-types';

const IcoBlockCard = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} {...props}>
    <G transform="translate(213 -305)">
      <Circle
        cx={16}
        cy={16}
        r={16}
        transform="translate(-213 305)"
        style={{
          fill: props.circleBgColor,
        }}
      />
      <Path
        d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8ZM2 8a5.961 5.961 0 0 1 1.115-3.471l8.356 8.356A5.99 5.99 0 0 1 2 8Zm10.885 3.471L4.529 3.115a5.991 5.991 0 0 1 8.356 8.356Z"
        transform="translate(-205 313)"
        style={{
          fill: props.fillColor,
        }}
      />
      <Path
        transform="rotate(45 -481.81 -83.958)"
        style={{
          fill: props.secondaryFill,
        }}
        d="M0 0h11.8v2H0z"
      />
    </G>
  </Svg>
);
IcoBlockCard.defaultProps = {
  fillColor: colors.malibu,
  secondaryFill: colors.white,
  width: 32,
  height: 32,
  circleBgColor: colors.azure,
};
IcoBlockCard.propTypes = {
  fillColor: PropTypes.string,
  secondaryFill: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  circleBgColor: PropTypes.string,
};
export default IcoBlockCard;
