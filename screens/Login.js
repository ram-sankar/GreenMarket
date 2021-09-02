import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { colors } from "../constants/theme";

function Login() {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.appBackGround,
    height: '100%',
    width: '100%'
  }
});

export default Login;