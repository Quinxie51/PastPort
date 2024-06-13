import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const FrameComponent2 = () => {
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
        <Text style={[styles.timePeriods, styles.timePeriodsTypo]}>
          Time Periods
        </Text>
        <View style={styles.news3Parent}>
          <View style={styles.news3}>
            <Image
              style={[styles.eparrowRightIcon, styles.eparrowIconPosition]}
              contentFit="cover"
              source={require("../assets/eparrowright.png")}
            />
            <Image
              style={[styles.eparrowRightIcon1, styles.eparrowIconPosition]}
              contentFit="cover"
              source={require("../assets/eparrowright1.png")}
            />
            <View
              style={[styles.placeYourDesignHere, styles.news6IconLayout]}
            />
            <View style={[styles.eparrowRight, styles.eparrowIconPosition]} />
            <Text style={[styles.ancientCivilizations, styles.timePeriodsTypo]}>
              Ancient Civilizations
            </Text>
          </View>
          <Image
            style={[styles.news6Icon, styles.news6IconLayout]}
            contentFit="cover"
            source={require("../assets/news-62.png")}
          />
          <Image
            style={[styles.news6Icon, styles.news6IconLayout]}
            contentFit="cover"
            source={require("../assets/news-71.png")}
          />
          <Image
            style={[styles.news6Icon, styles.news6IconLayout]}
            contentFit="cover"
            source={require("../assets/news-8.png")}
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
  timePeriodsTypo: {
    textAlign: "left",
    color: Color.othersTextBG,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
  },
  eparrowIconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  news6IconLayout: {
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
  timePeriods: {
    fontSize: FontSize.size_base,
  },
  eparrowRightIcon: {
    top: 180,
    width: 60,
    height: 60,
    left: 0,
  },
  eparrowRightIcon1: {
    left: 142,
    width: 1024,
    height: 1024,
    top: 0,
  },
  placeYourDesignHere: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGray_100,
    left: 0,
    top: 0,
    position: "absolute",
  },
  eparrowRight: {
    top: 125,
    left: 115,
    width: 21,
    height: 21,
  },
  ancientCivilizations: {
    top: 105,
    left: 10,
    fontSize: FontSize.size_xs,
    width: 121,
    position: "absolute",
  },
  news3: {
    width: 1166,
    display: "none",
    height: 1024,
  },
  news6Icon: {
    marginLeft: 18,
  },
  news3Parent: {
    marginTop: 20,
    flexDirection: "row",
  },
  trendingCollection: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  sliderParent: {
    width: 462,
    height: 236,
  },
});

export default FrameComponent2;
