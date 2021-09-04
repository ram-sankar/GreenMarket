import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import AppIcon from "../components/AppIcon";
import { colors } from "../constants/theme";

function BackButton({ navigation, style }) {
  return (
    <TouchableOpacity style={[styles.backIcon, style]} onPress={() => navigation.pop()}>
        <AppIcon
          name='keyboard-backspace'
          backgroundColor={colors.appBackGround}
          iconColor={colors.black}
          size={52}
        />
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backIcon: {
    marginLeft: -15,
    marginBottom: 15
  }
});
export default BackButton;
