import React from "react";
import styled from "styled-components";

const Modal = () => {
  const [state, setState] = React.useState(false);

  return (
    <>
      <ModalContainer>
        <ModalDim state={state}></ModalDim>
        <ModalBox state={state}>
          <ModalCancleBtn
            onClick={() => {
              setState(!state);
            }}
          >
            &times;
          </ModalCancleBtn>
          <ModalText>HELLO CODESTATES!</ModalText>
        </ModalBox>
        <ModalBtn
          onClick={() => {
            setState(!state);
          }}
        >
          Open Modal
        </ModalBtn>
      </ModalContainer>
    </>
  );
};

export default Modal;

const ModalContainer = styled.div`
  width: 1200px;
  margin: 100px auto;
`;
const ModalDim = styled.div`
  ${(props) => (props.state ? "display: block" : "display: none")};
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: #000;
  opacity: 50%;
`;
const ModalBox = styled.div`
  ${(props) => (props.state ? "display: block" : "display: none")};
  width: 300px;
  height: 200px;
  background-color: #fff;
  border-radius: 20px;
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
`;
const ModalCancleBtn = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const ModalText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
`;
const ModalBtn = styled.div`
  width: 100px;
  height: 50px;
  border-radius: 20px;
  background-color: purple;
  line-height: 50px;
  text-align: center;
  color: #fff;
  margin: 0 auto;
`;
