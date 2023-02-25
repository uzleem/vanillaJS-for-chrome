import React, { useState, useEffect } from "react";

function App() {
  // input 데이터
  const [value, setValue] = useState("");

  // input 데이터 배열에 추가
  const [values, setValues] = useState([]);
  const onChange = (event) => {
    setValue(event.target.value);
  };
  const onClick = (event) => {
    // onClick 발생이후 새로고침 방지를 위함
    event.preventDefault();

    // input값이 존재하지않으면 return false
    if (value === "") {
      return;
    }

    setValue("");

    console.log(value);

    /**
        * 입력(input)한 데이터를 배열의 담는 과정
        * ...array를 사용하면 배열값을 이어서 붙일 수 있다
        * 함수를 보낼 때 react.js는 함수의 첫번째 argumnet로 현재 State를 보낸다.
        
        1. setValues 배열의 입력값 value를 넣어준다.
        2. setValues는 (1)의 값을 가지고, value를 계속해서 추가해준다.
        3. (2) 동작을 통해 setValues의 입력된 값들이 모두 담겨있다.
       */
    setValues((pre) => [value, ...pre]);
  };

  return (
    <div>
      <h1>My To Dos ({values.length})</h1>

      {/* jsx form event*/}
      <form onClick={onClick}>
        <input
          onChange={onChange}
          type="text"
          placeholder="Write your to do..."
          value={value}
        ></input>
        <button>Add To Do</button>
      </form>
      <hr />

      {/* 
          - 같은 combonent의 list를 render 할 때 key prop을 항상 넣어줘야한다. 
          - map의 2번째 argument는 index를 받으며, key로 사용 가능함.
        */}
      <ul>
        {values.map((pre, index) => (
          <li key={index}>{pre}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
