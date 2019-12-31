import { createAppContainer, createSwitchNavigator } from "react-navigation";

import AppRoutes from "./app.routes.js";
import SignRoutes from "./sign.routes.js";
import HomeRoutes from './home.routes';
import LoadingScreen from "./../pages/loadingScreen";

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppRoutes,
      Auth: SignRoutes,
      home: HomeRoutes
    },
    {
      initialRouteName: "Loading"
    }
  )
);
export default Routes;
