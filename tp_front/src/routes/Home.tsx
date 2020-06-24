import * as React from 'react';
import { FC } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

export const bounceUp = keyframes`
    0%{ transform: translate3d(0, 3%, 0);}
    50%{ transform: translate3d(0, -3%, 0);}
    100%{ transform: translate3d(0, 3%, 0);}
  }`;

export const brightUpDown = keyframes`
    0%{ opacity: 0.3;}
    50%{ opacity: 0.9;}
    100%{opacity:0.3;}
}`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${bounceUp} 2s linear infinite;
  &:hover {
    animation: none;
  }
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 60%;
`;

const MainTitle = styled.h1`
  margin: 0px;
  height: 10.5rem;
  /* width: 100%; */
  font-family: Righteous;
  font-size: 8rem;
  text-align: justify;
  color: white;
  opacity: 0.9;
`;

const JourneyLink = styled.div`
  margin-top: 20px;
  font-family: 'Do Hyeon';
  font-size: 1.7rem;
  color: white;
  opacity: 0.7;
  transition: opacity 0.2s linear;
  animation: ${brightUpDown} 2s linear infinite;
  &:hover {
    opacity: 0.9;
    animation: none;
  }
`;

const Home: FC = () => {
  return (
    <HomeContainer>
      <Link to="/journey">
        <TitleContainer>
          <MainTitle>2DU PLANIT</MainTitle>
        </TitleContainer>
        <JourneyLink>Start Your Journey</JourneyLink>
      </Link>
    </HomeContainer>
  );
};

export default Home;
