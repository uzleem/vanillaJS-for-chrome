import React, { useState, useEffect } from "react";



/*
    1. useEffect 사용으로 Hello() 호출 시에 show상태에서만 log가 찍히는데,
       Cleanup function을 활용하여 Hide시에도 log가 출력되도록함.
       (아래코드와 같은원리)
*/
function Hello() {
  useEffect(() => {
    console.log("show:");
 
    return () => console.log("Hide:");
  }, [])
  return <h1>Hello</h1>
}

function Hello2() {
  function hiFn() {
    console.log("hiFn:");
    return byeFn
  }
  
  function byeFn() {
    console.log("byeFn:");
    
  }
  
  useEffect(hiFn, []);
  
  return <h1>Hello</h1>
}


function App() {
  const [show, setShow] = useState(false);

  const onClick = () => setShow((prev) => !prev)
  return (

    <div>
      {show ? <Hello/> : null}
      <button onClick={onClick}>{show ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
