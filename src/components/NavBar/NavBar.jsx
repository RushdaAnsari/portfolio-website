import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.scss';




export const NavBar = () => {
  

  return (
        <>
            <div className="main w-full fixed flex items-center justify-center fixed bg-[#EDEDE5] inset-x-0 top-0 py-0 z-30">
              
             
                         <Navbar>
                            <Container className='mb-0 w-full'>
                              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                              <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mx-auto mt-2">
                                  <NavLink href='/' className= 'nav-link px-[30px]'>Home</NavLink>
                                  <NavLink href='#about' className= 'nav-link px-[30px]'>About</NavLink>
                                  <NavLink href='#techstack' className= 'nav-link px-[30px]'>Skills</NavLink>
                                  <NavLink href='#projects' className= 'nav-link px-[30px]'>Projects</NavLink>
                                  </Nav>
                                </Navbar.Collapse>
                              </Container>
                            </Navbar>
                      
            </div> 


           
            
          
          
          </>

  )
              }