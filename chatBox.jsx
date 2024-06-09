import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Chatbot = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.chatbot}>
      <Image
        style={[styles.iconfilledit, styles.iconfilleditLayout]}
        contentFit="cover"
        source={require("../assets/iconfilledit1.png")}
      />
      <View style={styles.chatBubblesenddefault}>
        <Text style={[styles.howAreYou, styles.howTypo]}>
          Your artwork is truly mesmerizing, especially the Mona Lisa. What
          inspired you to create such a masterpiece?
        </Text>
      </View>
      <View style={[styles.chatBubblesenddefault1, styles.chatPosition]}>
        <Text style={[styles.howAreYou1, styles.howTypo]}>
          Ah, greetings! I am delighted to converse with you, my friend. What
          intrigues you about my endeavors?
        </Text>
      </View>
      <View style={[styles.chatBubblerecevedreceived, styles.chatPosition]}>
        <Text style={[styles.asAnAi, styles.howTypo]}>
          Ah, the Mona Lisa! She is a mysterious muse, indeed. My inspiration
          springs from the beauty of nature and the human form. I sought to
          capture her enigmatic smile and the essence of her soul.
        </Text>
        <View
          style={[
            styles.chatBubblerecevedreceivedChild,
            styles.frameParentSpaceBlock,
          ]}
        />
        <View style={[styles.frameParent, styles.frameParentSpaceBlock]}>
          <View style={styles.iconoutlinelikeParent}>
            <Image
              style={[styles.iconoutlinelike, styles.iconfilleditLayout]}
              contentFit="cover"
              source={require("../assets/iconoutlinelike.png")}
            />
            <Image
              style={[styles.iconoutlinedislike, styles.iconfilleditLayout]}
              contentFit="cover"
              source={require("../assets/iconoutlinedislike.png")}
            />
          </View>
          <View style={styles.parentFlexBox}>
            <Image
              style={styles.iconfillclipboard}
              contentFit="cover"
              source={require("../assets/iconfillclipboard2.png")}
            />
            <Text style={styles.copy}>Copy</Text>
          </View>
        </View>
      </View>
      <Image
        style={[styles.chatbotChild, styles.chatbotLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-72.png")}
      />
      <Image
        style={[styles.chatbotItem, styles.chatbotLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-72.png")}
      />
      <Pressable
        style={[styles.back, styles.backLayout]}
        onPress={() => navigation.navigate("CharacterChoose")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/back2.png")}
        />
      </Pressable>
      <Text style={[styles.historicalChat, styles.time1Clr]}>
        Historical Chat
      </Text>
      <View style={[styles.comment, styles.commentLayout]}>
        <View style={[styles.commentChild, styles.commentLayout]} />
        <Text style={[styles.askMeAnything, styles.sendIconPosition]}>
          Ask me anything...
        </Text>
        <Image
          style={[styles.sendIcon, styles.sendIconPosition]}
          contentFit="cover"
          source={require("../assets/send-icon.png")}
        />
      </View>
      <View style={[styles.statusBar, styles.sendIconPosition]}>
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
  iconfilleditLayout: {
    height: 24,
    width: 24,
  },
  howTypo: {
    color: Color.typographyBody,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_sm,
  },
  chatPosition: {
    borderBottomLeftRadius: Border.br_9xs,
    borderBottomRightRadius: Border.br_xs,
    backgroundColor: Color.othersTextBG,
    padding: Padding.p_xs,
    borderTopRightRadius: Border.br_xs,
    borderTopLeftRadius: Border.br_xs,
    position: "absolute",
    overflow: "hidden",
  },
  frameParentSpaceBlock: {
    marginTop: 16,
    display: "none",
  },
  chatbotLayout: {
    height: 39,
    width: 39,
    left: 14,
    position: "absolute",
  },
  backLayout: {
    height: 35,
    width: 35,
  },
  time1Clr: {
    color: Color.othersTextBG,
    fontWeight: "600",
    letterSpacing: 0,
  },
  commentLayout: {
    height: 49,
    width: 320,
    left: "50%",
    position: "absolute",
  },
  sendIconPosition: {
    left: "50%",
    position: "absolute",
  },
  time1Position: {
    top: "50%",
    position: "absolute",
  },
  iconfilledit: {
    left: 192,
    top: 162,
    position: "absolute",
  },
  howAreYou: {
    textAlign: "right",
    lineHeight: 22,
    color: Color.typographyBody,
    flex: 1,
  },
  chatBubblesenddefault: {
    top: 273,
    left: 68,
    borderBottomRightRadius: Border.br_9xs,
    borderBottomLeftRadius: Border.br_xs,
    backgroundColor: Color.yELLOW,
    width: 310,
    padding: Padding.p_xs,
    borderTopRightRadius: Border.br_xs,
    borderTopLeftRadius: Border.br_xs,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
  },
  howAreYou1: {
    textAlign: "left",
    lineHeight: 22,
    color: Color.typographyBody,
    flex: 1,
  },
  chatBubblesenddefault1: {
    left: 65,
    width: 312,
    backgroundColor: Color.othersTextBG,
    alignItems: "center",
    flexDirection: "row",
    top: 162,
  },
  asAnAi: {
    lineHeight: 20,
    alignSelf: "stretch",
    textAlign: "left",
  },
  chatBubblerecevedreceivedChild: {
    backgroundColor: Color.othersBorders,
    width: 319,
    height: 2,
  },
  iconoutlinelike: {
    overflow: "hidden",
  },
  iconoutlinedislike: {
    marginLeft: 12,
    overflow: "hidden",
  },
  iconoutlinelikeParent: {
    display: "none",
    flexDirection: "row",
  },
  iconfillclipboard: {
    width: 20,
    height: 20,
  },
  copy: {
    color: Color.blackAndWhiteBlack,
    marginLeft: 5,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_sm,
    lineHeight: 22,
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameParent: {
    justifyContent: "space-between",
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  chatBubblerecevedreceived: {
    top: 394,
    left: 60,
    width: 314,
    height: 164,
    justifyContent: "center",
    backgroundColor: Color.othersTextBG,
  },
  chatbotChild: {
    top: 191,
  },
  chatbotItem: {
    top: 519,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  back: {
    left: 48,
    top: 63,
    position: "absolute",
  },
  historicalChat: {
    top: "6.64%",
    left: "39.04%",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "center",
    position: "absolute",
  },
  commentChild: {
    marginLeft: -160,
    bottom: 0,
    borderRadius: Border.br_xl,
    backgroundColor: Color.othersTextBG,
  },
  askMeAnything: {
    marginLeft: -138,
    bottom: 15,
    fontSize: FontSize.size_xs,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: "#a6a39d",
    letterSpacing: 0,
    left: "50%",
    textAlign: "left",
  },
  sendIcon: {
    marginLeft: 115,
    bottom: 7,
    height: 35,
    width: 35,
  },
  comment: {
    marginLeft: -159.5,
    bottom: 47,
  },
  time1: {
    marginTop: -9,
    left: 30,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.sFProText,
    color: Color.othersTextBG,
    fontWeight: "600",
    letterSpacing: 0,
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
  statusBar: {
    marginLeft: -207.5,
    top: 0,
    width: 415,
    height: 48,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
  },
  chatbot: {
    backgroundColor: Color.colorBlack,
    height: 1039,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Chatbot;
