import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

//store
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { cartUIAC, RootState } from "../../store";

//comps
import SearchBar from "./SearchBar";

//icons
import { HiOutlineMenuAlt1, HiOutlineUserCircle } from "react-icons/hi";
import {
    AiOutlineHeart,
    AiOutlineSearch,
    AiOutlineShoppingCart,
} from "react-icons/ai";

const Navbar = () => {
    const { pathname } = useRouter();

    const [isSearchBarOpen, setIsSearchBarOpen] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const dispatch = useDispatch();
    const cart = useSelector((state: RootState) => state.cart);
    const wishlist = useSelector((state: RootState) => state.wishlist);
    const { openCartUI } = bindActionCreators(cartUIAC, dispatch);

    const isActiveLink = (path: string): string => {
        if (pathname == path) return "active-link";
        return "";
    };

    return (
        <HeaderContainer>
            <SearchBar
                isOpen={isSearchBarOpen}
                setIsOpen={setIsSearchBarOpen}
            />
            <Header className="page-container">
                <Link href="/">
                    <Logo className="logo">Mamiru</Logo>
                </Link>

                <nav>
                    <NavLinks isOpen={isMenuOpen}>
                        <li className={isActiveLink("/")}>
                            <Link href="/">Home</Link>
                        </li>
                        <li className={isActiveLink("/about")}>
                            <Link href="/about">About</Link>
                        </li>
                        <li className={isActiveLink("/shop")}>
                            <Link href="/shop">Shop</Link>
                        </li>
                        <li className={isActiveLink("/blog")}>
                            <Link href="/cart">Blog</Link>
                        </li>
                        <li className={isActiveLink("/contact")}>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </NavLinks>
                </nav>
                <IconsContainer>
                    <Icon>
                        <AiOutlineSearch
                            onClick={() => setIsSearchBarOpen(true)}
                        />
                    </Icon>
                    <Icon>
                        <Link href="/wishlist">
                            <AiOutlineHeart />
                        </Link>
                        {wishlist.length !== 0 && (
                            <div className="cart-items">{wishlist.length}</div>
                        )}
                    </Icon>
                    <Icon>
                        <AiOutlineShoppingCart onClick={() => openCartUI()} />
                        {cart.length !== 0 && (
                            <div className="cart-items">{cart.length}</div>
                        )}
                    </Icon>
                    <Link href="/signup">
                        <Icon>
                            <HiOutlineUserCircle className="user-icon" />
                        </Icon>
                    </Link>
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
    font-family: "Vujahday Script", serif;
    font-size: 1.75rem;

    &:hover {
        cursor: pointer;
    }
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

    li {
        &:hover {
            a {
                color: #575454;
                font-weight: 600;
            }
        }
    }

    .active-link a {
        color: #575454;
        font-weight: 600;
        position: relative;

        &::after {
            content: "";
            position: absolute;
            bottom: calc(-1.75rem + 2px);
            left: -5px;
            width: calc(100% + 10px);
            height: 2px;
            background-color: #575454;
        }
    }

    @media screen and (max-width: 48rem) {
        position: absolute;
        top: ${(props: { isOpen: boolean }) =>
            props.isOpen ? "100%" : "-1000%"};
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
    position: relative;
    .cart-items {
        background-color: #575757;
        border-radius: 50%;
        height: 1.25rem;
        width: 1.25rem;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.8rem;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(50%, -50%);
    }

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
