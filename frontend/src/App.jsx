import './App.css';
import {Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage';
import Aboutuspage from './pages/Aboutuspage';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='/about' element={<Aboutuspage/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route exact path="/connect/:providerName/redirect" element={Login}></Route>
          
        </Routes>
      </header>
    </div>
  );
}

export default App;
