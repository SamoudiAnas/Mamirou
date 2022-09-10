import styled from "styled-components";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt1, HiOutlineUserCircle } from "react-icons/hi";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { cartUIAC } from "../../store";
import SearchBar from "./SearchBar";
import { useState } from "react";

const Navbar = () => {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const dispatch = useDispatch();
  const { openCartUI } = bindActionCreators(cartUIAC, dispatch);

  return (
    <HeaderContainer>
      <SearchBar isOpen={isSearchBarOpen} setIsOpen={setIsSearchBarOpen} />
      <Header className="page-container">
        <Link to="/">
          <Logo className="logo">Mamiru</Logo>
        </Link>

        <nav>
          <NavLinks isOpen={isMenuOpen}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </NavLinks>
        </nav>
        <IconsContainer>
          <Icon>
            <AiOutlineSearch onClick={() => setIsSearchBarOpen(true)} />
          </Icon>
          <Icon>
            <AiOutlineShoppingCart onClick={() => openCartUI()} />
          </Icon>
          <Icon>
            <HiOutlineUserCircle className="user-icon" />
          </Icon>

          <Icon>
            <HiOutlineMenuAlt1
              className="menu-icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </Icon>
        </IconsContainer>
      </Header>
    </HeaderContainer>
  );
};

export default Navbar;

const HeaderContainer = styled.div`
  background-color: white;
  border-bottom: 1px solid #eeeeee;
  position: relative;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 1rem;
`;

const Logo = styled.h3`
  font-family: "PT Serif", serif;
  font-size: 1.25rem;
`;

const NavLinks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  color: black;
  font-family: "Montserrat", sans-serif;

  transition: top 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);

  a {
    font-weight: 500;
    color: black;
  }

  @media screen and (max-width: 48rem) {
    position: absolute;
    top: ${(props: { isOpen: boolean }) => (props.isOpen ? "100%" : "-1000%")};
    left: 0;
    z-index: 999;
    background-color: white;
    width: 100%;
    display: block;
    padding: 2rem 1rem;

    li {
      text-align: center;
      margin-block: 1.5rem;
    }
  }
`;

const IconsContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

const Icon = styled.li`
  svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: #bbb;
    stroke: #bbb;

    &:hover {
      cursor: pointer;
      fill: #57575790;
    }
  }

  .user-icon {
    stroke: #bbb;
    fill: transparent;
  }

  .menu-icon {
    display: none;
    fill: #bbb;
    stroke: #bbb;

    &:hover {
      cursor: pointer;
      fill: #57575790;

      stroke: #57575790;
    }

    @media screen and (max-width: 48rem) {
      display: block;
    }
  }
`;
