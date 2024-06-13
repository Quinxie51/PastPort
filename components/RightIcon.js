import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const RightIcon = ({
  iconOutlineperson,
  editText = "Edit Profile",
  iconFillarrowIosRight,
  showLeftIcon = true,
  showRightIcon = true,
  rightIconPosition,
  rightIconWidth,
  editProfileFontFamily,
  editProfileColor,
  onListPress,
}) => {
  const rightIconStyle = useMemo(() => {
    return {
      ...getStyleValue("position", rightIconPosition),
      ...getStyleValue("width", rightIconWidth),
    };
  }, [rightIconPosition, rightIconWidth]);

  const editProfileStyle = useMemo(() => {
    return {
      ...getStyleValue("fontFamily", editProfileFontFamily),
      ...getStyleValue("color", editProfileColor),
    };
  }, [editProfileFontFamily, editProfileColor]);

  return (
    <View
      style={[styles.righticon, styles.righticonFlexBox, rightIconStyle]}
      onPress={onListPress}
    >
      <View style={styles.righticonFlexBox}>
        {showLeftIcon && (
          <Image
            style={styles.iconoutlineperson}
            contentFit="cover"
            source={iconOutlineperson}
          />
        )}
        <Text style={[styles.editProfile, editProfileStyle]}>{editText}</Text>
      </View>
      {showRightIcon && (
        <Image
          style={styles.iconoutlineperson}
          contentFit="cover"
          source={iconFillarrowIosRight}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  righticonFlexBox: {
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
  righticon: {
    borderStyle: "solid",
    borderColor: Color.othersBorders,
    borderBottomWidth: 1,
    width: 375,
    justifyContent: "space-between",
    padding: Padding.p_5xl,
  },
});

export default RightIcon;
