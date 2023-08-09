import { Outlet } from "react-router-dom";
import { AppNavbar } from "../components/navbar/Navbar";
export const Base = () => {
  return (
    <main>
      <AppNavbar />
      <Outlet />
    </main>
  );
};
