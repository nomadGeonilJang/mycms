import React, { useState } from 'react';
import styled from 'styled-components';
import SwipeableViews from 'react-swipeable-views';

import SwipePanel from 'components/SwipePanel';
import Tab from 'components/Tab';
import MediaCard from 'components/Card';
import { ToonDatas } from 'pages/toon/list/constants/toon_datas';

import { ToonLinks } from './toon_list.type';

function ToonList() {
  const [currentTab, setCurrentTab] = useState(0);
  const handleClickTab = (tab:any) => setCurrentTab(tab);

  return (
    <Container>
      <Tab onClickTab={handleClickTab} tabs={Object.values(ToonLinks).map((label:string) => ({ label }))} />
      <div className="panel-container">
        <SwipeableViews
          axis="x"
          index={currentTab}
        >
          {Object.keys(ToonDatas).map((key, index) => (
            <SwipePanel key={key} value={currentTab} index={index} dir="x">
              {(ToonDatas as any)[key].map((item:any) => <MediaCard key={item.id} card={item} />)}
            </SwipePanel>
          ))}
        </SwipeableViews>
      </div>
    </Container>
  );
}

const Container = styled.div`
  margin-top:30px;
  height:100%;
  

  .panel-container{
    /* height:400px; */
    

    &>div{
      height:700px;
    }
  }
`;
export default ToonList;
