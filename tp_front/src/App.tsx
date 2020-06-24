import * as React from 'react';
import { FC } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Router from './Router';
import Modal from './components/Modal';

const GlobalStyles = createGlobalStyle`
      body {
        display: flex;
        justify-content: center;
        font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
        font-size: 20px;
        width: 100vw;
        margin:0;
        /* background: rgb(220,136,38); */
        background: linear-gradient(180deg, rgba(73,63,80,1) 26%, rgba(143,29,253,1) 62%, rgba(147,35,246,1) 63%, rgba(252,176,69,1) 88%);
        }
        button {border:0 none; background-color:transparent; cursor:pointer;}
        border-top: none;
        border-left: none;
        border-right: none;
        input {background: transparent;
          font-size:1rem;
          color: white;
          opacity: 0.9;
          font-family: 'Do Hyeon';
          padding-bottom: 5px;
          background-color: transparent;
          background-image: linear-gradient(to right, white 0, #ff7101 70%);
          background-repeat: no-repeat;
          background-position: 0 calc(100% + 3px), 0 0;
          background-size: 100% 3px;
          box-shadow: none;
          border: 0;
          border-bottom: 3px solid rgba(256, 256, 256, 0.6);
          -webkit-font-smoothing: antialiased;
          line-height: 1.5;
          outline: 0 none;
          transition: border-color 0.2s linear;
          &:focus,
          &:hover {
            border-color: transparent;
          }

    }
      input:focus {outline:none}
      a {color:#2f3743; text-decoration:none;}
      a:hover,a:focus{color:#333;}
      a:link,a:active,a:visited{color:#7d7d7d; text-decoration:none; border:0px;}
    `;

const RootContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100%;
`;

const App: FC = () => {
  return (
    <RootContainer>
      <Modal />
      <Router />
      <GlobalStyles />
    </RootContainer>
  );
};

export default App;
