import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar/NavBar.js";
import { Home } from './components/Home/Home.js';
import { About } from './components/About/About.js';
import { TechStack } from './components/TechStack/TechStack.js';
import { Projects } from './components/Projects/Projects.js';




function App() {
  return (
    
    <div className="App">
        <NavBar />
        <Home/>
        <About/>
        <TechStack/>
        <Projects/>
    </div>

    
  
    
  );
}

export default App;
