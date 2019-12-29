import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DetailPage() {
    return(
        <View style={css.container}>
            <Text>Detail Page</Text>
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