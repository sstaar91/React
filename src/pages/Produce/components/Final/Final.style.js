import styled from "styled-components";
import * as M from "../../../../styles/mixin";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
`;

export const Title = styled.h2`
  margin: 0 25px;
  font-size: 25px;
  font-weight: 700;
  line-height: 1.3;
  text-align: center;
`;

export const ResultImgBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px 0;
`;

export const Content = styled.div`
  ${M.flexCenter};
  padding: 0 10px;
  height: 80px;
  max-width: ${(props) => (props.size === "column" ? "220px" : "170px")};
  word-wrap: normal;
  font-weight: 700;
  color: ${(props) => (props.color ? "black" : "white")};
`;

export const Creator = styled.div`
  ${M.flexCenter};
  text-align: center;
  width: 100%;
  height: 100%;
  color: ${(props) => (props.color ? "black" : "white")};
  font-weight: 700;
`;
