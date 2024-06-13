import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const FrameComponent = () => {
  return (
    <View style={styles.sliderParent}>
      <View style={styles.slider}>
        <Image
          style={styles.sliderLayout}
          contentFit="cover"
          source={require("../assets/ellipse-4.png")}
        />
        <Image
          style={[styles.sliderItem, styles.sliderLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-5.png")}
        />
        <Image
          style={[styles.sliderItem, styles.sliderLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-5.png")}
        />
      </View>
      <View style={styles.trendingCollection}>
        <Text style={styles.eventAndMovements}>Event and Movements</Text>
        <View style={styles.news3Parent}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/news-32.png")}
          />
          <Image
            style={[styles.news6Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/news-63.png")}
          />
          <Image
            style={[styles.news6Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/news-72.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sliderLayout: {
    height: 6,
    width: 6,
  },
  iconLayout: {
    height: 157,
    width: 142,
  },
  sliderItem: {
    marginLeft: 8,
  },
  slider: {
    top: 230,
    left: 172,
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
  },
  eventAndMovements: {
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.othersTextBG,
    textAlign: "left",
  },
  news6Icon: {
    marginLeft: 18,
  },
  news3Parent: {
    marginTop: 20,
    flexDirection: "row",
  },
  trendingCollection: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  sliderParent: {
    width: 462,
    height: 236,
    marginTop: 18,
  },
});

export default FrameComponent;
