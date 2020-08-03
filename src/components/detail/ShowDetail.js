import React, { useContext } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { AppContext } from "../../context/AppContext";

const ShowDetail = () => {
  const { state } = useContext(AppContext);
  const details = state.showList.find((item) => item.id == state.selectedItem);

  return (
    <View style={styles.parentViewStyle}>
      {!!details && (
        <>
          <Image
            style={styles.imgStyle}
            source={{ uri: details.image_thumbnail_path }}
            resizeMode="contain"
          />
          <View>
            <Text>
              <Text style={styles.keyText}>Nome:</Text> {details.name}{" "}
            </Text>
            <Text>
              <Text style={styles.keyText}>País:</Text> {details.country}{" "}
            </Text>
            <Text>
              <Text style={styles.keyText}>Rede:</Text> {details.network}{" "}
            </Text>
          </View>
        </>
      )}
    </View>
  );
};

export default ShowDetail;

const styles = StyleSheet.create({
  parentViewStyle: {
    padding: 16,
    flexDirection: "row",
  },
  imgStyle: {
    width: 100,
    height: 134,
    marginRight: 16,
  },
  keyText: {
    textTransform: "uppercase",
    letterSpacing: 1,
    fontWeight: "700",
  },
});
