import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'

function NavbarReact() {
  return (
    <Navbar expand="md" className="bg-body-tertiary" bg="dark" data-bs-theme="dark" fixed="top">
      <Container>
        <Navbar.Brand as={NavLink} to='/'><img src="/logo.png" alt="logo de la web" className='logo' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='button-css' />
        <Navbar.Collapse id="basic-navbar-nav" className='gap-nav-cart'>
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to='/'>INICIO</Nav.Link>
            <NavDropdown title="PRODUCTOS" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to='/productos/nuevos'>Nuevos</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/productos/ofertas' className="mt-1">
                Ofertas
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/productos/mas vendidos' className="mt-1">Más vendidos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <NavLink to='/cart'>
            <CartWidget />
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarReact;