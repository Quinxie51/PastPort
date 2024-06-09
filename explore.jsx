import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Explore = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  return (
    <View style={styles.explore}>
      <View style={[styles.eparrowRightBold, styles.eparrowLayout]} />
      <View style={styles.sliderNews}>
        <View style={styles.maskGroupParent}>
          <Image
            style={styles.maskGroupIcon}
            contentFit="cover"
            source={require("../assets/mask-group2.png")}
          />
          <Image
            style={styles.maskGroupIcon1}
            contentFit="cover"
            source={require("../assets/mask-group3.png")}
          />
        </View>
        <View style={[styles.category, styles.categoryPosition]}>
          <View style={styles.frameChildLayout}>
            <View style={[styles.frameChild, styles.searchBarLayout]} />
            <Text style={[styles.discovery, styles.timeTypo]}>Discovery</Text>
          </View>
        </View>
        <View style={styles.category1}>
          <View style={styles.frameChildLayout}>
            <View style={[styles.frameChild, styles.searchBarLayout]} />
            <Text style={[styles.discovery, styles.timeTypo]}>Event</Text>
          </View>
        </View>
        <Text style={[styles.moonLandingOne, styles.moonLandingOneTypo]}>
          Moon Landing: One Giant Leap for Mankind
        </Text>
        <Text style={[styles.napoleonsConquestOf, styles.moonLandingOneTypo]}>
          Napoleon's Conquest of Europe
        </Text>
      </View>
      <View style={styles.slider}>
        <Image
          style={styles.sliderLayout1}
          contentFit="cover"
          source={require("../assets/ellipse-4.png")}
        />
        <Image
          style={[styles.sliderItem, styles.sliderLayout1]}
          contentFit="cover"
          source={require("../assets/ellipse-5.png")}
        />
        <Image
          style={[styles.sliderItem, styles.sliderLayout1]}
          contentFit="cover"
          source={require("../assets/ellipse-5.png")}
        />
      </View>
      <View style={styles.frameParent}>
        <View style={styles.sliderLayout}>
          <View style={styles.slider1}>
            <Image
              style={styles.sliderLayout1}
              contentFit="cover"
              source={require("../assets/ellipse-4.png")}
            />
            <Image
              style={[styles.sliderItem, styles.sliderLayout1]}
              contentFit="cover"
              source={require("../assets/ellipse-5.png")}
            />
            <Image
              style={[styles.sliderItem, styles.sliderLayout1]}
              contentFit="cover"
              source={require("../assets/ellipse-5.png")}
            />
          </View>
          <View style={styles.trendingCollection}>
            <Text style={[styles.timePeriods, styles.timeTypo]}>
              Time Periods
            </Text>
            <View style={styles.news3Parent}>
              <View style={styles.news3}>
                <Image
                  style={styles.eparrowRightIcon}
                  contentFit="cover"
                  source={require("../assets/eparrowright.png")}
                />
                <Image
                  style={[styles.eparrowRightIcon1, styles.eparrowLayout]}
                  contentFit="cover"
                  source={require("../assets/eparrowright1.png")}
                />
                <View style={[styles.placeYourDesignHere, styles.iconLayout]} />
                <View style={styles.eparrowRight} />
                <Text
                  style={[styles.ancientCivilizations, styles.whatAreYouTypo]}
                >
                  Ancient Civilizations
                </Text>
              </View>
              <Image
                style={[styles.news6Icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/news-62.png")}
              />
              <Image
                style={[styles.news6Icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/news-71.png")}
              />
              <Image
                style={[styles.news6Icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/news-8.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.sliderGroup}>
          <View style={styles.slider2}>
            <Image
              style={styles.sliderLayout1}
              contentFit="cover"
              source={require("../assets/ellipse-4.png")}
            />
            <Image
              style={[styles.sliderItem, styles.sliderLayout1]}
              contentFit="cover"
              source={require("../assets/ellipse-5.png")}
            />
            <Image
              style={[styles.sliderItem, styles.sliderLayout1]}
              contentFit="cover"
              source={require("../assets/ellipse-5.png")}
            />
          </View>
          <View style={styles.trendingCollection}>
            <Text style={[styles.timePeriods, styles.timeTypo]}>
              Geographical Regions
            </Text>
            <View style={styles.news3Parent}>
              <Image
                style={styles.news3Icon}
                contentFit="cover"
                source={require("../assets/news-31.png")}
              />
              <Image
                style={styles.news4Icon}
                contentFit="cover"
                source={require("../assets/news-4.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.sliderContainer, styles.sliderLayout]}>
          <View style={styles.slider1}>
            <Image
              style={styles.sliderLayout1}
              contentFit="cover"
              source={require("../assets/ellipse-4.png")}
            />
            <Image
              style={[styles.sliderItem, styles.sliderLayout1]}
              contentFit="cover"
              source={require("../assets/ellipse-5.png")}
            />
            <Image
              style={[styles.sliderItem, styles.sliderLayout1]}
              contentFit="cover"
              source={require("../assets/ellipse-5.png")}
            />
          </View>
          <View style={styles.trendingCollection}>
            <Text style={[styles.timePeriods, styles.timeTypo]}>
              Event and Movements
            </Text>
            <View style={styles.news3Parent}>
              <Image
                style={[styles.news3Icon1, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/news-32.png")}
              />
              <Image
                style={[styles.news6Icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/news-63.png")}
              />
              <Image
                style={[styles.news6Icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/news-72.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.sliderGroup}>
          <View style={styles.slider2}>
            <Image
              style={styles.sliderLayout1}
              contentFit="cover"
              source={require("../assets/ellipse-4.png")}
            />
            <Image
              style={[styles.sliderItem, styles.sliderLayout1]}
              contentFit="cover"
              source={require("../assets/ellipse-5.png")}
            />
            <Image
              style={[styles.sliderItem, styles.sliderLayout1]}
              contentFit="cover"
              source={require("../assets/ellipse-5.png")}
            />
          </View>
          <View style={styles.trendingCollection}>
            <Text style={[styles.timePeriods, styles.timeTypo]}>
              Exploration and Discovery
            </Text>
            <View style={styles.news3Parent}>
              <Image
                style={styles.news3Icon}
                contentFit="cover"
                source={require("../assets/news-33.png")}
              />
              <Image
                style={styles.news4Icon}
                contentFit="cover"
                source={require("../assets/news-41.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.searchBar, styles.searchBarLayout]}>
        <Image
          style={styles.akarIconssearch}
          contentFit="cover"
          source={require("../assets/akariconssearch1.png")}
        />
        <Text style={[styles.whatAreYou, styles.whatAreYouTypo]}>
          What are you looking for?
        </Text>
      </View>
      <Image
        style={[styles.backIcon, styles.categoryPosition]}
        contentFit="cover"
        source={require("../assets/back.png")}
      />
      <View style={[styles.navbar, styles.navbarPosition]}>
        <Pressable
          style={styles.home}
          onPress={() => navigation.navigate("Homepage")}
        >
          <Image
            style={[styles.heroiconsSolidhome, styles.heroiconsSolidhomeLayout]}
            contentFit="cover"
            source={require("../assets/heroiconssolidhome1.png")}
          />
          <Text style={[styles.home1, styles.home1Typo]}>Home</Text>
        </Pressable>
        <View style={[styles.trending, styles.profileLayout]}>
          <Image
            style={styles.materialSymbolsexploreIcon}
            contentFit="cover"
            source={require("../assets/materialsymbolsexplore1.png")}
          />
          <Text style={[styles.explore1, styles.home1Typo]}>Explore</Text>
        </View>
        <Pressable
          style={styles.favorite}
          onPress={() => navigation.navigate("CharacterChoose")}
        >
          <Image
            style={styles.bichatFillIcon}
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
          <Text style={[styles.profile1, styles.chatTypo]}>Profile</Text>
        </Pressable>
      </View>
      <View style={[styles.statusBar, styles.navbarPosition]}>
        <View style={styles.time}>
          <Text style={[styles.time1, styles.time1Position]}>9:41</Text>
        </View>
        <View style={styles.symbol}>
          <Image
            style={[styles.batteryIcon, styles.time1Position]}
            contentFit="cover"
            source={require("../assets/battery1.png")}
          />
          <Image
            style={styles.wiFiIcon}
            contentFit="cover"
            source={require("../assets/wifi1.png")}
          />
          <Image
            style={styles.cellularIcon}
            contentFit="cover"
            source={require("../assets/cellular1.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  eparrowLayout: {
    width: 1024,
    height: 1024,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  categoryPosition: {
    top: 64,
    position: "absolute",
  },
  searchBarLayout: {
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  timeTypo: {
    textAlign: "left",
    color: Color.othersTextBG,
    fontWeight: "600",
    letterSpacing: 0,
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
  sliderLayout1: {
    height: 6,
    width: 6,
  },
  iconLayout: {
    width: 142,
    height: 157,
  },
  whatAreYouTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.othersTextBG,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
  },
  sliderLayout: {
    height: 236,
    width: 462,
  },
  navbarPosition: {
    width: 415,
    left: "50%",
    flexDirection: "row",
    position: "absolute",
  },
  heroiconsSolidhomeLayout: {
    height: 34,
    width: 34,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  home1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    letterSpacing: 0,
    left: 0,
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
    fontSize: FontSize.size_xs,
    letterSpacing: 0,
    left: 0,
    position: "absolute",
  },
  time1Position: {
    top: "50%",
    position: "absolute",
  },
  eparrowRightBold: {
    height: 1024,
    left: 0,
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
    zIndex: 0,
    alignItems: "center",
    flexDirection: "row",
  },
  frameChild: {
    backgroundColor: Color.othersTextBG,
    opacity: 0.1,
    height: 17,
    width: 60,
    left: 0,
    top: 0,
  },
  discovery: {
    top: "11.76%",
    left: "20%",
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.othersTextBG,
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  frameChildLayout: {
    height: 17,
    width: 60,
  },
  category: {
    left: 18,
    zIndex: 1,
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
    top: 124,
    left: 36,
    position: "absolute",
  },
  sliderItem: {
    marginLeft: 8,
  },
  slider: {
    top: 297,
    left: 198,
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
  },
  slider1: {
    top: 230,
    left: 172,
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
  },
  timePeriods: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.othersTextBG,
    fontWeight: "600",
    letterSpacing: 0,
  },
  eparrowRightIcon: {
    top: 180,
    height: 60,
    width: 60,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  eparrowRightIcon1: {
    left: 142,
    height: 1024,
  },
  placeYourDesignHere: {
    height: 157,
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_xl,
    position: "absolute",
    left: 0,
    top: 0,
  },
  eparrowRight: {
    top: 125,
    left: 115,
    width: 21,
    height: 21,
    position: "absolute",
    overflow: "hidden",
  },
  ancientCivilizations: {
    top: 105,
    left: 10,
    width: 121,
    position: "absolute",
  },
  news3: {
    width: 1166,
    display: "none",
    height: 1024,
  },
  news6Icon: {
    height: 157,
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
  slider2: {
    top: 232,
    left: 173,
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
  },
  news3Icon: {
    width: 190,
    height: 157,
  },
  news4Icon: {
    width: 180,
    height: 157,
    marginLeft: 18,
  },
  sliderGroup: {
    width: 388,
    height: 238,
    marginTop: 18,
  },
  news3Icon1: {
    height: 157,
  },
  sliderContainer: {
    marginTop: 18,
  },
  frameParent: {
    top: 304,
    left: 30,
    position: "absolute",
  },
  akarIconssearch: {
    width: 19,
    height: 19,
    overflow: "hidden",
  },
  whatAreYou: {
    width: 152,
    marginLeft: 20,
    height: 19,
  },
  searchBar: {
    top: 62,
    left: 75,
    width: 289,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 6,
    backgroundColor: Color.colorGray_100,
    flexDirection: "row",
  },
  backIcon: {
    left: 25,
    width: 23,
    height: 24,
    overflow: "hidden",
  },
  heroiconsSolidhome: {
    left: 1,
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
    position: "absolute",
    overflow: "hidden",
  },
  explore1: {
    color: Color.yELLOW,
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
    position: "absolute",
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
  },
  profile1: {
    top: 34,
  },
  profile: {
    width: 37,
    marginLeft: 53,
  },
  navbar: {
    marginLeft: -209.5,
    bottom: 0,
    paddingHorizontal: Padding.p_9xl,
    paddingVertical: Padding.p_xl,
    backgroundColor: Color.colorGray_100,
    justifyContent: "center",
  },
  time1: {
    marginTop: -9,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.sFProText,
    left: 30,
    textAlign: "left",
    color: Color.othersTextBG,
    fontWeight: "600",
    letterSpacing: 0,
    top: "50%",
  },
  time: {
    height: 22,
    width: 180,
  },
  batteryIcon: {
    marginTop: -5.75,
    right: 0,
    width: 25,
    height: 12,
  },
  wiFiIcon: {
    width: 15,
    height: 11,
  },
  cellularIcon: {
    width: 17,
    height: 11,
  },
  symbol: {
    width: 67,
    marginLeft: 143,
    height: 12,
  },
  statusBar: {
    marginLeft: -207.5,
    height: 48,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
    alignItems: "center",
    top: 0,
  },
  explore: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    width: "100%",
    height: 1557,
    overflow: "hidden",
  },
});

export default Explore;
