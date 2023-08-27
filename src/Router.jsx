import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { VideoDetail } from "./pages/Video/VideoDetail";
import { Base } from "./pages/Base";
import { Home } from "./pages/Home";
import { LoginPage } from "./pages/Auth/Login";
import { AuthBase } from "./pages/Auth/Base";
import { RegisterPage } from "./pages/Auth/Register";
export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/auth",
      element: <AuthBase />,
      children: [
        {
          path: "/auth/login",
          element: <LoginPage />,
        },
        {
          path: "/auth/register",
          element: <RegisterPage />,
        },
      ],
    },
    {
      path: "/",
      element: <Base />,
      children: [
        {
          path: "/detail/:id",
          element: <VideoDetail />,
        },
        {
          path: "/",
          element: <Home />,
        },
        {},
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
