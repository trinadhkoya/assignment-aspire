import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { selectAppColorSolid } from '../../store/slices/appVariablesSlice';
import {
  selectCardCVV,
  selectCardNumber,
  selectCardNumberVisible,
  selectCardValidThru,
  selectNameOnCard,
  setCardNumberVisible,
} from '../../store/slices/debitCardSlice';
import IcoVISA from '../../assets/icons/icoVISA';
import AspireText from '../../components/Text/Text';
import colors from '../../assets/colors';
import IcoEyeOpen from '../../assets/icons/misc/IcoEyeOpen';
import CardNumberMask from '../../components/CardNumberMask/CardNumberMask';

const { width } = Dimensions.get('screen');

const CARD_WIDTH = width - 48; //Ensures that the currency notation and the card's left end align just like the mock up
const CARD_HEIGHT = 0.6 * CARD_WIDTH; // Aspect Ratio of the card is 0.6 [h/w]

const CardView = () => {
  const dispatch = useDispatch();
  const cardDetailsDisplayed = useSelector(selectCardNumberVisible); //selectCardNumberVisible;
  const cardNumber = useSelector(selectCardNumber); //selectCardNumber;
  const cardValidThru = useSelector(selectCardValidThru); //selectCardValidThru;
  const cardCVV = useSelector(selectCardCVV); //selectCardCVV;
  const nameOnCard = useSelector(selectNameOnCard); //selectNameOnCard;
  const appColorSolid = useSelector(selectAppColorSolid);

  const toggleShowCardNumber = () => {
    dispatch(
      setCardNumberVisible({
        cardNumberVisible: !cardDetailsDisplayed,
      })
    );
  };

  return (
    <View style={styles.cardContainer}>
      {/* A view for the card image : Width is calculated as a percentage of the screen width as per shared design, height is calculated such as to maintain the aspect ratio */}
      <View style={styles.cardInnerContainer}>
        {/* A view for the "Show Card Number Button" */}
        <Button
          type="clear"
          title={cardDetailsDisplayed ? `  Hide card number` : `  Show card number`}
          titleStyle={styles.badgeText}
          icon={cardDetailsDisplayed ? <IcoEyeOpen></IcoEyeOpen> : <IcoEyeOpen></IcoEyeOpen>}
          onPress={() => {
            toggleShowCardNumber();
          }}
        />
      </View>
      <View style={[styles.cardInnerDetails, styles.shadow, { backgroundColor: appColorSolid }]}>
        {/* A view for the actual card */}
        <View style={styles.companyLogo}>
          <Image source={require('../../assets/AspireLogo.png')} resizeMode="contain" />
        </View>
        <View style={{ marginLeft: 24 }}>
          <View style={styles.cardDetails}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <AspireText title={nameOnCard} bold h3 fontColor={colors.white}>
                {nameOnCard}
              </AspireText>
            </View>
            <View style={{ alignContent: 'space-between' }}>
              <CardNumberMask cardDetailsDisplayed={cardDetailsDisplayed} cardNumber={cardNumber}></CardNumberMask>
            </View>
            <View style={styles.cvvAndValid}>
              <AspireText
                semi
                h6
                fontColor={colors.white}
                style={{ paddingRight: 32 }}
                title={`Thru: ${cardValidThru}`}>
                Thru: {cardValidThru}
              </AspireText>
              <AspireText
                h6
                semi
                fontColor={colors.white}
                title={`CVV: ${cardDetailsDisplayed ? cardCVV : '* * *'}`}></AspireText>
            </View>
          </View>
        </View>
        <View style={styles.cardSponsor}>
          <IcoVISA></IcoVISA>
        </View>
      </View>
      <View style={styles.slideUpPanelCurve} />
    </View>
  );
};

export default CardView;

const styles = StyleSheet.create({
  iconImage: {
    height: 16,
    width: 16,
    marginRight: 6,
  },

  shadow: {
    shadowColor: '#AAA',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.5,
    elevation: 8,
  },
  cardContainer: {
    backgroundColor: 'transparent',
    width: CARD_WIDTH,
    height: CARD_HEIGHT + 32,
    marginTop: -90,
  },
  cardInnerContainer: {
    backgroundColor: 'white',
    alignSelf: 'flex-end',
    width: 151,
    height: 45,
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
  },
  cardSponsor: {
    marginBottom: 24,
    marginRight: 24,
    height: 20,
    alignItems: 'flex-end',
  },
  companyLogo: {
    marginTop: 24,
    height: 21,
    alignItems: 'flex-end',
    marginRight: 24,
  },
  cardDetails: {
    height: CARD_HEIGHT - 89,
    flexDirection: 'column',
    alignContent: 'space-between',
  },
  badgeText: {
    color: colors.malachite,
    fontSize: 12,
    fontWeight: '600',
  },
  cardInnerDetails: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 10,
    marginTop: -13,
    padding: 0,
    zIndex: 9999,
  },
  slideUpPanelCurve: {
    backgroundColor: 'white',
    width: width,
    height: 85,
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    marginBottom: 0,
    marginTop: -85,
    marginLeft: -24,
    marginRight: -24,
  },
  cvvAndValid: {
    flexDirection: 'row',
    paddingTop: 12,
  },
});
