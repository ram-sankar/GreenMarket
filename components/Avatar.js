import React from "react";
import { Image, TouchableOpacity, StyleSheet } from "react-native";

function Avatar({ source, navigation, navigateTo }) {
  const navigateToPage = () => {
    if (navigateTo) {
      return navigation.navigate(navigateTo);
    } else {
      return null;
    }
  }
  return (
    <TouchableOpacity onPress={navigateToPage}>
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
