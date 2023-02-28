import React from "react";
import * as S from "./OptionBox.style";

const OptionBox = ({ title, children }) => {
  return (
    <S.OptionWrap>
      <S.Title>{title}</S.Title>
      {children}
    </S.OptionWrap>
  );
};

export default OptionBox;
