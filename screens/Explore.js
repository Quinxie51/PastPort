import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import SliderNews from "../components/SliderNews";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import ProfileContainer2 from "../components/ProfileContainer1";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Explore = () => {
  return (
    <View style={styles.explore}>
      <View style={styles.eparrowRightBold}>
        <View style={styles.eparrowRightBoldInner}>
          <View style={styles.frameParent}>
            <View>
              <Text style={styles.trending}>Trending</Text>
              <View style={styles.frameChild} />
            </View>
            <Text style={styles.whatAreYouTypo}>Time Periods</Text>
            <Text style={styles.whatAreYouTypo}>Geographical Regions</Text>
            <Text style={styles.whatAreYouTypo}>Event and Movements</Text>
          </View>
        </View>
      </View>
      <SliderNews />
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
      <View style={styles.frameGroup}>
        <FrameComponent2 />
        <FrameComponent1
          geographicalRegions="Geographical Regions"
          news3={require("../assets/news-31.png")}
          news4={require("../assets/news-4.png")}
        />
        <FrameComponent />
        <FrameComponent1
          geographicalRegions="Exploration and Discovery"
          news3={require("../assets/news-33.png")}
          news4={require("../assets/news-41.png")}
        />
      </View>
      <View style={styles.searchBar}>
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
        style={styles.backIcon}
        contentFit="cover"
        source={require("../assets/back1.png")}
      />
      <ProfileContainer2 />
    </View>
  );
};

const styles = StyleSheet.create({
  sliderLayout: {
    height: 6,
    width: 6,
  },
  whatAreYouTypo: {
    marginLeft: 20,
    textAlign: "left",
    color: Color.othersTextBG,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    fontSize: FontSize.size_xs,
  },
  trending: {
    textAlign: "left",
    color: Color.othersTextBG,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    fontSize: FontSize.size_xs,
  },
  frameChild: {
    borderStyle: "solid",
    borderColor: Color.yELLOW,
    borderTopWidth: 3,
    width: 35,
    height: 3,
    marginTop: 5,
  },
  frameParent: {
    flexDirection: "row",
  },
  eparrowRightBoldInner: {
    top: 133,
    left: 41,
    position: "absolute",
  },
  eparrowRightBold: {
    top: 0,
    left: 0,
    width: 1024,
    height: 1024,
    position: "absolute",
    overflow: "hidden",
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
  frameGroup: {
    top: 368,
    left: 36,
    position: "absolute",
  },
  akarIconssearch: {
    width: 19,
    height: 19,
    overflow: "hidden",
  },
  whatAreYou: {
    width: 152,
    height: 19,
  },
  searchBar: {
    top: 62,
    left: 75,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGray_100,
    width: 289,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 6,
    flexDirection: "row",
    position: "absolute",
  },
  backIcon: {
    top: 64,
    left: 25,
    width: 23,
    height: 24,
    position: "absolute",
    overflow: "hidden",
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
