import React, { useState } from "react";
import theme from "../../styles/theme.js";
import * as S from "./SelectButton.style.js";

const SelectButton = ({
  type,
  handleOptions,
  value,
  color,
  position,
  children,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const clickButton = (e) => {
    setIsClicked((prev) => !prev);
    handleOptions(e, position);
    setTimeout(() => {
      setIsClicked(false);
    }, 150);
  };

  const ColorOption = {
    next: theme.green_button,
    prev: theme.red_button,
  };

  return (
    <S.Button
      name={type}
      value={value}
      bgColor={ColorOption[color] || theme.purple_button}
      clicked={isClicked}
      onClick={clickButton}
    >
      {children}
    </S.Button>
  );
};

export default SelectButton;
