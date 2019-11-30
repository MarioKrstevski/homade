import styled from "styled-components";
import { Link as OriginalLink } from "@reach/router";

export const Link = styled(OriginalLink)`
  color: #333232;
  padding: 5px 7px;
  font-size: 12px;
  font-family: "Proxima Nova", sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  text-decoration: none;
  margin-right: 10px;
  letter-spacing: 0.9px;

  ${props =>
    props.border ? `border: 1px solid #333232; border-radius:4px; padding: 8px 10px` : null}
  ${props =>
    props.marginright ? `margin-right: ${props.marginright}px` : null}

:hover {
    color: #676464;
    ${props =>
      props.border ? `border: 1px solid #676464; border-radius:4px; ` : null}
  }
`;

export const HeaderContainer = styled.div`
  position: absolute;
  width: 99.9%;
  z-index: 30;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;

  .surround {
    @media (max-width: 960px) {
      display: none;
    }
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
  color: black;

  .ngoName {
    font-size: 16px;
    font-family: Helvetica, sans-serif;
    text-transform: uppercase;
  }

  img{
    width: 35px;
    height: 35px;
    margin-right: 5px;
  }
`;

export const HamburgerContainer = styled.div`
  display: none;
  @media (max-width: 960px) {
    display: block;
  }
`;

export const SideBarContainer = styled.div`
  background-color: #f4f4f4;

  color: white;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
  height: 100vh;
  width: 230px;
  border: 1px solid black;
  padding: 0 14px;
  padding-top: 60px;
  /* position: relative; */

  .closeButton {
    position: absolute;
    top: 14px;
    right: 3px;
    transform: rotate(45deg);
    width: 35px;
    height: 35px;
    color: black;
    font-size: 34px;
    cursor: pointer;
  }

  .linksContainer {
    display: flex;
    flex-direction: column;
  }
`;
