import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import ONOnDisabledOn from "./ONOnDisabledOn";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const RightSwitch = ({
  iconOutlineperson,
  editText = "Edit Profile",
  showLeftIcon = true,
  rightSwitchPosition,
  rightSwitchWidth,
  editProfileFontFamily,
  editProfileColor,
  rectangleViewBackgroundColor,
}) => {
  const rightSwitchStyle = useMemo(() => {
    return {
      ...getStyleValue("position", rightSwitchPosition),
      ...getStyleValue("width", rightSwitchWidth),
    };
  }, [rightSwitchPosition, rightSwitchWidth]);

  const editProfile1Style = useMemo(() => {
    return {
      ...getStyleValue("fontFamily", editProfileFontFamily),
      ...getStyleValue("color", editProfileColor),
    };
  }, [editProfileFontFamily, editProfileColor]);

  const rectangleViewStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", rectangleViewBackgroundColor),
    };
  }, [rectangleViewBackgroundColor]);

  return (
    <View
      style={[styles.rightswitch, styles.rightswitchFlexBox, rightSwitchStyle]}
    >
      <View style={styles.rightswitchFlexBox}>
        {showLeftIcon && (
          <Image
            style={styles.iconoutlineperson}
            contentFit="cover"
            source={iconOutlineperson}
          />
        )}
        <Text style={[styles.editProfile, editProfile1Style]}>{editText}</Text>
      </View>
      <ONOnDisabledOn rectangleViewBackgroundColor="#100f0d" />
    </View>
  );
};

const styles = StyleSheet.create({
  rightswitchFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  iconoutlineperson: {
    width: 24,
    height: 24,
  },
  editProfile: {
    fontSize: FontSize.appBody_size,
    lineHeight: 22,
    fontFamily: FontFamily.appBody,
    color: Color.typographyBody,
    textAlign: "left",
    width: 240,
    marginLeft: 12,
  },
  rightswitch: {
    borderStyle: "solid",
    borderColor: Color.othersBorders,
    borderBottomWidth: 1,
    width: 375,
    justifyContent: "space-between",
    padding: Padding.p_5xl,
  },
});

export default RightSwitch;
