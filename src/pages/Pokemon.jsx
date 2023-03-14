import { ScrollView } from "react-native";
import HeaderPokemon from "../components/Pokemon/HeaderPokemon";
import Ionicons from "@expo/vector-icons/FontAwesome5";
import React, { useEffect, useState } from "react";
import Statistics from "../components/Pokemon/Statistics";
import TypePokemon from "../components/Pokemon/TypePokemon";
import Favorite from "../components/Pokemon/Favorite";
import useAuth from "../hooks/useAuth";

const Pokemon = ({ route, navigation }) => {
  const { params } = route;

  const [pokemon, setPokemon] = useState();

  const { auth } = useAuth();

  useEffect(() => {
    setPokemon(params.data);

    navigation.setOptions({
      title: "",
      headerTransparent: true,
      headerRight: () => auth && <Favorite id={pokemon?.id} />,
      headerLeft: () => (
        <Ionicons
          name="arrow-left"
          color="#17202A"
          style={{ marginLeft: 20 }}
          size={25}
          onPress={navigation.goBack}
        ></Ionicons>
      ),
    });
  }, [params, navigation, pokemon]);

  if (!pokemon) return null;

  return (
    <ScrollView>
      <HeaderPokemon pokemon={pokemon} />
      <TypePokemon pokemon={pokemon} />
      <Statistics pokemon={pokemon} />
    </ScrollView>
  );
};

export default Pokemon;
