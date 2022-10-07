import React from "react";
import { Toaster } from "react-hot-toast";
import styled from "styled-components";
import Cart from "../Cart/Cart";
import Footer from "../Footer/Footer";
import Navbar from "../NavBar/Navbar";
import Toast from "./Toast";
import ToastMessage from "./ToastMessage";

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = (props) => {
    return (
        <LayoutWrapper>
            <Navbar />
            <Toast />
            <ToastMessage />
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
