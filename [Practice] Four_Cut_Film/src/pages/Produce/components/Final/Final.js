import React, { useState } from "react";
import SelectButton from "../../../../components/SelectButton";
import * as S from "./Final.style";
import * as CS from "../../styles/common.style";

const Final = ({ options, handleOptions, imageList }) => {
  const [content, setContent] = useState("");

  const isComportBlack =
    options.color === "pink" || options.color === "skyblue";

  return (
    <S.Container>
      <S.Title>
        사진 하단에 들어갈 <br />
        텍스트를 작성하세요
      </S.Title>
      <S.ResultImgBox>
        <CS.ShapeCard size={options.size} color={options.color}>
          {imageList.map((text) => {
            return (
              <CS.ImageBox key={text} size={options.size}>
                <CS.UploadImg src={text} alt="이미지" />
              </CS.ImageBox>
            );
          })}
          <S.Content size={options.size} color={isComportBlack}>
            {content}
          </S.Content>
          <S.Creator color={isComportBlack}>Made by @sstaar_mx</S.Creator>
        </CS.ShapeCard>
      </S.ResultImgBox>
      <input
        maxLength={25}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <CS.ButtonWrap>
        <SelectButton
          type="color"
          value={options.color}
          color="prev"
          position="-200vw"
          handleOptions={handleOptions}
        >
          이전
        </SelectButton>
        <SelectButton
          type="final"
          value={options.color}
          color="next"
          position="-300vw"
          handleOptions={handleOptions}
        >
          다운받기
        </SelectButton>
      </CS.ButtonWrap>
    </S.Container>
  );
};

export default Final;
