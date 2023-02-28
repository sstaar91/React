import styled from "styled-components";
import * as M from "../../styles/mixin";

export const Container = styled.section`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const ViewBox = styled.div`
  display: flex;
  transform: ${(props) => `translate(${props.position})`};
  transition: 0.5s all ease-in-out;
  width: 300%;
`;

export const ButtonWrap = styled.div`
  display: flex;
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
  width: 170px;
  height: ${(props) => (props.size === "column" ? "120px" : "240px")};
  background-color: white;
  overflow: hidden;
`;

export const ColorBox = styled.div`
  ${M.flexCenter};
  margin-top: 20px;
  gap: 5px;
`;

export const ColorCard = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid black;
  border-radius: 100%;
  background-color: ${(props) => props.color};
`;

export const UploadButton = styled.label`
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 20px;
  border: none;
  font-size: 15px;
  font-weight: 700;
  background-color: ${(props) => props.theme.purple_button};
  color: white;
  cursor: pointer;
`;

export const UploadInput = styled.input`
  display: none;
`;

export const UploadImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
