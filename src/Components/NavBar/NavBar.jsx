
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//Carrito
import CartWidget from "./CartWidget";
//Estilos
import "./NavBar.css";

const NavBar = () => {

return(
  //NavBar
    <div>
    <Navbar id='Navegador' collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">El Pony Pisador</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Novedades</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
            <NavDropdown title="Catalogo" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">General</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Infantil</NavDropdown.Item>
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