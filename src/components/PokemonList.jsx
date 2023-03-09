import React from "react";
import { View, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons, loadPokemons, isNext, isLoading }) => {
  const loadMore = () => {
    loadPokemons();
  };

  return (
    <View>
      <FlatList
        data={pokemons}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(pokemon) => String(pokemon.id)}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        contentContainerStyle={styles.flatListPokemons}
        onEndReached={!isLoading && isNext && loadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          <ActivityIndicator
            size="large"
            style={styles.spinner}
            color="#AEAEAE"
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatListPokemons: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60,
  },
});

export default PokemonList;
