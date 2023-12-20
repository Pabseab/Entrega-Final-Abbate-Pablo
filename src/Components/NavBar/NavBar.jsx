
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//Carrito
import CartWidget from "./CartWidget";
//Estilos
import "./NavBar.css";
import { Link } from 'react-router-dom';

const NavBar = () => {

return(
  //NavBar
    <div>
    <Navbar id='Navegador' collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to="/">El Pony Pisador</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Novedades</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
            <NavDropdown title="Catalogo" id="collapsible-nav-dropdown">
              <Link to="/category/general">General</Link>
              <NavDropdown.Divider />
              <Link to="/category/infantil">Infantil</Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
    </div>
    )

}

export default NavBar;