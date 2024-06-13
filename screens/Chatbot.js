import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import ChatBubbleSendDefault from "../components/ChatBubbleSendDefault";
import ChatBubbleRecevedReceived from "../components/ChatBubbleRecevedReceived";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Chatbot = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chatbot}>
      <Image
        style={styles.iconfilledit}
        contentFit="cover"
        source={require("../assets/iconfilledit.png")}
      />
      <ChatBubbleSendDefault
        howAreYou="Your artwork is truly mesmerizing, especially the Mona Lisa. What inspired you to create such a masterpiece?"
        chatBubbleSendDefaultPosition="absolute"
        chatBubbleSendDefaultBorderBottomRightRadius={4}
        chatBubbleSendDefaultBorderBottomLeftRadius={12}
        chatBubbleSendDefaultBackgroundColor="#e9e00c"
        chatBubbleSendDefaultWidth={310}
        chatBubbleSendDefaultTop={273}
        chatBubbleSendDefaultLeft={68}
        howAreYouFontSize={14}
        howAreYouFontFamily="Poppins-Regular"
        howAreYouTextAlign="right"
      />
      <ChatBubbleSendDefault
        howAreYou="Ah, greetings! I am delighted to converse with you, my friend. What intrigues you about my endeavors?"
        chatBubbleSendDefaultPosition="absolute"
        chatBubbleSendDefaultBorderBottomRightRadius={12}
        chatBubbleSendDefaultBorderBottomLeftRadius={4}
        chatBubbleSendDefaultBackgroundColor="#fff"
        chatBubbleSendDefaultWidth={312}
        chatBubbleSendDefaultTop={162}
        chatBubbleSendDefaultLeft={65}
        howAreYouFontSize={14}
        howAreYouFontFamily="Poppins-Regular"
        howAreYouTextAlign="left"
      />
      <ChatBubbleRecevedReceived
        asAnAILanguageModelIDontH="Ah, the Mona Lisa! She is a mysterious muse, indeed. My inspiration springs from the beauty of nature and the human form. I sought to capture her enigmatic smile and the essence of her soul."
        iconFillclipboard={require("../assets/iconfillclipboard.png")}
        showRectangleView={false}
        showFrameView={false}
        frameViewVisible={false}
        chatBubbleRecevedReceivedPosition="absolute"
        chatBubbleRecevedReceivedWidth={314}
        chatBubbleRecevedReceivedTop={394}
        chatBubbleRecevedReceivedLeft={60}
        chatBubbleRecevedReceivedHeight={164}
        asAnAIFontSize={14}
        asAnAILineHeight={20}
        asAnAIFontFamily="Poppins-Regular"
        copyFontSize={14}
        copyFontFamily="Poppins-Regular"
      />
      <Image
        style={[styles.chatbotChild, styles.chatbotLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-71.png")}
      />
      <Image
        style={[styles.chatbotItem, styles.chatbotLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-71.png")}
      />
      <Pressable
        style={[styles.back, styles.backLayout]}
        onPress={() => navigation.navigate("CharacterChoose")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/back.png")}
        />
      </Pressable>
      <Text style={styles.historicalChat}>Historical Chat</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
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
  iconfilledit: {
    top: 162,
    left: 192,
    width: 24,
    height: 24,
    position: "absolute",
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
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.othersTextBG,
    textAlign: "center",
    letterSpacing: 0,
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
    textAlign: "left",
    letterSpacing: 0,
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
  chatbot: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    height: 1039,
    overflow: "hidden",
    width: "100%",
  },
});

export default Chatbot;
