import React from 'react';
import styled from 'styled-components';
import { Tab, Tabs } from '@material-ui/core';
import {
  Route, Switch, useHistory, useLocation,
} from 'react-router-dom';

import MainSide from 'pages/main/main_side';
import { Color } from 'theme/Color';
import { Margin } from 'theme/Margin';
import { Padding } from 'theme/Padding';
import MainShopping from 'pages/main/main_shopping';

function Main() {
  const location = useLocation();
  const [value, setValue] = React.useState(TabMenus.findIndex((item) => location.pathname.includes(item.path)));

  const history = useHistory();
  const handleChange = (event: any, newValue: number) => {
    history.push(TabMenus[newValue].path);
    setValue(newValue);
  };

  return (
    <MainSection>
      <MainSide />
      <Article>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          {TabMenus.map((tab) => <Tab label={tab.label} />)}
        </Tabs>
        <Switch>
          <Route path="/money/shopping">
            <MainShopping />
          </Route>
          <Route path="/money/content">
            <section>콘텐츠</section>
          </Route>
          <Route path="/money/qr">
            <section>qr</section>
          </Route>
          <Route path="/money/booking">
            <section>예약</section>
          </Route>
          <Route path="/money/card">
            <section>제휴</section>
          </Route>
        </Switch>
      </Article>
    </MainSection>
  );
}

const MainSection = styled.section`
  display:grid;
  grid-template-columns:repeat(12,1fr);
  padding-top:40px;
  height:100%;
  grid-gap:40px;

`;

const Article = styled.article`
    grid-column:4/13;

    .MuiTabs-root{
      background-color:#4E5A76;
      
    }
    .MuiTab-textColorPrimary{
      color:${Color.DarkGrapText};
    }
    .MuiTab-textColorPrimary.Mui-selected{
      color:${Color.White};
      background-color:${Color.DarkGray};
    }
    .MuiTabs-flexContainer{
      display:flex;
      button{
        flex:1;
      }
    }
`;

const TabMenus = [
  { id: '쇼핑', label: '쇼핑', path: '/money/shopping' },
  { id: '콘텐츠', label: '콘텐츠', path: '/money/content' },
  { id: 'QR결제', label: 'QR결제', path: '/money/qr' },
  { id: '예약/스마트주문', label: '예약/스마트주문', path: '/money/booking' },
  { id: '제휴카드', label: '제휴카드', path: '/money/card' },
];

export default Main;
