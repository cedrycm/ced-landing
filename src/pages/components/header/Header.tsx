import React from "react";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";


import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from "./HeaderStyles";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <Container>
      <Div1>
        <Link href="/">
          <a style={{ display: "flex", alignItems: "center", color: "white" }}>
            <DiCssdeck size="3rem" /> <span>Cedryc</span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#tech">Technologies</NavLink>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/cedrycm">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="linkedin.com/in/cedryc-midy/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  );
};

export default Header;
