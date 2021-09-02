import React from "react";
import { StyleSheet, Text } from "react-native";

import AppScreen from "../components/AppScreen";

function Settings() {
  return (
    <AppScreen style={styles.container}>
      <Text>Settings</Text>
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  }
});

export default Settings;