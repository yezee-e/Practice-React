import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

function CreateWord() {
  const days = useFetch(
    'https://my-json-server.typicode.com/yezee-e/Practice-React/days'
  );
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false); //통신중에는 버튼을 여러번 눌릴수없도록

  function onSubmit(e) {
    e.preventDefault();

    if (!isLoading) {
      setIsLoading(true); //fetch 완료되기 전까지 로딩중으로 변경
      fetch(
        `https://my-json-server.typicode.com/yezee-e/Practice-React/words/`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json', //보내는 리소스의 타입을 의미
          },
          body: JSON.stringify({
            //추가할 정보를 body에 넣어준다
            day: dayRef.current.value,
            eng: engRef.current.value,
            kor: korRef.current.value,
            isDone: false,
          }),
        }
      ).then((res) => {
        if (res.ok) {
          alert('생성이 완료 되었습니다');
          navigate(`/day/${dayRef.current.value}`); //단어를 저징한 해당페이지로 이동
          setIsLoading(false); //생성완료되면 다시 false
        }
      });
    }
  }

  //ref는 돔요소가 생성된 후 접근이 가능하다
  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);

  return (
    <form onSubmit={onSubmit}>
      <div className='input_area'>
        <label>Eng</label>
        <input type='text' placeholder='computer' ref={engRef} />
      </div>
      <div className='input_area'>
        <label>Kor</label>
        <input type='text' placeholder='컴퓨터' ref={korRef} />
      </div>
      <div className='input_area'>
        <label>Day</label>
        <select ref={dayRef}>
          {days.map((day) => (
            <option key={day.id}>{day.day}</option>
          ))}
        </select>
      </div>
      <button style={{ opacity: isLoading ? 0.3 : 1 }}>
        {isLoading ? 'saving...' : '저장'}
      </button>
    </form>
  );
}

export default CreateWord;
