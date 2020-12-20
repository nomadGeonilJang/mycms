import { SearchOutlined } from '@ant-design/icons';
import { AutoComplete, Input } from 'antd';
import React from 'react';

function SearchInput() {
  const setKeyword = (value:any) => {};
  const goToUser = (value:any) => {};

  return (
    <AutoComplete
      value={keyword}
      onChange={setKeyword}
      onSelect={goToUser}
      style={{ width: '100%' }}
      options={[]}
      autoFocus
    >
      <Input size="large" placeholder="input here" prefix={<SearchOutlined />} />
    </AutoComplete>
  );
}

export default SearchInput;
