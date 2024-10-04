import { createContext, useState } from "react";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
export const ThemeContext = createContext(null);

export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState(localStorage.getItem("theme"));

  function handelDarkMode() {
    localStorage.setItem("theme", mode === "light" ? "dark" : "light");
    mode === "light" ? setMode("dark") : setMode("light");
  }
  const MyTheme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: "#1976d2",
        light: "#42a5f5",
        dark: "#1565c0",
        contrastText: "#fff",
      },
      myColer: {
        light: "#F6F9FC",
        dark: "#252B32",
      },
    },
  });
  return (
    <ThemeContext.Provider value={handelDarkMode}>
      <ThemeProvider theme={MyTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
