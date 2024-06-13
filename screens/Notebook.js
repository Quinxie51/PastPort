import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FrameComponent5 from "../components/FrameComponent4";
import NavbarContainer from "../components/NavbarContainer";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Notebook = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.notebook}>
      <FrameComponent5 />
      <Image
        style={styles.backIcon}
        contentFit="cover"
        source={require("../assets/back.png")}
      />
      <Text style={styles.notebook1}>Notebook</Text>
      <NavbarContainer
        onHomePress={() => navigation.navigate("Homepage")}
        onFavoritePress={() => navigation.navigate("CharacterChoose")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backIcon: {
    top: 76,
    left: 41,
    width: 35,
    height: 35,
    position: "absolute",
  },
  notebook1: {
    top: "9.47%",
    left: "42.17%",
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.othersTextBG,
    textAlign: "center",
    position: "absolute",
  },
  notebook: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    width: "100%",
    height: 866,
    overflow: "hidden",
  },
});

export default Notebook;
