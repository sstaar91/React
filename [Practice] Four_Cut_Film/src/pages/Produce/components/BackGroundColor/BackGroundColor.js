import React from "react";
import OptionBox from "../OptionBox";
import SelectButton from "../../../../components/SelectButton";
import * as S from "./BackGroundColor.style.js";
import * as CS from "../../styles/common.style";

const BackGroundColor = ({ options, setOptions, handleOptions }) => {
  const initImageArr = new Array(4).fill("");

  return (
    <OptionBox title="배경색을 선택하세요">
      <CS.ShapeCard size={options.size} color={options.color}>
        {initImageArr.map((_, idx) => {
          return <CS.ImageBox key={idx} size={options.size} />;
        })}
      </CS.ShapeCard>
      <S.ColorBox>
        {BACKGROUND_COLOR_LIST.map((list) => {
          return (
            <S.ColorCard
              key={list}
              color={list}
              onClick={() => {
                setOptions((prev) => ({ ...prev, color: list }));
              }}
            />
          );
        })}
      </S.ColorBox>
      <CS.ButtonWrap>
        <SelectButton
          type="color"
          value={options.color}
          color="prev"
          position="0%"
          handleOptions={handleOptions}
        >
          이전
        </SelectButton>
        <SelectButton
          type="color"
          value={options.color}
          color="next"
          position="-200vw"
          handleOptions={handleOptions}
        >
          확인
        </SelectButton>
      </CS.ButtonWrap>
    </OptionBox>
  );
};

export default BackGroundColor;

const BACKGROUND_COLOR_LIST = ["black", "pink", "skyblue", "#973cc6"];
