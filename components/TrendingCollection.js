import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const TrendingCollection = () => {
  return (
    <View style={styles.trendingCollection}>
      <Text style={styles.explore}>Explore</Text>
      <View style={styles.frameParent}>
        <View>
          <Image
            style={styles.news3Icon}
            contentFit="cover"
            source={require("../assets/news-3.png")}
          />
          <Image
            style={[styles.news6Icon, styles.iconSpaceBlock]}
            contentFit="cover"
            source={require("../assets/news-6.png")}
          />
        </View>
        <View style={styles.news6Parent}>
          <Image
            style={styles.news3Icon}
            contentFit="cover"
            source={require("../assets/news-61.png")}
          />
          <Image
            style={[styles.news7Icon, styles.iconSpaceBlock]}
            contentFit="cover"
            source={require("../assets/news-7.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconSpaceBlock: {
    marginTop: 18,
    height: 157,
  },
  explore: {
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.othersTextBG,
    textAlign: "left",
  },
  news3Icon: {
    height: 157,
    width: 168,
  },
  news6Icon: {
    width: 172,
  },
  news7Icon: {
    width: 168,
    marginTop: 18,
  },
  news6Parent: {
    marginLeft: 15,
  },
  frameParent: {
    flexDirection: "row",
    marginTop: 20,
  },
  trendingCollection: {
    position: "absolute",
    top: 521,
    left: 31,
  },
});

export default TrendingCollection;
