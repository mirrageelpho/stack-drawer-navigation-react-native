import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//pages
import Home from './pages/home';


//Monta uma pilha de navegação para tratar as telas de Autenticação
const AppStack = createStackNavigator({
    Home: Home
})

//Monta a navegação com o Drewer menu
const AppRoot = createAppContainer(AppStack)

export default AppRoot;