import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//pages
import Signin from './pages/signin';
import Signup from './pages/signup';
import LostPassword from './pages/lostPassword';
import Root from './Root';

//Monta uma pilha de navegação para tratar as telas de Autenticação
const AuthStack = createStackNavigator(
    {
        Signin: Signin,
        Signup: {
            screen: Signup
        },
        LostPassword: LostPassword,
        Root: Root
    },
    {
        initialRouteName: 'Signin',
    }
)

const AuthRoot = createAppContainer(AuthStack)

export default AuthRoot;