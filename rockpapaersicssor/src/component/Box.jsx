import React from 'react';

const Box = ({ title, item, result }) => {
  //Computer에 user와 반대되는 결과를 보여줄수있도록 한다
  if (title === 'Computer' && result !== 'tie' && result !== '') {
    result = result === 'Win' ? 'Lose' : 'Win';
  } else {
    result = result;
  }

  return (
    <div>
      <h1 className='title'>{title}</h1>
      <div className={`box ${result}`}>
        <h2>{item && item.name}</h2>
        <img className='item-img' src={item && item.img} alt='scissors' />
        <h2>{result}</h2>
      </div>
    </div>
  );
};

export default Box;
