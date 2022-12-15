
import './App.css';
import Navbar from './components/Navbar';
import Tables from './components/Tables';

function App() {
  return (
    <div className="App">
    <div className='navbar'>
      <Navbar/>
    </div>
    
      <div className='table__container'>
        <Tables/>
      </div>
      
    </div>
  );
}

export default App;
