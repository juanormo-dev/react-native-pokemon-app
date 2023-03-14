import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/FontAwesome5";
import {
  addPokemonFavoriteApi,
  getPokemonFavoriteApi,
  isPokemonFavoriteApi,
} from "../../api/favorite";

const Favorite = ({ id }) => {
  const [isFavorite, setIsFavorite] = useState(null);
  const [reloadCheck, setReloadCheck] = useState(false);

  const onReloadCheck = () => {
    setReloadCheck(!reloadCheck);
  };

  const addFavortire = async () => {
    try {
      await addPokemonFavoriteApi(id);
      onReloadCheck();
    } catch (error) {
      console.log(error);
    }
  };

  const getFavortires = async () => {
    const r = await getPokemonFavoriteApi(id);
  };

  const removeFavorite = () => {};

  useEffect(() => {
    (async () => {
      try {
        if (id) {
          const response = await isPokemonFavoriteApi(id);
          console.log(`Favorito ${id}:`, response);
          setIsFavorite(response);
        }
      } catch (error) {
        setIsFavorite(false);
      }
    })();
  }, [id, onReloadCheck]);

  return (
    <>
      <Ionicons
        name="heart"
        color="#E74C3C"
        solid={isFavorite}
        size={25}
        style={{ marginRight: 20 }}
        onPress={isFavorite ? removeFavorite : addFavortire}
      ></Ionicons>
    </>
  );
};

export default Favorite;
