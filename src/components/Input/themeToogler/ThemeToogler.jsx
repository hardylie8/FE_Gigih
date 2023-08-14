import { useState } from "react";

import { useTheme } from "next-themes";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";

export const ThemeToogler = () => {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(theme !== "dark");
  const handleInputChange = (event) => {
    const tooglerValue = event.target.checked;
    setIsDarkMode(tooglerValue);
    !tooglerValue ? setTheme("dark") : setTheme("light");
  };

  return (
    <div>
      <Switch
        isSelected={isDarkMode}
        size="lg"
        color="success"
        startContent={<SunIcon />}
        endContent={<MoonIcon />}
        onChange={handleInputChange}
      ></Switch>
    </div>
  );
};
