import React, { useState } from "react";
import * as S from "./SelectButton.style.js";

const SelectButton = ({ type, handleOptions, value, position, children }) => {
  const [isClicked, setIsClicked] = useState(false);

  const clickButton = (e) => {
    setIsClicked((prev) => !prev);
    handleOptions(e, position);
    setTimeout(() => {
      setIsClicked(false);
    }, 150);
  };
  return (
    <S.Button
      name={type}
      value={value}
      clicked={isClicked}
      onClick={clickButton}
    >
      {children}
    </S.Button>
  );
};

export default SelectButton;
