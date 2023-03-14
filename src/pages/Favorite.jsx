import React, { useEffect, useState } from "react";
import { Text, SafeAreaView } from "react-native";
import { getPokemonFavoriteApi } from "../api/favorite";

const Favorite = () => {
  const [favorites, setFavorites] = useState(null);

  useEffect(() => {
    (async () => {
      const response = getPokemonFavoriteApi();
      console.log(`Page Fav`, response);
    })();
  }, []);

  return (
    <SafeAreaView>
      <Text>{favorites}</Text>
    </SafeAreaView>
  );
};

export default Favorite;
