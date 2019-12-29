import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage
} from "react-native";

import { HandleAuth } from "./../services/handleSign";

export default function Signin({ navigation }) {
  _login = async () => {
    console.log("Logando");
    try {
      await AsyncStorage.setItem("TOKEN", "123123123123");
      navigation.navigate("LoadingApp");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={css.container}>
      <View style={css.card}>
        <View style={css.header}>
          <Text>Sign In</Text>
        </View>
        <View style={css.content}>
          <Text>Email</Text>
          <Text>Password</Text>
        </View>
        <View style={css.actions}>
          <Button title="login" onPress={() => _login()} />
        </View>
      </View>
      <TouchableOpacity
        style={{ paddingTop: 15 }}
        onPress={() => navigation.navigate("Signup")}
      >
        <Text> Create account Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ paddingTop: 15 }}
        onPress={() => navigation.navigate("LostPassword")}
      >
        <Text> Lost my password</Text>
      </TouchableOpacity>
    </View>
  );
}

const css = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#dad"
  },
  card: {
    height: 180,
    width: 280,
    backgroundColor: "#fff",
    justifyContent: "space-around",
    borderRadius: 5
  },
  header: {
    alignItems: "center",
    borderBottomColor: "#ccc",
    padding: 15
  },
  content: {
    padding: 15
  },
  actions: {
    padding: 15,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center"
  }
});
