import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profile}>
      <Image
        style={styles.healthiconsuiUserProfile}
        contentFit="cover"
        source={require("../assets/healthiconsuiuserprofile.png")}
      />
      <View style={styles.quinxieDoanParent}>
        <Text style={styles.quinxieDoan}>Quinxie Doan</Text>
        <Text style={[styles.quinxie, styles.quinxieClr]}>@quinxie._</Text>
      </View>
      <View style={styles.listParent}>
        <View style={[styles.list, styles.listFlexBox]}>
          <View style={styles.iconoutlinepersonParent}>
            <Image
              style={styles.iconoutlineperson}
              contentFit="cover"
              source={require("../assets/iconoutlineperson2.png")}
            />
            <Text style={[styles.editProfile, styles.quinxieClr]}>
              Edit Profile
            </Text>
          </View>
          <Image
            style={styles.iconoutlineperson}
            contentFit="cover"
            source={require("../assets/iconfillarrowiosright2.png")}
          />
        </View>
        <Pressable
          style={[styles.list, styles.listFlexBox]}
          onPress={() => navigation.navigate("Notebook")}
        >
          <View style={styles.iconoutlinepersonParent}>
            <Image
              style={styles.iconoutlineperson}
              contentFit="cover"
              source={require("../assets/iconoutlineperson3.png")}
            />
            <Text style={[styles.editProfile, styles.quinxieClr]}>
              Notebook
            </Text>
          </View>
          <Image
            style={styles.iconoutlineperson}
            contentFit="cover"
            source={require("../assets/iconfillarrowiosright2.png")}
          />
        </Pressable>
        <View style={[styles.list, styles.listFlexBox]}>
          <View style={styles.iconoutlinepersonParent}>
            <Image
              style={styles.iconoutlineperson}
              contentFit="cover"
              source={require("../assets/iconoutlinebell1.png")}
            />
            <Text style={[styles.editProfile, styles.quinxieClr]}>
              Notifications
            </Text>
          </View>
          <View style={styles.swich}>
            <View style={styles.swichChild} />
            <Image
              style={styles.swichItem}
              contentFit="cover"
              source={require("../assets/ellipse-71.png")}
            />
          </View>
        </View>
        <View style={[styles.list, styles.listFlexBox]}>
          <View style={styles.iconoutlinepersonParent}>
            <Image
              style={styles.iconoutlineperson}
              contentFit="cover"
              source={require("../assets/iconoutlineglobe21.png")}
            />
            <Text style={[styles.editProfile, styles.quinxieClr]}>
              Languages
            </Text>
          </View>
          <Image
            style={styles.iconoutlineperson}
            contentFit="cover"
            source={require("../assets/iconfillarrowiosright2.png")}
          />
        </View>
        <View style={[styles.list, styles.listFlexBox]}>
          <View style={styles.iconoutlinepersonParent}>
            <Image
              style={styles.iconoutlineperson}
              contentFit="cover"
              source={require("../assets/iconoutlinefiletext1.png")}
            />
            <Text style={[styles.editProfile, styles.quinxieClr]}>
              Terms of service
            </Text>
          </View>
          <Image
            style={styles.iconoutlineperson}
            contentFit="cover"
            source={require("../assets/iconfillarrowiosright2.png")}
          />
        </View>
        <View style={[styles.list, styles.listFlexBox]}>
          <View style={styles.iconoutlinepersonParent}>
            <Image
              style={styles.iconoutlineperson}
              contentFit="cover"
              source={require("../assets/iconoutlinefiletext1.png")}
            />
            <Text style={[styles.editProfile, styles.quinxieClr]}>
              Privacy Policy
            </Text>
          </View>
          <Image
            style={styles.iconoutlineperson}
            contentFit="cover"
            source={require("../assets/iconfillarrowiosright2.png")}
          />
        </View>
        <View style={[styles.list, styles.listFlexBox]}>
          <View style={styles.iconoutlinepersonParent}>
            <Image
              style={styles.iconoutlineperson}
              contentFit="cover"
              source={require("../assets/iconfilllogout1.png")}
            />
            <Text style={[styles.editProfile, styles.quinxieClr]}>Log out</Text>
          </View>
          <Image
            style={styles.iconoutlineperson}
            contentFit="cover"
            source={require("../assets/iconfillarrowiosright2.png")}
          />
        </View>
      </View>
      <View style={styles.statusBarWrapper}>
        <View style={[styles.statusBar, styles.listFlexBox]}>
          <Text style={[styles.text, styles.textTypo]}>3:29</Text>
          <View style={styles.hugeIconcommunicationsolidParent}>
            <Image
              style={styles.hugeIconcommunicationsolid}
              contentFit="cover"
              source={require("../assets/hugeiconcommunicationsolidchatnotification.png")}
            />
            <Image
              style={styles.hugeIcondevicesolidbattery}
              contentFit="cover"
              source={require("../assets/hugeicondevicesolidbatteryhorizontalcharging.png")}
            />
          </View>
        </View>
      </View>
      <Image
        style={[
          styles.materialSymbolsLightbookmarIcon,
          styles.materialIconLayout,
        ]}
        contentFit="cover"
        source={require("../assets/materialsymbolslightbookmarkoutline.png")}
      />
      <Image
        style={styles.backIcon}
        contentFit="cover"
        source={require("../assets/back2.png")}
      />
      <Text style={[styles.profile1, styles.time1Typo]}>Profile</Text>
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
        <Pressable
          style={[styles.trending, styles.trendingLayout]}
          onPress={() => navigation.navigate("Explore")}
        >
          <Image
            style={[
              styles.materialSymbolsexploreIcon,
              styles.materialIconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/materialsymbolsexplore2.png")}
          />
          <Text style={[styles.explore, styles.exploreTypo]}>Explore</Text>
        </Pressable>
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
        <View style={[styles.profile2, styles.trendingLayout]}>
          <Image
            style={[
              styles.iconamoonprofileFill,
              styles.heroiconsSolidhomeLayout,
            ]}
            contentFit="cover"
            source={require("../assets/iconamoonprofilefill2.png")}
          />
          <Text style={[styles.profile3, styles.exploreTypo]}>Profile</Text>
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
  quinxieClr: {
    color: Color.othersTextBG,
    fontFamily: FontFamily.poppinsRegular,
  },
  listFlexBox: {
    justifyContent: "space-between",
    width: 375,
    flexDirection: "row",
    alignItems: "center",
  },
  textTypo: {
    fontSize: FontSize.size_base,
    textAlign: "center",
  },
  materialIconLayout: {
    height: 31,
    position: "absolute",
    overflow: "hidden",
  },
  time1Typo: {
    fontWeight: "600",
    letterSpacing: 0,
    color: Color.othersTextBG,
  },
  navbarPosition: {
    width: 415,
    left: "50%",
    marginLeft: -207.5,
    flexDirection: "row",
    alignItems: "center",
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
    fontSize: FontSize.size_xs,
    letterSpacing: 0,
    left: 0,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  trendingLayout: {
    height: 52,
    marginLeft: 53,
  },
  exploreTypo: {
    top: 34,
    fontSize: FontSize.size_xs,
    letterSpacing: 0,
    left: 0,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  time1Position: {
    top: "50%",
    position: "absolute",
  },
  healthiconsuiUserProfile: {
    top: 145,
    left: 142,
    width: 124,
    height: 124,
    position: "absolute",
    overflow: "hidden",
  },
  quinxieDoan: {
    fontSize: 28,
    lineHeight: 34,
    color: Color.colorFloralwhite,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  quinxie: {
    fontSize: 20,
    lineHeight: 25,
    marginTop: 8,
    textAlign: "center",
  },
  quinxieDoanParent: {
    top: 286,
    left: 116,
    alignItems: "center",
    position: "absolute",
  },
  iconoutlineperson: {
    height: 24,
    width: 24,
  },
  editProfile: {
    fontSize: FontSize.appBody_size,
    lineHeight: 22,
    width: 240,
    marginLeft: 12,
    textAlign: "left",
  },
  iconoutlinepersonParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  list: {
    borderStyle: "solid",
    borderColor: Color.othersBorders,
    borderBottomWidth: 1,
    padding: Padding.p_5xl,
  },
  swichChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_base,
    backgroundColor: Color.yELLOW,
    position: "absolute",
    width: "100%",
  },
  swichItem: {
    height: "75%",
    width: "47.37%",
    top: "12.5%",
    right: "7.89%",
    bottom: "12.5%",
    left: "44.74%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  swich: {
    width: 38,
    height: 24,
  },
  listParent: {
    top: 366,
    left: 20,
    position: "absolute",
  },
  text: {
    fontWeight: "700",
    fontFamily: FontFamily.sFProRounded,
    color: Color.blackAndWhiteBlack,
    width: 40,
    height: 20,
  },
  hugeIconcommunicationsolid: {
    height: 20,
    width: 24,
    overflow: "hidden",
  },
  hugeIcondevicesolidbattery: {
    marginLeft: 4,
    height: 20,
    width: 24,
  },
  hugeIconcommunicationsolidParent: {
    flexDirection: "row",
  },
  statusBar: {
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_sm,
  },
  statusBarWrapper: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  materialSymbolsLightbookmarIcon: {
    top: 458,
    left: 41,
    width: 30,
  },
  backIcon: {
    top: 67,
    left: 31,
    width: 35,
    height: 35,
    position: "absolute",
  },
  profile1: {
    top: "7.03%",
    left: "43.13%",
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: FontSize.size_base,
    textAlign: "center",
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
    top: 0,
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
    height: 49,
    marginLeft: 53,
    width: 30,
  },
  iconamoonprofileFill: {
    left: 2,
  },
  profile3: {
    color: Color.yELLOW,
  },
  profile2: {
    width: 37,
    marginLeft: 53,
  },
  navbar: {
    bottom: 0,
    backgroundColor: Color.colorGray_100,
    justifyContent: "center",
    paddingHorizontal: Padding.p_9xl,
    paddingVertical: Padding.p_xl,
  },
  time1: {
    marginTop: -9,
    left: 30,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.sFProText,
    fontWeight: "600",
    letterSpacing: 0,
    color: Color.othersTextBG,
    textAlign: "left",
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
  profile: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    height: 1039,
    overflow: "hidden",
    width: "100%",
  },
});

export default Profile;
