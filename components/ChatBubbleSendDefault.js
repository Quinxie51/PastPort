import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ChatBubbleSendDefault = ({
  howAreYou,
  chatBubbleSendDefaultPosition,
  chatBubbleSendDefaultBorderBottomRightRadius,
  chatBubbleSendDefaultBorderBottomLeftRadius,
  chatBubbleSendDefaultBackgroundColor,
  chatBubbleSendDefaultWidth,
  chatBubbleSendDefaultTop,
  chatBubbleSendDefaultLeft,
  howAreYouFontSize,
  howAreYouFontFamily,
  howAreYouTextAlign,
}) => {
  const chatBubbleSendDefaultStyle = useMemo(() => {
    return {
      ...getStyleValue("position", chatBubbleSendDefaultPosition),
      ...getStyleValue(
        "borderBottomRightRadius",
        chatBubbleSendDefaultBorderBottomRightRadius
      ),
      ...getStyleValue(
        "borderBottomLeftRadius",
        chatBubbleSendDefaultBorderBottomLeftRadius
      ),
      ...getStyleValue("backgroundColor", chatBubbleSendDefaultBackgroundColor),
      ...getStyleValue("width", chatBubbleSendDefaultWidth),
      ...getStyleValue("top", chatBubbleSendDefaultTop),
      ...getStyleValue("left", chatBubbleSendDefaultLeft),
    };
  }, [
    chatBubbleSendDefaultPosition,
    chatBubbleSendDefaultBorderBottomRightRadius,
    chatBubbleSendDefaultBorderBottomLeftRadius,
    chatBubbleSendDefaultBackgroundColor,
    chatBubbleSendDefaultWidth,
    chatBubbleSendDefaultTop,
    chatBubbleSendDefaultLeft,
  ]);

  const howAreYouStyle = useMemo(() => {
    return {
      ...getStyleValue("fontSize", howAreYouFontSize),
      ...getStyleValue("fontFamily", howAreYouFontFamily),
      ...getStyleValue("textAlign", howAreYouTextAlign),
    };
  }, [howAreYouFontSize, howAreYouFontFamily, howAreYouTextAlign]);

  return (
    <View style={[styles.chatBubblesenddefault, chatBubbleSendDefaultStyle]}>
      <Text style={[styles.howAreYou, howAreYouStyle]}>{howAreYou}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  howAreYou: {
    flex: 1,
    fontSize: FontSize.appBody_size,
    lineHeight: 22,
    fontFamily: FontFamily.appBody,
    color: Color.typographyBody,
    textAlign: "left",
  },
  chatBubblesenddefault: {
    borderTopLeftRadius: Border.br_xs,
    borderTopRightRadius: Border.br_xs,
    borderBottomRightRadius: Border.br_xs,
    borderBottomLeftRadius: Border.br_9xs,
    backgroundColor: Color.colorFloralwhite,
    width: 130,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    padding: Padding.p_xs,
  },
});

export default ChatBubbleSendDefault;
