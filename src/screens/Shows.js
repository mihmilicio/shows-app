import React from "react";
import { StyleSheet, View, Text } from "react-native";

import ShowList from "../components/list/ShowList";
import ShowDetail from "../components/detail/ShowDetail";

const ShowsScreen = ({ navigation }) => {
  return (
    <View style={styles.parentViewStyle}>
      <View style={styles.listViewStyle}>
        <ShowList />
      </View>
      <View style={styles.detailViewStyle}>
        <ShowDetail />
      </View>
    </View>
  );
};

export default ShowsScreen;

const styles = StyleSheet.create({
  parentViewStyle: {
    flex: 1,
    marginTop: 24,
  },
  listViewStyle: {
    flex: 2,
  },
  detailViewStyle: {
    flex: 1,
  },
});
