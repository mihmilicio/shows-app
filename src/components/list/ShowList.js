import React, { useContext } from "react";
import { StyleSheet, FlatList, TouchableOpacity, Text } from "react-native";
import { useShows } from "../../hooks/useShows";
import { AppContext } from "../../context/AppContext";

const ListItem = ({ item }) => {
  const { dispatch } = useContext(AppContext);

  return (
    <TouchableOpacity
      style={styles.buttonStyle}
      onPress={() =>
        dispatch({
          type: "setSelectedItem",
          payload: item.id,
        })
      }
    >
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );
};

const ShowList = () => {
  const { shows } = useShows();

  return (
    <FlatList
      data={shows.sort((a, b) => a.name.localeCompare(b.name))}
      keyExtractor={(item) => item.id.toString()}
      renderItem={(props) => <ListItem {...props} />}
    />
  );
};

export default ShowList;

const styles = StyleSheet.create({
  buttonStyle: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
});
