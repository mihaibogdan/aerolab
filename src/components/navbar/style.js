import styled from 'styled-components';

import { Link } from '../../assets/styles/typography';

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
  }
`;

export const MenuItems = styled.div`
  margin: 0 auto;
  ${Link} {
    margin: 0px 26px;
  }
`;
