
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "./CartWidget";
import { Link } from 'react-router-dom';

const NavBar = () => {

return(
  //NavBar
    <div className='Bar'>
      <Navbar id='Navegador' collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <div>
            <img src="/img/El pony pisador 2.png" alt="" style={{marginRight: "50px"}} />
          </div>
          <Link to="/" style={{marginRight: "50px", textDecoration: "none", color: "black"}}>El Pony Pisador</Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#pricing">Novedades</Nav.Link>
              <Nav.Link href="#pricing">Contacto</Nav.Link>
              <NavDropdown title="Catalogo" id="collapsible-nav-dropdown">
                <Link to="/category/General" style={{textDecoration: "none", color: "black"}}>General</Link>
                <NavDropdown.Divider />
                <Link to="/category/Infantil" style={{textDecoration: "none", color: "black"}}>Infantil</Link>
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