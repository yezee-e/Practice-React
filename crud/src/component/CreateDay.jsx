import React from 'react';
import { Navigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

function CreateDay() {
  const days = useFetch(
    'https://my-json-server.typicode.com/yezee-e/Practice-React/days'
  );

  function addDay() {
    fetch(`https://my-json-server.typicode.com/yezee-e/Practice-React/days`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', //보내는 리소스의 타입을 의미
      },
      body: JSON.stringify({
        //추가할 정보를 body에 넣어준다
        day: days.length + 1,
      }),
    }).then((res) => {
      if (res.ok) {
        alert('생성이 완료 되었습니다');
        Navigate(`/`); // 첫페이지로 이동
      }
    });
  }
  return (
    <div>
      <h3>현재 일수:{days.length}일</h3>
      <button onClick={addDay}>Day 추가</button>
    </div>
  );
}

export default CreateDay;

//Post로 생성하면 자동으로 id가 부여된다
