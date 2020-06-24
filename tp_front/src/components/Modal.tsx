import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import * as PlanetImage from '../../public/purplePlanet.png';
import SignForm from './SignForm';

const Container = styled.section`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 110%;
  height: 100%;
  backdrop-filter: url(filters.svg#filter) blur(10px) saturate(150%);
  z-index: 1;
  margin: 0;
`;
const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 700px;
  margin: 0px;
  padding: 30px;
  border-radius: 7px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;
interface ITest {
  background: string;
}

const Rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}`;

const LogoImg = styled.div`
  position: absolute;
  margin-top: 20px;
  width: 250px;
  height: 250px;
  z-index: 30;
  background-image: url(${(props: ITest) => props.background});
  background-size: contain;
  transform-origin:center;
  animation: ${Rotate} 180s linear infinite;
`;

const Modal = () => (
  <Container>
    <Content>
      <LogoImg background={PlanetImage.default} />
      <SignForm />
    </Content>
  </Container>
);

export default Modal;
