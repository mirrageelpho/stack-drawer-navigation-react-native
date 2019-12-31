import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import * as Auth from '../services/auth';

export default function Home({ navigation }) {

  useEffect(()=>{
    Auth.IsLogged(navigation);
  })

  return (
    <View style={css.container}>
      <Text>Home</Text>
      <Button title="Logoff" onPress={() => Auth.logOff(navigation)} />
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
