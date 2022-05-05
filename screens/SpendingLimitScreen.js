import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IcoHomeTab } from '../assets/icons/tab';
import colors from '../assets/colors';
import { ScreenHeader } from '../components/Header';

const SpendingLimitScreen = () => {
  return (
    <View style={styles.background}>
      <ScreenHeader backgroundColor={colors.downRiver} showRightButton rightButtonComponent={() => <IcoHomeTab />} />
    </View>
  );
};

export default SpendingLimitScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'space-between',
    marginLeft: 0,
    marginRight: 0,
    flex: 1,
  },
  background: {
    backgroundColor: '#0C365A',
    flex: 1,
  },
  headerLeftIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginLeft: 0,
  },
  headerRightIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginRight: 0,
  },
  spendLimitTv: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    flex: 1,
    height: 33,
  },
  slidingPanelComponent: {
    flex: 1,
    marginTop: '35%',
  },
});
