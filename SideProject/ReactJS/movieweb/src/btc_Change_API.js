import React, { useState, useEffect } from "react";

function App() {
  const [loding, setLoding] = useState(true);
  const [values, setValues] = useState([]);
  const [money, setMoney] = useState("");
  const [check, setCheck] = useState(true);
  let btc = 0;

  /* 
      - 최초 render시 수행하기 위해 useEffect 사용
      
      - Network 확인법 : 
          1. console창 
          2. Network > tickers? response, Preview확인 
    
      - 가져온 API URL response 데이터 확인
          1. fetch API URL : https://api.coinpaprika.com/v1/tickers
          2. .then(response) > respon.json 가공
          3. .then(json)     > log확인
    */
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=10").then((Response) =>
      Response.json().then((json) => {
        setValues(json);
        setLoding(false);
      })
    );
  }, []);

  const onChange = (event) => {
    setMoney(event.target.value);
  };

  const onClick = () => {
    setCheck(false);
  };

  values.filter((item) =>
    item.symbol === "BTC" ? (btc = Math.ceil(item.quotes.USD.price)) : 0
  );

  return (
    <div>
      <h1>The Coins! {loding ? null : `(${values.length})`} </h1>

      <input
        onChange={onChange}
        value={money}
        placeholder="Money"
        disabled={!check}
      ></input>

      <button onClick={onClick}>changeBTC</button>
      <br />

      <input
        value={check ? "" : btc / money}
        placeholder="yourBTC"
        disabled={check}
      ></input>
      <br />

      {loding ? (
        <h1>Loding...</h1>
      ) : (
        <select>
          {values.map((item, index) => (
            <option key={index}>
              {item.name} : {item.symbol} : {Math.ceil(item.quotes.USD.price)}$
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
