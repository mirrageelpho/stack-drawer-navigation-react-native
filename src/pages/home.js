import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Home() {
    return(
        <View style={css.container}>
            <Text>Home</Text>
        </View>
    )
}

const css = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})