import * as React from 'react';
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom';
import Home from './routes/Home';
import Journey from './routes/Journey';
import Search from './routes/Search';
import Header from './components/Header';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  max-width: 1400px;
`;

const Router = () => (
  <BrowserRouter>
    <Container>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/journey" component={Journey} />
        <Route path="/search/:keyword" exact component={Search} />
        <Redirect from="*" to="/" />
      </Switch>
    </Container>
  </BrowserRouter>
);

export default Router;
