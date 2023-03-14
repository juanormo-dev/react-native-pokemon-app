import React from "react";
import Ionicons from "@expo/vector-icons/FontAwesome5";
import {
  addPokemonFavoriteApi,
  getPokemonFavoriteApi,
} from "../../api/favorite";

const Favorite = ({ id }) => {
  const addFavortire = async () => {
    await addPokemonFavoriteApi(id);

    getFavortires();
  };

  const getFavortires = async () => {
    const r = await getPokemonFavoriteApi(id);
    console.log(r);
  };

  return (
    <>
      <Ionicons
        name="heart"
        color="#E74C3C"
        size={25}
        style={{ marginRight: 20 }}
        onPress={addFavortire}
      ></Ionicons>
    </>
  );
};

export default Favorite;
