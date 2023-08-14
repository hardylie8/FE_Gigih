import { createContext, useContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

import { getLoggedInUser } from "../services/UserService";
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(0);
  const TOKEN_KEY = "authToken";
  const [token] = useLocalStorage(TOKEN_KEY, "");
  useEffect(() => {
    const fetchUser = async () => {
      const response = await getLoggedInUser(token);
      setUser(response);
    };
    fetchUser();
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const userContext = () => {
  return useContext(UserContext);
};
