import React from "react";
import { Image, TouchableOpacity, StyleSheet } from "react-native";

function Avatar({ source, navigation, navigateTo }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(navigateTo)}>
        <Image source={source} style={styles.avatar} />
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  avatar: {
    height: 40,
    width: 40
  }
});
export default Avatar;
