import React, { useState, useContext } from "react";
import { StyleSheet, View, Button } from "react-native";
import Input from "../components/form/Input";
import { AppContext } from "../context/AppContext";

const NewShowScreen = ({ navigation }) => {
  const { dispatch } = useContext(AppContext);

  const [name, setName] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [country, setCountry] = useState("");
  const [network, setNetwork] = useState("");

  const submitForm = () => {
    const action = {
      type: "addItem",
      payload: {
        id: 4228,
        name,
        network,
        country,
        image_thumbnail_path: thumbnail,
      },
    };
    dispatch(action);
  };

  return (
    <View style={styles.viewStyle}>
      <Input style={styles.inputStyle} label="Nome" onChange={setName} />
      <Input label="País" onChange={setCountry} />
      <Input label="Rede" onChange={setNetwork} />
      <Input label="Thumbnail" onChange={setThumbnail} />

      <Button title="Salvar série" onPress={submitForm} />
    </View>
  );
};

export default NewShowScreen;

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    padding: 16,
    marginTop: 24,
  },
});
