import { createStackNavigator } from "@react-navigation/stack";
import Favorite from "../pages/Favorite";
import Pokedex from "../pages/Pokedex";
import Pokemon from "../pages/Pokemon";

const Stack = createStackNavigator();

const NavigationPokedex = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pokedex"
        component={Pokedex}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Favorite" component={Favorite} />
      <Stack.Screen name="Pokemon" component={Pokemon} />
    </Stack.Navigator>
  );
};

export default NavigationPokedex;
