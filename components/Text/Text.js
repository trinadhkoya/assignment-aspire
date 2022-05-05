import * as React from 'react';
import { Text } from 'react-native';
import adjust from '../../helpers/utils';

const AspireText = ({ h1, h2, h3, h4, h5, h6, p, bold, italic, title, fontColor, semi, style, ...rest }) => {
  return (
    <Text
      style={[
        h1 && { fontSize: adjust(48) },
        h2 && { fontSize: adjust(32) },
        h3 && { fontSize: adjust(20) },
        h4 && { fontSize: adjust(16) },
        h5 && { fontSize: adjust(14) },
        h6 && { fontSize: adjust(13) },
        p && { fontSize: adjust(12) },
        bold && { fontWeight: 'bold' },
        italic && { fontStyle: 'italic' },
        style,
        fontColor && { color: fontColor },
        semi && { fontWeight: '600' },
      ]}
      {...rest}>
      {title}
    </Text>
  );
};
export default AspireText;
