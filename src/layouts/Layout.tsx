import React from 'react';
import styled from 'styled-components';

import TopBar from 'layouts/TopBar';
import SideBar from 'layouts/SideBar';

function Layout({ children }:any) {
  return (
    <>
      <TopBar />
      <Main>
        {children}
      </Main>
    </>
  );
}

const Main = styled.main``;

export default Layout;
