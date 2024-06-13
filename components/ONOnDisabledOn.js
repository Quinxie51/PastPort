import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ONOnDisabledOn = ({ rectangleViewBackgroundColor }) => {
  const rectangleViewStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", rectangleViewBackgroundColor),
    };
  }, [rectangleViewBackgroundColor]);

  return (
    <View style={styles.ononDisabledon}>
      <View style={[styles.ononDisabledonChild, rectangleViewStyle]} />
      <Image
        style={styles.ononDisabledonItem}
        contentFit="cover"
        source={require("../assets/ellipse-72.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ononDisabledonChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_base,
    backgroundColor: Color.blackAndWhiteBlack,
    position: "absolute",
  },
  ononDisabledonItem: {
    height: "75%",
    width: "47.37%",
    top: "12.5%",
    right: "7.89%",
    bottom: "12.5%",
    left: "44.74%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  ononDisabledon: {
    width: 38,
    height: 24,
  },
});

export default ONOnDisabledOn;
