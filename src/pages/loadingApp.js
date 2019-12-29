import React, { useState, useEffect } from "react";
import {
  View,
  StatusBar,
  ActivityIndicator,
  StyleSheet,
  AsyncStorage,
  Text
} from "react-native";

export default function LoadingApp({ navigation }) {
  useEffect(() => {
    _isLogin();
  });

  _isLogin = async () => {
    try {
      const token = await AsyncStorage.getItem("TOKEN");
      navigation.navigate(token ? "App" : "Auth");
    } catch (error) {
      console.log(error);
    }
  };

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
