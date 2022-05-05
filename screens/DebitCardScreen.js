import React, { useEffect, useState } from 'react';
import { Alert, Dimensions, SafeAreaView, StyleSheet, View } from 'react-native';
import PopUpCard from './components/PopUpCard';
import { selectAvailableBalance, selectCurrencyUnits, setCompleteCardDetails } from '../store/slices/debitCardSlice';
import {
  selectAppColorSolid,
  setAppColorSolid,
  setIsLoadingIndicatorDisplayed,
  setLoadingIndicatorText,
} from '../store/slices/appVariablesSlice';
import { setUserId } from '../store/slices/userSlice';
import { useDispatch, useSelector, useStore } from 'react-redux';
import debitCardDetailsAPI from '../api/debitCardDetailsAPI';
import colors from '../assets/colors';
import AspireText from '../components/Text/Text';
import labels from '../data/constants';
import { ScreenHeader } from '../components/Header';

const { width, height } = Dimensions.get('screen');

const dummyUserIDsList = ['d32b8789f913925cb3b7d491a59e19fc'];

const dummyUserIDsColorScheme = {
  d32b8789f913925cb3b7d491a59e19fc: colors.malachite,
};

const DebitCardScreen = (props) => {
  const store = useStore();
  const dispatch = useDispatch();
  const currency = useSelector(selectCurrencyUnits);
  const availableBalance = useSelector(selectAvailableBalance);
  const appColorSolid = useSelector(selectAppColorSolid);

  const [cardDetails, setCardDetails] = useState([]);
  const [headerHeight, setHeaderHeight] = useState(44);

  const manageLoadingIndicator = (displayFlag, message) => {
    dispatch(
      setIsLoadingIndicatorDisplayed({
        isLoadingIndicatorDisplayed: displayFlag,
      })
    );
    dispatch(
      setLoadingIndicatorText({
        loadingIndicatorText: message,
      })
    );
  };

  const cardDetailsApi = async (userId) => {
    if (userId == null) {
      return;
    }
    const response = await debitCardDetailsAPI
      .get('/cardDetails/' + userId)
      .then()
      .catch((error) => {
        manageLoadingIndicator(false, '');
        return createOneButtonAlert('Error', 'Error Encountered in fetching data');
      });

    manageLoadingIndicator(false, '');
    if (response.status !== 200) {
      return;
    } else {
      let tempCardDetails = response.data;
      if (tempCardDetails.cardNumber != null) {
        dispatch(setCompleteCardDetails(response.data));
        let tempCCode = dummyUserIDsColorScheme[userId];
        dispatch(
          setAppColorSolid({
            appColorSolid: tempCCode,
          })
        );
        setCardDetails(response.data); // The API returns just card details JSON in case of successfull query
      } else {
        return createOneButtonAlert('Error', 'No Cards Registered for the your ID');
      }
    }
  };

  const fetchRandomCardDetails = () => {
    dispatch(
      setUserId({
        userId: dummyUserIDsList[0],
      })
    );
    manageLoadingIndicator(true, 'Fetching Debit Card Details');
    cardDetailsApi(dummyUserIDsList[0]);
  };

  useEffect(() => {
    fetchRandomCardDetails();
  }, []);

  const createOneButtonAlert = (title, message) =>
    Alert.alert(title, message, [
      {
        text: 'OK',
        onPress: () => {},
      },
    ]);

  return (
    <SafeAreaView style={styles.background}>
      <View style={{ flex: 1 }}>
        <ScreenHeader showLeftIcon={false} showRightButton={false}></ScreenHeader>
        <View style={styles.debitCardLabel}>
          <AspireText bold h2 fontColor={colors.white} title={'Debit Card'}></AspireText>
        </View>

        <View style={{ paddingHorizontal: 24 }}>
          <AspireText h6 title={labels.avlBal} fontColor={colors.white}></AspireText>
          <View style={styles.currencyTextView}>
            <View style={styles.currencyView}>
              <AspireText title={currency} h5 bold fontColor={colors.white}></AspireText>
            </View>
            <AspireText title={availableBalance} h3 bold fontColor={colors.white}></AspireText>
          </View>
        </View>
      </View>
      <PopUpCard props={props} />
    </SafeAreaView>
  );
};

export default DebitCardScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    position: 'relative',
    paddingRight: 24,
  },
  text: {
    color: 'blue',
  },
  background: {
    backgroundColor: colors.downRiver,
    flex: 1,
  },
  behind: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: width,
    height: height,
    top: 0,
    backgroundColor: 'white',
  },
  currencyView: {
    backgroundColor: colors.malachite,
    width: 40,
    height: 22,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  debitCardLabel: {
    paddingLeft: 24,
    paddingBottom: 24,
  },
  currencyTextView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
  },
});
