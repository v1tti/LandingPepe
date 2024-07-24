import { ROUTES } from "../constants/routes.constant";
import { createBrowserRouter } from "react-router-dom";
import { Gacha, Home } from "../ui/screens";

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Home />,
  },
  {
    path: ROUTES.GACHA,
    element: <Gacha />,
  },
]);
