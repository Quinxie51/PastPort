import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const FrameComponent1 = ({ geographicalRegions, news3, news4 }) => {
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
        <Text style={styles.geographicalRegions}>{geographicalRegions}</Text>
        <View style={styles.news3Parent}>
          <Image style={styles.news3Icon} contentFit="cover" source={news3} />
          <Image style={styles.news4Icon} contentFit="cover" source={news4} />
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
  sliderItem: {
    marginLeft: 8,
  },
  slider: {
    top: 232,
    left: 173,
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
  },
  geographicalRegions: {
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.othersTextBG,
    textAlign: "left",
  },
  news3Icon: {
    width: 190,
    height: 157,
  },
  news4Icon: {
    width: 180,
    marginLeft: 18,
    height: 157,
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
    width: 388,
    height: 238,
    marginTop: 18,
  },
});

export default FrameComponent1;
