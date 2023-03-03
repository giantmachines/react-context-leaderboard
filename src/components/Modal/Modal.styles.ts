import styled from "styled-components";

export const ModalDiv = styled.div`
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  background-color: rgb(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: -1;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  background-color: #222222;
  height: 100px;
  width: 300px;
  border-radius: 12px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  color: white;

  .footer {
    display: flex;
    gap: 10px;
  }
`;
