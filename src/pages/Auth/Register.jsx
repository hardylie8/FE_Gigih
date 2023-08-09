import { Button, Checkbox, Input } from "@nextui-org/react";
import PasswordInput from "./PasswordInput";
export const RegisterPage = () => {
  return (
    <form className="w-72">
      <h1 className="text-2xl font-semibold">Create New Account</h1>
      <p className=" text-sm mt-4 inline">
        Already a Member?
        <span className="text-primary-400"> Log In</span>{" "}
      </p>
      <Input required type="text" label="Username" variant="underlined" />

      <Input required type="email" label="Email" variant="underlined" />
      <PasswordInput required label="Password" />
      <PasswordInput required label="Confirm Password" />

      <Button color="primary" size="sm" className="w-full font-bold mt-6">
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
