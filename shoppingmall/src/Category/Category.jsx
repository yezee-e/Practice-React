import React, { useEffect, useState } from 'react';
import CardList from './CardList';
import './Dropdown.scss';

import Dropdown from './Dropdown';

function Category() {
  const [data, setData] = useState([]);

  const filterList = ['카테고리', '가격', '이름순', '해택']; //대장카테고리

  const mockData = `http://localhost:3000/data/mockData.json`;

  //mock데이터 들고오기
  useEffect(() => {
    fetch(mockData)
      .then(res => res.json())
      .then(json => setData(json.data));
  }, []);

  return (
    <div className="wrap">
      <div className="App">
        {filterList.map(list => (
          <Dropdown key={list} list={list} data={data} setData={setData} />
        ))}
      </div>

      <div style={{ display: 'flex' }}>
        {data.map(values => {
          const { id, title, price } = values;
          return <CardList key={id} title={title} price={price} />;
        })}
      </div>

      {/* <div>
          <button onClick={() => filterResult('food')}>음식</button>

          <button onClick={() => filterResult('goods')}>물건</button>
          <button onClick={() => filterName()}>이름순</button>
          <button>가격</button>
          <button onClick={() => setData(data)}>all</button>
        </div> */}
    </div>
  );
}

export default Category;
