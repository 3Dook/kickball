import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PlayersList from './components/players';
import Header from './components/header';
import SignUp from './components/signup';
import Score from './components/score';

import image from "./img/background.jpg";

function App() {
  return (
    <div className="App"
      style={{backgroundImage:`url(${image})`,
      backgroundRepeat:"no-repeat",
      backgroundAttachment: 'fixed',
      backgroundPosition: "center"
      }}>
{/*     <div>
      <PlayersList/>
    </div>
 */}
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
