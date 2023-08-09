import { Button, Input } from "@nextui-org/react";
import PasswordInput from "./PasswordInput";
export const LoginPage = () => {
  return (
    <div className="w-64">
      <h1 className="text-3xl font-semibold">Sign In</h1>
      <p className=" text-sm mt-4 inline">
        New to GIGIH Play ?{" "}
        <span className="text-primary-400">Sign Up For Free</span>{" "}
      </p>

      <Input type="email" label="Email" variant="underlined" />
      <PasswordInput label="Password" />
      <p className="text-primary-400 text-tiny mt-1">Forgot Password ?</p>
      <Button color="primary" size="md" className="w-full  mt-6">
        Sign In
      </Button>
    </div>
  );
};
