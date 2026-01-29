import { createBrowserRouter } from "react-router";

import App from "@client/App.tsx";
import UserPage from "@client/pages/user/index.tsx";

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
