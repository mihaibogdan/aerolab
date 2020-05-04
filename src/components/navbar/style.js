import styled from 'styled-components';

import { Link } from '../../assets/styles/typography';

export const MenuItems = styled.div`
  margin: 0 auto;
  ${Link} {
    margin: 0px 26px;
  }

  transition: height 400ms cubic-bezier(0.4, 0, 0.2, 1);
  height: ${(props) => `${props.heightMenu}px`};
  overflow: hidden;
`;

export const HamburgerMenu = styled.button`
  padding: 8px 18px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 5px;
  -webkit-appearance: none;
  cursor: pointer;
  display: none;
`;

export const Nav = styled.nav`
  background-color: transparent;
  position: fixed;
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  padding: 0px 150px;
  z-index: 10;
  top: 0px;
  left: 0;
  color: white;
  box-shadow: 0 0 0 0 rgba(51, 51, 51, 0.1);
  transition: all 400ms cubic-bezier(0.4, 0, 0.2, 1);

  &.scrolledNavbar {
    background-color: #fff;
    box-shadow: 0 18px 40px 5px rgba(51, 51, 51, 0.1);
    height: 80px;
    color: #000;

    ${HamburgerMenu} {
      border: 1px solid rgba(0, 0, 0, 0.2);
    }
  }
  @media screen and (max-width: 1200px) {
    padding: 15px 15px;
    flex-wrap: wrap;
    height: auto;

    &.scrolledNavbar {
      height: auto;
    }

    ${MenuItems} {
      display: flex;
      flex-direction: column;
      background-color: #fff;
      color: #5945e6;
      width: 100%;
      padding: 15px 0px;
      margin-top: 4px;
      order: 3;

      ${Link} {
        margin: 10px 14px;
        color: #000;
      }

      &.open-on-mobile {
        display: flex;
      }

      &.closed-on-mobile {
        display: none;
      }
    }

    button.hire-us {
      display: none;
    }
    button.hamburger-menu {
      display: block;
      margin-left: auto;
    }
  }
`;
