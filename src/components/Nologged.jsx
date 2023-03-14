import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const Nologged = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.content}>
      <Text style={styles.text}>Para ver favoritos debes iniciar sesión</Text>
      <Button
        title="Ir a Login"
        onPress={() => {
          navigation.navigate("Account");
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  content: {
    marginVertical: 200,
    paddingHorizontal: 50,
  },
  text: {
    textAlign: "center",
    marginBottom: 10,
  },
});
export default Nologged;
