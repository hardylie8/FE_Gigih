import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const initialStoredValue = localStorage.getItem(key);
  const initial = initialStoredValue ? initialStoredValue : initialValue;

  const [storedValue, setStoredValue] = useState(initial);

  const setValue = (value) => {
    localStorage.setItem(key, value);
    setStoredValue(value);
  };

  const clearValue = () => {
    localStorage.removeItem(key);
    setStoredValue(null);
  };

  return [storedValue, setValue, clearValue];
};

export default useLocalStorage;
