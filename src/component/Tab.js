import React from "react";
import styled from "styled-components";

const Tab = () => {
  const menuArr = [
    { name: "Tab1", content: "Tab menu ONE" },
    { name: "Tab2", content: "Tab menu TWO" },
    { name: "Tab3", content: "Tab menu THREE" },
  ];
  const [currentTab, setCurrentTab] = React.useState(0);
  const selectMenuHandler = (index) => {
    setCurrentTab(index);
  };

  return (
    <>
      <TabContainer>
        <TabBox>
          {menuArr.map((el, index) => {
            return (
              <li
                length={menuArr.length}
                key={index}
                className={`${index === currentTab ? "focused" : ""}`}
                onClick={() => selectMenuHandler(index)}
              >
                {el.name}
              </li>
            );
          })}
        </TabBox>
        <TabText>{menuArr[currentTab].content}</TabText>
      </TabContainer>
    </>
  );
};

export default Tab;

const TabContainer = styled.div`
  width: 1200px;
  margin: 100px auto;
`;
const TabBox = styled.ul`
  display: flex;
  li {
    list-style: none;
    text-align: center;
    line-height: 40px;
    height: 40px;
    width: ${(props) => (props.length ? `calc(100%/${props.length})` : "100%")};
    background: #80808059;
    color: gray;
  }
  li.focused {
    background: purple;
    transition: all 1s;
    color: #fff;
  }
`;

const TabText = styled.div`
  height: 300px;
  line-height: 300px;
  text-align: center;
`;
