import React from 'react';
import styled from 'styled-components';
import Menu from './menu';
import Footer from './footer';

const Main = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: var(--bg);
  p, span, li {
    color: var(--textNormal);
  };
  h1, h2, h3 {
    color: var(--textTitle);
  };
  a {
    color: var(--textLink);
  }
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1;
`;


const Layout = ({ children, page }) => {
  return (
    <Main>
      <Menu page={page} />
      <Content>{children}</Content>
      <Footer />
    </Main>
  )
}

export default Layout