import './App.css';
import Login from './Pages/Login/Login.js';
import { Navbar } from './Components/Navbar/Navbar.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      Spellseeker
      <Login/>
      
    </div>
  );
}

export default App;
