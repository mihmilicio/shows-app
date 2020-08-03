import React, { useState } from "react";
import { TextInput } from "react-native";

const GenericInput = ({ onChange = () => {}, initialValue = "", style }) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const inputOnChange = (e) => {
    setInputValue(e);
    onChange(e);
  };

  return (
    <TextInput value={inputValue} onChangeText={inputOnChange} style={style} />
  );
};

export default GenericInput;
