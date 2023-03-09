import React, { useEffect, useState } from "react";
import { Text, ScrollView } from "react-native";
import HeaderPokemon from "../components/Pokemon/HeaderPokemon";

const Pokemon = ({ route, navigation }) => {
  const { params } = route;

  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    setPokemon(params.data);
  }, [params]);

  if (!pokemon) return null;

  return (
    <ScrollView>
      <HeaderPokemon pokemon={pokemon} />
    </ScrollView>
  );
};

export default Pokemon;
