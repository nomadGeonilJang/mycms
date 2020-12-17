import React from 'react';
import styled from 'styled-components';

import TopBar from 'layouts/TopBar';

function Layout({ children }:any) {
  return (
    <Container>
      <TopBar />
      <Main>
        {children}
      </Main>
    </Container>
  );
}

const Container = styled.div`
*{
  font-family: 'Nanum Gothic', sans-serif;
}

  margin: 0;
  height: 100%;
  overflow: hidden;
`;

const Main = styled.main`
  height:100%;
  width:980px;
  margin:auto;
`;

export default Layout;
