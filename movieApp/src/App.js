import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/movie/:id' element={<Detail />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

//HashRouter을 사용하면 뒤에 #이 붙는다
//예를 들어 localhost:3001/#/movie

//Router:path에 따라 랜더링해주는 역할
//Routes:한번에 하나의 Route만 렌더링 하기 위해서
//Route: 경로(=path)와 보여줄 컴포넌트(=element)를 명시한다
