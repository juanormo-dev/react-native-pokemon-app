import { Text, SafeAreaView, View } from "react-native";
import React, { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import useAuth from "../hooks/useAuth";
import { getPokemonFavoriteApi } from "../api/favorite";
import { getPokeminDetailsApi } from "../api/service";
import PokemonList from "../components/PokemonList";

const Favorite = () => {
  const [pokemons, setPokemons] = useState([]);

  const { auth } = useAuth();

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        (async () => {
          const response = await getPokemonFavoriteApi();
          console.log(`All Fav Pokemons: `, response);

          const pokemonsArray = [];
          for await (const id of response) {
            const pokemonDetails = await getPokeminDetailsApi(id);

            pokemonsArray.push({
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              type: pokemonDetails.types[0].type.name,
              allTypes: pokemonDetails.types,
              order: pokemonDetails.order,
              stats: pokemonDetails.stats,
              image:
                pokemonDetails.sprites.other["official-artwork"].front_default,
            });
          }

          setPokemons(pokemonsArray);
        })();
      }
    }, [auth])
  );

  return (
    <SafeAreaView>
      {auth ? (
        <View>
          <PokemonList
            pokemons={pokemons}
            loadPokemons={null}
            isLoading={true}
          />
        </View>
      ) : (
        <View>
          <Text>No logeado</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Favorite;
