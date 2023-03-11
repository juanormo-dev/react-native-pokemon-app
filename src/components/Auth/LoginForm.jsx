import React from "react";
import {
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const LoginForm = () => {
  return (
    <View>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        placeholder="Usuario"
        style={styles.input}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Contraseña"
        style={styles.input}
        secureTextEntry={true}
        autoCapitalize="none"
      />
      <Button
        title="Ingresar"
        onPress={() => {
          console.log("Ingresando...");
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
  },
});
export default LoginForm;
