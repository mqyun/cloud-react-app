import React from 'react';
import { RouteComponentProps } from 'react-router';

import { Button } from 'antd';
import { IRootState, IRootDispatch, connect } from '@store/index';
import routerTree from '@src/config/router/router-tree';

const mapState = (rootState: IRootState) => {
  return {};
};

const mapDispatch = (rootDispatch: IRootDispatch) => {
  return {};
};

/**
 * @description 路由参数 Props 类型声明
 */
type RouterProps = RouteComponentProps<any>;

/**
 * @description 映射状态（从 store 中获取某些状态并传递给当前组件）类型声明
 */
type MapStateProps = ReturnType<typeof mapState>;

/**
 * @description 组件派发 action 集合的类型声明
 */
type mapDispatchProps = ReturnType<typeof mapDispatch>;

/**
 * @description 组件最终接收的所有 Props 类型声明
 */
type IProps = RouterProps & MapStateProps & mapDispatchProps;

const Login = (props: IProps) => {
  const { history } = props;

  return <Button onClick={() => history.push(routerTree.home)}>登录</Button>;
};

export default connect(mapState, mapDispatch)(Login);
