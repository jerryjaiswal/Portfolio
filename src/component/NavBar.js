import { useState ,useEffect} from 'react';
import {Navbar , Container} from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
// import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

 const NavBar =  () => {
    const [activeLink, setActiveLink] = useState('home')
    const [scrolled ,setScrolled] = useState(false)

    useEffect (() => {
        const onScroll = () => {
            if(window > 50){
                setScrolled(true);
            }else {
                setScrolled(false);
            }
        } 

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    } )

    const onUpdateActiveLink = (value) => {
        setActiveLink(value) 
    }

    const handleClick = () => {
        window.open ('https://drive.google.com/file/d/1i0vS8VVJQ2fnU6iaCdJxm-biESuZ-t7E/view?usp=sharing' , '_blank')
    }
    return (
    <Navbar  expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
            {/* <img src={'logo'} alt="Logo"/> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#experience" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Experience</Nav.Link>
           
         </Nav>
        <span className="navbar-text">
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/ronak-jaiswal-46b535221/"><img src={navIcon1} alt="" /></a>
                <a href=""><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/jerryjaiswal._/"><img src={navIcon3} alt="" /></a>
            </div>    
            <button className="vvd" onClick={() => handleClick()}> <span> Download Resume</span></button>
        </span> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar