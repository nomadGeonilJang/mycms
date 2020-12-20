import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  Col, PageHeader, Row, Descriptions, Typography,
} from 'antd';
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
          {user && (
            <Descriptions layout="vertical" bordered column={1}>
              <Descriptions.Item label="이름">
                <Typography.Text>{user.name}</Typography.Text>
              </Descriptions.Item>
              <Descriptions.Item label="소속">
                {user.department}
              </Descriptions.Item>
              <Descriptions.Item label="태그">
                {user.tag}
              </Descriptions.Item>
              <Descriptions.Item label="수정내역">
                수정내역
              </Descriptions.Item>
            </Descriptions>
          )}
        </PageHeader>
      </Col>
    </Row>
  );
}

export default User;
