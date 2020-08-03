import React from "react";
import { StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import GenericInput from "./GenericInput";

const SearchInput = ({ onChange = () => {}, initialValue = "" }) => {
  return (
    <View style={styles.viewStyle}>
      <AntDesign
        style={styles.iconStyles}
        name="search1"
        size={24}
        color="black"
      />
      <GenericInput
        style={styles.textInputStyle}
        initialValue={initialValue}
        onChange={onChange}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: "#d1cdcd",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
  },
  textInputStyle: {
    marginLeft: 8,
  },
  iconStyles: {},
});
