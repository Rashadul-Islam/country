import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Pressable,
  Keyboard,
} from "react-native";

const TextForm = ({ setSearchText }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (input?.length !== 0 && error) {
      setError(false);
    }
  }, [input]);

  const handleSearchInput = (name) => {
    setSearchText(name);
    setInput("");
    Keyboard.dismiss();
  };

  return (
    <View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Enter Country Name"
          onChangeText={setInput}
          value={input}
        />
        <Pressable
          style={styles.button}
          onPress={() => {
            input?.length === 0 ? setError(true) : handleSearchInput(input);
          }}
        >
          <Text style={styles.text}>Search</Text>
        </Pressable>
      </View>
      {error && (
        <Text style={styles.error}>
          Please Input country name to search...!
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#7a42f4",
    height: 40,
    width: 200,
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
    paddingLeft: 10,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#7a42f4",
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
  },
  text: {
    color: "white",
  },
  error: {
    color: "red",
    marginTop: 10,
    textAlign: "center",
  },
});

export default TextForm;
