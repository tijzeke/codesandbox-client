import styled, { keyframes } from 'styled-components';

export const itemWidth = 324;
export const smallItemHeight = 420;
export const bigItemHeight = 548;
export const viewPortMargin = 60;

export const Container = styled.div`
  position: relative;
  height: 900px;

  ${props => props.theme.breakpoints.md} {
    transform: scale(0.75, 0.75);
    transform-origin: 100% 0%;
    height: 600px;
  }

  ${props => props.theme.breakpoints.sm} {
    transform: scale(0.5, 0.5);
    transform-origin: 100% 0%;
    height: 340px;
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  margin-top: 2rem;
  height: 900px;
  right: 0;
  top: 0;
  width: ${props => props.width}px;
  overflow: hidden;

  margin-left: -${itemWidth + viewPortMargin}px;

  ${props => props.theme.breakpoints.md} {
    margin-top: 0;
  }

  > section {
    display: flex;
    align-items: center;
  }

  img {
    cursor: pointer;
    max-width: initial;
  }

  div > div {
    margin-bottom: 2rem;
  }

  div {
    margin: 1rem;
  }

  &::-webkit-scrollbar {
    width: 0.5em;
    height: 0.5em;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 3px;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }
`;

export const Button = styled.a`
  border: 0;
  background: transparent;
  padding: 0;
  margin: 0;
  text-decoration: none;
`;

const floatAnimation = keyframes`
  0% {
    transform: translateY(10px);
  }

  50% {
    transform: translateY(-10px);
  }

  100% {
    transform: translateY(10px);
  }
`;

export const Wrapper = styled.div`
  transition: 0.3s ease opacity;

  animation: 7s ${floatAnimation} infinite;
  animation-delay: ${props => (props.index || 0) * 250}ms;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  will-change: transform;
  animation-fill-mode: backwards;
  animation-timing-function: ease;

  position: absolute;
  left: ${props => props.index * 334}px;
  top: 0;

  width: ${itemWidth}px;
  height: ${props =>
    props.big ? bigItemHeight + 'px' : smallItemHeight + 'px'};

  &:hover {
    opacity: 0.8;
  }
`;

export const Image = styled.img``;

export const Iframe = styled.iframe`
  width: ${itemWidth}px;
  height: ${props =>
    props.big ? bigItemHeight + 'px' : smallItemHeight + 'px'};
  border: 0;
  border-radius: 4;
  overflow: hidden;
`;
