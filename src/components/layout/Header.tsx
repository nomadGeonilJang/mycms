import React, { memo } from 'react';

import ContentHeader from './ContentHeader';

interface Props {
  title: string;
  subTitle: string;
  children?: any;
}

function Header({
  title,
  subTitle,
  children,
}: Props) {
  return (
    <ContentHeader title={title} subTitle={subTitle}>
      {children}
    </ContentHeader>
  );
}

export default memo(Header);
