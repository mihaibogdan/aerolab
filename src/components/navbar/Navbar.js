import React, { useState, useEffect, useRef } from 'react';

import Menu from '../../assets/img/hero/menu.svg';
import { SolidButton } from '../../assets/styles/buttons';
import { Nav, MenuItems, HamburgerMenu, ScrollLink } from './style';
import LightLogo from '../../assets/img/hero/light-logo.png';
import DarkLogo from '../../assets/img/hero/dark-logo.png';

function Navbar() {
  const [scrollStarted, setScrollStarted] = useState(window.scrollY > 10);
  const [heightMenu, setHeightMenu] = useState(0);
  const menuItemsEl = useRef(null);

  useEffect(() => {
    const checkScrollStarted = () => {
      if (!scrollStarted) {
        setScrollStarted(window.scrollY > 10);
      } else {
        setScrollStarted(window.scrollY < 11);
      }
    };

    window.addEventListener('scroll', checkScrollStarted);
    return () => window.removeEventListener('scroll', checkScrollStarted);
  }, []);

  const calcHeight = () => {
    const nrOfNodes = menuItemsEl.current.childNodes.length;
    const [firstNode] = menuItemsEl.current.childNodes;
    const nodeHeight = firstNode.offsetHeight;
    const nodeMT = +window.getComputedStyle(firstNode).marginTop.replace('px', '');
    const nodeMB = +window.getComputedStyle(firstNode).marginBottom.replace('px', '');

    const nodeTotalHeight = nodeHeight + nodeMT + nodeMB;

    return nrOfNodes * nodeTotalHeight;
  };

  return (
    <>
      <Nav className={`${scrollStarted ? 'scrolledNavbar' : ''}`}>
        <img src={!scrollStarted ? LightLogo : DarkLogo} alt="" />

        <MenuItems ref={menuItemsEl} heightMenu={heightMenu}>
          <ScrollLink hashSpy to="home" smooth color="inherit" fontSize="14px">
            HOME
          </ScrollLink>
          <ScrollLink
            hashSpy
            to="about"
            smooth
            activeClass="activeLink"
            spy
            color="inherit"
            fontSize="14px"
          >
            ABOUT
          </ScrollLink>
          <ScrollLink
            hashSpy
            to="platform"
            smooth
            activeClass="activeLink"
            spy
            color="inherit"
            fontSize="14px"
          >
            PLATFORM
          </ScrollLink>
          <ScrollLink
            hashSpy
            to="team"
            smooth
            activeClass="activeLink"
            spy
            color="inherit"
            fontSize="14px"
          >
            TEAM
          </ScrollLink>
          <ScrollLink
            hashSpy
            to="contact"
            smooth
            activeClass="activeLink"
            spy
            color="inherit"
            fontSize="14px"
          >
            CONTACT
          </ScrollLink>
        </MenuItems>

        <SolidButton
          className="hire-us"
          color={!scrollStarted ? '#5945e6' : '#fff'}
          backgroundColor={!scrollStarted ? '#fff' : '#5945e6'}
        >
          Hire Us Now
        </SolidButton>

        <HamburgerMenu
          className="hamburger-menu"
          onClick={() => setHeightMenu(heightMenu ? 0 : calcHeight())}
        >
          <Menu color="#5945e6" width="20px" />
        </HamburgerMenu>
      </Nav>
    </>
  );
}

export default Navbar;
