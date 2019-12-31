import { AsyncStorage } from 'react-native';

export async function IsLogged (navigation) {
    try{
        const token = await AsyncStorage.getItem('TOKEN')
        navigation.navigate(token ? 'App' : 'Auth');
    } catch (error) {
        console.log(error)
    }
}

export async function logOff (navigation) {
    try {
        await AsyncStorage.removeItem("TOKEN");
        navigation.navigate("Auth");
    } catch (error) {
        console.log(error);
    }
}