"use client";

import animationData from "./Logo-3.json";
import { useLottie } from "lottie-react";

const LogoLottie = () => {
  // Hacemos un clon profundo para evitar el error de 'object is not extensible'
  const safeAnimationData = JSON.parse(JSON.stringify(animationData));

  const defaultOptions = {
    animationData: safeAnimationData,
    autoplay: true,
    loop: false,
    duration: 16000,
  };

  const { View } = useLottie(defaultOptions);

  return (
    <div className="w-full">
      {View}
    </div>
  );
};

export default LogoLottie;
