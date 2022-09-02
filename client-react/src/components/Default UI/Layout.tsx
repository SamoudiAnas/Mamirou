import React from "react";
import styled from "styled-components";
import Cart from "../Cart/Cart";
import Footer from "../Footer/Footer";
import Navbar from "../NavBar/Navbar";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = (props) => {
  return (
    <LayoutWrapper>
      <Navbar />
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
