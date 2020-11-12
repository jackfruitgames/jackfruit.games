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
  NavbarText,
  Container
} from 'reactstrap';
import githubIcon from '../img/github.svg';
import icon128 from '../img/icon128.png'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Container className="Navigation">
      <Navbar className="Navbar" dark expand="md">
        <NavbarBrand className="Nav-brand" href="/">
          <img src={icon128} className="Nav-icon" alt="Jackfruit Games" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/DeathRollSimulator">WoW Death Roll Simulator</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            <a href="https://github.com/jackfruitgames" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" className="Link-icon" />
            </a>
          </NavbarText>
        </Collapse>
      </Navbar>
    </Container>
  );
}

export default Navigation;