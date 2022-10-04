import { useState } from 'react';

function App() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);
  const onChange = (e) => setToDo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === '') {
      return;
    }
    setToDo(''); //state는 직접적으로 수정 불가능(예: toDo=""), 따라서 지금처럼 함수를 가져와서 수정하게 만들어야함
    setToDos((currentArray) => [toDo, ...currentArray]);
  };
  console.log(toDos);

  const deleteBtn = (index) => {
    setToDos(toDos.filter((item, todoIndex) => index !== todoIndex));
  };

  return (
    <div>
      <h1>My To Dos({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type='text'
          placeholder='write your to do ...'
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteBtn(index)}>❌</button>
          </li>
          //리액트는 기본적으로   list안에 있는 모든 item을 인식하기 때문에 key를 넣어 고유하게 만들어줘야한다
          //즉, [{item},{item},{item}] 배열을 만들어서 각자 고유의 key를 가지게한다

          //onClick{}={deleteBtn}이 아닌 onClick={()=>deleteBtn(index)}이렇게 쓰는 이유는 "바로실행"되지 앟고 클릭을 기다리는 함수로 쓰기위함
        ))}
      </ul>
    </div>
  );
}

export default App;
