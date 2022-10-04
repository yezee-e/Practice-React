import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCions] = useState([]);
  useEffect(() => {
    //API를 한번만 실행해주면 되기 때문에 useEffect을 이용
    fetch('https://api.coinpaprika.com/v1/tickers?limit=10')
      .then((response) => response.json())
      .then((json) => setCions(json));
    setLoading(false); //API가 render되면 setLoading이 false가 되면서 사라진다
  }, []);

  return (
    <div>
      <h1>The Coins!</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map(
            (
              coin //react에서 map을 쓸 때는 key가 필요하지만 코인api에는 각각의 id가 이미 존재하기 때문에 coin.id를 키값으로 넘겨준다
            ) => (
              <option key={coin.id}>
                {coin.name}({coin.symbol}):${coin.quotes.USD.price} USD
              </option>
            )
          )}
        </select>
      )}
    </div>
  );
}

export default App;
