import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../styles/colors.css";
import "../styles/navbar.css"
import { Link } from 'react-router-dom';

function TopBar(){
  return (
    <Navbar expand="lg" className="mbg-black-02">
      <Container>
        <Navbar.Brand style={{color: "#ffff"}} href="#home">ReklamSenin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Anasayfa</Nav.Link>
            <Nav.Link as={Link} to="/Profile">Profil</Nav.Link>
            <Nav.Link as={Link} to="/Login">Login</Nav.Link>
            <Nav.Link as={Link} to="/Register">Üye Ol</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopBar;