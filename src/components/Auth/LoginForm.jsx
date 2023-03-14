import { useFormik } from "formik";
import { user, userDetail } from "../../utils/db/user";
import * as Yup from "yup";
import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import {
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const LoginForm = () => {
  const [error, setError] = useState("");
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: initialForm(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: (data) => {
      setError("");
      const { username, password } = data;

      if (username !== user.username || password !== user.password) {
        setError("Usuario o contraseña incorrectos!");
        return;
      }

      login(userDetail);
    },
  });

  return (
    <View>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        placeholder="Usuario"
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.username}
        onChangeText={(text) => {
          formik.setFieldValue("username", text);
        }}
      />
      <Text style={styles.error}>{formik.errors.username}</Text>
      <TextInput
        placeholder="Contraseña"
        style={styles.input}
        secureTextEntry={true}
        autoCapitalize="none"
        value={formik.values.password}
        onChangeText={(text) => {
          formik.setFieldValue("password", text);
        }}
      />
      <Text style={styles.error}>{formik.errors.password}</Text>
      <Button title="Ingresar" onPress={formik.handleSubmit} />

      <Text style={styles.error}>{error}</Text>
    </View>
  );
};

const initialForm = () => {
  return {
    username: "",
    password: "",
  };
};

const validationSchema = () => {
  return {
    username: Yup.string().required("El usuario es obligatorio"),
    password: Yup.string().required("La contraseña es obligatoria"),
  };
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
  error: {
    textAlign: "center",
    color: "red",
    marginTop: 5,
  },
});
export default LoginForm;
