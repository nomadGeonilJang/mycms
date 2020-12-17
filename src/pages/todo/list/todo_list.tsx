import React, { useState } from 'react';
import styled from 'styled-components';
import SwipeableViews from 'react-swipeable-views';

import SwipePanel from 'components/SwipePanel';
import Tab from 'components/Tab';

function ToDoList() {
  const [currentTab, setCurrentTab] = useState(0);
  const handleClickTab = (tab:any) => setCurrentTab(tab);

  return (
    <Container>
      <Tab onClickTab={handleClickTab} tabs={[{ label: 'item1' }, { label: 'item2' }, { label: 'item3' }]} />
      <SwipeableViews
        axis="x"
        index={currentTab}
      >
        <SwipePanel value={currentTab} index={0} dir="x">
          Item one
        </SwipePanel>
        <SwipePanel value={currentTab} index={1} dir="x">
          Item Two
        </SwipePanel>
        <SwipePanel value={currentTab} index={2} dir="x">
          Item Three
        </SwipePanel>
      </SwipeableViews>
    </Container>
  );
}

const Container = styled.div`
  margin-top:30px;
  height:100%;
  background-color:saddlebrown;
`;
export default ToDoList;
