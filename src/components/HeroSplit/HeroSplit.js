import React from "react";
import Hero from "../Hero/Hero";

import { HeroSplitContainer } from "./HeroSplit.scmp";

function HeroSplit({
  lImgSize,
  rImgSize,
  img,
  linearGrad,
  cHeight,
  leftContent = <></>,
  rightContent = <></>,
  lhp,
  rhp,
  rImg,
  rBgColor,
  rLinearGrad,
  lBgColor,
  lLinearGrad,
  lImg
}) {
  const noBg = !Boolean(lImg) && !Boolean(lLinearGrad);
  const noBg2 = !Boolean(rImg) && !Boolean(rLinearGrad);
  return (
    <HeroSplitContainer cHeight={cHeight} src={img} linearGrad={linearGrad}>
      <Hero
        noBg={noBg}
        cHeight={cHeight}
        content={leftContent}
        size={lImgSize}
        img={lImg}
        bgColor={lBgColor}
        linearGrad={lLinearGrad}
        horisontalPosition={lhp}
      />
      <Hero
        size={rImgSize}
        noBg={noBg2}
        cHeight={cHeight}
        content={rightContent}
        img={rImg}
        bgColor={rBgColor}
        linearGrad={rLinearGrad}
        horisontalPosition={rhp}
      />
    </HeroSplitContainer>
  );
}

export default HeroSplit;
