import styled from "styled-components";

export const HeroSplitContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  ${props => (props.cHeight ? `height:${props.cHeight}px` : "height:500px")}


  ${props =>
    props.src
      ? `background: url(${props.src});  
      background-repeat: no-repeat;
     background-position: center;
      background-size: cover;`
      : null}
  ${props =>
    props.linearGrad
      ? `background-image: ${props.linearGrad}; 
     `
      : null}


  ${props => (props.cHeight ? `height:${props.cHeight}px` : "height:500px")}


  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  ${props =>
    props.cHeight ? `height:${2 * props.cHeight}px` : "height:1000px"}

  }
`;
