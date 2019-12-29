import { createAppContainer, createSwitchNavigator } from "react-navigation";

import AppRoutes from "./app.routes.js";
import SignRoutes from "./sign.routes.js";

import LoadingApp from "./../pages/loadingApp";

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      LoadingApp: LoadingApp,
      App: AppRoutes,
      Auth: SignRoutes
    },
    {
      initialRouteName: "LoadingApp"
    }
  )
);
export default Routes;
