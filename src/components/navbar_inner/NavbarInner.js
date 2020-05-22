import React, { useState, useEffect, useRef } from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

import { LinkButton } from 'assets/styles/typography';
import DarkLogo from 'assets/img/hero/dark-logo.png';
import { Nav } from './style';

function NavbarInner({ theme }) {
  return (
    <>
      <Nav className="scrolledNavbar">
        <img src={DarkLogo} alt="" />

        <LinkButton
          className="hire-us"
          target="_blank"
          href="https://wa.me/491702988400?text=Hi%20there!"
          color={theme.palette.neutral.white}
          backgroundColor={theme.palette.accent}
        >
          Whatsapp Chat Starten
        </LinkButton>
      </Nav>
    </>
  );
}

NavbarInner.propTypes = {
  theme: PropTypes.object,
  className: PropTypes.string,
};

export default withTheme(NavbarInner);
