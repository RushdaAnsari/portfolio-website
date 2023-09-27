import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './Navlink.scss'

export const NavLinks = () => {
  return (
    <Tabs
      defaultActiveKey="home"
      id="fill-tab-example"
      className="mb-3 custom-tabs"
      fill
    >
      <Tab eventKey="home" title="Home"></Tab>
      <Tab eventKey="abouts" title="about-page"></Tab>
      <Tab eventKey="projects" title="Projects"></Tab>
      <Tab eventKey="contact" title="Contact"></Tab>
    </Tabs>
  );
}

