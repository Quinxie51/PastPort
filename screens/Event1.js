import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import ChatBubbleSendDefaultIcon from "../components/ChatBubbleSendDefaultIcon";
import StatusContainer from "../components/StatusContainer";
import { Color } from "../GlobalStyles";

const Event1 = () => {
  return (
    <View style={styles.event}>
      <Image
        style={styles.eventChild}
        contentFit="cover"
        source={require("../assets/rectangle-990.png")}
      />
      <Image
        style={styles.backIcon}
        contentFit="cover"
        source={require("../assets/back1.png")}
      />
      <ChatBubbleSendDefaultIcon />
      <StatusContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  eventChild: {
    top: 98,
    left: 0,
    width: 415,
    height: 632,
    position: "absolute",
  },
  backIcon: {
    top: 64,
    left: 22,
    width: 23,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  event: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    width: "100%",
    height: 730,
    overflow: "hidden",
  },
});

export default Event1;
