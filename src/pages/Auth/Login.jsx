import { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { PasswordInput } from "../../components/Input/password/PasswordInput";
import { Login } from "../../services/AuthService";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import { userContext } from "../../contexts/userContext";
import { getLoggedInUser } from "../../services/UserService";
import Swal from "sweetalert2";

const formDefault = {
  email: "",
  password: "",
};

export const LoginPage = () => {
  const { user, setUser } = userContext();
  const TOKEN_KEY = "authToken";

  const [token, setToken] = useLocalStorage(TOKEN_KEY, "");
  const navigate = useNavigate();
  const [values, setValues] = useState(formDefault);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Login(values);
      const authToken = response.data.token;
      setToken(authToken);
      const loggedInUser = await getLoggedInUser(authToken);
      setUser(loggedInUser);
      navigate("/home");
    } catch (e) {
      if (e.response.status === 400) {
        const messages = e.response.data.errors
          .map((error) => error.msg)
          .join(" <br/> ");
        Swal.fire("An Error Occurred", messages, "error");
      }
      if (e.response.status === 500) {
        const messages = "Try Again With Another username and Email";
        Swal.fire("An Error Occurred", messages, "error");
      }
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="w-64">
      <h1 className="text-3xl font-semibold">Sign In</h1>
      <p className=" text-sm mt-4 inline">
        New to GIGIH Play ?{" "}
        <span className="text-primary-400">Sign Up For Free</span>{" "}
      </p>

      <Input
        type="email"
        label="Email"
        variant="underlined"
        name="email"
        value={values.email}
        onChange={handleInputChange}
      />
      <PasswordInput
        label="Password"
        name="password"
        value={values.password}
        onChange={handleInputChange}
      />
      <p className="text-primary-400 text-tiny mt-1">Forgot Password ?</p>
      <Button type="submit" color="primary" size="md" className="w-full  mt-6">
        Sign In
      </Button>
    </form>
  );
};
