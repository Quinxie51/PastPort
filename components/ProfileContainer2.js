import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

const ProfileContainer21 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navbar}>
      <Pressable
        style={styles.home}
        onPress={() => navigation.navigate("Homepage")}
      >
        <Image
          style={[styles.heroiconsSolidhome, styles.fillIconPosition]}
          contentFit="cover"
          source={require("../assets/heroiconssolidhome1.png")}
        />
        <Text style={[styles.home1, styles.chatTypo]}>Home</Text>
      </Pressable>
      <Pressable
        style={[styles.trending, styles.profileLayout]}
        onPress={() => navigation.navigate("Explore")}
      >
        <Image
          style={[styles.materialSymbolsexploreIcon, styles.fillIconPosition]}
          contentFit="cover"
          source={require("../assets/materialsymbolsexplore1.png")}
        />
        <Text style={[styles.explore, styles.chatTypo]}>Explore</Text>
      </Pressable>
      <View style={styles.favorite}>
        <Image
          style={[styles.bichatFillIcon, styles.fillIconPosition]}
          contentFit="cover"
          source={require("../assets/bichatfill1.png")}
        />
        <Text style={[styles.chat, styles.chatTypo]}>Chat</Text>
      </View>
      <Pressable
        style={[styles.profile, styles.profileLayout]}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          style={[styles.iconamoonprofileFill, styles.fillIconPosition]}
          contentFit="cover"
          source={require("../assets/iconamoonprofilefill2.png")}
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
  chatTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.size_xs,
    left: 0,
    position: "absolute",
  },
  profileLayout: {
    height: 52,
    marginLeft: 53,
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
    color: Color.colorDimgray_200,
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
    color: Color.colorDimgray_100,
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
    color: Color.yELLOW,
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
    marginLeft: -212.5,
    bottom: 0,
    left: "50%",
    backgroundColor: Color.colorGray_100,
    width: 415,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_9xl,
    paddingVertical: Padding.p_xl,
    position: "absolute",
  },
});

export default ProfileContainer21;
