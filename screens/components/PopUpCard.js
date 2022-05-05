import React from 'react';
import { Alert, Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearProgress } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector, useStore } from 'react-redux';
import CardView from './CardView';
import {
  selectCardNumber,
  selectCurrencyUnits,
  selectWeeklySpendingLimit,
  selectWeeklySpendingLimitExhausted,
  setWeeklySpendingLimit,
  setWeeklySpendingLimitExhausted,
} from '../../store/slices/debitCardSlice';
import {
  selectAppColorSolid,
  setIsLoadingIndicatorDisplayed,
  setLoadingIndicatorText,
} from '../../store/slices/appVariablesSlice';
import { selectUserId } from '../../store/slices/userSlice';
import debitCardDetailsAPI from '../../api/debitCardDetailsAPI';
import { IcoAddCard, IcoBlockCard, IcoFreezeCard, IcoSpendLimit, IcoTopUp } from '../../assets/icons/debitCardMenu';

const { width, height } = Dimensions.get('screen');

const CARD_WIDTH = width - 48; //Ensures that the currency notation and the card's left end align just like the mock up
const CARD_HEIGHT = 0.6 * CARD_WIDTH; // Aspect Ratio of the card is 0.6 [h/w]

const renderSpendingLimitBar = (renderFlag, limitExhausted, totalLimit, currencyUnits, appColorSolid) => {
  if (renderFlag === true) {
    return (
      <View style={{ backgroundColor: 'white' }}>
        <View style={styles.progressBarContainer}>
          <View style={styles.progressBarView}>
            {/* View for heading and numerical representation of limit*/}
            <Text style={styles.limitText}>Debit card spending limit</Text>
            <View style={{ alignSelf: 'flex-end', flexDirection: 'row' }}>
              <Text style={{ color: appColorSolid, fontWeight: '400', fontSize: 12 }}>
                {currencyUnits}
                {limitExhausted}
              </Text>
              <Text style={styles.spendingLimitText}>{` | ${currencyUnits}  ${totalLimit}`}</Text>
            </View>
          </View>
          <LinearProgress
            color={appColorSolid}
            trackColor={appColorSolid + '10'}
            variant="determinate"
            value={limitExhausted / totalLimit}
            style={styles.linearProgressBar}
          />
        </View>
      </View>
    );
  } else {
    return <View style={{ display: 'none' }}></View>;
  }
};

const renderButton = (buttonState) => {
  if (buttonState === -1) {
    //No Button Present
    return <View style={{ display: 'none' }}></View>;
  } else if (buttonState === 0) {
    return (
      <View style={styles.switchContainer}>
        <Image style={styles.switch} source={require('../../assets/toggle.png')} resizeMode="contain" />
      </View>
    );
  } else if (buttonState === 1) {
    return (
      <View style={styles.switchContainer}>
        <Image style={styles.switch} source={require('../../assets/activeToggle.png')} resizeMode="contain" />
      </View>
    );
  }
};

const createOneButtonAlert = (title, message) =>
  Alert.alert(title, message, [
    {
      text: 'OK',
      onPress: () => {},
    },
  ]);

const PopUpCard = (props) => {
  const store = useStore();
  const dispatchEvent = useDispatch();

  let state = store.getState();

  let spendingLimit = useSelector(selectWeeklySpendingLimit);
  let spendingLimitExhausted = useSelector(selectWeeklySpendingLimitExhausted);
  let cardNumber = useSelector(selectCardNumber);
  let userId = useSelector(selectUserId);
  let currencyUnits = useSelector(selectCurrencyUnits);
  let isSpendingLimitSet = spendingLimit != null && spendingLimit > 0;
  let appColorSolid = useSelector(selectAppColorSolid);

  const menuArr = [
    {
      key: 'MenuItem#1', // A unique key to ignore warning
      menuTitle: 'Top-up account', // The Title of the menu Item
      menuSubtitle: 'Deposit money to your account to use with card', // The subtitle of the menu Item
      iconAssetUri: <IcoTopUp />, // Uri for the icon
      buttonState: -1, //A parameter that suggest about the radio button -1: Hidden; 0: Button inactive; 1: Button active
      itemEnabled: false, //A Parameter that tells if the menu item is enabled, therefore touchable opacity behavior
    },
    {
      key: 'MenuItem#2', //
      menuTitle: 'Weekly spending limit',
      menuSubtitle: isSpendingLimitSet
        ? 'Your weekly spending limit is ' + currencyUnits + ' ' + spendingLimit
        : "You haven't set any spending limit on card",
      iconAssetUri: <IcoSpendLimit />,
      buttonState: isSpendingLimitSet ? 1 : 0,
      itemEnabled: true,
    },
    {
      key: 'MenuItem#3', //
      menuTitle: 'Freeze card',
      menuSubtitle: 'Your debit card is currently active',
      iconAssetUri: <IcoFreezeCard />,
      buttonState: 0,
      itemEnabled: false,
    },
    {
      key: 'MenuItem#4', //
      menuTitle: 'Get a new card',
      menuSubtitle: 'This deactivates your current debit card',
      iconAssetUri: <IcoAddCard />,
      buttonState: -1,
      itemEnabled: false,
    },
    {
      key: 'MenuItem#5', //
      menuTitle: 'Deactivated cards',
      menuSubtitle: 'Your previously deactivated cards',
      iconAssetUri: <IcoBlockCard />,
      buttonState: -1,
      itemEnabled: false,
    },
  ];

  const manageLoadingIndicator = (displayFlag, message) => {
    dispatchEvent(
      setIsLoadingIndicatorDisplayed({
        isLoaderVisible: displayFlag,
      })
    );
    dispatchEvent(
      setLoadingIndicatorText({
        loadingText: message,
      })
    );
  };

  const removeSpendingLimitApi = async () => {
    const params = {
      userId: userId, //User ID for which Spending limit is being set
      cardNumber: cardNumber, //Card Number for which the Spending Limit is being set
    };

    //MARK: this line is used to contact one of the two mocked dumb APIs that return either success(90%) or failure(10%) in changing the limit
    let randomizedSucessfulApi =
      Math.floor(Math.random() * 100) < 10 ? '/removeSpendingLimitf' : '/removeSpendingLimits';
    console.log('API CALL : ' + randomizedSucessfulApi);
    console.log(params);

    const response = debitCardDetailsAPI
      .post(randomizedSucessfulApi, params)
      .then((response) => {
        manageLoadingIndicator(false, '');

        if (response.status !== 200) {
          return createOneButtonAlert('Error', 'Error Encountered in Removing Spending Limit');
        } else {
          console.log(response.data);
          if (response.data.success != null) {
            if (response.data.success === 'true') {
              dispatchEvent(
                setWeeklySpendingLimit({
                  weeklySpendingLimit: -1,
                })
              );
              dispatchEvent(
                setWeeklySpendingLimitExhausted({
                  weeklySpendingLimitExhausted: -1,
                })
              );
            } else if (
              response.data.success === 'false' &&
              response.data.reason != null &&
              response.data.reason !== ''
            ) {
              return createOneButtonAlert('Error', response.data.reason);
            }
          }
        }
      })
      .catch((error) => {
        console.log(response);
        console.log(error);
        manageLoadingIndicator(false, '');
        return createOneButtonAlert('Error', 'Error Encountered in Removing Spending Limit');
      });
  };

  const loadMenuItem = (menuKey, buttonState) => {
    switch (menuKey) {
      case 'MenuItem#1':
        break;
      case 'MenuItem#2':
        if (buttonState === 0) {
          //i.e. The Spending limit is not set ->  Open the Spending Limits screen
          props.props.navigation.push('SpendingLimit');
        } else if (buttonState === 1) {
          //i.e. The Spending limit is already set, unset it
          manageLoadingIndicator(true, 'Removing Spending Limit');
          removeSpendingLimitApi();
        }

        break;
      case 'MenuItem#3':
        break;
      case 'MenuItem#4':
        break;
      case 'MenuItem#5':
        break;
      default:
        //DO NOTHING HERE
        return;
    }
  };

  const totalMenuItemHeight = isSpendingLimitSet
    ? CARD_HEIGHT + 32 - 90 + 65 + 63 * menuArr.length + 243
    : CARD_HEIGHT + 63 * menuArr.length + 243;
  //CARD_HEIGHT - > height of Debit Card
  //32 -> Height of Show/Hide button
  //-90-> margin adjustment of the card
  //63 -> Height + Margin of each menu item
  //65 -> Height + Margin of bar item
  //243-> Top Transparent view

  //Calculating padding below menu items
  const extraPaddingNeeded = totalMenuItemHeight > height - 40 ? 60 : height - 40 - totalMenuItemHeight;
  return (
    <SafeAreaView style={{ top: 0, bottom: 0, ...styles.behind }}>
      <FlatList
        style={styles.debitCardListItemsContainer}
        bounces
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            <View style={{ alignItems: 'center' }}>
              <View style={{ backgroundColor: 'transparent', flex: 1, height: height * 0.3 }}></View>
              <CardView />
            </View>
            {renderSpendingLimitBar(
              isSpendingLimitSet,
              spendingLimitExhausted,
              spendingLimit,
              currencyUnits,
              appColorSolid
            )}
          </View>
        }
        ListFooterComponent={
          <View style={{ backgroundColor: 'white', height: extraPaddingNeeded, marginTop: -1 }} />
          //Padding at bottom
        }
        data={menuArr}
        renderItem={({ item }) => {
          return (
            <View style={{ backgroundColor: 'white', zIndex: -100, marginTop: -1 }}>
              <View style={{ marginLeft: 24, marginRight: 24 }}>
                <TouchableOpacity
                  onPress={() => {
                    loadMenuItem(item.key, item.buttonState);
                  }}
                  disabled={!item.itemEnabled}>
                  <View style={styles.menuItem}>
                    {item.iconAssetUri}
                    <View style={{ flexDirection: 'column', marginLeft: 12 }}>
                      <Text style={styles.menuTitle}>{item.menuTitle}</Text>
                      <Text style={styles.menuSubtitle}>{item.menuSubtitle}</Text>
                    </View>
                    {renderButton(item.buttonState)}
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
        scrollEnabled={true}></FlatList>
    </SafeAreaView>
  );
};

export default PopUpCard;

const styles = StyleSheet.create({
  behind: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    backgroundColor: 'transparent',
    width: '100%',
    flex: 1,
  },
  menuItem: {
    flexDirection: 'row',
    height: 41,
    marginTop: 22,
    alignContent: 'center',
    alignItems: 'center',
  },
  menuTitle: {
    height: 19,
    fontWeight: '400',
    fontSize: 14,
    alignContent: 'flex-start',
    flex: 1,
    marginBottom: 2,
  },
  menuIcon: {
    width: 32,
    height: 32,
  },
  menuSubtitle: {
    height: 18,
    fontWeight: '300',
    fontSize: 12,
    color: 'rgba(34,34,34,0.4)',
  },
  progressBarView: {
    marginBottom: 6,
    flexDirection: 'row',
    marginLeft: 0,
    marginRight: 0,
    alignContent: 'space-between',
  },
  progressBarContainer: {
    height: 39,
    marginLeft: 24,
    marginRight: 24,
    marginTop: 24,
  },
  limitText: {
    color: 'black',
    fontWeight: '400',
    fontSize: 13,
    alignSelf: 'flex-start',
    flex: 1,
  },
  linearProgressBar: {
    height: 15,
    borderRadius: 30,
    marginBottom: 0,
  },
  spendingLimitText: {
    color: '#222222',
    fontWeight: '300',
    fontSize: 12,
  },
  switch: {
    width: 34,
    height: 20,
  },
  debitCardListItemsContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    backgroundColor: 'transparent',
    width: '100%',
    height: height - 40, //-40 for tab bar
    flex: 1,
  },
  switchContainer: {
    alignItems: 'flex-end',
    flex: 1,
  },
});
