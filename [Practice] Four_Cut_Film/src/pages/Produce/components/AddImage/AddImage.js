import React from "react";
import OptionBox from "../OptionBox";
import SelectButton from "../../../../components/SelectButton";
import * as S from "./AddImage.style";
import * as CS from "../../styles/common.style";

const AddImage = ({ options, handleOptions, imageList, setImageList }) => {
  const leftImageArr = new Array(4 - imageList.length).fill("");

  const imageUpload = (e) => {
    if (imageList.length >= 4) {
      alert("더 이상 등록할 수 없습니다!");
      return;
    }
    const uploadImg = e.target.files;
    const imgList = [...imageList];
    for (let i = 0; i < uploadImg.length; i++) {
      const currentImg = URL.createObjectURL(uploadImg[i]);
      imgList.push(currentImg);
    }
    setImageList(imgList);
  };

  return (
    <OptionBox title="이미지를 추가하세요">
      <CS.ShapeCard size={options.size} color={options.color}>
        {imageList.map((text) => {
          return (
            <CS.ImageBox key={text} size={options.size}>
              <CS.UploadImg src={text} alt="이미지" />
            </CS.ImageBox>
          );
        })}
        {leftImageArr.map((_, idx) => {
          return <CS.ImageBox key={idx} size={options.size} />;
        })}
      </CS.ShapeCard>
      <S.UploadButton htmlFor="imageUploadBtn">이미지 고르기</S.UploadButton>
      <S.UploadInput
        id="imageUploadBtn"
        type="file"
        multiple
        onChange={imageUpload}
      />
      <CS.ButtonWrap>
        <SelectButton
          type="color"
          value={options.color}
          color="prev"
          position="-100vw"
          handleOptions={handleOptions}
        >
          이전
        </SelectButton>
        <SelectButton
          type="imageReset"
          value={options.color}
          position="-200vw"
          handleOptions={handleOptions}
        >
          다시 넣기
        </SelectButton>
        <SelectButton
          type="final"
          value={options.color}
          color="next"
          position="-300vw"
          handleOptions={handleOptions}
        >
          확인
        </SelectButton>
      </CS.ButtonWrap>
    </OptionBox>
  );
};

export default AddImage;
