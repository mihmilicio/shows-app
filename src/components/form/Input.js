import React from "react";
import { StyleSheet, Text, View } from "react-native";
import GenericInput from "./GenericInput";

const Input = ({ label = "", onChange = () => {}, initialValue = "" }) => {
  return (
    <View style={styles.viewStyle}>
      <Text>{label}: </Text>
      <GenericInput
        style={styles.textInputStyle}
        initialValue={initialValue}
        onChange={onChange}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  textInputStyle: {
    backgroundColor: "#d1cdcd",
    borderRadius: 8,
  },
  viewStyle: {
    marginBottom: 16,
  },
});
