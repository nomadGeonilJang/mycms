import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SearchOutlined } from '@ant-design/icons';
import {
  AutoComplete, Input, Space, Typography,
} from 'antd';

import { RootReducer } from 'pages/career/store';
import { actions } from 'pages/career/store/reducer';

function SearchInput() {
  const dispatch = useDispatch();
  const keyword = useSelector((state:RootReducer) => state.search.keyword);
  const autoCompletes = useSelector((state:RootReducer) => state.search.autoCompletes);

  const setKeyword = (value:any) => {
    if (value !== keyword) {
      dispatch(actions.setValue(value));
      dispatch(actions.fetchAutoComplete(value));
    }
  };
  const goToUser = (value:any) => {};

  return (
    <AutoComplete
      value={keyword}
      onChange={setKeyword}
      onSelect={goToUser}
      style={{ width: '100%' }}
      options={autoCompletes.map((item:any) => ({
        value: item.normalize,
        label: (
          <Space>
            <Typography.Text strong>{item.name}</Typography.Text>
            <Typography.Text type="secondary">{item.department}</Typography.Text>
            <Typography.Text>{item.tag}</Typography.Text>
          </Space>
        ),
      }))}
      autoFocus
    >
      <Input size="large" placeholder="검색어를 입력해 주세요." prefix={<SearchOutlined />} />
    </AutoComplete>
  );
}

export default SearchInput;
