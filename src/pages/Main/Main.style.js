import styled from "styled-components";
import { Link } from "react-router-dom";
import * as M from "../../styles/mixin";

export const Container = styled.section`
  ${M.flexCenter}
  height: 100vh;
`;

export const Title = styled(Link)`
  padding: 15px 30px;
  border-radius: 20px;
  font-size: 30px;
  font-weight: 700;
  text-decoration: none;
  background-color: ${(props) => props.theme.purple_button};
  color: white;
  cursor: pointer;
`;
