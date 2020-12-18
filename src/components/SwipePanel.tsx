import React from 'react';
import { Box } from '@material-ui/core';
import styled from 'styled-components';

import { Margin } from 'theme/Margin';
import { Padding } from 'theme/Padding';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}
export default function SwipePanel(props: TabPanelProps) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <Panel
      className="panel"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div className="container">
          { children }
        </div>
      )}
    </Panel>
  );
}

const Panel = styled.div`
  padding:${Padding.SM};

 .container{
   display:grid;
   grid-template-columns:1fr 1fr 1fr;
   grid-gap:${Margin.SM};
 }
  
`;
