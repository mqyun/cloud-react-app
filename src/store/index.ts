import { init, RematchRootState, RematchDispatch } from '@rematch/core';
import immerPlugin from '@rematch/immer';
import loadingPlugin from '@rematch/loading';

import { IPluginLoading } from '@cloud-library/declaration/rematch-loading-declaration';

import { connect as reduxConnect } from 'react-redux';
import * as models from './models';

const immer = immerPlugin();
const loading = loadingPlugin({});

const rootModels = {
  ...models,
};

const store = init({
  plugins: [immer, loading],
});

/**
 * @description rematch store 类型声明
 */
export type IStore = typeof store;
/**
 * @description rematch state 类型声明
 */
export type IRootState = RematchRootState<typeof rootModels> &
  IPluginLoading<typeof rootModels>;
/**
 * @description rematch dispatch 类型声明
 */
export type IRootDispatch = RematchDispatch<typeof rootModels>;

export const connect = reduxConnect as any;

export default store;
