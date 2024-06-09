import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

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
        source={require("../assets/back.png")}
      />
      <Image
        style={styles.chatBubblesenddefaultIcon}
        contentFit="cover"
        source={require("../assets/chat-bubblesenddefault.png")}
      />
      <View style={styles.statusBar}>
        <View style={[styles.symbol, styles.timePosition]}>
          <Image
            style={[styles.batteryIcon, styles.timePosition]}
            contentFit="cover"
            source={require("../assets/battery.png")}
          />
          <Image
            style={styles.wiFiIcon}
            contentFit="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={styles.cellularIcon}
            contentFit="cover"
            source={require("../assets/cellular.png")}
          />
        </View>
        <View style={[styles.time, styles.timePosition]}>
          <Text style={[styles.time1, styles.timePosition]}>9:41</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timePosition: {
    top: "50%",
    position: "absolute",
  },
  eventChild: {
    top: 98,
    width: 415,
    height: 632,
    left: 0,
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
  chatBubblesenddefaultIcon: {
    top: 151,
    left: 37,
    borderTopLeftRadius: Border.br_xs,
    borderTopRightRadius: Border.br_xs,
    borderBottomRightRadius: Border.br_xs,
    borderBottomLeftRadius: Border.br_9xs,
    width: 46,
    height: 279,
    position: "absolute",
    overflow: "hidden",
  },
  batteryIcon: {
    marginTop: -5.5,
    right: 0,
    width: 25,
    height: 12,
  },
  wiFiIcon: {
    width: 17,
    height: 14,
  },
  cellularIcon: {
    width: 19,
    height: 13,
  },
  symbol: {
    marginTop: -5.7,
    right: 15,
    width: 75,
    height: 14,
  },
  time1: {
    marginTop: -9,
    left: 30,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    color: Color.othersTextBG,
    textAlign: "left",
  },
  time: {
    marginTop: -9.5,
    width: 180,
    height: 22,
    left: 0,
  },
  statusBar: {
    top: 0,
    right: 5,
    height: 55,
    left: 0,
    position: "absolute",
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
