import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const HomeScreen = props => {
  return (
    <View>
      <Text style={styles.text1}>HomeScreen</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => {
          props.navigation.navigate("Components");
        }}
      />
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("List");
        }}
      >
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
