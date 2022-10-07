import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
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
                    <Link className="textoClaro" to="/">
                        <img
                            alt="logo"
                            src={logo}
                            width="100"
                            height="100"
                        />
                        GM COMIDAS
                    </Link>
                    <Link to="/cart">
                        <CartWidget />
                    </Link>
                    <Navbar.Toggle className="textoClaro" aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink className="textoClaro" to="/category/hamburguesas">Hamburguesas</NavLink>
                            <NavLink className="textoClaro" to="/category/pizzas">Pizzas</NavLink>
                            <NavLink className="textoClaro" to="/category/wraps">Wraps</NavLink>
                            <NavLink className="textoClaro" to="/category/bebidas">Bebidas</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default NavBar;