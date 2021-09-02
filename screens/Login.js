import React from "react";
import { StyleSheet, Text } from "react-native";

import AppScreen from "../components/AppScreen";

function Login() {
  return (
    <AppScreen style={styles.container}>
      <Text>Login</Text>
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  }
});

export default Login;