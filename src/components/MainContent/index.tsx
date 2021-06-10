import React, { useState } from "react";
import { IoMdSunny } from "react-icons/io";
import { BsMoon } from "react-icons/bs";
import {
  Container,
  Logo,
  Shadow,
  Subtitle,
  Title,
  ThemeSwitch,
} from "./styles";

type THEME = "dark" | "light";

const MainContent: React.FC = () => {
  const [theme, setTheme] = useState<THEME>("dark");

  const handleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("dark");
    }
  };

  return (
    <Container>
      <ThemeSwitch onClick={handleTheme}>
        {theme === "dark" ? (
          <IoMdSunny color={"#363636"} size={20}></IoMdSunny>
        ) : (
          <BsMoon color={"#363636"} size={20}></BsMoon>
        )}
      </ThemeSwitch>
      <Logo>
        <Title>LeUX</Title>
        <Shadow>LeUX</Shadow>
      </Logo>
      <Subtitle>Creative Portfolio's</Subtitle>
    </Container>
  );
};

export default MainContent;
