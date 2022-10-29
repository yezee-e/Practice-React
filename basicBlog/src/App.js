import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [a, b] = useState(['남자코트추천', '강남우동맛집', '파이썬독학']);
  const [따봉, 따봉변경] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false); //스위치역할
  const [title, setTitle] = useState(0);
  const [입력값, 입력값변경] = useState('');
  const text = useRef();

  function onClick() {
    const newInput = text.current.value;
    b([newInput, ...a]);
  }

  function onDelete(index) {
    b(a.filter((item, todoIndex) => index !== todoIndex));
  }

  return (
    <div className='App'>
      <div className='black-nav'>
        <h4 style={{ color: 'red', fontSize: '16px' }}>ReactBlog</h4>
      </div>
      <button
        onClick={() => {
          let copyTitle = [...a];
          copyTitle.sort();
          b(copyTitle);
        }}
      >
        가나다순정렬
      </button>
      <button
        onClick={() => {
          let copy = [...a];
          copy[0] = '여자코트추천';
          b(copy);
        }}
      >
        제목변경
      </button>

      {a.map((data, index) => {
        return (
          <div className='list' key={index}>
            <h4 onClick={() => setModal(!modal)}>
              {data}
              <span
                onClick={() => {
                  onDelete(index);
                }}
              >
                ❌
              </span>
            </h4>
            <span
              onClick={() => {
                let copy = [...따봉];
                copy[index] = copy[index] + 1;
                따봉변경(copy);
              }}
            >
              👍
            </span>
            <span>{따봉[index]}</span>

            <p>2월 17일 발행</p>
          </div>
        );
      })}
      <input
        type='text'
        ref={text}
        onChange={(e) => {
          입력값변경(e.target.value);
        }}
      />
      <button onClick={onClick}>완료</button>

      {modal === true ? <Modal title={title} a={a} /> : null}
    </div>
  );
}

function Modal({ a, title }) {
  return (
    <div className='modal'>
      <h4>{a[title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
