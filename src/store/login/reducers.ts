import * as types from './action-types';
import { IState } from './declaration';

export default {
  /**
   * @description 设置登录状态
   */
  [types.SET_LOGIN_STATUS](state: IState, payload: 0 | 1) {
    state.loginStatus = payload;
    return state;
  },
};
