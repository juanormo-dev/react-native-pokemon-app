import { API_URL } from "@env";

export const getPokemonsApi = async () => {
  try {
    const url = `${API_URL}/pokemon?limit=20&offset=0`;
    const response = await fetch(url);
    const result = response.json();
    return result;
  } catch (error) {
    throw error;
  }
};

export const getPokemonByIdApi = async (url) => {
  try {
    const response = await fetch(url);
    const result = response.json();
    return result;
  } catch (error) {
    throw error;
  }
};
