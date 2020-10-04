import React from 'react';
import { RouteComponentProps } from 'react-router';

import { Button } from 'antd';
import routerTree from '@src/config/router/router-tree';

const Home = (props: RouteComponentProps) => {
  const { history } = props;

  return (
    <Button type="primary" onClick={() => history.replace(routerTree.login)}>
      首页，去登录
    </Button>
  );
};

export default Home;
