import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'antd/dist/antd.css';
import Layout from 'layouts/Layout';
import SideBar from 'layouts/SideBar';
import ToonList from 'pages/toon/list/toon_list';
import GlobalStyle from 'components/GlobalStyle';
import Main from 'pages/main/main';
import Search from 'pages/career/search/search';
import store from 'pages/career/store';

const MENUS = [
  { id: 'main', title: '메인메뉴', links: [{ label: 'hello1', to: '/' }] },
  { id: 'todo', title: 'Toon List', links: [{ label: 'Toon List', to: '/toon' }, { label: 'Toon Add', to: '/toon/add' }] },
  { id: 'career', title: '담당자', links: [{ label: '담당자', to: '/career' }] },
];

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Layout>
        <Router>
          <SideBar menus={MENUS} />
          <Switch>
            <Route path="/toon">
              <ToonList />
            </Route>
            <Route path="/career">
              <Search />
            </Route>
            <Route path={['/', '/money']}>
              <Main />
            </Route>
          </Switch>
        </Router>
      </Layout>
    </Provider>
  );
}

export default App;
