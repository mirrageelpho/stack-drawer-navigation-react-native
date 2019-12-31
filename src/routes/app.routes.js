import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
//pages
import HomeRoutes from "./home.routes";
import Products from "./../pages/products";

//Monta uma pilha de navegação para tratar as telas de Autenticação
const AppStack = createDrawerNavigator(
  {
    Home: HomeRoutes,
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
