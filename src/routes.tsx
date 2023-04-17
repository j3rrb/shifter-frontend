import { RouteObject } from "react-router-dom";
import { ERoutes } from "./enums/routes.enum";
import Login from "./pages/login";
import Main from "./pages/main";
import SignUp from "./pages/sign-up";

export const routes: RouteObject[] = [
  {
    path: ERoutes.INDEX,
    element: <Main />,
    index: true,
  },
  {
    path: ERoutes.LOGIN,
    element: <Login />,
  },
  {
    path: ERoutes.SIGN_UP,
    element: <SignUp />,
  },
];
