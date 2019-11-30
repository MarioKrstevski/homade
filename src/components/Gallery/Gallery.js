import React, { useContext } from "react";
import styled from "styled-components";
import content from "../../utils/content";
import { LanguageContext } from "../../utils/LanguageContext";
const GalleryContainer = styled.div`
  padding-top: 90px;
`;

const FirstWay = styled.div`
  ul {
    padding: 0;
  }

  li {
    list-style-type: none;
  }

  ul {
    -webkit-columns: 200px;
    -moz-columns: 200px;
    columns: 400px;
    -webkit-column-break-inside: avoid;
    page-break-inside: avoid;
    break-inside: avoid;
    margin-left: 20px;
    margin-right: 20px;
  }

  img {
    width: 100%;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
    margin-top: 0px;
    margin-bottom: 20px;
    border: 1px solid black;
    box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);
  }
`;

const SecondWay = styled.div`

font-family: 'AdobeGaramondW01-Regula', georgia, serif;
  font-size: 18px; }
  ul {
    padding: 0;
  }

  li {
    list-style-type: none;
    font-weight: bold;
    font-size: 4rem;
    position: relative;
  }

  li:focus {
    border: 10px solid blue;
  }

  span {
    position: absolute;
    top: 10px;
    right: 10px;
    color: #fff;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
  }

  ul {
    /* autoprefixer: off */
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: 200px;
    grid-auto-flow: dense;
    grid-gap: 1em;
    margin: 1em;
  }

  li.highlight-box {
    grid-row: span 2;
    grid-column: span 2;
  }

  li.highlight-tall {
    grid-row: span 2;
  }

  li.highlight-wide {
    grid-column: span 2;
  }

  img {
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
    height: 100%;
    border: 1px solid black;
    -webkit-box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);
    box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);
  }

  .warning {
    color: red;
    font-size: 200%;
  }

 
`;

const ThirdWay = styled.div`
  ul {
    width: 75vw;
    margin: -5vw auto 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(16, 5vw);
    grid-template-rows: repeat(9, 9vw);
  }

  li {
    width: 20vw;
    height: 18vw;
    -webkit-clip-path: polygon(
      75% 0,
      100% 50%,
      75% 100%,
      25% 100%,
      0 50%,
      25% 0
    );
    clip-path: polygon(75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%, 25% 0);
    grid-area: span 2 / span 4;
  }

  li:nth-child(1) {
    grid-row: 2;
    grid-column: 1;
  }

  li:nth-child(2) {
    grid-row: 1;
    grid-column: 4;
  }

  li:nth-child(3) {
    grid-row: 2;
    grid-column: 7;
  }

  li:nth-child(4) {
    grid-row: 1;
    grid-column: 10;
  }

  li:nth-child(5) {
    grid-row: 4;
    grid-column: 1;
  }

  li:nth-child(6) {
    grid-row: 3;
    grid-column: 4;
  }

  li:nth-child(7) {
    grid-row: 4;
    grid-column: 7;
  }

  li:nth-child(8) {
    grid-row: 3;
    grid-column: 10;
  }

  li:nth-child(9) {
    grid-row: 6;
    grid-column: 1;
  }

  li:nth-child(10) {
    grid-row: 5;
    grid-column: 4;
  }

  li:nth-child(11) {
    grid-row: 6;
    grid-column: 7;
  }

  li:nth-child(12) {
    grid-row: 5;
    grid-column: 10;
  }

  li:nth-child(13) {
    grid-row: 8;
    grid-column: 1;
  }

  li:nth-child(14) {
    grid-row: 7;
    grid-column: 4;
  }

  li:nth-child(15) {
    grid-row: 8;
    grid-column: 7;
  }

  li:nth-child(16) {
    grid-row: 7;
    grid-column: 10;
  }

  .warning {
    color: red;
    font-size: 200%;
  }
`;
const Gallery = () => {
  const { language } = useContext(LanguageContext);
  const galleryContent = content[language].gallery;
  const { images, classes } = galleryContent;

  return (
    <GalleryContainer>
      <FirstWay>
        <ul>
          {Object.keys(images).map(imgKey => {
            return (
              <li className={classes[imgKey]}>
                <img src={images[imgKey]} alt="randomst"></img>
              </li>
            );
          })}
        </ul>
      </FirstWay>
    </GalleryContainer>
  );
};

export default Gallery;
