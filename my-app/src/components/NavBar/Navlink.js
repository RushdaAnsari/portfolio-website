import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from 'react-router-dom';
import './Navlink.scss'

export const NavLinks = () => {
  return (
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow lg:h-[50px] lg:mt-[5px]">
    
        <Tabs
          defaultActiveKey="home"
          id="fill-tab-example"
          className="mb-2 mt-2 custom-tabs"
          fill
        >
          <Tab Link='/' className="block mt-4 lg:inline-block lg:mt-0 mr-4" eventKey="home" title="Home"></Tab>
          <Tab Link='/about' className="block mt-4 lg:inline-block lg:mt-0 mr-4" eventKey="about" title="About"></Tab>
          <Tab Link='/techstack' className="block mt-4 lg:inline-block lg:mt-0 mr-4" eventKey="techstack" title="Skills"></Tab>
          <Tab Link='/projects' className="block mt-4 lg:inline-block lg:mt-0" eventKey="projects" title="Projects"></Tab>
          
        </Tabs>
      </div>
    </div>
  );
}

