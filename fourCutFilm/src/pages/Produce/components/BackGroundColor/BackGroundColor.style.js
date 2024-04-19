import styled from "styled-components";
import * as M from "../../../../styles/mixin";

export const ShapeCard = styled.div`
  display: ${(props) => (props.size === "column" ? "flex" : "grid")};
  grid-template-columns: 1fr 1fr;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  background-color: ${(props) => props.color};
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
