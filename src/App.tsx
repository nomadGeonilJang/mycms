import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from 'layouts/Layout';
import SideBar from 'layouts/SideBar';
import ToonList from 'pages/toon/list/toon_list';
import GlobalStyle from 'components/GlobalStyle';
import Main from 'pages/main/main';

const MENUS = [
  { id: 'main', title: '메인메뉴', links: [{ label: 'hello1', to: '/' }] },
  { id: 'todo', title: 'Toon List', links: [{ label: 'Toon List', to: '/toon' }, { label: 'Toon Add', to: '/toon/add' }] },
];

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Router>
          <SideBar menus={MENUS} />
          <Switch>
            <Route path="/toon">
              <ToonList />
            </Route>
            <Route path={['/', '/money']}>
              <Main />
            </Route>
          </Switch>
        </Router>
      </Layout>
    </>
  );
}

export default App;
