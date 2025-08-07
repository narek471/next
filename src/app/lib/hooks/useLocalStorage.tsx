"use client";
import { useState, useEffect } from "react";

export const useLocalStorage = () => {
  const [storage, setStorage] = useState<string | null>(null);

  useEffect(() => {
    const storedValue = localStorage.getItem("access");

    if (storedValue) {
      setStorage(storedValue);
    }
  }, []);

  const saveToStorage = (value: string) => {
    localStorage.setItem("access", value);
    setStorage(value);
  };

  const removeFromStorage = () => {
    localStorage.removeItem("access");
    setStorage(null);
  };

  return {
    storage,
    saveToStorage,
    removeFromStorage,
  };
};
