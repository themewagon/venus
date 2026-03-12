import App from "App";
import Dashboard from "pages/Dashboard";

import { rootPaths } from "./paths";
import { Outlet, createBrowserRouter } from "react-router";

const router = createBrowserRouter(
  [
    {
      element: <App />,
      children: [
        {
          path: "/",
          element: <Outlet />,
          children: [
            {
              index: true,
              element: <Dashboard />,
            },
          ],
        },
        {
          path: rootPaths.authRoot,
          element: <Outlet />,
        },
      ],
    },
  ],
  {
    basename: "/venus",
  },
);

export default router;
