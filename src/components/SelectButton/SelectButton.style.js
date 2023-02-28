import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 20px;
  border: none;
  font-size: 15px;
  font-weight: 700;
  background-color: ${(props) => props.theme.purple_button};
  color: white;
  transition: 0.3s all ease-in-out;
  transform: ${(props) => `scale(${props.clicked ? "70%" : "100%"})`};
  cursor: pointer;
`;
