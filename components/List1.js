import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const List1 = ({ iconOutlineperson, editProfile }) => {
  return (
    <View style={[styles.list, styles.listFlexBox]}>
      <View style={styles.listFlexBox}>
        <Image
          style={styles.iconoutlineperson}
          contentFit="cover"
          source={iconOutlineperson}
        />
        <Text style={styles.editProfile}>{editProfile}</Text>
      </View>
      <Image
        style={styles.iconoutlineperson}
        contentFit="cover"
        source={require("../assets/iconfillarrowiosright2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listFlexBox: {
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
    fontFamily: FontFamily.poppinsRegular,
    color: Color.othersTextBG,
    textAlign: "left",
    width: 240,
    marginLeft: 12,
  },
  list: {
    borderStyle: "solid",
    borderColor: Color.othersBorders,
    borderBottomWidth: 1,
    width: 375,
    justifyContent: "space-between",
    padding: Padding.p_5xl,
  },
});

export default List1;
