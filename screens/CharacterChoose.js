import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ProfileContainer21 from "../components/ProfileContainer2";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const CharacterChoose = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.characterChoose}>
      <Image
        style={styles.shoes1Icon}
        contentFit="cover"
        source={require("../assets/shoes-1.png")}
      />
      <View style={[styles.backParent, styles.backParentFlexBox]}>
        <Image
          style={styles.backIconLayout}
          contentFit="cover"
          source={require("../assets/back1.png")}
        />
        <Pressable
          style={styles.category}
          onPress={() => navigation.navigate("Chatbot")}
        >
          <View style={[styles.selectWrapper, styles.backParentFlexBox]}>
            <Text
              style={[styles.select, styles.selectFlexBox]}
            >{`Select `}</Text>
          </View>
        </Pressable>
        <Image
          style={[styles.backIcon1, styles.backIconLayout]}
          contentFit="cover"
          source={require("../assets/back2.png")}
        />
      </View>
      <Image
        style={styles.characterChooseChild}
        contentFit="cover"
        source={require("../assets/rectangle-988.png")}
      />
      <Image
        style={styles.characterChooseItem}
        contentFit="cover"
        source={require("../assets/rectangle-989.png")}
      />
      <Text style={[styles.napoleonBonaparte, styles.selectFlexBox]}>
        Napoleon Bonaparte
      </Text>
      <Image
        style={styles.backIcon2}
        contentFit="cover"
        source={require("../assets/back.png")}
      />
      <Text style={[styles.historicalChat, styles.selectFlexBox]}>
        Historical Chat
      </Text>
      <Text style={[styles.whoDoYou, styles.selectFlexBox]}>
        Who do you want to talk to?
      </Text>
      <ProfileContainer21 />
    </View>
  );
};

const styles = StyleSheet.create({
  backParentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  selectFlexBox: {
    textAlign: "center",
    letterSpacing: 0,
  },
  backIconLayout: {
    height: 24,
    width: 23,
    overflow: "hidden",
  },
  shoes1Icon: {
    marginTop: -226,
    marginLeft: -126.5,
    top: "50%",
    left: "50%",
    width: 278,
    height: 259,
    position: "absolute",
  },
  select: {
    display: "flex",
    width: 55,
    height: 8,
    color: Color.othersTextBG,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: 0,
    fontSize: FontSize.size_xs,
    justifyContent: "center",
    alignItems: "center",
  },
  selectWrapper: {
    borderRadius: 14,
    borderStyle: "solid",
    borderColor: Color.othersTextBG,
    borderWidth: 1,
    height: 28,
    paddingHorizontal: 2,
    paddingVertical: Padding.p_3xs,
    width: 94,
  },
  category: {
    marginLeft: 44,
    width: 94,
  },
  backIcon1: {
    marginLeft: 44,
  },
  backParent: {
    top: 553,
    left: 89,
    position: "absolute",
  },
  characterChooseChild: {
    top: 306,
    left: 5,
    width: 95,
    height: 159,
    position: "absolute",
  },
  characterChooseItem: {
    top: 318,
    left: 310,
    width: 105,
    height: 139,
    position: "absolute",
  },
  napoleonBonaparte: {
    top: 180,
    left: 108,
    fontSize: 18,
    width: 189,
    color: Color.othersTextBG,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  backIcon2: {
    top: 71,
    left: 30,
    width: 35,
    height: 35,
    position: "absolute",
  },
  historicalChat: {
    top: "8.44%",
    left: "34.7%",
    fontSize: FontSize.size_base,
    color: Color.othersTextBG,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  whoDoYou: {
    top: "11.51%",
    left: "29.16%",
    fontStyle: "italic",
    fontFamily: FontFamily.poppinsItalic,
    color: Color.yELLOW,
    textAlign: "center",
    letterSpacing: 0,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  characterChoose: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    width: "100%",
    height: 912,
    overflow: "hidden",
  },
});

export default CharacterChoose;
