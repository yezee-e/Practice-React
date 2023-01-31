import { useState } from 'react';
import './App.css';
import Box from './component/Box';

//1.박스2개(타이틀,사진,결과)
//2.가위 바위 보 버튼이 있다
//3.버튼을 클릭하면 클릭한 값이 박스에 보임
//4.컴퓨터는 랜덤하게 아이템 선택이 된다
//5.3과4의 결과를 가지고 승패를 가진다
//6.승패결과에 따라 테두리 색이 바뀐다(win-초록, lose-빨강, tie-검정)

const choice = {
  rock: {
    name: 'Rock',
    img: 'https://mblogthumb-phinf.pstatic.net/20120708_164/foxmann_1341709963675FIgOC_PNG/img_2.png?type=w2',
  },
  scissors: {
    name: 'Scissors',
    img: 'https://mblogthumb-phinf.pstatic.net/20120708_107/foxmann_13417099635705qnOz_PNG/img_1.png?type=w2',
  },
  paper: {
    name: 'Paper',
    img: 'https://mblogthumb-phinf.pstatic.net/20120708_97/foxmann_1341709963774AGRm9_PNG/img_3.png?type=w2',
  },
};
function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState('');

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  //랜덤한 값 추출하는 방법
  const randomChoice = () => {
    let itemArray = Object.keys(choice); //객체에 키값만 뽑아서 어래이로 만들어주는 함수
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  const judgement = (user, computer) => {
    if (user.name == computer.name) {
      return 'tie';
    } else if (user.name == 'Rock')
      return computer.name == 'Scissors' ? 'Win' : 'Lose';
    else if (user.name == 'Scissors')
      return computer.name == 'Paper' ? 'Win' : 'Lose';
    else if (user.name == 'Paper')
      return computer.name == 'Rock' ? 'Win' : 'Lose';
  };

  return (
    <div>
      <div className='main'>
        <Box title='You' item={userSelect} result={result} />
        <Box title='Computer' item={computerSelect} result={result} />
      </div>
      <div className='main'>
        <button onClick={() => play('scissors')}>
          <img src='pic/가위.png' width={30} alt='가위' />
        </button>
        <button onClick={() => play('rock')}>
          {' '}
          <img src='pic/바위.png' width={30} alt='바위' />
        </button>
        <button onClick={() => play('paper')}>
          {' '}
          <img src='pic/보.png' width={30} alt='보' />
        </button>
      </div>
    </div>
  );
}

export default App;
