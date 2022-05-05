import * as React from 'react';
import Svg, { Defs, Path } from 'react-native-svg';
import colors from '../../colors';
import PropTypes from 'prop-types';
/* SVGR has dropped some elements not supported by react-native-svg: style */

const IcoAccountTab = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} {...props}>
    <Defs></Defs>
    <Path
      style={{
        fill: 'transparent',
        opacity: 0.001,
      }}
      d="M0 0h24v24H0z"
    />
    <Path
      fill={props.fillColor}
      className="b"
      d="M11.86 11.547a5.6 5.6 0 0 0 4.091-1.691 5.58 5.58 0 0 0 1.692-4.083 5.581 5.581 0 0 0-1.7-4.082 5.793 5.793 0 0 0-8.181 0 5.581 5.581 0 0 0-1.7 4.082 5.58 5.58 0 0 0 1.7 4.082 5.605 5.605 0 0 0 4.098 1.692ZM21.975 18.462a14.244 14.244 0 0 0-.194-1.515 11.921 11.921 0 0 0-.373-1.523 7.517 7.517 0 0 0-.627-1.42 5.36 5.36 0 0 0-.945-1.23 4.168 4.168 0 0 0-1.358-.852 4.7 4.7 0 0 0-1.733-.313 1.76 1.76 0 0 0-.94.4c-.282.183-.611.4-.979.63a5.612 5.612 0 0 1-1.266.557 4.923 4.923 0 0 1-3.1 0 5.6 5.6 0 0 1-1.265-.557c-.364-.232-.694-.445-.98-.631a1.758 1.758 0 0 0-.939-.4 4.691 4.691 0 0 0-1.733.314 4.165 4.165 0 0 0-1.358.852 5.361 5.361 0 0 0-.945 1.23 7.532 7.532 0 0 0-.627 1.42 11.949 11.949 0 0 0-.373 1.523 14.193 14.193 0 0 0-.194 1.515 20.45 20.45 0 0 0-.048 1.416 3.978 3.978 0 0 0 1.186 3.014 4.264 4.264 0 0 0 3.05 1.111H17.79a4.263 4.263 0 0 0 3.05-1.111 3.976 3.976 0 0 0 1.184-3.012 20.914 20.914 0 0 0-.049-1.418Zm0 0"
    />
  </Svg>
);

IcoAccountTab.defaultProps = {
  fillColor: colors.malachite,
  width: 24,
  height: 24,
};
IcoAccountTab.propTypes = {
  fillColor: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};
export default IcoAccountTab;
