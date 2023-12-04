import styled from "styled-components";

export const UploadImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
