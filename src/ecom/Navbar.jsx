import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const EcomNavbar = () => {
  return (
    // get navbar in react bootstrap
    <Navbar bg="light" variant="light">
      <Container>
        <div className="fs-4 me-5 fw-medium" href="#home">
          E-Commerce
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto d-flex align-items-center">
            <Link
              className="mx-4 text-decoration-none text-body-secondary fw-medium"
              to="/"
            >
              Login
            </Link>
            <Link
              className="mx-4 text-decoration-none text-body-secondary fw-medium"
              to="/register"
            >
              Register
            </Link>
            <Link
              className="mx-4 text-decoration-none text-body-secondary fw-medium"
              to="/addproduct"
            >
              Add Product
            </Link>
            <Link
              className="mx-4 text-decoration-none text-body-secondary fw-medium"
              to="/updateproduct"
            >
              Update Product
            </Link>
            <Link
              className="mx-4 text-decoration-none text-body-secondary fw-medium"
              to="/products"
            >
              Product List
            </Link>
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
