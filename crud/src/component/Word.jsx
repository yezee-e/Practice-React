import React, { useState } from 'react';

function Word({ word: w }) {
  //word를 구조분해할당해서 w라는 새로운 변수명으로 할당해준다
  const [word, setWord] = useState(w); //word를 state로 만든다
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  const toggleShow = () => {
    setIsShow(!isShow);
  };

  //수정
  const toggleDone = () => {
    fetch(
      `https://my-json-server.typicode.com/yezee-e/Practice-React/words/${word.id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json', //보내는 리소스의 타입을 의미
        },
        body: JSON.stringify({
          //수정을 위한 정보를 body에 넣어준다
          ...word, //기존데이터에
          isDone: !isDone, //수정되는 값을 추가
        }),
      }
    ).then((res) => {
      if (res.ok) {
        setIsDone(!isDone);
      }
    });
  };

  //삭제
  function del() {
    if (window.confirm('삭제하시겠습니까?')) {
      //alert창
      fetch(`http://localhost:3004/words/${word.id}`, {
        method: 'DELETE',
      }).then((res) => {
        if (res.ok) {
          setWord({ id: 0 });
        }
      });
    }
  }

  if (word.id === 0) {
    return null; //id가 0이면 기존 데이터를 날리고 null로 하겠다
  }

  return (
    <tr className={isDone ? 'off' : ''}>
      <td>
        <input type='checkbox' checked={isDone} onChange={toggleDone} />
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={toggleShow}>{isShow ? '숨기기' : '뜻보기'}</button>
        <button onClick={del} className='btn_del'>
          삭제
        </button>
      </td>
    </tr>
  );
}

export default Word;
