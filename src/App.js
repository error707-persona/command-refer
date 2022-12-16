
import './App.css';
import Navbar from './components/Navbar';
import Tables from './components/Tables';
import Home from './pages/Home';
import { Route, Routes } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import UserState from './context/UserState';
function App() {
  return (
    <>
<UserState>
    <div className="App">
    <div className='navbar'>
      <Navbar/>
    </div>
    <div className='page'>

    
    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route path="/customer" element={<Login/>}></Route>
      <Route path="/transfer" element={<Tables/>}></Route>
    </Routes>
    </div>


     
      
    </div>
    </UserState></>
  );
}

export default App;
