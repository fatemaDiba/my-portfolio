import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/home/Home";
import Root from "../layout/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <h4>Error</h4>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
