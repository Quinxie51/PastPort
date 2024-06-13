import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const SliderNews = () => {
  return (
    <View style={styles.sliderNews}>
      <View style={styles.maskGroupParent}>
        <Image
          style={styles.maskGroupIcon}
          contentFit="cover"
          source={require("../assets/mask-group3.png")}
        />
        <Image
          style={styles.maskGroupIcon1}
          contentFit="cover"
          source={require("../assets/mask-group4.png")}
        />
      </View>
      <View style={styles.category}>
        <View style={styles.frameChildLayout}>
          <View style={[styles.frameChild, styles.frameChildLayout]} />
          <Text style={styles.discovery}>Discovery</Text>
        </View>
      </View>
      <View style={styles.category1}>
        <View style={styles.frameChildLayout}>
          <View style={[styles.frameChild, styles.frameChildLayout]} />
          <Text style={styles.discovery}>Event</Text>
        </View>
      </View>
      <Text style={[styles.moonLandingOne, styles.moonLandingOneTypo]}>
        Moon Landing: One Giant Leap for Mankind
      </Text>
      <Text style={[styles.napoleonsConquestOf, styles.moonLandingOneTypo]}>
        Napoleon's Conquest of Europe
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChildLayout: {
    height: 17,
    width: 60,
  },
  moonLandingOneTypo: {
    fontSize: FontSize.size_sm,
    width: "36.3%",
    height: "24.83%",
    textAlign: "left",
    color: Color.othersTextBG,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  maskGroupIcon: {
    height: 145,
    width: 283,
  },
  maskGroupIcon1: {
    height: 135,
    marginLeft: 18,
    width: 283,
  },
  maskGroupParent: {
    flexDirection: "row",
    alignItems: "center",
    zIndex: 0,
  },
  frameChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_xl,
    backgroundColor: Color.othersTextBG,
    opacity: 0.1,
    position: "absolute",
  },
  discovery: {
    top: "11.76%",
    left: "20%",
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    color: Color.othersTextBG,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  category: {
    top: 64,
    left: 18,
    zIndex: 1,
    position: "absolute",
  },
  category1: {
    top: 66,
    left: 317,
    width: 54,
    zIndex: 2,
    position: "absolute",
  },
  moonLandingOne: {
    top: "60.69%",
    left: "3.08%",
    zIndex: 3,
  },
  napoleonsConquestOf: {
    top: "62.07%",
    left: "54.28%",
    zIndex: 4,
  },
  sliderNews: {
    top: 188,
    left: 42,
    position: "absolute",
  },
});

export default SliderNews;
