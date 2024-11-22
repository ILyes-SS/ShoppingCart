import App from "./App";
import Profile from "./Profile";
import Spinach from "./Spinach";
import Popeye from "./Popeye";
import ErrorPage from "./ErrorPage";
import DefaultProfile from "./DefaultProfile";
const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "profile",
    element: <Profile />,
    children: [
      {
        index: true,
        element: <DefaultProfile />,
      },
      {
        path: "popeye",
        element: <Popeye />,
      },
      {
        path: "spinach/:name",
        element: <Spinach />,
      },
      {
        path: "spinach/",
        element: <Spinach />,
      },
    ],
  },
];
export default routes;
