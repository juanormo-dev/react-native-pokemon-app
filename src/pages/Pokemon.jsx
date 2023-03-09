import React, { useEffect, useState } from "react";
import { Text, SafeAreaView } from "react-native";

const Pokemon = ({ route, navigation }) => {
  const { params } = route;

  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    setPokemon(params.data);
  }, [params]);

  if (!pokemon) return null;

  return (
    <SafeAreaView>
      <Text>{pokemon.name}</Text>
    </SafeAreaView>
  );
};

export default Pokemon;
