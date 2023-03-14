import React from "react";
import Ionicons from "@expo/vector-icons/FontAwesome5";
import { Text, SafeAreaView, Image, StyleSheet, View } from "react-native";

const Favorite = ({ id }) => {
  const addFavortire = () => {
    console.log(`add fav: `, id);
  };

  return (
    <Ionicons
      name="heart"
      color="#E74C3C"
      size={25}
      style={{ marginRight: 20 }}
      onPress={addFavortire}
    ></Ionicons>
  );
};

export default Favorite;
