import React, { useContext } from "react";
import styled from "styled-components";
import Icon from "react-icons-kit";

import { facebook_1 } from "react-icons-kit/ikons/facebook_1";
import { instagram } from "react-icons-kit/ikons/instagram";
import { heart } from "react-icons-kit/ikons/heart";
import SanoButton from "../SanoButton/SanoButton";

const FooterContainer = styled.footer`
  background-color: #eee;
  height: 240px;
  display: flex;
  flex-direction: column;
  padding: 0 12%;
  padding-bottom: 5%;
  padding-top: 2%;
  box-sizing: border-box;
  /* background-color: red; */
  justify-content: space-between;
  .topWrapper {
    position: relative;
  }
`;

const Information = styled.div``;

const Copyright = styled.div`
  color: gray;
  font-size: 13px;
  text-align: center;
`;

const SanoButtonExtended = styled(SanoButton)`
  position: absolute;
  top: 50px;
  right: 0;
`;

const SocialLinks = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  a {
    color: black;
    i {
      cursor: pointer;
      margin: 5px;
    }
  }
`;

const Footer = () => {

const content = {
  address: "Октомвриска Револуција 32/15",
  location: "Скопје, Македонија 1000",
  mail: "contact@homade.com",
  fbLink: "https://www.facebook.com/tastyhomade",
  igLink: "https://www.instagram.com/homade",
  buttonText: "Дознај Повеќе"
}

  const {address, location, mail, fbLink, igLink ,buttonText} = content;

  return (
    <FooterContainer>
      <div className="topWrapper">
        <Information>
          {mail}<br />
          {address} <br />
         {location}
        </Information>
        <SocialLinks>
          <a
            href={fbLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon={facebook_1} size={33} />
          </a>
          <a
            href={igLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon={instagram} size={33} />
          </a>
        </SocialLinks>
        <SanoButtonExtended variant="cta">{buttonText}</SanoButtonExtended>
      </div>
      <Copyright>
        © 2019 Homade ORG ; Made with{" "}
        <sup>
          <Icon icon={heart} size={15} />
        </sup>{" "}
        during StartupWeekend 2019
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
