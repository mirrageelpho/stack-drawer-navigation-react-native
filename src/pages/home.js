import React from "react";
import { View, Text, StyleSheet, AsyncStorage, Button } from "react-native";

export default function Home({ navigation }) {
  _logoff = async () => {
    try {
      await AsyncStorage.removeItem("TOKEN");
      navigation.navigate("LoadingApp");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={css.container}>
      <Text>Home</Text>
      <Button title="Logoff" onPress={() => _logoff()} />
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
