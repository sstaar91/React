import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";
import Shape from "./components/Shape";
import BackGroundColor from "./components/BackGroundColor";
import AddImage from "./components/AddImage/AddImage";
import Final from "./components/Final/Final";
import * as S from "./Produce.style.js";

const Produce = () => {
  const [position, setPosition] = useState("0vw");
  const [imageList, setImageList] = useState([]);
  const [options, setOptions] = useState({
    size: "",
    color: "black",
  });

  const resultImg = useRef();

  const handleOptions = (e, position) => {
    const { name, value } = e.target;

    if (name === "imageReset") return setImageList([]);
    if (name === "final") {
      if (imageList.length < 4) {
        return alert("이미지를 모두 채워주세요");
      }
    }
    if (name === "submit") {
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

  return (
    <S.Container>
      <S.ViewBox position={position}>
        <Shape handleOptions={handleOptions} />
        <BackGroundColor
          options={options}
          setOptions={setOptions}
          handleOptions={handleOptions}
        />
        <AddImage
          options={options}
          handleOptions={handleOptions}
          imageList={imageList}
          setImageList={setImageList}
        />
        <Final
          options={options}
          handleOptions={handleOptions}
          imageList={imageList}
        />
      </S.ViewBox>
    </S.Container>
  );
};

export default Produce;
