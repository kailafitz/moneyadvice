import React from 'react';
import Lottie from 'react-lottie';

export default function LottieAnimation( { animationData } ) {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
};

  return (
    <Lottie className="f-Lottie" options={defaultOptions}/>
  );
}