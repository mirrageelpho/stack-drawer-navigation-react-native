import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
//pages
import Home from './pages/home';


//Monta uma pilha de navegação para tratar as telas de Autenticação
const AppStack = createDrawerNavigator(
    {
        Home: Home
    },
    {
        initialRouteName: 'Home',
        contentOptions: {
            activeTintColor: '#e91e63',
        }
    }
)

//Monta a navegação com o Drewer menu
const AppRoot = createAppContainer(AppStack)

export default AppRoot;