import './Navigation.css'
import React, { useState, useEffect } from 'react';
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

  const [onDeathRollPage, setOnDeathRollPage] = useState(false)

  useEffect(() => {
    if (window.location.pathname === '/DeathRollSimulator') {
      setOnDeathRollPage(true)
    }

    // empty dependency array means this effect will only run once
    // eslint-disable-next-line
  }, []);

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
              <NavLink href="/DeathRollSimulator">
                <span class={onDeathRollPage ? 'Nav-current-page' : 'Nav-other-page'}>
                  WoW Death Roll Simulator
                </span>
              </NavLink>
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