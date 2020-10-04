import reducers from './reducers';
import effects from './effects';

import { IState } from './declaration';
import { createModel } from '@cloud-library/utils/store';

const initState: IState = {
  loginStatus: 0,
};

export default createModel({
  name: 'login',
  state: initState,
  reducers,
  effects,
});
