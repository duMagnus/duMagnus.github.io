import styled, {keyframes} from "styled-components";

export const Backdrop = styled.div`
  z-index: 98;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.dBlack}99;
  position: fixed;
  top: 0;
  left: 0;
`;

const modalAnimation = keyframes`
  0% { opacity: 0; transform: translate(-50%, 100%) }
  30% { opacity: 0 }
  100% { opacity: 100%; }
`;

export const ModalContainer = styled.div`
  z-index: 99;
  width: fit-content;
  height: fit-content;
  position: fixed;
  margin: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-name: ${modalAnimation};
  animation-duration: 0.5s;
  animation-timing-function: ease-in-out;
`;

