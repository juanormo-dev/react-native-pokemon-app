import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/FontAwesome5";
import Account from "../pages/Account";

import Pokedex from "../pages/Pokedex";
import React from "react";
import { Image } from "react-native";
import NavigationPokedex from "./NavigationPokedex";
import NavigationFavorite from "./NavigationFavorite";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator initialRouteName="Pokedex">
      <Tab.Screen
        name="Favorite1"
        component={NavigationFavorite}
        options={{
          headerTitle: "Favoritos",
          tabBarLabel: "Favoritos",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" color={color} size={size}></Ionicons>
          ),
        }}
      />
      <Tab.Screen
        name="Pokedexx"
        component={NavigationPokedex}
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: () => (
            <Image
              style={{ width: 75, height: 75, top: -15 }}
              source={require("../assets/pokeball.png")}
            ></Image>
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          headerTitle: "Mi cuenta",
          tabBarLabel: "Cuenta",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="user" color={color} size={size}></Ionicons>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;
