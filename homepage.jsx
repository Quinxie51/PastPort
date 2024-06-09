import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Homepage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homepage}>
      <Pressable
        style={[styles.news1, styles.newsLayout]}
        onPress={() => navigation.navigate("Event1")}
      >
        <Image
          style={[styles.maskGroupIcon, styles.newsLayout]}
          contentFit="cover"
          source={require("../assets/mask-group.png")}
        />
        <Text style={[styles.edisonsLightbulbRevolution, styles.time1FlexBox]}>
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
      <View style={[styles.news2, styles.newsLayout]}>
        <Image
          style={[styles.maskGroupIcon, styles.newsLayout]}
          contentFit="cover"
          source={require("../assets/mask-group1.png")}
        />
        <Text style={[styles.edisonsLightbulbRevolution, styles.time1FlexBox]}>
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
      <View style={styles.trendingCollection}>
        <Text style={styles.exploreTypo}>Explore</Text>
        <View style={styles.frameParent}>
          <View>
            <Image
              style={styles.news3Icon}
              contentFit="cover"
              source={require("../assets/news-3.png")}
            />
            <Image
              style={[styles.news6Icon, styles.iconSpaceBlock]}
              contentFit="cover"
              source={require("../assets/news-6.png")}
            />
          </View>
          <View style={styles.news6Parent}>
            <Image
              style={styles.news3Icon}
              contentFit="cover"
              source={require("../assets/news-61.png")}
            />
            <Image
              style={[styles.news7Icon, styles.iconSpaceBlock]}
              contentFit="cover"
              source={require("../assets/news-7.png")}
            />
          </View>
        </View>
      </View>
      <Text style={[styles.leonardoDaVinci, styles.cleopatraViiTypo]}>
        Leonardo da Vinci
      </Text>
      <Text style={[styles.cleopatraVii, styles.cleopatraViiTypo]}>
        Cleopatra VII
      </Text>
      <Text style={[styles.napoleonBonaparte, styles.cleopatraViiTypo]}>
        Napoleon Bonaparte
      </Text>
      <Text style={[styles.historicalChat, styles.exploreTypo]}>
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
        <Text style={[styles.trending, styles.trendingTypo]}>Trending</Text>
        <Text style={[styles.explore1, styles.trendingTypo]}>Explore</Text>
        <Text style={[styles.historicalChat1, styles.trendingTypo]}>
          Historical Chat
        </Text>
        <View style={[styles.categoryChild, styles.saveIconLayout]} />
      </View>
      <View style={[styles.header, styles.headerLayout]}>
        <Text style={[styles.pastport, styles.headerLayout]}>PastPort</Text>
        <Image
          style={[styles.akarIconssearch, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/akariconssearch.png")}
        />
        <Image
          style={[styles.minotificationIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/minotification.png")}
        />
      </View>
      <View style={styles.statusBar}>
        <View style={[styles.symbol, styles.timePosition]}>
          <Image
            style={[styles.batteryIcon, styles.timePosition]}
            contentFit="cover"
            source={require("../assets/battery.png")}
          />
          <Image
            style={styles.wiFiIcon}
            contentFit="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={styles.cellularIcon}
            contentFit="cover"
            source={require("../assets/cellular.png")}
          />
        </View>
        <View style={[styles.time, styles.timePosition]}>
          <Text style={[styles.time1, styles.timePosition]}>9:41</Text>
        </View>
      </View>
      <View style={styles.navbar}>
        <View style={styles.home}>
          <Image
            style={[styles.heroiconsSolidhome, styles.heroiconsSolidhomeLayout]}
            contentFit="cover"
            source={require("../assets/heroiconssolidhome.png")}
          />
          <Text style={styles.home1}>Home</Text>
        </View>
        <Pressable
          style={[styles.trending1, styles.profileLayout]}
          onPress={() => navigation.navigate("Explore")}
        >
          <Image
            style={styles.materialSymbolsexploreIcon}
            contentFit="cover"
            source={require("../assets/materialsymbolsexplore.png")}
          />
          <Text style={[styles.explore2, styles.chatTypo]}>Explore</Text>
        </Pressable>
        <Pressable
          style={styles.favorite}
          onPress={() => navigation.navigate("CharacterChoose")}
        >
          <Image
            style={[styles.bichatFillIcon, styles.iconLayout]}
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
            style={[
              styles.iconamoonprofileFill,
              styles.heroiconsSolidhomeLayout,
            ]}
            contentFit="cover"
            source={require("../assets/iconamoonprofilefill.png")}
          />
          <Text style={[styles.explore2, styles.chatTypo]}>Profile</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  newsLayout: {
    height: 321,
    position: "absolute",
  },
  time1FlexBox: {
    textAlign: "left",
    color: Color.othersTextBG,
    letterSpacing: 0,
  },
  saveIconLayout: {
    width: 35,
    position: "absolute",
  },
  iconSpaceBlock: {
    marginTop: 18,
    height: 157,
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
  exploreTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.othersTextBG,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
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
  trendingTypo: {
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
  iconLayout: {
    height: 26,
    width: 26,
    position: "absolute",
    overflow: "hidden",
  },
  timePosition: {
    top: "50%",
    position: "absolute",
  },
  heroiconsSolidhomeLayout: {
    height: 34,
    width: 34,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  profileLayout: {
    height: 52,
    marginLeft: 53,
  },
  chatTypo: {
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    textAlign: "center",
    letterSpacing: 0,
    left: 0,
    position: "absolute",
  },
  maskGroupIcon: {
    left: 0,
    top: 0,
    width: 251,
    height: 321,
  },
  edisonsLightbulbRevolution: {
    top: 205,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsSemiBold,
    left: 19,
    color: Color.othersTextBG,
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
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
    width: 251,
    height: 321,
    top: 159,
  },
  news2: {
    left: 309,
    width: 394,
    top: 159,
  },
  news3Icon: {
    height: 157,
    width: 168,
  },
  news6Icon: {
    width: 172,
  },
  news7Icon: {
    width: 168,
    marginTop: 18,
  },
  news6Parent: {
    marginLeft: 15,
  },
  frameParent: {
    marginTop: 20,
    flexDirection: "row",
  },
  trendingCollection: {
    top: 521,
    left: 31,
    position: "absolute",
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
  explore1: {
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
    top: 7,
    width: 26,
  },
  minotificationIcon: {
    left: 320,
    top: 7,
    width: 26,
  },
  header: {
    top: 63,
    left: 40,
    width: 346,
  },
  batteryIcon: {
    marginTop: -5.5,
    right: 0,
    width: 25,
    height: 12,
  },
  wiFiIcon: {
    width: 17,
    height: 14,
  },
  cellularIcon: {
    width: 19,
    height: 13,
  },
  symbol: {
    marginTop: -5.7,
    right: 15,
    width: 75,
    height: 14,
  },
  time1: {
    marginTop: -9,
    left: 30,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.sFProText,
    textAlign: "left",
    color: Color.othersTextBG,
    letterSpacing: 0,
    fontWeight: "600",
    top: "50%",
  },
  time: {
    marginTop: -9.5,
    width: 180,
    height: 22,
    left: 0,
  },
  statusBar: {
    right: 5,
    height: 55,
    left: 0,
    top: 0,
    position: "absolute",
  },
  heroiconsSolidhome: {
    left: 1,
  },
  home1: {
    top: 35,
    color: Color.yELLOW,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    textAlign: "center",
    letterSpacing: 0,
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
    position: "absolute",
    overflow: "hidden",
  },
  explore2: {
    top: 34,
  },
  trending1: {
    width: 43,
    marginLeft: 53,
  },
  bichatFillIcon: {
    left: 4,
    top: 0,
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
    justifyContent: "center",
    paddingHorizontal: Padding.p_9xl,
    paddingVertical: Padding.p_xl,
    flexDirection: "row",
    position: "absolute",
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
