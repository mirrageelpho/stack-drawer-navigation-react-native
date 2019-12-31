import React, { useState, useEffect } from "react";
import {
  View,
  StatusBar,
  ActivityIndicator,
  StyleSheet,
  AsyncStorage,
  Text
} from "react-native";

import { IsLogged } from '../services/auth';

export default function LoadingScreen({ navigation }) {
  
  useEffect(() => {
    IsLogged(navigation);
  });

  return (
    <View style={css.container}>
      <ActivityIndicator color="#fff" />
      <StatusBar barStyle="default" />
      <Text style={css.text}>Logging... await</Text>
    </View>
  );
}
const css = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#159ddd"
  },
  text: {
    marginTop: 15,
    color: "#fff"
  }
});
