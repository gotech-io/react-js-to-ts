import { useContext } from 'react';
import { ThemeContext, ThemeName, themeNames } from './themeContext';
import styled from '@emotion/styled/macro';
import Toggle from './Toggle';

const ToggleContainer = styled.div`
  top: 18px;
  right: 6px;
  position: absolute;
  transform: rotate(270deg);
`;

const ThemeToggle = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    changeTheme(
      (theme.name === themeNames.light
        ? themeNames.dark
        : themeNames.light) as ThemeName
    );
  };

  return (
    <ToggleContainer>
      <Toggle
        theme={{ ...theme, checkboxColor: '#ddd561' }}
        checked={theme.name === themeNames.light}
        onChange={() => {
          toggleTheme();
        }}
      />
    </ToggleContainer>
  );
};

export default ThemeToggle;
