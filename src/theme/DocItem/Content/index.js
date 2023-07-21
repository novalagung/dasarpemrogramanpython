import React from 'react';
import Content from '@theme-original/DocItem/Content';
import Substack from '@site/src/components/Substack';

export default function ContentWrapper(props) {
  return (
    <>
      <Content {...props} />
      <hr />
      <Substack />
    </>
  );
}
