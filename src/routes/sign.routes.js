import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

//pages
import Signin from "./../pages/signin";
import Signup from "./../pages/signup";
import LostPassword from "./../pages/lostPassword";

//Monta uma pilha de navegação para tratar as telas de Autenticação
const SignStack = createStackNavigator(
  {
    Signin: Signin,
    Signup: Signup,
    LostPassword: LostPassword
  },
  {
    initialRouteName: "Signin",
    defaultNavigationOptions: {
      headerShown: false
    }
  }
);

const SignRoutes = createAppContainer(SignStack);

export default SignRoutes;
