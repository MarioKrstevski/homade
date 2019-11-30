import React from "react";
import { HeroContainer, MessageContainer } from "./Hero.scmp";

function HeroImg({ src, alt, linearGrad ,size}) {
  let heroImgStyles = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  if(size){
    heroImgStyles = {
      width: "100%",
      height: "100%",
      objectFit: size,
    };
  }

  const heroLinearGradStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: linearGrad
  };
  if (linearGrad) {
    return <div style={heroLinearGradStyle}></div>;
  }
  return <img style={heroImgStyles} src={src} alt={"test"}></img>;
}
function Message({ content }) {
  return content;
}

export default function Hero({
  size,
  noBg,
  img,
  linearGrad,
  bgColor,
  content = <> </>,
  cHeight,
  horisontalPosition
}) {
  return (
    <HeroContainer cHeight={cHeight} bgColor={bgColor}>
      {!noBg && <HeroImg src={img} size={size} linearGrad={linearGrad} alt="bgImg" />}
      <MessageContainer horisontalPosition={horisontalPosition}>
        <Message content={content} />
      </MessageContainer>
    </HeroContainer>
  );
}


// eslint-disable-next-line no-unused-expressions
