import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DebitCardScreen from '../screens/DebitCardScreen';
import colors from '../assets/colors';

import { tabLabels } from '../constants';
import { IcoAccountTab, IcoCreditTab, IcoDebitCardTab, IcoHomeTab, IcoPaymentsTab } from '../assets/icons/tab';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
      style={styles.shadow}
      backBehavior="none"
      initialRouteName="Debit Card">
      <Tab.Screen
        name="Home"
        component={DebitCardScreen}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
          },
        }}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabIconView}>
              <IcoHomeTab fillColor={focused ? colors.malachite : colors.alto}></IcoHomeTab>
              <Text style={[styles.tabLabel, { color: focused ? colors.malachite : colors.alto }]}>
                {tabLabels.home}
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Debit Card"
        component={DebitCardScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabIconView}>
              <IcoDebitCardTab fillColor={focused ? colors.malachite : colors.alto}></IcoDebitCardTab>
              <Text style={[styles.tabLabel, { color: focused ? colors.malachite : colors.alto }]}>
                {tabLabels.debitCard}
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Payments"
        component={DebitCardScreen}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
          },
        }}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabIconView}>
              <IcoPaymentsTab fillColor={focused ? colors.malachite : colors.alto}></IcoPaymentsTab>
              <Text style={[styles.tabLabel, { color: focused ? colors.malachite : colors.alto }]}>
                {tabLabels.payment}
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Credit"
        component={DebitCardScreen}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
          },
        }}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabIconView}>
              <IcoCreditTab fillColor={focused ? colors.malachite : colors.alto}></IcoCreditTab>
              <Text style={[styles.tabLabel, { color: focused ? colors.malachite : colors.alto }]}>
                {tabLabels.credit}
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={DebitCardScreen}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
          },
        }}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabIconView}>
              <IcoAccountTab fillColor={focused ? colors.malachite : colors.alto}></IcoAccountTab>
              <Text style={[styles.tabLabel, { color: focused ? colors.malachite : colors.alto }]}>
                {tabLabels.profile}
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  tabIconView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    paddingTop: 6,
    fontSize: 9,
  },
});
