import styled from "styled-components";

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const ShapeCard = styled.div`
  display: ${(props) => (props.size === "column" ? "flex" : "grid")};
  grid-template-columns: 1fr 1fr;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  background-color: ${(props) => props.color};
`;

export const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  max-width: ${(props) => (props.size === "column" ? "250px" : "175px")};
  width: ${(props) => (props.size === "column" ? "220px" : "45vw")};
  height: ${(props) => (props.size === "column" ? "140px" : "25vh")};
  background-color: white;
  overflow: hidden;
`;

export const UploadImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
