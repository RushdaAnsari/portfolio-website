import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { TechStack } from './components/TechStack/TechStack';
import { Projects } from './components/Projects/Projects';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


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
