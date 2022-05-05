import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import colors from '../../colors';

const IcoPaymentsTab = (props) => (
  <Svg width={props.width} height={props.height} {...props}>
    <Path
      d="M35.169 10A11.837 11.837 0 0 0 23.5 22a11.838 11.838 0 0 0 11.667 12 11.33 11.33 0 0 0 6.651-2.2c.5-.473.811-.529.811-1.041l.007-.1a1.075 1.075 0 0 0-1.06-1.09 1.026 1.026 0 0 0-.764.343 9.322 9.322 0 0 1-5.633 1.9 9.7 9.7 0 0 1-9.563-9.833 9.567 9.567 0 1 1 19.127 0 10.009 10.009 0 0 1-.921 4.19 9.724 9.724 0 0 0-.49 1.185l-.007.1a1.078 1.078 0 0 0 1.063 1.092 1.054 1.054 0 0 0 1-.776A12.189 12.189 0 0 0 46.836 22a11.835 11.835 0 0 0-11.667-12Zm-6.516 10.7a1.045 1.045 0 0 0 .3.676 1.026 1.026 0 0 0 .676.3.791.791 0 0 0 .108 0h10.8a1.033 1.033 0 1 0 0-2.067l-8.437.012 1.222-1.234a1 1 0 0 0-1.413-1.413l-2.956 2.983a.988.988 0 0 0-.289.632h-.007a.654.654 0 0 0 0 .11Zm8.247 6.891a1 1 0 0 0 1.416 0l2.958-2.978a1 1 0 0 0 .289-.629h.007v-.108a1.039 1.039 0 0 0-.3-.673 1.05 1.05 0 0 0-.676-.3.791.791 0 0 0-.108 0h-10.8a1.031 1.031 0 1 0 0 2.062l8.439-.012-1.222 1.237a.987.987 0 0 0-.003 1.401Z"
      transform="translate(-23.5 -10)"
      style={{
        fill: props.fillColor,
      }}
    />
  </Svg>
);
IcoPaymentsTab.defaultProps = {
  fillColor: colors.malachite,
  width: 24,
  height: 24,
};
IcoPaymentsTab.propTypes = {
  fillColor: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};
export default IcoPaymentsTab;
