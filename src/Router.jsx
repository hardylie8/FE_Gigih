import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { VideoDetail } from "./pages/Video/VideoDetail";
import { Base } from "./pages/Base";
import { Home } from "./pages/Home";
export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Base />,
      children: [
        {
          path: "/detail/:id",
          element: <VideoDetail />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {},
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
