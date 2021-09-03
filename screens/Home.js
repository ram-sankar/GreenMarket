import React, {useState} from "react";
import { FlatList, TouchableOpacity, StyleSheet, Text, View, Dimensions } from "react-native";

import AppScreen from "../components/AppScreen";
import Avatar from "../components/Avatar";
import defaultStyles from "../constants/styles";
import { mocks } from "../constants";
import AppText from "../components/AppText";
import { colors, sizes } from "../constants/theme";

const { width } = Dimensions.get("window");

function Home({navigation}) {

  const tabHeaders = ["Products", "Inspirations", "Shop"];
  const [active, setActive] = useState("Products");
  const [categories, setCategories] = useState([]);

  const handleTab = tab => {
    const filtered = categories.filter(category =>
      category.tags.includes(tab.toLowerCase())
    );
    setActive(tab);
    setCategories(filtered);
  };

  const renderTab = tab => {
    const isActive = active === tab;

    return (
      <TouchableOpacity
        key={`tab-${tab}`}
        onPress={() => handleTab(tab)}
        style={[styles.tab, isActive ? styles.active : null]}
      >
        <AppText style={isActive ? styles.activeTabText : styles.normalTabText}>
          {tab}
        </AppText>
      </TouchableOpacity>
    );
  }

  return (
    <AppScreen style={styles.container}>
      <View style={styles.topHeadingContainer}>
        <Text style={[defaultStyles.headingText, styles.heading]}>Browse</Text>
        <Avatar source={mocks.profile.avatar} navigateTo="Login" navigation={navigation}/>
      </View>
      <View style={styles.tabContainer}>
        {tabHeaders.map(tab => renderTab(tab))}
      </View>
      <FlatList 
        data={mocks.categories}
        renderItem={() => (
          <View style={styles.card}>
            <View style={styles.cardContent}>
              <AppText>Category</AppText>
            </View>
          </View>
        )}
        numColumns={2}
      />
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: sizes.padding
  },
  topHeadingContainer: {
    flexDirection: 'row'
  },
  heading: {
    flex: 1
  },
  tabContainer: {
    flexDirection: 'row',
    borderBottomColor: colors.gray2,
    borderBottomWidth: 1,
  },
  tab: {
    padding: 13,
  },
  active: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 5,
  },
  activeTabText: {
    fontWeight: '700',
    color: colors.primary,
  },
  normalTabText: {
    fontWeight: '700',
    color: colors.gray,
  },
  card: {
    backgroundColor: colors.white,
    flex: 1,
    height: (width - sizes.padding * 3 - sizes.base)/2,
    // minWidth: (width - sizes.padding * 5 - sizes.base) / 2,
    margin: 10,
    justifyContent: 'space-between',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardContent: {
    backgroundColor: colors.white,
  }
});

export default Home;