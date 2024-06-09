import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

const CharacterChoose = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.characterChoose}>
      <Image
        style={styles.shoes1Icon}
        contentFit="cover"
        source={require("../assets/shoes-1.png")}
      />
      <View style={[styles.backParent, styles.selectFlexBox1]}>
        <Image
          style={styles.backIconLayout}
          contentFit="cover"
          source={require("../assets/back.png")}
        />
        <Pressable
          style={styles.category}
          onPress={() => navigation.navigate("Chatbot")}
        >
          <View style={[styles.selectWrapper, styles.selectFlexBox1]}>
            <Text
              style={[styles.select, styles.selectFlexBox]}
            >{`Select `}</Text>
          </View>
        </Pressable>
        <Image
          style={[styles.backIcon1, styles.backIconLayout]}
          contentFit="cover"
          source={require("../assets/back1.png")}
        />
      </View>
      <Image
        style={styles.characterChooseChild}
        contentFit="cover"
        source={require("../assets/rectangle-988.png")}
      />
      <Image
        style={styles.characterChooseItem}
        contentFit="cover"
        source={require("../assets/rectangle-989.png")}
      />
      <Text style={[styles.napoleonBonaparte, styles.selectFlexBox]}>
        Napoleon Bonaparte
      </Text>
      <Image
        style={[styles.backIcon2, styles.time1Position]}
        contentFit="cover"
        source={require("../assets/back2.png")}
      />
      <Text style={[styles.historicalChat, styles.selectFlexBox]}>
        Historical Chat
      </Text>
      <Text style={[styles.whoDoYou, styles.selectFlexBox]}>
        Who do you want to talk to?
      </Text>
      <View style={[styles.navbar, styles.navbarFlexBox]}>
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
          style={[styles.trending, styles.profileLayout]}
          onPress={() => navigation.navigate("Explore")}
        >
          <Image
            style={[styles.materialSymbolsexploreIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/materialsymbolsexplore2.png")}
          />
          <Text style={[styles.explore, styles.chatTypo]}>Explore</Text>
        </Pressable>
        <View style={styles.favorite}>
          <Image
            style={[styles.bichatFillIcon, styles.iconPosition]}
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
            style={[
              styles.iconamoonprofileFill,
              styles.heroiconsSolidhomeLayout,
            ]}
            contentFit="cover"
            source={require("../assets/iconamoonprofilefill1.png")}
          />
          <Text style={[styles.explore, styles.chatTypo]}>Profile</Text>
        </Pressable>
      </View>
      <View style={[styles.statusBar, styles.iconPosition]}>
        <View style={styles.time}>
          <Text style={[styles.time1, styles.time1Position]}>9:41</Text>
        </View>
        <View style={styles.symbol}>
          <Image
            style={styles.batteryIcon}
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
  selectFlexBox1: {
    alignItems: "center",
    justifyContent: "center",
  },
  selectFlexBox: {
    textAlign: "center",
    letterSpacing: 0,
  },
  backIconLayout: {
    height: 24,
    width: 23,
    overflow: "hidden",
  },
  time1Position: {
    left: 30,
    position: "absolute",
  },
  navbarFlexBox: {
    width: 415,
    alignItems: "center",
    flexDirection: "row",
    left: "50%",
  },
  heroiconsSolidhomeLayout: {
    height: 34,
    width: 34,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  chatTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: 0,
    textAlign: "center",
    letterSpacing: 0,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  profileLayout: {
    height: 52,
    marginLeft: 53,
  },
  iconPosition: {
    top: 0,
    position: "absolute",
  },
  shoes1Icon: {
    marginTop: -226,
    marginLeft: -126.5,
    width: 278,
    height: 259,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  select: {
    display: "flex",
    width: 55,
    height: 8,
    color: Color.othersTextBG,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    justifyContent: "center",
    alignItems: "center",
  },
  selectWrapper: {
    borderRadius: 14,
    borderStyle: "solid",
    borderColor: Color.othersTextBG,
    borderWidth: 1,
    height: 28,
    paddingHorizontal: 2,
    paddingVertical: Padding.p_3xs,
    width: 94,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  category: {
    marginLeft: 44,
    width: 94,
  },
  backIcon1: {
    marginLeft: 44,
  },
  backParent: {
    top: 553,
    left: 89,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  characterChooseChild: {
    top: 306,
    left: 5,
    width: 95,
    height: 159,
    position: "absolute",
  },
  characterChooseItem: {
    top: 318,
    left: 310,
    width: 105,
    height: 139,
    position: "absolute",
  },
  napoleonBonaparte: {
    top: 180,
    left: 108,
    fontSize: 18,
    width: 189,
    color: Color.othersTextBG,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "center",
    position: "absolute",
  },
  backIcon2: {
    top: 71,
    width: 35,
    height: 35,
  },
  historicalChat: {
    top: "8.44%",
    left: "34.7%",
    fontSize: FontSize.size_base,
    color: Color.othersTextBG,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "center",
    position: "absolute",
  },
  whoDoYou: {
    top: "11.51%",
    left: "29.16%",
    fontStyle: "italic",
    fontFamily: FontFamily.poppinsItalic,
    color: Color.yELLOW,
    fontSize: FontSize.size_xs,
    position: "absolute",
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
  },
  profile: {
    width: 37,
    marginLeft: 53,
  },
  navbar: {
    marginLeft: -212.5,
    bottom: 0,
    backgroundColor: Color.colorGray_100,
    paddingHorizontal: Padding.p_9xl,
    paddingVertical: Padding.p_xl,
    justifyContent: "center",
    position: "absolute",
  },
  time1: {
    marginTop: -9,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.sFProText,
    textAlign: "left",
    color: Color.othersTextBG,
    fontWeight: "600",
    letterSpacing: 0,
    left: 30,
    top: "50%",
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
    top: "50%",
    position: "absolute",
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
    width: 415,
    alignItems: "center",
    flexDirection: "row",
    left: "50%",
    paddingVertical: Padding.p_3xs,
  },
  characterChoose: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    width: "100%",
    height: 912,
    overflow: "hidden",
  },
});

export default CharacterChoose;
