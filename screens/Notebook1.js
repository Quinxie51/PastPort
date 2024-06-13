import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import NavbarContainer from "../components/NavbarContainer";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Notebook1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.notebook}>
      <Text
        style={[styles.persistenceThomasEdisons, styles.maskGroupIconPosition]}
      >{`Persistence: Thomas Edison's relentless pursuit of success led him through over 1,000 unsuccessful attempts before finally inventing the practical incandescent lightbulb.
Experimentation: Edison's approach involved systematic experimentation, resulting in more than 3,000 different materials tested for the lightbulb filament.
Collaboration: He established the world's first industrial research laboratory, employing a team of over 50 scientists, engineers, and technicians to work on various projects, including the lightbulb.`}</Text>
      <Text
        style={[styles.keyTakeawaysFrom, styles.discoveryTypo]}
      >{`Key Takeaways from Edison's Lightbulb
 Revolution`}</Text>
      <View style={[styles.category, styles.categoryLayout]}>
        <View style={[styles.categoryChild, styles.categoryLayout]} />
        <Text style={[styles.discovery, styles.discoveryTypo]}>Discovery</Text>
      </View>
      <Image
        style={[styles.maskGroupIcon, styles.maskGroupIconPosition]}
        contentFit="cover"
        source={require("../assets/mask-group2.png")}
      />
      <NavbarContainer
        onHomePress={() => navigation.navigate("Homepage")}
        onFavoritePress={() => navigation.navigate("CharacterChoose")}
      />
      <Image
        style={[styles.backIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/back.png")}
      />
      <Text style={[styles.notebook1, styles.discoveryTypo]}>Notebook</Text>
      <Image
        style={[styles.saveIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/save-icon.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  maskGroupIconPosition: {
    position: "absolute",
    left: 44,
  },
  discoveryTypo: {
    color: Color.othersTextBG,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  categoryLayout: {
    height: 17,
    width: 77,
    position: "absolute",
  },
  iconLayout: {
    height: 35,
    width: 35,
    top: 75,
    position: "absolute",
  },
  persistenceThomasEdisons: {
    top: 443,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsRegular,
    color: "#e2e2e2",
    width: 328,
    opacity: 0.7,
    textAlign: "left",
    left: 44,
  },
  keyTakeawaysFrom: {
    top: 385,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    left: 44,
  },
  categoryChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_xl,
    backgroundColor: Color.othersTextBG,
    opacity: 0.1,
  },
  discovery: {
    height: "67.06%",
    width: "61.04%",
    top: "11.76%",
    left: "19.48%",
    fontSize: FontSize.size_5xs,
    textAlign: "left",
  },
  category: {
    top: 352,
    left: 44,
  },
  maskGroupIcon: {
    top: 130,
    width: 319,
    height: 194,
    left: 44,
  },
  backIcon: {
    left: 44,
  },
  notebook1: {
    height: "2.82%",
    width: "18.8%",
    top: "9.17%",
    left: "39.52%",
    fontSize: FontSize.size_base,
    textAlign: "center",
  },
  saveIcon: {
    left: 328,
  },
  notebook: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    width: "100%",
    height: 805,
    overflow: "hidden",
  },
});

export default Notebook1;
