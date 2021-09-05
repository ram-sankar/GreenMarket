import React from "react";
import { Image, StyleSheet, View } from "react-native";

import AppScreen from "../components/AppScreen";
import BackButton from "../components/BackButton";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import Avatar from "../components/Avatar";
import { mocks } from "../constants";
import { colors } from "../constants/theme";

function Product({navigation}) {
  return (
    <AppScreen style={styles.container}>
      <View style={styles.topHeadingContainer}>
        <BackButton style={styles.backButton} navigation={navigation}/>
        <View style={styles.flex1}></View>
        <Avatar source={mocks.profile.avatar} navigation={navigation}/>
      </View>
      <View style={styles.imageContainer}>
        <Image source={mocks.images.plant} style={styles.image}/>
      </View>

      <View style={styles.bottomCard}>
        <AppText>bottom</AppText>
        <AppButton title='Buy Now' style={styles.cardButton}/>
      </View>
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGreen2
  },
  topHeadingContainer: {
    padding: 20,
    flexDirection: 'row'
  },
  backButton: {
    marginTop: -5,
  },
  image: {
    height: 350,
    width: 200,
  },
  imageContainer: {
    alignItems: 'center'
  },
  bottomCard: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: colors.white,
    width: '100%',
    height: 300,
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
    padding: 40
  },
  cardButton: {
    position: 'absolute',
    bottom: 30,
    left: '13%',
    width: '100%'
  },
  flex1: {
    flex: 1
  }
});

export default Product;