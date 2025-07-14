import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext({
    theme: 'light', // Default theme
    toggle: () => {}, // Function to toggle theme
});

export const ThemeProvider = ({children}: {children:React.ReactNode}) => {
    const [theme, setTheme] = useState<"light" | "dark">('light');

    const toggle = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

  return (
    <ThemeContext.Provider value={{ theme, toggle}}>
      <div className={theme === "dark" ? "bg-black text-white" : "min-h-screen p-4"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);