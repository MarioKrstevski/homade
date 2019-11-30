import React from "react";
import styled from "styled-components";

export const SanoButtonWrapper = styled.button`
  padding: 10px 14px;
  background-color: #369ff4;
  font-size: 18px;
  text-transform: uppercase;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;

  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  background-color: #f1858b;

  font-family: "Titillium Web", sans-serif;
  font-weight: 500;
  letter-spacing: 1px;
  ${props => (props.active ? `color: blue;` : null)}

  ${props =>
    props.variant === "hollow"
      ? `
  padding: 4px 10px;
  background-color: transparent;
  border: 1px solid black;
  color: black;
  font-size: 14px;
  font-weight: 400;
  float:${props.position}
  margin-left: 60px;
  outline: none;
  margin-bottom: 20px;
  `
      : null}

  ${props =>
    props.variant === "language"
      ? `
  padding: 5px;
  background-color: transparent;
  border: 1px solid black;
  color: black;
  font-size: 12px;
  font-weight: 400;
  outline: none;
  border-radius: 0;
      `
      : null}
  ${props => (props.active ? `color: blue;` : null)}

    :focus{
      outline: none;
      
    }
    ${props => (props.zoomIn ? " transition:all 0.2s ease-in-out;" : null)}
    ${props =>
      props.variant === "cta" ? " transition:all 0.2s ease-in-out; font-weight:600; padding: 8px 14px; margin: 6px;" : null}

      ${props => props.color ? `color: ${props.color}` : null}
      ${props => props.padding ? `padding: ${props.padding}` : null}
  :hover {

    ${props =>
      props.variant === "cta"
        ? `
      color:white;
      background-color: #eb525a;
    `
        : null}
    ${props =>
      props.variant === "language"
        ? "color:blue; background-color: transparent"
        : null}
    ${props => (props.zoomIn ? "transform: scale(1.1)" : null)}
    ${props => (props.hoverColor ? `color: ${props.hoverColor}` : null)}
  

  }
`;

const SanoButton = props => {
  return <SanoButtonWrapper {...props} />;
};

export default SanoButton;
