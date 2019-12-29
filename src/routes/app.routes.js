import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
//pages
import Home from "./../pages/home";
import Products from "./../pages/products";

//Monta uma pilha de navegação para tratar as telas de Autenticação
const AppStack = createDrawerNavigator(
  {
    Home: Home,
    Products: Products
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    }
  }
);

//Monta a navegação com o Drawer menu
const AppRoutes = createAppContainer(AppStack);

export default AppRoutes;
