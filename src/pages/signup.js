import React from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function Signup({navigation}) {
    return (
        <View style={css.container}>
            <View style={css.card}>
                <View style={css.header}>
                    <Text>Sign Up</Text>
                </View>
                <View style={css.content}>
                    <Text>Name</Text>
                    <Text>Email</Text>
                    <Text>Password</Text>
                    <Text>Repeat Password</Text>
                </View>
                <View style={css.actions}>
                <Button
                        title='Create'
                        onPress={() => navigation.navigate('home')}
                    />
                </View>
            </View>
            <TouchableOpacity
                style={{paddingTop: 15}}
                onPress={() => navigation.navigate('Signin')}
            >
                <Text> Do you have account? Sign In </Text>
            </TouchableOpacity>
        </View>
    );
};

const css = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: '#acd'
    },
    card: {
        height: 220,
        width: 280,
        backgroundColor: '#fff',
        justifyContent: 'space-around',
        borderRadius: 5,
    },
    header: {
        alignItems: "center",
        borderBottomColor: '#ccc',
        padding: 15
    },
    content: {
        padding: 15,
    },
    actions: {
        flex:1,
        padding: 15,
        justifyContent: 'center',
        flexDirection: 'row',
    },


});