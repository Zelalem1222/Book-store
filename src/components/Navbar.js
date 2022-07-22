import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import styled from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Nav>
      <MainTitle>Bookstore CMS</MainTitle>
      {isOpen ? (
        <CloseIcon onClick={handleClose} />
      ) : (
        <HamburgerIcon onClick={handleOpen} />
      )}

      <NavLinks className={isOpen ? 'open' : null}>
        <LinkItem>
          <NavigationLink to="/books" onClick={handleClose}>
            Books
          </NavigationLink>
          <NavigationLink to="/categories" onClick={handleClose}>
            CATEGORIES
          </NavigationLink>
        </LinkItem>
      </NavLinks>
      <UserIcon type="icon" />
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 4.5rem;
  height: 50px;
  font-family: var(--montserrat);
  @media screen and (min-width: 768px) {
    height: 80px;
  }
`;

const MainTitle = styled.h1`
  color: var(--blue);
  @media screen and (min-width: 768px) {
    font-size: 1.8rem;
    width: 30%;
    max-width: 260px;
    min-width: 260px;
    white-space: nowrap;
  }
`;

const NavLinks = styled.ul`
  position: fixed;
  z-index: 10;
  width: 100vw;
  background-color: var(--blue);
  height: 150px;
  left: 0;
  top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translateX(100%);
  transition: 0.3s ease;
  &.open {
    transform: translateX(0);
  }
  @media screen and (min-width: 768px) {
    transform: translateX(0);
    position: static;
    flex-direction: row;
    justify-content: space-between;
    height: auto;
    background-color: var(--white);
  }
`;

const LinkItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    height: auto;
    font-size: 0.8rem;
    letter-spacing: 1.9px;
  }
`;

const NavigationLink = styled(NavLink)`
  margin: 10px;
  color: white;
  font-size: inherit;
  @media screen and (min-width: 768px) {
    color: black;
  }
`;

const UserIcon = styled(FaUser)`
  margin: 10px;
  width: 20px;
  height: 20px;
  color: var(--blue);
  @media screen and (min-width: 768px) {
    color: var(--blue);
  }
`;

const HamburgerIcon = styled(FiMenu)`
  color: var(--blue);
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const CloseIcon = styled(MdClose)`
  color: var(--blue);
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
