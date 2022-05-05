import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { selectIsLoadingIndicatorDisplayed, selectLoadingIndicatorText } from '../../store/slices/appVariablesSlice';
import colors from '../../assets/colors';

const LoadingIndicator = () => {
  const isLoadingIndicatorDisplayed = useSelector(selectIsLoadingIndicatorDisplayed);
  const loadingIndicatorText = useSelector(selectLoadingIndicatorText);

  return (
    <View style={isLoadingIndicatorDisplayed ? styles.loadingOverlay : { display: 'none' }}>
      <ActivityIndicator size="large" color={colors.malachite} />
      <Text style={{ textAlign: 'center', fontSize: 15, fontWeight: '700' }}>{loadingIndicatorText}</Text>
    </View>
  );
};

export default LoadingIndicator;

const styles = StyleSheet.create({
  loadingOverlay: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.25)',
    position: 'absolute',
    alignContent: 'center',
    justifyContent: 'center',
    zIndex: 9999,
  },
});
