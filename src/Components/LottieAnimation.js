import React from 'react';

// styled-components imports
import styled from 'styled-components';

// Package imports
import Lottie from 'react-lottie';


// styled-components
const StyledLottie = styled(Lottie) `
  width: 30%;
  margin: 0 1em;
`

export const LottieAnimation = ({animationData}) => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <StyledLottie options={defaultOptions}/>
  );
}