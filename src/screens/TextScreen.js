import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

const TextScreen = () => {
  const [password, setPassword] = useState("");
  return (
    <View>
      <Text>Password: </Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={password}
        onChangeText={newValue => setPassword(newValue)}
      />
      {/* <Text>My name is {name}</Text> */}
      {password.length < 5 ? <Text> Password must be more than 5 characters </Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: { margin: 15, borderColor: "black", borderWidth: 1 }
});

export default TextScreen;
