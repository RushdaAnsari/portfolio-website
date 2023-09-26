import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from './components/Home/Home';
import { Skills } from './components/Skills/Skills';


function App() {
  return (
    
    <div className="App">
        <NavBar/>
        <Home/>
        <Skills/>
    </div>
    
  
    
  );
}

export default App;
