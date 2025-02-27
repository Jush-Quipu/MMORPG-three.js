import React from 'react'
import styled from 'styled-components'

const Loading = styled('div')`
  position: fixed;
  z-index: 50;
  width: 100%;
  height: 100%;
  top: 0; left: 0;
  background: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Loader = styled('div')`
  perspective: 120px;
  width: 100px;
  height: 100px;

  &:before {
    content: "";
    position: absolute;
    left: 15px;
    top: 25px;
    width: 75px;
    height: 75px;
    background-color: ${props => props.primaryColor};
    border-bottom: 2px solid #25252B;
    animation: flip 1s infinite;
  }

  &:after {
    content: "Finding Eric...";
    position: absolute;
    left: 8px;
    top: 125px;
    width: fit-content;
  }

  @keyframes flip {
    0% {
      transform: rotate(0);
      border-bottom: 2px solid #25252B;
    }

    50% {
      transform: rotateY(180deg);
      border-bottom: 2px solid #25252B;
      border-top: none;
    }

    100% {
      transform: rotateY(180deg)  rotateX(180deg);
      border-bottom: none;
      border-top: 2px solid #25252B;
    }
  }
`

export const StyledLoader = (props) => {
  const primaryColor = ('#' + (props.primaryColor + 0x00000).toString(16).toUpperCase())
  
  return (
  <>
    <Loading>
      <Loader primaryColor={primaryColor} />
    </Loading>
  </>
  )
}