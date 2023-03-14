import AsyncStorage from "@react-native-async-storage/async-storage";
import { includes, pull } from "lodash";
import { FAVORITE_STORAGE } from "../utils/constants";

FAVORITE_STORAGE;

export const getPokemonFavoriteApi = async () => {
  try {
    const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
    return response ? JSON.parse(response) : [];
  } catch (error) {
    throw error;
  }
};

export const addPokemonFavoriteApi = async (id) => {
  try {
    const favorites = await getPokemonFavoriteApi();
    favorites.push(id);
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
  } catch (error) {
    throw error;
  }
};

export const isPokemonFavoriteApi = async (id) => {
  try {
    const response = await getPokemonFavoriteApi();
    return includes(response, id);
  } catch (error) {
    throw error;
  }
};

export const removePokemonFavoriteApi = async (id) => {
  try {
    const favorites = await getPokemonFavoriteApi();
    const newFavorites = pull(favorites, id);
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(newFavorites));
  } catch (error) {
    throw error;
  }
};
