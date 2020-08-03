import React from "react";
import { StyleSheet, View, Text } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.viewStyle}>
      <Text>Home</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
});
