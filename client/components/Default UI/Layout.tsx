import React, { useEffect } from "react";
import Toast from "./Toast";
import Cart from "../Cart/Cart";
import Footer from "../Footer/Footer";
import Navbar from "../NavBar/Navbar";
import styled from "styled-components";

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = (props) => {
    return (
        <LayoutWrapper>
            <Navbar />
            <Toast />
            <Cart />
            {props.children}
            <Footer />
        </LayoutWrapper>
    );
};

export default Layout;

const LayoutWrapper = styled.div`
    position: relative;
    overflow: hidden;
`;
