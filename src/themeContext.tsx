import React, { createContext, ReactNode, useState } from 'react';

const themeNames = {
  light: 'light',
  dark: 'dark',
};

interface Theme {
  name: string;
  primaryColor: string;
  textColor: string;
  disabledTextColor: string;
  buttonColor: string;
  borderColor: string;
  checkboxColor: string;
}

type ThemeName = keyof typeof themeNames;

const themes: Record<ThemeName, Theme> = {
  light: {
    name: themeNames.light,
    primaryColor: '#e8e8e8',
    textColor: '#000000',
    disabledTextColor: '#333333',
    buttonColor: '#4fbe79',
    borderColor: '#aaaaaa',
    checkboxColor: '#4fbe79',
  },
  dark: {
    name: themeNames.dark,
    primaryColor: '#424242',
    textColor: '#ffffff',
    disabledTextColor: '#dddddd',
    buttonColor: '#4fbe79',
    borderColor: '#aaaaaa',
    checkboxColor: '#4fbe79',
  },
};

const ThemeContext = createContext({
  theme: themes.light,
  changeTheme: (_themeName: ThemeName) => {},
});

interface ThemeContextProps {
  children: ReactNode | ReactNode[];
}

const ThemeProvider: React.FC<ThemeContextProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(themes.light);
  const changeTheme = (themeName: ThemeName) => {
    setTheme(themes[themeName]);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export type { Theme, ThemeName };
export { ThemeContext, themeNames };
export default ThemeProvider;
