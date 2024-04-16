import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const EcomNavbar = () => {
  return (
    // get navbar in react bootstrap
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand className="fw-bold" href="#home">
          E-Commerce
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="mx-2 px-2" href="/login">
              Login
            </Nav.Link>
            <Nav.Link className="mx-2 px-2" href="/register">
              Register
            </Nav.Link>
            <Nav.Link className="mx-2 px-2" href="/addproduct">
              Add Product
            </Nav.Link>
            <Nav.Link className="mx-2 px-2" href="/updateproduct">
              Update Product
            </Nav.Link>
            <Nav.Link className="mx-2 px-2" href="/products">
              Product List
            </Nav.Link>
            <NavDropdown title="" id="collapsible-nav-dropdown">
              {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default EcomNavbar;
