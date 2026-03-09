"use client"; // harus baris pertama, sebelum import apapun

import { createContext, useState } from "react";

type ContextType = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

// kasih default supaya tidak null
export const MyContext = createContext<ContextType>({
  value: "",
  setValue: () => {},
});

export default function MyProvider({ children }: { children: React.ReactNode }) {
  const [value, setValue] = useState("hello");

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
}