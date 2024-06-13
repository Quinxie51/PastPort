import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import List1 from "../components/List1";
import RightIcon from "../components/RightIcon";
import RightSwitch from "../components/RightSwitch";
import ProfileContainer3 from "../components/ProfileContainer3";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

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
        <List1
          iconOutlineperson={require("../assets/iconoutlineperson2.png")}
          editProfile="Edit Profile"
        />
        <RightIcon
          iconOutlineperson={require("../assets/iconoutlineperson3.png")}
          editText="Notebook"
          iconFillarrowIosRight={require("../assets/iconfillarrowiosright2.png")}
          showLeftIcon
          showRightIcon
          rightIconPosition="unset"
          rightIconWidth={375}
          editProfileFontFamily="Poppins-Regular"
          editProfileColor="#fff"
          onListPress={() => navigation.navigate("Notebook")}
        />
        <RightSwitch
          iconOutlineperson={require("../assets/iconoutlinebell1.png")}
          editText="Notifications"
          showLeftIcon
          rightSwitchPosition="unset"
          rightSwitchWidth={375}
          editProfileFontFamily="Poppins-Regular"
          editProfileColor="#fff"
          rectangleViewBackgroundColor="#e9e00c"
        />
        <List1
          iconOutlineperson={require("../assets/iconoutlineglobe21.png")}
          editProfile="Languages"
        />
        <List1
          iconOutlineperson={require("../assets/iconoutlinefiletext1.png")}
          editProfile="Terms of service"
        />
        <List1
          iconOutlineperson={require("../assets/iconoutlinefiletext1.png")}
          editProfile="Privacy Policy"
        />
        <List1
          iconOutlineperson={require("../assets/iconfilllogout1.png")}
          editProfile="Log out"
        />
      </View>
      <Image
        style={styles.materialSymbolsLightbookmarIcon}
        contentFit="cover"
        source={require("../assets/materialsymbolslightbookmarkoutline.png")}
      />
      <Image
        style={styles.backIcon}
        contentFit="cover"
        source={require("../assets/back.png")}
      />
      <Text style={[styles.profile1, styles.quinxieClr]}>Profile</Text>
      <ProfileContainer3 />
    </View>
  );
};

const styles = StyleSheet.create({
  quinxieClr: {
    color: Color.othersTextBG,
    textAlign: "center",
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
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorFloralwhite,
    textAlign: "center",
  },
  quinxie: {
    fontSize: 20,
    lineHeight: 25,
    fontFamily: FontFamily.poppinsRegular,
    marginTop: 8,
  },
  quinxieDoanParent: {
    top: 286,
    left: 116,
    alignItems: "center",
    position: "absolute",
  },
  listParent: {
    top: 366,
    left: 20,
    position: "absolute",
  },
  materialSymbolsLightbookmarIcon: {
    top: 458,
    left: 41,
    width: 30,
    height: 31,
    position: "absolute",
    overflow: "hidden",
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
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    position: "absolute",
  },
  profile: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    width: "100%",
    height: 1039,
    overflow: "hidden",
  },
});

export default Profile;
