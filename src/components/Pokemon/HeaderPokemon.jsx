import { capitalize } from "lodash";
import { Text, SafeAreaView, Image, StyleSheet, View } from "react-native";
import getColorByType from "../../utils/getColorByType";
import React from "react";

const HeaderPokemon = ({ pokemon }) => {
  const color = getColorByType(pokemon.type);

  const bgStyle = [{ backgroundColor: color, ...styles.bg }];

  return (
    <>
      <View style={bgStyle} />
      <SafeAreaView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
          <Text style={styles.number}>
            # {`${pokemon.order}`.padStart(3, 0)}
          </Text>
        </View>

        <View style={styles.contentImage}>
          <Image source={{ uri: pokemon.image }} style={styles.image} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  bg: {
    width: "100%",
    height: 400,
    position: "absolute",
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{ scaleX: 2 }],
  },
  content: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40,
  },
  name: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 30,
  },
  number: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 15,
  },
  contentImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 250,
  },
});

export default HeaderPokemon;
