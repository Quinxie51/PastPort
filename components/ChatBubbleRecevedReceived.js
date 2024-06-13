import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ChatBubbleRecevedReceived = ({
  asAnAILanguageModelIDontH,
  iconFillclipboard,
  showRectangleView,
  showFrameView,
  frameViewVisible,
  chatBubbleRecevedReceivedPosition,
  chatBubbleRecevedReceivedWidth,
  chatBubbleRecevedReceivedTop,
  chatBubbleRecevedReceivedLeft,
  chatBubbleRecevedReceivedHeight,
  asAnAIFontSize,
  asAnAILineHeight,
  asAnAIFontFamily,
  copyFontSize,
  copyFontFamily,
}) => {
  const chatBubbleRecevedReceivedStyle = useMemo(() => {
    return {
      ...getStyleValue("position", chatBubbleRecevedReceivedPosition),
      ...getStyleValue("width", chatBubbleRecevedReceivedWidth),
      ...getStyleValue("top", chatBubbleRecevedReceivedTop),
      ...getStyleValue("left", chatBubbleRecevedReceivedLeft),
      ...getStyleValue("height", chatBubbleRecevedReceivedHeight),
    };
  }, [
    chatBubbleRecevedReceivedPosition,
    chatBubbleRecevedReceivedWidth,
    chatBubbleRecevedReceivedTop,
    chatBubbleRecevedReceivedLeft,
    chatBubbleRecevedReceivedHeight,
  ]);

  const asAnAIStyle = useMemo(() => {
    return {
      ...getStyleValue("fontSize", asAnAIFontSize),
      ...getStyleValue("lineHeight", asAnAILineHeight),
      ...getStyleValue("fontFamily", asAnAIFontFamily),
    };
  }, [asAnAIFontSize, asAnAILineHeight, asAnAIFontFamily]);

  const copyStyle = useMemo(() => {
    return {
      ...getStyleValue("fontSize", copyFontSize),
      ...getStyleValue("fontFamily", copyFontFamily),
    };
  }, [copyFontSize, copyFontFamily]);

  return (
    <View
      style={[styles.chatBubblerecevedreceived, chatBubbleRecevedReceivedStyle]}
    >
      <Text style={[styles.asAnAi, styles.copyTypo, asAnAIStyle]}>
        {asAnAILanguageModelIDontH}
      </Text>
      {showRectangleView && (
        <View style={styles.chatBubblerecevedreceivedChild} />
      )}
      {showFrameView && (
        <View style={[styles.frameParent, styles.parentFlexBox]}>
          {frameViewVisible && (
            <View style={styles.iconoutlinelikeParent}>
              <Image
                style={styles.iconoutlinelikeLayout}
                contentFit="cover"
                source={require("../assets/iconoutlinelike.png")}
              />
              <Image
                style={[
                  styles.iconoutlinedislike,
                  styles.iconoutlinelikeLayout,
                ]}
                contentFit="cover"
                source={require("../assets/iconoutlinedislike.png")}
              />
            </View>
          )}
          <View style={styles.parentFlexBox}>
            <Image
              style={styles.iconfillclipboard}
              contentFit="cover"
              source={iconFillclipboard}
            />
            <Text style={[styles.copy, styles.copyTypo, copyStyle]}>Copy</Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  copyTypo: {
    textAlign: "left",
    fontFamily: FontFamily.appBody,
    lineHeight: 22,
    fontSize: FontSize.appBody_size,
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  iconoutlinelikeLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  asAnAi: {
    color: Color.typographyBody,
    alignSelf: "stretch",
  },
  chatBubblerecevedreceivedChild: {
    backgroundColor: Color.othersBorders,
    width: 319,
    height: 2,
    marginTop: 16,
  },
  iconoutlinedislike: {
    marginLeft: 12,
  },
  iconoutlinelikeParent: {
    flexDirection: "row",
  },
  iconfillclipboard: {
    width: 20,
    height: 20,
  },
  copy: {
    color: Color.blackAndWhiteBlack,
    marginLeft: 5,
  },
  frameParent: {
    justifyContent: "space-between",
    marginTop: 16,
    alignSelf: "stretch",
  },
  chatBubblerecevedreceived: {
    borderTopLeftRadius: Border.br_xs,
    borderTopRightRadius: Border.br_xs,
    borderBottomRightRadius: Border.br_xs,
    borderBottomLeftRadius: Border.br_9xs,
    backgroundColor: Color.othersTextBG,
    width: 335,
    justifyContent: "center",
    padding: Padding.p_xs,
    overflow: "hidden",
  },
});

export default ChatBubbleRecevedReceived;
