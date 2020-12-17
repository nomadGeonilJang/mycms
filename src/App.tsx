import React from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import theme from 'components/layout/theme';
import Me from 'pages/post/me/me';
import Layout from 'layouts/Layout';
import SideBar from 'layouts/SideBar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <SideBar />
          <Switch>
            <Route path="post">
              <Me />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
