import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const FrameComponent51 = () => {
  return (
    <View style={styles.edisonsLightbulbRevolutionParent}>
      <Text style={[styles.edisonsLightbulbRevolution, styles.discoveryTypo]}>
        Edison's Lightbulb Revolution
      </Text>
      <Image
        style={styles.saveIcon}
        contentFit="cover"
        source={require("../assets/save-icon1.png")}
      />
      <View style={styles.category}>
        <View style={styles.frameChildLayout}>
          <View style={[styles.frameChild, styles.frameChildLayout]} />
          <Text style={[styles.discovery, styles.discoveryTypo]}>
            Discovery
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  discoveryTypo: {
    textAlign: "left",
    color: Color.othersTextBG,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
  },
  frameChildLayout: {
    height: 17,
    width: 60,
  },
  edisonsLightbulbRevolution: {
    fontSize: FontSize.size_sm,
    width: 257,
    height: 21,
    zIndex: 0,
  },
  saveIcon: {
    width: 35,
    height: 35,
    zIndex: 1,
    marginLeft: -33,
  },
  frameChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.othersTextBG,
    opacity: 0.1,
    position: "absolute",
    borderRadius: Border.br_xl,
  },
  discovery: {
    top: "11.76%",
    left: "20%",
    fontSize: FontSize.size_5xs,
    position: "absolute",
  },
  category: {
    top: 57,
    left: 25,
    zIndex: 2,
    position: "absolute",
  },
  edisonsLightbulbRevolutionParent: {
    backgroundColor: Color.colorGray_100,
    height: 88,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_6xl,
    paddingTop: Padding.p_lgi,
    paddingBottom: Padding.p_16xl,
    marginTop: 10,
    borderRadius: Border.br_xl,
  },
});

export default FrameComponent51;
