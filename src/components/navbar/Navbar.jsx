import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import { ThemeToogler } from "../Input/themeToogler/ThemeToogler";
import { BrandIcon } from "./BrandIcon";
import { NavLink } from "react-router-dom";
import { userContext } from "../../contexts/userContext";
import useLocalStorage from "../../hooks/useLocalStorage";

export function AppNavbar() {
  const { user, setUser } = userContext();
  const TOKEN_KEY = "authToken";
  const [, , clearToken] = useLocalStorage(TOKEN_KEY, "");
  const logout = () => {
    clearToken(TOKEN_KEY);
    window.location.reload(false);
  };
  return (
    <Navbar maxWidth="full" isBordered>
      <NavbarBrand>
        <NavLink
          to="/home"
          className={({ isActive, isPending }) =>
            isPending ? "flex " : isActive ? "flex text-primary-600" : "flex "
          }
        >
          <BrandIcon />
          <p className="font-bold ml-3 text-inherit">GiGIH Play</p>
        </NavLink>
      </NavbarBrand>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <ThemeToogler />
        </NavbarItem>
        {!user ? (
          <>
            <NavbarItem className="hidden lg:flex">
              <NavLink to="/auth/login">
                <Button color="primary" className="font-bold" variant="light">
                  Login
                </Button>
              </NavLink>
            </NavbarItem>
            <NavbarItem>
              <NavLink to="/auth/register">
                <Button
                  color="primary"
                  href="#"
                  className="font-bold"
                  variant="flat"
                >
                  Sign Up
                </Button>
              </NavLink>
            </NavbarItem>
          </>
        ) : (
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <div className="flex items-center justify-center">
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform"
                  color="secondary"
                  name="ava-icon"
                  size="sm"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
                <label className="ml-3">{user.username}</label>
              </div>
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">zoey@example.com</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">
                Help & Feedback
              </DropdownItem>
              <DropdownItem key="logout" color="danger" onClick={logout}>
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        )}
      </NavbarContent>
    </Navbar>
  );
}
