import React from 'react';
import { Button, Dropdown, Menu } from 'antd';
import { SettingFilled } from '@ant-design/icons';

type SettingsProps = {
  logout:any;
}

function Settings({ logout }:SettingsProps) {
  return (
    <Dropdown
      overlay={(
        <Menu>
          <Menu.Item onClick={logout}>로그아웃</Menu.Item>
        </Menu>
      )}
      trigger={['click']}
      placement="bottomRight"
    >
      <Button shape="circle" icon={<SettingFilled />} />
    </Dropdown>
  );
}

export default Settings;
