import { useState } from "react";
import { LuSun } from "react-icons/lu";
import { FiMoon } from "react-icons/fi";
import { useTheme } from "styled-components";
import * as themes from "../themes";

const ThemeSelector = ({ setTheme }) => {
  const currentTheme = useTheme();
  console.log(themes);

  return (
    <>
      {currentTheme.themeName === "light" ? (
        <FiMoon
          color="white"
          fontSize={30}
          onClick={() =>
            setTheme((prevTheme) => ({
              ...themes.dark,
              roundUI: prevTheme.roundUI,
            }))
          }
        />
      ) : (
        <LuSun
          color="white"
          fontSize={30}
          onClick={() =>
            setTheme((prevTheme) => ({
              ...themes.light,
              roundUI: prevTheme.roundUI,
            }))
          }
        />
      )}
      <button
        onClick={() =>
          setTheme((prevTheme) => ({
            ...prevTheme,
            roundUI: !prevTheme.roundUI,
          }))
        }
      >
        Round UI
      </button>
      <select
        value={currentTheme.themeName}
        onChange={(e) =>
          setTheme((prevTheme) => ({
            ...themes[e.target.value],
            roundUI: prevTheme.roundUI,
          }))
        }
      >
        {Object.keys(themes).map((theme) => (
          <option key={theme} value={theme}>
            {theme[0].toUpperCase() + theme.slice(1)}
          </option>
        ))}
      </select>
    </>
  );
};

export default ThemeSelector;
