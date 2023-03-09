import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons }) => {
  return (
    <View>
      <FlatList
        data={pokemons}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(pokemon) => String(pokemon.id)}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        contentContainerStyle={styles.flatListPokemons}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatListPokemons: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
});

export default PokemonList;
