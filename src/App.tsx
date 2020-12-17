import React from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from 'layouts/Layout';
import SideBar from 'layouts/SideBar';
import ToDoList from 'pages/todo/list/todo_list';
import GlobalStyle from 'components/GlobalStyle';

const MENUS = [
  { id: 'main', title: '메인메뉴', links: [{ label: 'hello1', to: '/' }] },
  { id: 'todo', title: '할일 목록', links: [{ label: '할 일 목록', to: '/todo' }, { label: '할 일 추가', to: '/todo/add' }] },
];

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Router>
          <SideBar menus={MENUS} />
          <Switch>
            <Route path="/todo">
              <ToDoList />
            </Route>
          </Switch>
        </Router>
      </Layout>
    </>
  );
}

export default App;
