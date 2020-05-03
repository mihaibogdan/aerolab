import React, { useState, useEffect } from 'react';

import { SolidButton } from '../../assets/styles/buttons';
import { Link } from '../../assets/styles/typography';
import { Nav, MenuItems } from './style';

function Navbar() {
  const [scrollStarted, setScrollStarted] = useState(window.scrollY > 10);

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

  return (
    <>
      <Nav className={scrollStarted ? 'scrolledNavbar' : ''}>
        <img
          src={
            !scrollStarted
              ? 'src/assets/img/hero/light-logo.png'
              : 'src/assets/img/hero/dark-logo.png'
          }
          alt=""
        />
        <MenuItems>
          <Link href="#home" color="inherit" fontSize="14px">
            HOME
          </Link>
          <Link href="#about" color="inherit" fontSize="14px">
            ABOUT
          </Link>
          <Link href="#platform" color="inherit" fontSize="14px">
            PLATFORM
          </Link>
          <Link href="#team" color="inherit" fontSize="14px">
            TEAM
          </Link>
          <Link href="#contact" color="inherit" fontSize="14px">
            CONTACT
          </Link>
        </MenuItems>
        {/* <SolidButton color="#5945e6" backgroundColor="#fff" border={scrollStarted}> */}
        <SolidButton
          color={!scrollStarted ? '#5945e6' : '#fff'}
          backgroundColor={!scrollStarted ? '#fff' : '#5945e6'}
        >
          Hire Us Now
        </SolidButton>
      </Nav>
    </>
  );
}

export default Navbar;
