import App from "./App";
import Cart from "./components/cart/Cart";
import Home from "./components/home/Home";
import Shop from "./components/shop/Shop";
import ErrorPage from "./ErrorPage";

export const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
];
