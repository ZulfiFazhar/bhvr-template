import { createBrowserRouter } from "react-router";

import App from "../App.tsx";
import UserPage from "../pages/user/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/user",
    element: <UserPage />,
  },
]);

export default router;
