import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text1}>HomeScreen</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => {
          navigation.navigate("Components");
        }}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("List");
        }}
      >
        <Text>Go to List Demo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Image");
        }}
      >
        <Text>Go to Image Demo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Counter");
        }}
      >
        <Text>Go to Counter Demo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Color");
        }}
      >
        <Text>Go to Color Demo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Square");
        }}
      >
        <Text>Go to Square Demo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Text");
        }}
      >
        <Text>Go to Text Demo</Text>
      </TouchableOpacity>

<TouchableOpacity
  onPress={() => {
    navigation.navigate("Box");
  }}
>
  <Text>Go to Box Demo</Text>
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
