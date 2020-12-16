import React from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from 'layout/Layout';
import MainNav from 'layout/MainNav';
import theme from 'layout/theme';
import Me from 'pages/post/me/me';

const MENU_POST = [
  { name: '게시글 확인', to: '/post' },
];

const MENU_DISCOUNT = [{ name: '할인', to: '/promotion/discount-list' }];
const MENU_STICKER = [{ name: '스티커', to: '/sticker/sticker-list' }];

const CATEGORY_PRODUCT = {
  name: '게시글',
  open: 'post',
  subCategory: [MENU_POST],
};

const CATEGORY_PROMOTION = {
  name: '프로모션',
  open: 'promotion',
  subCategory: [MENU_DISCOUNT, MENU_STICKER],
};

const CATEGORIES = [CATEGORY_PRODUCT, CATEGORY_PROMOTION];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route path="/login">
            <div>로그인</div>
          </Route>
          <Layout>
            <MainNav categories={CATEGORIES} />
            <Switch>
              <Route path="/post">
                <Me />
              </Route>
            </Switch>
          </Layout>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
