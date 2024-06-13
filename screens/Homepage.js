import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TrendingCollection from "../components/TrendingCollection";
import ProfileContainer from "../components/ProfileContainer";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Homepage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homepage}>
      <Pressable
        style={[styles.news1, styles.news1Layout]}
        onPress={() => navigation.navigate("Event1")}
      >
        <Image
          style={[styles.maskGroupIcon, styles.frameChildPosition]}
          contentFit="cover"
          source={require("../assets/mask-group.png")}
        />
        <Text
          style={[styles.edisonsLightbulbRevolution, styles.pastportFlexBox]}
        >
          Edison's Lightbulb Revolution
        </Text>
        <Text style={styles.diveIntoThe}>
          Dive into the electrifying story of Thomas Edison's invention of the
          lightbulb, a groundbreaking innovation that illuminated the world and
          revolutionized modern living.
        </Text>
        <Image
          style={[styles.saveIcon, styles.saveIconLayout]}
          contentFit="cover"
          source={require("../assets/save-icon.png")}
        />
      </Pressable>
      <View style={[styles.news2, styles.newsPosition]}>
        <Image
          style={[styles.maskGroupIcon, styles.frameChildPosition]}
          contentFit="cover"
          source={require("../assets/mask-group1.png")}
        />
        <Text
          style={[styles.edisonsLightbulbRevolution, styles.pastportFlexBox]}
        >
          Leonardo's Masterpiece Unveiled Lightbulb Revolution
        </Text>
        <Text style={styles.diveIntoThe}>
          Explore the genius of Leonardo da Vinci as he unveils his masterpiece,
          whether it's the enigmatic smile of the Mona Lisa or the intricate
          machinery of his flying machines.
        </Text>
        <Image
          style={[styles.saveIcon, styles.saveIconLayout]}
          contentFit="cover"
          source={require("../assets/save-icon.png")}
        />
      </View>
      <TrendingCollection />
      <Text style={[styles.leonardoDaVinci, styles.cleopatraViiTypo]}>
        Leonardo da Vinci
      </Text>
      <Text style={[styles.cleopatraVii, styles.cleopatraViiTypo]}>
        Cleopatra VII
      </Text>
      <Text style={[styles.napoleonBonaparte, styles.cleopatraViiTypo]}>
        Napoleon Bonaparte
      </Text>
      <Text style={[styles.historicalChat, styles.pastportFlexBox]}>
        Historical Chat
      </Text>
      <View style={styles.category}>
        <View style={styles.rectangleLayout}>
          <View style={[styles.frameChild, styles.rectangleLayout]} />
          <Text style={[styles.discovery, styles.cultureTypo]}>Discovery</Text>
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.frameChild, styles.rectangleLayout]} />
        <Text style={[styles.culture, styles.cultureTypo]}>Culture</Text>
      </View>
      <Image
        style={[styles.homepageChild, styles.homepageLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-7.png")}
      />
      <Image
        style={[styles.homepageItem, styles.homepageLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-10.png")}
      />
      <Image
        style={[styles.homepageInner, styles.homepageLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-9.png")}
      />
      <View style={styles.category1}>
        <Text style={[styles.trending, styles.exploreTypo]}>Trending</Text>
        <Text style={[styles.explore, styles.exploreTypo]}>Explore</Text>
        <Text style={[styles.historicalChat1, styles.exploreTypo]}>
          Historical Chat
        </Text>
        <View style={[styles.categoryChild, styles.saveIconLayout]} />
      </View>
      <View style={[styles.header, styles.headerLayout]}>
        <Text style={[styles.pastport, styles.headerLayout]}>PastPort</Text>
        <Image
          style={[styles.akarIconssearch, styles.akarIconssearchLayout]}
          contentFit="cover"
          source={require("../assets/akariconssearch.png")}
        />
        <Image
          style={[styles.minotificationIcon, styles.akarIconssearchLayout]}
          contentFit="cover"
          source={require("../assets/minotification.png")}
        />
      </View>
      <ProfileContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  news1Layout: {
    width: 251,
    height: 321,
  },
  frameChildPosition: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  pastportFlexBox: {
    textAlign: "left",
    color: Color.othersTextBG,
    letterSpacing: 0,
  },
  saveIconLayout: {
    width: 35,
    position: "absolute",
  },
  newsPosition: {
    top: 159,
    position: "absolute",
  },
  cleopatraViiTypo: {
    width: 121,
    textAlign: "center",
    fontSize: FontSize.size_3xs,
    top: 1082,
    color: Color.othersTextBG,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  rectangleLayout: {
    height: 17,
    width: 60,
  },
  cultureTypo: {
    top: "11.76%",
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    color: Color.othersTextBG,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  homepageLayout: {
    height: 83,
    width: 83,
    top: 984,
    position: "absolute",
  },
  exploreTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.othersTextBG,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    top: 0,
    position: "absolute",
  },
  headerLayout: {
    height: 39,
    position: "absolute",
  },
  akarIconssearchLayout: {
    height: 26,
    width: 26,
    top: 7,
    position: "absolute",
    overflow: "hidden",
  },
  maskGroupIcon: {
    left: 0,
    height: 321,
    width: 251,
  },
  edisonsLightbulbRevolution: {
    top: 205,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    color: Color.othersTextBG,
    letterSpacing: 0,
    position: "absolute",
    left: 19,
  },
  diveIntoThe: {
    top: 239,
    fontFamily: FontFamily.poppinsRegular,
    width: 210,
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    color: Color.othersTextBG,
    letterSpacing: 0,
    left: 19,
    position: "absolute",
  },
  saveIcon: {
    top: 11,
    left: 206,
    height: 35,
  },
  news1: {
    left: 29,
    height: 321,
    top: 159,
    position: "absolute",
  },
  news2: {
    left: 309,
    width: 394,
    height: 321,
  },
  leonardoDaVinci: {
    left: 28,
  },
  cleopatraVii: {
    left: 148,
  },
  napoleonBonaparte: {
    left: 267,
  },
  historicalChat: {
    top: 937,
    left: 46,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    color: Color.othersTextBG,
    letterSpacing: 0,
    position: "absolute",
  },
  frameChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.othersTextBG,
    opacity: 0.1,
    left: 0,
    top: 0,
    position: "absolute",
  },
  discovery: {
    left: "20%",
  },
  category: {
    top: 335,
    left: 48,
    position: "absolute",
  },
  culture: {
    left: "25%",
  },
  rectangleGroup: {
    top: 336,
    left: 326,
    position: "absolute",
  },
  homepageChild: {
    left: 47,
  },
  homepageItem: {
    left: 170,
  },
  homepageInner: {
    left: 287,
  },
  trending: {
    left: 0,
  },
  explore: {
    left: 74,
  },
  historicalChat1: {
    left: 149,
  },
  categoryChild: {
    top: 19,
    left: -1,
    borderStyle: "solid",
    borderColor: Color.yELLOW,
    borderTopWidth: 3,
    height: 3,
  },
  category1: {
    top: 120,
    width: 238,
    height: 20,
    left: 28,
    position: "absolute",
  },
  pastport: {
    fontSize: 24,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    width: 112,
    textAlign: "left",
    color: Color.othersTextBG,
    letterSpacing: 0,
    height: 39,
    left: 0,
    top: 0,
  },
  akarIconssearch: {
    left: 275,
  },
  minotificationIcon: {
    left: 320,
  },
  header: {
    top: 63,
    left: 40,
    width: 346,
  },
  homepage: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    width: "100%",
    height: 1257,
    overflow: "hidden",
  },
});

export default Homepage;
