import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PlayersList from './components/players';
import Header from './components/header';
import SignUp from './components/signup';
import Score from './components/score';
function App() {
  return (
    <div className="App">
    <div>
      <PlayersList/>
    </div>

    <Router>
      <Routes>
        <Route path='/' element={<Header/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/score' element={<Score/>} />

      </Routes>
    </Router>

    </div>
  );
}

export default App;
