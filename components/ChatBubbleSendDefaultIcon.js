import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";
import { Border } from "../GlobalStyles";

const ChatBubbleSendDefaultIcon = () => {
  return (
    <Image
      style={styles.chatBubblesenddefaultIcon}
      contentFit="cover"
      source={require("../assets/chat-bubblesenddefault.png")}
    />
  );
};

const styles = StyleSheet.create({
  chatBubblesenddefaultIcon: {
    position: "absolute",
    top: 151,
    left: 37,
    borderTopLeftRadius: Border.br_xs,
    borderTopRightRadius: Border.br_xs,
    borderBottomRightRadius: Border.br_xs,
    borderBottomLeftRadius: Border.br_9xs,
    width: 46,
    height: 279,
    overflow: "hidden",
  },
});

export default ChatBubbleSendDefaultIcon;
