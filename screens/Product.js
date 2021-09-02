import React from "react";
import { StyleSheet, Text } from "react-native";

import AppScreen from "../components/AppScreen";

function Product() {
  return (
    <AppScreen style={styles.container}>
      <Text>Product</Text>
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  }
});

export default Product;