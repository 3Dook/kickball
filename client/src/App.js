import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import SignUp from './components/signup';
import Score from './components/score';
import Team from './components/team';
import Admin from './components/admin';

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
          <Route path='/dddMaster' element={<Admin/>} />
          <Route path='/roster/usa' element={<Team teamName="usa"/>} />
          <Route path='/roster/oosa' element={<Team teamName="oosa"/>} />

      </Routes>
    </Router>

    </div>
  );
}

export default App;
