import { Button, Input } from "@nextui-org/react";
import { PasswordInput } from "../../components/Input/password/PasswordInput";
import { useState } from "react";
import { Register } from "../../services/AuthService";
import { useNavigate } from "react-router-dom";
import { getLoggedInUser } from "../../services/UserService";
import useLocalStorage from "../../hooks/useLocalStorage";
import { userContext } from "../../contexts/userContext";
import Swal from "sweetalert2";

const formDefault = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const RegisterPage = () => {
  const TOKEN_KEY = "authToken";
  const { user, setUser } = userContext();
  const [token, setToken] = useLocalStorage(TOKEN_KEY, "");
  const [values, setValues] = useState(formDefault);
  const navigate = useNavigate();

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
      const response = await Register(values);
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
    <form onSubmit={handleFormSubmit} className="w-72">
      <h1 className="text-2xl font-semibold">Create New Account</h1>
      <p className=" text-sm mt-4 inline">
        Already a Member?
        <span className="text-primary-400"> Log In</span>{" "}
      </p>
      <Input
        isRequired
        type="text"
        label="Username"
        variant="underlined"
        name="username"
        value={values.username}
        onChange={handleInputChange}
      />

      <Input
        isRequired
        type="text"
        label="Email"
        variant="underlined"
        name="email"
        value={values.email}
        onChange={handleInputChange}
      />
      <PasswordInput
        isRequired
        label="Password"
        name="password"
        value={values.password}
        onChange={handleInputChange}
      />
      <PasswordInput
        isRequired
        label="Confirm Password"
        name="confirmPassword"
        value={values.confirmPassword}
        onChange={handleInputChange}
      />

      <Button
        type="submit"
        color="primary"
        size="sm"
        className="w-full font-bold mt-6"
      >
        Create Account
      </Button>
      <p className=" text-tiny mt-1 p-2 text-center">
        By signing up i agree to
        <span className="text-primary-400"> term & condition </span>
        and
        <span className="text-primary-400"> privacy policy</span>
      </p>
    </form>
  );
};
