import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Products() {
    return(
        <View style={css.container}>
            <Text>Products</Text>
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