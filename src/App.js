import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar/NavBar.jsx";
import { Home } from './components/Home/Home.jsx';
import { About } from './components/About/About.jsx';
import { TechStack } from './components/TechStack/TechStack.jsx';
import { Projects } from './components/Projects/Projects.jsx';




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
