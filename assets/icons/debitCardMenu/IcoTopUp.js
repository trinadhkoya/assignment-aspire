import * as React from 'react';
import Svg, { Circle, G, Path } from 'react-native-svg';
import colors from '../../colors';
import PropTypes from 'prop-types';

const IcoTopUp = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} {...props}>
    <G transform="translate(-.094)">
      <Circle
        cx={16}
        cy={16}
        r={16}
        transform="translate(.094)"
        style={{
          fill: props.circleBgColor,
        }}
      />
      <Path
        d="m8.589 5.246 1.431-1.4v6.394a1.149 1.149 0 0 0 2.3 0V3.844l1.43 1.4a1.166 1.166 0 0 0 1.625 0 1.11 1.11 0 0 0 0-1.592L11.981.33a1.166 1.166 0 0 0-1.625 0L6.964 3.653a1.11 1.11 0 0 0 0 1.592 1.167 1.167 0 0 0 1.625.001Z"
        transform="translate(4.961 7.899)"
        style={{
          stroke: '#325baf',
          strokeWidth: '.1px',
          fill: props.fillColor,
        }}
      />
      <Path
        d="M17.954 11.754a2.757 2.757 0 0 1-2.773 2.734H7.66a2.757 2.757 0 0 1-2.773-2.734 1.142 1.142 0 0 1 2.284 0 .487.487 0 0 0 .489.482h7.521a.487.487 0 0 0 .489-.482 1.142 1.142 0 0 1 2.284 0Z"
        transform="translate(4.709 9.667)"
        style={{
          fill: colors.porcelain,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          stroke: colors.azure,
          strokeWidth: '.1px',
        }}
      />
    </G>
  </Svg>
);

IcoTopUp.defaultProps = {
  fillColor: colors.malibu,
  secondaryFill: colors.azure,
  width: 32,
  height: 32,
  circleBgColor: colors.azure,
};
IcoTopUp.propTypes = {
  fillColor: PropTypes.string,
  secondaryFill: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  circleBgColor: PropTypes.string,
};

export default IcoTopUp;
