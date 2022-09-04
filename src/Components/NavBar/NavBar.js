import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "../../assets/logo.png";
import "./NavBar.css";

const NavBar = () => {
    return (
        <Navbar variant="dark" expand="lg">
            <Container>
                <img
                    src={logo}
                    width="100"
                    height="100"
                    className="d-inline-block align-center m-3"
                    alt="logo"
                />
                <Navbar.Brand className="textoClaro fs-1" href="#home">GM COMIDAS</Navbar.Brand>
                <Navbar.Toggle className="textoClaro" aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className="textoClaro" href="#hamburguesas">Hamburguesas</Nav.Link>
                        <Nav.Link className="textoClaro" href="#pizzas">Pizzas</Nav.Link>
                        <Nav.Link className="textoClaro" href="#wraps">Wraps</Nav.Link>
                        <Nav.Link className="textoClaro" href="#bebidas">Bebidas</Nav.Link>
                    </Nav>
                    <a href="">
                        <i className="bi bi-cart textoClaro carrito"></i>
                    </a>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;