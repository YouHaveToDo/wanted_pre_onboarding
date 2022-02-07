import React from "react";
import styled from "styled-components";

const Toggle = () => {
  const [toggle, setToggle] = React.useState(false);

  return (
    <ToggleContainer>
      <ToggleSwitch
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <ToggleBgColor bgColor={toggle}></ToggleBgColor>
        <ToggleBtn position={toggle}></ToggleBtn>
      </ToggleSwitch>
      <ToggleText>
        {!toggle ? "Toggle Switch OFF" : "Toggle Switch ON"}
      </ToggleText>
    </ToggleContainer>
  );
};

export default Toggle;

const ToggleContainer = styled.div`
  width: 1200px;
  margin: 100px auto;
`;
const ToggleSwitch = styled.div`
  width: 100px;
  height: 40px;
  border-radius: 20px;
  background-color: gray;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
`;
const ToggleBgColor = styled.div`
  background-color: purple;
  height: 100%;
  display: inline-block;
  ${(props) => (props.bgColor ? "width: 100px" : "width: 0")};
  transition: width 1s;
`;
const ToggleBtn = styled.div`
  position: absolute;
  top: 50%;
  ${(props) => (!props.position ? "left: 5px" : "left: 65px")};
  transform: translateY(-50%);
  transition: all 0.7s;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #fff;
`;
const ToggleText = styled.p`
  text-align: center;
`;
