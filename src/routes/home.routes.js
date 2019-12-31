import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

//pages
import DetailPage from '../pages/detailPage';
import Home from '../pages/home';
//Monta uma pilha de navegação para tratar as telas de Autenticação
const homeStack = createStackNavigator(
    {
        Home: Home,
        DetailPage: DetailPage,
    }
);

const HomeRoutes = createAppContainer(homeStack);

export default HomeRoutes;
