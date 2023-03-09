import React from "react";
import { Text, SafeAreaView } from "react-native";

const Pokemon = ({ route, navigation }) => {
  const { pokemon } = route.params;

  console.log(pokemon);

  return (
    <SafeAreaView>
      <Text>Estamos en un Pokemon</Text>
    </SafeAreaView>
  );
};

export default Pokemon;
