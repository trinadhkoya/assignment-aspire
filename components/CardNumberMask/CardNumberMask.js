import * as React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import AspireText from '../Text/Text';
import colors from '../../assets/colors';

const CARD_WIDTH = width - 48; //Ensures that the currency notation and the card's left end align just like the mock up
const { width } = Dimensions.get('screen');

function CardNumberMask(props) {
  const { cardNumber, cardDetailsDisplayed } = props;

  if (cardDetailsDisplayed) {
    return (
      <View style={{ flexDirection: 'row' }}>
        <AspireText
          h4
          semi
          fontColor={colors.white}
          style={styles.unmaskedText}
          title={cardNumber?.substring(0, 4)}></AspireText>
        <AspireText
          h4
          semifontColor={colors.white}
          style={[styles.unmaskedText, { marginLeft: 20 }]}
          title={cardNumber?.substring(4, 8)}></AspireText>
        <AspireText
          h4
          semifontColor={colors.white}
          style={[styles.unmaskedText, { marginLeft: 20 }]}
          title={cardNumber?.substring(8, 12)}></AspireText>
        <AspireText
          title={cardNumber?.substring(12, 16)}
          h4
          semi
          fontColor={colors.white}
          style={[styles.unmaskedText, { marginLeft: 20 }]}></AspireText>
      </View>
    );
  } else {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ marginLeft: 0, flexDirection: 'row', width: 50 }}>
          <View style={styles.bullets}></View>
          <View style={styles.bullets}></View>
          <View style={styles.bullets}></View>
          <View style={styles.bullets}></View>
        </View>
        <View style={styles.maskedView}>
          <View style={styles.bullets}></View>
          <View style={styles.bullets}></View>
          <View style={styles.bullets}></View>
          <View style={styles.bullets}></View>
        </View>
        <View style={styles.maskedView}>
          <View style={styles.bullets}></View>
          <View style={styles.bullets}></View>
          <View style={styles.bullets}></View>
          <View style={styles.bullets}></View>
        </View>
        <AspireText
          h4
          semi
          style={styles.maskedView}
          fontColor={colors.white}
          title={cardNumber?.substring(12, 16)}></AspireText>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  bullets: {
    height: 8,
    width: 8,
    borderRadius: 8,
    margin: 2,
    backgroundColor: 'white',
  },
  maskedView: {
    marginLeft: 20,
    flexDirection: 'row',
    width: 50,
  },
  unmaskedText: {
    color: colors.white,
    fontWeight: '500',
    fontSize: 16,
    width: 50,
    letterSpacing: 2,
  },
});

export default CardNumberMask;
