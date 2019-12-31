import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function DetailPage({ navigation }) {
  const course = navigation.getParam("course", "nenhum curso");
  return (
    <View style={css.container}>
      <Text>{course.title}</Text>
    </View>
  );
}

const css = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
