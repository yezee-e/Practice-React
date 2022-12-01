import './App.css';
import DayList from './component/DayList';
import Header from './component/Header';
import Day from './component/Day';
import { Routes, Route } from 'react-router-dom';
import CreateWord from './component/CreateWord';
import CreateDay from './component/CreateDay';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<DayList />} />
        <Route path='/day/:day' element={<Day />} />
        <Route path='/create_word' element={<CreateWord />} />
        <Route path='/create_day' element={<CreateDay />} />
      </Routes>
    </div>
  );
}

export default App;
