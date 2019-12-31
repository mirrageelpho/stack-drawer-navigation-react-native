import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import CoursesList from "../components/coursesList";

import * as Auth from "../services/auth";

export default function Home({ navigation }) {
  useEffect(() => {
    Auth.IsLogged(navigation);
  });

  return (
    <View style={css.container}>
      <Button title="Logoff" onPress={() => Auth.logOff(navigation)} />
      <Text>Home</Text>
      <CoursesList navigation={navigation} />
    </View>
  );
}

const css = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: "center",
    justifyContent: "center"
  }
});
