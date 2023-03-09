import { capitalize } from "lodash";
import getColorByType from "../utils/getColorByType";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const PokemonCard = ({ pokemon }) => {
  const goToPokemon = () => {};

  const pokemonColor = getColorByType(pokemon.type);
  const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyles };

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.number}>
              # {`${pokemon.order}`.padStart(3, 0)}
            </Text>
            <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
            <Image source={{ uri: pokemon.image }} style={styles.image} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
  number: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 12,
  },
  name: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
  },
});

export default PokemonCard;