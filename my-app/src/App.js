import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { TechStack } from './components/TechStack/TechStack';


function App() {
  return (
    
    <div className="App">
        <NavBar/>
        <Home/>
        <About/>
        <TechStack/>
    </div>
    
  
    
  );
}

export default App;
