import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "../../assets/logo.png";
import "./NavBar.css";
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <header>
            <Navbar variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt="logo"
                            src={logo}
                            width="100"
                            height="100"
                        />
                        GM COMIDAS
                    </Navbar.Brand>
                    <Link to="/cart">
                        <CartWidget />
                    </Link>
                    <Navbar.Toggle className="textoClaro" aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className="textoClaro" href="/category/hamburguesas">Hamburguesas</Nav.Link>
                            <Nav.Link className="textoClaro" href="/category/pizzas">Pizzas</Nav.Link>
                            <Nav.Link className="textoClaro" href="/category/wraps">Wraps</Nav.Link>
                            <Nav.Link className="textoClaro" href="/category/bebidas">Bebidas</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default NavBar;