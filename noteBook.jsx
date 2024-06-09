import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Padding, Border, FontFamily, FontSize } from "../GlobalStyles";

const Notebook = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.notebook}>
      <View style={styles.statusBarWrapper}>
        <View style={styles.statusBar}>
          <Text style={styles.text}>3:29</Text>
          <View style={styles.hugeIconcommunicationsolidParent}>
            <Image
              style={[styles.hugeIconcommunicationsolid, styles.hugeLayout]}
              contentFit="cover"
              source={require("../assets/hugeiconcommunicationsolidchatnotification.png")}
            />
            <Image
              style={[styles.hugeIcondevicesolidbattery, styles.hugeLayout]}
              contentFit="cover"
              source={require("../assets/hugeicondevicesolidbatteryhorizontalcharging.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.frameParent}>
        <Pressable
          style={styles.edisonsSpaceBlock}
          onPress={() => navigation.navigate("Notebook1")}
        >
          <Text style={[styles.edisonsLightbulbRevolution, styles.time1Typo]}>
            Edison's Lightbulb Revolution
          </Text>
          <Image
            style={[styles.saveIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/save-icon1.png")}
          />
          <View style={styles.category}>
            <View style={styles.frameChildLayout}>
              <View style={[styles.frameChild, styles.frameChildLayout]} />
              <Text style={[styles.discovery, styles.time1Typo]}>
                Discovery
              </Text>
            </View>
          </View>
        </Pressable>
        <View
          style={[
            styles.edisonsLightbulbRevolutionGroup,
            styles.edisonsSpaceBlock,
          ]}
        >
          <Text style={[styles.edisonsLightbulbRevolution, styles.time1Typo]}>
            Edison's Lightbulb Revolution
          </Text>
          <Image
            style={[styles.saveIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/save-icon1.png")}
          />
          <View style={styles.category}>
            <View style={styles.frameChildLayout}>
              <View style={[styles.frameChild, styles.frameChildLayout]} />
              <Text style={[styles.discovery, styles.time1Typo]}>
                Discovery
              </Text>
            </View>
          </View>
        </View>
        <View
          style={[
            styles.edisonsLightbulbRevolutionGroup,
            styles.edisonsSpaceBlock,
          ]}
        >
          <Text style={[styles.edisonsLightbulbRevolution, styles.time1Typo]}>
            Edison's Lightbulb Revolution
          </Text>
          <Image
            style={[styles.saveIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/save-icon1.png")}
          />
          <View style={styles.category}>
            <View style={styles.frameChildLayout}>
              <View style={[styles.frameChild, styles.frameChildLayout]} />
              <Text style={[styles.discovery, styles.time1Typo]}>
                Discovery
              </Text>
            </View>
          </View>
        </View>
        <View
          style={[
            styles.edisonsLightbulbRevolutionGroup,
            styles.edisonsSpaceBlock,
          ]}
        >
          <Text style={[styles.edisonsLightbulbRevolution, styles.time1Typo]}>
            Edison's Lightbulb Revolution
          </Text>
          <Image
            style={[styles.saveIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/save-icon1.png")}
          />
          <View style={styles.category}>
            <View style={styles.frameChildLayout}>
              <View style={[styles.frameChild, styles.frameChildLayout]} />
              <Text style={[styles.discovery, styles.time1Typo]}>
                Discovery
              </Text>
            </View>
          </View>
        </View>
      </View>
      <Image
        style={[styles.backIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/back2.png")}
      />
      <Text style={styles.notebook1}>Notebook</Text>
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
          <Text style={[styles.home1, styles.chatTypo]}>Home</Text>
        </Pressable>
        <View style={[styles.trending, styles.profileLayout]}>
          <Image
            style={styles.materialSymbolsexploreIcon}
            contentFit="cover"
            source={require("../assets/materialsymbolsexplore2.png")}
          />
          <Text style={[styles.explore, styles.exploreTypo]}>Explore</Text>
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
        <View style={[styles.profile, styles.profileLayout]}>
          <Image
            style={[
              styles.iconamoonprofileFill,
              styles.heroiconsSolidhomeLayout,
            ]}
            contentFit="cover"
            source={require("../assets/iconamoonprofilefill2.png")}
          />
          <Text style={[styles.profile1, styles.exploreTypo]}>Profile</Text>
        </View>
      </View>
      <View style={[styles.statusBar1, styles.navbarPosition]}>
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
  hugeLayout: {
    width: 24,
    height: 20,
  },
  time1Typo: {
    textAlign: "left",
    color: Color.othersTextBG,
    fontWeight: "600",
    letterSpacing: 0,
  },
  iconLayout: {
    height: 35,
    width: 35,
  },
  frameChildLayout: {
    height: 17,
    width: 60,
  },
  edisonsSpaceBlock: {
    paddingBottom: Padding.p_16xl,
    paddingTop: Padding.p_lgi,
    paddingHorizontal: Padding.p_6xl,
    height: 88,
    justifyContent: "center",
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_xl,
    alignItems: "center",
    flexDirection: "row",
  },
  navbarPosition: {
    width: 415,
    left: "50%",
    marginLeft: -207.5,
    alignItems: "center",
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
  chatTypo: {
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    letterSpacing: 0,
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  profileLayout: {
    height: 52,
    marginLeft: 53,
  },
  exploreTypo: {
    top: 34,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    letterSpacing: 0,
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  time1Position: {
    top: "50%",
    position: "absolute",
  },
  text: {
    fontWeight: "700",
    fontFamily: FontFamily.sFProRounded,
    color: Color.blackAndWhiteBlack,
    width: 40,
    height: 20,
    textAlign: "center",
    fontSize: FontSize.size_base,
  },
  hugeIconcommunicationsolid: {
    overflow: "hidden",
  },
  hugeIcondevicesolidbattery: {
    marginLeft: 4,
  },
  hugeIconcommunicationsolidParent: {
    flexDirection: "row",
  },
  statusBar: {
    width: 375,
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_sm,
    alignItems: "center",
    flexDirection: "row",
  },
  statusBarWrapper: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  edisonsLightbulbRevolution: {
    fontSize: FontSize.size_sm,
    width: 257,
    height: 21,
    zIndex: 0,
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "left",
  },
  saveIcon: {
    zIndex: 1,
    marginLeft: -33,
  },
  frameChild: {
    backgroundColor: Color.othersTextBG,
    opacity: 0.1,
    borderRadius: Border.br_xl,
    width: 60,
    left: 0,
    top: 0,
    position: "absolute",
  },
  discovery: {
    top: "11.76%",
    left: "20%",
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "left",
    position: "absolute",
  },
  category: {
    top: 57,
    left: 25,
    zIndex: 2,
    position: "absolute",
  },
  edisonsLightbulbRevolutionGroup: {
    marginTop: 10,
  },
  frameParent: {
    top: 175,
    left: 53,
    position: "absolute",
  },
  backIcon: {
    top: 76,
    left: 41,
    position: "absolute",
  },
  notebook1: {
    top: "9.47%",
    left: "42.17%",
    color: Color.othersTextBG,
    fontWeight: "600",
    letterSpacing: 0,
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "center",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  heroiconsSolidhome: {
    left: 1,
  },
  home1: {
    top: 35,
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
  explore: {
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
    color: Color.yELLOW,
  },
  profile: {
    width: 37,
    marginLeft: 53,
  },
  navbar: {
    bottom: 0,
    paddingHorizontal: Padding.p_9xl,
    paddingVertical: Padding.p_xl,
    justifyContent: "center",
    backgroundColor: Color.colorGray_100,
    width: 415,
    left: "50%",
    marginLeft: -207.5,
  },
  time1: {
    marginTop: -9,
    left: 30,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.sFProText,
    textAlign: "left",
    color: Color.othersTextBG,
    fontWeight: "600",
    letterSpacing: 0,
  },
  time: {
    width: 180,
    height: 22,
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
  statusBar1: {
    height: 48,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
    top: 0,
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
