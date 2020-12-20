import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Col, PageHeader, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { RootReducer } from 'pages/career/store';
import { userActions } from 'pages/career/store/reducers/userReducer';

function User() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { name } = useParams<{name:string}>();

  const user = useSelector((state:RootReducer) => state.user.user);

  useEffect(() => {
    dispatch(userActions.fetchUser(name));
  }, []);

  return (
    <Row justify="center">
      <Col xs={24} md={20} lg={14}>
        <PageHeader title="사용자 정보" onBack={history.goBack}>
          {user?.name}
        </PageHeader>
      </Col>
    </Row>
  );
}

export default User;
