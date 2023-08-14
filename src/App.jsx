import "./index.css";
import { UserProvider } from "./contexts/userContext.jsx";
import Router from "./Router";

export default function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}
