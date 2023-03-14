import { createStackNavigator } from "@react-navigation/stack";
import Favorite from "../pages/Favorite";
import Pokedex from "../pages/Pokedex";
import Pokemon from "../pages/Pokemon";

const Stack = createStackNavigator();

const NavigationFavorite = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorite"
        component={Favorite}
        options={{ title: "Mis favoritos" }}
      />
      <Stack.Screen name="Pokemon" component={Pokemon} />
    </Stack.Navigator>
  );
};

export default NavigationFavorite;
