import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.scss';




export const NavBar = () => {
  

  return (
        <>
             
                         <Navbar id="nav" className='flex items-center bg-[#fffaf0] w-full z-30'>
                            <Container className='mb-0 w-full'>
                              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                              <Navbar.Collapse id="basic-navbar-nav" className='flex items-center'>
                                <Nav className=" flex mt-2 mx-auto lg:gap-5">
                                  <NavLink href='#home' className= 'nav-link'>Home</NavLink>
                                  <NavLink href='#about' className= 'nav-link'>About</NavLink>
                                  <NavLink href='#techstack' className= 'nav-link'>Skills</NavLink>
                                  <NavLink href='#projects' className= 'nav-link'>Projects</NavLink>
                                  </Nav>
                                </Navbar.Collapse>
                              </Container>
                            </Navbar>
      


           
            
          
          
          </>

  )
              }