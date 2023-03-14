import React, { useState } from "react";
import { Text, SafeAreaView, Button } from "react-native";
import { getPokemonFavoriteApi } from "../api/favorite";

const Favorite = () => {
  const [favorites, setFavorites] = useState(null);

  const getFavortires = async () => {
    const response = await getPokemonFavoriteApi();
    console.log(response);
  };

  return (
    <SafeAreaView>
      <Button title="update" onPress={getFavortires} />
      <Text>{favorites}</Text>
    </SafeAreaView>
  );
};

export default Favorite;
