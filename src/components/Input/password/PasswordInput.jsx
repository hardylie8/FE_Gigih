import React from "react";
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import "./index.css";

export function PasswordInput({ label, name, value, onChange }) {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Input
      label={label}
      variant="underlined"
      name={name}
      value={value}
      onChange={onChange}
      endContent={
        <button
          className="focus:outline-none"
          type="button"
          onClick={toggleVisibility}
        >
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      type={isVisible ? "text" : "password"}
      className="max-w-xs"
    />
  );
}
