import * as React from 'react';
import Svg, { Circle, Defs, G, Path } from 'react-native-svg';
import colors from '../../colors';
import PropTypes from 'prop-types';
/* SVGR has dropped some elements not supported by react-native-svg: style */

const IcoSpendLimit = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} {...props}>
    <Defs></Defs>
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
        fill={props.secondaryFill}
        className="b"
        d="M-200.827 317.349a.219.219 0 0 0-.054-.159l-1.737-1.977a.219.219 0 0 0-.31-.02 9.039 9.039 0 0 0-1.97 2.46.219.219 0 0 0 .087.3l2.309 1.262a.219.219 0 0 0 .3-.087 5.976 5.976 0 0 1 1.3-1.626.219.219 0 0 0 .075-.153ZM-200.074 316.629a.219.219 0 0 0 .3.091 5.905 5.905 0 0 1 1.979-.637.219.219 0 0 0 .188-.247l-.354-2.608a.22.22 0 0 0-.247-.188 8.964 8.964 0 0 0-3 .967.219.219 0 0 0-.091.3ZM-202.877 320.124l-2.54-.689a.219.219 0 0 0-.269.154 9.059 9.059 0 0 0-.314 2.371c0 .138 0 .275.01.422a.219.219 0 0 0 .219.209h.01l2.629-.121a.219.219 0 0 0 .209-.229c0-.1-.007-.19-.007-.28a5.986 5.986 0 0 1 .208-1.567.219.219 0 0 0-.155-.27ZM-193.093 313.851a8.969 8.969 0 0 0-3.039-.85.219.219 0 0 0-.239.2l-.254 2.619a.219.219 0 0 0 .2.239 5.908 5.908 0 0 1 2 .56.219.219 0 0 0 .293-.1l1.143-2.371a.219.219 0 0 0-.104-.297ZM-189.25 317.519a.219.219 0 0 0-.024-.166 9.042 9.042 0 0 0-2.062-2.382.219.219 0 0 0-.308.032l-1.661 2.042a.219.219 0 0 0 .032.309 5.978 5.978 0 0 1 1.364 1.576.219.219 0 0 0 .3.076l2.259-1.35a.22.22 0 0 0 .1-.137ZM-188.412 319.257a.219.219 0 0 0-.275-.144l-2.511.787a.219.219 0 0 0-.144.275 5.968 5.968 0 0 1 .272 1.786c0 .09 0 .181-.007.28a.219.219 0 0 0 .209.229l2.629.121h.01a.219.219 0 0 0 .219-.209c.007-.146.01-.284.01-.422a9.035 9.035 0 0 0-.412-2.703Z"
      />
      <Path
        d="M173.745 310.747h-.113l-3.562-2.1a.226.226 0 0 0-.314.3l1.943 3.642a2.093 2.093 0 0 0-.011.212 2.057 2.057 0 1 0 2.057-2.057Z"
        transform="rotate(10.02 -84.976 -1791.345)"
        style={{
          fill: props.fillColor,
        }}
      />
    </G>
  </Svg>
);

IcoSpendLimit.defaultProps = {
  fillColor: colors.azure,
  secondaryFill: colors.malibu,
  width: 32,
  height: 32,
  circleBgColor: colors.azure,
};
IcoSpendLimit.propTypes = {
  fillColor: PropTypes.string,
  secondaryFill: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  circleBgColor: PropTypes.string,
};

export default IcoSpendLimit;
