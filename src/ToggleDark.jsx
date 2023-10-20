import React from 'react';
import { useState } from 'react';
export default function ToggleDark(props) {
    const [isDarkMode, setDarkMode] = useState(false);
  const toggleTheme = () => {
    setDarkMode(!isDarkMode);
  };
}