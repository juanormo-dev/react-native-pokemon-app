import { AuthProvider } from "./src/context/AuthContext";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation/Navigation";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </NavigationContainer>
  );
}
