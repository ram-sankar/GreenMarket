import React from "react";
import { StyleSheet, Text } from "react-native";

import AppScreen from "../components/AppScreen";

function Home() {
  return (
    <AppScreen style={styles.container}>
      <Text>Home</Text>
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  }
});

export default Home;