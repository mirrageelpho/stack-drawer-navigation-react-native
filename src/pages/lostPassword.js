import React from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function LostPassword({navigation}) {
    return (
        <View style={css.container}>
            <View style={css.card}>
                <View style={css.header}>
                    <Text>Lost Password</Text>
                </View>
                <View style={css.content}>
                    <Text>Email</Text>
                </View>
                <View style={css.actions}>
                    <Button title='Enviar' />
                </View>
            </View>
            <TouchableOpacity
                style={{paddingTop: 15}}
                onPress={() => navigation.navigate('Signin')}
            >
                <Text> I Remember My Password. Sign In</Text>
            </TouchableOpacity>
        </View>
    );
};

const css = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: '#aab'
    },
    card: {
        height: 180,
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
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },


});