import React from "react";

import Footer from "../footer/Footer";
import Header from "../header/Header";
import { Container } from "./LayoutStyles";

interface LayoutProps {
  children?: any;
}


export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};

export default Layout;

