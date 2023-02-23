import React, { useState, useEffect } from "react";


/**
 * 1. ReactJS는 state상태가 변경되면 전체 코드들이 render() 된다.
 * 2. useEffect를 사용하면 첫 render이후 render가 수행 하지 않도록 한다.
 * 3. 특정 이벤트에 대해서만 render를 발생 시킬때 useEffect [] 부분에 state fix 데이터를 매핑한다.
 */
function App() {
  
  const [counter, setCounter] = useState(0);
  const [getValue, setValue] = useState("");

  const plus = () => setCounter((sc) => sc+1);
  const value = (event) => setValue(event.target.value);
  
  console.log("useEffect(X)")

  // /**
  //  * useEffect 1 : 기본
  //  */
  // const use = () => (console.log("renderTest:useEffect(O)"))
  // useEffect(use, []);

  // /**
  //  * useEffect 2 : 함수형
  //  */
  // useEffect(() => {
  //   console.log("renderTest:useEffect(O)")
  // }, []);

  /**
   * useEffect 3 : getValue가 발생할때에만 render를 수행한다.
   */
  useEffect(() => {
    if(getValue !== "" && getValue.length > 5)
    console.log("useEffect(O)", getValue)
  }, [getValue]);

  return (
    <div>
      <input value={getValue} onChange={value} type="text" placeholder="Search..."></input>
      <h1>{counter}</h1>
      <button onClick={plus}>Click Me</button>
    </div>
  );
}

export default App;
