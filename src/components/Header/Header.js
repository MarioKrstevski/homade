import React, { useState, useContext } from "react";
import styled from "styled-components";
import Icon from "react-icons-kit";
import { u1F3EE } from "react-icons-kit/noto_emoji_regular/u1F3EE";
import { u1F35C } from "react-icons-kit/noto_emoji_regular/u1F35C";
import { u1F35B } from "react-icons-kit/noto_emoji_regular/u1F35B";
import { bars } from "react-icons-kit/fa/bars";
import logo from "./logo.png";

import {
  HeaderContainer,
  NavBarContainer,
  HamburgerContainer,
  LogoContainer,
  SideBarContainer,
  Link
} from "./Header.scmp";
import SanoButton from "../SanoButton/SanoButton";

function Hamburger({ clickHandler }) {
  return (
    <HamburgerContainer onClick={clickHandler}>
      <Icon size={24} style={{ color: "#333232" }} icon={bars}></Icon>
    </HamburgerContainer>
  );
}

const logoImage =
  "https://scontent.fskp2-1.fna.fbcdn.net/v/t1.0-9/29695158_1505439182899081_2428008730019178701_n.jpg?_nc_cat=100&_nc_oc=AQkFXN3Kj9wME90bH9KVi40BWiCuIfxY2gEsao8pmuJMLDr8Xbo4Ji16do9-BxZtyVk&_nc_ht=scontent.fskp2-1.fna&oh=5757160b0e6b5b9d0ab903137f290727&oe=5E18FB72";

function Logo({ use }) {
  return (
    <Link to="/">
      <LogoContainer>
        {use === "icon" && <Icon size={30} icon={u1F35C}></Icon>}
        {use === "image" && <img src={logo} alt="logo" />}
        <div className="ngoName">Homade</div>
      </LogoContainer>
    </Link>
  );
}



function NavBar({ setShowSidebar, content }) {


  const { menuLinks, engageButtons } = content;
  return (
    <NavBarContainer>
      <div className="surround" style={{ marginRight: 50 }}>
        {menuLinks.map(link => {
          return <Link to={link.path}>{link.name}</Link>;
        })}
      </div>
      <div>
        {engageButtons.map(eB => {
          return (
            <Link border to={eB.path}>
              {eB.name}
            </Link>
          );
        })}
      </div>
      <div className="surround">
      </div>

      <Hamburger clickHandler={() => setShowSidebar(true)} />
    </NavBarContainer>
  );
}

function SideBar({ visible, setShowSidebar, content }) {


  const { menuLinks, engageButtons } = content;

  const closeSidebar = () => setShowSidebar(false);

  return visible ? (
    <SideBarContainer>
      <div>
        <div onClick={closeSidebar} className="closeButton">
          +
        </div>
      </div>
      <div className="linksContainer">
        <>
          {menuLinks.map(link => {
            return (
              <Link onClick={closeSidebar} to={link.path}>
                {link.name}
              </Link>
            );
          })}
          {engageButtons.map(eB => {
            return (
              <Link onClick={closeSidebar} to={eB.path}>
                {eB.name}
              </Link>
            );
          })}
        </>

      </div>
    </SideBarContainer>
  ) : null;
}

const Header = () => {


  const [showSidebar, setShowSidebar] = useState(false);

  const content = {
    menuLinks: [
      { path: "about-us", name: "About us" },
      { path: "our-kitchen", name: "Our Kitchen" },
      { path: "contact", name: "Contact" }
    ],
    engageButtons: [
      { path: "order", name: "Order" }
    ]
  }

  return (
    <HeaderContainer>
      <Logo use="icon" />
      <NavBar setShowSidebar={setShowSidebar} content={content} />
      <SideBar
        visible={showSidebar}
        setShowSidebar={setShowSidebar}
        content={content}
      />
    </HeaderContainer>
  );
};

export default Header;
