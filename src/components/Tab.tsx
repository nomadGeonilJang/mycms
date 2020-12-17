import React from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { Color } from 'theme/Color';

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

type FullWidthTabsProps = {
  onClickTab:Function,
  tabs:{label:string}[];
}

export default function FullWidthTabs({ onClickTab, tabs }:FullWidthTabsProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
    onClickTab(newValue);
  };

  return (
    <Container>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          {tabs.map((tab, index:number) => <Tab label={tab.label} {...a11yProps(index)} />)}
        </Tabs>
      </AppBar>
    </Container>
  );
}

const Container = styled.div`

.MuiTab-textColorPrimary.Mui-selected{
  color:${Color.Green}
}

.MuiTabs-indicator{
  background-color:${Color.Green}
}
`;
