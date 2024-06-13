import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const ProfileContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navbar}>
      <View style={styles.home}>
        <Image
          style={[styles.heroiconsSolidhome, styles.fillIconPosition]}
          contentFit="cover"
          source={require("../assets/heroiconssolidhome.png")}
        />
        <Text style={styles.home1}>Home</Text>
      </View>
      <Pressable
        style={[styles.trending, styles.profileLayout]}
        onPress={() => navigation.navigate("Explore")}
      >
        <Image
          style={[styles.materialSymbolsexploreIcon, styles.fillIconPosition]}
          contentFit="cover"
          source={require("../assets/materialsymbolsexplore.png")}
        />
        <Text style={[styles.explore, styles.chatTypo]}>Explore</Text>
      </Pressable>
      <Pressable
        style={styles.favorite}
        onPress={() => navigation.navigate("CharacterChoose")}
      >
        <Image
          style={[styles.bichatFillIcon, styles.fillIconPosition]}
          contentFit="cover"
          source={require("../assets/bichatfill.png")}
        />
        <Text style={[styles.chat, styles.chatTypo]}>Chat</Text>
      </Pressable>
      <Pressable
        style={[styles.profile, styles.profileLayout]}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          style={[styles.iconamoonprofileFill, styles.fillIconPosition]}
          contentFit="cover"
          source={require("../assets/iconamoonprofilefill.png")}
        />
        <Text style={[styles.explore, styles.chatTypo]}>Profile</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  fillIconPosition: {
    overflow: "hidden",
    top: 0,
    position: "absolute",
  },
  profileLayout: {
    height: 52,
    marginLeft: 53,
  },
  chatTypo: {
    color: Color.colorDimgray_100,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.size_xs,
    left: 0,
    position: "absolute",
  },
  heroiconsSolidhome: {
    left: 1,
    height: 34,
    width: 34,
    overflow: "hidden",
    top: 0,
  },
  home1: {
    top: 35,
    color: Color.yELLOW,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.size_xs,
    left: 0,
    position: "absolute",
  },
  home: {
    width: 36,
    height: 53,
  },
  materialSymbolsexploreIcon: {
    left: 6,
    width: 31,
    height: 31,
    top: 0,
    overflow: "hidden",
  },
  explore: {
    top: 34,
  },
  trending: {
    width: 43,
    marginLeft: 53,
  },
  bichatFillIcon: {
    left: 4,
    width: 26,
    height: 26,
    top: 0,
    overflow: "hidden",
  },
  chat: {
    top: 31,
  },
  favorite: {
    width: 30,
    height: 49,
    marginLeft: 53,
  },
  iconamoonprofileFill: {
    left: 2,
    height: 34,
    width: 34,
    overflow: "hidden",
    top: 0,
  },
  profile: {
    width: 37,
    marginLeft: 53,
  },
  navbar: {
    marginLeft: -207.5,
    bottom: 0,
    left: "50%",
    backgroundColor: Color.colorGray_100,
    width: 415,
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: Padding.p_9xl,
    paddingVertical: Padding.p_xl,
    position: "absolute",
  },
});

export default ProfileContainer;
