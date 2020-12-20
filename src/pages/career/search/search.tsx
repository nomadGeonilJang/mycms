import React from 'react';
import { Row, Col, Typography } from 'antd';

import Settings from 'pages/career/search/component/settings';
import SearchInput from 'pages/career/search/component/search_input';

function Search() {
  return (
    <>
      <Row justify="end" style={{ padding: 20 }}>
        <Col>
          <Settings logout={() => {}} />
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: 100 }}>
        <Col>
          <Typography.Title style={{ fontFamily: 'Caligrahhy' }}>찾아야 한다.</Typography.Title>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: 50 }}>
        <Col span={12}><SearchInput /></Col>
      </Row>
    </>
  );
}

export default Search;
