"use client";
import React from "react";

import FluidAnimation from "../src/fluidAnimation/components/react-fluid-animation";
const defaultConfig = {
  textureDownsample: 1,
  densityDissipation: 0.94,
  velocityDissipation: 1.001,
  pressureDissipation: 0.50,
  pressureIterations: 28,
  curl: 40,
  splatRadius: 0.015,
};

const FAnimation = () => {
  return (
    <div className="w-full h-[100vh] opacity-90  z-[44] ">
      <FluidAnimation config={defaultConfig} />
      

      <div className="h-[100vh] -mt-[100vh]  "></div>
    </div>
  );
};

export default FAnimation;