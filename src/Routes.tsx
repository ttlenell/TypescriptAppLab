import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StackNavigationProp } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { RouteProp } from "@react-navigation/native";

import ProductsScreen from "../src/screens/ProductsScreen";
import ProductDetailScreen from "../src/screens/ProductDetailScreen";

type RootStackParamList = {
  Home: undefined;
  Detail: { itemId: number };
};

export type ProductListViewNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Home"
>;
export type ProductDetailViewRouteProp = RouteProp<
  RootStackParamList,
  "Detail"
>;

const RootStack = createStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen
          name="Home"
          component={ProductsScreen}
          options={{ title: "Home Screen" }}
        />
        <RootStack.Screen
          name="Detail"
          component={ProductDetailScreen}
          options={{ title: "Detail" }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
