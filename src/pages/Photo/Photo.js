import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";
import SelectButton from "../../components/SelectButton";
import OptionBox from "./components/OptionBox";
import * as S from "./Photo.style.js";

const Photo = () => {
  const [position, setPosition] = useState("0vw");
  const [imageList, setImageList] = useState([]);
  const [options, setOptions] = useState({
    size: "",
    color: "black",
  });

  const resultImg = useRef();

  const handleOptions = (e, position) => {
    const { name, value } = e.target;

    if (name === "file") {
      setImageList([]);
    } else if (name === "submit") {
      html2canvas(resultImg.current).then((canvas) =>
        saveImage(canvas.toDataURL("image/png"), "인생네컷.png")
      );
    } else {
      setOptions((prev) => ({ ...prev, [name]: value }));
    }

    setTimeout(() => {
      setPosition(position);
    }, 300);
  };

  const saveImage = (uri, fileName) => {
    let a = document.createElement("a");
    document.body.appendChild(a);
    a.href = uri;
    a.download = fileName;
    a.click();
    document.body.removeChild(a);
  };

  const initImageArr = new Array(4).fill("");
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
    <S.Container>
      <S.ViewBox position={position}>
        <OptionBox title="모양을 선택하세요">
          <S.ButtonWrap>
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
          </S.ButtonWrap>
        </OptionBox>
        <OptionBox title="배경색을 선택하세요">
          <S.ShapeCard size={options.size} color={options.color}>
            {initImageArr.map((_, idx) => {
              return <S.ImageBox key={idx} size={options.size} />;
            })}
          </S.ShapeCard>
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
          <S.ButtonWrap>
            <SelectButton
              type="color"
              value={options.color}
              position="0%"
              handleOptions={handleOptions}
            >
              이전
            </SelectButton>
            <SelectButton
              type="color"
              value={options.color}
              position="-200vw"
              handleOptions={handleOptions}
            >
              확인
            </SelectButton>
          </S.ButtonWrap>
        </OptionBox>
        <OptionBox title="이미지를 추가하세요">
          <S.ShapeCard
            size={options.size}
            color={options.color}
            ref={resultImg}
          >
            {imageList.map((text) => {
              return (
                <S.ImageBox key={text} size={options.size}>
                  <S.UploadImg src={text} alt="이미지" />
                </S.ImageBox>
              );
            })}
            {leftImageArr.map((_, idx) => {
              return <S.ImageBox key={idx} size={options.size} />;
            })}
          </S.ShapeCard>
          <S.UploadButton htmlFor="imageUploadBtn">
            이미지 고르기
          </S.UploadButton>
          <S.UploadInput
            id="imageUploadBtn"
            type="file"
            multiple
            onChange={imageUpload}
          />
          <S.ButtonWrap>
            <SelectButton
              type="color"
              value={options.color}
              position="-100vw"
              handleOptions={handleOptions}
            >
              이전
            </SelectButton>
            <SelectButton
              type="file"
              value={options.color}
              position="-200vw"
              handleOptions={handleOptions}
            >
              다시 넣기
            </SelectButton>
            <SelectButton
              type="submit"
              value={options.color}
              position="-200vw"
              handleOptions={handleOptions}
            >
              확인
            </SelectButton>
          </S.ButtonWrap>
        </OptionBox>
      </S.ViewBox>
    </S.Container>
  );
};

export default Photo;

const BACKGROUND_COLOR_LIST = ["black", "pink", "skyblue", "#973cc6"];
