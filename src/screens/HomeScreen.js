import React from "react";
import { Text, StyleSheet, View } from "react-native";

const HomeScreen = () => {
  const name = "Simon";

  return (
    <View>
      <Text style={styles.text1}>HomeScreen</Text>
      <Text style={styles.text2}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text1: {
    fontSize: 45
  },
  text2: {
    fontSize: 20
  }
});

export default HomeScreen;
