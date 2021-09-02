import React from "react";
import { StyleSheet, Text } from "react-native";

import AppScreen from "../components/AppScreen";

function Browse() {
  return (
    <AppScreen style={styles.container}>
      <Text>Browse</Text>
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  }
});

export default Browse;