import './Navigation.css'
import React, { useState } from 'react';
import {
    Collapse,
    Nav,
    Navbar,
    NavbarBrand,
    NavItem,
    NavLink,
    NavbarToggler,
    Container
  } from 'reactstrap';

const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Container className="Navigation">
            <Navbar className="Navbar" dark expand="md">
                <NavbarBrand href="/">Jackfruit Games</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/DeathRollSimulator">WoW Death Roll Simulator</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </Container>
    );
}

export default Navigation;