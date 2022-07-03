import React from 'react';
import { Theme } from './themeContext';

interface ToggleProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  theme: Theme;
  checked?: boolean;
  text?: string;
}

const Toggle: React.FC<ToggleProps>;
export default Toggle;
