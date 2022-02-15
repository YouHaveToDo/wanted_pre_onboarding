import React, { useState } from "react";
import styled from "styled-components";
import MyInput from "./MyInput";

const ClickToEdit = (Props) => {
  const cache = {
    name: "김코딩",
    age: 20,
  };
  const [name, setName] = useState(cache.name);
  const [age, setAge] = useState(cache.age);

  return (
    <div
      className="basic_box"
      style={{
        width: "1200px",
        margin: "0 auto",
        textAlign: "center ",
        padding: "50px",
      }}
    >
      <div className="box_one">
        <h3 className="box_name">ClickToEdit</h3>
      </div>
      {/* 컨텐츠 */}
      <div className="box_two" style={{ position: "relative" }}>
        <InputViewBox>
          <InputView>
            <label>이름</label>
            <MyInput
              value={name}
              handleValueChange={(newValue) => setName(newValue)}
            />
          </InputView>
          <InputView>
            <label>나이</label>
            <MyInput
              value={age}
              handleValueChange={(newValue) => setAge(newValue)}
            />
          </InputView>
          <InputView>
            <div className="view">
              <p>
                이름 : <span className="name_age">{name}</span> &nbsp; | &nbsp;
                나이 : <span className="name_age">{age}</span>
              </p>
            </div>
          </InputView>
        </InputViewBox>
      </div>
    </div>
  );
};

const InputViewBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const InputView = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin: 10px 0;
  label {
    color: #ccc;
  }
  div.view {
    color: #ccc;
    .name_age {
      font-weight: bold;
      color: #666;
    }
  }
`;

export default ClickToEdit;
