import React from "react";
import OptionBox from "../OptionBox";
import SelectButton from "../../../../components/SelectButton";
import { ButtonWrap } from "../../styles/common.style";

const Shape = ({ handleOptions }) => {
  return (
    <OptionBox title="모양을 선택하세요">
      <ButtonWrap>
        <SelectButton
          type="size"
          value="column"
          position="-100vw"
          handleOptions={handleOptions}
        >
          세로형
        </SelectButton>
        <SelectButton
          type="size"
          value="row"
          position="-100vw"
          handleOptions={handleOptions}
        >
          직사각형
        </SelectButton>
      </ButtonWrap>
    </OptionBox>
  );
};

export default Shape;
