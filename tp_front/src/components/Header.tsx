import * as React from 'react';
import styled from 'styled-components';
import { FC } from 'react';
import SideButton from './SideButton';

const Container = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  justify-content: space-between;
`;

const Header: FC = () => (
  <Container>
    <div />
    <SideButton />
  </Container>
);

export default Header;
