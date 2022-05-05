import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../../assets/colors';

class Divider extends React.Component {
  render() {
    const { additionalStyles } = this.props;
    return <View style={[styles.default, additionalStyles]} />;
  }
}

const styles = StyleSheet.create({
  default: {
    borderBottomColor: colors.alto,
    borderBottomWidth: 1,
  },
});
export default Divider;
