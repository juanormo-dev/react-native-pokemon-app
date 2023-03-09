import { capitalize } from "lodash";
import { StyleSheet, Text, View } from "react-native";
import getColorByType from "../../utils/getColorByType";
import React from "react";

const TypePokemon = ({ pokemon }) => {
  return (
    <View style={styles.content}>
      {pokemon.allTypes.map((item) => {
        const color = getColorByType(item.type.name);
        return (
          <View
            key={item.slot}
            style={{ ...styles.pill, backgroundColor: color }}
          >
            <Text style={styles.types}>{capitalize(item.type.name)}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    marginTop: 45,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  types: {
    color: "#000",
  },
});

export default TypePokemon;
