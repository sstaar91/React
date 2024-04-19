import styled from "styled-components";

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
  width: 400%;
`;
